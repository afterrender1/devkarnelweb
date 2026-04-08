"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400","500","600","700","800","900"] });

const BRANDS = [
  { name: "facebook", style: { fontWeight: 900, letterSpacing: "-0.03em", textTransform: "lowercase" } },
  { name: "twitch",   style: { fontWeight: 900, fontStyle: "italic",      letterSpacing: "-0.02em" } },
  { name: "Pinterest",style: { fontWeight: 900,                            letterSpacing: "-0.01em" } },
  { name: "YouTube",  style: { fontWeight: 900, textTransform: "uppercase",letterSpacing: "0.04em" } },
  { name: "webflow",  style: { fontWeight: 900, textTransform: "lowercase",letterSpacing: "-0.02em" } },
];

const FounderSection = () => {
  const sectionRef = useRef(null);
  const labelRef   = useRef(null);
  const lineRef    = useRef(null);
  const brandsRef  = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      tl.fromTo([labelRef.current, lineRef.current],
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.55, ease: "power2.out" }
      );

      tl.fromTo(
        brandsRef.current.filter(Boolean),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full px-0 sm:px-0 lg:px-0 py-12 sm:py-18 lg:py-20 border-t border-gray-100 ${urbanist.className}`}
      aria-label="Trusted by industry leaders"
    >
      <div className="max-w-420 mx-auto">

        <div className="flex items-center gap-4 mb-10 sm:mb-12">
          <p
            ref={labelRef}
            className="text-gray-400 font-semibold uppercase whitespace-nowrap"
            style={{ fontSize: "10.5px", letterSpacing: "0.2em", opacity: 0 }}
          >
            Trusted by industry leaders
          </p>
          <div ref={lineRef} className="flex-1 h-px bg-gray-200" style={{ opacity: 0 }} aria-hidden="true" />
        </div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 sm:gap-x-10"
          aria-label="Partner brands"
        >
          {BRANDS.map((brand, i) => (
            <li
              key={brand.name}
              ref={(el) => (brandsRef.current[i] = el)}
              className="flex items-center justify-start"
              style={{ opacity: 0 }}
            >
              <span
                className="text-gray-300 hover:text-gray-700 transition-colors duration-300 cursor-default select-none"
                style={{ ...brand.style, fontSize: "clamp(17px,2.2vw,22px)", lineHeight: 1 }}
                aria-label={brand.name}
              >
                {brand.name}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default FounderSection;