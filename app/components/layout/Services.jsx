"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { Code2, LayoutTemplate, Smartphone, ShieldCheck, Globe, ArrowUpRight } from "lucide-react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SERVICES = [
  {
    title: "App Development",
    desc: "High-performance mobile and web applications built with modern technologies for scalability and speed.",
    icon: Smartphone,
    image: "/appdev.png",
    tag: "Mobile & Web Apps",
    accent: "#0f9d58",
  },
  {
    title: "Web Development",
    desc: "Custom, scalable websites and web apps using Next.js, MERN stack, and modern frameworks.",
    icon: Globe,
    image: "/webdev.png",
    tag: "Frontend & Backend",
    accent: "#1a73e8",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered designs focused on seamless experience, modern aesthetics, and high conversion.",
    icon: LayoutTemplate,
    image: "/uiux.png",
    tag: "Design & Experience",
    accent: "#f4511e",
  },
  {
    title: "SEO Optimization",
    desc: "Strategic SEO solutions to boost rankings, increase visibility, and drive organic traffic.",
    icon: ShieldCheck,
    image: "/seo1.png",
    tag: "Growth & Traffic",
    accent: "#e37400",
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer w-full service-card"
      style={{
        boxShadow: hovered
          ? "0 8px 32px rgba(60,64,67,0.15),0 2px 8px rgba(60,64,67,0.08)"
          : "0 1px 3px rgba(60,64,67,0.12),0 1px 1px rgba(60,64,67,0.01)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        willChange: "transform",
      }}
      aria-label={service.title}
    >
      <div className="relative w-full overflow-hidden bg-slate-50" style={{ aspectRatio: "16/10" }}>
        <Image
          src={service.image}
          alt={`${service.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-400"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-250"
          style={{ backgroundColor: service.accent, opacity: hovered ? 1 : 0 }}
          aria-hidden="true"
        />
        <div className="absolute top-3 left-3">
          <span
            className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
            style={{ backgroundColor: `${service.accent}18`, color: service.accent }}
          >
            {service.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300"
          style={{ backgroundColor: hovered ? `${service.accent}14` : "#f8fafc" }}
          aria-hidden="true"
        >
          <Icon size={18} style={{ color: hovered ? service.accent : "#64748b", transition: "color 0.3s" }} />
        </div>

        <h3
          className="font-semibold mb-1.5 sm:mb-2 leading-snug transition-colors duration-300"
          style={{ fontSize: "clamp(14px,2vw,17px)", color: hovered ? service.accent : "#202124" }}
        >
          {service.title}
        </h3>

        <p className="text-[#5f6368] leading-relaxed flex-1" style={{ fontSize: "clamp(12.5px,1.5vw,14px)" }}>
          {service.desc}
        </p>

        <div className="mt-4 sm:mt-5 flex items-center gap-1.5" aria-hidden="true">
          <a href="#contact" className="font-medium transition-colors duration-300" style={{ fontSize: "clamp(12px,1.4vw,14px)", color: service.accent }}>
            Get Started
          </a>
          <ArrowUpRight
            size={15}
            style={{
              color: service.accent,
              transform: hovered ? "translate(2px,-2px)" : "none",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      </div>
    </article>
  );
};

const ShimmerButton = ({ children }) => (
  <div className="relative group w-full sm:w-auto">
    <div className="relative w-full sm:w-72 h-13 sm:h-14 overflow-hidden rounded-xl bg-[#00ADB5] z-10">
      {/* Shimmer — transform only */}
      <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[120%] ease-in transition-transform duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12 pointer-events-none" />
      <div className="absolute inset-0.5 rounded-xl overflow-hidden flex items-center justify-center">
        <button
          style={{ background: "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)" }}
          className="cursor-pointer font-semibold text-base sm:text-lg h-full w-full px-6 sm:px-16 py-3 rounded-xl text-white"
        >
          {children}
        </button>
      </div>
     
    </div>
  </div>
);

const Services = () => (
  <section id="services" aria-label="Our services" className={`py-14 sm:py-20 lg:py-24 ${urbanist.className}`}>
    <div className="w-full max-w-300 mx-auto px-4 sm:px-6 lg:px-8">

      <header className="mb-8 sm:mb-11 lg:mb-14">
        <p className="text-[11px] sm:text-sm font-semibold text-[#23bcdf] tracking-[0.18em] uppercase mb-2 sm:mb-3">
          What We Do
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4">
          <h2
            className="font-bold text-[#202124] leading-tight"
            style={{ fontSize: "clamp(1.5rem,4.5vw,2.75rem)" }}
          >
            Services built for{" "}
            <span className="text-[#23bcdf]">modern businesses</span>
          </h2>
          <p className="text-[#5f6368] leading-relaxed md:max-w-xs lg:max-w-sm" style={{ fontSize: "clamp(13px,1.8vw,16px)" }}>
            End-to-end digital solutions — from design to deployment — that help you grow faster and smarter.
          </p>
        </div>
        <div className="mt-6 sm:mt-8 h-px bg-[#e8eaed]" aria-hidden="true" />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
        {SERVICES.map((service, index) => (
          <div key={index} className={index === 4 ? "lg:col-start-2" : ""}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-14 flex justify-center">
        <ShimmerButton>View all services</ShimmerButton>
      </div>

    </div>
  </section>
);

export default Services;