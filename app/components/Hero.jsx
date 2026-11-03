"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { urbanist } from "../fonts";
import { TiltedGridHero } from "./ui/tilted-grid-hero";

// Module-level so the reference is stable (the band preloads on `images`).
const images = [
  {
    src: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_1000/v1770205987/supps_vm41cl.png",
    alt: "Supplements store project",
  },
  {
    src: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_1000/v1778329047/tmg_sp66wu.png",
    alt: "TMG website project",
  },
  {
    src: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_1000/v1778329047/mag_cahxej.png",
    alt: "Magazine website project",
  },
  {
    src: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_1000/v1778329076/free30_tkjqe8.png",
    alt: "Free30 landing page project",
  },
  {
    src: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_1000/v1778329174/next_poinns.png",
    alt: "Next.js web app project",
  },
  {
    src: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_1000/v1778329174/javewe_k6n8sg.png",
    alt: "Javewe website project",
  },
];

export default function Hero() {
  const bgGradientRef = useRef(null);
  const bgRevealRef = useRef(null);

  useEffect(() => {
    // Text entrance is pure CSS (.hero-in) so the SSR'd heading is visible
    // at first paint and counts as LCP; only decorative layers animate here.
    const ctx = gsap.context(() => {
      gsap.set(bgGradientRef.current, { opacity: 0.6 });
      gsap.set(bgRevealRef.current, { opacity: 0.4 });

      const tl = gsap.timeline();
      tl.to(bgGradientRef.current, { opacity: 0, duration: 1.2, ease: "power2.out" }, 1.2)
        .to(bgRevealRef.current, { opacity: 1, duration: 1.3, ease: "power2.out" }, 1.2);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative min-h-fit sm:min-h-100 w-full flex items-start overflow-hidden bg-[#010504] ${urbanist.className}`}
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

      <div className="relative z-10 w-full max-w-500 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
        <div className="w-full flex flex-col items-center">

          <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-semibold leading-[1.1] tracking-tight text-white mb-4 sm:mb-6 px-2">
            <span className="hero-in block wrap-break-word">
              Building high impact
            </span>
            <span className="hero-in hero-in-2 block bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/60 bg-clip-text text-transparent wrap-break-word">
              digital experiences.
            </span>
          </h1>

          <div className="w-full mb-6 sm:mb-12">
            {/* Edge-to-edge band, broken out of the content padding. */}
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
              <TiltedGridHero
                images={images}
                tileHeight={72}
                gap={14}
                axis={50}
                curve={45}
                fade={14}
                speed={4}
                className="w-full h-60 sm:h-90 lg:h-110"
              />
            </div>

            <Link
              href="/portfolio"
              className="inline-block mt-4 text-sm text-white/60 hover:text-[#2de8b0] transition-colors"
            >
              View our work →
            </Link>
          </div>

          <div className="hero-in hero-in-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto min-h-13">
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-lg text-xs min-[360px]:text-sm sm:text-base font-bold text-black transition-all duration-200 hover:brightness-110 active:scale-95 bg-[#2de8b0] shadow-lg shadow-[#2de8b0]/25 cursor-pointer whitespace-nowrap text-center block sm:inline-block"
            >
              Contact us
            </a>
            <a
              href="https://calendly.com/devskarnel/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-lg text-xs min-[360px]:text-sm sm:text-base font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 cursor-pointer whitespace-nowrap text-center block sm:inline-block"
            >
              Request a quote
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
