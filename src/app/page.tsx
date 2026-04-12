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

      <div className="fixed inset-0 bg-[#111] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] -z-10" aria-hidden="true" />

      <div className="h-svh w-full text-white p-4 flex flex-col md:pt-24 pt-4 overflow-hidden relative z-10">

        <div className="flex-grow grid grid-cols-1 md:grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(6,_1fr)] md:grid-rows-[8fr_3fr] gap-4 w-full h-full relative">

          <div className="md:col-span-14 hidden md:block" aria-hidden="true" />

          {/* MLL HERO CARD: Styled like a physical poster taped to the board */}
          <div
            className={`hidden md:flex bg-zinc-950 p-10 flex-col justify-end group absolute top-4 left-4 w-full md:w-[calc(65%-3.2px)] h-full md:h-[calc(65%-4px)] z-10 transition-all duration-700 -rotate-2 shadow-[5px_5px_15px_rgba(0,0,0,0.8)] border-[4px] border-zinc-900 ${isAnyActive ? 'blur-[6px] brightness-[0.3] pointer-events-none' : ''}`}
          >
            {/* Fake CSS Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/20 backdrop-blur-md rotate-2 shadow-sm z-50" />

            <div className="relative z-10">
              <div className="flex items-baseline gap-6 mb-1">
                <span className="font-bold uppercase tracking-[0.15em] bg-white text-black px-2 py-1 text-[10px] -rotate-3 inline-block">
                  SOMEONE
                </span>
              </div>

              <div className="relative h-32 w-full mb-1">
                <h1 className="absolute bottom-0 left-0 font-black tracking-tighter leading-none text-9xl">
                  MLL
                </h1>
              </div>

              {/* Mixed Typography: Marker font style for the joke */}
              <p style={{ fontFamily: 'Bradley Hand, cursive' }} className="text-white text-3xl lowercase tracking-wide mt-2 -rotate-2">
                wahoooooooo developer
              </p>
              <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-2">
                / BIKEMASTER2331
              </p>
            </div>
            <div className="absolute inset-0 opacity-40 pointer-events-none z-0 mix-blend-luminosity">
              <img
                src="/images/gatty.png"
                alt="Hero Visual"
                className="w-full h-full object-cover object-center grayscale contrast-150"
                loading="eager"
              />
            </div>
          </div>

          {/* BMO STICKER: Wrapped in CSS drop-shadow to create a die-cut sticker look */}
          <div className="fixed inset-0 md:relative md:inset-auto md:col-span-6 z-20 flex md:block items-center justify-center transition-all duration-700 opacity-100 md:rotate-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:rotate-0 hover:scale-105">

            <div className="absolute top-15 md:top-8 left-8 z-30 pointer-events-auto max-w-[240px] -rotate-6">
              <div className={`transition-all duration-500 transform ${bmoReply ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                {/* Text Box stylized as a Dymo label or sticky note */}
                <div className="relative bg-[#ffeb3b] text-black p-3 shadow-xl transition-all duration-300 border-l-4 border-black">
                  {/* Fake CSS Tape */}
                  <div className="absolute -top-3 left-4 w-12 h-4 bg-white/40 backdrop-blur-md rotate-6 shadow-sm z-50" />
                  <p className="font-mono text-[11px] leading-relaxed uppercase font-bold tracking-tight text-left w-full break-words relative z-10">
                    {displayedReply}
                    <span className="font-bold animate-caret-blink">|</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-full absolute inset-0 md:translate-y-0 translate-y-6">
              <model-viewer
                src="/models/bmo.glb"
                autoplay
                camera-controls
                disable-zoom
                disable-tap
                shadow-intensity="2"
                environment-image="neutral"
                exposure="1"
                interaction-prompt="none"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              ></model-viewer>
            </div>
          </div>

          {/* BOTTOM LEFT BOARD: Pinned items overlapping */}
          <div className={`hidden md:flex md:col-span-10 p-8 flex-col justify-center gap-6 transition-all duration-700 relative z-10 ${isAnyActive ? 'blur-[6px] brightness-[0.3] pointer-events-none' : 'opacity-100'}`}
            onMouseEnter={() => {
              setIsHovering(true);
              setBmoReply("TRY HOVERING OVER THE IMAGE! HE'S GOT A SURPRISE");
            }}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-8 w-full items-center">

              {/* ID Card as a printed physical object */}
              <div className="relative p-2 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.5)] rotate-[-4deg] w-full max-w-[200px] hover:rotate-0 transition-transform duration-300 z-20">
                <div className="absolute top-1 right-4 w-4 h-4 rounded-full bg-zinc-300 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] z-50 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white translate-x-[-1px] translate-y-[-1px]" />
                </div>
                <img src="/images/license.png" alt="License" className="w-full h-auto object-contain filter contrast-125" />
              </div>

              {/* Cat Video as a Polaroid */}
              <div className="flex justify-start z-10">
                <div
                  className="h-28 w-24 bg-white p-2 pb-8 shadow-[0_8px_15px_rgba(0,0,0,0.6)] rotate-6 transition-transform duration-500 hidden sm:block cursor-pointer relative"
                  onMouseEnter={() => catVideoRef.current?.play()}
                  onMouseLeave={() => {
                    catVideoRef.current?.pause();
                    if (catVideoRef.current) catVideoRef.current.currentTime = 0;
                  }}
                >
                  {/* Fake CSS Tape */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/40 backdrop-blur-md -rotate-6 shadow-sm z-50" />
                  <video
                    ref={catVideoRef}
                    src="/images/catcat.mp4"
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  <span style={{ fontFamily: 'Bradley Hand, cursive' }} className="absolute bottom-1 left-0 w-full text-center text-black text-xs">meow.</span>
                </div>
              </div>

              {/* Typed Quote with Marker Annotation */}
              <div className="flex flex-col justify-center relative pl-8 mt-8">
                <div className="bg-zinc-100 p-4 shadow-md rotate-[5deg] max-w-sm border-l-4 border-blue-500 relative hover:rotate-0 transition-all duration-500">
                  {/* Fake CSS Tape */}
                  <div className="absolute top-1 -right-5 w-15 h-6 bg-white/40 backdrop-blur-md rotate-48 shadow-sm z-50" />
                  <p className="text-sm md:text-sm text-black font-mono leading-relaxed relative z-10">
                    To tolerate imperfection on the first try is to surrender before the work has even begun.
                  </p>
                  <span style={{ fontFamily: 'Bradley Hand, cursive' }} className="text-xl text-red-600 block text-right mt-2 -rotate-3">
                    — just thought of it rn
                  </span>
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
              style={{ fontFamily: 'Bradley Hand, cursive' }}
              className="absolute bottom-50 right-14 text-white text-2xl rotate-[-5deg] hover:text-yellow-400 hover:scale-110 transition-all duration-300 underline decoration-wavy"
            >
              view my cv!
            </a>
          </div>

          {/* BOTTOM RIGHT GRID: Scraps of colored paper */}
          <div className="hidden md:grid md:col-span-10 grid-cols-2 gap-6 relative transition-all duration-700 opacity-100 p-4">

            <div className="invisible" />
            <div className="invisible" />

            {/* Blue Project Card -> Torn Blue Construction Paper */}
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
              className={`absolute bottom-8 left-4 w-[calc(55%-4px)] border-4 border-blue-800 p-6 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-in-out bg-blue-600 text-black rotate-[-3deg] shadow-[5px_5px_0_rgba(0,0,0,1)] ${isLabExpanded ? 'h-[110%] w-[110%] z-40 rotate-0' : 'h-[calc(75%-4px)] z-20'} ${isLabActive ? "z-30 scale-105" : isContactActive ? "blur-[6px] brightness-[0.3] pointer-events-none" : ""}`}
            >
              {/* Fake CSS Tape */}
              <div className="absolute top-1 right-[-20] w-24 h-6 bg-white/30 backdrop-blur-md -rotate-[-24deg] shadow-sm z-50" />
              <div className="z-10 flex justify-between items-center">
                <span className="text-xs font-mono font-black uppercase tracking-widest bg-black text-blue-400 px-2 py-1">_THE VAULT</span>
              </div>
              <h4 style={{ fontFamily: 'Impact, sans-serif' }} className={`uppercase z-10 leading-none transition-all duration-500 ${isLabExpanded ? 'text-6xl' : 'text-5xl'}`}>
                VIEW<br />PROJECTS
              </h4>
            </Link>

            {/* White Contact Card -> Sticky Note */}
            <a
              href="mailto:tanlanuzga@gmail.com"
              onMouseEnter={() => {
                setIsHovering(true);
                setBmoReply("CONNECT WITH BM? HE'S A BIT SHY...");
              }}
              onMouseLeave={() => setIsHovering(false)}
              className={`absolute bottom-4 right-4 w-[calc(45%-4px)] h-[calc(50%-4px)] bg-[#fef08a] text-black p-6 flex flex-col justify-center items-center text-center transition-all duration-700 cursor-pointer shadow-[2px_10px_15px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 hover:-translate-y-2 ${isContactActive ? 'z-30 scale-105' : isLabActive ? 'blur-[6px] brightness-[0.3] pointer-events-none' : 'z-10'}`}>

              {/* Push Pin */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-inner z-50 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-900" />
              </div>

              <div className="flex flex-col items-center text-center mt-2">
                <p style={{ fontFamily: 'Bradley Hand, cursive' }} className="text-xl mb-1 mr-12 text-zinc-700"> + Let's</p>
                <span style={{ fontFamily: 'Impact, sans-serif' }} className="text-5xl uppercase tracking-tighter ml-8">LINK</span>
              </div>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}