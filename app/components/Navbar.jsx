"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const SolutionsIcon = ({ className = "w-5 h-5 text-emerald-400" }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
);

const CaseStudiesIcon = ({ className = "w-5 h-5 text-white/70" }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
    </svg>
);

const ContactIcon = ({ className = "w-5 h-5 text-white/70" }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const RocketIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55L4.5 16.5z" />
        <path d="M12 15l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

// --- Config ---
const ecommerceSubmenu = [
    "Shopify Automation",
    "Ebay Automation",
    "Walmart Automation",
    "TikTok Shop Automation",
    "Temu Automation",
    "Shopee Marketplace Growth Service",
    "WooCommerce Store Development & Management",
    "Penties Automation",
    "Telehealth Automation",
    "Etsy Shop Automation",
    "Amazon Zore Setup & Growth Services",
    "Shopify Merchandies"
];

const navLinks = [
    {
        label: "Solutions",
        hasDropdown: true,
        dropdownItems: [
            { label: "UI/UX Design", href: "/services/ui-ux-design" },
            { label: "Web Design", href: "/services/website-development" },
            {
                label: "E-commerce",
                href: "/services/e-commerce",
                subItems: ecommerceSubmenu
            },
            { label: "Branding", href: "/services/branding" },
            { label: "Mobile App", href: "/services/mobile-app-development" },
            { label: "SEO", href: "/services/seo-optimization" },
            { label: "Social Media Marketing", href: "/services/social-media-marketing" }
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
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [hoveredSubmenu, setHoveredSubmenu] = useState(null);

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
                if (navRef.current) {
                    if (scrollY > 10) {
                        navRef.current.style.backgroundColor = "transparent";
                        navRef.current.style.backdropFilter = "blur(32px)";
                        navRef.current.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
                    } else {
                        navRef.current.style.backgroundColor = "transparent";
                        navRef.current.style.backdropFilter = "blur(0px)";
                        navRef.current.style.borderBottom = "1px solid transparent";
                    }
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-6">

                    {/* Logo */}
                    <div ref={logoRef} className="shrink-0">
                        <Link href="/" className="flex items-center select-none group">
                            <Image
                                src="/images/dklogo.webp"
                                alt="Devskarnel Logo"
                                width={180}
                                height={50}
                                className="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
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
                                            <div ref={dropdownRef} className="absolute top-[120%] left-0 w-64 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-sm overflow-hidden shadow-2xl z-100">
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
                                                <div className="relative">
                                                    {dropdownItems.map((item) => {
                                                        const hasSubItems = Array.isArray(item.subItems) && item.subItems.length > 0;

                                                        return (
                                                            <div
                                                                key={item.label}
                                                                className={hasSubItems ? "relative" : ""}
                                                                onMouseEnter={hasSubItems ? () => setHoveredSubmenu(item.label) : undefined}
                                                                onMouseLeave={hasSubItems ? () => setHoveredSubmenu(null) : undefined}
                                                            >
                                                                <Link
                                                                    href={item.href}
                                                                    onClick={(e) => handleNavClick(item.href, e)}
                                                                    className="flex items-center justify-between gap-3 px-5 py-4 text-white/70 hover:text-emerald-400 hover:bg-white/5 transition-all duration-200 text-sm font-medium border-b border-white/5 last:border-b-0"
                                                                >
                                                                    <span className="flex items-center gap-3">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                                                        {item.label}
                                                                    </span>
                                                                    {hasSubItems && <span className="text-base text-white/50">›</span>}
                                                                </Link>

                                                                {hasSubItems && (
                                                                    <div className={`pointer-events-auto absolute left-full top-0 ml-2 ${hoveredSubmenu === item.label ? 'flex' : 'hidden'} w-72 flex-col bg-[#111827] border border-white/10 shadow-2xl rounded-md overflow-hidden z-50`}>
                                                                        {item.subItems.map((subItem) => (
                                                                            <Link
                                                                                key={subItem}
                                                                                href="/services/e-commerce"
                                                                                onClick={(e) => handleNavClick("/services/e-commerce", e)}
                                                                                className="px-4 py-3 text-sm text-white/70 hover:text-emerald-400 hover:bg-white/5 border-b border-white/5 last:border-b-0"
                                                                            >
                                                                                {subItem}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
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
                        {/* <div ref={iconsRef} className="hidden sm:flex items-center gap-1">
                            {iconActions.map(({ icon, label }) => (
                                <button key={label} aria-label={label} className="p-2 text-white/60 hover:text-white hover:bg-white/8 rounded-lg transition-all">
                                    {icon}
                                </button>
                            ))}
                        </div> */}

                        <div ref={ctaRef}>
                            <a
                                href="https://calendly.com/afterrenderagency/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95"
                            >
                                Request a quote
                            </a>
                        </div>

                        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div ref={overlayRef} className="fixed inset-0 bg-black/75 backdrop-blur-sm z-60 hidden" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Mobile Sidebar */}
            <div ref={sidebarRef} className={`fixed top-0 right-0 h-full w-[85%] max-w-xs sm:max-w-sm bg-[#0d1117] border-l border-white/10 z-70 translate-x-full overflow-y-auto ${urbanist.className}`}>
                <div className="p-5 flex flex-col justify-between min-h-full">
                    <div>
                        {/* Top Header: Brand Avatar & Close Button */}
                        <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                {/* Circular Logo Avatar */}
                                <div className="w-11 h-11 rounded-full border-2 border-emerald-400 p-0.5 bg-black/60 shrink-0 flex items-center justify-center shadow-md">
                                    <Image
                                        src="/images/dklogo.webp"
                                        alt="Devskarnel"
                                        width={36}
                                        height={36}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="leading-tight">
                                    <h3 className="text-white font-extrabold text-base tracking-tight">Devskarnel</h3>
                                    <p className="text-white/50 text-[11px] font-medium">devskarnel@gmail.com</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all"
                                aria-label="Close menu"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Main Navigation List - Scrollable Pill Style */}
                        <div className="space-y-2">
                            {/* Solutions Item */}
                            <div className="w-full">
                                <button
                                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all text-sm font-semibold ${
                                        isMobileSolutionsOpen
                                            ? "bg-white text-black shadow-lg"
                                            : "text-white/90 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <SolutionsIcon className={isMobileSolutionsOpen ? "w-5 h-5 text-black" : "w-5 h-5 text-emerald-400"} />
                                        <span>Solutions</span>
                                    </span>
                                    <span className={`transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180 text-black" : "text-white/40"}`}>
                                        <ChevronDown />
                                    </span>
                                </button>

                                {/* Dropdown Sub-Items (Scrollable Container) */}
                                <div className={`transition-all duration-300 overflow-hidden ${isMobileSolutionsOpen ? "max-h-[1200px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                                    <div className="space-y-1 border-l-2 border-emerald-500/30 ml-3 pl-3 py-1">
                                        {navLinks[0].dropdownItems.map((item) => {
                                            const hasSubItems = Array.isArray(item.subItems) && item.subItems.length > 0;
                                            return (
                                                <div key={item.label}>
                                                    {hasSubItems ? (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.label ? null : item.label)}
                                                                className="w-full flex items-center justify-between px-3 py-2 text-xs text-white/80 hover:text-emerald-400 font-medium rounded-xl hover:bg-white/5"
                                                            >
                                                                <span>{item.label}</span>
                                                                <span className={`transition-transform duration-200 text-xs text-emerald-400 ${activeMobileSubmenu === item.label ? "rotate-180" : ""}`}>
                                                                    <ChevronDown />
                                                                </span>
                                                            </button>
                                                            {activeMobileSubmenu === item.label && (
                                                                <div className="pl-3 space-y-1 py-1 max-h-56 overflow-y-auto pr-1">
                                                                    {item.subItems.map((sub) => (
                                                                        <Link
                                                                            key={sub}
                                                                            href="/services/e-commerce"
                                                                            onClick={(e) => handleNavClick("/services/e-commerce", e)}
                                                                            className="block px-3 py-1.5 text-[11px] text-white/60 hover:text-emerald-400 hover:bg-white/5 rounded-lg border-b border-white/5 last:border-b-0"
                                                                        >
                                                                            • {sub}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <Link
                                                            href={item.href}
                                                            onClick={(e) => handleNavClick(item.href, e)}
                                                            className="block px-3 py-2 text-xs text-white/80 hover:text-emerald-400 font-medium rounded-xl hover:bg-white/5"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Item */}
                            <Link
                                href="#contact"
                                onClick={(e) => handleNavClick("#contact", e)}
                                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-white/90 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
                            >
                                <ContactIcon className="w-5 h-5 text-white/70" />
                                <span>Contact Us</span>
                            </Link>
                        </div>

                        {/* Divider Line */}
                        <div className="my-5 border-t border-white/10" />

                        {/* Bottom Actions Section */}
                        <div className="space-y-2">
                            <a
                                href="https://calendly.com/afterrenderagency/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-4 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all active:scale-95"
                            >
                                <span className="flex items-center gap-3">
                                    <RocketIcon className="w-5 h-5 text-white" />
                                    <span>Request a Quote</span>
                                </span>
                                <span>→</span>
                            </a>

                            <a
                                href="mailto:devskarnel@gmail.com"
                                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-xs font-medium"
                            >
                                <MailIcon />
                                <span>devskarnel@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}