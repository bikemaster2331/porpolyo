export default function Work() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 pt-12 text-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Let's Work Together
        </h1>
        <p className="text-[12px] text-zinc-400 mb-8 md:mb-12">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat about technology.
        </p>
        
        <div className="space-y-4">
          <a 
            href="mailto:marthan@example.com" 
            className="block w-full py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-colors"
          >
            Send me an Email
          </a>
          
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://www.linkedin.com/in/marthan-lanuzga-01b8b5287/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-4 bg-white/5 border border-white/10 rounded-2xl font-medium hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/bikemaster2331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-4 bg-white/5 border border-white/10 rounded-2xl font-medium hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-zinc-500 text-sm">
            Based in Philippines • Available for worldwide opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
