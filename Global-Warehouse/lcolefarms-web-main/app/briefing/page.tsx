import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Target, Lightbulb, Users, Lock } from 'lucide-react';

export default function BriefingPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3F2C22] font-sans p-6 pb-24">
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#166534] font-bold hover:underline">
          <ArrowLeft size={20} /> Return to Operations Center
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b-2 border-red-100 pb-8">
          <div className="flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-sm mb-4">
            <ShieldAlert size={18} /> Internal Strategy • Do Not Share
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#166534]">Meeting Prep: Marty Travis</h1>
        </header>
        <div className="bg-red-50 p-8 rounded-2xl shadow-sm border border-red-200 mb-12 relative overflow-hidden">
           <div className="absolute top-4 right-4 text-red-200"><Lock size={100} /></div>
           <div className="relative z-10">
             <h2 className="text-2xl font-bold text-red-800 mb-2 flex items-center gap-2"><Lock size={24} /> TOP SECRET: "Rives Boys Ranch"</h2>
             <p className="text-red-900/80 mb-4"><strong>The Loop:</strong> Klayton grows high-nutrient covers (radishes, rye) → Rives cattle graze it → Meat quality becomes superior.</p>
           </div>
        </div>
      </div>
    </main>
  );
}
