import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative bg-[#050505] border-t border-white/[0.05] mt-auto">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto w-full px-6 py-4 md:py-6 flex flex-col md:flex-row justify-center items-center md:gap-16 gap-8">

        {/* Left Side: Copyright & Status */}
        <div className="flex items-center gap-4">
          <p className="text-[9px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} MLL
          </p>
          <div className="hidden md:block w-px h-3 bg-zinc-800" /> {/* Separator line */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
              BIKEMASTER2331
            </span>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://github.com/bikemaster2331"
            target="_blank"
            rel="noreferrer"
            className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="/cv/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
          >
            Access_CV
            <svg className="w-2 h-2 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;