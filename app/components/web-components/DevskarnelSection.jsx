"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plus, ArrowUpRight, Zap, Globe, ShieldCheck } from "lucide-react";
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

export default function AutomationWorkflow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".workflow-step", {
        opacity: 0,
        y: 40,
        stagger: 0.3,
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
      className={`relative min-h-screen py-32 px-6 flex flex-col items-center overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.4) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
        `
      }}
    >
      {/* 1. Header Area - Reach & Branding */}
      <div className="max-w-4xl text-center mb-24 workflow-step">
        <p className="text-[#2de8b0] text-sm font-bold uppercase tracking-[0.4em] mb-4">Proudly Devskarnel</p>
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Serving Businesses Worldwide with High-Performance Digital Solutions
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          As a results-driven web design company, we understand modern business needs across different industries. 
          Whether you're a startup or an established company, we build websites that connect, convert, and scale.
        </p>
        
        {/* Reach Tags */}
        <div className="flex flex-wrap justify-center gap-3 opacity-80">
          {["Global Clients", "Startups & Enterprises", "E-commerce Brands", "SaaS Platforms", "Personal Brands"].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-medium uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-3xl">
        {/* 2. Central Connecting Line */}
        <div className="absolute top-0 bottom-45 w-px bg-white/10 left-1/2 -translate-x-1/2 z-0" />

        <div className="text-center mb-12 workflow-step z-10">
            <p className="text-[#b4f481] text-xs font-bold uppercase tracking-widest mb-2">Why Devskarnel</p>
            <h3 className="text-white text-2xl font-bold">A Company That Puts Your Results First</h3>
        </div>

        {/* 3. Workflow Steps */}
        {steps.map((step, idx) => (
          <div key={idx} className="workflow-step relative z-10 flex flex-col items-center mb-4">
            <div className="w-87.5 md:w-112.5 bg-white/3 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl group hover:border-[#2de8b0]/50 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${step.accent} flex items-center justify-center`}>
                    {step.icon}
                  </div>
                  <span className="text-white font-bold text-base">{step.title}</span>
                </div>
                <div className="text-white/20 font-mono text-sm">{idx + 1}</div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{step.desc}</p>
              <div className="flex items-center gap-2 text-[#2de8b0] text-[10px] font-bold uppercase tracking-widest">
                 <ArrowUpRight size={14} />
                 <span>{step.label}</span>
              </div>
            </div>

            {/* Connecting Plus Button */}
            <div className="my-8 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(0,112,243,0.4)] z-20 group cursor-default">
              <Plus size={18} className="text-white group-hover:rotate-90 transition-transform duration-300" strokeWidth={3} />
            </div>
          </div>
        ))}

        {/* 4. Branching Bottom Section - Final Pricing Card */}
        <div className="workflow-step relative w-full flex flex-col items-center">
          <svg width="400" height="60" viewBox="0 0 400 60" fill="none" className="mb-4 opacity-30">
            <path 
              d="M200 0V20C200 40 180 40 160 40H60C40 40 40 60 40 60M200 0V20C200 40 220 40 240 40H340C360 40 360 60 360 60" 
              stroke="white" 
              strokeWidth="2"
            />
          </svg>

          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
            <div className="w-full md:w-112.5 bg-white/5 backdrop-blur-2xl border border-[#2de8b0]/30 rounded-3xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap size={80} className="text-[#2de8b0]" />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2de8b0] flex items-center justify-center">
                      <Zap size={20} className="text-black" strokeWidth={3} />
                    </div>
                    <span className="text-white font-bold text-xl">4. Flexible Pricing Plans</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Get started without heavy upfront costs. Our flexible plans are designed to make 
                    professional web solutions accessible for every business scale.
                  </p>
                  <div className="flex items-center gap-4">
                      <span className="text-[#b4f481] text-xs font-bold uppercase tracking-tighter">Scalable Solutions</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[#b4f481] text-xs font-bold uppercase tracking-tighter">Worldwide Support</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}