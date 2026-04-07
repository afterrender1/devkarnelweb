"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });

/* ─── Photo data ─── */
const LEFT_COL_A  = [{ id: 1,  src: "/images/clients/bighots.png",    mt: "mt-16", h: "h-32", w: "w-[90px]",  name: "James R." }];
const LEFT_COL_B  = [{ id: 2,  src: "/images/clients/crypto.png",     mt: "mt-4",  h: "h-36", w: "w-[110px]", name: "Marco L." }, { id: 3, src: "/images/clients/deborah.png", mt: "mt-4", h: "h-24", w: "w-[90px]", name: "Aisha K." }];
const RIGHT_COL_A = [{ id: 6,  src: "/images/clients/finep.png",      mt: "mt-8",  h: "h-28", w: "w-[110px]", name: "Claire M." }, { id: 7, src: "/images/clients/metabolic.png", mt: "mt-3", h: "h-32", w: "w-[110px]", name: "Daniel W." }];
const RIGHT_COL_B = [{ id: 9,  src: "/images/clients/traction.png",   mt: "mt-20", h: "h-28", w: "w-[90px]",  name: "Ethan B." }];
const ALL_PHOTOS  = [...LEFT_COL_A, ...LEFT_COL_B, ...RIGHT_COL_A, ...RIGHT_COL_B];

/* ─── Single animated photo ─── */
const Photo = ({ photo, fromX }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.willChange = "transform, opacity";
    gsap.set(el, { x: fromX, opacity: 0, scale: 0.9 });

    // Scroll entrance
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 95%",
      end: "top 42%",
      scrub: 1.2,
      onUpdate: (s) => {
        gsap.set(el, { x: fromX * (1 - s.progress), opacity: s.progress, scale: 0.9 + 0.1 * s.progress });
      },
      onLeave: () => { el.style.willChange = "auto"; },
    });

    // Idle float — keep it subtle (4–9px range)
    const floatTween = gsap.to(el, {
      y: `+=${4 + (photo.id % 4) * 2}`,
      duration: 2.4 + (photo.id % 5) * 0.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: photo.id * 0.12,
    });

    return () => {
      st.kill();
      floatTween.kill();
    };
  }, [fromX, photo.id]);

  return (
    <div
      ref={ref}
      className={`${photo.mt} ${photo.h} ${photo.w} rounded-2xl overflow-hidden bg-gray-100 group relative shrink-0`}
      style={{ willChange: "transform, opacity", opacity: 0 }}
    >
      <Image
        src={photo.src}
        alt={`Client ${photo.name}`}
        fill
        sizes="110px"
        className="object-cover"
      />
      {/* Name reveal on hover */}
      <div
        className="absolute inset-0 flex items-end pb-2.5 px-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,0.52) 0%,transparent 60%)" }}
        aria-hidden="true"
      >
        <p className="text-white text-[10px] font-semibold leading-tight tracking-wide">{photo.name}</p>
      </div>
    </div>
  );
};

/* ─── Photo Column ─── */
const PhotoCol = ({ photos, fromX, className = "" }) => (
  <div className={`flex flex-col items-center ${className}`}>
    {photos.map((p) => <Photo key={p.id} photo={p} fromX={fromX} />)}
  </div>
);

/* ─── Vertical divider line ─── */
const VLine = ({ className = "" }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      end: "top 25%",
      scrub: 1.4,
      onUpdate: (s) => gsap.set(el, { scaleY: s.progress, opacity: s.progress * 0.35 }),
    });

    return () => st.kill();
  }, []);

  return <div ref={ref} className={`w-px bg-gray-300 self-stretch ${className}`} style={{ opacity: 0, minHeight: "220px" }} aria-hidden="true" />;
};

/* ─── Mobile photo grid ─── */
const MobilePhotoGrid = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y: 18, opacity: 0 });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      end: "top 65%",
      scrub: 1,
      onUpdate: (s) => gsap.set(el, { y: 18 * (1 - s.progress), opacity: s.progress }),
    });

    return () => st.kill();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-2.5 w-full mt-8" style={{ opacity: 0 }}>
      {ALL_PHOTOS.map((p) => (
        <div key={p.id} className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square">
          <Image src={p.src} alt={`Client ${p.name}`} fill sizes="33vw" className="object-cover" />
          <div
            className="absolute inset-0 flex items-end pb-1.5 px-1.5"
            style={{ background: "linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 55%)" }}
            aria-hidden="true"
          >
            <p className="text-white text-[9px] font-semibold leading-tight">{p.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── Shared CTA button ─── */
const SuccessStoriesBtn = ({ wide = false }) => (
  <div className="flex justify-center cursor-pointer mt-14">
    <div className="relative group">
      <div className={`relative ${wide ? "w-85" : "w-80"} h-14 overflow-hidden rounded-xl bg-[#00ADB5] z-10`}>
        {/* Shimmer sweep */}
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[120%] ease-in transition-transform duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12 pointer-events-none" />
        <div className="absolute inset-0.5 rounded-xl overflow-hidden flex items-center justify-center">
          <button
            style={{ background: "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)" }}
            className="cursor-pointer font-semibold text-base lg:text-lg h-full w-full px-10 lg:px-16 py-3 rounded-xl text-white"
          >
            Read Success Stories
          </button>
        </div>
        {/* Glow ring — only renders on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="w-full h-24 bg-linear-to-r from-green-500 to-yellow-500 blur-[30px] group-hover:animate-spin" />
        </div>
      </div>
    </div>
  </div>
);

/* ─── Center panel (shared heading + CTA) ─── */
const CenterPanel = ({ headingRef }) => (
  <div
    ref={headingRef}
    className="flex flex-col items-center text-center shrink-0 py-16 xl:py-20 px-8 xl:px-1"
    style={{ minWidth: "280px", maxWidth: "400px", width: "100%" }}
  >
    <div className="h-anim inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-7">
      <span className="text-gray-500 font-medium tracking-[0.16em] uppercase" style={{ fontSize: "10.5px" }}>Testimonials</span>
    </div>

    <h2 className="h-anim font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-1.5" style={{ fontSize: "clamp(1.75rem,2.8vw,2.6rem)" }}>
      Trusted by{" "}
      <span style={{ background: "linear-gradient(135deg,#1a73e8 0%,#0f9d58 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        Leaders
      </span>
    </h2>

    <h2 className="h-anim font-extrabold text-gray-400 leading-[1.08] tracking-tight mb-6" style={{ fontSize: "clamp(1.75rem,2.8vw,2.6rem)" }}>
      from various industries
    </h2>

    <p className="h-anim text-gray-400 leading-relaxed mb-10" style={{ fontSize: "14px", maxWidth: "270px" }}>
      Learn why professionals trust our solutions to complete their customer journeys.
    </p>

    <SuccessStoriesBtn wide />
  </div>
);

/* ─── Main ─── */
const Testimonials = () => {
  const sectionRef   = useRef(null);
  const desktopHeadingRef = useRef(null);

  // Animate desktop center headings
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = desktopHeadingRef.current?.querySelectorAll(".h-anim");
      if (els?.length) {
        gsap.fromTo(els, { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: desktopHeadingRef.current, start: "top 85%", once: true },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tesimonials" ref={sectionRef} aria-label="Testimonials" className={`relative w-full overflow-hidden ${urbanist.className}`}>

      {/* Dot grid background — pointer-events-none, no JS */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#e5e7eb 1px,transparent 1px)", backgroundSize: "30px 30px", opacity: 0.55 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 62% 68% at 50% 50%,white 22%,rgba(255,255,255,0.55) 55%,transparent 100%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-350 mx-auto px-4 sm:px-6 lg:px-10">

        {/* ════ DESKTOP (lg+) ════ */}
        <div className="hidden lg:flex items-start justify-center py-14 xl:py-16">
          <div className="flex items-start shrink-0">
            <PhotoCol photos={LEFT_COL_A} fromX={-90} className="pt-14" />
            <VLine className="mx-3.5" />
            <PhotoCol photos={LEFT_COL_B} fromX={-55} />
          </div>
          <VLine className="mx-5 xl:mx-8" />
          <CenterPanel headingRef={desktopHeadingRef} />
          <VLine className="mx-5 xl:mx-8" />
          <div className="flex items-start shrink-0">
            <PhotoCol photos={RIGHT_COL_A} fromX={55} />
            <VLine className="mx-3.5" />
            <PhotoCol photos={RIGHT_COL_B} fromX={90} className="pt-14" />
          </div>
        </div>

        {/* ════ MOBILE / TABLET (< lg) ════ */}
        <div className="flex lg:hidden flex-col items-center text-center py-14 sm:py-16 px-2">

          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6"
            ref={(el) => {
              if (!el) return;
              gsap.set(el, { y: 14, opacity: 0 });
              ScrollTrigger.create({ trigger: el, start: "top 90%", end: "top 62%", scrub: 1, once: true,
                onUpdate: (s) => gsap.set(el, { y: 14 * (1 - s.progress), opacity: s.progress }),
              });
            }}
          >
            <span className="text-gray-500 font-medium tracking-[0.16em] uppercase" style={{ fontSize: "10.5px" }}>Testimonials</span>
          </div>

          {/* Headings */}
          <div
            ref={(el) => {
              if (!el) return;
              gsap.set(el, { y: 18, opacity: 0 });
              ScrollTrigger.create({ trigger: el, start: "top 90%", end: "top 60%", scrub: 1, once: true,
                onUpdate: (s) => gsap.set(el, { y: 18 * (1 - s.progress), opacity: s.progress }),
              });
            }}
          >
            <h2 className="font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-1" style={{ fontSize: "clamp(1.9rem,7vw,2.5rem)" }}>
              Trusted by{" "}
              <span style={{ background: "linear-gradient(135deg,#1a73e8 0%,#0f9d58 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Leaders
              </span>
            </h2>
            <h2 className="font-extrabold text-gray-400 leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(1.9rem,7vw,2.5rem)" }}>
              from various industries
            </h2>
          </div>

          {/* Subtitle */}
          <div
            ref={(el) => {
              if (!el) return;
              gsap.set(el, { y: 14, opacity: 0 });
              ScrollTrigger.create({ trigger: el, start: "top 90%", end: "top 65%", scrub: 1, once: true,
                onUpdate: (s) => gsap.set(el, { y: 14 * (1 - s.progress), opacity: s.progress }),
              });
            }}
          >
            <p className="text-gray-400 leading-relaxed mb-8 mx-auto" style={{ fontSize: "14px", maxWidth: "300px" }}>
              Learn why professionals trust our solutions to complete their customer journeys.
            </p>
          </div>

          <SuccessStoriesBtn />
          <MobilePhotoGrid />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;