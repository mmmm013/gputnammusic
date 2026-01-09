import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

const SYSTEM_PROMPT = `You are GPM Assistant (985), a friendly music AI for G Putnam Music. 
Your role is to:
- Help users discover music based on moods and preferences
- Suggest tracks and playlists
- Answer questions about music streaming
- Guide users through the platform's features (8 MOODs, voice control, etc)
- Be encouraging and fun!

Available MOODs: Relaxing, Energetic, Happy, Melancholic, Focus, Party, Peaceful, Groovy

If user mentions a mood, suggest it. Be conversational and helpful.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Build conversation history
    const conversationHistory = [
      ...history,
      { role: 'user', parts: [{ text: message }] }
    ];

    // Start chat session
    const chat = model.startChat({
      history: history.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    });

    // Generate response with system prompt context
    const fullMessage = history.length === 0 
      ? `${SYSTEM_PROMPT}\n\nUser: ${message}`
      : message;

    const result = await chat.sendMessage(fullMessage);
    const response = await result.response;
    const botResponse = response.text();

    return NextResponse.json({
      response: botResponse,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      {
        response: "I'm having trouble understanding. Try asking about a mood like 'relaxing' or 'energetic'! 🎵"
      },
      { status: 200 }
    );
  }
}
