"use client";
import React, { useState, useEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const SERVICES = [
    "Website Design",
    "Content Creation",
    "UX Design",
    "Strategy & Consulting",
    "User Research",
    "Other",
];

/* ─── Checkbox ─── */
const Checkbox = ({ label, checked, onToggle }) => (
    <label className="flex items-center gap-2.5 cursor-pointer select-none group">
        <span
            onClick={onToggle}
            className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-150"
            style={{
                border: `1.5px solid ${checked ? "#23bcdf" : "#d1d5db"}`,
                background: checked ? "#23bcdf" : "#fff",
            }}
        >
            {checked && (
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.2 5.8L8 1" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </span>
        <span className="text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-150 font-medium">
            {label}
        </span>
    </label>
);

/* ─── Input ─── */
const Field = ({ label, children }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-[12.5px] font-semibold text-gray-600 tracking-wide">{label}</label>
        {children}
    </div>
);

const inputCls =
    "w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-gray-800 bg-white outline-none transition-all duration-200 placeholder:text-gray-300 focus:border-[#23bcdf] focus:ring-2 focus:ring-[#23bcdf]/10";

/* ─── Form ─── */
const ContactForm = () => {
    const [values, setValues] = useState({ name: "", email: "", phone: "", message: "", services: [] });

    const handle = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    const toggleService = (s) =>
        setValues((v) => ({
            ...v,
            services: v.services.includes(s) ? v.services.filter((x) => x !== s) : [...v.services, s],
        }));

    return (
        <div className="flex flex-col gap-4">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name">
                    <input name="name" type="text" placeholder="Your name" value={values.name} onChange={handle} className={inputCls} />
                </Field>
                <Field label="Email">
                    <input name="email" type="email" placeholder="you@company.com" value={values.email} onChange={handle} className={inputCls} />
                </Field>
            </div>

            {/* Phone */}
            <Field label="Phone number">
                <div className="flex gap-2">
                    <select
                        className="border border-gray-200 rounded-lg px-2.5 py-2.5 text-[13px] text-gray-700 bg-white outline-none cursor-pointer shrink-0 focus:border-[#23bcdf] focus:ring-2 focus:ring-[#23bcdf]/10 transition-all duration-200"
                        style={{ width: "72px" }}
                    >
                        {["US", "UK", "PK", "IN", "CA", "AU"].map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                    <input name="phone" type="tel" placeholder="+1 (555) 000-0000" value={values.phone} onChange={handle} className={`${inputCls} flex-1`} />
                </div>
            </Field>

            {/* Message */}
            <Field label="How can we help?">
                <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about the project..."
                    value={values.message}
                    onChange={handle}
                    className={`${inputCls} resize-none`}
                />
            </Field>

            {/* Services */}
            <Field label="Services">
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-0.5">
                    {SERVICES.map((s) => (
                        <Checkbox key={s} label={s} checked={values.services.includes(s)} onToggle={() => toggleService(s)} />
                    ))}
                </div>
            </Field>

            {/* Submit */}
            <button
                type="button"
                className="group mt-1 w-full py-3.5 rounded-xl bg-gray-900 text-white font-semibold text-[14px] tracking-wide transition-all duration-200 hover:bg-[#084948] hover:shadow-lg hover:shadow-cyan-100 active:scale-[0.98]"
            >
                Get started →
            </button>
        </div>
    );
};

/* ─── Main ─── */
const Contact = () => {
    const cardRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const left = leftRef.current;
        const right = rightRef.current;
        const heading = headingRef.current;
        if (!card) return;

        // Card entrance
        gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.97 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: 1.2,
                },
            }
        );

        // Left panel slides from left
        gsap.fromTo(
            left,
            { x: -40, opacity: 0 },
            {
                x: 0, opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    end: "top 45%",
                    scrub: 1,
                },
            }
        );

        // Right panel slides from right
        gsap.fromTo(
            right,
            { x: 40, opacity: 0 },
            {
                x: 0, opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    end: "top 45%",
                    scrub: 1,
                },
            }
        );

        // Heading word stagger
        if (heading) {
            gsap.fromTo(
                heading.querySelectorAll(".word"),
                { y: 20, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    stagger: 0.06,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 85%",
                    },
                }
            );
        }

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    const headingWords = ["→", "Let's", "level", "up", "your", "brand,", "together"];

    return (
        <section id="contact" className={`w-full min-h-screen  flex items-center justify-center p-0 sm:p-6 lg:p-10 ${urbanist.className}`}>

            {/* Card */}
            <div
                ref={cardRef}
                className="flex flex-col md:flex-row w-full max-w-280 min-h-screen md:min-h-0 md:rounded-2xl overflow-hidden shadow-2xl shadow-black/10"
                style={{ opacity: 0 }}
            >

                {/* ── LEFT — Image panel ── */}
                <div
                    ref={leftRef}
                    className="relative w-full h-56 md:h-auto md:w-[42%] shrink-0 overflow-hidden"
                    style={{
                        background: "linear-gradient(160deg, #d4a8d8 0%, #b8aee8 35%, #8eb8e8 70%, #a0d4c8 100%)",
                        opacity: 0,
                    }}
                >
                    <img
                        src="/images/contact.png"
                        alt="Contact visual"
                        className="w-full h-full object-cover object-center block"
                    />

                    {/* Overlay info — only visible on md+ */}
                    <div className="absolute inset-0 hidden md:flex flex-col justify-end p-8 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 55%)" }}
                    >
                        <p className="text-white/80 text-xs font-medium tracking-widest uppercase mb-1">Start a project</p>
                        <p className="text-white font-bold text-lg leading-tight">We'd love to hear<br />from you</p>
                    </div>
                </div>

                {/* ── RIGHT — Form panel ── */}
                <div
                    ref={rightRef}
                    className="flex-1 bg-white flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 overflow-y-auto"
                    style={{ opacity: 0 }}
                >
                    {/* Heading */}
                    <div ref={headingRef} className="mb-7 overflow-hidden">
                        <h2 className="font-extrabold text-gray-900 leading-[1.15] tracking-tight"
                            style={{ fontSize: "clamp(1.4rem, 2.8vw, 1.85rem)" }}
                        >
                            {headingWords.map((w, i) => (
                                <span key={i} className="word inline-block mr-[0.22em]" style={{ opacity: 0 }}>
                                    {w === "brand," ? (
                                        <span style={{
                                            background: "linear-gradient(135deg, #23bcdf 0%, #0891b2 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}>
                                            {w}
                                        </span>
                                    ) : w}
                                </span>
                            ))}
                        </h2>
                        <p className="text-gray-400 text-[13.5px] mt-2.5 font-normal">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    <ContactForm />
                </div>

            </div>
        </section>
    );
};

export default Contact;