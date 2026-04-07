"use client"; // Required for useState
import { useState } from 'react';
import Script from 'next/script';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLabExpanded, setIsLabExpanded] = useState(false);

  return (
    
    <main className="h-screen w-full bg-black text-white p-4 flex flex-col pt-24 overflow-hidden">

      <div className="flex-grow grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(6,_1fr)] md:grid-rows-[7fr_3fr] gap-2 w-full h-full relative">

        {/* 01 | HERO - GHOST & BOX */}
        <div className="md:col-span-2 hidden md:block" aria-hidden="true" />
        <div
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className={`bg-zinc-900/40 border border-white/5 rounded-2xl p-10 flex flex-col justify-end overflow-hidden group transition-all duration-700 ease-in-out absolute top-0 left-0 ${isExpanded ? 'w-full h-full z-50 p-20' : 'w-full md:w-[calc(50%-4px)] h-full md:h-[calc(70%-4px)] z-10'}`}
        >
          <div className="relative z-10">
            <div className={`flex items-baseline gap-6 transition-all duration-700 ease-in-out z-50 origin-top-left ${isExpanded ? 'transform -translate-y-[28rem] md:-translate-y-[32rem]' : 'transform translate-y-0 mb-1'}`}>
              <span className={`font-bold uppercase tracking-[0.15em] text-zinc-600 ${isExpanded ? 'text-[12px]' : 'text-[10px]'}`}>
                01 | Hero
              </span>
              {isExpanded && (
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600/50 animate-pulse">
                  [ Move mouse to exit ]
                </div>
              )}
            </div>

            <div className="relative h-32 w-full mb-1">
              {/* FULL NAME: Starts tiny and invisible, grows to 4xl */}
              <h1
                className={`absolute bottom-0 left-0 font-black tracking-tighter leading-none transition-all duration-700 ease-out whitespace-nowrap ${isExpanded ? 'text-3xl opacity-100 translate-y-0 scale-100' : 'text-sm opacity-0 translate-y-10 scale-50'}`}
              >
                MARTHAN L. LANUZGA
              </h1>

              {/* MLL: Starts huge (9xl), shrinks and disappears on hover */}
              <h1
                className={`absolute bottom-0 left-0 font-black tracking-tighter leading-none transition-all duration-1000 ease-in-out ${isExpanded ? 'text-2xl opacity-0 -translate-y-8 scale-50 blur-sm' : 'text-9xl opacity-100 translate-y-0 scale-100'}`}
              >
                MLL
              </h1>
            </div>
            <p className="text-zinc-500 text-lg font-medium max-w-sm uppercase tracking-widest">
              AWEEEESOME DEVELOPER <br />
              / BIKEMASTER2331
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent z-10" />
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isExpanded ? 'opacity-100 scale-100' : 'opacity-100 scale-105'} pointer-events-none z-0`}>
            <img
              src="/images/whalee.jpg"
              alt="Hero Visual"
              className="w-full h-full object-cover object-center grayscale contrast-110 brightness-[0.67]"
              loading="eager"
            />
          </div>
        </div>

        {/* 02 | PROJECT */}
        <div className={`md:col-span-1 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:bg-zinc-800/50 transition-all duration-700 cursor-pointer group ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">02 | Projects</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">Pathfinder</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Autonomous AI agent designed for the tourism sector.</p>
          </div>
        </div>

        {/* 03 | TECH STACK */}
        <div className={`md:col-span-1 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-between transition-all duration-700 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">03 | Tech Stack</span>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {['Next.js', 'Python', 'FastAPI', 'Three.js', 'PyTorch', 'Docker'].map((tech) => (
              <div key={tech} className="py-2 px-3 bg-white/5 border border-white/5 rounded-lg text-[10px] font-mono text-center">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 04 | ABOUT */}
        <div className={`md:col-span-2 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center gap-6 transition-all duration-700 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">04 | About</span>
          <div className="flex items-center gap-10">
            <div className="h-24 w-24 bg-zinc-800 rounded-2xl shrink-0 border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:block" />
            <p className="text-lg text-zinc-400 font-light leading-relaxed italic">
              "I build software that thinks. Specialized in bridging the gap between high-level AI models and fluid user interfaces."
            </p>
          </div>
        </div>

        {/* --- BOX 05 & 06 COMBO --- */}
        <div className={`md:col-span-2 grid grid-cols-2 gap-2 relative transition-all duration-700 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

          {/* GHOSTS: Invisible placeholders to keep the grid shape */}
          <div className="invisible" />
          <div className="invisible" />

          {/* BOX 05 | THE LAB (Left side, expanding Right) */}
          <div
            onMouseEnter={() => setIsLabExpanded(true)}
            onMouseLeave={() => setIsLabExpanded(false)}
            className={`absolute top-0 left-0 h-full overflow-hidden rounded-2xl p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-in-out bg-blue-600 text-black ${isLabExpanded ? 'w-full z-20' : 'w-[calc(50%-4px)] z-10'}`}
          >
            <div className="z-10 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest">05 | The Lab</span>
              <span className="flex h-3 w-3 bg-black rounded-full animate-pulse" />
            </div>
            <h4 className={`font-black z-10 leading-none transition-all duration-500 ${isLabExpanded ? 'text-6xl' : 'text-4xl'}`}>
              VIEW<br />EXPERIMENTS
            </h4>
            <div className={`absolute -bottom-4 -right-4 font-black transition-all duration-700 ${isLabExpanded ? 'text-[15rem] opacity-20' : 'text-9xl opacity-10'}`}>
              LAB
            </div>
          </div>

          {/* BOX 06 | CONNECT (The Background) */}
          <div className="absolute top-0 right-0 h-full w-[calc(50%-4px)] z-0 bg-white text-black rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:invert transition-all duration-700 cursor-pointer">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">06 | Let's Connect</p>
            <span className="text-3xl font-bold break-all">marthan@dev.io</span>
          </div>

        </div>

      </div>
    </main>
  );
}