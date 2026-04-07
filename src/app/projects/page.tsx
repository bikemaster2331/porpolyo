export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 pt-20">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold tracking-tight mb-8 text-center sm:text-left">
          Projects
        </h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl text-center sm:text-left">
          A collection of my recent work, ranging from AI-powered applications to high-performance web experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder for project cards */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="text-zinc-400 text-sm mb-4">A brief description of this amazing project and what it accomplishes.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-medium uppercase tracking-wider">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-medium uppercase tracking-wider">AI</span>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-zinc-400 text-sm mb-4">Another incredible project that solves real-world problems with elegant code.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-medium uppercase tracking-wider">React</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-medium uppercase tracking-wider">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
