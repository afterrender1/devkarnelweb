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
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#090d16] text-white overflow-hidden ${urbanist.className}`}>
      {/* Glow Backdrops */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h1 ref={headingRef} className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] ${truculenta.className}`}>
          {titlePrefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            {titleHighlight}
          </span>{" "}
          {titleSuffix}
        </h1>

        {/* Description */}
        <p ref={descRef} className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-normal leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div ref={tagsRef} className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 font-medium hover:border-emerald-500/50 transition-colors">
                ⚡ {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div ref={btnsRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaHref}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            {ctaText}
          </a>
          {secondaryCtaText && (
            <a
              href={secondaryCtaHref}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base transition-all duration-300 backdrop-blur-sm"
            >
              {secondaryCtaText}
            </a>
          )}
        </div>

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div ref={statsRef} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-10">
            {stats.map((st, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <p className={`text-3xl sm:text-4xl font-bold text-emerald-400 ${truculenta.className}`}>
                  {st.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white/60 font-medium">
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
