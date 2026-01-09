import Link from 'next/link';
import { Leaf, Tractor, FileText, Lock, BarChart3, ArrowRight, Sprout } from 'lucide-react';

export default function PortalHome() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3F2C22] p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-12 border-b-4 border-[#166534] pb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-[#166534] font-serif">LCF PORTAL</h1>
          <p className="text-sm font-bold opacity-60">Internal Operations Center</p>
        </div>
        <Link href="/" className="text-sm font-bold hover:underline opacity-60">
          ← Back to Public Site
        </Link>
      </header>

      {/* OPERATIONS CENTER */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 opacity-60">
          <Tractor size={24} />
          <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Field Operations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ACTION CARD: Field Report */}
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
            <h3 className="text-xl font-bold mb-2 text-gray-500">Compliance</h3>
            <p className="text-sm text-gray-400">Archive for The Committee.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
