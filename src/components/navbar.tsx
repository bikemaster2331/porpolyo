import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-6">
            <nav className="flex items-center justify-between w-full max-w-4xl py-3 px-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)]">

                <Link href="/" className="text-lg font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
                    WARRRUPPP
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-[11px] font-satoshi font-medium uppercase tracking-[0.15em] text-gray-500">
                    <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                    <Link href="/work" className="hover:text-white transition-colors">Work</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </div>

                <Link
                    href="/resume.pdf"
                    className="px-5 py-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-satoshi font-bold rounded-full hover:bg-black transition-all active:scale-95 border border-white/10"
                >
                    RESUME
                </Link>

            </nav>
        </header>
    );
};

export default Navbar;