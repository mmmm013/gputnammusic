# Query: PlayerContext.tsx
# ContextLines: 1

No Results
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type PlayerContextType = {
  isPlaying: boolean;
  currentTrack: string;
  togglePlay: () => void;
  playTrack: (url: string) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Default track URL - Replace with your primary DISCO public link
  const [currentTrack, setCurrentTrack] = useState('YOUR_DEFAULT_DISCO_MP3_URL_HERE');

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const playTrack = (url: string) => {
    setCurrentTrack(url);
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider value={{ isPlaying, currentTrack, togglePlay, playTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}