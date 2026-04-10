import Footer from '@/components/footer';

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 pt-24 md:pt-36 bg-black text-white">
      <div className="max-w-2xl w-full flex-grow">
        <h1 className="text-5xl font-bold tracking-tight mb-8 text-center sm:text-left">
          About Me
        </h1>
        <div className="space-y-6 text-[12px] text-zinc-400 leading-relaxed text-center sm:text-left">
          <p>
            I&apos;m Marthan Lanuzga, a Lead Developer and AI Specialist dedicated to building intuitive and impactful digital products.
          </p>
          <p>
            With a background in software engineering and a passion for artificial intelligence, I bridge the gap between complex technology and user-centric design.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
