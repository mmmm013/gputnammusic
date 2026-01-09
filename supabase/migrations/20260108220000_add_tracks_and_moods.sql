-- Migration: Add tracks table with moods and genres for GPM music library

-- Create tracks table
create table if not exists tracks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist_id uuid references artists(id),
  artist_name text not null,
  album text,
  duration integer, -- in seconds
  release_year integer,
  
  -- Audio file storage
  storage_path text not null, -- path in Supabase Storage
  file_url text, -- public or signed URL
  file_size bigint, -- in bytes
  
  -- Mood and genre classification
  moods text[] not null default '{}', -- array of mood tags
  genres text[] not null default '{}', -- array of genre tags
  energy_level integer check (energy_level >= 1 and energy_level <= 10), -- 1-10 scale
  tempo integer, -- BPM
  
  -- Metadata
  description text,
  lyrics text,
  is_proprietary boolean default true, -- GPM exclusive tracks
  is_featured boolean default false,
  play_count integer default 0,
  
  -- Pricing
  is_free boolean default false,
  price_id text references prices(id),
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table tracks enable row level security;

-- Public can view all tracks
create policy "Anyone can view tracks" on tracks
  for select using (true);

-- Only authenticated users can modify (admins)
create policy "Authenticated users can insert tracks" on tracks
  for insert with check (auth.role() = 'authenticated');

-- Create indexes for efficient mood/genre searches
create index if not exists tracks_moods_idx on tracks using gin(moods);
create index if not exists tracks_genres_idx on tracks using gin(genres);
create index if not exists tracks_artist_id_idx on tracks(artist_id);
create index if not exists tracks_energy_level_idx on tracks(energy_level);

-- Create updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger update_tracks_updated_at
  before update on tracks
  for each row
  execute function update_updated_at_column();

-- Seed some sample GPM tracks
insert into tracks (title, artist_name, moods, genres, energy_level, description, is_proprietary) values
  ('Dreamer''s Dance', 'Gregory D. Putnam', '{dreamy,relaxing,peaceful}', '{ambient,electronic}', 3, 'A gentle ambient piece perfect for meditation', true),
  ('Electric Sunrise', 'Gregory D. Putnam', '{energetic,uplifting,happy}', '{electronic,pop}', 8, 'High-energy electronic track to start your day', true),
  ('Midnight Reflection', 'Gregory D. Putnam', '{melancholic,introspective,calm}', '{piano,classical}', 2, 'Contemplative piano composition', true),
  ('DISCO Nights', 'Gregory D. Putnam', '{fun,danceable,groovy}', '{disco,funk}', 9, 'From the DISCO Playlist collection', true),
  ('Zen Garden', 'Gregory D. Putnam', '{peaceful,meditative,serene}', '{ambient,new age}', 1, 'Ultimate relaxation soundtrack', true);

-- Add realtime subscription for tracks
drop publication if exists supabase_realtime;
create publication supabase_realtime for table products, prices, tracks;
