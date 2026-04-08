"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail , Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });

const LINKS = {
  Company: ["About Us","Services","Community","Testimonial"],
  Support:  ["Help Center","Tweet @ Us","Webinars","Feedback"],
  Links:    ["Courses","Become Teacher","Service","All in One"],
};

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter,  href: "#", label: "Twitter" },
  { Icon: Instagram,href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

const BOTTOM_LINKS = ["Privacy Policy","Terms of Use"];

const GRADIENT_BG = "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)";
const BANNER_BG   = "linear-gradient(110deg,#084948 0%,#0c7371 60%,#159e9b 100%)";

const SubscribeBtn = () => (
  <button
    type="submit"
    style={{ background: GRADIENT_BG }}
    className="text-white font-semibold px-4 py-1.5 rounded-full transition-[box-shadow,transform] duration-200 hover:shadow-md active:scale-95 shrink-0 text-[11.5px] sm:text-[12.5px] whitespace-nowrap"
  >
    Subscribe
  </button>
);

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const year = new Date().getFullYear();




const Footer = () => {
  const [email, setEmail] = useState("");
  const footerRef  = useRef(null);
  const bannerRef  = useRef(null);
  const imageRef   = useRef(null);
  const linksRef   = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(bannerRef.current,
        { y: 55, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, ease: "none",
          scrollTrigger: { trigger: bannerRef.current, start: "top 90%", end: "top 55%", scrub: 1.1 } }
      );

      gsap.fromTo(imageRef.current,
        { x: -45, opacity: 0 },
        { x: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: bannerRef.current, start: "top 88%", end: "top 50%", scrub: 1 } }
      );

      gsap.to(imageRef.current, { y: -8, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const colEls = linksRef.current?.querySelectorAll(".col-anim");
      if (colEls?.length) {
        gsap.fromTo(colEls,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.09, duration: 0.65, ease: "power2.out",
            scrollTrigger: { trigger: linksRef.current, start: "top 90%", once: true } }
        );
      }

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={`w-full pt-32 ${urbanist.className}`}>

      <div className="max-w-245 -mb-22 mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <div className="relative" style={{ isolation: "isolate" }}>

          <div
            ref={imageRef}
            className="absolute hidden sm:block pointer-events-none"
            style={{ bottom: 0, left: "-10px", width: "clamp(200px,22vw,290px)", transform: "translateY(-10%)", zIndex: 20, opacity: 0, willChange: "transform, opacity" }}
            aria-hidden="true"
          >
            <Image
              src="/images/footer.png"
              alt=""
              width={290}
              height={350}
              className="w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }}
            />
          </div>

          <div
            ref={bannerRef}
            className="relative rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch"
            style={{ background: BANNER_BG, minHeight: "200px", opacity: 0 }}
          >
            <div className="absolute top-5 left-[35%] w-2 h-2 rounded-full bg-white/40 hidden sm:block" aria-hidden="true" />
            <div className="absolute top-10 left-[40%] w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block" aria-hidden="true" />
            <div className="absolute top-6 left-[38%] w-1 h-1 rounded-full bg-white/50 hidden sm:block" aria-hidden="true" />

            <div className="flex sm:hidden flex-col items-center w-full px-5 pt-7 pb-8 gap-5">
              <div className="relative h-36 w-auto aspect-3/4">
                <Image src="/images/footer.png" alt="Newsletter illustration" fill className="object-contain drop-shadow-xl" />
              </div>
              <div className="flex flex-col items-center text-center w-full gap-4">
                <div>
                  <h3 className="font-bold text-white leading-tight text-[1.15rem] mb-1.5">
                    Subscribe to our newsletter to get updates to our latest collections
                  </h3>
                  <p className="text-white/70 text-[12.5px]">Get 20% off on your first order just by subscribing to our newsletter</p>
                </div>
                <form className="flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 w-full max-w-sm shadow-sm" onSubmit={(e) => e.preventDefault()}>
                  <Mail size={14} className="text-gray-400 shrink-0" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[12.5px] text-gray-700 placeholder:text-gray-300 min-w-0"
                    aria-label="Email address for newsletter"
                    autoComplete="email"
                  />
                  <SubscribeBtn />
                </form>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  You will be able to unsubscribe at any time.{" "}
                  Read our privacy policy{" "}
                  <a href="#" className="underline text-white/65 hover:text-white transition-colors">here</a>
                </p>
              </div>
            </div>

            <div
              className="hidden sm:flex flex-col w-full px-8 py-10"
              style={{ paddingLeft: "clamp(20px,24vw,310px)" }}
            >
              <h3 className="font-bold text-white leading-tight mb-2" style={{ fontSize: "clamp(1.2rem,2.6vw,1.65rem)" }}>
                Subscribe to our newsletter to get<br />updates to our latest collections
              </h3>
              <p className="text-white/75 text-[11px] mb-5">Get 20% off on your first order just by subscribing to our newsletter</p>

              <form className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 w-full max-w-105 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <Mail size={15} className="text-gray-400 shrink-0" aria-hidden="true" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[11px] text-gray-700 placeholder:text-gray-300 min-w-0"
                  aria-label="Email address for newsletter"
                  autoComplete="email"
                />
                <SubscribeBtn />
              </form>

              <p className="text-white/55 text-[11.5px] mt-3 leading-relaxed">
                You will be able to unsubscribe at any time.<br />
                Read our privacy policy{" "}
                <a href="#" className="underline text-white/70 hover:text-white transition-colors duration-150">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={linksRef}
        className="max-w-350 bg-white mx-auto px-4 sm:px-18 py-28 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0"
      >
        <div className="col-span-2 sm:col-span-3 lg:col-span-1 col-anim flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src="/dklogo.png" alt="DevsKarnel logo" width={124} height={24} className="w-36 h-12 object-contain" />
         
          </div>
          <p className="text-gray-400 text-[11px] leading-relaxed max-w-50">
Secure, SEO-optimized, and user-centric platforms — from WordPress to Shopify — crafted for businesses worldwide.          </p>

          <nav aria-label="Social media links" className="flex items-center gap-3 mt-1 flex-wrap">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#3a86ff] flex items-center justify-center text-gray-500 hover:text-white transition-[background,color] duration-200 group"
              >
                <Icon size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:scale-110" />
              </a>
            ))}
            <a href="#" aria-label="Google" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#3a86ff] flex items-center justify-center text-gray-500 hover:text-white transition-[background,color] duration-200 group">
              <GoogleIcon />
            </a>
          </nav>
        </div>

        {Object.entries(LINKS).map(([title, items]) => (
          <nav key={title} className="col-anim flex flex-col gap-3" aria-label={title}>
            <h3 className="font-bold text-gray-900 text-[14px] mb-1">{title}</h3>
            {items.map((item) => (
              <a key={item} href="#" className="text-gray-500 text-[11px] hover:text-[#3a86ff] transition-colors duration-150 w-fit">
                {item}
              </a>
            ))}
          </nav>
        ))}

        <div className="col-anim flex flex-col gap-3">
          <h3 className="font-bold text-gray-900 text-[14px] mb-1">Contact Us</h3>
          <a
            href="tel:+9234765432154"
            className="flex items-start gap-2.5 text-gray-500 hover:text-[#00ADB5] transition-colors duration-150 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#3a86ff]/10 group-hover:bg-[#00ADB5] flex items-center justify-center shrink-0 transition-colors duration-200">
              <Phone size={13} className="text-[#00ADB5] group-hover:text-white transition-colors duration-200" aria-hidden="true" />
            </div>
            <span className="text-[11px] leading-snug">(92) 34765 4321 54</span>
          </a>
          <a
            href="mailto:contact@devskarnel.com"
            className="flex items-start gap-2.5 text-gray-500 hover:text-[#00ADB5] transition-colors duration-150 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#3a86ff]/10 group-hover:bg-[#00ADB5] flex items-center justify-center shrink-0 transition-colors duration-200">
              <Mail size={13} className="text-[#00ADB5] group-hover:text-white transition-colors duration-200" aria-hidden="true" />
            </div>
            <span className="text-[11px] leading-snug">contact@devskarnel.com</span>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-275 mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-[12.5px] text-center sm:text-left">
            © Copyright by <span className="font-semibold text-gray-600">DevsKarnel</span>  {year}. All rights reserved.
          </p>
          <nav aria-label="Footer legal links" className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {BOTTOM_LINKS.map((item) => (
              <a key={item} href="#" className="text-gray-400 text-[12.5px] hover:text-[#3a86ff] transition-colors duration-150 whitespace-nowrap">
                {item} <Lock size={10} className="inline-block ml-0.5 text-gray-400" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
};

export default Footer;