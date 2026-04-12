import Footer from '@/components/footer';

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 bg-black text-white pb-32 md:pb-0">
      <div className="w-full order-first md:order-last">
        <Footer />
      </div>
      <div className="max-w-5xl w-full flex-grow pt-4 md:pt-36">
        <div className="md:mb-16 mb-4 flex flex-col gap-3">
          <h1 className="text-5xl font-satoshi font-bold tracking-tighter text-left">
            . /about
          </h1>
          <p className="text-zinc-600 font-mono md:text-[14px] text-[12px] max-w-xl leading-relaxed mt-4 text-left">
            Lead Developer and AI Specialist dedicated to building intuitive and impactful digital products.
          </p>
        </div>
        <div className="space-y-6 text-[12px] text-zinc-400 leading-relaxed text-center sm:text-left">
          <p>
            With a background in software engineering and a passion for artificial intelligence, I bridge the gap between complex technology and user-centric design.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </div>
  );
}
