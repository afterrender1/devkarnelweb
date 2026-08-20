"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urbanist } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundGlowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      )
        .fromTo(
          paragraphRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5",
        );

      gsap.to(backgroundGlowRef.current, {
        opacity: 0.6,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        background: `radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #000000 35%, #064e3b 50%, #000000 65%, #000000 100%)`,
      }}
      ref={containerRef}
      className={`relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${urbanist.className}`}
    >
      {/* Background Radial Glow */}
      <div
        ref={backgroundGlowRef}
        className="absolute -bottom-32 sm:-bottom-48 -left-32 sm:-left-48 w-96 sm:w-150 h-96 sm:h-150 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none opacity-30 z-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Featured Article Card Above CTA Headline */}
        <div className="mb-10 sm:mb-14 max-w-4xl mx-auto text-left">
          <Link
            href="/blog/how-a-high-converting-website-drives-10x-business-growth"
            className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-linear-to-r from-emerald-950/50 via-zinc-950/80 to-black/90 p-4 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400 hover:shadow-[0_0_50px_rgba(45,232,176,0.25)]"
          >
            <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6">
              {/* Image Thumbnail */}
              <div className="relative w-full md:w-72 h-44 sm:h-48 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10">
                <Image
                  src="/images/website_growth_blog.jpg"
                  alt="How a High-Converting Website Drives Business Growth"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#2de8b0] text-black font-bold text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  Featured Insight
                </div>
              </div>

              {/* Card Info */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 text-xs text-white/50 mb-2 font-medium">
                  <span className="text-[#2de8b0] font-semibold">Web Strategy</span>
                  <span>•</span>
                  <span>6 Min Read</span>
                  <span>•</span>
                  <span>Growth Guide</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#2de8b0] transition-colors duration-300 line-clamp-2 leading-snug">
                  How a High-Converting Website Drives 10x Business Growth in 2026
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                  Discover the 5 core architecture shifts top brands use to convert casual visitors into loyal high-ticket clients on autopilot.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2de8b0] group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Read Article & Growth Guide</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Main Headline */}
        <h2
          ref={headlineRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white"
        >
          Ready to Get a Website That <br className="hidden sm:inline" />
          <span className="bg-linear-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Actually Grows Your Business?
          </span>
        </h2>
        {/* Bottom Paragraph */}
        <p
          ref={paragraphRef}
          className="text-white/70 text-sm sm:text-base lg:text-lg xl:text-xl mt-6 sm:mt-8 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Let's discuss how we can transform your digital presence into a
          high-converting engine. Tell us about your project, ask questions, or
          schedule a free strategy call below.
        </p>
        {/* CTA Button and Contact */}
        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <a
            href="https://calendly.com/devskarnel/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-emerald-500/40 active:scale-[0.97] cursor-pointer whitespace-nowrap">
              Request a Quote
            </button>
          </a>
          <span className="text-white/50 text-sm sm:text-base lg:text-lg font-medium">
            or
          </span>
          <a
            href="mailto:devskarnel@gmail.com"
            className="text-white text-sm sm:text-base lg:text-lg font-semibold border-b-2 border-emerald-500/30 hover:border-emerald-500 transition-colors pb-1 break-all sm:break-normal"
          >
            devskarnel@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
