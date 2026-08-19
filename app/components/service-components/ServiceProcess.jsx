"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urbanist, truculenta } from "@/app/fonts";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceProcess({
  badge = "Our Process",
  heading = "How We Execute & Deliver",
  subheading = "A transparent, structured methodology that guarantees quality and speed.",
  steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your target market, business goals, and competitive landscape to build a precise execution plan.",
    },
    {
      number: "02",
      title: "Architecture & Design",
      desc: "We map out responsive layouts, wireframes, and high-fidelity prototypes crafted for user engagement.",
    },
    {
      number: "03",
      title: "Development & Integration",
      desc: "Our engineering team builds clean, scalable code with state-of-the-art frameworks and seamless API connections.",
    },
    {
      number: "04",
      title: "QA & Launch",
      desc: "Rigorous automated and manual testing for speed, security, and cross-browser perfection before deployment.",
    },
  ],
}) {
  const containerRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current?.children) {
        gsap.fromTo(
          Array.from(stepsRef.current.children),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className={`py-20 md:py-28 bg-[#010504] text-white relative overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 50% 100%, rgba(45, 232, 176, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 10% 20%, rgba(15, 124, 110, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #010504 0%, #020c0a 50%, #010504 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2de8b0] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 shadow-[0_0_15px_rgba(45,232,176,0.1)]">
            {badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white ${truculenta.className}`}>
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            {subheading}
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white/2.5 border border-white/10 hover:border-[#2de8b0]/40 hover:bg-white/4 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#2de8b0] to-[#5eead4] ${truculenta.className}`}>
                  {st.number}
                </span>
                <h3 className={`mt-4 text-xl font-bold text-white group-hover:text-[#2de8b0] transition-colors ${truculenta.className}`}>
                  {st.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#2de8b0] font-semibold uppercase tracking-wider">
                <span>Phase {idx + 1}</span>
                <span className="w-8 h-px bg-[#2de8b0]/40 group-hover:w-12 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
