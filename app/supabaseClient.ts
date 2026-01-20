# Query: playlistConfig.ts

// 1. BRAND IDENTITY
export const BRAND_IDENTITY = {
  bandName: "Wounded & Willing",
  primaryColor: "#4E98FF",
  theme: "white"
};

// 2. PLAYLIST DATA INTERFACE
export interface DiscoPlaylist {
  id: string;
  title: string;
  tags: string[];
    audioUrl?: string; 
}

// 3. THE AUTOMATED PLAYLIST DATABASE
export const PLAYLIST_DATABASE: DiscoPlaylist[] = [
  // --- SET 1: HIGH ENERGY / ROCK / COUNTRY ---
  {
    id: "25576490",
    title: "Busting Out",
    tags: ["rock", "energy", "intro"]
        audioUrl: "https://YOUR_SUPABASE_URL/storage/v1/object/public/music/busting-out.mp3",
  },
  {
    id: "24894395", // VERIFIED: Rockin Cowboys
    title: "Rockin Cowboys",
    tags: ["rock", "country", "bonus"]
  },
  {
    id: "24920180",
    title: "Cowboy Country",
    tags: ["country", "upbeat", "roots"]
  },

  // --- SET 2: VIBE / POP / MODERN ---
  {
    id: "25576257",
    title: "Clearly",
    tags: ["pop", "vibe", "modern"]
  },
  {
    id: "25576254", 
    title: "Vintage",
    tags: ["retro", "classic", "bonus"]
  },

  // --- SET 3: CHILL / ATMOSPHERIC ---
  {
    id: "23917462",
    title: "Remembering Forgetting",
    tags: ["acoustic", "chill", "reflective"]
  },
  {
    id: "24970835",
    title: "Slight Light",
    tags: ["moody", "atmospheric", "cinematic"]
  }
];

// 4. MAIN FALLBACK INVENTORY (SHINE THE LIGHT)
export const MAIN_INVENTORY: DiscoPlaylist = {
  id: "23705238",
  title: "Shine the Light (STL) - GPM Inventory 11/2025",
  tags: ["inventory", "all"]
};

/**
 * BEHAVIORAL ENGINE
 * Selects the perfect playlist based on User State
 */
export function getPlaylistForUser(userState: 'new' | 'fan' | 'bot'): DiscoPlaylist {
  if (userState === 'bot') return MAIN_INVENTORY;
  
  if (userState === 'fan') {
    const randomIndex = Math.floor(Math.random() * PLAYLIST_DATABASE.length);
    return PLAYLIST_DATABASE[randomIndex];
  }
  
  return MAIN_INVENTORY;
}
