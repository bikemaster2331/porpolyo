"use client";
import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/footer';
import Script from 'next/script';

import { TechBadge } from '@/components/tech-icons';

const PROJECT_DATA = [
  {
    name: "pathfinder",
    serial: "01:PTF",
    clearance: "LEVEL_4",
    desc: "Interactive tourism using Raspberry Pi and RAG.",
    longDesc: "Standard AI is too vague to be helpful. Pathfinder uses a custom database that acts like a local tourist guide.",
    tech: ["Python", "Raspberry Pi", "RAG", "React"],
    link: "https://github.com/bikemaster2331/pathfinder",
    styles: "bg-[#0b1b3d] text-blue-100 border-4 border-[#071126] shadow-[8px_8px_0_rgba(0,0,0,1)] md:rotate-[-1deg] rotate-[-2deg]",
    tape: "md:-top-3 md:right-8 top-[-8px] right-6 w-12 md:w-16 h-4 md:h-6 bg-white rotate-3 opacity-90 bg-zinc-300 shadow-[2px_2px_0_rgba(0,0,0,0.5)]",
    gridSpan: "col-span-1 md:col-span-6",
    bgImage: "/images/human.png",
    bgPos: "bottom-0 right-0"
  },
  {
    name: "med-id",
    serial: "02:MID",
    clearance: "RESTRICTED",
    desc: "AI-powered medicine identifier using Computer Vision.",
    longDesc: "I made this to help people identify their medication using just a smartphone camera and deep learning.",
    tech: ["TensorFlow", "OpenCV", "Python"],
    link: "https://github.com/bikemaster2331/med-id",
    styles: "bg-[#D4C3A3] text-black border-4 border-[#8B7D60] shadow-[8px_8px_0_rgba(0,0,0,1)] md:rotate-[2deg] rotate-[2deg]",
    tape: "md:-top-3 md:left-1/2 md:-translate-x-1/2 top-[-8px] left-8 w-10 md:w-14 h-4 md:h-6 bg-zinc-300 -rotate-2 opacity-90 shadow-[2px_2px_0_rgba(0,0,0,0.5)]",
    gridSpan: "col-span-1 md:col-span-6",
    bgImage: "/images/med.png",
    bgPos: "bottom-0 right-0"
  },
  {
    name: "reflex",
    serial: "03:RFX",
    clearance: "TOP_SECRET",
    desc: "Coding behavior analysis using AST traversal.",
    longDesc: "Reflex is my exploration into the DNA of code—analyzing developer behavior through structural AST analysis.",
    tech: ["AST", "TypeScript", "Algorithms"],
    link: "https://github.com/bikemaster2331/reflex",
    styles: "bg-zinc-100 text-black border-4 border-zinc-900 shadow-[8px_8px_0_rgba(0,0,0,1)] md:rotate-[-2deg]",
    tape: "md:top-1 md:-left-4 top-[-10] left-1/3 w-12 md:w-24 md:h-6 md:h-7 h-4.5 bg-blue-600/80 md:-rotate-24 -rotate-4 shadow-[2px_2px_0_rgba(0,0,0,0.5)] border-l-2 border-blue-400/30",
    gridSpan: "col-span-1 md:col-span-6",
    bgImage: "/images/arm.png",
    bgPos: "top-0 right-0"
  },
  {
    name: "pokebind",
    serial: "04:PKB",
    clearance: "EVIDENCE",
    desc: "Marketplace for trading and purchasing booster packs.",
    longDesc: "A passion project for the collector—building a secure, specialized marketplace for Pokémon enthusiasts. I love Giratina.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    link: "https://github.com/bikemaster2331/pokebind",
    styles: "bg-[#8b1c1c] text-white border-4 border-[#4a0d0d] shadow-[8px_8px_0_rgba(0,0,0,1)] md:rotate-[1deg] rotate-[-2deg]",
    tape: "md:top-1 md:right-[-20] top-0 right-[-10] md:w-16 md:w-24 w-8 md:h-8 h-3 bg-zinc-300 rotate-36 opacity-70 shadow-[2px_2px_0_rgba(0,0,0,0.5)]",
    gridSpan: "col-span-1 md:col-span-6",
    bgImage: "/images/girat.png",
    bgPos: "bottom-0 right-0"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [displayedSuffix, setDisplayedSuffix] = useState("");
  const [activeAnimation, setActiveAnimation] = useState("Idle");
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!isDesktop) {
        const target = e.target as HTMLElement;
        if (!target.closest('.project-card')) {
          setActiveIndex(null);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isDesktop]);

  const defaultDesc = "Get to know me more through my projects! This is my \"vault\" as of now. Click the cards for the repo!";

  const selectedIndex = isDesktop ? hoveredIndex : activeIndex;
  const isInactiveMobileCard = !isDesktop && activeIndex !== null;

  const targetDesc = selectedIndex !== null ? PROJECT_DATA[selectedIndex].longDesc : defaultDesc;

  useEffect(() => {
    const targetSuffix = selectedIndex !== null ? `/${PROJECT_DATA[selectedIndex].name}` : "";

    setDisplayedDesc("");
    setDisplayedSuffix("");

    let h1Idx = 0;
    let descIdx = 0;
    let sequenceTimeout: any;

    const typeH1 = () => {
      if (h1Idx < targetSuffix.length) {
        setDisplayedSuffix(targetSuffix.slice(0, h1Idx + 1));
        h1Idx++;
        sequenceTimeout = setTimeout(typeH1, 60);
      } else {
        typeDesc();
      }
    };

    const typeDesc = () => {
      if (descIdx < targetDesc.length) {
        setDisplayedDesc(targetDesc.slice(0, descIdx + 1));
        descIdx++;
        sequenceTimeout = setTimeout(typeDesc, 15);
      }
    };

    typeH1();

    return () => {
      clearTimeout(sequenceTimeout);
    };
  }, [selectedIndex]);

  const modelRef = useRef<any>(null);

  useEffect(() => {
    if (modelRef.current) {
      if (selectedIndex !== null) {
        modelRef.current.pause();
      } else {
        modelRef.current.play();
      }
    }
  }, [selectedIndex]);

  return (
    <div 
      onClick={() => {}} // Empty click to help mobile bubble-up
      className={`flex flex-col items-center min-h-screen relative text-white pb-24 md:pb-0 px-4 sm:px-6 overflow-x-clip ${!isDesktop ? 'cursor-pointer' : ''}`}
    >
      <div className="fixed inset-0 bg-[#111] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] -z-10" aria-hidden="true" />

      <div className="w-full order-first md:order-last">
        <Footer />
      </div>

      <div className="max-w-[1600px] px-4 md:px-12 w-full flex-grow pt-9 md:pt-36 relative z-10">

        <div className="md:mb-16 mb-4 flex flex-col gap-3 relative">
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white font-sans flex items-baseline">
            ./PROJECTS&nbsp;
            <span className="relative text-zinc-600">
              <span className="invisible select-none" aria-hidden="true">
                {selectedIndex !== null ? `/${PROJECT_DATA[selectedIndex].name}` : ""}
              </span>
              <span className="absolute top-0 left-0">
                {displayedSuffix}
              </span>
            </span>
          </h1>

          <div className="flex flex-row items-end gap-2 md:gap-8 min-h-[100px] relative">
            <div className="relative bg-zinc-200 p-2 md:p-6 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] md:rotate-[-1deg] max-w-2xl flex-grow overflow-hidden">
              <div className="hidden sm:flex absolute top-0 right-2 w-20 h-10 p-1 flex-col justify-between items-center rotate-1">
                <div className="w-full h-7 bg-[linear-gradient(90deg,#000_1px,transparent_1px,transparent_3px,#000_3px,#000_4px,transparent_4px,transparent_5px,#000_5px,#000_7px,transparent_7px,transparent_8px,#000_8px,#000_9px,transparent_9px,transparent_11px,#000_11px,#000_12px,transparent_12px,transparent_15px,#000_15px,#000_16px,transparent_16px,transparent_17px,#000_17px,#000_20px,transparent_20px,transparent_22px,#000_22px,#000_23px,transparent_23px,transparent_25px,#000_25px,#000_28px)] bg-[length:30px_100%]"></div>
                <span className="text-[6px] font-mono text-black font-bold tracking-widest leading-none">0412-2026-MLL</span>
              </div>

              <div className="absolute md:top-4 md:right-2 top-1 right-1 md:border-4 border-2 border-red-600 text-red-300 font-bold md:text-2xl text-[9px] md:text-3xl px-2 py-1 rotate-12 opacity-40 mix-blend-multiply tracking-widest font-mono pointer-events-none">
                CONFIDENTIAL
              </div>

              <div className="absolute md:top-1 top-1 md:left-1/2 right-0 -translate-x-1/2 md:w-4 w-2 h-2 md:h-4 rounded-full bg-red-600 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] z-50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black/40 translate-x-[1px] translate-y-[1px]" />
              </div>

              <p className="text-black font-mono md:text-[14px] text-[10px] leading-tight md:leading-relaxed min-h-[48px] md:min-h-[64px] font-bold uppercase tracking-tight relative z-10 w-full md:w-[85%]">
                <span className="invisible select-none" aria-hidden="true">
                  {targetDesc}
                </span>
                <span className="absolute top-0 left-0 w-full pr-0 sm:pr-16">
                  {displayedDesc}
                </span>
              </p>
            </div>

            <div className={`w-24 h-24 md:w-48 md:h-48 shrink-0 relative transition-all duration-300 drop-shadow-[0_4px_24px_rgba(255,255,255,0.2)] ${selectedIndex !== null ? 'blur-[4px] brightness-[0.4] grayscale' : ''}`}>
              {hasMounted && (
                <model-viewer
                  ref={modelRef}
                  src="/models/animcat.glb"
                  autoplay
                  animation-name={activeAnimation}
                  animation-crossfade-duration="300"
                  camera-orbit="-222deg 75deg 105%"
                  camera-controls
                  disable-zoom
                  disable-tap
                  shadow-intensity="1"
                  environment-image="neutral"
                  exposure="1"
                  interaction-prompt="none"
                  style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                  {...({ reveal: 'auto' } as any)}
                >
                  <div slot="progress-bar" />
                </model-viewer>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-48 mt-9 md:mt-24">
          {PROJECT_DATA.map((project: any, i: number) => (
            <div key={project.name} className={`relative flex flex-col ${project.gridSpan}`}>
              <div
                onMouseEnter={() => isDesktop && setHoveredIndex(i)}
                onMouseLeave={() => isDesktop && setHoveredIndex(null)}
                onClick={(e) => {
                  if (!isDesktop) {
                    if (activeIndex === i) {
                      setActiveIndex(null); // Clear blur before opening link
                      window.open(project.link, '_blank');
                    } else {
                      // Immediately switch to the new project instead of just clearing selection
                      setActiveIndex(i);
                    }
                  } else {
                    window.open(project.link, '_blank');
                  }
                }}
                className={`project-card group relative p-3 md:p-8 flex flex-col transition-all duration-200 cursor-pointer select-none 
                  ${!isDesktop && activeIndex !== null && activeIndex !== i ? 'cursor-not-allowed' : ''}
                   ${selectedIndex === i ? 'rotate-0 z-40 bg-white text-black border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.3)]' : project.styles}
                  md:hover:rotate-0 md:hover:bg-white md:hover:text-black md:hover:border-4 md:hover:border-white md:hover:shadow-[8px_8px_0_rgba(255,255,255,0.3)]
                  ${isInactiveMobileCard && activeIndex !== i ? '' : 'active:opacity-80'}
                  ${selectedIndex !== null && selectedIndex !== i
                    ? 'blur-[4px] brightness-[0.4] grayscale'
                    : 'blur-0 opacity-100 grayscale-0'
                  }`}
              >
              <div className={`absolute shadow-sm z-50 ${project.tape}`} />

              {project.bgImage && (
                <img
                  src={project.bgImage}
                  alt=""
                  className={`absolute ${project.bgPos || 'bottom-0 right-0'} w-32 h-32 md:w-44 md:h-44 opacity-[0.08] md:opacity-[0.3] filter brightness-0 pointer-events-none z-0`}
                />
              )}

              <div className="flex justify-between items-center mb-2 border-b-2 border-black/20 pb-1">
                <span className="font-mono text-[7px] md:text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {project.serial}
                </span>
                <span className={`font-mono text-[7px] md:text-[10px] font-bold uppercase tracking-widest px-1 md:px-2 py-0.5 rounded-sm ${project.clearance === 'TOP_SECRET' || project.clearance === 'EVIDENCE' ? 'bg-red-600/20 text-red-600' : 'bg-black/10'}`}>
                  [{project.clearance}]
                </span>
              </div>

              <h3 className="text-lg md:text-4xl font-black uppercase tracking-tighter md:mb-6 mb-2 font-sans relative inline-block w-fit leading-none">
                {project.name}
              </h3>

              <p className="font-mono text-[9px] md:text-[12px] font-bold leading-tight mb-6 md:mb-10 flex-1 opacity-80">
                {project.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black/20">
                <div className="flex flex-wrap gap-1.5 md:gap-2 relative z-20">
                  {project.tech.map((t: any) => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>
              </div>
            </div>
            {!isDesktop && activeIndex === i && (
              <div className="relative mt-4 z-10 w-full text-center text-[8px] uppercase tracking-[0.25em] font-mono text-white/70 animate-subtle-float pointer-events-none">
                [tap to open]
              </div>
            )}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}