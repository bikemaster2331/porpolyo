"use client";
import { useState, useRef, useEffect } from 'react';
import Footer from '@/components/footer';

const EXPERIENCE_DATA = [
  {
    title: "Lead Developer",
    company: "Sasquatch",
    period: "Dec 2025 — Present",
    desc: "Building and architecting a behavior-aware AI coding assistant.",
    hoverText: "A PROJECT MADE WITH A FRIEND",
    rotate: "rotate-[1deg]",
    attachment: { type: 'pin', color: 'red', position: 'top-4 right-8' }
  },
  {
    title: "Software Dev Intern",
    company: "DOST-ASTI",
    period: "May 2025 — Aug 2025",
    desc: "Designed and implemented a modular data processing pipeline in Python.",
    hoverText: "Learned so much in here! Inspired me to be much better",
    rotate: "rotate-[-2deg]",
    attachment: { type: 'tape', position: '-top-3 -left-3', slanted: true }
  }
];

const WORK_PROJECT_DATA = [
  {
    id: "01.",
    title: "Mobile-First Cloud IDE",
    desc: "Developing a zero-setup, persistent environment leveraging GitHub Codespaces to enable seamless remote \"vibe coding\" workflows.",
    hoverText: "STOP TREATING DISCIPLINE AS A HOBBY. WORK IS PORTABLE.",
    rotate: "rotate-[-1deg]",
    attachment: { type: 'pin', color: 'gray', position: 'top-4 right-8' }
  },
  {
    id: "02.",
    title: "AI Agent Orchestration",
    desc: "Exploring autonomous systems and Human-in-the-Loop machine learning architectures for continuous model improvement.",
    hoverText: "AUTONOMY WITHOUT SUPERVISION IS JUST CHAOS IN DISGUISE.",
    rotate: "rotate-[2deg]",
    attachment: { type: 'clip', position: '-top-4 left-8 md:left-12' }
  }
];

const Attachment = ({ type, color, position, slanted }: any) => {
  if (type === 'pin') {
    const colorClass = color === 'red' ? 'bg-red-600' : 'bg-zinc-400';
    return (
      <div className={`absolute ${position} w-4 h-4 rounded-full ${colorClass} border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] z-50 flex items-center justify-center`}>
        <div className="w-1.5 h-1.5 rounded-full bg-black/40 translate-x-[1px] translate-y-[1px]" />
      </div>
    );
  }
  if (type === 'tape') {
    return (
      <div className={`absolute ${position} w-12 h-6 bg-white/40 backdrop-blur-[2px] border border-white/20 shadow-[0_1px_3px_rgba(0,0,0,0.1)] ${slanted ? 'rotate-[-35deg]' : ''} z-50 rounded-sm`} />
    );
  }
  if (type === 'clip') {
    return (
      <div className={`absolute ${position} w-4 h-12 border-[3px] border-zinc-400 rounded-full shadow-sm z-50 opacity-90`} />
    );
  }
  return null;
};

export default function Work() {
    const [modelReply, setModelReply] = useState("TOO MANY DEADLINES... I'LL PUT SOME MUSIC.");
    const [displayedReply, setDisplayedReply] = useState("");
    const [isHovering, setIsHovering] = useState(false);
    const quoteIndexRef = useRef(0);

    // --- EXACT ANIMATION NAMES ---
    const [desktopAnim, setDesktopAnim] = useState("FloatIdle");
    const [mobileAnim, setMobileAnim] = useState("CouchIdle");
    const [hasMounted, setHasMounted] = useState(false);

    const animTrackerRef = useRef(1);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const hoverTimeoutRef = useRef<any>(null);

    const handleHoverEnter = (reply: string) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsHovering(true);
        setModelReply(reply);
    };

    const handleHoverLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(false);
        }, 50);
    };

    useEffect(() => {
        if (isHovering) return;

        const quotes = [
            "A BIT MORE COFFEE AND I'LL BE UNSTOPPABLE.",
            "IS IT 3 AM ALREADY? GUSTO KO NANG MATULOG.",
            "JUST ONE MORE PROBLEM AND I'LL TAKE A BREAK. PROBABLY.",
            "BABY J, PLEASE HAVE THE ANSWER I NEED.",
            "THIS BUG IS PERSONAL. I WON'T SLEEP UNTIL IT'S GONE.",
            "LO-FI BEATS ARE THE ONLY THING KEEPING ME SANE RIGHT NOW.",
            "ORGANIZED CHAOS IS STILL ORGANIZATION, RIGHT?",
            "CONCENTRATION IS HIGH. PRODUCTIVITY... WE'LL SEE.",
            "FINAL_FINAL_V2_ACTUAL_FINAL.CODE ... PERFECT.",
            "LEARNING THIS WAS SUPPOSED TO BE EASY. THEY LIED.",
            "QUIET... THE CODE IS FINALLY STARTING TO MAKE SENSE, I THINK...",
            "SEMESTER PROJECTS ARE THE FINAL BOSSES OF COLLEGE.",
            "I'VE LOGGED THE ERRORS. NOW TO PRETEND I UNDERSTAND THEM.",
            "KAAAA MEEEE HAAAA MEEE HAAAAAAAAAA"
        ];

        const timer = setInterval(() => {
            setModelReply(quotes[quoteIndexRef.current % quotes.length]);
            quoteIndexRef.current++;
        }, 5000);

        return () => clearInterval(timer);
    }, [isHovering]);

    useEffect(() => {
        let i = 0;
        setDisplayedReply("");
        const targetText = modelReply || "AWAITING_INPUT";

        // Applying the Chat animations with the tracker (1 through 4)
        setDesktopAnim(`FloatChat${animTrackerRef.current}`);
        setMobileAnim(`CouchChat${animTrackerRef.current}`);

        animTrackerRef.current = animTrackerRef.current >= 4 ? 1 : animTrackerRef.current + 1;

        const interval = setInterval(() => {
            setDisplayedReply(targetText.slice(0, i + 1));
            i++;
            if (i >= targetText.length) {
                clearInterval(interval);
                // Reverting back to idle states
                setDesktopAnim("FloatIdle");
                setMobileAnim("CouchIdle");
            }
        }, 50);

        return () => clearInterval(interval);
    }, [modelReply]);

    return (
        <div className="flex flex-col items-center min-h-screen relative text-white pb-24 md:pb-0 px-4 sm:px-6 overflow-x-clip">

            <div className="fixed inset-0 bg-[#111] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] -z-10" aria-hidden="true" />

            <div className="w-full order-first md:order-last">
                <Footer />
            </div>

            <div className="max-w-[1600px] mx-auto w-full flex-grow md:pt-36 relative z-10 px-2 sm:px-4 md:px-12 flex flex-col lg:flex-row">

                {/* MOBILE ONLY 3D MODEL */}
                <div className="flex lg:hidden items-center justify-center drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] w-full mt-10">
                    {/* Outer wrapper: fixed tall container so the model has real estate */}
                    <div className="w-full max-w-[380px] h-[240px] relative">

                        <div className="absolute -top-6 left-0 z-30 pointer-events-auto w-[220px] -rotate-3">
                            <div className={`transition-all duration-500 transform ${modelReply ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>

                                {/* Main Thought Cloud - Preservation of size, font, and rotation */}
                                <div className="relative bg-[#ffeb3b] text-black p-3 rounded-2xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all duration-300">

                                    <p className="font-mono text-[10px] leading-snug uppercase font-bold tracking-tight text-center w-full break-words relative z-10">
                                        <span className="invisible select-none" aria-hidden="true">
                                            {modelReply || "AWAITING_INPUT"}
                                        </span>
                                        <span className="absolute top-0 left-0 w-full">
                                            {displayedReply}
                                        </span>
                                    </p>

                                    {/* Middle trailing bubble */}
                                    <div className="absolute -bottom-3.5 left-6 w-4 h-4 bg-[#ffeb3b] border-2 border-black rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)]" />

                                    {/* Smallest trailing bubble */}
                                    <div className="absolute -bottom-6 left-10 w-2.5 h-2.5 bg-[#ffeb3b] border-2 border-black rounded-full shadow-[1px_1px_0_rgba(0,0,0,1)]" />

                                </div>

                            </div>
                        </div>

                        {hasMounted && (
                            <model-viewer
                                src="/models/study.glb"
                                autoplay
                                animation-name={mobileAnim}
                                animation-crossfade-duration="300"
                                camera-orbit="90deg 90deg 100%"
                                field-of-view="45deg"
                                camera-controls
                                disable-zoom
                                disable-tap

                                shadow-intensity="1"
                                exposure="0.6"

                                interaction-prompt="none"
                                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                                {...({
                                    reveal: 'auto',
                                    'draco-decoder-config': JSON.stringify({ type: 'js' })
                                } as any)}
                            >
                                <div slot="progress-bar" />
                            </model-viewer>
                        )}
                    </div>
                </div>

                {/* LEFT SIDE: TEXT ZONE */}
                <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col relative z-10">

                    {/* PAGE HEADER */}
                    <div className="mb-10 md:mb-16 flex flex-col relative items-start w-full">
                        <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white font-sans mb-4">
                            ./WORK
                        </h1>

                        <div className="relative bg-[#fefdf8] p-5 md:p-8 border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] rotate-[-1deg] w-full max-w-4xl mt-2 overflow-hidden group hover:rotate-0 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all duration-300">
                            {/* Notebook Blue Lines */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, #3b82f6 24px)' }} />
                            {/* Notebook Red Margin */}
                            <div className="absolute top-0 bottom-0 left-6 md:left-8 w-0.5 bg-red-400/40 pointer-events-none z-0" />

                            <div className="relative z-10 pl-4 md:pl-6">
                                <div className="border-b-2 border-black pb-2 mb-3 md:mb-4 flex justify-between items-end">
                                    <span className="font-mono text-[9px] md:text-[10px] font-bold text-black uppercase tracking-widest">NAME: MARTHAN</span>
                                    <span className="font-mono text-[9px] md:text-[10px] font-bold text-black uppercase tracking-widest px-2 py-0.5">DATE: 2026</span>
                                </div>
                                <p className="text-black font-mono text-[13px] md:text-[15px] font-bold leading-relaxed tracking-tight">
                                    I&apos;m always open to new opportunities, collaborations, or just a friendly chat about anything. You can even confess your crimes to me, I won&apos;t judge (jk).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE + PROJECTS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 mb-16 mt-4 md:mt-12 relative w-full">

                        {/* COLUMN 1: EXPERIENCE */}
                        <div className="flex flex-col gap-6 md:gap-8 w-full">
                            <div className="items-center gap-4 mb-2 flex">
                                <div className="inline-block px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0_rgba(255,255,255,0.2)] z-20 rotate-[-1deg]">
                                    <h2 className="text-[12px] md:text-[14px] font-mono font-bold text-black uppercase tracking-[0.3em] leading-none">
                                        EXPERIENCE
                                    </h2>
                                </div>
                                <div className="h-1 flex-grow bg-black shadow-[0_2px_0_rgba(255,255,255,0.1)] opacity-50"></div>
                            </div>

                            <div className="flex flex-col gap-8 relative z-10">
                                {EXPERIENCE_DATA.map((exp) => (
                                    <div
                                        key={exp.title}
                                        className={`relative bg-[#D4C3A3] p-4 md:p-8 border-4 border-[#8B7D60] shadow-[6px_6px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] ${exp.rotate} hover:rotate-0 hover:scale-[1.02] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 cursor-default`}
                                        onMouseEnter={() => handleHoverEnter(exp.hoverText)}
                                        onMouseLeave={handleHoverLeave}
                                    >
                                        <Attachment {...exp.attachment} />
                                        <div className="font-mono text-[9px] md:text-[10px] font-bold text-black/60 uppercase tracking-widest border-b-2 border-black/20 pb-2 mb-4 md:mb-4">{exp.period}</div>
                                        <h3 className="text-xl md:text-4xl font-black font-sans text-black uppercase tracking-tighter leading-none mb-1 mt-5 md:mt-6">
                                            {exp.title}
                                        </h3>
                                        <div className="font-mono text-[11px] md:text-[12px] font-bold text-black/80 mb-5 md:mb-6 tracking-widest">/ {exp.company}</div>
                                        <p className="text-black font-mono text-[13px] md:text-[14px] font-bold leading-relaxed">
                                            {exp.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* COLUMN 2: CURRENT PROJECTS */}
                        <div className="flex flex-col gap-6 md:gap-8 w-full">
                            <div className="items-center gap-4 mb-2 flex">
                                <div className="inline-block px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0_rgba(255,255,255,0.2)] z-20 rotate-1">
                                    <h2 className="text-[12px] md:text-[14px] font-mono font-bold text-black uppercase tracking-[0.3em] leading-none">
                                        CURRENT PROJECTS
                                    </h2>
                                </div>
                                <div className="h-1 flex-grow bg-black shadow-[0_2px_0_rgba(255,255,255,0.1)] opacity-50"></div>
                            </div>

                            <div className="flex flex-col gap-8 relative z-10">
                                {WORK_PROJECT_DATA.map((proj) => (
                                    <div
                                        key={proj.title}
                                        className={`relative bg-zinc-100 p-4 md:p-8 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] ${proj.rotate} hover:rotate-0 hover:scale-[1.02] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 cursor-default`}
                                        onMouseEnter={() => handleHoverEnter(proj.hoverText)}
                                        onMouseLeave={handleHoverLeave}
                                    >
                                        <Attachment {...proj.attachment} />
                                        <div className="flex items-start gap-4 mt-4 md:mt-4">
                                            <span className="text-zinc-400 font-black font-mono text-2xl md:text-2xl mt-0.5 border-b-2 border-zinc-400">{proj.id}</span>
                                            <div>
                                                <h4 className="text-lg md:text-2xl font-black font-sans text-black uppercase tracking-tighter mb-2 md:mb-2">{proj.title}</h4>
                                                <p className="text-[13px] md:text-[14px] text-black font-mono font-bold leading-relaxed border-t-2 border-black/10 pt-4 md:pt-4 mt-2">
                                                    {proj.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="flex flex-wrap gap-4 md:gap-6 w-full mt-4 md:mt-4 pl-1 md:pl-2 pb-8 relative z-20">
                        <a
                            href="mailto:tanlanuzga@gmail.com"
                            className="flex items-center justify-center p-4 sm:p-4 md:p-5 bg-white border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-[0px_0px_0_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] md:hover:translate-y-[6px] md:hover:translate-x-[6px] transition-all duration-150 group"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-6 md:h-6">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/marthan-lanuzga-01b8b5287/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 sm:p-4 md:p-5 bg-[#0077B5] border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-[0px_0px_0_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] md:hover:translate-y-[6px] md:hover:translate-x-[6px] transition-all duration-150 group"
                        >
                            <svg viewBox="0 0 128 128" className="w-6 h-6 md:w-6 md:h-6 fill-white">
                                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11V107zM30.11 40.77a10.5 10.5 0 1110.5-10.49 10.5 10.5 0 01-10.5 10.49zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.72h17.38v7.95h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.26 107 59.35 107 75V107z" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/bikemaster2331"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 sm:p-4 md:p-5 bg-zinc-800 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-[0px_0px_0_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] md:hover:translate-y-[6px] md:hover:translate-x-[6px] transition-all duration-150 group"
                        >
                            <svg viewBox="0 0 128 128" className="w-6 h-6 md:w-6 md:h-6 fill-white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.681 17.303 49.316 41.297 57.302 3.017.559 4.125-1.31 4.125-2.905 0-1.434-.055-6.27-.083-11.242-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.256 6.223 9.256 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.708-27.514-29.858 0-6.592 2.355-11.983 6.222-16.206-.628-1.53-2.697-7.67.585-15.991 0 0 5.07-1.623 16.61 6.191a57.396 57.396 0 0115.111-2.032c5.132.024 10.3.693 15.127 2.032 11.53-7.814 16.59-6.191 16.59-6.191 3.291 8.32 1.225 14.46.596 15.991 3.876 4.223 6.212 9.614 6.212 16.206 0 23.21-14.123 28.311-27.584 29.806 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.076 14.583-.076 16.574 0 1.609 1.088 3.487 4.154 2.894 23.971-8.002 41.256-30.63 41.256-57.299 0-33.353-27.038-60.388-60.392-60.388z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE: MODEL ZONE */}
                <div className="hidden lg:flex flex-col relative w-[35%] xl:w-[30%]">
                    <div
                        className="sticky top-40 w-full z-0"
                    >
                        <div className="w-full h-[300px] xl:h-[700px] relative transition-all duration-300 drop-shadow-[0_4px_24px_rgba(255,255,255,0.4)] group/model lg:translate-x-12">

                            <div className="absolute top-40 left-0 xl:left-12 z-30 pointer-events-auto max-w-[240px] -rotate-2">
                                <div className={`transition-all duration-500 transform ${modelReply ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>

                                    {/* Main Thought Cloud */}
                                    <div className="relative bg-[#ffeb3b] text-black px-4 py-3 rounded-2xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all duration-300">

                                        <p className="font-mono text-[10px] leading-relaxed uppercase font-bold tracking-tight text-center w-full break-words relative z-10">
                                            <span className="invisible select-none" aria-hidden="true">
                                                {modelReply || "AWAITING_INPUT"}
                                            </span>
                                            <span className="absolute top-0 left-0 w-full">
                                                {displayedReply}
                                            </span>
                                        </p>

                                        {/* Middle trailing bubble */}
                                        <div className="absolute -bottom-4.5 left-8 w-5 h-5 bg-[#ffeb3b] border-2 border-black rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)]" />

                                        {/* Smallest trailing bubble */}
                                        <div className="absolute -bottom-7.5 left-12 w-3 h-3 bg-[#ffeb3b] border-2 border-black rounded-full shadow-[1px_1px_0_rgba(0,0,0,1)]" />

                                    </div>

                                </div>
                            </div>

                            <div className="w-full h-full absolute inset-0">
                                {hasMounted && (
                                    <model-viewer
                                        src="/models/study.glb"
                                        autoplay
                                        animation-name={desktopAnim}
                                        animation-crossfade-duration="300"
                                        camera-orbit="140deg 75deg 100%"
                                        field-of-view="35deg"
                                        camera-controls
                                        disable-zoom
                                        disable-tap

                                        shadow-intensity="1"
                                        exposure="0.6"

                                        interaction-prompt="none"
                                        className="pointer-events-auto"
                                        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                                        {...({
                                            reveal: 'auto',
                                            'draco-decoder-config': JSON.stringify({ type: 'js' })
                                        } as any)}
                                    >
                                        <div slot="progress-bar" />
                                    </model-viewer>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}