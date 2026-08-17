
"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { urbanist } from "../fonts";

const testimonials = [
    {
        name: "Sarah Thompson",
        date: "3 months ago",
        text: "A year ago I was struggling to keep up with my debt payments, but their team provided a clear path forward...",
        image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_400/v1778324487/Gemini_Generated_Image_30bf0x30bf0x30bf_epjjvk.png"
    },
    {
        name: "Daniel Martinez",
        date: "2 months ago",
        text: "The team was supportive and transparent throughout the process. I finally feel in control of my finances.",
        image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_400/v1778324488/Gemini_Generated_Image_es9d40es9d40es9d_sgosrf.png"
    },
    {
        name: "Emily Carter",
        date: "4 months ago",
        text: "I had multiple debts and didn't know where to start. Their strategy was easy to follow and highly effective.",
        image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_400/v1778324487/Gemini_Generated_Image_snm57hsnm57hsnm5_xgzepg.png"
    },
    {
        name: "Michael Chen",
        date: "3 months ago",
        text: "Professional, trustworthy, and very responsive. They handled everything with care. Highly recommended!",
        image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_400/v1778324488/Gemini_Generated_Image_lnm5imlnm5imlnm5_fqc9ao.png"
    },
    {
        name: "Jessica Blair",
        date: "1 month ago",
        text: "The digital transformation they led for our app was seamless. Code quality is top-tier.",
        image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_400/v1778324487/Gemini_Generated_Image_nroht7nroht7nroh_vhjuqp.png"
    },
    {
        name: "Marcus Wright",
        date: "5 months ago",
        text: "Excellent communication and even better results. Our SEO traffic has doubled since launch.",
        image: "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_400/v1778324486/Gemini_Generated_Image_vos73avos73avos7_gg4zle.png"
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
                    return x;
                })
            }
        });
    };

    return (
        <section className={`relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-[#2de8b0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-xs sm:text-sm text-white/70 uppercase tracking-wider font-medium">Testimonials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">What our clients say</h2>
                {/* Header with Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8 mb-10 sm:mb-12">
                    <div>
                        <p className="text-white/50 text-sm sm:text-base">Trusted by entrepreneurs and industry leaders worldwide.</p>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                        <button aria-label="Previous Testimonial" onClick={() => slide('prev')} className="p-2 sm:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white cursor-pointer">
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button aria-label="Next Testimonial" onClick={() => slide('next')} className="p-2 sm:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white cursor-pointer">
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
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
                                <div className="relative h-112.5 rounded-3xl overflow-hidden">
                                    {/* Image Base */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover  transition-all duration-700 scale-105 group-hover:scale-100"
                                    />

                                    {/* Dark Overlay Gradient (Matching your image) */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 p-6 w-full">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-white font-medium text-lg">{item.name}</h3>
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