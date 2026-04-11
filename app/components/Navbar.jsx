"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { urbanist } from "../fonts";

// --- Icons ---
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

const ChevronDown = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// --- Config ---
const navLinks = [
    {
        label: "Solutions",
        hasDropdown: true,
        dropdownItems: [
            { label: "Website Development", href: "/services/website-development" },
            { label: "Logo Design", href: "/services/logo-design" }
        ]
    },
    { label: "Case studies", hasDropdown: false, href: "#casestudies" },
    { label: "Contact", hasDropdown: false, href: "#contact" },
];

const iconActions = [
    { icon: <SearchIcon />, label: "Search" },
    { icon: <MailIcon />, label: "Mail" },
];

export default function Navbar() {
    const router = useRouter();
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef(null);
    const iconsRef = useRef(null);
    const ctaRef = useRef(null);
    const dropdownRef = useRef(null);
    const sidebarRef = useRef(null);
    const overlayRef = useRef(null);
    const dropdownTimeoutRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

    // --- Navigation Logic ---
    const handleNavClick = (href, e) => {
        // Close menus regardless of link type
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);

        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        }
        // If it doesn't start with #, Next.js <Link> handles the route transition
    };

    const handleMouseEnter = () => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 150);
    };

    // --- Animations ---
    useEffect(() => {
        if (isDropdownOpen && dropdownRef.current) {
            gsap.fromTo(dropdownRef.current,
                { opacity: 0, y: -10, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
            );
        }
    }, [isDropdownOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: "block" });
            gsap.to(sidebarRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
            document.body.style.overflow = "hidden";
        } else {
            gsap.to(overlayRef.current, {
                opacity: 0, duration: 0.3, onComplete: () => {
                    if (overlayRef.current) overlayRef.current.style.display = "none";
                }
            });
            gsap.to(sidebarRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([logoRef.current, linksRef.current, iconsRef.current, ctaRef.current], { opacity: 0, y: -12 });

            const tl = gsap.timeline();
            tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
                .to(linksRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
                .to(iconsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
                .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.4);

            const handleScroll = () => {
                const scrollY = window.scrollY;
                const opacity = Math.min(scrollY / 80, 0.95);
                if (navRef.current) {
                    navRef.current.style.backgroundColor = `rgba(13, 17, 23, ${opacity})`;
                    navRef.current.style.backdropFilter = scrollY > 10 ? "blur(16px)" : "blur(0px)";
                    navRef.current.style.borderBottom = scrollY > 10 ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent";
                }
            };
            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${urbanist.className}`}>
                <div className="max-w-400 mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-6">

                    {/* Logo */}
                    <div ref={logoRef} className="shrink-0">
                        <Link href="/" className="text-white font-bold text-xl sm:text-2xl tracking-tight select-none">
                            DEVS<span className="text-emerald-400">KARNEL</span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div ref={linksRef} className="hidden lg:flex items-center border-[0.5px] border-white/10 rounded-lg overflow-visible backdrop-blur-sm bg-white/5">
                        {navLinks.map(({ label, hasDropdown, dropdownItems, href }) => (
                            <div
                                key={label}
                                className="relative h-full"
                                onMouseEnter={hasDropdown ? handleMouseEnter : undefined}
                                onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                            >
                                {hasDropdown ? (
                                    <>
                                        <button className="relative flex items-center gap-1 px-5 py-2.5 text-[0.95rem] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 border-r border-white/10 after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-4">
                                            {label}
                                            <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                                                <ChevronDown />
                                            </span>
                                        </button>

                                        {isDropdownOpen && (
                                            <div ref={dropdownRef} className="absolute top-[120%] left-0 w-64 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-lg overflow-hidden shadow-2xl z-100">
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
                                                <div className="relative">
                                                    {dropdownItems.map((item) => (
                                                        <Link
                                                            key={item.label}
                                                            href={item.href}
                                                            onClick={(e) => handleNavClick(item.href, e)}
                                                            className="flex items-center gap-3 px-5 py-4 text-white/70 hover:text-emerald-400 hover:bg-white/5 transition-all duration-200 text-sm font-medium border-b border-white/5 last:border-b-0"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={href}
                                        onClick={(e) => handleNavClick(href, e)}
                                        className="px-5 py-2.5 text-[0.95rem] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 border-r border-white/10 last:border-r-0"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <div ref={iconsRef} className="hidden sm:flex items-center gap-1">
                            {iconActions.map(({ icon, label }) => (
                                <button key={label} aria-label={label} className="p-2 text-white/60 hover:text-white hover:bg-white/8 rounded-lg transition-all">
                                    {icon}
                                </button>
                            ))}
                        </div>

                        <div ref={ctaRef}>
                            <a href="https://calendly.com/afterrenderagency/30min" target="_blank" rel="noopener noreferrer">


                            <button className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95">
                                Request a quote
                            </button>
                            </a>
                        </div>

                        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div ref={overlayRef} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60 hidden" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Mobile Sidebar */}
            <div ref={sidebarRef} className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0d1117] border-l border-white/10 z-70 translate-x-full overflow-y-auto ${urbanist.className}`}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-10">
                        <Link href="/" className="text-white font-bold text-xl" onClick={() => setIsMobileMenuOpen(false)}>
                            DEVS<span className="text-emerald-400">KARNEL</span>
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/60"><CloseIcon /></button>
                    </div>

                    <nav className="space-y-2">
                        {navLinks.map(({ label, hasDropdown, dropdownItems, href }) => (
                            <div key={label} className="w-full">
                                {hasDropdown ? (
                                    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/5">
                                        <button
                                            onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                                            className="w-full flex justify-between items-center px-5 py-4 text-white/80 font-medium"
                                        >
                                            {label}
                                            <span className={`transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}><ChevronDown /></span>
                                        </button>
                                        <div className={`transition-all duration-300 overflow-hidden ${isMobileSolutionsOpen ? 'max-h-48' : 'max-h-0'}`}>
                                            {dropdownItems.map(item => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={(e) => handleNavClick(item.href, e)}
                                                    className="block px-8 py-3 text-sm text-white/60 border-t border-white/5"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={href}
                                        onClick={(e) => handleNavClick(href, e)}
                                        className="block w-full text-left px-5 py-4 text-white/80 font-medium bg-white/5 border border-white/5 rounded-xl"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
                        <button className="w-full py-4 bg-emerald-500 text-white font-bold rounded-xl shadow-lg">
                            Request a quote
                        </button>
                        <div className="flex gap-3">
                            {iconActions.map(({ icon, label }) => (
                                <button key={label} className="flex-1 flex justify-center py-4 bg-white/5 rounded-xl border border-white/10 text-white/60">
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}