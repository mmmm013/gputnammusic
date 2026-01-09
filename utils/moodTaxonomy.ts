// Hardwired MOOD TAXONOMY - NOT CSV DEPENDENT
// Version: 1.0.0 | Last Updated: 2026-01-09

export const MOOD_DATABASE = {
  PRIMARY_MOODS: {
    "HAPPY": {
      id: "HAPPY",
      aliases: ["Joyful", "Uplifted", "Cheerful", "Elated", "Content", "Bright"],
      family: "POSITIVE_ENERGY",
      intensities: ["peaceful joy", "confident happiness", "euphoria"],
      confidence: 0.99
    },
    "SAD": {
      id: "SAD",
      aliases: ["Melancholic", "Sorrowful", "Gloomy", "Reflective", "Bittersweet"],
      family: "INTROSPECTION",
      intensities: ["thoughtful", "wistful", "devastated"],
      confidence: 0.99
    },
    "ENERGETIC": {
      id: "ENERGETIC",
      aliases: ["Upbeat", "Invigorating", "Dynamic", "Motivational", "Pumped"],
      family: "POSITIVE_ENERGY",
      intensities: ["playful", "driving", "explosive"],
      confidence: 0.99
    },
    "CALM": {
      id: "CALM",
      aliases: ["Peaceful", "Serene", "Relaxed", "Tranquil", "Soothing"],
      family: "INTROSPECTION",
      intensities: ["focused", "relaxed", "meditative"],
      confidence: 0.99
    },
    "ROMANTIC": {
      id: "ROMANTIC",
      aliases: ["Sensual", "Intimate", "Tender", "Passionate", "Affectionate"],
      family: "EMOTIONAL_DEPTH",
      intensities: ["flirty", "loving", "passionate"],
      confidence: 0.99
    },
    "AGGRESSIVE": {
      id: "AGGRESSIVE",
      aliases: ["Intense", "Powerful", "Raw", "Edgy", "Provocative"],
      family: "POSITIVE_ENERGY",
      intensities: ["assertive", "commanding", "overwhelming"],
      confidence: 0.99
    },
    "MELANCHOLIC": {
      id: "MELANCHOLIC",
      aliases: ["Wistful", "Nostalgia", "Yearning", "Longing", "Contemplative"],
      family: "INTROSPECTION",
      intensities: ["dreamy", "nostalgic", "mournful"],
      confidence: 0.99
    },
    "MYSTERIOUS": {
      id: "MYSTERIOUS",
      aliases: ["Enigmatic", "Ethereal", "Haunting", "Cryptic", "Hypnotic"],
      family: "EMOTIONAL_DEPTH",
      intensities: ["intriguing", "unsettling", "cryptic"],
      confidence: 0.99
    }
  }
};

export const TRACK_MOOD_MAP = {
  "276-can-you-see-it": { title: "Can You See It?", primaryMood: "HAPPY", secondaryMood: "ENERGETIC", intensity: "moderate", genreMoodFit: 0.92 },
  "276-finding-clarity": { title: "Finding clarity through difficult choices", primaryMood: "CALM", secondaryMood: "MYSTERIOUS", intensity: "moderate", genreMoodFit: 0.88 }
};

export const searchMoodTracks = (searchTerm: string, minTracksRequired: number = 10) => {
  const searchLower = searchTerm.toLowerCase();
  const results = [];

  Object.entries(TRACK_MOOD_MAP).forEach(([trackId, track]) => {
    if (track.primaryMood.toLowerCase() === searchLower) {
      results.push({ ...track, trackId, matchType: "exact" });
    }
  });

  if (results.length < minTracksRequired) {
    const mood = MOOD_DATABASE.PRIMARY_MOODS[searchTerm.toUpperCase()];
    if (mood) {
      Object.entries(TRACK_MOOD_MAP).forEach(([trackId, track]) => {
        if (mood.aliases.some(alias => 
          track.primaryMood.toLowerCase().includes(alias.toLowerCase())
        ) && !results.find(r => r.trackId === trackId)) {
          results.push({ ...track, trackId, matchType: "synonym" });
        }
      });
    }
  }

  return results.slice(0, 50);
};

export default MOOD_DATABASE;
