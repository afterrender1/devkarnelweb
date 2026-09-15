"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { urbanist } from "@/app/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  "Website Development",
  "UI / UX Design",
  "App Development",
  "SEO",
  "Logo Design",
  "Other",
];
const COUNTRY_CODES = ["US", "UK", "PK", "IN", "CA", "AU"];

const inputCls =
  "w-full border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white bg-white/[0.04] outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#2de8b0] focus:ring-2 focus:ring-[#2de8b0]/15 focus:bg-white/[0.07]";

const Checkbox = ({ label, checked, onToggle }) => (
  <label
    className={`relative flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none group ${
      checked
        ? "bg-[#2de8b0]/10 border-[#2de8b0]/60 text-white shadow-[0_0_15px_rgba(45,232,176,0.12)]"
        : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white/90 hover:border-white/20 hover:bg-white/[0.05]"
    }`}
  >
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onToggle}
    />
    <span
      aria-hidden="true"
      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 transition-all duration-150 ${
        checked
          ? "bg-[#2de8b0] border border-[#2de8b0] text-black"
          : "border border-white/20 group-hover:border-white/40 bg-transparent"
      }`}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1.5 4.2L3.8 6.5L8.5 1.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
    <span className="text-xs sm:text-sm font-medium leading-tight truncate">
      {label}
    </span>
  </label>
);

const Field = ({ label, children, htmlFor, required }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={htmlFor}
      className="text-[11px] sm:text-xs font-semibold text-white/50 tracking-wider uppercase flex items-center gap-1"
    >
      {label}
      {required && <span className="text-[#2de8b0] text-xs leading-none">*</span>}
    </label>
    {children}
  </div>
);

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "US",
    message: "",
    services: [],
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const toggleService = (s) =>
    setValues((v) => ({
      ...v,
      services: v.services.includes(s)
        ? v.services.filter((x) => x !== s)
        : [...v.services, s],
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setStatus(data.message || "Thank you! We will be in touch shortly.");
      if (res.ok) {
        setValues({
          name: "",
          email: "",
          phone: "",
          countryCode: "US",
          message: "",
          services: [],
        });
      }
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 sm:gap-4.5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={values.name}
            onChange={handle}
            className={inputCls}
            required
            suppressHydrationWarning
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handle}
            className={inputCls}
            required
            suppressHydrationWarning
          />
        </Field>
      </div>

      <Field label="Phone number" htmlFor="phone">
        <div className="flex gap-2">
          <select
            name="countryCode"
            aria-label="Country Code"
            value={values.countryCode}
            onChange={handle}
            className="border border-white/10 rounded-xl px-2.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white bg-white/[0.04] outline-none cursor-pointer focus:border-[#2de8b0] focus:ring-2 focus:ring-[#2de8b0]/15 transition-all w-[76px] shrink-0 font-medium"
            suppressHydrationWarning
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c} value={c} className="bg-[#0a4a42] text-white font-medium">
                {c}
              </option>
            ))}
          </select>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={values.phone}
            onChange={handle}
            className={`${inputCls} flex-1`}
            suppressHydrationWarning
          />
        </div>
      </Field>

      <Field label="How can we help?" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your project, timeline, and goals..."
          value={values.message}
          onChange={handle}
          className={`${inputCls} resize-none min-h-[90px] sm:min-h-[110px]`}
          required
          suppressHydrationWarning
        />
      </Field>

      <fieldset>
        <legend className="text-[11px] sm:text-xs font-semibold text-white/50 tracking-wider uppercase mb-2">
          Services needed
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {SERVICES.map((s) => (
            <Checkbox
              key={s}
              label={s}
              checked={values.services.includes(s)}
              onToggle={() => toggleService(s)}
            />
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={loading}
        suppressHydrationWarning
        className="group relative mt-1 sm:mt-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#2de8b0] text-black font-bold text-xs xs:text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-[#26d6a2] hover:shadow-[0_0_30px_rgba(45,232,176,0.35)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
      >
        {loading ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Get started</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </>
        )}
      </button>

      {status && (
        <div
          className={`p-2.5 rounded-xl text-center text-xs sm:text-sm font-medium border transition-all ${
            status.toLowerCase().includes("fail")
              ? "bg-red-500/10 border-red-500/30 text-red-300"
              : "bg-[#2de8b0]/10 border-[#2de8b0]/30 text-[#2de8b0]"
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
};

const Contact = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className={`relative w-full py-12 sm:py-16 lg:py-24 px-3 xs:px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden ${urbanist.className}`}
      style={{
        background: `radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.45) 0%, transparent 65%), linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)`,
      }}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#2de8b0]/10 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={cardRef}
        className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/[0.03] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        style={{ opacity: 0 }}
      >
        {/* Left Visual Side */}
        <div className="relative w-full h-52 min-[380px]:h-60 sm:h-72 md:h-auto md:w-[44%] lg:w-[46%] shrink-0 overflow-hidden">
          <Image
            src="/images/contact1.webp"
            alt="Devskarnel"
            fill
            sizes="(max-width: 768px) 100vw, 46vw"
            className="object-cover object-[center_30%] sm:object-center transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02100d] via-black/35 to-transparent p-4 xs:p-6 sm:p-8 flex flex-col justify-end">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2de8b0]/15 border border-[#2de8b0]/30 w-fit mb-2 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2de8b0] animate-pulse" />
              <span className="text-[#2de8b0] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                Start a project
              </span>
            </div>
            <p className="text-white font-bold text-lg xs:text-xl sm:text-2xl lg:text-3xl leading-tight">
              We&apos;d love to hear{" "}
              <span className="text-[#2de8b0]">from you.</span>
            </p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="flex-1 flex flex-col justify-center px-4 xs:px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 overflow-y-auto">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-1.5 sm:mb-2 tracking-tight">
              Let&apos;s level up your{" "}
              <span className="text-[#2de8b0]">brand,</span> together
            </h2>
            <p className="text-white/50 text-xs sm:text-sm font-normal leading-relaxed">
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
