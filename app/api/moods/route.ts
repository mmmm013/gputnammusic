import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@/utils/supabase/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mood = searchParams.get('mood');

    if (!mood) {
      return NextResponse.json(
        { error: 'Mood parameter is required' },
        { status: 400 }
      );
    }

    // Initialize Supabase client
    const supabase = createClient();

    // Use Gemini AI to expand mood query into related moods
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Given the mood "${mood}", list 5-7 closely related mood keywords that would help find similar music. Return only comma-separated keywords, no explanations. Example: for "happy" return: joyful,uplifting,cheerful,energetic,bright,positive`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const relatedMoods = response.text()
      .trim()
      .split(',')
      .map(m => m.trim().toLowerCase())
      .filter(m => m.length > 0);

    // Add original mood to search terms
    const searchMoods = [mood.toLowerCase(), ...relatedMoods];

    // Query tracks that match any of the moods
    const { data: tracks, error } = await supabase
      .from('tracks')
      .select('*')
      .overlaps('moods', searchMoods)
      .order('play_count', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch tracks' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      mood,
      relatedMoods,
      tracks: tracks || [],
      count: tracks?.length || 0
    });
  } catch (error) {
    console.error('MOODs API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
