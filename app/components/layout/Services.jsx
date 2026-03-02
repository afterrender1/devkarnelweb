"use client";
import React, { useRef } from 'react';
import { Urbanist } from 'next/font/google';
import Image from 'next/image'; // Import Next.js Image component
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Code2, LayoutTemplate, Smartphone, Megaphone, Globe, ShieldCheck } from 'lucide-react';

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const services = [
    {
        title: "WordPress Development",
        desc: "Custom themes and robust e-commerce solutions built on the world's most popular CMS.",
        icon: <Globe className="w-6 h-6 text-[#23bcdf]" />,
        image: "/wp.png"
    },
    {
        title: "Node.js Solutions",
        desc: "Scalable, real-time backend architectures and API development for high-traffic apps.",
        icon: <Code2 className="w-6 h-6 text-[#23bcdf]" />,
        image: "/node.png"
    },
  
    {
        title: "Landing Page Design",
        desc: "High-converting, performance-optimized landing pages designed to drive leads.",
        icon: <LayoutTemplate className="w-6 h-6 text-[#23bcdf]" />,
        image: "/lp.png"
    },
      {
        title: "Shopify E-commerce",
        desc: "Specialized online store setups, Liquid customization, and seamless app integrations.",
        icon: <Smartphone className="w-6 h-6 text-[#23bcdf]" />,
        image: "/shopify.png"
    },
    {
        title: "SEO Optimization",
        desc: "Data-driven strategies to dominate search rankings and increase organic traffic.",
        icon: <ShieldCheck className="w-6 h-6 text-[#23bcdf]" />,
        image: "/seo.png"
    },

];
const Services = () => {



    return (
        <section
            className={`py-24 bg-[#f8fafc] overflow-hidden ${urbanist.className}`}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="services-title text-3xl md:text-5xl font-bold text-[#334155]">
                        Our <span className="text-[#23bcdf]">Specialized</span> Services
                    </h2>
                    <p className="services-title text-slate-500 max-w-2xl mx-auto text-lg">
                        Empowering your business with cutting-edge technology and world-class design solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative p-[1.5px] rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* GRADIENT BORDER EFFECT */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-[#3b82f6] via-[#20b2aa] to-[#ff8c00] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Content Wrapper */}
                            <div className="relative h-full bg-white rounded-[calc(1rem-1px)] overflow-hidden z-10 flex flex-col">

                                {/* Image Space */}
                                <div className="relative w-full h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 "
                                    />
                                </div>

                                {/* Text Content Area */}
                                <div className="p-8">
                                    <div className="mb-4 inline-block p-2.5 bg-slate-50 rounded-lg group-hover:bg-[#23bcdf]/10 transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#334155] mb-3 transition-colors group-hover:text-[#23bcdf]">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;