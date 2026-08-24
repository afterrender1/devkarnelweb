"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { urbanist } from "@/app/fonts";

const PROJECTS = [
  { id: 0, title: "Prime Supps", subtitle: "Premium Supplements & Gym", category: "E-Commerce", platform: "Custom Code", thumbnail: "https://res.cloudinary.com/dlurrugno/image/upload/v1770205987/supps_vm41cl.png", liveUrl: "https://prime-supps.vercel.app", tags: ["Next.js","Fitness","E-Commerce"], accent: "#ef4444", accentBg: "rgba(239,68,68,0.09)" },
  { id: 1, title: "Magnetik", subtitle: "TikTok Shop Marketing", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/magnetik.png", liveUrl: "https://magnetik.vercel.app/", tags: ["Marketing","Strategy","TikTok"], accent: "#8b5cf6", accentBg: "rgba(139,92,246,0.09)" },
  { id: 2, title: "Darkdrop Coffee", subtitle: "Artisanal Roastery", category: "E-Commerce", platform: "Shopify", thumbnail: "/images/our-work/coffee.png", liveUrl: "https://darkdrop-coffee.vercel.app/", tags: ["Shopify","Small Batch","Next.js"], accent: "#b45309", accentBg: "rgba(180,83,9,0.09)" },
  { id: 3, title: "Freelancer30", subtitle: "Freelancing Education Platform", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/freelancer30.png", liveUrl: "https://freelancer30xar.vercel.app/", tags: ["Custom Code","MongoDB","UX"], accent: "#0284c7", accentBg: "rgba(2,132,199,0.09)" },
  { id: 4, title: "TMG Van", subtitle: "Trade Motor Group", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/tmgvan1.png", liveUrl: "https://tmgvan.vercel.app", tags: ["Next.js","Stripe","MongoDB"], accent: "#059669", accentBg: "rgba(5,150,105,0.09)" },
  { id: 5, title: "NextTrip", subtitle: "Tour & Travel", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/nextrip.png", liveUrl: "https://nextripxar.vercel.app/", tags: ["Custom Code","Tailwind","UI/UX"], accent: "#0891b2", accentBg: "rgba(8,145,178,0.09)" },
  { id: 7, title: "Mobee Medical", subtitle: "Healthcare Website", category: "Healthcare", platform: "Custom Code", thumbnail: "/images/our-work/mobeemedical.png", liveUrl: "https://mobeemedical.vercel.app", tags: ["Custom Code","Healthcare","UI/UX"], accent: "#10b981", accentBg: "rgba(16,185,129,0.09)" },
  { id: 8, title: "Jave", subtitle: "E-Commerce Platform", category: "E-Commerce", platform: "Shopify", thumbnail: "/images/our-work/jave.png", liveUrl: "https://javexafterrender.vercel.app", tags: ["Shopify","Next.js","Stripe"], accent: "#f59e0b", accentBg: "rgba(245,158,11,0.09)" },
  { id: 9, title: "Deigo Hair Studio", subtitle: "Premium Salon", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/deigo.png", liveUrl: "https://deigo.vercel.app", tags: ["Next.js","Salon","UI/UX"], accent: "#ec4899", accentBg: "rgba(236,72,153,0.09)" },
  { id: 10, title: "Render Store", subtitle: "Online Shop", category: "E-Commerce", platform: "Shopify", thumbnail: "/images/our-work/renderstore.png", liveUrl: "https://renderstore.vercel.app", tags: ["Shopify","Firebase","Stripe"], accent: "#6366f1", accentBg: "rgba(99,102,241,0.09)" },
  { id: 11, title: "Zero Ice Store", subtitle: "Online Shop", category: "E-Commerce", platform: "WordPress", thumbnail: "/images/our-work/zeroice.png", liveUrl: "https://zeroicexar.kesug.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2", accentBg: "rgba(8,145,178,0.09)" },
  { id: 12, title: "WAVEBOX SaaS", subtitle: "SaaS Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/waveboxsaas.png", liveUrl: "https://indigo-dotterel-636649.hostingersite.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2", accentBg: "rgba(8,145,178,0.09)" },
  { id: 13, title: "Outdoor Adventure Car Wash", subtitle: "Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/outdoor.png", liveUrl: "https://steelblue-otter-789796.hostingersite.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2", accentBg: "rgba(8,145,178,0.09)" },
  { id: 14, title: "Language Learning", subtitle: "Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/langl.png", liveUrl: "https://darkseagreen-ferret-910390.hostingersite.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2", accentBg: "rgba(8,145,178,0.09)" },
];

const FILTERS = [
  { key: "All",         label: "All Work" },
  { key: "WordPress",   label: "WordPress" },
  { key: "Shopify",     label: "Shopify" },
  { key: "Custom Code", label: "Custom Code" },
  { key: "E-Commerce",  label: "E-Commerce" },
  { key: "Business",    label: "Business" },
  { key: "Healthcare",  label: "Healthcare" },
];

const PLATFORM_COLORS = {
  WordPress: "#3858e9",
  Shopify: "#96bf48",
  "Custom Code": "#23bcdf",
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="relative flex flex-col p-3 rounded-2xl overflow-hidden bg-white/3 border border-white/10 transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/5 group project-card"
      style={{
        opacity: isVisible ? 1 : 0.6,
        boxShadow: hovered ? "0 20px 50px rgba(16,185,129,0.15)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={project.title}
    >
      <div className="relative rounded-xl w-full overflow-hidden bg-black/40" style={{ aspectRatio: "16/10" }}>
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${project.id + 20}/800/500`; }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-280"
          style={{
            background: "rgba(9,13,22,0.7)",
            backdropFilter: "blur(6px)",
            opacity: hovered ? 1 : 0,
          }}
          aria-hidden={!hovered}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white no-underline font-semibold rounded-full shadow-lg"
            style={{
              background: project.accent,
              padding: "10px 22px",
              fontSize: "13px",
              boxShadow: `0 8px 25px ${project.accent}66`,
              transform: hovered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.94)",
              transition: "transform 0.28s ease",
            }}
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title} live site`}
          >
            <ExternalLink size={14} strokeWidth={2.5} aria-hidden="true" />
            View Live Site
          </a>
        </div>

        <div
          className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-black/70 border border-white/20 text-white"
          style={{ backdropFilter: "blur(8px)", fontSize: "10px", fontWeight: 600 }}
        >
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: PLATFORM_COLORS[project.platform] || "#2de8b0" }} aria-hidden="true" />
          {project.platform}
        </div>

        <div
          className="absolute top-2.5 right-2.5 rounded-lg px-2 py-1 bg-black/60 border border-white/10 text-white/70"
          style={{ backdropFilter: "blur(4px)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em" }}
          aria-hidden="true"
        >
          #{String(project.id).padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-col flex-1 px-3.5 pt-4 pb-3 sm:px-4 sm:pt-4 sm:pb-4">
        <div className="flex gap-1.5 flex-wrap mb-2.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10"
              style={{ background: project.accentBg, color: project.accent, padding: "2.5px 8px", fontSize: "10px", letterSpacing: "0.04em", fontWeight: 600 }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3
          className="font-bold leading-tight mb-1 text-white"
          style={{ fontSize: "clamp(16px,2.5vw,18px)", letterSpacing: "-0.018em" }}
        >
          {project.title}
        </h3>

        <p className="text-white/60 mb-4 leading-relaxed" style={{ fontSize: "13px" }}>
          {project.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <span className="font-bold uppercase tracking-wider text-emerald-400" style={{ fontSize: "10px" }}>
            {project.category}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 no-underline transition-all duration-200"
            style={{ background: hovered ? project.accentBg : "rgba(255,255,255,0.05)", color: hovered ? project.accent : "#9ca3af" }}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight
              size={15}
              style={{ transform: hovered ? "translate(1px,-1px)" : "none", transition: "transform 0.2s ease" }}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "2.5px",
          background: project.accent,
          transformOrigin: "left",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
        aria-hidden="true"
      />
    </article>
  );
};

const FilterPill = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="filter-pill outline-none cursor-pointer rounded-full border font-semibold transition-all duration-200 whitespace-nowrap"
    style={{
      padding: "7px 18px",
      fontSize: "13px",
      background: isActive ? "#2de8b0" : "rgba(255,255,255,0.05)",
      color: isActive ? "#000" : "rgba(255,255,255,0.7)",
      borderColor: isActive ? "#2de8b0" : "rgba(255,255,255,0.1)",
      boxShadow: isActive ? "0 4px 20px rgba(45,232,176,0.3)" : "none",
    }}
    aria-pressed={isActive}
  >
    {label}
  </button>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter((p) =>
    activeFilter === "All" ? true : p.platform === activeFilter || p.category === activeFilter
  );

  return (
    <section id="portfolio" aria-label="Portfolio" className={`relative min-h-screen w-full pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-36 overflow-hidden bg-[#010504] text-white ${urbanist.className}`}>
      {/* Hero Matching Background Gradients */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 70%,  rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, transparent 50%),
            radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%),
            radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%,rgba(0,0,0,0.3) 30%, transparent 55%),
            radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%),
            linear-gradient(180deg,#24E8B2 0%,#1BC497 5%,#0F7C6E 40%,#0A4A42 60%,#062B24 80%,#010504 100%)
          `,
        }}
      />
      <div className="absolute bg-black inset-0 w-full h-full opacity-40 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-5 pointer-events-none"
        style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(1,5,4,0.6) 100%)" }}
      />
      <div
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(45,232,176,0.1) 0%,transparent 70%)" }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 50%,rgba(45,232,176,0.05) 0%,transparent 60%)" }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <header className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#2de8b0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2de8b0] animate-pulse" />
            Our Showcase Portfolio
          </div>

          <h1
            className="text-white font-extrabold leading-[1.15] text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-4"
          >
            Crafting Digital Products That{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/70">
              Drive Real Results
            </span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Explore our curated showcase of live web platforms, e-commerce stores, custom SaaS applications, and mobile solutions.
          </p>

          <div className="mt-4 text-xs font-semibold text-emerald-400/90 tracking-wide">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && <span className="text-white/60 ml-1">· {activeFilter}</span>}
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <FilterPill
              key={f.key}
              label={f.label}
              isActive={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-white/40">
              <Layers size={42} strokeWidth={1} className="mb-4 opacity-40 text-emerald-400" aria-hidden="true" />
              <p className="text-base font-medium">No projects match this filter</p>
            </div>
          ) : (
            filtered.map((project) => (
              <ProjectCard
                key={`${activeFilter}-${project.id}`}
                project={project}
              />
            ))
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;