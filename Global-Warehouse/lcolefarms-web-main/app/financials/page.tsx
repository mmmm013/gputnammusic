import Link from 'next/link';
import { ArrowLeft, TrendingUp, DollarSign, Sprout, ShieldCheck, BarChart3, Target, Activity, Users } from 'lucide-react';

export default function FinancialsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#3F2C22] font-sans p-6 pb-24">
      
      {/* HEADER & NAV */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#166534] font-bold hover:underline">
          <ArrowLeft size={20} /> Return to Operations Center
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <div className="inline-block bg-[#166534]/10 text-[#166534] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-[#166534]/20">
            Strategic Financial Model v2.1
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#166534]">
            5-Year Transition Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A dual-track strategy: Leveraging the <span className="font-bold text-[#D97706]">90-Acre "Marty Pilot"</span> to de-risk the transition while maintaining full continuity for existing partners.
          </p>
        </header>

        {/* --- SECTION 1: THE CHEMICAL "ZERO-OUT" CURVE --- */}
        <div className="mb-20">
           <div className="flex items-center gap-4 mb-6">
             <div className="bg-red-100 p-3 rounded-full text-red-600"><Activity size={24} /></div>
             <h2 className="text-3xl font-bold text-[#166534]">Metric 1: The "Zero-Chem" Trajectory</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                 <h3 className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-6">Chemical Expense Per Acre (Actual vs. Goal)</h3>
                 <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-1"><span>Year 1 (Baseline)</span> <span>$65/ac</span></div>
                      <div className="w-full bg-gray-100 rounded-full h-4"><div className="bg-red-500 h-4 rounded-full" style={{width: '100%'}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-1"><span>Year 2 (Reduction)</span> <span>$45/ac</span></div>
                      <div className="w-full bg-gray-100 rounded-full h-4"><div className="bg-orange-500 h-4 rounded-full" style={{width: '70%'}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-1"><span>Year 3 (Biologicals)</span> <span>$25/ac</span></div>
                      <div className="w-full bg-gray-100 rounded-full h-4"><div className="bg-yellow-500 h-4 rounded-full" style={{width: '40%'}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-1"><span>Year 5 (Regen Standard)</span> <span className="text-[#166534]">~$0/ac</span></div>
                      <div className="w-full bg-gray-100 rounded-full h-4"><div className="bg-[#166534] h-4 rounded-full" style={{width: '2%'}}></div></div>
                    </div>
                 </div>
              </div>
              
              <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                 <h3 className="text-xl font-bold text-[#166534] mb-4">The "Marty Effect"</h3>
                 <p className="text-gray-700 mb-6 leading-relaxed">
                   By partnering with Marty on the initial <strong>90 Acres</strong>, we replace chemical inputs with labor-intensive, high-value management (Alfalfa/Sorghum rotations). 
                 </p>
                 <ul className="space-y-3">
                   <li className="flex items-start gap-3">
                     <ShieldCheck className="text-green-600 shrink-0" size={20} />
                     <span className="text-sm"><strong>Asparagus Fern Phase:</strong> Natural canopy suppresses weeds, eliminating herbicide need by Year 3.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <ShieldCheck className="text-green-600 shrink-0" size={20} />
                     <span className="text-sm"><strong>Alfalfa Nitrogen:</strong> Legumes fix 150+ lbs N/ac, removing synthetic fertilizer cost entirely.</span>
                   </li>
                 </ul>
              </div>
           </div>
        </div>

        {/* --- SECTION 2: THE 90-ACRE PILOT (MARTY) --- */}
        <div className="mb-20">
           <div className="flex items-center gap-4 mb-6">
             <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Target size={24} /></div>
             <h2 className="text-3xl font-bold text-[#166534]">Metric 2: The 90-Acre "Premium Pilot"</h2>
           </div>

           {/* OPERATIONAL HARMONY NOTICE (RB & KH PROTECTION) */}
           <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8 flex gap-4 items-start">
              <Users className="text-blue-600 shrink-0 mt-1" size={24} />
              <div>
                 <h3 className="text-lg font-bold text-blue-900">Operational Integrity: RB & KH Protected</h3>
                 <p className="text-blue-800 text-sm mt-1">
                    This new partnership with Marty is strictly limited to the <strong>90-Acre Pilot Zone</strong>. It operates independently and 
                    <span className="font-bold underline"> does NOT interfere with</span> the current workflows, acreage, or revenue streams of the 
                    <strong> Rives Brothers (RB)</strong> or <strong>Klayton Hubbard (KH)</strong>. It is an additive revenue layer, not a replacement.
                 </p>
              </div>
           </div>
           
           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
             <div className="p-6 bg-gray-50 border-b border-gray-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Market Channel: Direct-to-Institution</h3>
                  <p className="text-gray-600 text-sm">Partners: Sysco, OSF HealthCare, IL State Dietician</p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold">Contract Stability: HIGH</div>
             </div>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                   <tr>
                     <th className="p-4">Crop (90 Acres)</th>
                     <th className="p-4">Est. Yield</th>
                     <th className="p-4 text-blue-600">Contract Price</th>
                     <th className="p-4 font-bold text-[#166534]">Variance vs. Commodity</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100 font-medium">
                   <tr>
                     <td className="p-4 font-bold">Asparagus (Yr 3+)</td>
                     <td className="p-4">3,500 lbs/ac</td>
                     <td className="p-4 text-blue-700">$2.85/lb (Sysco)</td>
                     <td className="p-4 font-bold text-green-600">+159%</td>
                   </tr>
                   <tr>
                     <td className="p-4 font-bold">Sorghum (Grain)</td>
                     <td className="p-4">110 bu/ac</td>
                     <td className="p-4 text-blue-700">$6.50/bu (GF Flour)</td>
                     <td className="p-4 font-bold text-green-600">+54%</td>
                   </tr>
                   <tr>
                     <td className="p-4 font-bold">Alfalfa (High Protein)</td>
                     <td className="p-4">5 tons/ac</td>
                     <td className="p-4 text-blue-700">$280/ton (Dairy Direct)</td>
                     <td className="p-4 font-bold text-green-600">+47%</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        {/* --- SECTION 3: 5-YEAR CONSOLIDATED P&L --- */}
        <div>
           <div className="flex items-center gap-4 mb-6">
             <div className="bg-yellow-100 p-3 rounded-full text-yellow-600"><BarChart3 size={24} /></div>
             <h2 className="text-3xl font-bold text-[#166534]">Metric 3: 5-Year Consolidated Forecast</h2>
           </div>

           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#3F2C22] text-white text-sm uppercase">
                    <tr>
                      <th className="p-5">Strategic Phase</th>
                      <th className="p-5 bg-gray-700">Year 1 (Launch)</th>
                      <th className="p-5 bg-gray-600">Year 2 (Transition)</th>
                      <th className="p-5 bg-gray-500">Year 3 (Certification)</th>
                      <th className="p-5 bg-[#166534] font-bold">Year 4 (Scale)</th>
                      <th className="p-5 bg-[#14532d] font-bold">Year 5 (Maturity)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                    <tr className="bg-gray-50 font-bold"><td colSpan={6} className="p-3 text-xs uppercase tracking-widest pl-5">Gross Revenue / Acre (Avg)</td></tr>
                    <tr>
                      <td className="p-5">Projected Revenue</td>
                      <td className="p-5 text-orange-600">$890 (Yield Drag)</td>
                      <td className="p-5 text-yellow-600">$940 (Stabilizing)</td>
                      <td className="p-5 text-green-600">$1,150 (Premium Start)</td>
                      <td className="p-5 font-bold text-[#166534]">$1,280 (Sysco Scale)</td>
                      <td className="p-5 font-extrabold text-[#166534]">$1,350 (Full Regen)</td>
                    </tr>
                    <tr className="bg-[#166534]/10 text-lg">
                      <td className="p-5 font-extrabold text-[#166534]">NET PROFIT / ACRE</td>
                      <td className="p-5 font-bold text-orange-700">$545</td>
                      <td className="p-5 font-bold text-yellow-700">$625</td>
                      <td className="p-5 font-bold text-green-700">$880</td>
                      <td className="p-5 font-extrabold text-[#166534]">$1,055</td>
                      <td className="p-5 font-extrabold text-[#166534]">$1,170</td>
                    </tr>
                  </tbody>
                </table>
             </div>
           </div>
        </div>

      </div>
    </main>
  );
}
