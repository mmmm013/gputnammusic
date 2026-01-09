'use client';
import React, { useState, useEffect } from 'react';

// --- CONFIGURATION: IMAGES & PASSWORDS ---

// 1. THE PUBLIC "TRAIN" SLIDESHOW
const SLIDESHOW_ASSETS = [
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80", // Image 1 (Train/Track)
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80", // Image 2 (Wheat)
];

const SLIDE_DURATION = 150000; // 2.5 Minutes (in milliseconds)

// 2. INTERNAL BRANDING
const OPS_ASSETS = {
  bgImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')",
  logoText: "L COLE FARMS",
};

// 3. ROLE-BASED SECURITY (Distinct Passwords)
const SECURITY_CLEARANCE = {
  'GOLD': 'OWNER',   // Owner Password
  'GROW': 'FARMER',  // Farmer Password
  'HERD': 'RANCHER', // Rancher Password
  '2026': 'ADMIN'    // Master Password (Sees All)
};

export default function LCFDualArchitecture() {
  const [viewMode, setViewMode] = useState<'PUBLIC' | 'LOGIN' | 'OPS'>('PUBLIC');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inputPin, setInputPin] = useState('');
  const [userRole, setUserRole] = useState('');
  const [error, setError] = useState('');
  const [opsTab, setOpsTab] = useState<'HOME' | 'OWNER' | 'FARMER' | 'RANCHER'>('HOME');

  // --- SLIDESHOW LOGIC ---
  useEffect(() => {
    if (viewMode === 'PUBLIC') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_ASSETS.length);
      }, SLIDE_DURATION);
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  // --- LOGIN LOGIC ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const role = SECURITY_CLEARANCE[inputPin as keyof typeof SECURITY_CLEARANCE];
    if (role) {
      setUserRole(role);
      setViewMode('OPS');
      if (role !== 'ADMIN') setOpsTab(role as any); 
      setError('');
    } else {
      setError('ACCESS DENIED: Invalid Clearance');
      setInputPin('');
    }
  };

  // VIEW 1: PUBLIC LANDING (The Train)
  if (viewMode === 'PUBLIC') {
    return (
      <div className="min-h-screen relative overflow-hidden bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out"
          style={{ backgroundImage: `url(${SLIDESHOW_ASSETS[currentSlide]})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-screen flex flex-col justify-between p-12">
          <header>
            <h1 className="text-4xl md:text-6xl font-bold tracking-widest drop-shadow-lg">L COLE FARMS</h1>
            <p className="text-xl tracking-widest mt-2 opacity-80">THE TRANSITION • EST 2026</p>
          </header>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-light leading-relaxed mb-6">"We are not just moving dirt. We are changing the direction of the legacy."</h2>
            <div className="h-1 w-24 bg-emerald-500 mb-4"></div>
            <p className="text-sm opacity-70">Running Sequence: {currentSlide + 1} / {SLIDESHOW_ASSETS.length}</p>
          </div>
          <footer className="flex justify-between items-end">
            <div className="text-xs opacity-50"><p>Greenfield, IL</p><p>© 2025 L Cole Farms Public Trust</p></div>
            <button onClick={() => setViewMode('LOGIN')} className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition">Partner Access</button>
          </footer>
        </div>
      </div>
    );
  }

  // VIEW 2: SECURITY GATE
  if (viewMode === 'LOGIN') {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8"><h2 className="text-emerald-500 tracking-widest text-sm font-bold mb-2">OPERATIONS CENTER</h2><p className="text-stone-500 text-xs">SECURE ENVIRONMENT</p></div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" value={inputPin} onChange={(e) => setInputPin(e.target.value)} className="w-full bg-black border border-stone-700 rounded p-4 text-white text-center tracking-[0.5em] focus:border-emerald-500 focus:outline-none" placeholder="PASSKEY" autoFocus />
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            <div className="grid grid-cols-2 gap-4"><button onClick={() => setViewMode('PUBLIC')} type="button" className="text-stone-500 text-xs hover:text-white">← Return</button><button type="submit" className="bg-emerald-800 text-white text-xs font-bold py-3 rounded hover:bg-emerald-700">ENTER</button></div>
          </form>
        </div>
      </div>
    );
  }

  // VIEW 3: OPS PORTAL
  return (
    <div className="min-h-screen bg-cover bg-center transition-all duration-700" style={{ backgroundImage: opsTab === 'HOME' ? OPS_ASSETS.bgImage : 'none', backgroundColor: opsTab === 'HOME' ? 'transparent' : '#f5f5f4' }}>
      <div className={`min-h-screen ${opsTab === 'HOME' ? 'bg-black/40 backdrop-blur-sm' : ''} flex flex-col`}>
        <nav className="p-6 flex justify-between items-center z-10 bg-black/20 backdrop-blur">
          <div className="text-white"><h1 className="font-bold tracking-widest">LCF OPS</h1><p className="text-stone-300 text-[10px] uppercase">Role: {userRole}</p></div>
          <button onClick={() => {setViewMode('PUBLIC'); setInputPin('');}} className="text-xs text-red-300 border border-red-900/50 px-3 py-1 rounded hover:bg-red-900/50">EXIT</button>
        </nav>
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          {opsTab === 'HOME' && (
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
              {(userRole === 'OWNER' || userRole === 'ADMIN') && (<div onClick={() => setOpsTab('OWNER')} className="cursor-pointer bg-stone-900/80 border-t-4 border-amber-500 p-8 rounded-xl hover:-translate-y-2 transition shadow-2xl"><h2 className="text-2xl font-bold text-white mb-2">OWNER</h2><p className="text-amber-200 text-xs mb-4">Capital & Legacy</p></div>)}
              {(userRole === 'FARMER' || userRole === 'ADMIN') && (<div onClick={() => setOpsTab('FARMER')} className="cursor-pointer bg-stone-900/80 border-t-4 border-emerald-500 p-8 rounded-xl hover:-translate-y-2 transition shadow-2xl"><h2 className="text-2xl font-bold text-white mb-2">FARMER</h2><p className="text-emerald-200 text-xs mb-4">Operations & Soil</p></div>)}
              {(userRole === 'RANCHER' || userRole === 'ADMIN') && (<div onClick={() => setOpsTab('RANCHER')} className="cursor-pointer bg-stone-900/80 border-t-4 border-red-700 p-8 rounded-xl hover:-translate-y-2 transition shadow-2xl"><h2 className="text-2xl font-bold text-white mb-2">RANCHER</h2><p className="text-red-200 text-xs mb-4">Livestock & Fertility</p></div>)}
            </div>
          )}
          {opsTab === 'OWNER' && (<div className="w-full max-w-4xl bg-white shadow-2xl border-t-8 border-amber-600 p-8"><h2 className="text-2xl font-serif text-stone-800 mb-4">Owner Directives</h2><div className="bg-green-50 border border-green-200 p-4 rounded text-stone-800">✅ Partnership Letter Sent (Dec 13)</div><button onClick={() => setOpsTab('HOME')} className="mt-4 text-xs underline text-stone-500">Back</button></div>)}
          {opsTab === 'FARMER' && (<div className="w-full max-w-4xl bg-white shadow-2xl border-t-8 border-emerald-600 p-8"><h2 className="text-2xl font-serif text-stone-800 mb-4">Operational Log</h2><div className="bg-emerald-50 border border-emerald-200 p-4 rounded text-stone-800">🚜 Priority: Order Plants ASAP.</div><button onClick={() => setOpsTab('HOME')} className="mt-4 text-xs underline text-stone-500">Back</button></div>)}
          {opsTab === 'RANCHER' && (<div className="w-full max-w-4xl bg-white shadow-2xl border-t-8 border-red-700 p-8"><h2 className="text-2xl font-serif text-stone-800 mb-4">Rives Boys Ranch</h2><div className="bg-red-50 border border-red-200 p-4 rounded text-stone-800">🐂 Asset: 200 Stover Bales (Bedding Only).</div><button onClick={() => setOpsTab('HOME')} className="mt-4 text-xs underline text-stone-500">Back</button></div>)}
        </main>
      </div>
    </div>
  );
}