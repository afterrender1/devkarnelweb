"use client";
import React, { useState } from 'react';
import { Urbanist } from 'next/font/google';
import { Code2, LayoutTemplate, Smartphone, ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const services = [
    {
        title: "WordPress Development",
        desc: "Custom themes and robust e-commerce solutions built on the world's most popular CMS.",
        icon: Globe,
        image: "/wp.png",
        tag: "CMS & Themes",
        accent: "#1a73e8",
    },
    {
        title: "Node.js Solutions",
        desc: "Scalable, real-time backend architectures and API development for high-traffic apps.",
        icon: Code2,
        image: "/node.png",
        tag: "Backend & APIs",
        accent: "#0f9d58",
    },
    {
        title: "Landing Page Design",
        desc: "High-converting, performance-optimized landing pages designed to drive leads.",
        icon: LayoutTemplate,
        image: "/lp.png",
        tag: "Design & UX",
        accent: "#f4511e",
    },
    {
        title: "Shopify E-commerce",
        desc: "Specialized online store setups, Liquid customization, and seamless app integrations.",
        icon: Smartphone,
        image: "/shopify.png",
        tag: "E-commerce",
        accent: "#7b1fa2",
    },
    {
        title: "SEO Optimization",
        desc: "Data-driven strategies to dominate search rankings and increase organic traffic.",
        icon: ShieldCheck,
        image: "/seo.png",
        tag: "Growth & Traffic",
        accent: "#e37400",
    },
];

/* ─── Card ─── */
const ServiceCard = ({ service }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = service.icon;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer w-full"
            style={{
                boxShadow: hovered
                    ? '0 8px 32px rgba(60,64,67,0.15), 0 2px 8px rgba(60,64,67,0.08)'
                    : '0 1px 3px rgba(60,64,67,0.12), 0 1px 2px rgba(60,64,67,0.08)',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
        >
            <div
                className="relative w-full overflow-hidden bg-slate-50"
                style={{ aspectRatio: '16/10' }}
            >
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{
                        transition: 'transform 0.4s ease',
                        transform: hovered ? 'scale(1.04)' : 'scale(1)',
                    }}
                />
                <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{
                        backgroundColor: service.accent,
                        opacity: hovered ? 1 : 0,
                        transition: 'opacity 0.25s ease',
                    }}
                />
                <div className="absolute top-3 left-3">
                    <span
                        className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                        style={{
                            backgroundColor: `${service.accent}18`,
                            color: service.accent,
                        }}
                    >
                        {service.tag}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
                {/* Icon */}
                <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300"
                    style={{ backgroundColor: hovered ? `${service.accent}14` : '#f8fafc' }}
                >
                    <Icon
                        size={18}
                        style={{ color: hovered ? service.accent : '#64748b', transition: 'color 0.3s' }}
                    />
                </div>

                <h3
                    className="font-semibold mb-1.5 sm:mb-2 leading-snug transition-colors duration-300"
                    style={{
                        fontSize: 'clamp(14px, 2vw, 17px)',
                        color: hovered ? service.accent : '#202124',
                    }}
                >
                    {service.title}
                </h3>

                <p
                    className="text-[#5f6368] leading-relaxed flex-1"
                    style={{ fontSize: 'clamp(12.5px, 1.5vw, 14px)' }}
                >
                    {service.desc}
                </p>

                <div className="mt-4 sm:mt-5 flex items-center gap-1.5">
                    <span
                        className="font-medium transition-colors duration-300"
                        style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', color: service.accent }}
                    >
                        Learn more
                    </span>
                    <ArrowUpRight
                        size={15}
                        style={{
                            color: service.accent,
                            transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className={`py-14 sm:py-20 lg:py-24 ${urbanist.className}`}>
            <div className="w-full max-w-300 mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8 sm:mb-11 lg:mb-14">
                    <p className="text-[11px] sm:text-sm font-semibold text-[#23bcdf] tracking-[0.18em] uppercase mb-2 sm:mb-3">
                        What We Do
                    </p>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4">
                        <h2
                            className="font-bold text-[#202124] leading-tight"
                            style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.75rem)' }}
                        >
                            Services built for{' '}
                            <span className="text-[#23bcdf]">modern businesses</span>
                        </h2>
                        <p
                            className="text-[#5f6368] leading-relaxed md:max-w-xs lg:max-w-sm"
                            style={{ fontSize: 'clamp(13px, 1.8vw, 16px)' }}
                        >
                            End-to-end digital solutions — from design to deployment — that help you grow faster and smarter.
                        </p>
                    </div>

                    <div className="mt-6 sm:mt-8 h-px bg-[#e8eaed]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={index === 4 ? 'lg:col-start-2' : ''}
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-14 flex justify-center">
                    <div className="relative group w-full sm:w-auto">
                        <div className="relative w-full sm:w-72 h-13 sm:h-14 opacity-90 overflow-hidden rounded-xl bg-[#00ADB5] z-10">
                            {/* Shimmer */}
                            <div className="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transition-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12" />
                            <div className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-2xl inset-0.5 bg-black">
                                <button
                                
                                   style={{
                         background: "linear-gradient(110deg, #084948 0%, #0c7371 60%, #159e9b 100%)",
                        
                        }}
                                className="cursor-pointer font-semibold text-base sm:text-lg h-full w-full px-6 sm:px-16 py-3 rounded-xl ">
                                    View all services
                                </button>
                            </div>
                            <div className="absolute duration-1000 group-hover:animate-spin w-full h-24 bg-linear-to-r from-green-500 to-yellow-500 blur-[30px]" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;