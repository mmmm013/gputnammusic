import { NextResponse } from 'next/server';
import { createSignedUrl } from '../../../utils/supabase/storage';
export async function GET(req: Request) {
  try {
    const urlObj = new URL(req.url);
    const path = urlObj.searchParams.get('path');
    if (!path) return new Response('Missing path parameter', { status: 400 });

    // Create a signed URL valid for 10 minutes
    const signed = await createSignedUrl('tracks', path, 60 * 10);
    return NextResponse.redirect(signed, 302);
  } catch (err) {
    console.error('stream route error', err);
    return new Response('Server error', { status: 500 });
  }
}
