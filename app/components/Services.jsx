import React from 'react';
import { urbanist } from "../fonts";
import Image from 'next/image';

const Services = () => {
    const servicesData = [
        {
            title: "App Development",
            desc: "Building high-performance native and cross-platform mobile solutions.",
            colSpan: "lg:col-span-1",
            image: "/images/service_images/appdev.png"
        },
        {
            title: "Web Development",
            desc: "Scalable, lightning-fast web applications built with modern frameworks.",
            colSpan: "lg:col-span-2",
            image: "/images/service_images/website.png"
        },
        {
            title: "UI / UX Design",
            desc: "Crafting intuitive interfaces and seamless user journeys that convert.",
            colSpan: "lg:col-span-1",
            image: "/images/service_images/uiux.png"
        },
        {
            title: "SEO Optimization",
            desc: "Boosting visibility and organic growth through data-driven strategies.",
            colSpan: "lg:col-span-1",
            image: "/images/service_images/seo1.png"
        },
        {
            title: "Logo Design",
            desc: "Creating memorable brand identities that stand the test of time.",
            colSpan: "lg:col-span-1",
            image: "/images/service_images/website.png"
        }
    ];

    return (
        <section
        id='services'
            className={`relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#010504] ${urbanist.className}`}
            style={{
                background: `
                    /* 1. Aggressive Top-Down Shadow (for seamless blend) */
                    linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, transparent 60%),

                    /* 2. Side Vignettes (Darkens Left and Right edges) */
                    radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 0.9) 0%, transparent 40%),
                    radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.9) 0%, transparent 40%),

                    /* 3. High-Intensity Center Glow (The "Bright" Part) */
                    radial-gradient(
                        circle at 50% 45%, 
                        rgba(45, 232, 176, 0.35) 0%, 
                        rgba(45, 232, 176, 0.1) 30%,
                        transparent 70%
                    ),
                    
                    /* 4. The Base Emerald Gradient */
                    linear-gradient(
                        180deg,
                        #0F7C6E 0%,
                        #0A4A42 40%,
                        #062B24 75%,
                        #010504 100%
                    )
                `
            }}
        >
            <div className="absolute bg-black inset-0 w-full h-full opacity-40" />

            <div className="relative z-10 max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
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
                            className={`
                                ${service.colSpan} 
                                relative group 
                                overflow-hidden 
                                rounded 
                                min-h-87.5 sm:min-h-100 lg:min-h-112.5
                                transition-all duration-500 ease-out
                                hover:scale-[1.02]
                                hover:border-[#2de8b0]/50
                                hover:shadow-[0_0_60px_rgba(45,232,176,0.15)]
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                cursor-pointer
                            `}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Dark Gradient Overlay - Bottom to Top */}
                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Additional Glassmorphism Layer */}
                            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                            {/* Content - Bottom Left Positioned */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Hover Indicator */}
                                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="text-[#2de8b0] text-sm font-medium">Learn more</span>
                                    <svg
                                        className="w-4 h-4 text-[#2de8b0] transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Corner Accent Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2de8b0]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;