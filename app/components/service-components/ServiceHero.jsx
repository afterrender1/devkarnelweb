"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist, truculenta } from "@/app/fonts";

export default function ServiceHero({
  badge = "Service",
  titlePrefix = "High Impact",
  titleHighlight = "Solutions",
  titleSuffix = "For Growth",
  description = "Tailored digital solutions built with cutting-edge technology and pixel-perfect design.",
  tags = ["SEO Optimized", "Mobile First", "High Conversion", "Custom Built"],
  ctaText = "Get Started",
  ctaHref = "#contact",
  secondaryCtaText = "View Process",
  secondaryCtaHref = "#process",
  stats = [
    { label: "Client Satisfaction", value: "99%" },
    { label: "Projects Delivered", value: "150+" },
    { label: "Avg ROI Growth", value: "3.5x" },
  ],
}) {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const tagsRef = useRef(null);
  const btnsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          tagsRef.current?.children ? Array.from(tagsRef.current.children) : [],
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          btnsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#010504] text-white overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 10% 70%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, transparent 50%),
          radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%),
          radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%),
          radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%),
          linear-gradient(180deg, #24E8B2 0%, #1BC497 5%, #0F7C6E 40%, #0A4A42 60%, #062B24 80%, #010504 100%)
        `,
      }}
    >
      <div className="absolute bg-black inset-0 w-full h-full opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(45,232,176,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#2de8b0] animate-ping" />
          <span className="text-[#2de8b0] text-xs sm:text-sm font-bold tracking-wider uppercase">
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h1 ref={headingRef} className={`text-3xl min-[360px]:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.15] wrap-break-word ${truculenta.className}`}>
          {titlePrefix}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2de8b0] via-[#5eead4] to-[#2de8b0] wrap-break-word">
            {titleHighlight}
          </span>{" "}
          {titleSuffix}
        </h1>

        {/* Description */}
        <p ref={descRef} className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div ref={tagsRef} className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 font-medium hover:border-[#2de8b0]/50 hover:bg-white/15 transition-all shadow-sm">
                ⚡ {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div ref={btnsRef} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href={ctaHref}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-[#2de8b0] hover:bg-[#1bc497] text-black font-bold text-sm sm:text-base text-center shadow-[0_0_30px_rgba(45,232,176,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            {ctaText}
          </a>
          {secondaryCtaText && (
            <a
              href={secondaryCtaHref}
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm sm:text-base text-center transition-all duration-300 backdrop-blur-sm whitespace-nowrap cursor-pointer hover:border-[#2de8b0]/30"
            >
              {secondaryCtaText}
            </a>
          )}
        </div>

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div ref={statsRef} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/15 pt-10">
            {stats.map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#2de8b0]/40 transition-colors">
                <p className={`text-3xl sm:text-4xl font-bold text-[#2de8b0] ${truculenta.className}`}>
                  {st.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white/70 font-medium">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
