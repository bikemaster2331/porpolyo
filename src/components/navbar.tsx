import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
            <nav className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full
                bg-white/[0.07]
                backdrop-blur-2xl
                backdrop-saturate-150
                border border-white/[0.12]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]
            ">
                <Link
                    href="/"
                    className="relative px-3 py-2 text-zinc-400 rounded-full transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="4" r="2" />
                        <circle cx="18" cy="8" r="2" />
                        <circle cx="20" cy="16" r="2" />
                        <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                    </svg>
                </Link>

                <div className="w-px h-4 bg-white/[0.1] mx-0.5" />

                {[
                    { label: 'Projects', href: '/projects' },
                    { label: 'Work', href: '/work' },
                    { label: 'About', href: '/about' },
                ].map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className="relative px-5 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-400 rounded-full transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;