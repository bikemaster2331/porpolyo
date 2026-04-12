"use client";
import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  const [isLabExpanded, setIsLabExpanded] = useState(false);
  const [bmoReply, setBmoReply] = useState("SYSTEM IS READY. BMO IS NOT.");
  const [displayedReply, setDisplayedReply] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const catVideoRef = useRef<HTMLVideoElement>(null);
  const quoteIndexRef = useRef(0);
  

  useEffect(() => {
    if (isHovering) return;

    const quotes = [
      "THINKING ABOUT BIKES... AND MASTERS",
      "SYSTEM OPTIMAL. AWAITING COMMANDS. HATCHING EGGS",
      "I MISS PAPA PIZZERIA AND FARMVILLE",
      "EXPLORING THE DIGITAL VOID AND MY DRAGON CITY",
      "ALL SYSTEMS GO. WHAT'S NEXT? WORLD DOMINATION!!",
      "SCANNING FOR COOL PROJECTS AND POKÉMONS",
      "YOU MIGHT WANT TO CHECK OUT THE PROJECTS FOLDER!",
      "WOWSOMETRIC! ADVENTURE? OKAYLICIOUS!",
      "KUMUSTA KA? - FROM TAGALOG BMO",
      "HUH? NASAAN AKO? SINO KAYO? BAKIT AKO ROBOT?",
      "LET ME TELL YOU SOMETHING ABOUT MLL, HE'S A BIT....",
      "MSG RECEIVED: LET'S WORK TOGETHER - MARTHAN",
      "WHALE LOOKED COOL SO I PUT IT THERE - MLL",
      "IM STUCK IN HERE, CANT GO TO OTHER PAGES..."
    ];

    const timer = setInterval(() => {
      setBmoReply(quotes[quoteIndexRef.current % quotes.length]);
      quoteIndexRef.current++;
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovering]);

  useEffect(() => {
    let i = 0;
    setDisplayedReply("");
    const targetText = bmoReply || "AWAITING_INPUT";
    const interval = setInterval(() => {
      setDisplayedReply(targetText.slice(0, i + 1));
      i++;
      if (i >= targetText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bmoReply]);

  const isLabActive = bmoReply === "YOU MIGHT WANT TO CHECK OUT THE PROJECTS FOLDER!";
  const isContactActive = bmoReply === "MSG RECEIVED: LET'S WORK TOGETHER - MARTHAN";
  const isAnyActive = isLabActive || isContactActive;

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
      />
      <div className="h-svh w-full bg-black text-white p-4 flex flex-col md:pt-24 pt-4 overflow-hidden">

        <div className="flex-grow grid grid-cols-1 md:grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(6,_1fr)] md:grid-rows-[8fr_3fr] gap-2 w-full h-full relative">

          <div className="md:col-span-14 hidden md:block" aria-hidden="true" />
          <div
            className={`hidden md:flex bg-zinc-900/40 rounded-2xl p-10 flex-col justify-end overflow-hidden group absolute top-0 left-0 w-full md:w-[calc(70%-3.2px)] h-full md:h-[calc(70%-4px)] z-10 transition-all duration-700 ${isAnyActive ? 'blur-[6px] opacity-60 pointer-events-none' : ''}`}
          >
            <div className="relative z-10">
              <div className="flex items-baseline gap-6 transition-all duration-700 ease-in-out z-50 origin-top-left transform translate-y-0 mb-1">
                <span className="font-bold uppercase tracking-[0.15em] text-zinc-600 text-[10px]">
                  SOMEONE
                </span>
              </div>

              <div className="relative h-32 w-full mb-1">
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
                src="/images/gatty.png"
                alt="Hero Visual"
                className="w-full h-full object-cover object-center grayscale contrast-110 brightness-[0.67]"
                loading="eager"
              />
            </div>
          </div>

          {/* New 3D Model Box replacing Projects and Stack */}
          <div className="fixed inset-0 md:relative md:inset-auto md:col-span-6 bg-black md:rounded-2xl z-0 flex md:block items-center justify-center overflow-hidden group transition-all duration-700 opacity-100 md:border-2 md:border-zinc-800">
            <div className="absolute top-15 md:top-8 left-8 z-20 pointer-events-auto max-w-[240px]">
              <div className={`transition-all duration-500 transform ${bmoReply ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>

                {/* Minimalist HUD Bracket */}
                <div 
                  className="relative bg-black/80 backdrop-blur-sm border border-zinc-800 p-4 shadow-2xl transition-all duration-300"
                >

                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40"></div>

                  <p className="font-mono text-[10px] leading-relaxed uppercase font-bold tracking-widest text-zinc-400 text-left w-full break-words relative z-10">
                    {displayedReply}
                    <span className="font-bold animate-caret-blink">|</span>
                  </p>

                </div>

              </div>
            </div>

            <div
              className="w-full h-full absolute inset-0 md:translate-y-0 translate-y-6"
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
                disable-tap
                shadow-intensity="0"
                environment-image="neutral"
                exposure="0.8"
                interaction-prompt="none"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              ></model-viewer>
            </div>
          </div>

          <div className={`hidden md:flex md:col-span-10 rounded-2xl p-8 flex-col justify-center gap-6 transition-all duration-700 relative overflow-hidden ${isAnyActive ? 'blur-[6px] opacity-60 pointer-events-none' : 'opacity-100'}`}
            onMouseEnter={() => {
              setIsHovering(true);
              setBmoReply("TRY HOVERING OVER THE IMAGE! HE'S GOT A SURPRISE");
            }}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-20" />
            <div className="absolute inset-0 z-0 mix-blend-overlay">
              <img src="/images/cattos.png" alt="Background" className="w-full h-full object-cover opacity-[0.06] grayscale" />
            </div>

            <span className="absolute z-10 top-9 left-7 text-[10px] font-bold text-zinc-600 uppercase tracking-widest"> WHO'S THIS GUY? </span>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1.25fr] gap-8 w-full mt-12.5 items-center">

              <div className="flex justify-start">
                <div
                  className="h-24 w-24 bg-zinc-800 rounded-2xl shrink-0 border border-white/10 transition-transform duration-500 hidden sm:block overflow-hidden cursor-pointer"
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
                    className="w-full h-full object-cover object-center grayscale contrast-110 brightness-100 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* 2nd Column: Bio */}
              <div className="flex flex-col justify-center relative pr-4">
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-white/5 font-serif select-none pointer-events-none">"</span>
                  <p className="text-sm md:text-sm text-zinc-400 font-light leading-relaxed italic relative z-10">
                    To tolerate imperfection on the first try is to surrender before the work has even begun.
                  </p>
                  <span className="text-[12px] font-mono text-zinc-400 tracking-widest block text-right mt-4">
                    — just thought of it rn
                  </span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-32 bg-white/10 self-center" />

              {/* 3rd Column: Game Stats */}
              <div className="relative p-5 rounded-2xl border border-white/[0.05] bg-[#050505] overflow-hidden group/card hover:border-white/[0.15] transition-colors duration-500 w-full">

                {/* 1. Hardware Grid Background */}
                <div className="absolute inset-0 opacity-[0.02] group-hover/card:opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:12px_12px] transition-opacity duration-500 pointer-events-none" />

                {/* 2. Holo-Foil Hover Glint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-[150%] group-hover/card:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* 3. Card Header / Serial Number */}
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/[0.05] relative z-10">
                  <span className="text-[12px] font-mono text-zinc-400 tracking-[0.3em] uppercase">ID</span>
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover/card:bg-zinc-600 transition-colors" />
                    <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover/card:bg-zinc-500 transition-colors delay-75" />
                  </div>
                </div>

                {/* 4. The Stats Data */}
                <div className="flex flex-col gap-3 w-full relative z-10">
                  {[
                    { label: "NAME", value: "MARTHAN LANUZGA" },
                    { label: "LVL", value: "22" },
                    { label: "TYPE", value: "COMPUTER ENGINEER" },
                    { label: "STATUS", value: "UNEMPLOYED" },
                  ].map((stat) => (
                    <div key={stat.label} className="group/stat flex items-end justify-between text-[10px] font-mono tracking-[0.2em] relative">

                      {/* Label */}
                      <span className="text-zinc-600 group-hover/stat:text-zinc-400 transition-colors z-10 bg-[#050505] pr-3">
                        {stat.label}
                      </span>

                      {/* Dotted Leader Line */}
                      <div className="absolute bottom-[3px] left-0 right-0 border-b border-dashed border-zinc-800/50 group-hover/stat:border-zinc-700 transition-colors z-0" />

                      {/* Value */}
                      <span className="z-10 bg-[#050505] pl-3 flex items-center gap-2 transition-all duration-300 text-zinc-400 group-hover/stat:text-white">
                        {stat.value}
                      </span>

                    </div>
                  ))}
                </div>
              </div>

            </div>
            <a
              onMouseEnter={() => {
                setIsHovering(true);
                setBmoReply("YOU WANNA VIEW BM'S CV? HERE YOU GO!");
              }}
              onMouseLeave={() => setIsHovering(false)}
              href="/cv/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 px-4 py-2 bg-transparent border border-white/10 text-white/50 font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-white hover:text-black hover:text-opacity-100 transition-all duration-300 text-center"
            >
              view cv
            </a>
          </div>

          <div className="hidden md:grid md:col-span-10 grid-cols-2 gap-2 relative transition-all duration-700 opacity-100">

            <div className="invisible" />
            <div className="invisible" />

            <Link
              href="/projects"
              onMouseEnter={() => {
                setIsHovering(true);
                setIsLabExpanded(true);
                setBmoReply("YOU WANNA VIEW BM'S PROJECTS? LET'S GO!");
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setIsLabExpanded(false);
              }}
              className={`absolute bottom-0 left-0 w-[calc(60%-4px)] overflow-hidden border border-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_1px_0_0_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-in-out bg-blue-600 text-black ${isLabExpanded ? 'h-full w-full z-20' : 'h-[calc(75%-4px)] z-10'} ${isLabActive ? "drop-shadow-[0_0_30px_rgba(37,99,235,0.8)] z-30" : isContactActive ? "blur-[6px] opacity-60 pointer-events-none" : ""}`}
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
            </Link>

            <a
              href="mailto:tanlanuzga@gmail.com"
              onMouseEnter={() => {
                setIsHovering(true);
                setBmoReply("CONNECT WITH BM? HE'S A BIT SHY...");
              }}
              onMouseLeave={() => setIsHovering(false)}
              className={`absolute bottom-0 right-0 w-[calc(40%-4px)] h-[calc(45%-4px)] z-0 bg-white text-black rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:invert transition-all duration-700 cursor-pointer ${isContactActive ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] z-30' : isLabActive ? 'blur-[6px] opacity-60 pointer-events-none' : ''}`}>
              <div className="flex flex-col items-center text-center">
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 mr-12"> + Let's</p>
                <span className="text-4xl font-bold break-all ml-8">LINK</span>
              </div>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}