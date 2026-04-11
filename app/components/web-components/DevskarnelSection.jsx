"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plus, ArrowUpRight, Zap, Globe, ShieldCheck , ArrowBigRight } from "lucide-react";
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
];

export default function HorizontalAutomationWorkflow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".workflow-step", {
        opacity: 0,
        x: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
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
      className={`relative min-h-100 py-32 px-6 flex flex-col items-center overflow-hidden ${urbanist.className}`}
      style={{
                background: `
    /* 1. TOP-LEFT CORNER SHADOW */
    radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 2. TOP-RIGHT CORNER SHADOW */
    radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 3. BOTTOM-LEFT CORNER SHADOW */
    radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 4. BOTTOM-RIGHT CORNER SHADOW */
    radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 5. THE CENTER GLOW (Spotlight) */
    /* This sits on top of the base to give it a soft, circular neon feel */
    radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.6) 0%, transparent 60%),

    /* 6. THE "SANDWICH" BASE */
    /* This defines the horizontal bands of color. 
       0-35% is solid black (top)
       50% is the emerald peak
       65-100% is solid black (bottom) */
    linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
  `
            }}
    >
      {/* 1. Header Area */}
      <div className="max-w-4xl text-center mb-20 workflow-step">
        <p className="text-[#2de8b0] text-sm font-bold uppercase tracking-[0.4em] mb-4">Proudly Devskarnel</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">High-Performance Digital Solutions</h2>
        <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
          As a results-driven web design company, we build websites that connect, convert, and scale.
        </p>
      </div>

      <div className="relative w-full max-w-400 mx-auto">
        {/* 2. Horizontal Track Line (Visible on Desktop) */}
        <div className="hidden lg:block absolute top-27.5 left-0 right-0 h-px bg-white/10 z-0" />

        {/* 3. Steps Container - Horizontal Flex */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="workflow-step flex flex-col lg:flex-row items-center w-full lg:w-auto">
              
              {/* Card Container */}
              <div className="w-full max-w-87.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl group hover:border-[#2de8b0]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col min-h-55">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${step.accent} flex items-center justify-center`}>
                      {step.icon}
                    </div>
                    <span className="text-white font-bold text-sm">{step.title}</span>
                  </div>
                  <div className="text-white/20 font-mono text-xs">{idx + 1}</div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{step.desc}</p>
                <div className="flex items-center gap-2 text-[#2de8b0] text-[9px] font-bold uppercase tracking-widest mt-auto">
                  <ArrowUpRight size={12} />
                  <span>{step.label}</span>
                </div>
              </div>

              {/* Plus Connector (Horizontal gap) */}
              <div className="flex items-center justify-center p-6 lg:px-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] z-20 transition-transform hover:scale-110">
                  <ArrowBigRight size={16} className="text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}

          {/* 4. Final Branching Card */}
          <div className="workflow-step w-full lg:w-auto">
             <div className="w-full max-w-100 bg-white/10 backdrop-blur-2xl border border-[#2de8b0]/40 rounded-2xl p-6 relative overflow-hidden group min-h-55">
                <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap size={100} className="text-[#2de8b0]" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#2de8b0] flex items-center justify-center">
                      <Zap size={18} className="text-black" strokeWidth={3} />
                    </div>
                    <span className="text-white font-bold text-base">Flexible Pricing Plans</span>
                  </div>
                  
                  <p className="text-white/60 text-xs leading-relaxed mb-6">
                    Professional web solutions accessible for every business scale with worldwide support.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[#b4f481] text-[10px] font-bold uppercase tracking-tighter">Scalable</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[#b4f481] text-[10px] font-bold uppercase tracking-tighter">Global Support</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}