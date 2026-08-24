"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist } from "@/app/fonts";

export default function ServiceHero({
  badge = "Our Services",
  titleLine1,
  titleLine2,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description = "Building high-impact digital experiences that drive growth, engagement, and lasting revenue.",
  ctaText = "Contact us",
  ctaHref = "#contact",
  secondaryCtaText = "Request a quote",
  secondaryCtaHref = "https://calendly.com/devskarnel/30min",
}) {
  // Determine lines for heading
  const line1 = titleLine1 || (titlePrefix ? `${titlePrefix}` : "Building high impact");
  const line2 = titleLine2 || (titleHighlight ? `${titleHighlight}${titleSuffix ? " " + titleSuffix : ""}` : "digital solutions.");

  const badgeRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const bgGradientRef = useRef(null);
  const bgRevealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          badgeRef.current,
          headingLine1Ref.current,
          headingLine2Ref.current,
          descRef.current,
          btnsRef.current,
        ].filter(Boolean),
        { opacity: 0, y: 35, filter: "blur(10px)" }
      );
      gsap.set(bgGradientRef.current, { opacity: 0.6 });
      gsap.set(bgRevealRef.current, { opacity: 0.4 });

      const tl = gsap.timeline();
      tl.to(badgeRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0)
        .to(headingLine1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.1)
        .to(headingLine2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.25)
        .to(descRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.4)
        .to(btnsRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.5)
        .to(bgGradientRef.current, { opacity: 0, duration: 1.2, ease: "power2.out" }, 1.2)
        .to(bgRevealRef.current, { opacity: 1, duration: 1.3, ease: "power2.out" }, 1.2);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative w-full flex items-center justify-center overflow-hidden bg-[#010504] pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-20 sm:pb-24 lg:pb-32 ${urbanist.className}`}
    >
      {/* Dynamic Background Atmosphere - Exact Main Hero Style */}
      <div
        ref={bgRevealRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 70%,  rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, transparent 50%),
            radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%),
            radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%,rgba(0,0,0,0.3) 30%, transparent 55%),
            radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%),
            linear-gradient(180deg,#24E8B2 0%,#1BC497 5%,#0F7C6E 40%,#0A4A42 60%,#062B24 80%,#010504 100%)
          `,
          willChange: "opacity",
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
        ref={bgGradientRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 50%,rgba(45,232,176,0.05) 0%,transparent 60%)" }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Badge */}
        {badge && (
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(45,232,176,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#2de8b0] animate-pulse" />
            <span className="text-[11px] sm:text-xs text-white/80 uppercase tracking-widest font-semibold">
              {badge}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1 className="text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-4 sm:mb-6 px-2">
          <span ref={headingLine1Ref} className="block wrap-break-word">
            {line1}
          </span>
          <span
            ref={headingLine2Ref}
            className="block bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/60 bg-clip-text text-transparent wrap-break-word"
          >
            {line2}
          </span>
        </h1>

        {/* Description */}
        {description && (
          <p
            ref={descRef}
            className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl px-4"
          >
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href={ctaHref}
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-lg text-xs min-[360px]:text-sm sm:text-base font-bold text-black transition-all duration-200 hover:brightness-110 active:scale-95 bg-[#2de8b0] shadow-lg shadow-[#2de8b0]/25 cursor-pointer whitespace-nowrap text-center block sm:inline-block"
          >
            {ctaText}
          </a>
          {secondaryCtaText && (
            <a
              href={secondaryCtaHref}
              target={secondaryCtaHref.startsWith("http") ? "_blank" : undefined}
              rel={secondaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-lg text-xs min-[360px]:text-sm sm:text-base font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 cursor-pointer whitespace-nowrap text-center block sm:inline-block"
            >
              {secondaryCtaText}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
