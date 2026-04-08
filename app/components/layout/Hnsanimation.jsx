"use client";
import React, { useLayoutEffect, useRef } from "react";
import Hero from "./Hero";
import Services from "./Services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hnsanimation — wraps Hero with a scroll-driven scale+fade out,
 * then renders Services below it.
 *
 * Optimised:
 * - useLayoutEffect (avoids FOUC)
 * - gsap.context() for scoped, auto-cleaned-up animations
 * - will-change only while animation is active (removed on complete)
 * - GPU-friendly properties only (opacity, scale via transform)
 */
const Hnsanimation = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Apply will-change only during scroll animation, remove after
    el.style.willChange = "transform, opacity";

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scale: 0.88,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom 10%",
          scrub: 1,             // scrub:1 adds a small lag = smoother feel
          onLeave: () => {
            el.style.willChange = "auto";
          },
          onEnterBack: () => {
            el.style.willChange = "transform, opacity";
          },
        },
      });
    });

    return () => {
      ctx.revert();
      el.style.willChange = "auto";
    };
  }, []);

  return (
    <>
      {/* overflow:hidden prevents scale from causing horizontal scrollbar */}
      <div ref={heroRef} style={{ overflow: "hidden", transformOrigin: "center top" }}>
        <Hero />
      </div>

      <div>
        <Services />
      </div>
    </>
  );
};

export default Hnsanimation;