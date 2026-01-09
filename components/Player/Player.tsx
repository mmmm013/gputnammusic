'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
// This now correctly points to components/PlayerContext.tsx
import { usePlayer } from '../PlayerContext'; 

export default function PersistentPlayer() {
  const { isPlaying, currentTrack, trackTitle, togglePlay } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(e => console.log("Playback prevented:", e));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
      
      {/* Title */}
      <div className="flex flex-col">
        <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">Now Streaming</span>
        <span className="text-lg text-white font-medium truncate max-w-[200px]">{trackTitle}</span>
      </div>

      {/* Play/Pause Button */}
      <div className="flex items-center gap-6">
        <button onClick={togglePlay} className="h-14 w-14 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-lg transition-all">
          {isPlaying ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
             </svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
             </svg>
          )}
        </button>
      </div>

      {/* Sponsor Button */}
      <div className="hidden md:block">
        <Link href="/sponsor" className="text-sm font-bold text-amber-100 bg-neutral-900 border border-amber-500/50 hover:bg-amber-500 hover:text-black px-6 py-2 rounded-full transition-all">
          Sponsor Project
        </Link>
      </div>

      <audio ref={audioRef} src={currentTrack} />
    </div>
  );
}