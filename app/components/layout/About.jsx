"use client";
import React, { useEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FounderSection from "../ui/FounderSection";

gsap.registerPlugin(ScrollTrigger);
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className={`w-full bg-white ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-5 py-1 md:py-16 lg:py-3">

                {/* --- Hero Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <div className="reveal">
                        <div className="flex items-center gap-3 mb-6 text-[#23bcdf] font-bold text-[11px] uppercase tracking-[0.2em]">
                            <span className="w-6 h-0.5 bg-[#23bcdf]"></span>
                            <span>Discover / Design / Develop</span>
                        </div>

                        <h1 className="text-gray-900 font-bold leading-[1.1] mb-6 text-[clamp(2.5rem,6vw,3.5rem)] tracking-tight">
                            Hardworking team of <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#084948] to-[#23bcdf]">
                                marketing experts.
                            </span>
                        </h1>

                        <p className="text-gray-500 text-xs md:text-base  leading-relaxed mb-10 max-w-xl">
                            We help ambitious brands reach their full potential through strategic design
                            and cutting-edge development. Focused on data, refined by creativity.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                ))}
                            </div>
                            <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                                Trusted by 500+ <span className="text-gray-400 block font-medium">Global Creators</span>
                            </p>
                        </div>
                    </div>

                    <div className="reveal relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                                alt="Workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- Stats Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100 mb-1">
                    {[
                        { num: "300", label: "Happy Clients", suffix: "+" },
                        { num: "600", label: "Projects Done", suffix: "+" },
                        { num: "150", label: "Expert Workers", suffix: "+" },
                        { num: "99", label: "Satisfaction", suffix: "%" },
                    ].map((stat, i) => (
                        <div key={i} className="reveal text-center md:text-left">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-2 tracking-tighter">
                                {stat.num}<span className="text-[#23bcdf]">{stat.suffix}</span>
                            </h3>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <FounderSection />
            </div>
        </section>
    );
};

export default About;