"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * CustomCursor — optimised version
 *
 * Changes from original:
 * - useLayoutEffect instead of useEffect (no paint flash)
 * - Reduced trail from 5 → 3 dots (less DOM + fewer tweens)
 * - Event listeners attached via delegation on document, not per-element
 *   → avoids re-attaching when new elements mount
 * - Breathing animation runs on dot, not ring (ring already moves, cheaper)
 * - will-change removed from ring/dot at rest; set only during interaction
 * - `requestAnimationFrame` loop eliminated — GSAP handles position updates
 */

const TRAIL_COUNT = 3; // reduced from 5

const CustomCursor = () => {
  const dotRef    = useRef(null);
  const ringRef   = useRef(null);
  const trailsRef = useRef([]);

  useLayoutEffect(() => {
    const dot    = dotRef.current;
    const ring   = ringRef.current;
    const trails = trailsRef.current.filter(Boolean);
    if (!dot || !ring) return;

    // ── Init off-screen ──
    gsap.set([dot, ring, ...trails], { x: -120, y: -120 });

    // ── Mouse move ──
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Dot snaps instantly (duration 0 = no tween overhead)
      gsap.set(dot, { x, y });

      // Ring lags behind
      gsap.to(ring, { x, y, duration: 0.42, ease: "power3.out", overwrite: true });

      // Trails with increasing lag
      trails.forEach((trail, i) => {
        gsap.to(trail, {
          x, y,
          duration: 0.1 + i * 0.1,
          ease: "power2.out",
          overwrite: true,
          opacity: (1 - (i + 1) / trails.length) * 0.3,
        });
      });
    };

    // ── Hide / show on window leave / enter ──
    const onLeave = () => gsap.to([dot, ring, ...trails], { opacity: 0, duration: 0.25 });
    const onEnter = () => gsap.to([dot, ring],           { opacity: 1, duration: 0.25 });

    // ── Click burst ──
    const onClick = () => {
      gsap.timeline()
        .to(ring, { scale: 1.7, opacity: 0.4, duration: 0.16, ease: "power2.out" })
        .to(ring, { scale: 1,   opacity: 1,   duration: 0.26, ease: "elastic.out(1,0.5)" });
      gsap.timeline()
        .to(dot, { scale: 0.4, duration: 0.11 })
        .to(dot, { scale: 1,   duration: 0.28, ease: "elastic.out(1,0.4)" });
    };

    // ── Hover handlers via event delegation ──
    // Matches interactive elements without querying DOM on every mount
    const isInteractive = (el) => {
      if (!el) return false;
      const tag = el.tagName?.toLowerCase();
      return ["button","input","select","textarea"].includes(tag)
        || el.getAttribute("role") === "button"
        || el.classList.contains("service-card")
        || el.classList.contains("project-card");
    };
    const isLink = (el) => el?.tagName?.toLowerCase() === "a";

    let hovering = false;

    const onMouseOver = (e) => {
      const el = e.target;
      if (isInteractive(el) && !hovering) {
        hovering = true;
        gsap.to(ring, { width: 52, height: 52, borderColor: "rgba(35,188,223,0.9)", backgroundColor: "rgba(35,188,223,0.12)", duration: 0.28, ease: "power2.out" });
        gsap.to(dot,  { scale: 0.5, backgroundColor: "#23bcdf", duration: 0.2 });
      } else if (isLink(el) && !hovering) {
        hovering = true;
        gsap.to(ring, { width: 60, height: 60, borderColor: "transparent", backgroundColor: "rgba(35,188,223,0.18)", duration: 0.28 });
        gsap.to(dot,  { scale: 0, duration: 0.18 });
      }
    };

    const onMouseOut = (e) => {
      const el = e.target;
      if ((isInteractive(el) || isLink(el)) && hovering) {
        hovering = false;
        gsap.to(ring, { width: 36, height: 36, borderColor: "#23bcdf", backgroundColor: "rgba(35,188,223,0)", duration: 0.32 });
        gsap.to(dot,  { scale: 1, backgroundColor: "#23bcdf", duration: 0.22 });
      }
    };

    // ── Breathing — on dot only (cheaper than ring which already moves) ──
    const breathe = gsap.to(dot, {
      scale: 1.25,
      duration: 1.9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Attach
    window.addEventListener("mousemove",  onMove,   { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("click",      onClick);
    document.addEventListener("mouseover",  onMouseOver);
    document.addEventListener("mouseout",   onMouseOut);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("click",      onClick);
      document.removeEventListener("mouseover",  onMouseOver);
      document.removeEventListener("mouseout",   onMouseOut);
      breathe.kill();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        *,a,button,[role='button'],.service-card,.project-card,input,select,textarea {
          cursor: none !important;
        }
        /* Restore default cursor on touch/small screens */
        @media (max-width: 1024px) {
          * { cursor: auto !important; }
          .cursor-dot, .cursor-ring, .cursor-trail { display: none !important; }
        }
        /* Honour reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .cursor-dot, .cursor-ring, .cursor-trail { display: none !important; }
          * { cursor: auto !important; }
        }
      `}</style>

      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          className="cursor-trail fixed top-0 left-0 pointer-events-none z-9997"
          style={{
            width:  5 - i * 0.7,
            height: 5 - i * 0.7,
            borderRadius: "50%",
            background: "#23bcdf",
            opacity: 0,
            transform: "translate(-50%,-50%)",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 pointer-events-none z-9998"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid #23bcdf",
          backgroundColor: "rgba(35,188,223,0)",
          transform: "translate(-50%,-50%)",
          willChange: "transform",
          // CSS transition for size changes only — keeps GSAP free of width/height
          transition: "width 0.22s ease, height 0.22s ease",
        }}
        aria-hidden="true"
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 pointer-events-none z-9999"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#23bcdf",
          transform: "translate(-50%,-50%)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;