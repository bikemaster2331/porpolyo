"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer';

const ALBUM_DATA = [
  {
    id: 'scribble',
    label: ':)',
    src: '/images/bgg.png',
    title: 'Friends\' Scribble',
    desc: 'thank you guys sa mga nag scribble, love lots!! 😭',
    year: '2026',
    rotate: '-rotate-2',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'whalee',
    label: '//',
    src: '/images/whalee.jpg',
    title: 'Whalee',
    desc: null,
    year: '2026',
    rotate: 'rotate-1',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'everest',
    label: 'YAY',
    src: '/images/everest.png',
    title: 'Everest Dreams',
    desc: 'codex put everest here',
    year: '1994',
    rotate: 'rotate-3',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'license',
    label: 'mi lisensya',
    src: '/images/license.png',
    title: 'License',
    desc: null,
    year: '2026',
    rotate: '-rotate-[-2deg]',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'cat',
    label: 'sigma',
    src: '/images/cat.png',
    title: 'Cat',
    desc: null,
    year: '2026',
    rotate: 'rotate-3',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'coolest',
    label: 'cool',
    src: '/images/gatty.png',
    title: 'BG',
    desc: '2:05 AM na currently',
    year: '2026',
    rotate: '-rotate-3',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'catty',
    label: 'catty',
    src: '/images/cat.jpeg',
    title: 'Catty',
    desc: 'my catty',
    year: '2026',
    rotate: '-rotate-3',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'game',
    label: 'goat game',
    src: '/images/aa.jpeg',
    title: 'Dispatch',
    desc: 'dispatch!! blonde blazer route,,, man i love malevola',
    year: '2026',
    rotate: '-rotate-3',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'ellie',
    label: 'TLOU2',
    src: '/images/ellie.jpeg',
    title: 'Ellie',
    desc: 'hinanap > nahanap > suntukan > pinaalis',
    year: '2026',
    rotate: 'rotate-3',
    aspect: 'aspect-[16/9]'
  },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-6 bg-black text-white pb-18 md:pb-0 relative">
      <div className="w-full order-first md:order-last">
        <Footer />
      </div>

      <div className="max-w-7xl w-full flex-grow pt-4 md:pt-36">

        {/* HEADER */}
        <div className="md:mb-16 mb-12 flex flex-col gap-3">
          <h1 className="md:text-5xl text-3xl font-satoshi font-bold tracking-tighter text-left mt-6">
            . /about
          </h1>

          <div className="flex items-baseline flex-wrap gap-2 mt-4 max-w-xl cursor-default">
            <span className="text-zinc-400 font-satoshi md:text-[16px] text-[12px] uppercase tracking-[0.2em] hover:text-yellow-400 hover:tracking-[0.25em] transition-all duration-500 ease-out">
              MARTHAN LANUZGA
            </span>

            <span className="text-zinc-700 font-mono md:text-[16px] text-[12px] tracking-widest pointer-events-none">
              //
            </span>

            <span className="text-zinc-500 font-satoshi lowercase md:text-[14px] text-[10px] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300 italic flex items-center gap-2 group">
              Male, 23, Robot, food lover, travel junkie, cat & dog dad (soon)
              <div className="flex items-center gap-1.5 ml-1">
                <img src="/images/dog.png" alt="Dog" className="h-4 w-4 brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity" />
                <img src="/images/catdad.png" alt="Cat Dad" className="h-4 w-4 brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </span>
          </div>
        </div>

        {/* NARRATIVE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mb-20 mb-16">
          <div className="space-y-6 text-[12px] text-zinc-400 leading-relaxed font-sans">
            <p>
              I started coding in my first year of college, learned C++, C#, JS, coded on paper, made triangles using loops and conditions, and created CRUD systems. It was fun but I did not really took it seriously. <br />
              <br />
              On my 3rd year, I met many peers who are passionate about it and I thank them for inspiring me to become what I could be and it was that same year where I took interest in AI and ML.
            </p>
            <p>
              Currently, I really want to learn everything I can, see where it will lead me, land a job I'm passionate about, and live a comfortable life somewhere silent.
            </p>
          </div>
          <div className="space-y-6 text-[12px] text-zinc-400 leading-relaxed font-sans">
            <p>
              I love sinigang, road trips, cats, dogs, hiking, and every adventure I can get my hands on. I want to hike Mt. Everest one day, paraglide, skydive, scuba dive, and travel the world. It's currently 12:37 AM while I'm writing this. It's fun to let anyone know what I like, what I do, and what I want to do. I had fun creating this and I hope you had fun knowing me too.
            </p>
          </div>
        </div>

        {/* STACK */}
        <div className="md:mb-20 mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-500 font-satoshi">STACK</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-mono text-[12px] text-zinc-400">
            {/* COLUMN 1: LANGUAGES */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1 font-bold font-satoshi">
                // Languages
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/python" alt="Python" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">Python</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/cplusplus" alt="C++" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">C++</span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: FRAMEWORKS */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1 font-bold font-satoshi">
                // Frameworks
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/react" alt="React" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">React</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">Next.js</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/fastapi" alt="FastAPI" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">FastAPI</span>
                </div>
              </div>
            </div>

            {/* COLUMN 3: AI/ML */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1 font-bold font-satoshi">
                // AI/ML
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/tensorflow" alt="TensorFlow/keras" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">TF/Keras</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/opencv" alt="OpenCV" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">OpenCV</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <svg viewBox="0 0 128 128" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0">
                    <path style={{ stroke: 'none' }} d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z" fill="#130754" />
                    <path style={{ stroke: 'none' }} d="M48.697 48.037h12.25v12.001h-12.25z" fill="#ffca00" />
                    <path style={{ stroke: 'none' }} d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z" fill="#130754" />
                    <path style={{ stroke: 'none' }} d="M67.97 68.983h12.25v12.001H67.97z" fill="#e70488" />
                    <path style={{ stroke: 'none' }} d="M87.238 8.55h12.25v84.552h-12.25z" fill="#130754" />
                  </svg>
                  <span className="truncate">Pandas</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/numpy" alt="NumPy" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">NumPy</span>
                </div>
              </div>
            </div>

            {/* COLUMN 4: DATABASE */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1 font-bold font-satoshi">
                // Database
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="https://cdn.simpleicons.org/postgresql" alt="PostgreSQL" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 border border-zinc-800 bg-zinc-800/40 p-2 md:p-3 md:hover:border-white md:hover:bg-white md:hover:text-black active:scale-95 active:bg-zinc-800 active:border-zinc-400 transition-all duration-200 cursor-default group/item">
                  <img src="/images/chromadb.svg" alt="ChromaDB (RAG)" className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">ChromaDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ALBUM SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-500 font-satoshi">ALBUM</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {ALBUM_DATA.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className={`flex flex-col bg-zinc-950 p-2 border border-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer ${item.rotate} transition-all duration-300 group hover:border-zinc-700`}
                onClick={() => setSelectedImage(item.src)}
              >
                <div className={`w-full ${item.aspect} bg-zinc-900 overflow-hidden relative border border-zinc-800`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>

                <div className="mt-2 flex flex-col gap-1 px-1">
                  <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                    {item.label}
                  </span>
                  <div className="flex justify-between items-baseline">
                    <span className="font-satoshi font-black text-zinc-200 text-[11px] uppercase italic tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-600 font-bold">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACKNOWLEDGEMENTS */}
        <div className="mt-24 border-t border-zinc-900 pt-8 pb-12 flex flex-col gap-4">
          <div className="text-[10px] font-satoshi text-zinc-400 uppercase tracking-widest">
            Acknowledgements:
          </div>
          <div className="text-[10px] font-satoshi text-zinc-500 uppercase tracking-widest flex flex-col gap-2">
            <span>3D Models provided by <a href="https://sketchfab.com/erictheblock" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors">erictheblock</a> & <a href="https://sketchfab.com/Evil_Katz" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors">Evil_Katz</a></span>
            <span>Hosted on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors">Vercel</a></span>
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full preview"
                className="max-w-full max-h-[75vh] object-contain border-4 border-zinc-900 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              />

              {ALBUM_DATA.find(img => img.src === selectedImage)?.desc && (
                <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-4 max-w-md">
                  <p className="text-[12px] font-mono text-zinc-300 italic text-center leading-relaxed">
                    "{ALBUM_DATA.find(img => img.src === selectedImage)?.desc}"
                  </p>
                </div>
              )}

              <button
                className="absolute -top-12 right-0 text-white font-mono text-xs uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                [CLOSE]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}