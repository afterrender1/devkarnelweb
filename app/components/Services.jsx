import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urbanist } from "../fonts";

const Services = () => {
    const servicesData = [
        {
            title: "App Development",
            colSpan: "col-span-1 lg:col-span-1",
            href: "/services/mobile-app-development",
            image: "/images/service_images/appcard.webp"
        },
        {
            title: "Web Development",
            colSpan: "col-span-1 lg:col-span-2",
            href: "/services/website-development",
            image: "/images/service_images/webcard.webp"
        },
        {
            title: "UI / UX Design",
            colSpan: "col-span-1 lg:col-span-1",
            href: "/services/ui-ux-design",
            image: "/images/service_images/uiuxcard.webp"
        },
        {
            title: "SEO Optimization",
            colSpan: "col-span-1 lg:col-span-1",
            href: "/services/seo-optimization",
            image: "/images/service_images/seocard.webp"
        },
        {
            title: "Logo Design",
            colSpan: "col-span-2 lg:col-span-1",
            href: "/services/logo-design",
            image: "/images/service_images/logocard.webp"
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
                                min-h-43.75 min-[360px]:min-h-48.75 xs:min-h-55 sm:min-h-70 md:min-h-85 lg:min-h-112.5
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
                                    className="object-cover brightness-[0.78] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Subtle Dark Overlay */}
                            <div className="absolute inset-0 z-1 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

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