"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

/* ─── GSAP Loader ─── */
const loadGSAP = () =>
    new Promise((res) => {
        if (typeof window === "undefined") return;
        if (window.__gsapLoaded) return res(window.gsap);
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        s.onload = () => {
            const s2 = document.createElement("script");
            s2.src =
                "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
            s2.onload = () => {
                window.gsap.registerPlugin(window.ScrollTrigger);
                window.__gsapLoaded = true;
                res(window.gsap);
            };
            document.head.appendChild(s2);
        };
        document.head.appendChild(s);
    });

/* ─── DATA ─── */
const projects = [
    {
        id: 0,
        title: "Prime Supps",
        subtitle: "Premium Supplements & Gym",
        category: "E-Commerce",
        platform: "Custom Code",
        thumbnail:
            "https://res.cloudinary.com/dlurrugno/image/upload/v1770205987/supps_vm41cl.png",
        liveUrl: "https://prime-supps.vercel.app",
        tags: ["Next.js", "Fitness", "E-Commerce"],
        accent: "#ef4444",
        accentBg: "rgba(239,68,68,0.09)",
    },
    {
        id: 1,
        title: "Magnetik",
        subtitle: "TikTok Shop Marketing",
        category: "Business",
        platform: "Custom Code",
        thumbnail: "/images/our-work/magnetik.png",
        liveUrl: "https://magnetik.vercel.app/",
        tags: ["Marketing", "Strategy", "TikTok"],
        accent: "#8b5cf6",
        accentBg: "rgba(139,92,246,0.09)",
    },
    {
        id: 2,
        title: "Darkdrop Coffee",
        subtitle: "Artisanal Roastery",
        category: "E-Commerce",
        platform: "Custom Code",
        thumbnail: "/images/our-work/coffee.png",
        liveUrl: "https://darkdrop-coffee.vercel.app/",
        tags: ["Custom Code", "Small Batch", "Next.js"],
        accent: "#b45309",
        accentBg: "rgba(180,83,9,0.09)",
    },
    {
        id: 3,
        title: "Freelancer30",
        subtitle: "Freelancing Education Platform",
        category: "Business",
        platform: "Custom Code",
        thumbnail: "/images/our-work/freelancer30.png",
        liveUrl: "https://freelancer30xar.vercel.app/",
        tags: ["Custom Code", "MongoDB", "UX"],
        accent: "#0284c7",
        accentBg: "rgba(2,132,199,0.09)",
    },
    {
        id: 4,
        title: "TMG Van",
        subtitle: "Trade Motor Group",
        category: "Business",
        platform: "Custom Code",
        thumbnail: "/images/our-work/tmgvan.png",
        liveUrl: "https://tmgvan.vercel.app",
        tags: ["Next.js", "Stripe", "MongoDB"],
        accent: "#059669",
        accentBg: "rgba(5,150,105,0.09)",
    },
    {
        id: 5,
        title: "NextTrip",
        subtitle: "Tour & Travel",
        category: "Business",
        platform: "Custom Code",
        thumbnail: "/images/our-work/nextrip.png",
        liveUrl: "https://nextripxar.vercel.app/",
        tags: ["Custom Code", "Tailwind", "UI/UX"],
        accent: "#0891b2",
        accentBg: "rgba(8,145,178,0.09)",
    },
    {
        id: 7,
        title: "Mobee Medical",
        subtitle: "Healthcare Website",
        category: "Healthcare",
        platform: "Custom Code",
        thumbnail: "/images/our-work/mobeemedical.png",
        liveUrl: "https://mobeemedical.vercel.app",
        tags: ["Custom Code", "Healthcare", "UI/UX"],
        accent: "#10b981",
        accentBg: "rgba(16,185,129,0.09)",
    },
    {
        id: 8,
        title: "Jave",
        subtitle: "E-Commerce Platform",
        category: "E-Commerce",
        platform: "Custom Code",
        thumbnail: "/images/our-work/jave.png",
        liveUrl: "https://javexafterrender.vercel.app",
        tags: ["Custom code", "Next.js", "Stripe"],
        accent: "#f59e0b",
        accentBg: "rgba(245,158,11,0.09)",
    },
    {
        id: 9,
        title: "Deigo Hair Studio",
        subtitle: "Premium Salon",
        category: "Business",
        platform: "Custom Code",
        thumbnail: "/images/our-work/deigo.png",
        liveUrl: "https://deigo.vercel.app",
        tags: ["Next.js", "Salon", "UI/UX"],
        accent: "#ec4899",
        accentBg: "rgba(236,72,153,0.09)",
    },
    {
        id: 10,
        title: "Render Store",
        subtitle: "Online Shop",
        category: "E-Commerce",
        platform: "Custom Code",
        thumbnail: "/images/our-work/renderstore.png",
        liveUrl: "https://renderstore.vercel.app",
        tags: ["Custom code", "Firebase", "Stripe"],
        accent: "#6366f1",
        accentBg: "rgba(99,102,241,0.09)",
    },
    {
        id: 11,
        title: "Zero Ice Store",
        subtitle: "Online Shop",
        category: "E-Commerce",
        platform: "WordPress",
        thumbnail: "/images/our-work/zeroice.png",
        liveUrl: "https://zeroicexar.kesug.com/",
        tags: ["Wordpress", "Elementor", "Astra"],
        accent: "#0891b2",
        accentBg: "rgba(8,145,178,0.09)",
    },
];

const FILTERS = [
    { key: "All", label: "All Work" },
    { key: "WordPress", label: "WordPress" },
    { key: "Shopify", label: "Shopify" },
    { key: "Custom Code", label: "Custom Code" },
    { key: "E-Commerce", label: "E-Commerce" },
    { key: "Business", label: "Business" },
    { key: "Healthcare", label: "Healthcare" },
];

const PLATFORM_COLORS = {
    WordPress: "#3858e9",
    Shopify: "#96bf48",
    "Custom Code": "#23bcdf",
};

/* ─── CARD ─── */
const ProjectCard = ({ project }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="project-card group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer"
            style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                boxShadow: hovered
                    ? "0 24px 64px rgba(0,0,0,0.12), 0 6px 18px rgba(0,0,0,0.07)"
                    : "0 2px 6px rgba(0,0,0,0.05)",
                borderColor: hovered ? "#e9e9e9" : "#f0f0f0",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* ── Image ── */}
            <div
                className="relative w-full overflow-hidden bg-gray-50"
                style={{ aspectRatio: "16/10" }}
            >
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                        transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
                        transform: hovered ? "scale(1.07)" : "scale(1)",
                    }}
                    onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${project.id + 20}/800/500`;
                    }}
                />

                {/* Hover overlay */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        background: "rgba(8,8,12,0.54)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white no-underline font-semibold rounded-full"
                        style={{
                            background: project.accent,
                            padding: "10px 22px",
                            fontSize: "13px",
                            letterSpacing: "0.01em",
                            boxShadow: `0 6px 24px ${project.accent}55`,
                            transform: hovered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                            transition: "transform 0.3s ease",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={13} strokeWidth={2.5} />
                        View Live Site
                    </a>
                </div>

                {/* Platform pill */}
                <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{
                        background: "rgba(255,255,255,0.93)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.5)",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#374151",
                        letterSpacing: "0.04em",
                    }}
                >
                    <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: PLATFORM_COLORS[project.platform] || "#888" }}
                    />
                    {project.platform}
                </div>

                {/* ID label */}
                <div
                    className="absolute top-3 right-3 rounded-lg px-2 py-1"
                    style={{
                        background: "rgba(0,0,0,0.38)",
                        backdropFilter: "blur(4px)",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "9.5px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                    }}
                >
                    #{String(project.id).padStart(2, "0")}
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap mb-3">
                    {project.tags.slice(0, 3).map((t) => (
                        <span
                            key={t}
                            className="rounded-full font-medium"
                            style={{
                                background: project.accentBg,
                                color: project.accent,
                                padding: "3px 9px",
                                fontSize: "10px",
                                letterSpacing: "0.04em",
                                fontWeight: 600,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3
                    className="font-bold leading-tight mb-1"
                    style={{
                        fontSize: "17px",
                        letterSpacing: "-0.02em",
                        color: hovered ? project.accent : "#111827",
                        transition: "color 0.25s ease",
                    }}
                >
                    {project.title}
                </h3>

                {/* Subtitle */}
                <p
                    className="text-gray-400 mb-4 leading-relaxed"
                    style={{ fontSize: "13px" }}
                >
                    {project.subtitle}
                </p>

                {/* Footer */}
                <div
                    className="flex items-center justify-between mt-auto pt-3.5"
                    style={{ borderTop: "1px solid #f3f4f6" }}
                >
                    <span
                        className="font-semibold uppercase tracking-widest text-gray-300"
                        style={{ fontSize: "10px", letterSpacing: "0.14em" }}
                    >
                        {project.category}
                    </span>

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full no-underline"
                        style={{
                            background: hovered ? project.accentBg : "#f9fafb",
                            color: hovered ? project.accent : "#9ca3af",
                            transition: "all 0.22s ease",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ArrowUpRight
                            size={15}
                            style={{
                                transform: hovered ? "translate(1px,-1px)" : "none",
                                transition: "transform 0.2s ease",
                            }}
                        />
                    </a>
                </div>
            </div>

            {/* Accent bottom bar */}
            <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                    height: "2.5px",
                    background: project.accent,
                    transformOrigin: "left",
                    transform: hovered ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
            />
        </div>
    );
};

/* ─── MAIN PORTFOLIO ─── */
const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [gsapReady, setGsapReady] = useState(false);
    const gsapRef = useRef(null);
    const headingRef = useRef(null);
    const filterBarRef = useRef(null);
    const gridRef = useRef(null);

    const filtered = projects.filter((p) =>
        activeFilter === "All"
            ? true
            : p.platform === activeFilter || p.category === activeFilter
    );

    useEffect(() => {
        loadGSAP().then((g) => {
            gsapRef.current = g;
            setGsapReady(true);
        });
    }, []);

    useEffect(() => {
        if (!gsapReady || !gsapRef.current) return;
        const gsap = gsapRef.current;
        const tl = gsap.timeline({ delay: 0.05 });
        if (headingRef.current) {
            tl.fromTo(
                headingRef.current.querySelectorAll(".anim-el"),
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.08, duration: 0.65, ease: "power3.out" }
            );
        }
        if (filterBarRef.current) {
            tl.fromTo(
                filterBarRef.current.querySelectorAll(".filter-pill"),
                { y: 12, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.05, duration: 0.45, ease: "power2.out" },
                "-=0.35"
            );
        }
    }, [gsapReady]);

    const animateCards = useCallback(() => {
        if (!gsapRef.current || !gridRef.current) return;
        const cards = gridRef.current.querySelectorAll(".project-card");
        gsapRef.current.fromTo(
            cards,
            { y: 28, opacity: 0, scale: 0.975 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.065,
                duration: 0.52,
                ease: "power3.out",
                clearProps: "transform",
            }
        );
    }, []);

    useEffect(() => {
        if (!gsapReady) return;
        const t = setTimeout(animateCards, 30);
        return () => clearTimeout(t);
    }, [activeFilter, gsapReady, animateCards]);

    useEffect(() => {
        if (!gsapReady) return;
        const t = setTimeout(animateCards, 90);
        return () => clearTimeout(t);
    }, [gsapReady]);

    return (
        <>
            <style>{`
      
        .pf-root * { box-sizing: border-box; }
        .pf-root a { text-decoration: none; }
        .filter-pill 
      `}</style>

            <section
                className={`pf-root w-full py-24 lg:py-32 ${urbanist.className}`}
                style={{ background: "#f8f9fa" }}
            >
                <div className="max-w-400 mx-auto px-6 lg:px-10">

                    {/* ── HEADER ── */}
                    <div ref={headingRef} className="mb-12">

                        {/* Eyebrow */}
                        <div className="anim-el flex items-center gap-2.5 mb-5">
                            <div className="w-5 h-px bg-[#23bcdf]" />
                            <span
                                className="text-[#23bcdf] font-semibold uppercase tracking-[0.2em]"
                                style={{ fontSize: "11px" }}
                            >
                                Our Portfolio
                            </span>
                        </div>

                        {/* Heading + sub */}
                        <div className="anim-el flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-2">
                            <h2
                                className="text-gray-900 font-extrabold leading-[1.1] tracking-tight"
                                style={{
                                    fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                                    letterSpacing: "-0.025em",
                                }}
                            >
                                Work that{" "}
                                <span className="relative inline-block text-[#23bcdf]">
                                    speaks
                                    <svg
                                        className="absolute -bottom-1 left-0 w-full"
                                        height="5"
                                        viewBox="0 0 200 5"
                                        fill="none"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0 3.5 Q25 0 50 3.5 Q75 7 100 3.5 Q125 0 150 3.5 Q175 7 200 3.5"
                                            stroke="#23bcdf"
                                            strokeWidth="1.8"
                                            fill="none"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>{" "}
                                for itself
                            </h2>

                            <p
                                className="text-gray-400 leading-relaxed"
                                style={{ fontSize: "14.5px", maxWidth: "280px", fontWeight: 400 }}
                            >
                                Real projects, real results — across platforms and industries.
                            </p>
                        </div>

                        {/* Count */}
                        <p
                            className="anim-el font-medium text-gray-300 mt-3"
                            style={{ fontSize: "13px" }}
                        >
                            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                            {activeFilter !== "All" && (
                                <span className="text-[#23bcdf] ml-1">· {activeFilter}</span>
                            )}
                        </p>

                        {/* Divider */}
                        <div className="anim-el mt-7 h-px bg-gray-200" />
                    </div>

                    {/* ── FILTERS ── */}
                    <div ref={filterBarRef} className="flex flex-wrap gap-2 mb-10">
                        {FILTERS.map((f) => {
                            const isActive = activeFilter === f.key;
                            return (
                                <button
                                    key={f.key}
                                    className="filter-pill outline-none cursor-pointer rounded-full border font-medium"
                                    style={{
                                        padding: "7px 17px",
                                        fontSize: "13px",
                                        fontWeight: isActive ? 600 : 500,
                                        background: isActive ? "#23bcdf" : "#fff",
                                        color: isActive ? "#fff" : "#6b7280",
                                        borderColor: isActive ? "#23bcdf" : "#e5e7eb",
                                        boxShadow: isActive
                                            ? "0 4px 16px rgba(35,188,223,0.30)"
                                            : "none",
                                        transition: "all 0.22s cubic-bezier(0.25,0.46,0.45,0.94)",
                                        letterSpacing: isActive ? "0.005em" : "0",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.borderColor = "#23bcdf";
                                            e.currentTarget.style.color = "#23bcdf";
                                            e.currentTarget.style.background = "#f0fbfd";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.borderColor = "#e5e7eb";
                                            e.currentTarget.style.color = "#6b7280";
                                            e.currentTarget.style.background = "#fff";
                                        }
                                    }}
                                    onClick={() => setActiveFilter(f.key)}
                                >
                                    {f.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* ── GRID ── */}
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
                    >
                        {filtered.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center py-24 text-gray-300">
                                <Layers size={40} strokeWidth={1} className="mb-4 opacity-40" />
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

            

                    {/* ── CTA ── */}
                    <div className="flex justify-center mt-12">
                         <button
                        className="group flex items-center justify-center gap-2
                                   w-full sm:w-auto
                                   px-6 sm:px-7 py-3 sm:py-3.5
                                   rounded-full text-white font-semibold
                                   text-sm sm:text-[15px]
                                   transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
                        style={{ backgroundColor: '#084948' }}
                    >
                        Start Your Project 
                        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Portfolio;