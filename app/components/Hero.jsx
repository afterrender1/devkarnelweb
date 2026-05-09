"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist } from "../fonts";

export default function Hero() {
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const headingLine3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const bgGradientRef = useRef(null);
  const bgRevealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current, subRef.current, btnsRef.current], {
        opacity: 0, y: 40, filter: "blur(10px)",
      });
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

  return (
    <section className={`relative min-h-screen w-full flex items-start overflow-hidden bg-[#010504] ${urbanist.className}`}>
      <div ref={bgRevealRef} className="absolute inset-0 w-full h-full" style={{
        background: `radial-gradient(circle at 10% 70%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, transparent 50%), radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%), radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%), radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%), linear-gradient(180deg, #24E8B2 0%, #1BC497 5%, #0F7C6E 40%, #0A4A42 60%, #062B24 80%, #010504 100%)`,
        willChange: "opacity",
      }} />
      <div className="absolute bg-black inset-0 w-full h-full opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-5 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(1,5,4,0.6) 100%)",
      }} />
      <div className="absolute inset-0 w-full h-full opacity-20" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)",
      }} />
      <div ref={bgGradientRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{
        background: "radial-gradient(circle at 30% 50%, rgba(45,232,176,0.05) 0%, transparent 60%)",
      }} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold leading-none tracking-tight text-white mb-4 sm:mb-6">
            <span ref={headingLine1Ref} className="block">Crafting high-performance</span>
            <span ref={headingLine2Ref} className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Digital experiences and</span>
            <span ref={headingLine3Ref} className="block bg-linear-to-r from-[#2de8b0] to-[#2de8b0]/60 bg-clip-text text-transparent">Bespoke web solutions</span>
          </h1>
          {/* <p ref={subRef} className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Generate application-specific answers and demonstrate performance with speed, clarity, and precision.
          </p> */}

          <div className="w-full max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl shadow-[#2de8b0]/20"
                src="https://www.youtube.com/embed/L2PQKda8bj0?si=KDZ96sJ7xF3N8_sw&autoplay=1&loop=1"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div ref={btnsRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-black/80 transition-all duration-200 hover:brightness-110 active:scale-95 bg-[#2de8b0] shadow-lg shadow-[#2de8b0]/25">
                Contact us
              </button>
            </a>
            <a href="https://calendly.com/afterrenderagency/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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

