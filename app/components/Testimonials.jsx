
"use client";
import React, { useRef, useState, useEffect } from 'react';
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
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;
        const scrollFraction = scrollLeft / maxScroll;
        const index = Math.min(2, Math.floor(scrollFraction * 3 + 0.4));
        setActiveIndex(index);
    };

    const slide = (direction) => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const scrollAmount = direction === 'next' ? width * 0.8 : -width * 0.8;
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const scrollToDot = (dotIndex) => {
        if (!containerRef.current) return;
        const { scrollWidth, clientWidth } = containerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        containerRef.current.scrollTo({ left: (maxScroll / 2) * dotIndex, behavior: 'smooth' });
    };

    return (
        <section className={`relative py-12 sm:py-24 lg:py-32 bg-black overflow-hidden ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#2de8b0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-xs sm:text-sm text-white/70 uppercase tracking-wider font-medium">Testimonials</span>
                </div>
                
                {/* Header with Navigation */}
                <div className="flex flex-row justify-between items-end gap-4 mb-6 sm:mb-12">
                    <div>
                        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">What our clients say</h2>
                        <p className="text-white/50 text-xs sm:text-base mt-1 sm:mt-2">Trusted by entrepreneurs and industry leaders worldwide.</p>
                    </div>
                    <div className="flex gap-2 sm:gap-3 shrink-0">
                        <button 
                            aria-label="Previous Testimonial" 
                            onClick={() => slide('prev')} 
                            className="p-2 sm:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white cursor-pointer active:scale-95"
                        >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button 
                            aria-label="Next Testimonial" 
                            onClick={() => slide('next')} 
                            className="p-2 sm:p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white cursor-pointer active:scale-95"
                        >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container - Native horizontal touch scroll with hidden scrollbar */}
                <div 
                    ref={containerRef} 
                    onScroll={handleScroll}
                    className="flex gap-3 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 select-none"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[calc(50%-6px)] min-w-[calc(50%-6px)] md:w-[calc(50%-10px)] md:min-w-[calc(50%-10px)] lg:w-[calc(25%-15px)] lg:min-w-[calc(25%-15px)] flex-shrink-0 snap-start group"
                        >
                            <div className="relative h-[270px] xs:h-[290px] sm:h-[360px] md:h-[420px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
                                {/* Image Base */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                    loading="lazy"
                                />

                                {/* Dark Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 p-3 xs:p-4 sm:p-6 w-full flex flex-col justify-end">
                                    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 mb-1.5 sm:mb-4">
                                        <div className="min-w-0 pr-1">
                                            <h3 className="text-white font-bold sm:font-medium text-xs xs:text-sm sm:text-lg truncate">{item.name}</h3>
                                            <p className="text-white/50 text-[9px] xs:text-[10px] sm:text-xs">{item.date}</p>
                                        </div>
                                        <div className="flex text-amber-400 text-[10px] xs:text-xs sm:text-lg shrink-0">
                                            {"★★★★★".split("").map((star, i) => (
                                                <span key={i}>{star}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-white/85 text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight xs:leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-4 font-normal">
                                        "{item.text}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6 sm:mt-10">
                    {[0, 1, 2].map((dot) => (
                        <button
                            key={dot}
                            onClick={() => scrollToDot(dot)}
                            aria-label={`Go to testimonial page ${dot + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                activeIndex === dot ? 'w-8 bg-[#2de8b0]' : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;