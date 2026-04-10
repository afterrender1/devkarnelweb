'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { urbanist } from '../fonts';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
    const footerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = contentRef.current?.querySelectorAll('.footer-animate');

            if (elements && elements.length > 0) {
                gsap.fromTo(
                    elements,
                    {
                        opacity: 0,
                        y: 40,
                        filter: 'blur(10px)',
                    },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const socialLinks = [
        { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: '#' },
        { name: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: '#' },
        { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', url: '#' },
    ];

    const links = {
        solutions: [
            { name: 'Logo Design', url: '#' },
            { name: 'Website Development', url: '#' },
        ],
        pages: [
            { name: 'Case Studies', url: '#casestudies' },
            { name: 'Services', url: '#' },
            { name: 'Testimonials', url: '#' },
            { name: 'Contact', url: '#' },
        ],
    };

    return (
        <footer
            style={{
                background: `
    /* Top par darkness barhane ke liye radial shadows ko zyada intense kiya gaya hai */
    radial-gradient(circle at 10% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, transparent 60%),
    radial-gradient(circle at 90% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, transparent 70%),
    radial-gradient(circle at 50% -10%, rgba(0,0,0,0.9) 0%, transparent 60%),
    
    /* Bottom-left ki lighting ko thoda soft rakha hai */
    radial-gradient(circle at 100% 90%, rgba(0,0,0,0.4) 0%, transparent 0%),
    
    linear-gradient(
      0deg, 
      #24E8B2 10%,       /* Light color bottom par */
      #1BC497 5%,
      #0F7C6E 10%,      /* Yahan se transition jaldi start kar di */
      #0A4A42 45%,
      #062B24 100%,      /* Dark color ab 65% se hi shuru ho jayega */
      #010504 90%,      /* 90% tak aate aate kaafi dark ho jayega */
      #000000 100%      /* Bilkul top par pure black */
    )
  `,
                willChange: "opacity",
            }}
            ref={footerRef} className={`relative bg-[#010504] overflow-hidden ${urbanist.className}`}>
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial Glow */}
                <div className="absolute bottom-0 left-2/4 w-96 h-96 bg-[#2de8b0] opacity-30 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-[#2de8b0] opacity-30 blur-[120px] rounded-full" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#010504]/50 to-[#010504]" />
            </div>

            {/* Content */}
            <div ref={contentRef} className="relative max-w-400 mx-auto px-6 lg:px-8 py-16 lg:py-20">
                {/* Top Border */}
                <div className="footer-animate border-t border-white/10 mb-12" />

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
                    {/* Left Section - Brand */}
                    <div className="footer-animate text-center md:text-left">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                            Devskarnel
                        </h3>
                        <p className="text-white/60 text-sm lg:text-base mb-6 max-w-xs mx-auto md:mx-0">
                            Crafting digital experiences that inspire and engage.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="group relative w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-[#2de8b0]/50 hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <svg
                                        className="w-5 h-5 text-white/70 transition-colors duration-300 group-hover:text-[#2de8b0]"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={social.icon} />
                                    </svg>

                                    {/* Glow Effect on Hover */}
                                    <div className="absolute inset-0 rounded-lg bg-[#2de8b0]/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="footer-animate lg:col-span-1 grid grid-cols-2 gap-8 md:gap-12 text-center md:text-left">
                        {/* Solutions */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                                Solutions
                            </h4>
                            <ul className="space-y-3">
                                {links.solutions.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            className="text-white/60 text-sm hover:text-[#2de8b0] transition-colors duration-300 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pages */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                {links.pages.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            className="text-white/60 text-sm hover:text-[#2de8b0] transition-colors duration-300 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Legal */}
                    <div className="footer-animate text-center md:text-left lg:text-right">
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Legal
                        </h4>
                        <a
                            href="#"
                            className="inline-block text-white/60 text-sm hover:text-[#2de8b0] transition-colors duration-300"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="footer-animate border-t border-white/10 pt-8">
                    <div className="text-center">
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} Devskarnel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Glassmorphism Overlay Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2de8b0]/30 to-transparent" />
        </footer>
    );
}