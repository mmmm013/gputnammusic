import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const createSignedUrl = async (filePath: string) => {
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
  const { data, error } = await supabase.storage.from('audio').createSignedUrl(filePath, 3600);
  if (error) return null;
  return { signedUrl: data?.signedUrl };
};
