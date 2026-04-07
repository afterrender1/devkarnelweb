"use client";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const NAV_LINKS = ["About", "Services", "Tesimonials", "Portfolio", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Animate navbar in on mount — GPU-friendly (opacity + y only)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10 ${urbanist.className}`}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" aria-label="Devskarnel home" className="shrink-0">
          <div className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-40 md:h-12 transition-transform duration-300 hover:scale-105">
            <Image
              src="/dklogo.png"
              alt="Devskarnel logo"
              fill
              priority
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8" role="menubar">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              role="menuitem"
              className="text-sm lg:text-base font-semibold text-slate-600 hover:text-[#23bcdf] transition-colors relative group whitespace-nowrap"
            >
              {item}
              {/* Underline — transform-based, GPU friendly */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23bcdf] transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center shrink-0 gap-3">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-[#23bcdf] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </>
              )}
            </svg>
          </button>

          {/* Book Now — shimmer button */}
          <div className="relative group">
            <div className="relative min-w-25 sm:min-w-30 md:min-w-37.5 h-9 md:h-12 overflow-hidden rounded-lg bg-[#00ADB5] z-10">
              {/* Shine sweep — transform only */}
              <div className="absolute z-10 -translate-x-full group-hover:translate-x-[200%] ease-in transition-transform duration-700 h-full w-24 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none" />
              {/* Inner button */}
              <div className="absolute inset-[1.5px] rounded-[7px] overflow-hidden flex items-center justify-center">
                <button
                  style={{ background: "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)" }}
                  className="cursor-pointer font-bold text-xs sm:text-sm md:text-base h-full w-full px-3 sm:px-6 md:px-8 text-white rounded-lg whitespace-nowrap"
                >
                  Book Now
                </button>
              </div>
              {/* Border glow — kept but reduced on hover only */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 px-4 pb-4 flex flex-col gap-3" role="menu">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-slate-600 hover:text-[#23bcdf] transition-colors py-2 border-b border-gray-100 last:border-0"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;