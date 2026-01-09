import Link from 'next/link';
import { Leaf, Tractor, FileText, Lock, BarChart3, ArrowRight, Sprout } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3F2C22] p-6 md:p-12">
      
      {/* BRAND HEADER */}
      <header className="max-w-6xl mx-auto mb-20 border-b-4 border-[#166534] pb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-[#166534] font-serif">
              L COLE FARMS
            </h1>
            <p className="text-2xl opacity-80 italic font-serif text-[#3F2C22]">
              "Family & Farm Forever"
            </p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-[#166534] text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
              EST. 100+ YEARS
            </div>
            <p className="font-bold text-lg">Greenfield, Illinois</p>
          </div>
        </div>
      </header>

      {/* SECTION 1: THE STRATEGY (Public Artifacts) */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        
        {/* Card: Regenerative Hub (from Addendum) */}
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-6 text-[#166534]">
            <div className="p-3 bg-[#E8F5E9] rounded-xl group-hover:bg-[#166534] group-hover:text-white transition-colors">
              <Sprout size={32} />
            </div>
            <h2 className="text-3xl font-bold font-serif">Regenerative Hub</h2>
          </div>
          <p className="mb-8 text-lg leading-relaxed opacity-80">
            Serving as the agricultural anchor for Greenfield. We are positioning the farm as a Midwest leader in regenerative practices, complementing the creative anchor of the Cole Family Recording Studios.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Leaf size={20} className="text-[#166534]" />
              <span className="font-medium">POC 90ac: Demonstration Fields</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Leaf size={20} className="text-[#166534]" />
              <span className="font-medium">USDA & Grant Integration</span>
            </div>
          </div>
        </div>

        {/* Card: Community Impact (from Paradigm PDF) */}
        <div className="bg-[#3F2C22] text-[#FDFBF7] p-10 rounded-3xl shadow-lg relative overflow-hidden">
          {/* Decorative Background Opacity */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <BarChart3 size={200} />
          </div>

          <div className="flex items-center gap-4 mb-6 text-[#4ADE80]">
            <div className="p-3 bg-white/10 rounded-xl">
              <BarChart3 size={32} />
            </div>
            <h2 className="text-3xl font-bold font-serif">Community Impact</h2>
          </div>
          <p className="mb-8 text-lg leading-relaxed opacity-90">
            A cornerstone business to revitalize the Square. We are committed to creating local employment, fostering culture, and supporting the rural economy through 2026.
          </p>
          <div className="mt-auto pt-6 border-t border-white/20 flex justify-between items-center">
             <span className="text-xs font-mono uppercase tracking-widest opacity-70">
              Strategic Plan: Active
            </span>
             <span className="bg-white/10 px-3 py-1 rounded text-xs font-bold">
              INVESTOR VIEW
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: OPERATIONS CENTER (Internal Artifacts) */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 opacity-60">
          <Tractor size={24} />
          <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Field Operations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ACTION CARD: Field Report (from Monthly Report Doc) */}
          <Link href="#" className="group relative bg-white p-8 rounded-2xl border-2 border-[#166534] hover:bg-[#166534] hover:text-white transition-all duration-300 shadow-md">
            <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded uppercase group-hover:bg-white group-hover:text-[#166534]">
              Priority Action
            </div>
            <div className="mb-4 text-[#166534] group-hover:text-white">
              <FileText size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Monthly Field Report</h3>
            <p className="text-sm opacity-70 group-hover:opacity-100 mb-4">
              Submit Klayton's "Green/Yellow/Red" status update.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold group-hover:underline">
              Launch Tool <ArrowRight size={16} />
            </div>
          </Link>

          {/* Compliance Archive */}
          <div className="bg-[#F3F4F6] p-8 rounded-2xl border border-dashed border-gray-300 opacity-75">
            <div className="mb-4 text-gray-400">
              <Lock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-500">Compliance & Leases</h3>
            <p className="text-sm text-gray-400">
              Internal archive for The Committee (Lisa, Emmy, Spencer).
            </p>
          </div>

          {/* Financials */}
          <div className="bg-[#F3F4F6] p-8 rounded-2xl border border-dashed border-gray-300 opacity-75">
            <div className="mb-4 text-gray-400">
              <Lock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-500">Financials</h3>
            <p className="text-sm text-gray-400">
              Restricted Access. <br/> (Dan Rutigliano Only)
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-32 pt-12 border-t border-[#3F2C22]/10 text-center text-[#3F2C22]/40 text-sm">
        <p className="mb-2">© 2026 L Cole Farms Digital Enterprise | Putnam's Paradigm, LLC</p>
        <p className="font-mono text-xs">Vercel Deployment: v1.0.0 | Status: GREEN</p>
      </footer>
    </main>
  );
}