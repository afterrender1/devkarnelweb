"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urbanist, truculenta } from "@/app/fonts";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceFeatures({
  badge = "Capabilities",
  heading = "What We Deliver",
  subheading = "Comprehensive solutions engineered to scale your business with maximum impact.",
  features = [],
}) {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current?.children) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`py-20 md:py-28 bg-[#0b0f19] text-white relative overflow-hidden ${urbanist.className}`}>
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            {badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight ${truculenta.className}`}>
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            {subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-white/3 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Card Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-md">
                  {item.icon || "✨"}
                </div>

                {/* Title */}
                <h3 className={`mt-6 text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors ${truculenta.className}`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-white/70 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Tag / List if available */}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-6 pt-4 border-t border-white/5 space-y-2">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
