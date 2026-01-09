'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePlayer } from './PlayerContext';

export default function PersistentPlayer() {
  const { isPlaying, currentTrack, togglePlay } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">Now Streaming</span>
        <span className="text-lg text-white font-medium">G Putnam Music (Live)</span>
      </div>
      
      <button
        onClick={togglePlay}
        className="h-14 w-14 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 text-black transition-all"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      
      <audio ref={audioRef} src={currentTrack} />
    </div>
  );
}
