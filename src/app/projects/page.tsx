import Footer from '@/components/footer';

export default function Projects() {
  const projectData = [
    {
      name: "pathfinder",
      tag: "AI & IoT",
      desc: "Interactive tourism using Raspberry Pi and RAG.",
      tech: ["Python", "Raspberry Pi", "RAG"],
      link: "https://github.com/bikemaster2331/pathfinder",
      featured: true
    },
    {
      name: "med-id",
      tag: "Computer Vision",
      desc: "AI-powered medicine identifier utilizing Computer Vision.",
      tech: ["TensorFlow", "OpenCV", "Python"],
      link: "https://github.com/bikemaster2331/med-id",
      featured: false
    },
    {
      name: "reflex",
      tag: "Engine",
      desc: "Coding behavior analysis using AST traversal.",
      tech: ["AST", "TypeScript", "Algorithms"],
      link: "https://github.com/bikemaster2331/reflex",
      featured: true
    },
    {
      name: "pokebind",
      tag: "E-commerce",
      desc: "Specialized marketplace for trading and purchasing booster packs.",
      tech: ["React", "Supabase", "Tailwind"],
      link: "https://github.com/bikemaster2331/pokebind",
      featured: false
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-6 pt-24 md:pt-36 bg-black text-white">
      <div className="max-w-5xl w-full flex-grow">

        <div className="md:mb-24 mb-14 flex flex-col gap-3">
          <h1 className="text-4xl font-mono font-bold tracking-tighter">./projects</h1>
          <p className="text-zinc-600 font-mono md:text-[13px] text-[12px] max-w-xl leading-relaxed">
            Get to know me more through my projects! I call this page the "vault". Click the cards for the repo!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 group/list">
          {projectData.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative p-5 md:p-7 h-full flex flex-col rounded-xl bg-zinc-900/40 hover:bg-zinc-800/60 transition-all duration-700 cursor-pointer overflow-hidden border-2 border-zinc-800 group-hover/list:blur-[4px] group-hover/list:opacity-40 hover:!blur-none hover:!opacity-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold lowercase font-mono tracking-tighter md:mb-9 mb-4 group-hover:text-white transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-zinc-500 md:text-[12px] text-[10px] leading-relaxed mb-8 flex-1">
                {project.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4">
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
            </a>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}