"use client";
import React, { useRef } from 'react';
import { Urbanist } from 'next/font/google';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // Added thicker weights for the headings
});

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Text loads line by line (sliding up)
        tl.from(".animate-text-line", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.25, // Delay between each line
            ease: "power4.out"
        })

            // 2. YouTube Video appears
            .from(".animate-video", {
                y: 40,
                opacity: 0,
                scale: 0.95,
                duration: 1.5,
                ease: "power3.out"
            }, "-=0.4") // Starts slightly before the last text line finishes

            // 3. Button appears
            .from(".animate-btn", {
                y: 20,
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                ease: "back.out(1.7)" // Adds a slight spring effect
            }, "-=0.5")

            // 4. Background image fades in from low to full opacity
            .fromTo(".hero-bg",
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: "power2.inOut" },
                "-=0.2" // Starts fading in right as the button finishes
            );

    }, { scope: container });

    return (
        <section
            ref={container}
            className={`h-180 md:h-220 lg:min-h-300 xl:min-h-screen w-full flex items-center justify-center text-white px-4 relative bg-[#f8fafc] ${urbanist.className}`}
        >
            {/* BACKGROUND IMAGE LAYER - Separated so we can animate its opacity independently */}
            <div
                className="hero-bg absolute inset-0 z-0 bg-no-repeat bg-cover bg-center pointer-events-none"
                style={{
                    backgroundImage: 'url("/bg1.png")'
                }}
            />

            {/* MAIN CONTENT */}
            <div className="max-w-7xl w-full text-center space-y-4 relative z-10">

                {/* 1. TEXT SECTION */}
                <div className="space-y-3">
                    <h1 className="text-2xl lg:text-5xl text-[#334155] max-w-7xl mx-auto  font-semibold">
                        {/* Wrapping lines in overflow-hidden divs creates the clean "slide up" line-by-line reveal */}
                        <div className="overflow-hidden pb-1.5">
                            <span className="animate-text-line block">
                                Building modern, high-performance websites using
                            </span>
                        </div>
                        <div className="overflow-hidden pb-2">
                            <span className="animate-text-line block">
                                <span className="text-[#23bcdf] font-bold">Next.js</span>,
                                <span className="text-[#23bcdf] font-bold"> React</span>, and the
                                <span className="text-[#23bcdf] font-bold"> MERN</span> stack.
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="animate-text-line block text-xl lg:text-2xl text-slate-500 font-normal">
                                Scalable, secure, and SEO-optimized solutions for businesses worldwide.
                            </span>
                        </div>
                    </h1>
                </div>

                {/* 2. YOUTUBE VIDEO SECTION */}
                <div className="animate-video w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/Xw8ZTeg8YKg?si=pigkOMOeOYwfDcPQ"
                        title="Devkarnel Web Solutions Introduction"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* 3. BUTTON SECTION */}


                <div className='flex justify-center cursor-pointer'>
                    <div className="relative group ">
                        <div
                            className="relative w-58 h-14 opacity-90  overflow-hidden rounded-xl bg-[#00ADB5] z-10"
                        >
                            <div
                                className="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transistion-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                            ></div>

                            <div
                                className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-2xl inset-0.5 bg-black"
                            >
                                <button
                                    name="text"
                                    className="input cursor-pointer font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-[#084948]"
                                >
                                    Book Now                                </button>
                            </div>
                            <div
                                className="absolute duration-1000 group-hover:animate-spin w-full h-25 bg-linear-to-r from-green-500 to-yellow-500 blur-[30px]"
                            ></div>
                        </div>
                    </div>
                </div>



            </div>

        </section>
    );
};

export default Hero;
