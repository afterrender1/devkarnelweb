"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Zap, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    title: "Performance-Driven Design",
    label: "Focus on results",
    desc: "Every design decision is focused on conversions. We build systems that generate results.",
    icon: <Zap size={16} className="text-[#2de8b0]" />,
    accent: "bg-[#2de8b0]/20"
  },
  {
    title: "Transparent Process",
    label: "Clean Communication",
    desc: "No hidden costs, no confusion. We guide you through every step of the journey.",
    icon: <ShieldCheck size={16} className="text-[#2de8b0]" />,
    accent: "bg-[#2de8b0]/20"
  },
  {
    title: "Dedicated Team Support",
    label: "Accountable & Responsive",
    desc: "Work directly with a professional team committed to your long-term success.",
    icon: <Globe size={16} className="text-[#2de8b0]" />,
    accent: "bg-[#2de8b0]/20"
  },
  {
    title: "Flexible Pricing Plans",
    label: "Scalable & Global",
    desc: "Professional web solutions accessible for every business scale with worldwide support.",
    icon: <Zap size={18} className="text-black" />,
    accent: "bg-[#2de8b0]",
    isSpecial: true
  }
];

export default function HorizontalAutomationWorkflow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Cards from bottom
      gsap.from(".workflow-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate SVG paths
      gsap.from(".flow-path", {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen py-24 px-6 flex flex-col items-center overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.3) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
        `
      }}
    >
      {/* Header */}
      <div className="max-w-4xl text-center mb-16 workflow-card">
        <p className="text-[#2de8b0] text-sm font-bold uppercase tracking-[0.4em] mb-4">Proudly Devskarnel</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">High-Performance Digital Solutions</h2>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          As a results-driven web design company, we build websites that connect, convert, and scale.
        </p>
      </div>

      <div className="relative w-full max-w-5xl">
        {/* SVG Connectors - Percentage based for responsiveness */}
        <svg 
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow-emerald">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Top-Left to Top-Right */}
          <path d="M 30 25 H 70" className="flow-path" stroke="#2de8b0" strokeWidth="0.2" fill="none" opacity="0.4" filter="url(#glow-emerald)" />
          {/* Top-Left to Bottom-Left */}
          <path d="M 25 35 V 65" className="flow-path" stroke="#2de8b0" strokeWidth="0.2" fill="none" opacity="0.4" filter="url(#glow-emerald)" />
          {/* Top-Right to Bottom-Right */}
          <path d="M 75 35 V 65" className="flow-path" stroke="#2de8b0" strokeWidth="0.2" fill="none" opacity="0.4" filter="url(#glow-emerald)" />
        </svg>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`workflow-card w-full transition-all duration-500 hover:-translate-y-2 group
                ${step.isSpecial ? 'border-[#2de8b0]/40 bg-white/10' : 'border-white/10 bg-white/5'}
                backdrop-blur-xl border rounded-2xl p-6 md:p-6 shadow-2xl hover:border-[#2de8b0]/50`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${step.accent} flex items-center justify-center`}>
                    {step.icon}
                  </div>
                  <h3 className="text-white font-bold text-[0.9rem] lg:text-[1rem]">
                    {step.title}
                  </h3>
                </div>
                <div className="text-white/20 font-black text-4xl">{idx + 1}</div>
              </div>

              <p className="text-white/50 text-[0.8rem] leading-relaxed mb-6">
                {step.desc}
              </p>

              <div className="flex items-center gap-2 text-[#2de8b0] text-[10px] font-bold uppercase tracking-widest mt-auto">
                <ArrowUpRight size={14} />
                <span>{step.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}