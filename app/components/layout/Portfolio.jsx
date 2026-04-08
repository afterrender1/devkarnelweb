"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

/* ─── DATA ─── */
const PROJECTS = [
  { id: 0, title: "Prime Supps", subtitle: "Premium Supplements & Gym", category: "E-Commerce", platform: "Custom Code", thumbnail: "https://res.cloudinary.com/dlurrugno/image/upload/v1770205987/supps_vm41cl.png", liveUrl: "https://prime-supps.vercel.app", tags: ["Next.js","Fitness","E-Commerce"], accent: "#ef4444", accentBg: "rgba(239,68,68,0.09)" },
  { id: 1, title: "Magnetik", subtitle: "TikTok Shop Marketing", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/magnetik.png", liveUrl: "https://magnetik.vercel.app/", tags: ["Marketing","Strategy","TikTok"], accent: "#8b5cf6", accentBg: "rgba(139,92,246,0.09)" },
  { id: 2, title: "Darkdrop Coffee", subtitle: "Artisanal Roastery", category: "E-Commerce", platform: "Custom Code", thumbnail: "/images/our-work/coffee.png", liveUrl: "https://darkdrop-coffee.vercel.app/", tags: ["Custom Code","Small Batch","Next.js"], accent: "#b45309", accentBg: "rgba(180,83,9,0.09)" },
  { id: 3, title: "Freelancer30", subtitle: "Freelancing Education Platform", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/freelancer30.png", liveUrl: "https://freelancer30xar.vercel.app/", tags: ["Custom Code","MongoDB","UX"], accent: "#0284c7", accentBg: "rgba(2,132,199,0.09)" },
  { id: 4, title: "TMG Van", subtitle: "Trade Motor Group", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/tmgvan.png", liveUrl: "https://tmgvan.vercel.app", tags: ["Next.js","Stripe","MongoDB"], accent: "#059669", accentBg: "rgba(5,150,105,0.09)" },
  { id: 5, title: "NextTrip", subtitle: "Tour & Travel", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/nextrip.png", liveUrl: "https://nextripxar.vercel.app/", tags: ["Custom Code","Tailwind","UI/UX"], accent: "#0891b2", accentBg: "rgba(8,145,178,0.09)" },
  { id: 7, title: "Mobee Medical", subtitle: "Healthcare Website", category: "Healthcare", platform: "Custom Code", thumbnail: "/images/our-work/mobeemedical.png", liveUrl: "https://mobeemedical.vercel.app", tags: ["Custom Code","Healthcare","UI/UX"], accent: "#10b981", accentBg: "rgba(16,185,129,0.09)" },
  { id: 8, title: "Jave", subtitle: "E-Commerce Platform", category: "E-Commerce", platform: "Custom Code", thumbnail: "/images/our-work/jave.png", liveUrl: "https://javexafterrender.vercel.app", tags: ["Custom Code","Next.js","Stripe"], accent: "#f59e0b", accentBg: "rgba(245,158,11,0.09)" },
  { id: 9, title: "Deigo Hair Studio", subtitle: "Premium Salon", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/deigo.png", liveUrl: "https://deigo.vercel.app", tags: ["Next.js","Salon","UI/UX"], accent: "#ec4899", accentBg: "rgba(236,72,153,0.09)" },
  { id: 10, title: "Render Store", subtitle: "Online Shop", category: "E-Commerce", platform: "Custom Code", thumbnail: "/images/our-work/renderstore.png", liveUrl: "https://renderstore.vercel.app", tags: ["Custom Code","Firebase","Stripe"], accent: "#6366f1", accentBg: "rgba(99,102,241,0.09)" },
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

/* ─── Project Card — lightweight, no scroll animations ─── */
const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Simple fade-in with Intersection Observer (no scroll tracking)
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
      className="relative flex flex-col p-3 bg-white rounded-2xl overflow-hidden border project-card"
      style={{
        opacity: isVisible ? 1 : 0.6,
        transition: "opacity 0.6s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
        boxShadow: hovered ? "0 20px 56px rgba(0,0,0,0.11),0 6px 16px rgba(0,0,0,0.06)" : "0 2px 6px rgba(0,0,0,0.05)",
        borderColor: hovered ? "#e2e2e2" : "#f0f0f0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={project.title}
    >
      {/* Thumbnail */}
      <div className="relative rounded-2xl w-full overflow-hidden bg-gray-50" style={{ aspectRatio: "16/10" }}>
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${project.id + 20}/800/500`; }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-280"
          style={{
            background: "rgba(8,8,12,0.52)",
            backdropFilter: "blur(4px)",
            opacity: hovered ? 1 : 0,
          }}
          aria-hidden={!hovered}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white no-underline font-semibold rounded-full"
            style={{
              background: project.accent,
              padding: "9px 20px",
              fontSize: "12.5px",
              boxShadow: `0 6px 22px ${project.accent}55`,
              transform: hovered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.94)",
              transition: "transform 0.28s ease",
            }}
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title} live site`}
          >
            <ExternalLink size={13} strokeWidth={2.5} aria-hidden="true" />
            View Live Site
          </a>
        </div>

        {/* Platform badge */}
        <div
          className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-white/93 border border-white/50"
          style={{ backdropFilter: "blur(8px)", fontSize: "9.5px", fontWeight: 600, color: "#374151", letterSpacing: "0.04em" }}
        >
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: PLATFORM_COLORS[project.platform] || "#888" }} aria-hidden="true" />
          {project.platform}
        </div>

        {/* ID badge */}
        <div
          className="absolute top-2.5 right-2.5 rounded-lg px-2 py-1"
          style={{ background: "rgba(0,0,0,0.36)", backdropFilter: "blur(4px)", color: "rgba(255,255,255,0.62)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em" }}
          aria-hidden="true"
        >
          #{String(project.id).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-4 pt-3.5 pb-4 sm:px-5 sm:pt-4 sm:pb-5">
        <div className="flex gap-1.5 flex-wrap mb-2.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full"
              style={{ background: project.accentBg, color: project.accent, padding: "2.5px 8px", fontSize: "9.5px", letterSpacing: "0.04em", fontWeight: 600 }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3
          className="font-bold leading-tight mb-1"
          style={{ fontSize: "clamp(15px,2.5vw,17px)", letterSpacing: "-0.018em", color: hovered ? project.accent : "#111827", transition: "color 0.22s ease" }}
        >
          {project.title}
        </h3>

        <p className="text-gray-400 mb-3 leading-relaxed" style={{ fontSize: "12.5px" }}>
          {project.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid #f3f4f6" }}>
          <span className="font-semibold uppercase text-gray-300" style={{ fontSize: "9.5px", letterSpacing: "0.14em" }}>
            {project.category}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-7 h-7 rounded-full no-underline transition-all duration-200"
            style={{ background: hovered ? project.accentBg : "#f9fafb", color: hovered ? project.accent : "#9ca3af" }}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight
              size={14}
              style={{ transform: hovered ? "translate(1px,-1px)" : "none", transition: "transform 0.2s ease" }}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Accent bar — simple CSS transform, GPU-friendly */}
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

/* ─── Filter pill ─── */
const FilterPill = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="filter-pill outline-none cursor-pointer rounded-full border font-medium transition-all duration-200 whitespace-nowrap"
    style={{
      padding: "6px 14px",
      fontSize: "12.5px",
      fontWeight: isActive ? 600 : 500,
      background: isActive ? "#23bcdf" : "#fff",
      color: isActive ? "#fff" : "#6b7280",
      borderColor: isActive ? "#23bcdf" : "#e5e7eb",
      boxShadow: isActive ? "0 4px 14px rgba(35,188,223,0.28)" : "none",
    }}
    aria-pressed={isActive}
  >
    {label}
  </button>
);

/* ─── Main ─── */
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter((p) =>
    activeFilter === "All" ? true : p.platform === activeFilter || p.category === activeFilter
  );

  return (
    <section id="portfolio" aria-label="Portfolio" className={`w-full py-16 sm:py-24 lg:py-32 ${urbanist.className}`}>
      <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <div className="w-5 h-px bg-[#23bcdf]" aria-hidden="true" />
            <span className="text-[#23bcdf] font-semibold uppercase tracking-[0.18em]" style={{ fontSize: "10.5px" }}>
              Our Portfolio
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-2 md:flex-row md:items-end md:justify-between md:gap-6">
            <h2
              className="text-gray-900 font-extrabold leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem,5vw,3.25rem)", letterSpacing: "-0.025em" }}
            >
              Work that{" "}
              <span className="relative inline-block text-[#23bcdf]">
                speaks
                <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 5" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5" stroke="#23bcdf" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              for itself
            </h2>
            <p className="text-gray-400 leading-relaxed md:max-w-65 lg:max-w-74" style={{ fontSize: "13.5px" }}>
              Real projects, real results — across platforms and industries.
            </p>
          </div>

          <p className="font-medium text-gray-300 mt-2.5" style={{ fontSize: "12.5px" }}>
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && <span className="text-[#23bcdf] ml-1">· {activeFilter}</span>}
          </p>

          <div className="mt-6 h-px bg-gray-200" aria-hidden="true" />
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10" role="group" aria-label="Filter projects">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-300">
              <Layers size={38} strokeWidth={1} className="mb-4 opacity-40" aria-hidden="true" />
              <p className="text-sm font-medium">No projects match this filter</p>
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
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-[15px] transition-[box-shadow,transform] duration-200 hover:shadow-lg hover:shadow-teal-200 active:scale-95"
            style={{ background: "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)" }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;