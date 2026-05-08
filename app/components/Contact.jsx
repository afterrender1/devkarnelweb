"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

const SERVICES = ["Website Development", "UI / UX Design", "App Development", "SEO", "Logo Design", "Other"];
const COUNTRY_CODES = ["US", "UK", "PK", "IN", "CA", "AU"];

const inputCls = "w-full border border-white/10 rounded-lg px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-white bg-white/5 outline-none transition-all duration-200 placeholder:text-white/20 focus:border-[#2de8b0] focus:ring-2 focus:ring-[#2de8b0]/10 focus:bg-white/10";

const Checkbox = ({ label, checked, onToggle }) => (
    <label className="flex items-center gap-2 cursor-pointer select-none group">
        <span onClick={onToggle} role="checkbox" aria-checked={checked} className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-150"
            style={{ border: `1.5px solid ${checked ? "#2de8b0" : "rgba(255,255,255,0.2)"}`, background: checked ? "#2de8b0" : "transparent" }}>
            {checked && <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                <path d="M1 3.5L3.2 5.8L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
        </span>
        <span className="text-sm lg:text-base text-white/50 group-hover:text-white/80 transition-colors duration-150 font-medium">{label}</span>
    </label>
);

const Field = ({ label, children, htmlFor }) => (
    <div className="flex flex-col gap-1">
        <label htmlFor={htmlFor} className="text-xs lg:text-sm font-semibold text-white/40 tracking-wide uppercase">{label}</label>
        {children}
    </div>
);

const ContactForm = () => {
    const [values, setValues] = useState({ name: "", email: "", phone: "", countryCode: "US", message: "", services: [] });
    const [status, setStatus] = useState("");

    const handle = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    const toggleService = (s) => setValues((v) => ({ ...v, services: v.services.includes(s) ? v.services.filter(x => x !== s) : [...v.services, s] }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            setStatus(data.message);
            if (res.ok) setValues({ name: "", email: "", phone: "", countryCode: "US", message: "", services: [] });
        } catch (err) {
            setStatus("Failed to send message.");
        }
    };

    return (
        <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Field label="Name" htmlFor="name">
                    <input id="name" name="name" type="text" placeholder="Your name" value={values.name} onChange={handle} className={inputCls} required />
                </Field>
                <Field label="Email" htmlFor="email">
                    <input id="email" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={handle} className={inputCls} required />
                </Field>
            </div>
            <Field label="Phone number" htmlFor="phone">
                <div className="flex gap-2">
                    <select name="countryCode" value={values.countryCode} onChange={handle} className="border border-white/10 rounded-lg px-2 text-sm text-white bg-white/5 outline-none cursor-pointer focus:border-[#2de8b0] transition-all" style={{ width: "72px" }}>
                        {COUNTRY_CODES.map((c) => <option key={c} value={c} className="bg-[#0a4a42] text-white">{c}</option>)}
                    </select>
                    <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={values.phone} onChange={handle} className={`${inputCls} flex-1`} />
                </div>
            </Field>
            <Field label="How can we help?" htmlFor="message">
                <textarea id="message" name="message" rows={4} placeholder="Tell us about the project..." value={values.message} onChange={handle} className={`${inputCls} resize-none`} required />
            </Field>
            <fieldset>
                <legend className="text-xs lg:text-sm font-semibold text-white/40 tracking-wide uppercase mb-2">Services</legend>
                <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                    {SERVICES.map((s) => (
                        <Checkbox key={s} label={s} checked={values.services.includes(s)} onToggle={() => toggleService(s)} />
                    ))}
                </div>
            </fieldset>
            <button type="submit" className="group mt-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#2de8b0] text-black font-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-[#1bc497] hover:shadow-lg hover:shadow-[#2de8b0]/30 active:scale-[0.98]">
                Get started →
            </button>
            {status && <p className="text-xs sm:text-sm mt-2 text-center text-[#2de8b0]">{status}</p>}
        </form>
    );
};

const Contact = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade up once when scrolled into view
            gsap.fromTo(cardRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 90%",
                        once: true // Removes "heavy" re-triggering
                    }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section id="contact" ref={containerRef} className={`relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 ${urbanist.className}`}
                style={{
                    background: `radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.6) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)`
                }}>
                <div ref={cardRef} className="flex flex-col md:flex-row w-full max-w-7xl min-h-screen md:min-h-auto md:rounded-3xl overflow-hidden backdrop-blur-3xl bg-white/5 border border-white/10 shadow-2xl" style={{ opacity: 0 }}>
                    {/* Left Visual Side */}
                    <div className="relative w-full h-48 sm:h-56 md:h-auto md:w-[42%] shrink-0 overflow-hidden">

                        <Image
                            src="/images/contact.png"
                            alt="Contact"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <p className="text-[#2de8b0] text-xs font-medium tracking-widest uppercase mb-1">Start a project</p>
                            <p className="text-white font-bold text-2xl leading-tight">We&apos;d love to hear<br />from you</p>
                        </div>
                    </div>

                    {/* Right Form Side */}
                    <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-y-auto">
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white leading-tight mb-2 sm:mb-3">
                                Let&apos;s level up your <span className="text-[#2de8b0]">brand,</span> together
                            </h2>
                            <p className="text-white/40 text-sm sm:text-base">Fill out the form and our team will get back to you within 24 hours.</p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>






        </>
    );
};

export default Contact;