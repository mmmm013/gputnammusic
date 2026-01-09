'use client';
export default function MoodGrid() {
  const moods = ['Melancholy', 'Ethereal', 'Focus', 'Uplifting', 'High Energy', 'Late Night', 'Sunrise', 'Ask The Bot'];
  return (
    <section>
      <h3 style={{textAlign: 'center', color: '#888', marginTop: '40px', letterSpacing: '3px'}}>SELECT YOUR VIBE</h3>
      <div className="mood-grid">
        {moods.map((mood) => (
          <div key={mood} className="mood-card">
            {mood}
          </div>
        ))}
      </div>
    </section>
  );
}
