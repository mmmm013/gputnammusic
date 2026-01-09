'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type PlayerContextType = {
  isPlaying: boolean;
  currentTrack: string;
  trackTitle: string;
  togglePlay: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack] = useState('/assets/Front Porch Dobro 01.caf');
  const [trackTitle] = useState('G Putnam Music Live');

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <PlayerContext.Provider value={{ isPlaying, currentTrack, trackTitle, togglePlay }}>
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