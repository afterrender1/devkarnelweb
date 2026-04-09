
"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { urbanist } from "../fonts";

const testimonials = [
    {
        name: "Sarah Thompson",
        date: "3 months ago",
        text: "A year ago I was struggling to keep up with my debt payments, but their team provided a clear path forward...",
        image: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        name: "Daniel Martinez",
        date: "2 months ago",
        text: "The team was supportive and transparent throughout the process. I finally feel in control of my finances.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "Emily Carter",
        date: "4 months ago",
        text: "I had multiple debts and didn't know where to start. Their strategy was easy to follow and highly effective.",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        name: "Michael Chen",
        date: "3 months ago",
        text: "Professional, trustworthy, and very responsive. They handled everything with care. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        name: "Jessica Blair",
        date: "1 month ago",
        text: "The digital transformation they led for our app was seamless. Code quality is top-tier.",
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        name: "Marcus Wright",
        date: "5 months ago",
        text: "Excellent communication and even better results. Our SEO traffic has doubled since launch.",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    }
];

const Testimonials = () => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    const slide = (direction) => {
        const cardWidth = containerRef.current.offsetWidth / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1);
        const scrollAmount = direction === 'next' ? -cardWidth : cardWidth;

        gsap.to(sliderRef.current, {
            x: `+=${scrollAmount}`,
            duration: 0.6,
            ease: "power2.inOut",
            modifiers: {
                x: gsap.utils.unitize((x) => {
                    // Basic bounds checking
                    const maxScroll = -(cardWidth * (testimonials.length - (window.innerWidth >= 1024 ? 4 : 1)));
                    return Math.max(Math.min(0, parseFloat(x)), maxScroll);
                })
            }
        });
    };

    return (
        <section 
        style={{
                background: `
    radial-gradient(circle at 10% 10%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 20%, transparent 50%),
    radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%),
    radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%),
    radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 25%, transparent 45%),
    linear-gradient(
      360deg,
      #24E8B2 0%,
      #1BC497 5%,
      #0F7C6E 40%,
      #0A4A42 60%,
      #062B24 80%,
      #010504 100%
    )
  `,
                willChange: "opacity",
            }}
        className={`relative w-full py-20 overflow-hidden ${urbanist.className}`}>
            {/* Seamless Gradient Blend with Services */}

            {/* Subtle Emerald Glow to match Services */}

            <div className="relative z-10 max-w-400 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header with Navigation */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">What our clients say</h2>
                        <p className="text-white/50">Trusted by entrepreneurs and industry leaders worldwide.</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => slide('prev')}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => slide('next')}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div ref={containerRef} className="overflow-visible">
                    <div ref={sliderRef} className="flex gap-5">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-full md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] group"
                            >
                                <div className="relative h-112.5 rounded-3xl overflow-hidden border border-white/10">
                                    {/* Image Base */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />

                                    {/* Dark Overlay Gradient (Matching your image) */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 p-6 w-full">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="text-white font-medium text-lg">{item.name}</h4>
                                                <p className="text-white/40 text-xs">{item.date}</p>
                                            </div>
                                            <div className="flex text-orange-400 text-xl">
                                                {"★★★★★".split("").map((star, i) => (
                                                    <span key={i}>{star}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-white/80 text-base leading-relaxed line-clamp-3">
                                            "{item.text}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots (Visual Only) */}
                <div className="flex justify-center gap-2 mt-10">
                    {[0, 1, 2].map((dot) => (
                        <div key={dot} className={`h-1.5 rounded-full transition-all duration-300 ${dot === 0 ? 'w-8 bg-[#2de8b0]' : 'w-2 bg-white/20'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;