"use client";
import { createContext } from 'react';

export const PlayerContext = createContext(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  return <PlayerContext.Provider value={null}>{children}</PlayerContext.Provider>;
}
