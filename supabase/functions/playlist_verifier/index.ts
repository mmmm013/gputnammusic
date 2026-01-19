// playlist_verifier/index.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const playlistVerifier = async () => {
  try {
    const { data, error } = await supabase.from('playlist_tracks').select('id, media_url, moods');

    if (error) {
      console.error('Error fetching playlist tracks:', error);
      return { success: false, message: 'Error fetching playlist tracks.', error };
    }

    console.log('Fetched playlist tracks:', data);

    // Add your custom logic here (e.g., filtering tracks, generating reports, etc.)

    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error in playlist verifier:', err);
    return { success: false, message: 'Unexpected error occurred.', error: err };
  }
};

export default playlistVerifier; 
