"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { urbanist } from "../fonts";
import { BookOpen, Briefcase } from "lucide-react";

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
  },
  {
    label: "Ebay Automation",
    href: "/services/e-commerce/ebay-automation",
  },
  {
    label: "Walmart Automation",
    href: "/services/e-commerce/walmart-automation",
  },
  {
    label: "TikTok Shop Automation",
    href: "/services/e-commerce/tiktok-shop-automation",
  },
  {
    label: "Temu Automation",
    href: "/services/e-commerce/temu-automation",
  },
  {
    label: "Shopee Marketplace Growth Service",
    href: "/services/e-commerce/shopee-growth",
  },
  {
    label: "WooCommerce Store Development & Management",
    href: "/services/e-commerce/woocommerce-development",
  },
  {
    label: "Penties Automation",
    href: "/services/e-commerce/penties-automation",
  },
  {
    label: "Telehealth Automation",
    href: "/services/e-commerce/telehealth-automation",
  },
  {
    label: "Etsy Shop Automation",
    href: "/services/e-commerce/etsy-automation",
  },
  {
    label: "Amazon Store Setup & Growth Services",
    href: "/services/e-commerce/amazon-store-setup",
  },
  {
    label: "Shopify Merchandise",
    href: "/services/e-commerce/shopify-merchandise",
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
      },
      {
        label: "Web Design",
        href: "/services/website-development",
      },
      {
        label: "E-commerce",
        href: "/services/e-commerce",
        subItems: ecommerceSubmenu,
      },
      {
        label: "Branding",
        href: "/services/branding",
      },
      {
        label: "Mobile App",
        href: "/services/mobile-app-development",
      },
      {
        label: "SEO",
        href: "/services/seo-optimization",
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
    ],
  },
  { label: "Portfolio", hasDropdown: false, href: "/portfolio" },
  { label: "Articles", hasDropdown: false, href: "/articles" },
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
  const ctaRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

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
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        router.push("/" + href);
        return;
      }
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

  // Single close timer for the whole Solutions area (trigger + menu + submenu).
  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setHoveredSubmenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

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
      // Entrance animation lives in CSS (.nav-in) so nothing is hidden until hydration.
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
          <div ref={logoRef} className="nav-in shrink-0 flex items-center">
            <Link href="/" className="flex items-center select-none group">
              <Image
                src="/images/dklogo.webp"
                alt="Devskarnel Logo"
                width={280}
                height={80}
                className="h-16 xs:h-20 sm:h-16 md:h-20 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div
            ref={linksRef}
            className="nav-in nav-in-2 hidden lg:flex items-center border-[0.5px] border-white/10 rounded-lg overflow-visible backdrop-blur-sm bg-white/5"
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
                    <button
                      type="button"
                      suppressHydrationWarning
                      aria-haspopup="menu"
                      aria-expanded={isDropdownOpen}
                      onClick={() => setIsDropdownOpen((v) => !v)}
                      className={`flex items-center gap-1 px-5 py-2.5 text-[0.95rem] font-medium transition-colors duration-200 border-r border-white/10 cursor-pointer ${
                        isDropdownOpen
                          ? "text-white bg-white/5"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {label}
                      <span
                        className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-emerald-400" : ""}`}
                      >
                        <ChevronDown />
                      </span>
                    </button>

                    {/* Always mounted and toggled with CSS so there is no mount/unmount flicker.
                        pt-2 is an invisible hover bridge between the trigger and the panel. */}
                    <div
                      role="menu"
                      className={`absolute top-full left-0 pt-2 z-100 transition-all duration-150 ease-out ${
                        isDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto visible"
                          : "opacity-0 -translate-y-1 pointer-events-none invisible"
                      }`}
                    >
                      <div className="w-60 rounded-lg border border-slate-200 bg-white p-1 shadow-lg shadow-black/10">
                        <p className="px-2.5 pt-1.5 pb-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                          Services
                        </p>
                        {dropdownItems.map((item) => {
                          const hasSubItems =
                            Array.isArray(item.subItems) &&
                            item.subItems.length > 0;
                          const isSubActive = hoveredSubmenu === item.label;

                          return (
                            <div
                              key={item.label}
                              className="relative"
                              onMouseEnter={() =>
                                setHoveredSubmenu(
                                  hasSubItems ? item.label : null,
                                )
                              }
                            >
                              {hasSubItems ? (
                                <button
                                  type="button"
                                  role="menuitem"
                                  aria-haspopup="menu"
                                  aria-expanded={isSubActive}
                                  onClick={() => setHoveredSubmenu(item.label)}
                                  className={`w-full flex items-center justify-between rounded-md px-2.5 py-2 text-sm font-medium text-left cursor-pointer transition-colors duration-100 ${
                                    isSubActive
                                      ? "bg-slate-100 text-slate-900"
                                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                  }`}
                                >
                                  <span>{item.label}</span>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-slate-400"
                                  >
                                    <polyline points="9 18 15 12 9 6" />
                                  </svg>
                                </button>
                              ) : (
                                <Link
                                  href={item.href}
                                  role="menuitem"
                                  onClick={(e) => handleNavClick(item.href, e)}
                                  className="flex items-center rounded-md px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-100"
                                >
                                  {item.label}
                                </Link>
                              )}

                              {hasSubItems && (
                                /* pl-2 bridges the gap to the submenu without overlapping the parent panel. */
                                <div
                                  role="menu"
                                  className={`absolute left-full -top-1 pl-2 transition-all duration-150 ease-out ${
                                    isSubActive
                                      ? "opacity-100 translate-x-0 pointer-events-auto visible"
                                      : "opacity-0 -translate-x-1 pointer-events-none invisible"
                                  }`}
                                >
                                  <div
                                    data-lenis-prevent
                                    className="w-72 rounded-lg border border-slate-200 bg-white p-1 shadow-lg shadow-black/10 max-h-110 overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
                                  >
                                    <Link
                                      href={item.href}
                                      role="menuitem"
                                      onClick={(e) =>
                                        handleNavClick(item.href, e)
                                      }
                                      className="group flex items-center justify-between rounded-md px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors duration-100"
                                    >
                                      <span>All {item.label} Services</span>
                                      <span className="text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-slate-700">
                                        →
                                      </span>
                                    </Link>
                                    <div className="-mx-1 my-1 h-px bg-slate-100" />
                                    {item.subItems.map((subObj) => {
                                      const targetHref =
                                        subObj.href || "/services/e-commerce";
                                      return (
                                        <Link
                                          key={subObj.label}
                                          href={targetHref}
                                          role="menuitem"
                                          onClick={(e) =>
                                            handleNavClick(targetHref, e)
                                          }
                                          className="block rounded-md px-2.5 py-1.5 text-[13px] font-medium leading-snug text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-100"
                                        >
                                          {subObj.label}
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
            <div ref={ctaRef} className="nav-in nav-in-3 shrink-0">
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

              {/* Portfolio Item */}
              <Link
                href="/portfolio"
                onClick={(e) => handleNavClick("/portfolio", e)}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl text-white/90 hover:bg-white/5 hover:text-white transition-all text-xs sm:text-sm font-semibold"
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span>Portfolio</span>
              </Link>

              {/* Articles Item */}
              <Link
                href="/articles"
                onClick={(e) => handleNavClick("/articles", e)}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl text-white/90 hover:bg-white/5 hover:text-white transition-all text-xs sm:text-sm font-semibold"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#2de8b0] shrink-0" />
                <span>Articles</span>
              </Link>

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
