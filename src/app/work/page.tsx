import Footer from '@/components/footer';

export default function Work() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 bg-black text-white pb-32 md:pb-0">
      <div className="w-full order-first md:order-last">
        <Footer />
      </div>
      <div className="max-w-5xl w-full flex-grow pt-4 md:pt-36">

        {/* Increased bottom margin and gap for better typography breathing room */}
        <div className="md:mb-20 mb-8 flex flex-col gap-6">
          <h1 className="text-5xl font-satoshi font-bold tracking-tighter">
            . /work
          </h1>
          {/* Increased contrast from zinc-600 to zinc-400 */}
          <p className="text-zinc-400 font-mono md:text-[14px] text-[12px] max-w-xl leading-relaxed mt-4">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat about anything. You can even confess your crimes to me, I won't judge (jk).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">

          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-500 font-satoshi">Experience</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
            </div>

            <div className="space-y-8 pl-2">
              <div className="relative border-l-1 border-zinc-800 pl-6 py-1 group hover:border-zinc-500 transition-colors duration-300">
                <div className="text-[12px] font-arial text-zinc-500 mb-2 uppercase tracking-widest">Dec 2025 — Present</div>
                <h3 className="text-xl font-bold font-satoshi text-zinc-200 tracking-tight">
                  Lead Developer <span className="text-zinc-600 font-normal text-md">/ Sasquatch</span>
                </h3>
                {/* Increased contrast from zinc-500 to zinc-400 */}
                <p className="text-zinc-400 text-[13px] leading-relaxed mt-2 max-w-sm">
                  Building and architecting a behavior-aware AI coding assistant.
                </p>
              </div>

              <div className="relative border-l-1 border-zinc-800 pl-6 py-1 group hover:border-zinc-500 transition-colors duration-300">
                <div className="text-[12px] font-arial text-zinc-500 mb-2 uppercase tracking-widest">May 2025 — Aug 2025</div>
                <h3 className="text-xl font-bold font-satoshi text-zinc-200 tracking-tight">
                  Software Dev Intern <span className="text-zinc-600 font-normal text-md">/ DOST-ASTI</span>
                </h3>
                {/* Increased contrast from zinc-500 to zinc-400 */}
                <p className="text-zinc-400 text-[13px] leading-relaxed mt-2 max-w-sm">
                  Designed and implemented a modular data processing pipeline in Python.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-500 font-satoshi ">Current Vectors</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
            </div>

            <div className="grid gap-4">
              <div className="p-5 rounded-xl border border-white/[0.05] bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-zinc-700 font-mono mt-0.5">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300 tracking-tight mb-1">Mobile-First Cloud IDE</h4>
                    {/* Increased contrast from zinc-500 to zinc-400 */}
                    <p className="text-[12px] text-zinc-400 leading-relaxed">
                      Developing a zero-setup, persistent environment leveraging GitHub Codespaces to enable seamless remote "vibe coding" workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-white/[0.05] bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-zinc-700 font-mono mt-0.5">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-300 tracking-tight mb-1">AI Agent Orchestration</h4>
                    {/* Increased contrast from zinc-500 to zinc-400 */}
                    <p className="text-[12px] text-zinc-400 leading-relaxed">
                      Exploring autonomous systems and Human-in-the-Loop machine learning architectures for continuous model improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-sm mt-12">
          <a
            href="mailto:tanlanuzga@gmail.com"
            className="flex items-center justify-center p-4 bg-transparent border border-zinc-800 rounded-xl hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/marthan-lanuzga-01b8b5287/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-transparent border border-zinc-800 rounded-xl hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300 group"
          >
            <svg viewBox="0 0 128 128" className="w-5 h-5 fill-zinc-500 group-hover:fill-white transition-colors">
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11V107zM30.11 40.77a10.5 10.5 0 1110.5-10.49 10.5 10.5 0 01-10.5 10.49zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.72h17.38v7.95h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.26 107 59.35 107 75V107z" />
            </svg>
          </a>

          <a
            href="https://github.com/bikemaster2331"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-transparent border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all duration-300 group"
          >
            <svg viewBox="0 0 128 128" className="w-5 h-5 fill-zinc-500 group-hover:fill-white transition-colors">
              <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.681 17.303 49.316 41.297 57.302 3.017.559 4.125-1.31 4.125-2.905 0-1.434-.055-6.27-.083-11.242-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.256 6.223 9.256 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.708-27.514-29.858 0-6.592 2.355-11.983 6.222-16.206-.628-1.53-2.697-7.67.585-15.991 0 0 5.07-1.623 16.61 6.191a57.396 57.396 0 0115.111-2.032c5.132.024 10.3.693 15.127 2.032 11.53-7.814 16.59-6.191 16.59-6.191 3.291 8.32 1.225 14.46.596 15.991 3.876 4.223 6.212 9.614 6.212 16.206 0 23.21-14.123 28.311-27.584 29.806 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.076 14.583-.076 16.574 0 1.609 1.088 3.487 4.154 2.894 23.971-8.002 41.256-30.63 41.256-57.299 0-33.353-27.038-60.388-60.392-60.388z" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}