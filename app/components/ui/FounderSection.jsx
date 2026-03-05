"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
    const sectionRef = useRef(null);
    const brandGradient = "linear-gradient(110deg, #084948 0%, #0c7371 60%, #159e9b 100%)";

    useEffect(() => {
        const el = sectionRef.current;
        const revealElements = el.querySelectorAll(".reveal-fs");

        gsap.fromTo(revealElements,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <div ref={sectionRef} className="py-10 md:py-12 border-t border-gray-100 overflow-hidden">
            {/* Logos Section - Clean Grid */}
            <div className="mb-20 reveal-fs">
                <p className="text-gray-400 font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">
                    Trusted By Industry Leaders
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-center lg:text-left">facebook</span>
                    <span className="text-xl md:text-2xl font-black italic text-center lg:text-left">twitch</span>
                    <span className="text-xl md:text-2xl font-black text-center lg:text-left">Pinterest</span>
                    <span className="text-xl md:text-2xl font-black text-center lg:text-left uppercase">YouTube</span>
                    <span className="text-xl md:text-2xl font-black lowercase text-center lg:text-left">webflow</span>
                </div>
            </div>

         
        </div>
    );
};

export default FounderSection;