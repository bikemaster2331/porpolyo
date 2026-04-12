'use client';
import Link from 'next/link';
import { Fragment, useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const allLinks = [
    { label: null, href: '/', isIcon: true },
    { label: 'Projects', href: '/projects' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
];

const Navbar = () => {
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [pillStyle, setPillStyle] = useState({ x: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const updatePill = () => {
            const activeIndex = allLinks.findIndex(l => l.href === pathname);
            const activeLink = linkRefs.current[activeIndex];
            const nav = navRef.current;

            if (!activeLink || !nav) return;

            const navRect = nav.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();

            setPillStyle({
                x: linkRect.left - navRect.left,
                width: linkRect.width,
                opacity: 1,
            });
        };

        updatePill();
        window.addEventListener('resize', updatePill);
        return () => window.removeEventListener('resize', updatePill);
    }, [pathname]);

    return (
        <header className="fixed bottom-0 md:bottom-auto md:top-6 inset-x-0 z-50 flex justify-center px-6 pb-6 pt-8 md:p-0 pointer-events-none bg-gradient-to-b from-transparent to-[#111] md:bg-none">
            <nav
                ref={navRef}
                className="pointer-events-auto relative flex items-center gap-0.5 md:gap-1 p-1 md:p-1.5 rounded-full bg-white/[0.07] backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.12] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
                {/* Single pill that moves between links */}
                <motion.span
                    className="absolute top-1 md:top-1.5 h-[calc(100%-8px)] md:h-[calc(100%-12px)] rounded-full bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none"
                    animate={{
                        x: pillStyle.x,
                        width: pillStyle.width,
                        opacity: pillStyle.opacity,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 28,
                    }}
                    style={{ left: 0 }}
                />

                {allLinks.map(({ label, href, isIcon }, i) => (
                    <Fragment key={href}>
                        {i === 1 && (
                            <div className="w-px h-4 bg-white/[0.1] mx-0.5" />
                        )}
                        <Link
                            href={href}
                            ref={el => { linkRefs.current[i] = el; }}
                            className={`relative rounded-full transition-colors duration-200 flex items-center justify-center
                ${isIcon
                                    ? 'px-3 py-2.5 md:py-2'
                                    : 'px-2.5 md:px-5 py-2.5 md:py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.12em] md:tracking-[0.15em]'
                                }
                ${pathname === href ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}
              `}
                        >
                            <span className="relative z-10">
                                {isIcon ? (
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
                                ) : label}
                            </span>
                        </Link>
                    </Fragment>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;