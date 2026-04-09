"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { urbanist } from "../fonts";

const tabs = [
    { id: "jlr", name: "JLR" },
    { id: "stellantis", name: "STELLANTIS" },
    { id: "a2mac1", name: "A2MAC1" },
    { id: "ovako", name: "OVAKO" },
    { id: "hoganas", name: "Höganäs" },
];

const caseStudiesData = {
    jlr: [
        {
            id: 1,
            category: "AUTOMOTIVE",
            title: "JLR Digital Transformation",
            description: "Streamlining the vehicle development process through advanced simulation and digital twin technology...",
            image: "/cases/jlr-1.jpg",
        },
    ],
    stellantis: [
        {
            id: 1,
            category: "AUTOMOTIVE",
            title: "Stellantis Innovation Platform",
            description: "Building a unified digital platform for cross-brand collaboration...",
            image: "/cases/stellantis-1.jpg",
        },
    ],
    a2mac1: [
        {
            id: 1,
            category: "AUTOMOTIVE",
            title: "A2MAC1 ZeBeyond partnership",
            description: "The full A2MAC1 XEV library is now available in a dynamic simulation environment...",
            image: "/cases/a2mac1-car.png",
        },
    ],
    ovako: [
        {
            id: 1,
            category: "MANUFACTURING",
            title: "Ovako Process Optimization",
            description: "Implementing AI-driven quality control systems...",
            image: "/cases/ovako-1.jpg",
        },
    ],
    hoganas: [
        {
            id: 1,
            category: "MATERIALS",
            title: "Höganäs Material Innovation",
            description: "Developing next-generation metal powder solutions...",
            image: "/cases/hoganas-1.jpg",
        },
    ],
};

export default function CaseStudies() {
    const [activeTab, setActiveTab] = useState("a2mac1");
    const contentRef = useRef(null); // Changed: Ref is now only for the inner content

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }, contentRef);

        return () => ctx.revert();
    }, [activeTab]);

    const handleTabChange = (tabId) => {
        if (tabId === activeTab) return;

        gsap.to(contentRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setActiveTab(tabId);
            },
        });
    };

    const currentCases = caseStudiesData[activeTab] || [];

    return (
        <section

       style={{
  background: `
    /* 1. Force black corners - increased spread to 70% to kill edge glow */
    radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
    radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
    radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),
    radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 2. Strong Central Spotlight (Bright only in the middle) */
    radial-gradient(
      circle at 50% 50%, 
      rgba(45, 232, 176, 0.8) 0%, 
      transparent 60%
    ),

    /* 3. The "Pinched" Linear Base - Solid black for 40% of the height */
    linear-gradient(
      180deg,
      #000000 0%,
      #000000 40%,      /* Stay black longer from top */
      #0F7C6E 50%,      /* Bright center pop */
      #000000 60%,      /* Get black faster toward bottom */
      #000000 100%
    )
  `,
  willChange: "opacity",
}}
            className={`relative w-full bg-[#0a0f0d] py-16 sm:py-20 lg:pb-20 overflow-hidden ${urbanist.className}`}>
            <div className="absolute bg-black inset-0 w-full h-full opacity-40" />

            <div className="relative z-10 max-w-400 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                        <svg className="w-4 h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-white/70 uppercase tracking-wider font-medium">Case Studies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">Our customer stories</h2>
                </div>

                {/* Navigation Tabs */}
                <div className="flex border border-white/20 rounded-t overflow-hidden">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`relative w-full py-4 transition-all duration-300 font-medium text-sm sm:text-base ${activeTab === tab.id
                                ? "bg-white/85 text-black"
                                : "bg-black/10 backdrop-blur-2xl text-white/50 hover:bg-white/5 hover:text-white/70"
                                }`}
                        >
                            <span className="tracking-wide uppercase">{tab.name}</span>
                            {/* {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2de8b0]" />
              )} */}
                        </button>
                    ))}
                </div>

                {/* Card Container - Static */}
                <div className="grid grid-cols-1 gap-8 mt-3">
                    {currentCases.map((caseStudy) => (
                        <div
                            key={caseStudy.id}
                            className="group relative bg-black/40 backdrop-blur-xl rounded overflow-hidden border border-gray-600"
                        >
                            {/* Content Wrapper - Animated */}
                            <div ref={contentRef} className="grid lg:grid-cols-2 gap-0">

                                {/* Left: Text */}
                                <div className="flex flex-col justify-center p-8 sm:p-12">
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-[#2de8b0]" />
                                        <span className="text-xs sm:text-sm text-[#2de8b0] uppercase tracking-widest font-semibold">
                                            {caseStudy.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl">
                                        {caseStudy.description}
                                    </p>


                                </div>

                                {/* Right: Image Area */}
                                <div className="border-l border-gray-500 relative min-h-75 lg:min-h-125 bg-white/5 flex items-center justify-center overflow-hidden">
                                    <iframe
                                        loading="lazy"
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/smBE-xrtQKg?si=PuoVGf0O8IOb1Yh6"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}