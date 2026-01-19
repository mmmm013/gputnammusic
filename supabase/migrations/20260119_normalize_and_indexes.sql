-- Trigger to normalize media_url/storage_path
CREATE OR REPLACE FUNCTION public.normalize_playlist_track()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  v_media_url text;
  v_storage_path text;
  v_url text;
  v_host text;
BEGIN
  v_media_url := COALESCE(NEW.media_url, '');
  IF v_media_url = '' THEN
    IF COALESCE(NEW.storage_path, '') <> '' THEN
      NEW.media_url := 'https://fp-media/' || regexp_replace(NEW.storage_path, '^/+', '');
    END IF;
  ELSE
    BEGIN
      v_url := v_media_url;
      v_host := split_part(split_part(v_url, '://', 2), '/', 1);
      IF position('fp-media' IN v_host) > 0 THEN
        NEW.storage_path := regexp_replace(split_part(v_url, v_host, 2), '^/+', '');
      ELSE
        NEW.storage_path := regexp_replace(split_part(v_url, v_host, 2), '^/+', '');
        NEW.media_url := 'https://fp-media/' || COALESCE(NEW.storage_path, '');
      END IF;
    EXCEPTION WHEN others THEN
      NEW.storage_path := regexp_replace(v_media_url, '^/+', '');
      NEW.media_url := 'https://fp-media/' || NEW.storage_path;
    END;
  END IF;

  IF NEW.branding_config IS NULL OR jsonb_typeof(NEW.branding_config) <> 'object' THEN
    NEW.branding_config := '{}'::jsonb;
  END IF;
  IF (NEW.branding_config ? 'theme') IS FALSE THEN
    NEW.branding_config := jsonb_set(NEW.branding_config, '{theme}', to_jsonb('default'::text), true);
  END IF;
  IF (NEW.branding_config ? 'primary_color') IS FALSE THEN
    NEW.branding_config := jsonb_set(NEW.branding_config, '{primary_color}', to_jsonb('#000000'::text), true);
  END IF;
  IF (NEW.branding_config ? 'secondary_color') IS FALSE THEN
    NEW.branding_config := jsonb_set(NEW.branding_config, '{secondary_color}', to_jsonb('#FFFFFF'::text), true);
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_normalize_playlist_track ON public.playlist_tracks;
CREATE TRIGGER trg_normalize_playlist_track
BEFORE INSERT OR UPDATE ON public.playlist_tracks
FOR EACH ROW
EXECUTE FUNCTION public.normalize_playlist_track();

-- Supporting indexes
CREATE INDEX IF NOT EXISTS idx_playlist_tracks_id ON public.playlist_tracks(id);
CREATE INDEX IF NOT EXISTS idx_playlist_tracks_storage_path ON public.playlist_tracks(storage_path);