"use client";
import { useState, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  const [isLabExpanded, setIsLabExpanded] = useState(false);
  const catVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
      />
      <main className="h-screen w-full bg-black text-white p-4 flex flex-col pt-24 overflow-hidden">

        <div className="flex-grow grid grid-cols-1 md:grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(6,_1fr)] md:grid-rows-[7fr_3fr] gap-2 w-full h-full relative">

          <div className="md:col-span-14 hidden md:block" aria-hidden="true" />
          <div
            className="bg-zinc-900/40 rounded-2xl p-10 flex flex-col justify-end overflow-hidden group absolute top-0 left-0 w-full md:w-[calc(70%-3.2px)] h-full md:h-[calc(70%-4px)] z-10"
          >
            <div className="relative z-10">
              <div className="flex items-baseline gap-6 transition-all duration-700 ease-in-out z-50 origin-top-left transform translate-y-0 mb-1">
                <span className="font-bold uppercase tracking-[0.15em] text-zinc-600 text-[10px]">
                  SOMEONE
                </span>
              </div>

              <div className="relative h-32 w-full mb-1">
                <h1
                  className="absolute bottom-0 left-0 font-black tracking-tighter leading-none transition-all duration-700 ease-out whitespace-nowrap text-sm opacity-0 translate-y-10 scale-50"
                >
                  MARTHAN L. LANUZGA
                </h1>

                <h1
                  className="absolute bottom-0 left-0 font-black tracking-tighter leading-none transition-all duration-1000 ease-in-out text-9xl opacity-100 translate-y-0 scale-100"
                >
                  MLL
                </h1>
              </div>
              <p className="text-zinc-500 text-lg font-medium max-w-sm uppercase tracking-widest">
                WAHOOOOOOOO DEVELOPER <br />
                / BIKEMASTER2331
              </p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
              <img
                src="/images/whalee.jpg"
                alt="Hero Visual"
                className="w-full h-full object-cover object-center grayscale contrast-110 brightness-[0.67]"
                loading="eager"
              />
            </div>
          </div>

          {/* New 3D Model Box replacing Projects and Stack */}
          <div className="md:col-span-6 bg-black rounded-2xl relative overflow-hidden group transition-all duration-700 opacity-100">
            
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                IM HERE TO ASSIST YOU
              </span>
            </div>

            <div 
              className="w-full h-full absolute inset-0"
              style={{
                WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%, black 100%)',
                maskImage: 'linear-gradient(to top, transparent 5%, black 25%, black 100%)'
              }}
            >
              <model-viewer
                src="/models/bmo.glb"
                autoplay
                camera-controls
                disable-zoom
                shadow-intensity="0"
                environment-image="neutral"
                exposure="0.8"
                interaction-prompt="none"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              ></model-viewer>
            </div>
          </div>

          <div className="md:col-span-8 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col justify-center gap-6 transition-all duration-700 opacity-100 relative">
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest"> WHO'S THIS GUY? </span>
            <div className="flex items-center gap-10">
              <div
                className="h-24 w-24 bg-zinc-800 rounded-2xl shrink-0 border border-white/10 hover:scale-200 transition-transform duration-500 hidden sm:block overflow-hidden"
                onMouseEnter={() => catVideoRef.current?.play()}
                onMouseLeave={() => {
                  catVideoRef.current?.pause();
                  if (catVideoRef.current) catVideoRef.current.currentTime = 0;
                }}
              >
                <video
                  ref={catVideoRef}
                  src="/images/catcat.mp4"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center grayscale contrast-110 brightness-100"
                />
              </div>
              <p className="text-lg text-zinc-400 font-light leading-relaxed italic">
                I want to build wowsome perfect things at first try.
                <br />
                *whispers* want to know more? heh
              </p>
            </div>
            <a
              href="/cv/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 px-4 py-2 bg-transparent border border-white/10 text-white/50 font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-white hover:text-black hover:text-opacity-100 transition-all duration-300 text-center"
            >
              view cv
            </a>
          </div>

          <div className="md:col-span-12 grid grid-cols-2 gap-2 relative transition-all duration-700 opacity-100">

            <div className="invisible" />
            <div className="invisible" />

            <Link
              href="/projects"
              onMouseEnter={() => setIsLabExpanded(true)}
              onMouseLeave={() => setIsLabExpanded(false)}
              className={`absolute top-0 left-0 h-full overflow-hidden rounded-2xl p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-in-out bg-blue-600 text-black ${isLabExpanded ? 'w-full z-20' : 'w-[calc(70%-4px)] z-10'}`}
            >
              <div className="z-10 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest"> The Lab</span>
              </div>
              <h4 className={`font-black z-10 leading-none transition-all duration-500 ${isLabExpanded ? 'text-6xl' : 'text-4xl'}`}>
                VIEW<br />PROJECTS
              </h4>
              <div className={`absolute bottom-8 right-8 z-20 font-black transition-all duration-500 ${isLabExpanded ? 'text-8xl' : 'text-6xl'}`}>
                →
              </div>
              <div className={`absolute -bottom-4 -right-4 font-black transition-all duration-700 ${isLabExpanded ? 'text-[15rem] opacity-20' : 'text-9xl opacity-10'}`}>
                PROJ
              </div>
            </Link>

            <div className="absolute top-0 right-0 h-full w-[calc(30%-4px)] z-0 bg-white text-black rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:invert transition-all duration-700 cursor-pointer">
              <p className="text-xs font-black uppercase tracking-[0.3em] mb-2"> + Let's Connect</p>
              <span className="text-3xl font-bold break-all">marthan@dev.io</span>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}