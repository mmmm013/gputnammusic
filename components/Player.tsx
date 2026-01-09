'use client';

import { useState } from 'react';

export default function Player() {
  // This is a placeholder. We will connect this to your Supabase songs next.
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white">
          <p className="font-bold">Select a track</p>
          <p className="text-xs text-neutral-400">G Putnam Music</p>
        </div>
        
        <div className="flex gap-4">
          <button className="text-amber-500 hover:text-amber-400">
            {/* Simple Play Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
