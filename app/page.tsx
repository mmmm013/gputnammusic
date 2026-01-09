import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-300">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm hover:text-amber-800 transition">Dream the Stream</Link>
            <Link href="#" className="text-sm hover:text-amber-800 transition">Who's stream-1-0</Link>
            <Link href="#" className="text-sm hover:text-amber-800 transition">Archive</Link>
            <Link href="#" className="text-sm hover:text-amber-800 transition">Links</Link>
            <Link href="#" className="text-sm hover:text-amber-800 transition">Accolades</Link>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md text-sm font-medium transition">
            Dream the Stream
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-serif font-bold text-amber-800 mb-4">
                Dream the Stream<br />
                <span className="text-5xl">MOODs</span>
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Discover the revolutionary approach to music streaming that matches
                your exact mood. Our innovative SHAPII platform lets you find the perfect
                soundtrack for every moment.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-gray-800">
                Find Your Perfect Mood
              </h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter any mood (e.g., relaxing, energetic...)"
                  className="flex-1 px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                />
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg">
                Get Music Samples Now
              </button>
            </div>
          </div>

          {/* Right Column - Artist Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-xl">
                {/* Placeholder for artist image */}
                <span className="text-gray-400">Artist Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* DISCO Playlist Section */}
        <div className="mt-24 text-center space-y-6">
          <h2 className="text-4xl font-serif font-bold text-amber-700">
            Explore the DISCO Playlist
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Dive into our ever-growing library of over 100 tracks. With fun animated sounds that
            gives you a listen, you can RUN KICKS and DJ sets. An eternal cornucopia of fun for
            hot mixtape!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-amber-300">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>&copy; 2026 G Putnam Music. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
