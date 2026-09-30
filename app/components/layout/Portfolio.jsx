"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { urbanist } from "@/app/fonts";

const PROJECTS = [
  { id: 15, title: "Skyline Real Estate", subtitle: "Real Estate Agency", category: "Business", platform: "Custom Code", thumbnail: "https://res.cloudinary.com/dlurrugno/image/upload/v1790781351/ec171a92-bb89-42ab-8e14-fa4c715f81d1.png", liveUrl: "https://skyline-real-estate-nine.vercel.app/", tags: ["Next js","Lenis","Gsap"], isNew: true },
  { id: 0, title: "Prime Supps", subtitle: "Premium Supplements & Gym", category: "E-Commerce", platform: "Custom Code", thumbnail: "https://res.cloudinary.com/dlurrugno/image/upload/v1770205987/supps_vm41cl.png", liveUrl: "https://prime-supps.vercel.app", tags: ["Next.js","Fitness","E-Commerce"] },
  { id: 1, title: "Magnetik", subtitle: "TikTok Shop Marketing", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/magnetik.png", liveUrl: "https://magnetik.vercel.app/", tags: ["Marketing","Strategy","TikTok"] },
  { id: 2, title: "Darkdrop Coffee", subtitle: "Artisanal Roastery", category: "E-Commerce", platform: "Shopify", thumbnail: "/images/our-work/coffee.png", liveUrl: "https://darkdrop-coffee.vercel.app/", tags: ["Shopify","Small Batch","Next.js"] },
  { id: 3, title: "Freelancer30", subtitle: "Freelancing Education Platform", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/freelancer30.png", liveUrl: "https://freelancer30xar.vercel.app/", tags: ["Custom Code","MongoDB","UX"] },
  { id: 4, title: "TMG Van", subtitle: "Trade Motor Group", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/tmgvan1.png", liveUrl: "https://tmgvan.vercel.app", tags: ["Next.js","Stripe","MongoDB"] },
  { id: 5, title: "NextTrip", subtitle: "Tour & Travel", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/nextrip.png", liveUrl: "https://nextripxar.vercel.app/", tags: ["Custom Code","Tailwind","UI/UX"] },
  { id: 7, title: "Mobee Medical", subtitle: "Healthcare Website", category: "Healthcare", platform: "Custom Code", thumbnail: "/images/our-work/mobeemedical.png", liveUrl: "https://mobeemedical.vercel.app", tags: ["Custom Code","Healthcare","UI/UX"] },
  { id: 8, title: "Jave", subtitle: "E-Commerce Platform", category: "E-Commerce", platform: "Shopify", thumbnail: "/images/our-work/jave.png", liveUrl: "https://javexafterrender.vercel.app", tags: ["Shopify","Next.js","Stripe"] },
  { id: 9, title: "Deigo Hair Studio", subtitle: "Premium Salon", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/deigo.png", liveUrl: "https://deigo.vercel.app", tags: ["Next.js","Salon","UI/UX"] },
  { id: 10, title: "Render Store", subtitle: "Online Shop", category: "E-Commerce", platform: "Shopify", thumbnail: "/images/our-work/renderstore.png", liveUrl: "https://renderstore.vercel.app", tags: ["Shopify","Firebase","Stripe"] },
  { id: 11, title: "Zero Ice Store", subtitle: "Online Shop", category: "E-Commerce", platform: "WordPress", thumbnail: "/images/our-work/zeroice.png", liveUrl: "https://zeroicexar.kesug.com/", tags: ["WordPress","Elementor","Astra"] },
  { id: 12, title: "WAVEBOX SaaS", subtitle: "SaaS Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/waveboxsaas.png", liveUrl: "https://indigo-dotterel-636649.hostingersite.com/", tags: ["WordPress","Elementor","Astra"] },
  { id: 13, title: "Outdoor Adventure Car Wash", subtitle: "Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/outdoor.png", liveUrl: "https://steelblue-otter-789796.hostingersite.com/", tags: ["WordPress","Elementor","Astra"] },
  { id: 14, title: "Language Learning", subtitle: "Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/langl.png", liveUrl: "https://darkseagreen-ferret-910390.hostingersite.com/", tags: ["WordPress","Elementor","Astra"] },
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
  "Custom Code": "#2de8b0",
};

const ProjectCard = ({ project }) => {
  return (
    <article
      className="group relative flex flex-col h-full p-2.5 sm:p-3 rounded-2xl overflow-hidden bg-white/3 border border-white/10 transition-all duration-300 hover:border-[#2de8b0]/40 hover:bg-white/5 hover:shadow-[0_20px_50px_rgba(45,232,176,0.12)]"
      aria-label={project.title}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block rounded-xl w-full overflow-hidden bg-black/40 aspect-16/10"
        aria-label={`View ${project.title} live site`}
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${project.id + 20}/800/500`; }}
        />

        {/* Hover overlay (pointer devices only — on touch the whole image is a tap target) */}
        <div
          className="absolute inset-0 hidden sm:flex items-center justify-center bg-[#010504]/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <span className="flex items-center gap-2 rounded-full bg-[#2de8b0] text-black font-bold text-[13px] px-5 py-2.5 shadow-[0_8px_25px_rgba(45,232,176,0.4)] translate-y-2.5 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-transform duration-300">
            <ExternalLink size={14} strokeWidth={2.5} />
            View Live Site
          </span>
        </div>

        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-black/70 border border-white/20 text-white text-[10px] font-semibold backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: PLATFORM_COLORS[project.platform] || "#2de8b0" }} aria-hidden="true" />
          {project.platform}
        </div>

        {project.isNew ? (
          <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-[#2de8b0] text-black text-[10px] font-extrabold uppercase tracking-widest shadow-[0_4px_16px_rgba(45,232,176,0.45)]">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" aria-hidden="true" />
            New
          </div>
        ) : (
          <div
            className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 rounded-lg px-2 py-1 bg-black/60 border border-white/10 text-white/70 text-[9px] font-bold tracking-widest backdrop-blur-sm"
            aria-hidden="true"
          >
            #{String(project.id).padStart(2, "0")}
          </div>
        )}
      </a>

      <div className="flex flex-col flex-1 px-2 pt-3.5 pb-2 xs:px-3 sm:px-4 sm:pt-4 sm:pb-3">
        <div className="flex gap-1.5 flex-wrap mb-2.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 text-[#2de8b0] px-2 py-0.5 text-[10px] font-semibold tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-bold leading-tight mb-1 text-white text-base sm:text-lg tracking-tight transition-colors duration-300 group-hover:text-[#2de8b0]">
          {project.title}
        </h3>

        <p className="text-white/60 mb-4 leading-relaxed text-xs xs:text-[13px]">
          {project.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <span className="font-bold uppercase tracking-wider text-[#2de8b0]/90 text-[10px]">
            {project.category}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/10 bg-white/5 text-white/60 no-underline transition-all duration-200 group-hover:bg-[#2de8b0]/10 group-hover:border-[#2de8b0]/30 group-hover:text-[#2de8b0]"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#2de8b0] to-[#0F7C6E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350 ease-out"
        aria-hidden="true"
      />
    </article>
  );
};

const FilterPill = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`shrink-0 outline-none cursor-pointer rounded-full border font-semibold transition-all duration-200 whitespace-nowrap px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-[13px] focus-visible:ring-2 focus-visible:ring-[#2de8b0]/60 ${
      isActive
        ? "bg-[#2de8b0] text-black border-[#2de8b0] shadow-[0_4px_20px_rgba(45,232,176,0.3)]"
        : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
    }`}
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
    <section id="portfolio" aria-label="Portfolio" className={`relative min-h-screen w-full pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-[#010504] text-white ${urbanist.className}`}>
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

      <div className="w-full max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 shadow-[0_0_15px_rgba(45,232,176,0.1)] text-[#2de8b0] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2de8b0] animate-pulse" />
            Our Showcase Portfolio
          </div>

          <h1 className="text-white font-extrabold leading-[1.15] text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-3 sm:mb-4">
            Crafting Digital Products That{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/70">
              Drive Real Results
            </span>
          </h1>

          <p className="text-white/70 text-xs xs:text-sm sm:text-lg leading-relaxed px-2">
            Explore our curated showcase of live web platforms, e-commerce stores, custom SaaS applications, and mobile solutions.
          </p>

          <div className="mt-3 sm:mt-4 text-[11px] sm:text-xs font-semibold text-[#2de8b0]/90 tracking-wide" aria-live="polite">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && <span className="text-white/60 ml-1">· {activeFilter}</span>}
          </div>
        </header>

        {/* Filters — swipeable row on mobile, wrapped & centered from sm up */}
        <div
          className="flex gap-2 overflow-x-auto no-scrollbar -mx-3.5 px-3.5 xs:-mx-4 xs:px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible mb-8 sm:mb-12"
          role="group"
          aria-label="Filter projects"
        >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 sm:py-20 text-white/40">
              <Layers size={42} strokeWidth={1} className="mb-4 opacity-40 text-[#2de8b0]" aria-hidden="true" />
              <p className="text-sm sm:text-base font-medium">No projects match this filter</p>
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
        <div className="flex justify-center mt-10 sm:mt-16 max-w-sm sm:max-w-none mx-auto">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
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
