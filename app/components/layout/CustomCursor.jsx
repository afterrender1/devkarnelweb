"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const handleHover = () => {
            gsap.to(follower, { scale: 2, backgroundColor: "rgba(35, 188, 223, 0.2)", borderColor: "transparent", duration: 0.3 });
        };
        const handleUnhover = () => {
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", borderColor: "#23bcdf", duration: 0.3 });
        };

        const targets = document.querySelectorAll('.service-card, button, a');
        targets.forEach(target => {
            target.addEventListener('mouseenter', handleHover);
            target.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                a, button, .service-card { cursor: none; }
            `}</style>


            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-[#23bcdf] rounded-full pointer-events-none z-999 -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;