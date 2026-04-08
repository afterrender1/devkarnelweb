"use client";
import React, { useLayoutEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TRUST_BADGES = ["WordPress Experts", "SEO-Optimized", "99.9% Uptime"];

const SLIDES = [
  { src: "/images/our-work/magnetik.png",    alt: "Magnetik"    },
  { src: "/images/our-work/coffee.png",      alt: "Coffee"      },
  { src: "/images/our-work/tmgvan1.png",     alt: "Outdoor"     },
  { src: "/images/our-work/jave.png",        alt: "Jave"        },
  { src: "/images/our-work/renderstore.png", alt: "Renderstore" },
  { src: "/images/our-work/zeroice.png",     alt: "Zeroice"     },
];

const N     = SLIDES.length;
const LOWER = -Math.floor((N - 1) / 2); // -2
const UPPER =  Math.floor(N       / 2); //  3

function slotToProps(pos) {
  switch (pos) {
    case  0: return { x: "0%",    scale: 1,    opacity: 1,   zIndex: 4 };
    case -1: return { x: "-89%",  scale: 0.87, opacity: 0.6, zIndex: 3 };
    case  1: return { x:  "89%",  scale: 0.87, opacity: 0.6, zIndex: 3 };
    case -2: return { x: "-195%", scale: 0.74, opacity: 0,   zIndex: 2 };
    case  2: return { x:  "195%", scale: 0.74, opacity: 0,   zIndex: 2 };
    default: {
      const sign = pos < 0 ? -1 : 1;
      return { x: `${sign * 310}%`, scale: 0.7, opacity: 0, zIndex: 1 };
    }
  }
}

function buildInitialSlots() {
  return Array.from({ length: N }, (_, i) => {
    const s = i;
    return s > UPPER ? s - N : s;
  });
}

const DotIndicators = ({ activeRef, goTo }) => {
  const dotsRef = useRef([]);
  const prevRef = useRef(-1);

  useLayoutEffect(() => {
    const tick = () => {
      const cur = activeRef.current;
      if (cur === prevRef.current) return;
      prevRef.current = cur;
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.to(dot, {
          width:   i === cur ? 18 : 6,
          opacity: i === cur ? 1  : 0.4,
          duration: 0.35,
          ease: "power2.out",
        });
      });
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [activeRef]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 14,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 6,
        zIndex: 10,
      }}
    >
      {SLIDES.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => goTo(i)}
          ref={(el) => { dotsRef.current[i] = el; }}
          style={{
            height: 6,
            width: i === 0 ? 18 : 6,
            borderRadius: 99,
            background: "#084948",
            opacity: i === 0 ? 1 : 0.4,
            border: "none",
            padding: 0,
            cursor: "pointer",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
};

const NavBtn = ({ side, onClick }) => (
  <button
    aria-label={side === "prev" ? "Previous slide" : "Next slide"}
    onClick={onClick}
    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.95)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.78)"; }}
    style={{
      position: "absolute",
      [side === "prev" ? "left" : "right"]: 12,
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.78)",
      border: "none",
      borderRadius: "50%",
      width: 32,
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 10,
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      transition: "background 0.2s",
    }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      {side === "prev"
        ? <path d="M10 12L6 8l4-4" stroke="#202124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M6 4l4 4-4 4"  stroke="#202124" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      }
    </svg>
  </button>
);

const ImageCarousel = () => {
  const slideEls     = useRef([]);
  const slotsRef     = useRef(buildInitialSlots());
  const activeRef    = useRef(0);
  const animatingRef = useRef(false);
  const pausedRef    = useRef(false);
  const timerRef     = useRef(null);

  useLayoutEffect(() => {
    slideEls.current.forEach((el, i) => {
      if (el) gsap.set(el, slotToProps(slotsRef.current[i]));
    });
  }, []);

  const slide = useCallback((direction) => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    // Shift every slot
    const next = slotsRef.current.map((s) => s - direction);

    next.forEach((pos, i) => {
      let adjusted = pos;
      if (pos < LOWER) adjusted = pos + N;
      else if (pos > UPPER) adjusted = pos - N;
      if (adjusted !== pos) {
        gsap.set(slideEls.current[i], slotToProps(adjusted));
        next[i] = adjusted;
      }
    });

    slotsRef.current = next;
    activeRef.current = (activeRef.current + direction + N) % N;

    next.forEach((pos, i) => {
      if (slideEls.current[i]) {
        gsap.set(slideEls.current[i], { zIndex: slotToProps(pos).zIndex });
      }
    });

    const tl = gsap.timeline({ onComplete: () => { animatingRef.current = false; } });
    next.forEach((pos, i) => {
      const { x, scale, opacity } = slotToProps(pos);
      tl.to(
        slideEls.current[i],
        { x, scale, opacity, duration: 0.7, ease: "power3.inOut" },
        0,
      );
    });
  }, []);

  const goTo = useCallback((targetIndex) => {
    const steps = targetIndex - activeRef.current;
    if (steps === 0) return;
    const direction = ((steps % N) + N) % N <= N / 2 ? 1 : -1;
    slide(direction);
  }, [slide]);

  const stopTimer  = useCallback(() => clearInterval(timerRef.current), []);
  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) slide(1);
    }, 3500);
  }, [slide]);

  useLayoutEffect(() => {
    startTimer();
    return () => {
      stopTimer();
      gsap.killTweensOf(slideEls.current);
    };
  }, [startTimer, stopTimer]);

  return (
    <div
      className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(60,64,67,0.08),0 20px 60px -10px rgba(60,64,67,0.18)",
        border: "1px solid rgba(232,234,237,0.9)",
      }}
      onMouseEnter={() => { pausedRef.current = true;  }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {SLIDES.map((s, i) => (
        <div
          key={i}
          ref={(el) => { slideEls.current[i] = el; }}
          style={{
            position: "absolute",
            inset: 0,
            willChange: "transform, opacity",
            transformOrigin: "center center",
            borderRadius: "inherit",
            overflow: "hidden",
          }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
            priority={i < 3}
            style={{
              objectFit: "cover",
              userSelect: "none",
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </div>
      ))}

      <DotIndicators activeRef={activeRef} goTo={goTo} />
      <NavBtn side="prev" onClick={() => { stopTimer(); slide(-1); startTimer(); }} />
      <NavBtn side="next" onClick={() => { stopTimer(); slide( 1); startTimer(); }} />
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge",   { y: 16, opacity: 0, duration: 0.55 })
        .from(".hero-h1-line", { y: 44, opacity: 0, duration: 0.85, stagger: 0.16 }, "-=0.25")
        .from(".hero-sub",     { y: 18, opacity: 0, duration: 0.65 }, "-=0.35")
        .from(".hero-actions", { y: 18, opacity: 0, duration: 0.55 }, "-=0.35")
        .from(".hero-trust",   { y: 12, opacity: 0, duration: 0.45 }, "-=0.3")
        .from(".hero-video",   { y: 36, opacity: 0, scale: 0.97, duration: 1, ease: "power2.out" }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Hero section"
      className={`relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden ${urbanist.className}`}
    >
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/bg1.png)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-16 flex flex-col items-center text-center">

        <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#e8f0fe] border border-[#c5d8fd] mb-5 sm:mb-7">
          <span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1a73e8] animate-pulse shrink-0"
            aria-hidden="true"
          />
          <span className="text-[11px] sm:text-[13px] font-semibold text-[#084948] tracking-wide whitespace-nowrap">
            Full-Stack Web Agency
          </span>
        </div>

        <h1 className="font-bold text-[#202124] tracking-tight leading-[1.18] w-full text-[1.6rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          <div className="overflow-hidden">
            <span className="hero-h1-line block">Crafting high-performance</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-h1-line block">
              digital experiences &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#1a73e8 0%,#0f9d58 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Custom Web Solutions
              </span>
            </span>
          </div>
          <div className="overflow-hidden mt-2">
            <span className="hero-h1-line block font-medium text-[#5f6368] text-base sm:text-xl md:text-2xl lg:text-3xl">
              designed for{" "}
              <span className="font-bold text-[#202124]">Scalability</span>.
            </span>
          </div>
        </h1>

        <p className="hero-sub mt-4 sm:mt-6 text-[#383838] leading-relaxed text-sm sm:text-base md:text-lg max-w-[85vw] sm:max-w-md md:max-w-xl">
          Secure, SEO-optimized, and user-centric platforms — from WordPress to Shopify — crafted for businesses worldwide.
        </p>

        <div className="hero-actions mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <button
            aria-label="Book a free consultation"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm sm:text-[15px] transition-[box-shadow,transform] duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
            style={{ background: "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)" }}
          >
            Book a Free Consultation
            <ArrowRight
              className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>

          <button
            aria-label="Watch our story video"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[#202124] font-semibold text-sm sm:text-[15px] border border-[#dadce0] bg-white transition-[background,border-color] duration-200 hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95"
          >
            <Play className="w-4 h-4 shrink-0 text-[#084948] fill-[#084948]" aria-hidden="true" />
            Watch our story
          </button>
        </div>

        <div
          className="hero-trust mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2"
          aria-label="Trust indicators"
        >
          {TRUST_BADGES.map((label) => (
            <div
              key={label}
              className="flex items-center gap-1.5 text-[11px] sm:text-[13px] text-[#383838]"
            >
              <CheckCircle2
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0f9d58] shrink-0"
                aria-hidden="true"
              />
              {label}
            </div>
          ))}
        </div>

        <div className="hero-video mt-5 sm:mt-6 w-full max-w-3xl mx-auto">
          <ImageCarousel />
        </div>

      </div>
    </section>
  );
};

export default Hero;