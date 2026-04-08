"use client";
import React, { useLayoutEffect, useRef } from "react";
import Hero from "./Hero";
import Services from "./Services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hnsanimation = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.willChange = "transform, opacity";

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scale: 0.88,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom 10%",
          scrub: 1,            
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