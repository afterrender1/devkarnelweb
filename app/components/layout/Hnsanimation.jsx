"use client";
import React, { useLayoutEffect, useRef } from 'react';
import Hero from './Hero';
import Services from './Services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hnsanimation = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animation logic
            gsap.to(heroRef.current, {
                opacity: 0,
                scale: 0.8, // Adjust scale down intensity here
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",      // Start when the top of hero hits top of viewport
                    end: "bottom 5%",        // Animation finishes when 15% of the scroll is done
                    scrub: true,           // Links animation to scrollbar
                    // markers: true,      // Uncomment this to see the start/end lines for debugging
                }
            });
        });

        return () => ctx.revert(); 
    }, []);

    return (
        <>
            <div ref={heroRef} style={{ overflow: 'hidden' }}>
                <Hero />
            </div>

            <div>
                <Services />
            </div>
        </>
    );
};

export default Hnsanimation;