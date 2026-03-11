"use client";
import React, { useEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FounderSection from "../ui/FounderSection";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const STATS = [
    { num: 300, suffix: "+", label: "Happy Clients" },
    { num: 600, suffix: "+", label: "Projects Done" },
    { num: 150, suffix: "+", label: "Expert Workers" },
    { num: 99, suffix: "%", label: "Satisfaction" },
];

/* ─── Animated stat counter ─── */
const StatItem = ({ num, suffix, label }) => {
    const numRef = useRef(null);

    useEffect(() => {
        const el = numRef.current;
        if (!el) return;
        const obj = { n: 0 };

        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter() {
                gsap.to(obj, {
                    n: num,
                    duration: 1.8,
                    ease: "power2.out",
                    onUpdate() { el.textContent = Math.round(obj.n) + suffix; },
                    onComplete() { el.textContent = num + suffix; },
                });
            },
        });

        return () => st.kill();
    }, [num, suffix]);

    return (
        <div className="flex flex-col gap-1.5">
            <span
                ref={numRef}
                className="font-black text-gray-900 leading-none tabular-nums"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
                {num}{suffix}
            </span>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.18em]" style={{ fontSize: "10px" }}>
                {label}
            </p>
        </div>
    );
};

const About = () => {
    const gsapCtx = useRef(null);
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            gsapCtx.current = gsap.context(() => {

                /* ── Left text col: words stagger up ── */
                gsap.fromTo(
                    textRef.current?.querySelectorAll(".t-anim"),
                    { y: 32, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        stagger: 0.12,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: { trigger: textRef.current, start: "top 82%", once: true },
                    }
                );

                /* ── Image: subtle rise + slight scale ── */
                gsap.fromTo(
                    imageRef.current,
                    { y: 40, scale: 0.97, opacity: 0 },
                    {
                        y: 0, scale: 1, opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: { trigger: imageRef.current, start: "top 84%", once: true },
                    }
                );

                /* ── Stats divider line draw ── */
                gsap.fromTo(
                    statsRef.current?.querySelector(".stat-line"),
                    { scaleX: 0, transformOrigin: "left center" },
                    {
                        scaleX: 1, duration: 1.1, ease: "power2.out",
                        scrollTrigger: { trigger: statsRef.current, start: "top 86%", once: true },
                    }
                );

                /* ── Stat items stagger ── */
                gsap.fromTo(
                    statsRef.current?.querySelectorAll(".s-anim"),
                    { y: 22, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        stagger: 0.1,
                        duration: 0.55,
                        ease: "power3.out",
                        scrollTrigger: { trigger: statsRef.current, start: "top 84%", once: true },
                    }
                );

            }, sectionRef);
        });

        return () => {
            cancelAnimationFrame(raf);
            gsapCtx.current?.revert();
        };
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`w-full bg-white ${urbanist.className}`}
        >
            <div className="max-w-290 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                {/* ══════════════════════════════════════
                    HERO — text left / image right
                ══════════════════════════════════════ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">

                    {/* Left text */}
                    <div ref={textRef} className="flex flex-col">

                        {/* Eyebrow */}
                        <div className="t-anim flex items-center gap-2.5 mb-5" style={{ opacity: 0 }}>
                            <span className="block w-5 h-0.5 bg-[#23bcdf]" />
                            <span
                                className="text-[#23bcdf] font-bold uppercase"
                                style={{ fontSize: "10.5px", letterSpacing: "0.2em" }}
                            >
                                Discover / Design / Develop
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="t-anim font-black text-gray-900 leading-[1.08] tracking-tight mb-5"
                            style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)", opacity: 0 }}
                        >
                            Hardworking team of{" "}
                            <br className="hidden sm:block" />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(110deg,#084948 0%,#23bcdf 100%)" }}
                            >
                                marketing experts.
                            </span>
                        </h1>

                        {/* Body */}
                        <p
                            className="t-anim text-gray-500 leading-relaxed mb-9 max-w-lg"
                            style={{ fontSize: "clamp(13.5px, 1.7vw, 15px)", opacity: 0 }}
                        >
                            We help ambitious brands reach their full potential through strategic
                            design and cutting-edge development. Focused on data, refined by creativity.
                        </p>

                        {/* Avatars + trust line */}
                        <div className="t-anim flex flex-wrap items-center gap-5" style={{ opacity: 0 }}>
                            <div className="flex -space-x-2.5">
                                {[1, 2, 3, 4].map(i => (
                                    <img
                                        key={i}
                                        src={`https://i.pravatar.cc/100?u=${i}`}
                                        alt="user"
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="font-black text-gray-900" style={{ fontSize: "12.5px", letterSpacing: "0.06em" }}>
                                    Trusted by 500+
                                </p>
                                <p className="text-gray-400 font-medium" style={{ fontSize: "12px" }}>
                                    Global Creators
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div
                        ref={imageRef}
                        className="w-full"
                        style={{ opacity: 0 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full"
                            style={{ aspectRatio: "4/3" }}>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                                alt="Team workspace"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle tint overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(8,73,72,0.18) 100%)" }}
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="flex justify-end mt-4">
                            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-gray-700 font-semibold" style={{ fontSize: "12px" }}>
                                    600+ Projects delivered
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════
                    STATS
                ══════════════════════════════════════ */}
                <div ref={statsRef}>
                    <div className="stat-line h-px bg-gray-100 mb-10 sm:mb-12 w-full" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-0">
                        {STATS.map((s, i) => (
                            <div key={i} className="s-anim" style={{ opacity: 0 }}>
                                <StatItem num={s.num} suffix={s.suffix} label={s.label} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════════════════════════════════
                    FOUNDER / TRUSTED BRANDS
                ══════════════════════════════════════ */}
                <FounderSection />

            </div>
        </section>
    );
};

export default About;