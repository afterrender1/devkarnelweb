import React from 'react'
import { urbanist } from "../fonts";

const Services = () => {
    const servicesData = [
        {
            title: "App Development",
            desc: "Building high-performance native and cross-platform mobile solutions.",
            colSpan: "lg:col-span-1",
            image: (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-[#111] border border-white/10 p-4 rounded-xl shadow-2xl scale-110">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">🧩</div>
                            <div>
                                <div className="text-[10px] text-white/40 flex items-center gap-1">● NEW</div>
                                <div className="text-sm font-medium text-white">2 Models Updated</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Web Development",
            desc: "Scalable, lightning-fast web applications built with modern frameworks.",
            colSpan: "lg:col-span-2",
            image: (
                <div className="absolute inset-0 opacity-40 overflow-hidden">
                    <div className="grid grid-cols-6 gap-2 rotate-12 -translate-y-10 scale-150">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="aspect-square border border-[#2de8b0]/20 rounded-lg flex items-center justify-center text-[#2de8b0]/30">
                                {i % 4 === 0 ? "⚛️" : i % 3 === 0 ? "🐍" : "🔥"}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "UI / UX Design",
            desc: "Crafting intuitive interfaces and seamless user journeys that convert.",
            colSpan: "lg:col-span-1",
            image: (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="relative">
                        <div className="border-2 border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                            <span className="text-3xl font-bold bg-linear-to-br from-white to-white/40 bg-clip-text text-transparent">UI</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "SEO Optimization",
            desc: "Boosting visibility and organic growth through data-driven strategies.",
            colSpan: "lg:col-span-1",
            image: (
                <div className="w-full h-full flex items-end justify-center px-4">
                    <svg viewBox="0 0 200 100" className="w-full h-32">
                        <path d="M0,80 Q50,90 80,40 T160,20" fill="none" stroke="#2de8b0" strokeWidth="3" />
                        <circle cx="160" cy="20" r="4" fill="#2de8b0" />
                    </svg>
                </div>
            )
        },
        {
            title: "Logo Design",
            desc: "Creating memorable brand identities that stand the test of time.",
            colSpan: "lg:col-span-1",
            image: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 w-full max-w-45 text-center">
                        <div className="text-[10px] text-white/50 mb-1 font-mono">Brand Mark</div>
                        <div className="text-[8px] text-white/30 mb-4 italic leading-tight">Vector-based scalable iconography.</div>
                        <div className="flex gap-2">
                            <div className="flex-1 py-1 bg-white/5 rounded text-[8px] text-white/40">Minimal</div>
                            <div className="flex-1 py-1 bg-white/10 rounded text-[8px] text-white/80">Premium</div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section
            className={`relative w-full  py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#010504] ${urbanist.className}`}
            style={{
                background: `
    radial-gradient(
      circle at 50% 20%, 
      transparent 10%, 
      rgba(0, 0, 0, 0.4) 40%, 
      rgba(0, 0, 0, 0.9) 90%
    ),
    
    radial-gradient(
      circle at 50% 50%, 
      rgba(45, 232, 176, 0.2) 0%, 
      transparent 60%
    ),
    
    linear-gradient(
      180deg,
      #1BC497 0%,
      #0F7C6E 30%,
      #0A4A42 60%,
      #062B24 85%,
      #010504 100%
    )
  `
            }}
        >
            <div className="absolute bg-black inset-0 w-full h-full opacity-40"/> 
            <div className="relative z-10 max-w-420 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <svg className="w-4 h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-white/70 uppercase tracking-wider font-medium">Our Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">Services we offer</h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.colSpan} relative group overflow-hidden backdrop-blur-3xl bg-linear-to-br from-white/10 to-white/10 border border-white/10 rounded-2xl flex flex-col min-h-95 transition-all duration-500 hover:border-[#2de8b0]/30 hover:shadow-[0_0_40px_rgba(45,232,176,0.05)]`}
                        >
                            {/* Visual/Image Area */}
                            <div className="relative flex-1 p-6">
                                {service.image}
                            </div>

                            {/* Text Content */}
                            <div className="p-8 pt-0">
                                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-lg leading-relaxed max-w-70">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;