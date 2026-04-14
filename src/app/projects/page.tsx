"use client";
import React, { useState, useEffect } from 'react';
import Footer from '@/components/footer';

const TechIcons: Record<string, React.ReactNode> = {
  TypeScript: (<svg viewBox="0 0 128 128" className="w-full h-full"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" /><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" /></svg>),
  Python: (<svg viewBox="0 0 128 128" className="w-full h-full"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" /><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" /><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" /><stop offset="1" stopColor="#7F7F7F" stopOpacity="0" /></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" /></svg>),
  React: (<svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" strokeWidth="1" className="w-full h-full"><circle cx="0" cy="0" r="2.05" fill="#61DAFB" stroke="none" /><g><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>),
  Tailwind: (<svg viewBox="0 0 128 128" className="w-full h-full"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8" /></svg>),
  Supabase: (<svg viewBox="0 0 24 24" fill="#3ECF8E" className="w-full h-full"><path d="M21.362 9.354H12V.396L2.638 14.646H12v8.958l9.362-14.25z" /></svg>),
  "Next.js": (<svg viewBox="0 0 128 128" fill="currentColor" className="w-full h-full text-white"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.4v31.7h-9.5V40.9h9.5l45.4 59c7.9-9.1 12.7-21 12.7-33.9C128 28.7 99.3 0 64 0zM118.5 64c0 11.2-3.6 21.6-9.7 30.1L68.4 40.9h12.3l37.8 51.5c.3-.8.6-1.6.8-2.4V40.9h9.5v28.2c-.4-1.7-.3-3.4-.3-5.1z" /></svg>),
  Algorithms: (<svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
  AST: (<svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><line x1="12" y1="8" x2="7" y2="16.5" /><line x1="12" y1="8" x2="17" y2="16.5" /></svg>),
  RAG: (<svg viewBox="0 0 24 24" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8" /><path d="M8 13h6" /></svg>),
  "Raspberry Pi": (<svg viewBox="0 0 128 128" className="w-full h-full"><path d="M42.489 5.002c-.606.018-1.258.239-1.998.814-1.813-.689-3.57-.928-5.142.474-2.427-.31-3.216.33-3.814 1.077-.532-.011-3.986-.54-5.57 1.788-3.98-.464-5.239 2.306-3.814 4.889-.812 1.24-1.655 2.464.246 4.827-.672 1.317-.255 2.744 1.33 4.473-.419 1.85.403 3.155 1.877 4.173-.276 2.531 2.357 4.004 3.143 4.528.302 1.475.932 2.868 3.94 3.637.495 2.2 2.303 2.579 4.053 3.04-5.785 3.313-10.746 7.67-10.712 18.363l-.848 1.49c-6.633 3.973-12.601 16.743-3.269 27.123.61 3.25 1.632 5.583 2.542 8.166 1.362 10.409 10.247 15.282 12.59 15.859 3.435 2.576 7.092 5.02 12.042 6.733 4.665 4.74 9.72 6.546 14.803 6.544h.224c5.083.003 10.138-1.804 14.803-6.544 4.95-1.712 8.607-4.157 12.041-6.733 2.344-.577 11.229-5.45 12.59-15.86.91-2.582 1.933-4.915 2.543-8.165 9.332-10.38 3.364-23.152-3.27-27.126l-.848-1.488c.034-10.692-4.927-15.05-10.712-18.363 1.75-.461 3.558-.841 4.054-3.04 3.007-.77 3.636-2.162 3.938-3.637.787-.525 3.42-1.997 3.144-4.53 1.474-1.016 2.296-2.322 1.878-4.172 1.584-1.728 2-3.156 1.328-4.472 1.902-2.362 1.058-3.587.246-4.827 1.425-2.583.168-5.353-3.814-4.889-1.584-2.327-5.037-1.798-5.57-1.788-.598-.747-1.387-1.387-3.814-1.077-1.571-1.401-3.329-1.162-5.142-.473-2.152-1.673-3.577-.332-5.204.175-2.606-.84-3.202.31-4.482.778-2.842-.592-3.706.696-5.069 2.056l-1.585-.031c-4.286 2.488-6.416 7.555-7.17 10.16-.756-2.606-2.88-7.673-7.166-10.16l-1.585.03c-1.364-1.36-2.228-2.647-5.07-2.055-1.28-.468-1.875-1.617-4.483-.778-1.068-.333-2.05-1.025-3.206-.99l.002.001" fill="#050606" /><path d="M34.04 15.95c11.373 5.774 17.984 10.447 21.606 14.426-1.854 7.323-11.531 7.657-15.07 7.451.725-.332 1.33-.73 1.544-1.34-.888-.622-4.036-.066-6.234-1.283.844-.172 1.239-.34 1.634-.953-2.077-.653-4.313-1.215-5.629-2.296.71.01 1.373.157 2.3-.477-1.86-.987-3.845-1.769-5.386-3.278.96-.023 1.998-.01 2.3-.358-1.703-1.038-3.14-2.194-4.328-3.457 1.346.16 1.914.022 2.24-.21-1.288-1.297-2.916-2.393-3.693-3.993 1 .34 1.914.47 2.573-.03-.438-.972-2.311-1.545-3.39-3.815 1.052.1 2.168.226 2.391 0-.488-1.96-1.326-3.061-2.148-4.202 2.251-.033 5.662.008 5.508-.18l-1.392-1.4c2.199-.583 4.449.094 6.083.596.733-.57-.013-1.29-.908-2.027 1.869.246 3.557.67 5.083 1.252.816-.725-.529-1.45-1.18-2.176 2.888.54 4.111 1.298 5.326 2.057.883-.833.05-1.54-.544-2.265 2.177.794 3.298 1.82 4.479 2.831.4-.532 1.016-.922.272-2.206 1.545.878 2.71 1.912 3.57 3.07-.957-.6.57-1.42-.576-2.175 1.606 1.287-2.626 2.656 3.874 3.994.25-.18.47-.792.665-1.759 3.832 3.662 9.247 12.886 1.392 16.543-6.685-5.43-14.67-9.378-23.517-12.34h.002m60.239 0c-11.373 5.775-17.984 10.446-21.606 14.426 1.855 7.323 11.532 7.657 15.07 7.451-.725-.332-1.329-.73-1.543-1.34.888-.622 4.036-.066 6.234-1.283-.844-.172-1.24-.34-1.634-.953 2.076-.653 4.313-1.215 5.628-2.296-.71.01-1.373.157-2.3-.477 1.86-.987 3.845-1.769 5.387-3.278-.962-.023-1.998-.01-2.3-.358 1.703-1.038 3.139-2.194 4.328-3.457-1.346.16-1.914.022-2.24-.21 1.287-1.297 2.916-2.393 3.692-3.993-.999.34-1.913.47-2.572-.03.437-.972 2.31-1.545 3.39-3.815-1.053.1-2.168.226-2.392 0 .49-1.96 1.327-3.062 2.149-4.203-2.251-.033-5.662.008-5.508-.179l1.393-1.4c-2.2-.584-4.45.093-6.083.595-.734-.57.013-1.29.907-2.027-1.868.246-3.557.67-5.083 1.252-.816-.725.529-1.45 1.18-2.176-2.887.54-4.11 1.298-5.326 2.057-.882-.833-.05-1.54.544-2.265-2.177.794-3.298 1.82-4.478 2.831-.4-.532-1.017-.922-.273-2.206-1.545.878-2.71 1.912-3.57 3.07-.957-.6-.57-1.42-.576-2.175-1.606 1.287-2.626 2.657-3.873 3.994-.251-.18-.471-.792-.666-1.759-3.832 3.662-9.247 12.886-1.392 16.543 6.682-5.432 14.665-9.379 23.514-12.34h-.001" fill="#63c54d" /><path d="M77.913 90.52c.04 6.833-6.028 12.402-13.551 12.438-7.524.036-13.655-5.474-13.695-12.308v-.13c-.04-6.834 6.027-12.403 13.551-12.439 7.524-.036 13.655 5.474 13.695 12.308v.13M56.672 55.173c5.645 3.642 6.662 11.9 2.273 18.442-4.39 6.543-12.524 8.894-18.169 5.251-5.644-3.642-6.662-11.9-2.273-18.442 4.39-6.543 12.524-8.894 18.169-5.251m15.236-.66c-5.645 3.643-6.663 11.9-2.273 18.443 4.39 6.542 12.524 8.894 18.168 5.25 5.645-3.642 6.663-11.899 2.273-18.442-4.39-6.542-12.523-8.893-18.168-5.25m-43.099 6.652c6.094-1.609 2.057 24.835-2.901 22.665-5.455-4.321-7.212-16.977 2.9-22.665m70.43-.329c-6.095-1.609-2.058 24.835 2.901 22.666 5.455-4.322 7.211-16.978-2.901-22.666m-20.44-19.73c10.517-1.75 19.268 4.405 18.915 15.639-.346 4.306-22.79-14.998-18.915-15.64m-29.059-.329c-10.519-1.75-19.27 4.407-18.916 15.64.346 4.306 22.79-14.999 18.916-15.64m14.489-2.62c-6.277-.16-12.301 4.59-12.316 7.344-.017 3.348 4.963 6.775 12.36 6.862 7.552.053 12.371-2.743 12.396-6.198.027-3.914-6.87-8.068-12.44-8.008m.485 68.645c5.473-.236 12.817 1.736 12.831 4.351.091 2.54-6.66 8.278-13.194 8.168-6.767.287-13.402-5.46-13.315-7.452-.101-2.921 8.24-5.201 13.678-5.067M44.459 91.3c3.896 4.625 5.672 12.748 2.421 15.142-3.076 1.829-10.547 1.076-15.858-6.438-3.58-6.304-3.119-12.72-.604-14.605 3.76-2.256 9.57.791 14.04 5.901m39.232-1.465c-4.217 4.864-6.565 13.735-3.489 16.592 2.94 2.22 10.834 1.91 16.666-6.06 4.234-5.352 2.815-14.29.397-16.664-3.593-2.738-8.75.765-13.575 6.13v.002" fill="#c51850" /></svg>),
  TensorFlow: (<svg viewBox="0 0 128 128" className="w-full h-full"><path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z" fill="#ff6f00" /></svg>),
  OpenCV: (<svg viewBox="0 0 128 128" className="w-full h-full"><path d="M112.871 66.602c9.004 5.277 15.055 15.027 15.074 26.191.032 16.805-13.617 30.453-30.48 30.48-16.863.032-30.559-13.57-30.59-30.375-.02-11.164 5.996-20.933 14.984-26.246l8.774 14.778c.219.37.094.847-.262 1.09-3.32 2.25-5.496 6.046-5.488 10.347.012 6.895 5.633 12.477 12.55 12.461 6.919-.012 12.516-5.61 12.504-12.504-.007-4.3-2.195-8.09-5.523-10.328-.355-.242-.484-.719-.266-1.09zm0 0" fill="#128dff" /><path d="M45.477 66.422a30.495 30.495 0 00-14.907-3.867C13.703 62.555.035 76.18.035 92.985c0 16.804 13.668 30.43 30.535 30.43 16.946 0 30.95-14.337 30.524-31.212H43.906c-.453 0-.808.383-.812.832-.043 6.723-5.672 12.434-12.524 12.434-6.922 0-12.527-5.59-12.527-12.485 0-6.894 5.605-12.484 12.527-12.484 1.809 0 3.532.383 5.086 1.074.383.168.836.04 1.047-.316zm0 0" fill="#8bda67" /><path d="M47.945 61.648c-8.992-5.293-15.027-15.054-15.027-26.218C32.918 18.625 46.59 5 63.453 5s30.535 13.625 30.535 30.43c0 11.164-6.035 20.925-15.027 26.218L70.21 46.86c-.219-.37-.094-.847.266-1.09 3.32-2.246 5.503-6.039 5.503-10.34 0-6.894-5.609-12.484-12.527-12.484-6.918 0-12.527 5.59-12.527 12.485 0 4.3 2.183 8.093 5.504 10.34.36.242.484.718.265 1.09zm0 0" fill="#ff2a44" /></svg>)
};

const TechBadge = ({ name }: { name: string }) => {
  const icon = TechIcons[name] || TechIcons["Algorithms"];
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-black border-2 border-black shadow-[2px_2px_0_rgba(255,255,255,0.2)] md:hover:shadow-[4px_4px_0_rgba(255,255,255,0.4)] md:hover:-translate-y-1 md:hover:-translate-x-1 transition-all group/badge z-20">
      <div className="w-3.5 h-3.5 opacity-90 md:group-hover/badge:opacity-100 transition-opacity drop-shadow-md">
        {icon}
      </div>
      <span className="hidden md:block text-[10px] font-mono font-bold text-white uppercase tracking-widest leading-none">
        {name}
      </span>
    </div>
  );
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [displayedSuffix, setDisplayedSuffix] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // NEW: Global click listener to deselect on mobile when tapping outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 768) {
        const target = e.target as HTMLElement;
        if (!target.closest('.project-card')) {
          setActiveIndex(null);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const defaultDesc = "Get to know me more through my projects! This is my \"vault\" as of now. Click the cards for the repo!";

  const projectData = [
    {
      name: "pathfinder",
      serial: "01:PTF",
      clearance: "LEVEL_4",
      desc: "Interactive tourism using Raspberry Pi and RAG.",
      longDesc: "Standard AI is usually too vague or outdated to be helpful. Built on a Raspberry Pi, Pathfinder uses a custom database that acts like a local tourist guide.",
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
      desc: "AI-powered medicine identifier utilizing Computer Vision.",
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
      desc: "Specialized marketplace for trading and purchasing booster packs.",
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

  const selectedIndex = isDesktop ? hoveredIndex : activeIndex;
  const isInactiveMobileCard = !isDesktop && activeIndex !== null;

  useEffect(() => {
    const targetDesc = selectedIndex !== null ? projectData[selectedIndex].longDesc : defaultDesc;
    const targetSuffix = selectedIndex !== null ? `/${projectData[selectedIndex].name}` : "";

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

    return () => clearTimeout(sequenceTimeout);
  }, [selectedIndex]);

  return (
    <div className="flex flex-col items-center min-h-screen relative text-white pb-24 md:pb-0 px-4 sm:px-6 overflow-x-clip">
      <div className="fixed inset-0 bg-[#111] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] -z-10" aria-hidden="true" />

      <div className="w-full order-first md:order-last">
        <Footer />
      </div>

      <div className="max-w-7xl w-full flex-grow pt-9 md:pt-36 relative z-10">

        <div className="md:mb-16 mb-4 flex flex-col gap-3 min-h-[160px] relative">

          <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-white font-sans">
            ./PROJECTS <span className="text-zinc-600">{displayedSuffix}</span>
          </h1>

          <div className="relative bg-zinc-200 p-3 md:p-6 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] md:rotate-[-1deg] max-w-2xl mt-4 overflow-hidden">
            <div className="hidden sm:flex absolute top-0 right-2 w-20 h-10 p-1 flex-col justify-between items-center rotate-1">
              <div className="w-full h-7 bg-[linear-gradient(90deg,#000_1px,transparent_1px,transparent_3px,#000_3px,#000_4px,transparent_4px,transparent_5px,#000_5px,#000_7px,transparent_7px,transparent_8px,#000_8px,#000_9px,transparent_9px,transparent_11px,#000_11px,#000_12px,transparent_12px,transparent_15px,#000_15px,#000_16px,transparent_16px,transparent_17px,#000_17px,#000_20px,transparent_20px,transparent_22px,#000_22px,#000_23px,transparent_23px,transparent_25px,#000_25px,#000_28px)] bg-[length:30px_100%]"></div>
              <span className="text-[6px] font-mono text-black font-bold tracking-widest leading-none">0412-2026-MLL</span>
            </div>

            <div className="absolute md:top-4 md:right-2 top-1 right-1 border-4 border-red-600 text-red-300 font-bold md:text-2xl text-[10px] md:text-3xl px-2 py-1 rotate-12 opacity-40 mix-blend-multiply tracking-widest font-mono pointer-events-none">
              CONFIDENTIAL
            </div>

            <div className="absolute md:top-1 top-1 md:left-1/2 right-0 -translate-x-1/2 md:w-4 w-2 h-2 md:h-4 rounded-full bg-red-600 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] z-50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black/40 translate-x-[1px] translate-y-[1px]" />
            </div>

            <p className="text-black font-mono md:text-[14px] text-[10px] leading-relaxed min-h-[48px] md:min-h-[64px] font-bold uppercase tracking-tight relative z-10 w-full md:w-[85%] pr-0 sm:pr-16">
              {displayedDesc}
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-48 mt-9 md:mt-24">
          {projectData.map((project, i) => (
            <div key={project.name} className="relative">
              {!isDesktop && activeIndex === i && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-full text-center text-[8px] uppercase tracking-[0.25em] font-mono text-white/70 animate-subtle-float pointer-events-none">
                  tap again to open repo
                </div>
              )}
              <div
                onMouseEnter={() => isDesktop && setHoveredIndex(i)}
                onMouseLeave={() => isDesktop && setHoveredIndex(null)}
                onClick={() => {
                  if (!isDesktop) {
                    if (activeIndex === i) {
                      window.open(project.link, '_blank');
                    } else if (activeIndex !== null) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(i);
                    }
                  } else {
                    window.open(project.link, '_blank');
                  }
                }}
                className={`project-card group relative p-3 md:p-8 flex flex-col transition-all duration-200 cursor-pointer select-none ${project.gridSpan} 
                  ${!isDesktop && activeIndex !== null && activeIndex !== i ? 'cursor-not-allowed' : ''}
                  ${selectedIndex === i ? 'rotate-0 scale-[1.02] z-40 bg-white text-black border-white shadow-[8px_8px_0_rgba(255,255,255,0.1)] md:shadow-[16px_16px_0_rgba(255,255,255,0.1)]' : project.styles}
                  md:hover:rotate-0 md:hover:scale-[1.02] md:hover:bg-white md:hover:text-black md:hover:border-white md:hover:shadow-[16px_16px_0_rgba(255,255,255,0.1)]
                  ${isInactiveMobileCard && activeIndex !== i ? '' : 'active:scale-95'}
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
                <div className="flex flex-wrap gap-2 relative z-20">
                  {project.tech.map(t => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}