import { createClient } from '@/utils/supabase/server';
export default async function AboutPage() {
  const supabase = createClient();

  try {
    const { data } = await supabase.from('artists' as any).select('*').limit(1).single();

    const artist = data || {
      name: 'Gregory D. Putnam',
      bio: `Gregory D. Putnam is a writer and composer focused on intimate cinematic pop.
He creates and performs original music for listeners who value lyrical storytelling and emotional resonance. This site features only proprietary music by Gregory.`,
      image: null
    };

    return (
      <main className="max-w-3xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center text-center gap-4">
          {artist.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={artist.image} alt={artist.name} className="rounded-full w-48 h-48 object-cover" />
          ) : (
            <div className="rounded-full w-48 h-48 bg-gray-200 flex items-center justify-center text-xl font-bold">GD</div>
          )}
          <h1 className="text-3xl font-extrabold">{artist.name}</h1>
          <p className="text-gray-700 whitespace-pre-line">{artist.bio}</p>
        </div>
      </main>
    );
  } catch (err) {
    return (
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-extrabold">Gregory D. Putnam</h1>
        <p className="text-gray-700">Writer, composer, and curator of proprietary music.</p>
      </main>
    );
  }
}
