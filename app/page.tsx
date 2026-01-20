'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const MOODS = [
  { id: 1, name: 'Melancholy', emoji: '🌙', color: 'from-indigo-400 to-purple-600' },
  { id: 2, name: 'Ethereal', emoji: '✨', color: 'from-purple-400 to-pink-400' },
  { id: 3, name: 'Focus', emoji: '🧠', color: 'from-green-400 to-emerald-600' },
  { id: 4, name: 'Uplifting', emoji: '☀️', color: 'from-yellow-400 to-orange-400' },
  { id: 5, name: 'High Energy', emoji: '⚡', color: 'from-red-400 to-orange-600' },
  { id: 6, name: 'Late Night', emoji: '🌃', color: 'from-indigo-600 to-purple-900' },
  { id: 7, name: 'Sunrise', emoji: '🌅', color: 'from-yellow-300 to-orange-500' },
  { id: 8, name: 'Bot', emoji: '🤖', color: 'from-cyan-400 to-blue-500' }
];

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{role: string; content: string}>>([]);
  const [chatInput, setChatInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [tracks, setTracks] = useState([]);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize voice recognition
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleVoiceCommand(transcript);
      };
    }
  }, []);

  const handleVoiceCommand = async (command: string) => {
    setIsListening(false);
    setChatMessages(prev => [...prev, { role: 'user', content: `🎤 ${command}` }]);
    
    // Check if command is a mood search
    const moodCommand = MOODS.find(m => command.toLowerCase().includes(m.name.toLowerCase()));
    if (moodCommand) {
      await searchMood(moodCommand.name);
    } else {
      await sendBotMessage(command);
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const searchMood = async (mood: string) => {
    setSelectedMood(mood);
    try {
      const res = await fetch(`/api/moods?mood=${encodeURIComponent(mood)}`);
      const data = await res.json();
      setTracks(data.tracks || []);
      setChatMessages(prev => [...prev, {
        role: 'bot',
        content: `Found ${data.tracks?.length || 0} tracks for ${mood} mood! 🎵`
      }]);
    } catch (err) {
      console.error(err);
    }
  };

  const sendBotMessage = async (message: string) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: chatMessages })
      });
      const data = await res.json();
      setChatMessages(prev => [...prev, { role: 'bot', content: data.response }]);
    } catch (err) {
      setChatMessages(prev => [...prev, {
        role: 'bot',
        content: 'Hi! I\'m your music assistant. Try asking about moods or say "play relaxing music"!'
      }]);
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    await sendBotMessage(chatInput);
    setChatInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-yellow-200">
      {/* Menu */}
      <nav className="bg-amber-900/90 backdrop-blur-sm text-white px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">GPM 🎵</h1>
          <div className="flex items-center gap-6">
            <Link href="#moods" className="text-sm hover:text-amber-300">MOODs</Link>
            <Link href="#playlist" className="text-sm hover:text-amber-300">Playlist</Link>
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="bg-amber-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700"
            >
              💬 Chat AI
            </button>
            <button
              onClick={startListening}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                isListening ? 'bg-red-500 animate-pulse' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isListening ? '🎤 Listening...' : '🎤 Voice'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-serif font-bold text-amber-900 mb-6">
            Dream the Stream
          </h2>
          <p className="text-2xl text-amber-800 mb-8">
            Discover music that matches your mood
          </p>
          <p className="text-gray-700">Powered by AI • Voice Control Active</p>
        </div>
      </section>

      {/* 8 MOODs Grid */}
      <section id="moods" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">
            Choose Your MOOD
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MOODS.map(mood => (
              <button
                key={mood.id}
                onClick={() => searchMood(mood.name)}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${mood.color} text-white shadow-xl hover:scale-105 transition-transform cursor-pointer group ${
                  selectedMood === mood.name ? 'ring-4 ring-white' : ''
                }`}
              >
                <div className="text-6xl mb-4">{mood.emoji}</div>
                <div className="text-xl font-bold">{mood.name}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlist */}
      <section id="playlist" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-amber-900 mb-8 text-center">
            {selectedMood ? `${selectedMood} Tracks` : 'Featured DISCO Playlist'}
          </h3>
          {tracks.length > 0 ? (
            <div className="grid gap-4">
              {tracks.slice(0, 10).map((track: any) => (
                <div key={track.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{track.title}</h4>
                      <p className="text-gray-600">{track.artist_name}</p>
                      <p className="text-sm text-gray-500 mt-2">{track.description}</p>
                    </div>
                    <span className="bg-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                      ⚡ {track.energy_level}/10
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {track.moods?.slice(0, 4).map((m: string) => (
                      <span key={m} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 py-12">
              <p className="text-lg">Select a MOOD above or use voice command to discover music!</p>
              <p className="text-sm mt-2">Try saying: "Play relaxing music" or "Show me energetic tracks"</p>
            </div>
          )}
        </div>
      </section>

      {/* AI Chat Bot - 985 Message System */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
          <div className="bg-amber-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h4 className="font-bold">🤖 GPM Assistant (985)</h4>
            <button onClick={() => setChatOpen(false)} className="text-2xl hover:text-amber-300">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p>👋 Hi! I'm your music assistant.</p>
                <p className="text-sm mt-2">Ask me about moods or use voice!</p>
              </div>
            )}
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-br-none' 
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about music..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 font-medium"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 G Putnam Music. Voice Control Active 🎤</p>
        </div>
      </footer>
    </div>
  );
}
