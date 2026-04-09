"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { inter, urbanist } from "../fonts";

const funnelSteps = [
  { label: "Market study,\nBenchmarking", active: false },
  { label: "Concept\nexploration", active: true },
  { label: "System\nspecification", active: false },
  { label: "Component\nspecification", active: false },
];

export default function Hero() {
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const headingLine3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const bgGradientRef = useRef(null);
  const funnelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current, subRef.current, btnsRef.current], {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      });

      gsap.set(bgGradientRef.current, { opacity: 0.6 });

      const tl = gsap.timeline();

      // Line 1 of heading
      tl.to(
        headingLine1Ref.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        headingLine2Ref.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
        },
        0.15
      );

      tl.to(
        headingLine3Ref.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
        },
        0.3
      );

      tl.to(
        subRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
        },
        0.45
      );

      tl.to(
        btnsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
        },
        0.6
      );

      tl.to(
        bgGradientRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.65
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative min-h-screen w-full flex items-center overflow-hidden ${urbanist.className}`}
      style={{
        background: `
    radial-gradient(circle at 10% 10%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, transparent 50%),
    radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%),
    radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%),
    radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%),
    linear-gradient(
      280deg,
      #24E8B2 0%,
      #1BC497 5%,
      #0F7C6E 40%,
      #0A4A42 60%,
      #062B24 80%,
      #010504 100%
    )
  `
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-5 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(1,5,4,0.6) 100%)",
        }}
      />

      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        ref={bgGradientRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(45,232,176,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-400 mx-auto px-4 sm:px-6 pt-2 pb-20 sm:pb-24 flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-8 lg:pt-12">
        {/* Left: Text */}
        <div className="w-full lg:w-auto lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-semibold leading-[1.20] tracking-tight text-white mb-6 lg:mb-8">
            <span
              ref={headingLine1Ref}
              className="block"
            >
              Crafting high-performance
            </span>

            <span
              ref={headingLine2Ref}
              className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent"
            >
              digital experiences and
            </span>

            <span
              ref={headingLine3Ref}
              className="block bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/60 bg-clip-text text-transparent"
            >
               bespoke web solutions
            </span>
          </h1>

          <p
            ref={subRef}
            className="text-white/60 text-sm sm:text-[0.95rem] leading-relaxed mb-8 sm:mb-10 max-w-md"
          >
            Generate application-specific answers and demonstrate performance
            with speed, clarity, and precision.
          </p>

          <div ref={btnsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              className="px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-[0.85rem] font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95 whitespace-nowrap"
              style={{
                backgroundColor: "#2de8b0",
                boxShadow: "0 8px 30px rgba(45,232,176,0.25)",
              }}
            >
              Contact us
            </button>

            <button
              className="px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-[0.85rem] font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 whitespace-nowrap"
            >
              View demo
            </button>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-end items-center">
        </div>
      </div>
    </section>
  );
}

function FunnelDiagram() {
  return (
    <div className="relative flex flex-col items-center gap-1.5 w-full max-w-85">
      {funnelSteps.map((step, i) => {
        const widthPercent = 100 - i * 14;
        const isActive = step.active;

        return (
          <div key={i} className="relative flex items-center justify-center" style={{ width: "100%" }}>
            <div
              className="relative flex items-center justify-center py-3 transition-all duration-300"
              style={{
                width: `${widthPercent}%`,
                clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)",
                backgroundColor: isActive
                  ? "rgba(45,232,176,0.12)"
                  : "rgba(255,255,255,0.04)",
                border: isActive
                  ? "1px solid rgba(45,232,176,0.55)"
                  : "1px solid rgba(255,255,255,0.12)",
                minHeight: "52px",
              }}
            >
              {isActive && (
                <div
                  className="absolute right-0 top-0 bottom-0 w-0.5"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(45,232,176,0.8), rgba(45,232,176,0.2))",
                  }}
                />
              )}

              <span
                className="text-center text-[0.78rem] font-medium leading-tight whitespace-pre-line px-4"
                style={{
                  color: isActive ? "#2de8b0" : "rgba(255,255,255,0.6)",
                  fontWeight: isActive ? 700 : 400,
                }}
              >
                {step.label}
              </span>
            </div>

            {i < funnelSteps.length - 1 && (
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2"
                style={{
                  width: `${i * 7}%`,
                  height: "1px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  right: `-${i * 7}%`,
                }}
              />
            )}
          </div>
        );
      })}

      <div
        className="absolute right-4.5 top-0 bottom-0 flex flex-col"
        style={{ width: "2px" }}
      >
        <div
          className="flex-1"
          style={{
            borderRight: "1px solid rgba(255,255,255,0.12)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        />
        <div
          className="flex-1"
          style={{
            borderRight: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        />
      </div>
    </div>
  );
}