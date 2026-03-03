"use client";
import React, { useState } from 'react';
import { Urbanist } from 'next/font/google';
import { Code2, LayoutTemplate, Smartphone, Megaphone, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';

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

const ServiceCard = ({ service, index }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = service.icon;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer"
            style={{
                boxShadow: hovered
                    ? '0 8px 32px rgba(60,64,67,0.15), 0 2px 8px rgba(60,64,67,0.08)'
                    : '0 1px 3px rgba(60,64,67,0.12), 0 1px 2px rgba(60,64,67,0.08)',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
        >
            {/* Image Area */}
            <div className="relative w-full h-44 overflow-hidden bg-slate-50">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{
                        transition: 'transform 0.4s ease',
                        transform: hovered ? 'scale(1.04)' : 'scale(1)',
                    }}
                />
                {/* Subtle top accent bar */}
                <div
                    className="absolute top-0 left-0 right-0 h-0.75"
                    style={{ backgroundColor: service.accent, opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease' }}
                />
                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                    <span
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                        style={{
                            backgroundColor: `${service.accent}18`,
                            color: service.accent,
                        }}
                    >
                        {service.tag}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{ backgroundColor: hovered ? `${service.accent}14` : '#f8fafc' }}
                >
                    <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: hovered ? service.accent : '#64748b' }}
                    />
                </div>

                {/* Title */}
                <h3
                    className="text-[17px] font-semibold mb-2 transition-colors duration-300"
                    style={{ color: hovered ? service.accent : '#202124' }}
                >
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5f6368] leading-relaxed flex-1">
                    {service.desc}
                </p>

                {/* Footer link */}
                <div className="mt-5 flex items-center gap-1.5">
                    <span
                        className="text-sm font-medium transition-colors duration-300"
                        style={{ color: service.accent }}
                    >
                        Learn more
                    </span>
                    <ArrowUpRight
                        className="w-4 h-4 transition-all duration-300"
                        style={{
                            color: service.accent,
                            transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className={`py-24 bg-[#f8f9fa] ${urbanist.className}`}>
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-14">
                    {/* Eyebrow */}
                    <p className="text-sm font-semibold text-[#1a73e8] tracking-widest uppercase mb-3">
                        What We Do
                    </p>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#202124] leading-tight max-w-lg">
                            Services built for{' '}
                            <span className="text-[#1a73e8]">modern businesses</span>
                        </h2>
                        <p className="text-[#5f6368] text-base max-w-sm leading-relaxed">
                            End-to-end digital solutions — from design to deployment — that help you grow faster and smarter.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="mt-8 h-px bg-[#e8eaed]" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 flex justify-center">
                    <button
                        className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-95"
                        style={{ backgroundColor: '#1a73e8' }}
                    >
                        View all services
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Services;