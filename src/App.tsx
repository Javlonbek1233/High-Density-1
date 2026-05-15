/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sword, Wind, Zap, Skull, MapPin, Layers } from 'lucide-react';

// High Density Dark Fantasy Theme
export default function App() {
  return (
    <div className="h-screen bg-[#05070a] text-slate-300 font-sans flex flex-col overflow-hidden border-8 border-[#0f172a]">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 bg-gradient-to-r from-[#0a0f18] to-transparent border-b border-slate-800">
        <div className="flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-bold mb-1">Legendary Hero Profile</div>
          <h1 className="text-4xl font-serif text-white tracking-tight uppercase">
            THE <span className="text-cyan-400 italic">FROST</span> RAVEN
          </h1>
        </div>
        <div className="flex items-center space-x-12">
          <div className="text-right">
            <div className="text-[10px] uppercase opacity-50">Resonance</div>
            <div className="text-2xl font-serif text-white">98.4%</div>
          </div>
          <div className="h-12 w-px bg-slate-800"></div>
          <div className="text-right">
            <div className="text-[10px] uppercase opacity-50">Ascension</div>
            <div className="text-2xl font-serif text-cyan-400">RANK IV</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex p-6 gap-6 overflow-hidden">
        {/* Visual Section */}
        <section className="flex-[1.2] relative bg-gradient-to-b from-[#0f172a] to-[#05070a] rounded-lg border border-slate-800 overflow-hidden flex flex-col">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,#3b82f6_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative flex-1 flex flex-col items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group w-full max-w-md"
            >
              <div className="absolute -inset-2 bg-cyan-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop" 
                  alt="The Frost Raven" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center space-y-3"
            >
              <div className="px-5 py-1.5 bg-cyan-500/10 border border-cyan-500/40 rounded text-cyan-400 text-xs tracking-widest uppercase font-bold inline-block">
                Soul-Ender Runeblade
              </div>
              <p className="text-[10px] text-slate-400 max-w-[280px] leading-relaxed mx-auto italic font-serif">
                "Forged in the heart of the Maelstrom Peaks, his blade hums with the static of a thousand lightning strikes."
              </p>
            </motion.div>
          </div>

          {/* Interaction Bar */}
          <div className="p-4 border-t border-slate-800 bg-black/20 flex gap-4">
            <div className="w-10 h-10 border border-slate-700 bg-slate-900 flex items-center justify-center text-cyan-400">
              <Sword className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-500">
              <Shield className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-500">
              <Zap className="w-4 h-4" />
            </div>
            <div className="flex-1"></div>
            <button className="px-6 py-2 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">
              Engage Void
            </button>
          </div>
        </section>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
          {/* Attributes */}
          <section className="bg-[#0a0f18] p-5 rounded-lg border border-slate-800">
            <h3 className="text-[11px] uppercase tracking-widest text-slate-500 mb-4 font-bold border-l-2 border-cyan-500 pl-3">Combat Attributes</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-3 border border-slate-800">
                <div className="text-[10px] uppercase text-slate-500">Frost Affinity</div>
                <div className="text-xl font-serif text-white">92 <span className="text-xs text-cyan-500 ml-1">MAX</span></div>
              </div>
              <div className="bg-slate-900/50 p-3 border border-slate-800">
                <div className="text-[10px] uppercase text-slate-500">Static Charge</div>
                <div className="text-xl font-serif text-white">88 <span className="text-xs text-cyan-500 ml-1">+14</span></div>
              </div>
              <div className="bg-slate-900/50 p-3 border border-slate-800">
                <div className="text-[10px] uppercase text-slate-500">Shadow Resist</div>
                <div className="text-xl font-serif text-white">64 <span className="text-xs text-slate-500 ml-1">BASE</span></div>
              </div>
              <div className="bg-slate-900/50 p-3 border border-slate-800">
                <div className="text-[10px] uppercase text-slate-500">Rune Power</div>
                <div className="text-xl font-serif text-white">75 <span className="text-xs text-cyan-500 ml-1">+22</span></div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest opacity-60">Void Synchronization</span>
                <span className="text-[10px] text-cyan-400 font-mono tracking-tighter">OPTIMAL [82%]</span>
              </div>
              <div className="h-1 bg-slate-800 w-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "82%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-cyan-500"
                ></motion.div>
              </div>
            </div>
          </section>

          {/* Relics Content */}
          <section className="bg-[#0a0f18] p-5 rounded-lg border border-slate-800">
            <h3 className="text-[11px] uppercase tracking-widest text-slate-500 mb-4 font-bold border-l-2 border-cyan-500 pl-3">Equipped Relics</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 bg-slate-800 mr-4 flex items-center justify-center text-[10px] font-bold text-cyan-500">RL-1</div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Soul-Ender Runeblade</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest">Ancient High-Frequency Steel</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-900/40 border border-slate-800">
                <div className="w-10 h-10 bg-slate-800 mr-4 flex items-center justify-center text-[10px] font-bold text-cyan-500">RL-2</div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Glacial Bastion</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest">Crystalline Defense Matrix</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-900/40 border border-slate-800 opacity-50">
                <div className="w-10 h-10 bg-slate-800 mr-4 flex items-center justify-center text-[10px] font-bold text-slate-600">??</div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider italic">Locked Artifact</div>
                  <div className="text-[9px] text-slate-700 uppercase tracking-widest">Requires Level 120</div>
                </div>
              </div>
            </div>
          </section>

          {/* Location / Meta */}
          <section className="bg-[#0a0f18] p-4 rounded-lg border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <div>
                <div className="text-[10px] uppercase text-slate-500">Current Sanctum</div>
                <div className="text-xs font-medium text-white">Spire of Eternal Frost</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-right">
              <div>
                <div className="text-[10px] uppercase text-slate-500">Realm Segment</div>
                <div className="text-xs font-medium text-white">The Shattered North</div>
              </div>
              <Layers className="w-4 h-4 text-cyan-500" />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-16 bg-[#0a0f18] border-t border-slate-800 flex items-center px-8 text-[10px] tracking-widest uppercase text-slate-500 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Status: <span className="text-cyan-500 font-bold ml-1">Synchronized with Maelstrom</span>
        </div>
        <div className="flex space-x-12">
          <div className="hidden sm:block">Archive: <span className="text-white ml-2">v4.11.0</span></div>
          <div>Playtime: <span className="text-white ml-2">142.4H</span></div>
        </div>
      </footer>
    </div>
  );
}
