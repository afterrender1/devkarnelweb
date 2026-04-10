"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { urbanist } from "@/app/fonts"; // Adjust path as needed

// Carousel Images - Your Logo Portfolio
const carouselImages = [
    "/images/our-work/magnetik.png",
    "/images/our-work/tmgvan1.png",
    "/images/our-work/jave.png",
    "/images/our-work/coffee.png",
    "/images/our-work/zeroice.png"
];

export default function LogoHero() {
    // Text & UI Refs
    const headingLine1Ref = useRef(null);
    const headingLine2Ref = useRef(null);
    const headingLine3Ref = useRef(null);
    const subRef = useRef(null);
    const btnsRef = useRef(null);

    // Background & Carousel Refs
    const bgRevealRef = useRef(null);
    const carouselRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- Initial States ---
            gsap.set([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current, subRef.current, btnsRef.current], {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
            });

            gsap.set(bgRevealRef.current, { opacity: 0 });
            gsap.set(carouselRef.current, { opacity: 0, x: 40 });

            const tl = gsap.timeline();

            // Entrance Animations
            tl.to(bgRevealRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, 0);

            tl.to([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current], {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
            }, 0.2);

            tl.to(subRef.current, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power2.out",
            }, 0.5);

            tl.to(btnsRef.current, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power2.out",
            }, 0.7);

            tl.to(carouselRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out"
            }, 0.8);
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const slides = gsap.utils.toArray(".carousel-slide");
        gsap.to(slides, { opacity: 0, scale: 0.95, zIndex: 0, duration: 0.5, ease: "power2.inOut" });
        gsap.to(slides[activeIndex], { opacity: 1, scale: 1, zIndex: 10, duration: 0.6, ease: "power3.out" });
    }, [activeIndex]);

    return (
        <section className={`relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504] ${urbanist.className}`}>

            {/* Background Layers (Static) */}
            <div ref={bgRevealRef} className="absolute inset-0 w-full h-full" style={{
                background: `radial-gradient(circle at 10% 70%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 20%, transparent 50%), radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%), radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%), radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%), linear-gradient(180deg, #24E8B2 0%, #1BC497 5%, #0F7C6E 40%, #0A4A42 60%, #062B24 80%, #010504 100%)`,
                backgroundSize: "cover",
            }}
            />
            <div className="absolute bg-black inset-0 w-full h-full opacity-40" />
            <div className="absolute inset-0 w-full h-full opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)" }} />

            <div className="relative z-10 w-full max-w-400 mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 py-20 mt-10">

                {/* Left Side: Content */}
                <div className="w-full lg:w-3/5">
                    <h1 className="text-4xl sm:text-5xl lg:text-[4.8rem] font-bold leading-[1.1] tracking-tight text-white mb-8">
                        <span ref={headingLine1Ref} className="block">Defining iconic</span>
                        <span ref={headingLine2Ref} className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Brand Identities &</span>
                        <span ref={headingLine3Ref} className="block text-[#2de8b0]">Visual Storytelling</span>
                    </h1>
                    <p ref={subRef} className="text-white/60 text-base sm:text-[0.95rem] leading-relaxed mb-10 max-w-md">
                        We craft timeless logos that capture the essence of your business. Our design philosophy blends geometric precision with creative flair to build brands that stand out.
                    </p>
                    <div ref={btnsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <button className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-bold text-black/80 transition-all bg-[#2de8b0] shadow-[0_8px_30px_rgba(45,232,176,0.25)]">Start Your Brand</button>
                        <button className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-semibold text-white/80 border border-white/10 bg-white/5 backdrop-blur-md">View Portfolio</button>
                    </div>
                </div>

                {/* Right Side: Carousel */}
                <div className="w-full lg:w-3/5 flex justify-center lg:justify-end">
                    <div ref={carouselRef} onClick={handleNext} className="group relative w-full aspect-5/3 max-w-180 cursor-pointer">

                        {/* Navigation */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-30 flex justify-between pointer-events-none">
                            <button onClick={handlePrev} className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-[#2de8b0] hover:text-black transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-[#2de8b0] hover:text-black transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden bg-white/5 shadow-2xl">
                            {carouselImages.map((src, i) => (
                                <div key={i} className="carousel-slide absolute inset-0 w-full h-full opacity-0">
                                    <img src={src} alt="Logo Design" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                            ))}
                            <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                                <div>
                                    <p className="text-[#2de8b0] text-xs font-bold uppercase tracking-widest mb-1">Identity Design</p>
                                    <p className="text-white font-medium">Bespoke Branding</p>
                                </div>
                                <div className="flex gap-1.5">
                                    {carouselImages.map((_, i) => (
                                        <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-[#2de8b0]' : 'w-2 bg-white/20'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-[#2de8b0]/10 blur-3xl -z-10 group-hover:bg-[#2de8b0]/20 transition-colors duration-500" />
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </section>
    );
}