import Hero from '@/components/Hero';
import MoodGrid from '@/components/MoodGrid';

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div style={{fontWeight: 'bold', letterSpacing: '1px'}}>G PUTNAM MUSIC</div>
        <a href="#" className="btn-gold">JOIN PRIDE 🦁</a>
      </nav>
      <Hero />
      <MoodGrid />
    </main>
  );
}
