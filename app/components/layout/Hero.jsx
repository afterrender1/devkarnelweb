"use client";
import React, { useRef } from 'react';
import { Urbanist } from 'next/font/google';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const TRUST_BADGES = [
    "WordPress Experts",
    "SEO-Optimized",
    "99.9% Uptime",
];

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-badge", { y: 16, opacity: 0, duration: 0.6 })
            .from(".hero-h1-line", { y: 48, opacity: 0, duration: 0.9, stagger: 0.18 }, "-=0.3")
            .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
            .from(".hero-actions", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
            .from(".hero-trust", { y: 12, opacity: 0, duration: 0.5 }, "-=0.3")
            .from(".hero-video", { y: 40, opacity: 0, scale: 0.97, duration: 1.1, ease: "power2.out" }, "-=0.5")
            .fromTo(".hero-bg", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "<");

    }, { scope: container });

    return (
        <section
            ref={container}
            className={`relative w-full min-h-screen flex flex-col items-center justify-center  overflow-hidden ${urbanist.className}`}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 z-0 rounded-4xl pointer-events-none bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url(/bg1.png)" }}
            />

            {/* Grid + glow overlay */}
    

            {/* Page content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto
                            px-4 sm:px-6 lg:px-8
                            pt-20 sm:pt-24 md:pt-28
                            pb-10 sm:pb-14 md:pb-16
                            flex flex-col items-center text-center">

                {/* ── Eyebrow badge ── */}
                <div className="hero-badge inline-flex items-center gap-2
                                px-3 sm:px-4 py-1 sm:py-1.5
                                rounded-full bg-[#e8f0fe] border border-[#c5d8fd] mb-5 sm:mb-7">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1a73e8] animate-pulse shrink-0" />
                    <span className="text-[11px] sm:text-[13px] font-semibold text-[#084948] tracking-wide whitespace-nowrap">
                        Full-Stack Web Agency
                    </span>
                </div>

                {/* ── Headline ── */}
                <h1 className="font-bold text-[#202124] tracking-tight leading-[1.18] w-full
                               text-[1.6rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">

                    {/* Line 1 */}
                    <div className="overflow-hidden">
                        <span className="hero-h1-line block">
                            Crafting high-performance
                        </span>
                    </div>

                    {/* Line 2 — gradient keyword wraps gracefully on small screens */}
                    <div className="overflow-hidden">
                        <span className="hero-h1-line block">
                            digital experiences &amp;{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #1a73e8 0%, #0f9d58 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Custom Web Solutions
                            </span>
                        </span>
                    </div>

                    {/* Line 3 — smaller, lighter */}
                    <div className="overflow-hidden mt-2">
                        <span className="hero-h1-line block font-medium text-[#5f6368]
                                         text-base sm:text-xl md:text-2xl lg:text-3xl">
                            designed for{" "}
                            <span className="font-bold text-[#202124]">Scalability</span>.
                        </span>
                    </div>
                </h1>

                {/* ── Subheading ── */}
                <p className="hero-sub mt-4 sm:mt-6 text-[#383838] leading-relaxed
                              text-sm sm:text-base md:text-lg
                              max-w-[85vw] sm:max-w-md md:max-w-xl">
                    Secure, SEO-optimized, and user-centric platforms — from WordPress to Shopify — crafted for businesses worldwide.
                </p>

                {/* ── CTA Buttons ── */}
                <div className="hero-actions mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">

                    {/* Primary */}
                    <button
                        className="group flex items-center justify-center gap-2
                                   w-full sm:w-auto
                                   px-6 sm:px-7 py-3 sm:py-3.5
                                   rounded-full text-white font-semibold
                                   text-sm sm:text-[15px]
                                   transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
                           style={{
                         background: "linear-gradient(110deg, #084948 0%, #0c7371 60%, #159e9b 100%)",
                          
                        }}
                    >
                        Book a Free Consultation
                        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>

                    {/* Secondary */}
                    <button
                        className="group flex items-center justify-center gap-2
                                   w-full sm:w-auto
                                   px-6 sm:px-7 py-3 sm:py-3.5
                                   rounded-full text-[#202124] font-semibold
                                   text-sm sm:text-[15px]
                                   border border-[#dadce0] bg-white
                                   transition-all duration-200 hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95"
                    >
                        <Play className="w-4 h-4 shrink-0 text-[#084948] fill-[#084948]" />
                        Watch our story
                    </button>
                </div>

                {/* ── Trust badges ── */}
                <div className="hero-trust mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
                    {TRUST_BADGES.map((label) => (
                        <div key={label} className="flex items-center gap-1.5 text-[11px] sm:text-[13px] text-[#383838]">
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0f9d58] shrink-0" />
                            {label}
                        </div>
                    ))}
                </div>

                {/* ── Divider with label ── */}
                <div className="mt-10 sm:mt-14 w-full max-w-3xl mx-auto flex items-center gap-3 sm:gap-4">
                    <div className="flex-1 h-px bg-[#e8eaed]" />
                    <p className="text-[9px] sm:text-[11px] font-semibold text-[#525151] uppercase tracking-widest whitespace-nowrap">
                        See us in action
                    </p>
                    <div className="flex-1 h-px bg-[#e8eaed]" />
                </div>

                {/* ── Video embed ── */}
                <div className="hero-video mt-5 sm:mt-6 w-full max-w-3xl mx-auto">
                    <div
                        className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden"
                        style={{
                            boxShadow: '0 4px 6px -1px rgba(60,64,67,0.08), 0 20px 60px -10px rgba(60,64,67,0.18)',
                            border: '1px solid rgba(232,234,237,0.9)',
                        }}
                    >
                        {/* Browser chrome */}
                        <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 sm:gap-2
                                        h-6 sm:h-9 px-2.5 sm:px-4
                                        bg-[#f8f9fa] border-b border-[#e8eaed]">
                            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ea4335] shrink-0" />
                            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#fbbc04] shrink-0" />
                            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#34a853] shrink-0" />
                            <div className="ml-1.5 sm:ml-3 flex-1 h-3.5 sm:h-5 rounded-full bg-white border border-[#e8eaed] flex items-center px-2 sm:px-3">
                                <span className="text-[8px] sm:text-[10px] text-[#9aa0a6] font-medium truncate">
                                    Devskarnel
                                </span>
                            </div>
                        </div>

                        <iframe
                            className="w-full h-full pt-6 sm:pt-9"
                            src="https://www.youtube.com/embed/Xw8ZTeg8YKg?si=pigkOMOeOYwfDcPQ"
                            title="Devskarnel Web Solutions Introduction"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;