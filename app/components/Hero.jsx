"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist } from "../fonts";

const images = [
  "https://res.cloudinary.com/dlurrugno/image/upload/v1770205987/supps_vm41cl.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1778329047/tmg_sp66wu.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1778329047/mag_cahxej.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1778329076/free30_tkjqe8.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1778329174/next_poinns.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1778329174/javewe_k6n8sg.png",
];

const LOOP = [...images, ...images, ...images];
const START = images.length;
const GAP = 16;             


function getCardsPerView() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function Hero() {
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const headingLine3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const bgGradientRef = useRef(null);
  const bgRevealRef = useRef(null);

  const wrapRef = useRef(null);   
  const trackRef = useRef(null); 
  const idxRef = useRef(START);   
  const busyRef = useRef(false);  
  const pausedRef = useRef(false);

  /**
   * Applies scale + blur to every card so the centre one is in focus and
   * the surrounding cards are dimmed.
   *
   * @param {boolean} animate  true  → smooth GSAP tween (0.55 s)
   *                           false → instant gsap.set (after teleport / resize)
   */
  const updateFocus = (animate = true) => {
    const cards = trackRef.current?.children;
    if (!cards) return;

    const cpv = getCardsPerView();
    const centerOffset = Math.floor(cpv / 2);
    const centerIdx = idxRef.current + centerOffset;

    Array.from(cards).forEach((card, i) => {
      const isCenter = i === centerIdx;
      const props = {
        scale: isCenter ? 1 : 0.88,
        filter: isCenter ? "blur(0px)" : "blur(3px)",
      };

      if (animate) {
        gsap.to(card, {
          ...props,
          duration: 0.55,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      } else {
        gsap.set(card, props);
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current,
          subRef.current, btnsRef.current,
        ],
        { opacity: 0, y: 40, filter: "blur(10px)" }
      );
      gsap.set(bgGradientRef.current, { opacity: 0.6 });
      gsap.set(bgRevealRef.current, { opacity: 0.4 });

      const tl = gsap.timeline();
      tl.to(headingLine1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0)
        .to(headingLine2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.15)
        .to(headingLine3Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.3)
        .to(subRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.45)
        .to(btnsRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.6)
        .to(bgGradientRef.current, { opacity: 0, duration: 1.2, ease: "power2.out" }, 1.2)
        .to(bgRevealRef.current, { opacity: 1, duration: 1.3, ease: "power2.out" }, 1.2);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const snap = (animate = false) => {
      const firstCard = trackRef.current?.firstElementChild;
      if (!firstCard || !trackRef.current) return;

      const itemW = firstCard.offsetWidth;
      const target = -(idxRef.current * (itemW + GAP));

      if (animate) {
        gsap.to(trackRef.current, { x: target, duration: 0.5, ease: "power2.inOut" });
      } else {
        gsap.set(trackRef.current, { x: target });
      }

      updateFocus(animate);
    };

    const raf = requestAnimationFrame(() => {
      snap(false);
      gsap.to(wrapRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" });
    });

    const ro = new ResizeObserver(() => snap(false));
    if (wrapRef.current) ro.observe(wrapRef.current);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  useEffect(() => {
    const advance = () => {
      if (pausedRef.current || busyRef.current || !trackRef.current) return;
      busyRef.current = true;

      const firstCard = trackRef.current.firstElementChild;
      const itemW = firstCard?.offsetWidth ?? 0;
      const next = idxRef.current + 1;
      idxRef.current = next;

      updateFocus(true);

      gsap.to(trackRef.current, {
        x: -(next * (itemW + GAP)),
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: () => {
          if (idxRef.current >= images.length * 2) {
            idxRef.current = START;
            gsap.set(trackRef.current, { x: -(START * (itemW + GAP)) });
            updateFocus(false);
          }
          busyRef.current = false;
        },
      });
    };

    const id = setInterval(advance, 2000);
    return () => clearInterval(id);
  }, []); 

  // ── hover handlers (attached as React props on wrapRef's JSX element) ──────
  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <section
      className={`relative min-h-screen w-full flex items-start overflow-hidden bg-[#010504] ${urbanist.className}`}
    >

      <div
        ref={bgRevealRef}
        className="absolute inset-0 w-full h-full"
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
      <div className="absolute bg-black inset-0 w-full h-full opacity-40" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-5 pointer-events-none"
        style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(1,5,4,0.6) 100%)" }}
      />
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(45,232,176,0.1) 0%,transparent 70%)" }}
      />
      <div
        ref={bgGradientRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 50%,rgba(45,232,176,0.05) 0%,transparent 60%)" }}
      />

      <div className="relative z-10 w-full max-w-500 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
        <div className="w-full flex flex-col items-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-semibold leading-none tracking-tight text-white mb-4 sm:mb-6">
            <span ref={headingLine1Ref} className="block">
              Crafting high-performance
            </span>
            <span
              ref={headingLine2Ref}
              className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent"
            >
              Digital experiences and
            </span>
            <span
              ref={headingLine3Ref}
              className="block bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/60 bg-clip-text text-transparent"
            >
              Bespoke web solutions
            </span>
          </h1>

          <div className="w-full mb-8 sm:mb-12">


            <div
              ref={wrapRef}
              className="carousel-wrap w-full overflow-hidden opacity-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={trackRef}
                className="flex"
                style={{
                  gap: `${GAP}px`,
                  willChange: "transform",
                  transform: "translate3d(0,0,0)",
                }}
              >
                {LOOP.map((src, i) => (
                  <div key={i} className="carousel-card shrink-0">
                    <div
                      className="w-full h-full aspect-video rounded-2xl overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        transformOrigin: "center center",
                      }}
                    >
                      <img
                        src={src}
                        alt={`Project ${(i % images.length) + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                        loading={i >= START && i < START + images.length ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              /* ── card dimensions — slightly larger than before ── */
              .carousel-card {
                width:            calc(100vw - 32px);
                height:           340px;
                transform-origin: center center;
              }
              @media (min-width: 640px) {
                .carousel-card {
                  width:  calc((100vw - 48px  - ${GAP}px)     / 2);
                  height: 400px;
                }
              }
              @media (min-width: 1024px) {
                .carousel-card {
                  width:  calc((100vw - 64px  - ${GAP * 2}px) / 3);
                  height: 360px;
                }
              }

              /* ── edge fade mask ── */
              .carousel-wrap {
                -webkit-mask-image: linear-gradient(
                  to right,
                  transparent   0%,
                  black         6%,
                  black        94%,
                  transparent 100%
                );
                mask-image: linear-gradient(
                  to right,
                  transparent   0%,
                  black         6%,
                  black        94%,
                  transparent 100%
                );
              }

              @media (min-width: 640px) {
                .carousel-wrap {
                  -webkit-mask-image: linear-gradient(
                    to right,
                    transparent    0%,
                    black         12%,
                    black         88%,
                    transparent  100%
                  );
                  mask-image: linear-gradient(
                    to right,
                    transparent    0%,
                    black         12%,
                    black         88%,
                    transparent  100%
                  );
                }
              }

              @media (min-width: 1024px) {
                .carousel-wrap {
                  -webkit-mask-image: linear-gradient(
                    to right,
                    transparent    0%,
                    black         20%,
                    black         80%,
                    transparent  100%
                  );
                  mask-image: linear-gradient(
                    to right,
                    transparent    0%,
                    black         20%,
                    black         80%,
                    transparent  100%
                  );
                }
              }
            `}</style>
          </div>

          <div
            ref={btnsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-black/80 transition-all duration-200 hover:brightness-110 active:scale-95 bg-[#2de8b0] shadow-lg shadow-[#2de8b0]/25">
                Contact us
              </button>
            </a>
            <a
              href="https://calendly.com/afterrenderagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10">
                Request a quote
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}