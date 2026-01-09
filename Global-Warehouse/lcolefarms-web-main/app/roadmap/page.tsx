import Link from 'next/link';
import { ArrowLeft, Calendar, CheckCircle2, Sprout, Tractor, FileText, Target, Shield } from 'lucide-react';

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3F2C22] font-sans p-6 pb-24">
      
      {/* NAV */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#166534] font-bold hover:underline">
          <ArrowLeft size={20} /> Return to Operations Center
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <div className="inline-block bg-[#166534]/10 text-[#166534] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-[#166534]/20">
            Execution Strategy
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#166534]">
            2025-2026 Operational Roadmap
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            A phased execution plan coordinating the <span className="font-bold text-blue-700">90-Acre "Marty Pilot"</span> (Specialty High-Value) with the <span className="font-bold text-green-700">600+ Acre KH Transition</span> (Commodity Scale).
          </p>
        </header>

        {/* TIMELINE CONTAINER */}
        <div className="relative border-l-4 border-[#166534]/20 ml-6 md:ml-10 space-y-16">

          {/* PHASE 1: IMMEDIATE ACTION (Spring 2025) */}
          <div className="relative pl-12">
            <div className="absolute -left-[14px] top-0 bg-[#166534] text-white p-2 rounded-full border-4 border-[#FDFBF7]">
              <Sprout size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#166534] mb-2">Phase 1: The "Marty Pilot" Launch</h2>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Spring 2025 (Immediate)</div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-blue-800">Zone: The 90-Acre "North 80" + 10</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Sorghum & Alfalfa Seeding</strong>
                    <p className="text-gray-600">Marty initiates planting of Grain Sorghum (contracts secured) and Alfalfa stands for N-fixation.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Asparagus Crown Prep</strong>
                    <p className="text-gray-600">Soil amendment and trenching for 15 acres of perennial Asparagus (Sysco Contract preparation).</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Shield className="text-blue-600 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-blue-800">Non-Interference Protocol</strong>
                    <p className="text-blue-700/80 text-sm">Marty's equipment and logistics operate 100% independently of Rives Bros / KH. No shared lane usage during planting.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* PHASE 2: DATA & EXPANSION (Fall 2025) */}
          <div className="relative pl-12">
            <div className="absolute -left-[14px] top-0 bg-[#D97706] text-white p-2 rounded-full border-4 border-[#FDFBF7]">
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#D97706] mb-2">Phase 2: KH Data & Cover Crops</h2>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Fall 2025 (Post-Harvest)</div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-[#D97706]">Zone: 600+ Acre Main Production</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#D97706] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Aerial Cover Seeding</strong>
                    <p className="text-gray-600">Fly-on Cereal Rye into standing corn (September). Builds biomass for 2026 weed suppression.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#D97706] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Baseline Soil Testing</strong>
                    <p className="text-gray-600">Grid sampling all 600 acres to establish Carbon & Nitrogen baselines for future credits.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Target className="text-[#D97706] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Yield Drag Analysis</strong>
                    <p className="text-gray-600">Compare Marty's Pilot yields vs. KH Conventional to finalize Year 2 input budgets.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* PHASE 3: FULL INTEGRATION (2026) */}
          <div className="relative pl-12">
            <div className="absolute -left-[14px] top-0 bg-[#166534] text-white p-2 rounded-full border-4 border-[#FDFBF7]">
              <Tractor size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#166534] mb-2">Phase 3: The 2026 Transition</h2>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Spring 2026</div>
            
            <div className="bg-[#166534] text-white p-8 rounded-2xl shadow-lg border border-[#166534]">
              <h3 className="font-bold text-xl mb-6">Execution Milestones</h3>
              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <div className="text-[#4ade80] font-bold mb-2">Chemical Reduction</div>
                    <p className="text-white/80">Input orders reduced by 35%. Nitrogen application split to reduce leaching.</p>
                 </div>
                 <div>
                    <div className="text-[#4ade80] font-bold mb-2">Market Contracts</div>
                    <p className="text-white/80">Marty secures Sysco/OSF expansion. KH begins "Transition Certified" corn contracts (premium pending).</p>
                 </div>
                 <div>
                    <div className="text-[#4ade80] font-bold mb-2">Livestock Integration</div>
                    <p className="text-white/80">Feasibility study for KH cattle grazing on cover crops (Winter 2026).</p>
                 </div>
                 <div>
                    <div className="text-[#4ade80] font-bold mb-2">Operational Harmony</div>
                    <p className="text-white/80">Bi-weekly coordination meetings between Marty & KH to align harvest logistics.</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
