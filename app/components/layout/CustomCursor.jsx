"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const trailsRef = useRef([]);
    const posRef = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // ── Init position off-screen ──
        gsap.set([dot, ring], { x: -100, y: -100 });

        // ── Mouse move: dot snaps instantly, ring follows with lag ──
        const onMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY };

            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });

            gsap.to(ring, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.45,
                ease: "power3.out",
            });

            // Animate trail dots
            trailsRef.current.forEach((trail, i) => {
                if (!trail) return;
                gsap.to(trail, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.12 + i * 0.08,
                    ease: "power2.out",
                    opacity: (1 - (i + 1) / trailsRef.current.length) * 0.35,
                });
            });
        };

        // ── Hide/show on window leave/enter ──
        const onLeave = () =>
            gsap.to([dot, ring, ...trailsRef.current], { opacity: 0, duration: 0.3 });
        const onEnter = () =>
            gsap.to([dot, ring], { opacity: 1, duration: 0.3 });

        // ── Click burst ──
        const onClick = () => {
            gsap.timeline()
                .to(ring, { scale: 1.8, opacity: 0.4, duration: 0.18, ease: "power2.out" })
                .to(ring, { scale: isHoveringRef.current ? 1.6 : 1, opacity: 1, duration: 0.28, ease: "elastic.out(1, 0.5)" });
            gsap.timeline()
                .to(dot, { scale: 0.4, duration: 0.12 })
                .to(dot, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" });
        };

        // ── Hover: interactive elements ──
        const onHoverIn = (e) => {
            isHoveringRef.current = true;
            const el = e.currentTarget;

            // Magnetic pull toward element center
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            gsap.to(ring, {
                width: 56,
                height: 56,
                borderColor: "rgba(35,188,223,0.9)",
                backgroundColor: "rgba(35,188,223,0.12)",
                mixBlendMode: "normal",
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(dot, {
                scale: 0.5,
                backgroundColor: "#23bcdf",
                duration: 0.2,
            });
        };

        const onHoverOut = () => {
            isHoveringRef.current = false;
            gsap.to(ring, {
                width: 36,
                height: 36,
                borderColor: "#23bcdf",
                backgroundColor: "rgba(35,188,223,0)",
                duration: 0.35,
                ease: "power2.out",
            });
            gsap.to(dot, {
                scale: 1,
                backgroundColor: "#23bcdf",
                duration: 0.25,
            });
        };

        // ── Special: text links get an underline-stretch cursor ──
        const onLinkIn = (e) => {
            isHoveringRef.current = true;
            gsap.to(ring, {
                width: 64,
                height: 64,
                borderColor: "transparent",
                backgroundColor: "rgba(35,188,223,0.18)",
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(dot, { scale: 0, duration: 0.2 });
        };

        const onLinkOut = () => {
            isHoveringRef.current = false;
            gsap.to(ring, {
                width: 36,
                height: 36,
                borderColor: "#23bcdf",
                backgroundColor: "rgba(35,188,223,0)",
                duration: 0.35,
            });
            gsap.to(dot, { scale: 1, duration: 0.25 });
        };

        // ── Attach listeners ──
        const buttons = document.querySelectorAll("button, [role='button'], .service-card, .project-card, input, select, textarea");
        const links = document.querySelectorAll("a");

        buttons.forEach((el) => {
            el.addEventListener("mouseenter", onHoverIn);
            el.addEventListener("mouseleave", onHoverOut);
        });
        links.forEach((el) => {
            el.addEventListener("mouseenter", onLinkIn);
            el.addEventListener("mouseleave", onLinkOut);
        });

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("mouseenter", onEnter);
        window.addEventListener("click", onClick);

        // ── Idle breathing animation on ring ──
        const breathe = gsap.to(ring, {
            scale: 1.12,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            paused: false,
        });

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("mouseenter", onEnter);
            window.removeEventListener("click", onClick);
            buttons.forEach((el) => {
                el.removeEventListener("mouseenter", onHoverIn);
                el.removeEventListener("mouseleave", onHoverOut);
            });
            links.forEach((el) => {
                el.removeEventListener("mouseenter", onLinkIn);
                el.removeEventListener("mouseleave", onLinkOut);
            });
            breathe.kill();
        };
    }, []);

    const TRAIL_COUNT = 5;

    return (
        <>
            <style jsx global>{`
        *,
        a,
        button,
        [role='button'],
        .service-card,
        .project-card,
        input,
        select,
        textarea {
          cursor: none !important;
        }

        @media (max-width: 1024px) {
          *,
          a,
          button,
          [role='button'],
          .service-card,
          .project-card {
            cursor: auto !important;
          }
          .cursor-dot,
          .cursor-ring,
          .cursor-trail {
            display: none !important;
          }
        }
      `}</style>

            {/* Trail dots */}
            {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (trailsRef.current[i] = el)}
                    className="cursor-trail fixed top-0 left-0 pointer-events-none z-9997"
                    style={{
                        width: 5 - i * 0.6,
                        height: 5 - i * 0.6,
                        borderRadius: "50%",
                        background: "#23bcdf",
                        opacity: 0,
                        transform: "translate(-50%, -50%)",
                        willChange: "transform",
                    }}
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
                    transform: "translate(-50%, -50%)",
                    willChange: "transform",
                    backdropFilter: "blur(0px)",
                    transition: "width 0.25s ease, height 0.25s ease",
                }}
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
                    transform: "translate(-50%, -50%)",
                    willChange: "transform",
                }}
            />
        </>
    );
};

export default CustomCursor;