"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist } from "@/app/fonts";

// Logo images for circular orbit
const logoImages = [
    "/images/arl.png",
    "/images/dkl.png",
    "/images/arl.png",
    "/images/dkl.png",
];

export default function LogoHero() {
    // Text & UI Refs
    const headingLine1Ref = useRef(null);
    const headingLine2Ref = useRef(null);
    const headingLine3Ref = useRef(null);
    const subRef = useRef(null);
    const btnsRef = useRef(null);

    // Background & Orbit Refs
    const bgRevealRef = useRef(null);
    const orbitContainerRef = useRef(null);
    const logoRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = [
                headingLine1Ref.current,
                headingLine2Ref.current,
                headingLine3Ref.current,
                subRef.current,
                btnsRef.current
            ].filter(Boolean);

            gsap.set(elements, {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
            });

            if (bgRevealRef.current) {
                gsap.set(bgRevealRef.current, { opacity: 0 });
            }

            if (orbitContainerRef.current) {
                gsap.set(orbitContainerRef.current, { opacity: 0, scale: 0.8 });
            }

            const tl = gsap.timeline();

            // Background reveal
            if (bgRevealRef.current) {
                tl.to(bgRevealRef.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }, 0);
            }

            // Text animations
            tl.to(elements.slice(0, 3), {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
            }, 0.2);

            if (subRef.current) {
                tl.to(subRef.current, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.6,
                    ease: "power2.out",
                }, 0.5);
            }

            if (btnsRef.current) {
                tl.to(btnsRef.current, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.6,
                    ease: "power2.out",
                }, 0.7);
            }

            // Orbit container reveal
            if (orbitContainerRef.current) {
                tl.to(orbitContainerRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out"
                }, 0.8);
            }

            // Circular orbit animation
            if (logoRefs.current.length > 0) {
                const radius = 140; // Orbit radius
                const numLogos = logoImages.length;
                const angleStep = (Math.PI * 2) / numLogos;

                logoRefs.current.forEach((logo, index) => {
                    if (!logo) return;

                    const startAngle = (index * angleStep);
                    
                    // Initial positioning
                    gsap.set(logo, {
                        x: Math.cos(startAngle) * radius,
                        y: Math.sin(startAngle) * radius,
                    });

                    // Infinite rotation animation
                    gsap.to(logo, {
                        rotation: 360,
                        transformOrigin: "center center",
                        duration: 20,
                        ease: "none",
                        repeat: -1,
                        modifiers: {
                            rotation: (rotation) => {
                                // Calculate current angle
                                const currentRotation = parseFloat(rotation);
                                const angle = startAngle + (currentRotation * Math.PI / 180);
                                
                                // Update position based on angle
                                gsap.set(logo, {
                                    x: Math.cos(angle) * radius,
                                    y: Math.sin(angle) * radius,
                                });
                                
                                return rotation;
                            }
                        }
                    });

                    // Depth effect with scale and opacity pulsing
                    gsap.to(logo, {
                        scale: 1.1,
                        opacity: 1,
                        duration: 2.5,
                        repeat: -1,
                        yoyo: true,
                        delay: index * 0.5,
                        ease: "sine.inOut"
                    });
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={`relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504] ${urbanist.className}`}>
            {/* Background Layers */}
            <div ref={bgRevealRef} className="absolute inset-0 w-full h-full" style={{
                background: `radial-gradient(circle at 10% 70%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 20%, transparent 50%), radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%), radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%), radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%), linear-gradient(180deg, #24E8B2 0%, #1BC497 5%, #0F7C6E 40%, #0A4A42 60%, #062B24 80%, #010504 100%)`,
                backgroundSize: "cover",
            }} />
            <div className="absolute bg-black inset-0 w-full h-full opacity-40" />
            <div className="absolute inset-0 w-full h-full opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)" }} />

            <div className="relative z-10 w-full max-w-400 mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 py-20 mt-10">
                {/* Left Side: Content */}
                <div className="w-full lg:w-3/5">
                    <h1 className="text-4xl sm:text-5xl lg:text-[4.8rem] font-bold leading-[1.1] tracking-tight text-white mb-8">
                        <span ref={headingLine2Ref} className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Logo</span>
                        <span ref={headingLine3Ref} className="ml-8 block text-[#2de8b0]">Design</span>
                    </h1>
                    <p ref={subRef} className="text-white/60 text-base sm:text-[0.95rem] leading-relaxed mb-10 max-w-md">
                        We craft timeless logos that capture the essence of your business. Our design philosophy blends geometric precision with creative flair to build brands that stand out.
                    </p>
                    <div ref={btnsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <button className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-bold text-black/80 transition-all bg-[#2de8b0] shadow-[0_8px_30px_rgba(45,232,176,0.25)] hover:shadow-[0_12px_40px_rgba(45,232,176,0.35)] hover:bg-[#3df7bf]">
                            Start Your Brand
                        </button>
                        <button className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-semibold text-white/80 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all">
                            View Portfolio
                        </button>
                    </div>
                </div>

                {/* Right Side: Circular Logo Orbit */}
                <div className="w-full lg:w-3/5 flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-square max-w-125">
                        {/* Outer glow container */}
                        <div className="absolute inset-0 -m-8">
                            <div className="absolute inset-0 bg-[#2de8b0]/10 blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
                            <div className="absolute inset-0 bg-[#2de8b0]/5 blur-[120px]" />
                        </div>

                        {/* Orbit container */}
                        <div ref={orbitContainerRef} className="relative w-full h-full flex items-center justify-center">
                            {/* Center decorative element */}

                            {/* Orbit path visualization (optional) */}
                            <div className="absolute w-70 h-70 rounded-full border border-dashed border-white/5" />

                            {/* Orbiting logos */}
                            {logoImages.map((src, i) => (
                                <div
                                    key={i}
                                    ref={(el) => (logoRefs.current[i] = el)}
                                    className="absolute w-28 h-28 flex items-center justify-center"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        marginLeft: '-3.5rem',
                                        marginTop: '-3.5rem',
                                    }}
                                >
                                    <div className="relative w-full h-full group">
                                        {/* Logo glow */}
                                        <div className="absolute inset-0 bg-[#2de8b0]/20 blur-2xl group-hover:bg-[#2de8b0]/30 transition-all duration-500" />
                                        
                                        {/* Logo container */}
                                        <div className="relative w-full h-full   p-4 transition-all duration-500 overflow-hidden">
                                            <img 
                                                src={src} 
                                                alt={`Logo ${i + 1}`} 
                                                className="w-full h-full object-contain "
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Center text label */}
                            {/* <div className="absolute z-20 text-center">
                                <p className="text-[#2de8b0] text-xs font-bold uppercase tracking-widest mb-1">
                                    Our Work
                                </p>
                                <p className="text-white/60 text-sm font-medium">
                                    Premium Brands
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </section>
    );
}