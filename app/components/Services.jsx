import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urbanist } from "../fonts";

const Services = () => {
    const servicesData = [
        {
            title: "App Development",
            desc: "Building high-performance native and cross-platform mobile solutions.",
            colSpan: "col-span-1 lg:col-span-1",
            href: "/services/mobile-app-development",
            image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_600/v1778325978/Adobe_Express_-_file_lctvwl.png"
        },
        {
            title: "Web Development",
            desc: "Scalable, lightning-fast web applications built with modern frameworks.",
            colSpan: "col-span-1 lg:col-span-2",
            href: "/services/website-development",
            image: "/images/service_images/website.png"
        },
        {
            title: "UI / UX Design",
            desc: "Crafting intuitive interfaces and seamless user journeys that convert.",
            colSpan: "col-span-1 lg:col-span-1",
            href: "/services/ui-ux-design",
            image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_600/v1778325979/Gemini_Generated_Image_y8divby8divby8di_1_iwcwda.png"
        },
        {
            title: "SEO Optimization",
            desc: "Boosting visibility and organic growth through data-driven strategies.",
            colSpan: "col-span-1 lg:col-span-1",
            href: "/services/seo-optimization",
            image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_600/v1778325979/Gemini_Generated_Image_8fs9m78fs9m78fs9_1_hea4am.png"
        },
        {
            title: "Logo Design",
            desc: "Creating memorable brand identities that stand the test of time.",
            colSpan: "col-span-2 lg:col-span-1",
            href: "/services/logo-design",
            image: "/images/service_images/website.png"
        }
    ];

    return (
        <section id='services' className={`relative w-full py-14 sm:py-18 lg:py-24 overflow-hidden bg-[#010504] ${urbanist.className}`}
            style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, transparent 60%), radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 0.9) 0%, transparent 40%), radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.9) 0%, transparent 40%), radial-gradient(circle at 50% 45%, rgba(45, 232, 176, 0.35) 0%, rgba(45, 232, 176, 0.1) 30%, transparent 70%), linear-gradient(180deg, #0F7C6E 0%, #0A4A42 40%, #062B24 75%, #010504 100%)`
            }}>
            <div className="absolute bg-black inset-0 w-full h-full opacity-40 pointer-events-none" />
            <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-[11px] sm:text-sm text-white/70 uppercase tracking-wider font-medium">Our Services</span>
                    </div>
                    <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-0">Services we offer</h2>
                </div>

                {/* 2 in one row on mobile, exact Bento layout on PC */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 xs:gap-3.5 sm:gap-5">
                    {servicesData.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className={`
                                ${service.colSpan} 
                                relative group 
                                overflow-hidden 
                                rounded-2xl sm:rounded-3xl 
                                min-h-[175px] min-[360px]:min-h-[195px] xs:min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-112.5
                                transition-all duration-500 ease-out
                                hover:scale-[1.02]
                                border border-white/10
                                hover:border-[#2de8b0]/50
                                hover:shadow-[0_0_60px_rgba(45,232,176,0.15)]
                                backdrop-blur-xl
                                cursor-pointer
                                block
                            `}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Dark Gradient Overlay - Bottom to Top */}
                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/55 sm:via-black/50 to-transparent" />

                            {/* Content - Bottom Left Positioned */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-2.5 min-[360px]:p-3.5 xs:p-4 sm:p-6 lg:p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                    <h3 className="text-xs min-[360px]:text-sm sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 min-[360px]:mb-1 sm:mb-3 tracking-tight leading-tight group-hover:text-[#2de8b0] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 text-[10px] min-[360px]:text-[11px] sm:text-base lg:text-lg leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none max-w-md">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Hover / CTA Indicator */}
                                <div className="mt-1 min-[360px]:mt-1.5 sm:mt-4 flex items-center gap-1 sm:gap-2 text-[#2de8b0] text-[10px] min-[360px]:text-xs sm:text-sm font-medium opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 transform sm:translate-y-2 sm:group-hover:translate-y-0">
                                    <span>Learn more</span>
                                    <svg
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-[#2de8b0] transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Corner Accent Glow */}
                            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#2de8b0]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;