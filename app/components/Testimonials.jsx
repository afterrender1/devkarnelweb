
"use client";
import React, { useRef, useState } from 'react';
import { urbanist } from "../fonts";

const testimonials = [
    {
        name: "Sophia Nguyen",
        text: "The clean code standards and smooth user onboarding flow they designed made an immediate impact on user retention.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Elena Rivera",
        text: "Outstanding turnaround time without sacrificing quality. They handled our complex database integrations seamlessly.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Chloe Bennett",
        text: "From architecture planning to final deployment, communication was crystal clear. Exceptional attention to detail and performance.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Daniel Martinez",
        text: "The team was supportive and transparent throughout the process. I finally feel in control of our digital vision.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Sarah Thompson",
        text: "Their strategy was easy to follow and highly effective. They transformed our web presence completely.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Marcus Wright",
        text: "Excellent communication and even better results. Our organic traffic and sales have doubled since launch.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
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
        <section 
            className={`relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden ${urbanist.className}`}
            style={{
                background: `radial-gradient(circle at 50% 30%, rgba(45, 232, 176, 0.12) 0%, rgba(0, 0, 0, 0.98) 70%), #000`
            }}
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2de8b0]/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Centered Header matching upper components */}
                <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 px-3.5 py-1 rounded-full border border-[#2de8b0]/20 bg-[#2de8b0]/10 backdrop-blur-md">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2de8b0]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-[11px] sm:text-xs text-[#2de8b0] uppercase tracking-widest font-bold">TESTIMONIALS</span>
                    </div>
                    <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
                        What our <span className="text-[#2de8b0]">satisfied clients</span> say
                    </h2>
                    <p className="text-white/60 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                        Discover what our satisfied customers have to say about their experiences with our products/services.
                    </p>
                </div>

                {/* Navigation Buttons Row */}
                <div className="flex justify-end mb-4">
                    <div className="flex gap-2 sm:gap-3">
                        <button 
                            aria-label="Previous Testimonial" 
                            onClick={() => slide('prev')} 
                            className="p-2 sm:p-3 rounded-full border border-[#2de8b0]/20 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white cursor-pointer active:scale-95 shadow-md"
                        >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button 
                            aria-label="Next Testimonial" 
                            onClick={() => slide('next')} 
                            className="p-2 sm:p-3 rounded-full border border-[#2de8b0]/20 bg-white/5 hover:bg-[#2de8b0] hover:text-black transition-all duration-300 text-white cursor-pointer active:scale-95 shadow-md"
                        >
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container - 2 cards per row on mobile, 3 cards on desktop */}
                <div 
                    ref={containerRef} 
                    onScroll={handleScroll}
                    className="flex gap-3 sm:gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 no-scrollbar scroll-smooth snap-x snap-mandatory px-1.5 sm:px-3 py-4 select-none"
                    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[calc(50%-6px)] min-w-[calc(50%-6px)] md:w-[calc(33.333%-16px)] md:min-w-[calc(33.333%-16px)] flex-shrink-0 snap-start group"
                        >
                            <div className="relative rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 border border-[#2de8b0]/35 bg-gradient-to-b from-[#05241b]/80 via-[#02120c]/90 to-black/95 backdrop-blur-xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(45,232,176,0.08)] hover:border-[#2de8b0] hover:shadow-[0_0_40px_rgba(45,232,176,0.22)] transition-all duration-500 h-full justify-between min-h-[300px] xs:min-h-[330px] sm:min-h-[380px]">
                                <div>
                                    {/* Circular Avatar */}
                                    <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mx-auto mb-3 sm:mb-5">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full rounded-full object-cover border-2 border-white/10 shadow-lg group-hover:border-[#2de8b0]/50 transition-all duration-500"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* 5 Gold Stars - Prominent Size matching screenshot */}
                                    <div className="flex justify-center text-amber-400 text-lg xs:text-xl sm:text-2xl gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                                        {"★★★★★".split("").map((star, i) => (
                                            <span key={i}>{star}</span>
                                        ))}
                                    </div>

                                    {/* Client Name */}
                                    <h3 className="text-white font-bold text-sm xs:text-base sm:text-xl mb-2 tracking-tight">
                                        {item.name}
                                    </h3>

                                    {/* Testimonial Quote */}
                                    <p className="text-white/80 text-[11px] xs:text-xs sm:text-sm leading-tight xs:leading-snug sm:leading-relaxed font-normal italic px-1">
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