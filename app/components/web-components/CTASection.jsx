"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
    const containerRef = useRef(null);
    const headlineRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const backgroundGlowRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            tl.fromTo(
                headlineRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    paragraphRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, scale: 0.9, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
                    "-=0.5"
                );

            gsap.to(backgroundGlowRef.current, {
                opacity: 0.6,
                scale: 1.1,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section style={{
            background: `radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #000000 35%, #064e3b 50%, #000000 65%, #000000 100%)`
        }} ref={containerRef} className={`relative bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${urbanist.className}`}>
            {/* Background Radial Glow */}
            <div ref={backgroundGlowRef} className="absolute -bottom-32 sm:-bottom-48 -left-32 sm:-left-48 w-96 sm:w-150 h-96 sm:h-150 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none opacity-30 z-0" />
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                {/* Main Headline */}
                <h2 ref={headlineRef} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
                    Ready to Get a Website That <br className="hidden sm:inline" />
                    <span className="bg-linear-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        Actually Grows Your Business?
                    </span>
                </h2>
                {/* Bottom Paragraph */}
                <p ref={paragraphRef} className="text-white/70 text-sm sm:text-base lg:text-lg xl:text-xl mt-6 sm:mt-8 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss how we can transform your digital presence into a high-converting engine. Tell us about your project, ask questions, or schedule a free strategy call below.
                </p>
                {/* CTA Button and Contact */}
                <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                    <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl bg-emerald-500 text-white font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.03] hover:shadow-lg hover:shadow-emerald-500/40 active:scale-[0.97]">
                        Request a Quote
                    </button>
                    <span className="text-white/50 text-base sm:text-lg font-medium">or</span>
                    <a href="mailto:devskarnel@gmail.com" className="text-white text-sm sm:text-base lg:text-lg font-semibold border-b-2 border-emerald-500/30 hover:border-emerald-500 transition-colors pb-1">
                        devskarnel@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}