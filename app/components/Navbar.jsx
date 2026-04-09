"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { inter, urbanist } from "../fonts";

// Icons
const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LoginIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
);

const ChevronDown = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const navLinks = [
    { label: "Solutions", hasDropdown: true },
    { label: "Case studies", hasDropdown: false },
    { label: "Company", hasDropdown: true },
];

const iconActions = [
    { icon: <SearchIcon />, label: "Search" },
    { icon: <MailIcon />, label: "Mail" },
];

export default function Navbar() {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef(null);
    const iconsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set([logoRef.current, linksRef.current, iconsRef.current, ctaRef.current], {
                opacity: 0,
                y: -12,
            });

            // Staggered entrance animation
            gsap.to(logoRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.1,
            });

            gsap.to(linksRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.25,
            });

            gsap.to(iconsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.4,
            });

            gsap.to(ctaRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.5,
            });

            // Scroll-based background opacity
            const handleScroll = () => {
                const scrollY = window.scrollY;
                const opacity = Math.min(scrollY / 80, 0.92);
                if (navRef.current) {
                    navRef.current.style.backgroundColor = `rgba(13, 17, 23, ${opacity})`;
                    navRef.current.style.backdropFilter = scrollY > 10 ? "blur(12px)" : "blur(0px)";
                    navRef.current.style.borderBottom =
                        scrollY > 10 ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent";
                }
            };

            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${urbanist.className}`}
            style={{
                backgroundColor: "rgba(13, 17, 23, 0)",
                borderBottom: "1px solid transparent",
            }}
        >
            <div className="max-w-400 mx-auto px-6 h-20 flex items-center justify-between gap-6">

                {/* Logo */}
                <div ref={logoRef} className="shrink-0">
                    <span className="text-white font-bold text-[2rem] tracking-tight select-none">
                        DEVS<span className="text-emerald-400">KARNEL</span>
                    </span>
                </div>

                {/* Nav Links - centered */}
                <div
                    ref={linksRef}
                    className="flex items-center border-[0.5px] border-gray-400 rounded-lg overflow-hidden"
                >
                    {navLinks.map(({ label, hasDropdown }, index) => (
                        <button
                            key={label}
                            className="group flex items-center px-3.5 py-1.5 text-[1rem] font-medium text-white/70 hover:text-white hover:bg-white/6 transition-all duration-200 cursor-pointer select-none border-r border-gray-400 last:border-r-0"
                        >
                            {label}
                            {hasDropdown && (
                                <span className="text-white/40 group-hover:text-white/70 transition-colors duration-200 mt-px">
                                    <ChevronDown />
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Right side: icons + CTA */}
                <div className="flex items-center gap-2">
                    {/* Icon Actions */}
                    <div ref={iconsRef} className="flex items-center gap-0.5">
                        {iconActions.map(({ icon, label }) => (
                            <button
                                key={label}
                                aria-label={label}
                                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.07] transition-all duration-200 cursor-pointer"
                            >
                                {icon}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div ref={ctaRef}>
                        <button className="ml-1 px-4 py-1.75 rounded-lg bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white text-[1rem] font-semibold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap shadow-[0_0_16px_rgba(52,211,153,0.25)] hover:shadow-[0_0_22px_rgba(52,211,153,0.4)]">
                            Request a quote
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    );
}