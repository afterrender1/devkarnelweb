"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { urbanist } from "../fonts";
import {
  Palette,
  Layout,
  ShoppingBag,
  Sparkles,
  Smartphone,
  TrendingUp,
  Share2,
  Store,
  Tag,
  ShoppingBasket,
  Video,
  Box,
  Globe,
  Code,
  Cpu,
  Activity,
  Gift,
  Zap,
  Shirt,
} from "lucide-react";

// --- Icons ---
const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SolutionsIcon = ({ className = "w-5 h-5 text-emerald-400" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const CaseStudiesIcon = ({ className = "w-5 h-5 text-white/70" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
  </svg>
);

const ContactIcon = ({ className = "w-5 h-5 text-white/70" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const RocketIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55L4.5 16.5z" />
    <path d="M12 15l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

// --- Config ---
const ecommerceSubmenu = [
  {
    label: "Shopify Automation",
    href: "/services/e-commerce/shopify-automation",
    icon: Store,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    label: "Ebay Automation",
    href: "/services/e-commerce/ebay-automation",
    icon: Tag,
    color: "text-blue-600 bg-blue-50",
  },
  {
    label: "Walmart Automation",
    href: "/services/e-commerce/walmart-automation",
    icon: ShoppingBasket,
    color: "text-amber-600 bg-amber-50",
  },
  {
    label: "TikTok Shop Automation",
    href: "/services/e-commerce/tiktok-shop-automation",
    icon: Video,
    color: "text-pink-600 bg-pink-50",
  },
  {
    label: "Temu Automation",
    href: "/services/e-commerce/temu-automation",
    icon: Box,
    color: "text-orange-600 bg-orange-50",
  },
  {
    label: "Shopee Marketplace Growth Service",
    href: "/services/e-commerce/shopee-growth",
    icon: Globe,
    color: "text-teal-600 bg-teal-50",
  },
  {
    label: "WooCommerce Store Development & Management",
    href: "/services/e-commerce/woocommerce-development",
    icon: Code,
    color: "text-purple-600 bg-purple-50",
  },
  {
    label: "Penties Automation",
    href: "/services/e-commerce/penties-automation",
    icon: Cpu,
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    label: "Telehealth Automation",
    href: "/services/e-commerce/telehealth-automation",
    icon: Activity,
    color: "text-red-600 bg-red-50",
  },
  {
    label: "Etsy Shop Automation",
    href: "/services/e-commerce/etsy-automation",
    icon: Gift,
    color: "text-amber-700 bg-amber-50",
  },
  {
    label: "Amazon Zore Setup & Growth Services",
    href: "/services/e-commerce/amazon-zore-setup",
    icon: Zap,
    color: "text-yellow-600 bg-yellow-50",
  },
  {
    label: "Shopify Merchandies",
    href: "/services/e-commerce/shopify-merchandise",
    icon: Shirt,
    color: "text-sky-600 bg-sky-50",
  },
];

const navLinks = [
  {
    label: "Solutions",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
        icon: Palette,
        color: "text-purple-600 bg-purple-50",
      },
      {
        label: "Web Design",
        href: "/services/website-development",
        icon: Layout,
        color: "text-blue-600 bg-blue-50",
      },
      {
        label: "E-commerce",
        href: "/services/e-commerce",
        icon: ShoppingBag,
        color: "text-emerald-600 bg-emerald-50",
        subItems: ecommerceSubmenu,
      },
      {
        label: "Branding",
        href: "/services/branding",
        icon: Sparkles,
        color: "text-amber-600 bg-amber-50",
      },
      {
        label: "Mobile App",
        href: "/services/mobile-app-development",
        icon: Smartphone,
        color: "text-indigo-600 bg-indigo-50",
      },
      {
        label: "SEO",
        href: "/services/seo-optimization",
        icon: TrendingUp,
        color: "text-teal-600 bg-teal-50",
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
        icon: Share2,
        color: "text-rose-600 bg-rose-50",
      },
    ],
  },
  { label: "Portfolio", hasDropdown: false, href: "/portfolio" },
  { label: "Contact", hasDropdown: false, href: "#contact" },
];

const iconActions = [
  { icon: <SearchIcon />, label: "Search" },
  { icon: <MailIcon />, label: "Mail" },
];

export default function Navbar() {
  const router = useRouter();
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const iconsRef = useRef(null);
  const ctaRef = useRef(null);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);

  // --- Navigation Logic ---
  const handleNavClick = (href, e) => {
    // Close menus regardless of link type
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
    // If it doesn't start with #, Next.js <Link> handles the route transition
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setHoveredSubmenu(null);
    }, 350);
  };

  const handleSubmenuEnter = (label) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    setIsDropdownOpen(true);
    setHoveredSubmenu(label);
  };

  const handleSubmenuLeaveWithDelay = () => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredSubmenu(null);
    }, 450);
  };

  // --- Animations ---
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" },
      );
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        display: "block",
      });
      gsap.to(sidebarRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none";
        },
      });
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [logoRef.current, linksRef.current, iconsRef.current, ctaRef.current],
        { opacity: 0, y: -12 },
      );

      const tl = gsap.timeline();
      tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .to(linksRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
        .to(iconsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.4);

      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (navRef.current) {
          if (scrollY > 10) {
            navRef.current.style.backgroundColor = "transparent";
            navRef.current.style.backdropFilter = "blur(32px)";
            navRef.current.style.borderBottom =
              "1px solid rgba(255,255,255,0.08)";
          } else {
            navRef.current.style.backgroundColor = "transparent";
            navRef.current.style.backdropFilter = "blur(0px)";
            navRef.current.style.borderBottom = "1px solid transparent";
          }
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${urbanist.className}`}
      >
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo */}
          <div ref={logoRef} className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center select-none group">
              <Image
                src="/images/dklogo.webp"
                alt="Devskarnel Logo"
                width={280}
                height={80}
                className="h-8 min-[360px]:h-24 min-[420px]:h-10 sm:h-12 md:h-14 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div
            ref={linksRef}
            className="hidden lg:flex items-center border-[0.5px] border-white/10 rounded-lg overflow-visible backdrop-blur-sm bg-white/5"
          >
            {navLinks.map(({ label, hasDropdown, dropdownItems, href }) => (
              <div
                key={label}
                className="relative h-full"
                onMouseEnter={hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
              >
                {hasDropdown ? (
                  <>
                    <button className="relative flex items-center gap-1 px-5 py-2.5 text-[0.95rem] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 border-r border-white/10 after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-4">
                      {label}
                      <span
                        className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-emerald-400" : ""}`}
                      >
                        <ChevronDown />
                      </span>
                    </button>

                    {isDropdownOpen && (
                      <div
                        ref={dropdownRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-full pt-2 left-0 w-72 overflow-visible z-100 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4"
                      >
                        <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] space-y-0.5">
                          {dropdownItems.map((item) => {
                            const hasSubItems =
                              Array.isArray(item.subItems) &&
                              item.subItems.length > 0;

                            const isSubActive = hoveredSubmenu === item.label;
                            const ItemIcon = item.icon || Palette;

                            return (
                              <div
                                key={item.label}
                                className={
                                  hasSubItems ? "relative group/sub" : ""
                                }
                                onMouseEnter={() => {
                                  if (hasSubItems) {
                                    handleSubmenuEnter(item.label);
                                  } else {
                                    handleMouseEnter();
                                    handleSubmenuLeaveWithDelay();
                                  }
                                }}
                                onMouseLeave={handleMouseLeave}
                              >
                                {hasSubItems ? (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleSubmenuEnter(item.label);
                                    }}
                                    className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer ${
                                      isSubActive
                                        ? "bg-slate-100 text-slate-900 shadow-sm"
                                        : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900"
                                    }`}
                                  >
                                    <span className="flex items-center gap-3">
                                      <div
                                        className={`p-1.5 rounded-lg shrink-0 ${item.color || "bg-slate-100 text-slate-700"}`}
                                      >
                                        <ItemIcon className="w-4 h-4" />
                                      </div>
                                      <span>{item.label}</span>
                                    </span>
                                    <span
                                      className={`text-base font-bold transition-transform duration-200 ${isSubActive ? "text-emerald-600 translate-x-0.5" : "text-slate-400"}`}
                                    >
                                      ›
                                    </span>
                                  </button>
                                ) : (
                                  <Link
                                    href={item.href}
                                    onClick={(e) =>
                                      handleNavClick(item.href, e)
                                    }
                                    className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-150 text-sm font-semibold"
                                  >
                                    <span className="flex items-center gap-3">
                                      <div
                                        className={`p-1.5 rounded-lg shrink-0 ${item.color || "bg-slate-100 text-slate-700"}`}
                                      >
                                        <ItemIcon className="w-4 h-4" />
                                      </div>
                                      <span>{item.label}</span>
                                    </span>
                                  </Link>
                                )}

                                {hasSubItems && (
                                  <div
                                    onMouseEnter={() =>
                                      handleSubmenuEnter(item.label)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                    className={`pointer-events-auto absolute left-full top-0 pl-2 ${isSubActive ? "flex" : "hidden"} w-90 sm:w-95 flex-col z-50 before:content-[''] before:absolute before:-left-12 before:top-0 before:bottom-0 before:w-16`}
                                  >
                                    <div
                                      data-lenis-prevent
                                      className="w-full bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] rounded-2xl p-2 max-h-110 overflow-y-auto overscroll-contain touch-pan-y [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent space-y-1"
                                    >
                                      {/* All Category CTA */}
                                      <Link
                                        href={item.href}
                                        onClick={(e) =>
                                          handleNavClick(item.href, e)
                                        }
                                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 transition-all duration-200 mb-1.5"
                                      >
                                        <span className="text-xs font-extrabold text-emerald-800 tracking-wide">
                                          All {item.label} Services
                                        </span>
                                        <span className="text-emerald-700 font-bold transition-transform duration-200 group-hover:translate-x-1">
                                          →
                                        </span>
                                      </Link>

                                      {/* Sub Category Items */}
                                      {item.subItems.map((subObj) => {
                                        const SubIcon = subObj.icon || Store;
                                        const targetHref =
                                          subObj.href || "/services/e-commerce";
                                        return (
                                          <Link
                                            key={subObj.label}
                                            href={targetHref}
                                            onClick={(e) =>
                                              handleNavClick(targetHref, e)
                                            }
                                            className="group flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-transparent hover:border-slate-200/60 transition-all duration-150"
                                          >
                                            <div
                                              className={`p-1 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 ${subObj.color || "bg-slate-100 text-slate-600"}`}
                                            >
                                              <SubIcon className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="leading-tight tracking-wide">
                                              {subObj.label}
                                            </span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(href, e)}
                    className="px-5 py-2.5 text-[0.95rem] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 border-r border-white/10 last:border-r-0"
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
            <div ref={ctaRef} className="shrink-0">
              <a
                href="https://calendly.com/devskarnel/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-center px-2.5 py-1.5 xs:px-3 xs:py-1.5 min-[390px]:px-4 min-[390px]:py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#2de8b0] hover:bg-[#26cb9a] text-black text-[11px] min-[360px]:text-xs sm:text-sm font-bold tracking-tight sm:tracking-normal transition-all duration-200 shadow-[0_0_15px_rgba(45,232,176,0.3)] hover:shadow-[0_0_25px_rgba(45,232,176,0.5)] active:scale-95 cursor-pointer select-none"
              >
                Request a quote
              </a>
            </div>

            <button
              aria-label="Open Navigation Menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all cursor-pointer flex items-center justify-center shrink-0"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm z-60 hidden"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[88%] max-w-xs sm:max-w-sm bg-[#0d1117] border-l border-white/10 z-70 translate-x-full overflow-y-auto ${urbanist.className}`}
      >
        <div className="p-4 sm:p-5 flex flex-col justify-between min-h-full">
          <div>
            {/* Top Header: Logo Image & Email only */}
            <div className="flex items-center justify-between pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-white/10">
              <div className="flex flex-col items-start gap-1 min-w-0 pr-2">
                <Image
                  src="/images/dklogo.webp"
                  alt="Devskarnel Logo"
                  width={140}
                  height={40}
                  className="h-7 min-[360px]:h-8 sm:h-9 w-auto object-contain"
                />
                <p className="text-white/50 text-[11px] font-medium truncate max-w-full">
                  devskarnel@gmail.com
                </p>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all shrink-0 cursor-pointer"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Main Navigation List - Scrollable Pill Style */}
            <div className="space-y-2">
              {/* Solutions Item */}
              <div className="w-full">
                <button
                  onClick={() =>
                    setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
                  }
                  className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl transition-all text-xs sm:text-sm font-semibold cursor-pointer ${
                    isMobileSolutionsOpen
                      ? "bg-white text-black shadow-lg"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <SolutionsIcon
                      className={
                        isMobileSolutionsOpen
                          ? "w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0"
                          : "w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0"
                      }
                    />
                    <span>Solutions</span>
                  </span>
                  <span
                    className={`transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180 text-black" : "text-white/40"}`}
                  >
                    <ChevronDown />
                  </span>
                </button>

                {/* Dropdown Sub-Items (Scrollable Container) */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${isMobileSolutionsOpen ? "max-h-300 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <div className="space-y-1 border-l-2 border-emerald-500/30 ml-2.5 sm:ml-3 pl-2.5 sm:pl-3 py-1">
                    {navLinks[0].dropdownItems.map((item) => {
                      const hasSubItems =
                        Array.isArray(item.subItems) &&
                        item.subItems.length > 0;
                      return (
                        <div key={item.label}>
                          {hasSubItems ? (
                            <>
                              <button
                                type="button"
                                onClick={() =>
                                  setActiveMobileSubmenu(
                                    activeMobileSubmenu === item.label
                                      ? null
                                      : item.label,
                                  )
                                }
                                className="w-full flex items-center justify-between px-2.5 sm:px-3 py-2 text-xs text-white/80 hover:text-emerald-400 font-medium rounded-xl hover:bg-white/5 cursor-pointer text-left"
                              >
                                <span className="truncate pr-2">{item.label}</span>
                                <span
                                  className={`transition-transform duration-200 text-xs text-emerald-400 shrink-0 ${activeMobileSubmenu === item.label ? "rotate-180" : ""}`}
                                >
                                  <ChevronDown />
                                </span>
                              </button>
                              {activeMobileSubmenu === item.label && (
                                <div className="pl-2 sm:pl-3 space-y-1 py-1 max-h-56 overflow-y-auto pr-1">
                                  {item.subItems.map((sub) => {
                                    const subLabel =
                                      typeof sub === "object" ? sub.label : sub;
                                    const targetHref =
                                      typeof sub === "object"
                                        ? sub.href || "/services/e-commerce"
                                        : "/services/e-commerce";
                                    return (
                                      <Link
                                        key={subLabel}
                                        href={targetHref}
                                        onClick={(e) =>
                                          handleNavClick(targetHref, e)
                                        }
                                        className="block px-2.5 sm:px-3 py-1.5 text-[11px] text-white/60 hover:text-emerald-400 hover:bg-white/5 rounded-lg border-b border-white/5 last:border-b-0 wrap-break-word"
                                      >
                                        • {subLabel}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={(e) => handleNavClick(item.href, e)}
                              className="block px-2.5 sm:px-3 py-2 text-xs text-white/80 hover:text-emerald-400 font-medium rounded-xl hover:bg-white/5 wrap-break-word"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Item */}
              <Link
                href="#contact"
                onClick={(e) => handleNavClick("#contact", e)}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl text-white/90 hover:bg-white/5 hover:text-white transition-all text-xs sm:text-sm font-semibold"
              >
                <ContactIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 shrink-0" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Divider Line */}
            <div className="my-4 sm:my-5 border-t border-white/10" />

            {/* Bottom Actions Section */}
            <div className="space-y-2">
              <a
                href="https://calendly.com/devskarnel/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <RocketIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  <span className="truncate">Request a Quote</span>
                </span>
                <span className="shrink-0 text-sm sm:text-base">→</span>
              </a>

              <a
                href="mailto:devskarnel@gmail.com"
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-[11px] sm:text-xs font-medium min-w-0"
              >
                <MailIcon className="shrink-0 w-4 h-4" />
                <span className="truncate">devskarnel@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
