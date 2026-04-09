export default function Projects() {
  const projectData = [
    {
      name: "pathfinder",
      tag: "AI & IoT",
      desc: "Interactive tourism using Raspberry Pi and RAG.",
      tech: ["Python", "Raspberry Pi", "RAG"],
      featured: true
    },
    {
      name: "med-id",
      tag: "Computer Vision",
      desc: "AI-powered medicine identifier utilizing Computer Vision.",
      tech: ["TensorFlow", "OpenCV", "Python"],
      featured: false
    },
    {
      name: "reflex",
      tag: "Engine",
      desc: "Coding behavior analysis using AST traversal.",
      tech: ["AST", "TypeScript", "Algorithms"],
      featured: true
    },
    {
      name: "pokebind",
      tag: "E-commerce",
      desc: "Specialized marketplace for trading and purchasing booster packs.",
      tech: ["React", "Supabase", "Tailwind"],
      featured: false
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-6 md:pt-36 pt-12 pb-40 bg-black text-white">
      <div className="max-w-5xl w-full">

        <div className="mb-24 flex flex-col gap-3">
          <h1 className="text-4xl font-mono font-bold tracking-tighter">./projects</h1>
          <p className="text-zinc-600 font-mono text-[13px] max-w-xl leading-relaxed">
            Get to know me more through my projects! Click the cards to find more!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {projectData.map((project, i) => (
            <div
              key={project.name}
              className="group relative p-5 md:p-7 h-full flex flex-col rounded-xl bg-zinc-900/40 hover:bg-zinc-800/60 transition-all duration-500 cursor-pointer overflow-hidden border border-white/[0.03] hover:border-white/10"
            >
              <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)'
                }}
              />
              <div className="absolute top-0 left-0 bottom-0 w-px pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)'
                }}
              />

              <h3 className="text-2xl md:text-3xl font-bold lowercase font-mono tracking-tighter mb-9 group-hover:text-white transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-zinc-500 text-[12px] leading-relaxed mb-8 flex-1">
                {project.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.04]">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-mono text-zinc-600 italic">
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="text-zinc-700 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 text-sm">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}