"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Star } from "lucide-react";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Crypto Simba",
    role: "Crypto Trader",
    content: "Arham and his team Devskarnel really get the trading world. Every project hits the right tone with clean designs.",
  },
  {
    name: "FinePoint Design",
    role: "SaaS Company",
    content: "Devskarnel built a full creative system that fits perfectly with our funnel. Lower ad costs within weeks.",
  },
  {
    name: "BigHots",
    role: "YouTube Creator",
    content: "Super smooth process. I just share the vision, and they handle everything else. Results speak for themselves.",
  },
  {
    name: "Deborah",
    role: "Medical Creator",
    content: "They understood the medical space perfectly. The site is professional, educational, and engaging.",
  },
];

export default function Review() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reset the array on each render to prevent duplicate refs causing glitches
    cardsRef.current = [];
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Force initial state to prevent "flash" of unstyled content
      gsap.set(cardsRef.current, { opacity: 0, y: 30 });

      // 2. Animate with clean scroll trigger
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto", // Prevents animation conflicts
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 md:py-24 px-4 flex flex-col items-center overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.1) 0%, transparent 80%),
          linear-gradient(180deg, #000000 0%, #082d27 50%, #000000 100%)
        `,
      }}
    >
      <div className="max-w-5xl w-full z-10">
        <header className="text-center mb-12">
          <p className="text-[#2de8b0] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-3">
            Testimonials
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Trusted by <span className="text-[#2de8b0]">Leaders</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative p-6 md:p-8 rounded-lg bg-white/2 border border-white/10 backdrop-blur-md hover:border-[#2de8b0]/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#2de8b0] text-[#2de8b0]" />
                ))}
              </div>

              <blockquote className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                "{item.content}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#2de8b0] to-[#0F7C6E] flex items-center justify-center text-black text-sm font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic text-white text-sm font-bold block group-hover:text-[#2de8b0] transition-colors">
                    {item.name}
                  </cite>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}