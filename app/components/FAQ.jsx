"use client";

import React, { useState } from "react";
import { urbanist, truculenta } from "@/app/fonts";
import { Plus, Minus, HelpCircle, Code2, Rocket, Search, ShieldCheck, MessageSquare } from "lucide-react";

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "tech", label: "Tech Stack & Code", icon: Code2 },
  { id: "process", label: "Process & Delivery", icon: Rocket },
  { id: "seo", label: "SEO & Speed", icon: Search },
  { id: "support", label: "Ownership & Support", icon: ShieldCheck },
];

const FAQ_ITEMS = [
  {
    category: "tech",
    categoryLabel: "Tech Stack & Code",
    question: "What technologies and frameworks do you use to build websites?",
    answer:
      "We engineer modern web solutions primarily using Next.js, React, Node.js, TypeScript, and Tailwind CSS. For backend and database architecture, we leverage scalable cloud solutions like PostgreSQL, MongoDB, Supabase, and AWS. For content management needs, we build flexible headless CMS solutions or custom admin portals tailored to your workflow.",
  },
  {
    category: "process",
    categoryLabel: "Process & Delivery",
    question: "How long does a website or web application project typically take?",
    answer:
      "Timelines depend on the project's complexity and scope. A standard high-converting business website usually takes 2 to 4 weeks from discovery to launch. Complex full-stack web applications, SaaS platforms, or custom digital portals typically require 6 to 10 weeks with phased milestone deliveries.",
  },
  {
    category: "tech",
    categoryLabel: "Tech Stack & Code",
    question: "Will my website be mobile-responsive and look great on all devices?",
    answer:
      "Yes, 100%. We employ a mobile-first responsive architecture. Every single layout, component, typography scale, and micro-interaction is engineered and tested across mobile devices, tablets, laptops, and ultra-wide desktop monitors to guarantee a pixel-perfect, flawless user experience.",
  },
  {
    category: "process",
    categoryLabel: "Process & Delivery",
    question: "Do you design from scratch or use pre-made templates?",
    answer:
      "Every project is 100% custom designed from scratch in Figma prior to writing code. We create tailored UI/UX interfaces, custom component libraries, and engaging micro-animations specifically aligned with your brand identity and conversion goals—no cookie-cutter templates.",
  },
  {
    category: "seo",
    categoryLabel: "SEO & Speed",
    question: "Will the website be fast and optimized for search engines (SEO)?",
    answer:
      "Yes. Performance and technical SEO are built directly into our core development pipeline. We optimize for 90+ Google Core Web Vitals scores using Server-Side Rendering (SSR), automatic image optimization, minified asset bundles, semantic HTML5, structured JSON-LD schema markup, and automatic XML sitemaps.",
  },
  {
    category: "support",
    categoryLabel: "Ownership & Support",
    question: "Do I get full ownership of the source code and design assets?",
    answer:
      "Yes, absolutely. Once the project is delivered and completed, 100% of all intellectual property, source code repositories (GitHub / GitLab), production deployments, and Figma design files are completely transferred to you with zero vendor lock-in.",
  },
  {
    category: "process",
    categoryLabel: "Process & Delivery",
    question: "What does your development and communication workflow look like?",
    answer:
      "We operate with an agile 4-step workflow: 1) Strategy & Wireframing, 2) Custom UI/UX Design, 3) Full-Stack Engineering, and 4) Quality Assurance & Deployment. We provide transparent communication throughout the process with regular milestone check-ins, live staging demo links, and direct messaging via Slack or WhatsApp.",
  },
  {
    category: "support",
    categoryLabel: "Ownership & Support",
    question: "Do you provide post-launch maintenance and technical support?",
    answer:
      "Yes! We provide dedicated post-launch support and warranty coverage. We also offer continuous maintenance partnerships covering server monitoring, regular security updates, framework upgrades, automated database backups, and ongoing feature enhancements to keep your platform running at peak performance.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs =
    activeCategory === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#010504] text-white ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(45, 232, 176, 0.12) 0%, transparent 60%),
          radial-gradient(circle at 10% 40%, rgba(15, 124, 110, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 90% 70%, rgba(45, 232, 176, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #000000 0%, #010a08 30%, #031411 70%, #000000 100%)
        `,
      }}
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2de8b0]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0f7c6e]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 text-[#2de8b0] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(45,232,176,0.15)]">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2de8b0]" />
            <span>Got Questions? We&apos;ve Got Answers</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight ${truculenta.className}`}>
            Frequently Asked <span className="text-[#2de8b0]">Questions</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our web development engineering, modern tech stack, development workflow, and launch support.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {FAQ_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0); // auto-open first item on category change
                }}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#2de8b0] text-black shadow-[0_0_20px_rgba(45,232,176,0.35)] scale-[1.02] font-semibold"
                    : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-[#2de8b0]/30"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-black" : "text-[#2de8b0]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.06] border-[#2de8b0]/40 shadow-[0_0_25px_rgba(45,232,176,0.12)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-7 py-4.5 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#2de8b0]/10 text-[#2de8b0] border border-[#2de8b0]/20 shrink-0">
                      {faq.categoryLabel}
                    </span>
                    <span
                      className={`text-base sm:text-lg lg:text-xl font-bold transition-colors duration-200 ${
                        isOpen ? "text-[#2de8b0]" : "text-white group-hover:text-[#2de8b0]/90"
                      } ${truculenta.className}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#2de8b0] text-black rotate-180 shadow-[0_0_12px_rgba(45,232,176,0.5)]"
                        : "bg-white/5 border border-white/10 text-white/60 group-hover:text-white group-hover:border-[#2de8b0]/40"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 sm:pt-2 border-t border-white/5 text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#2de8b0]/15 border border-[#2de8b0]/30 flex items-center justify-center shrink-0 text-[#2de8b0]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold text-white ${truculenta.className}`}>
                Have a specific question about your project?
              </h3>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">
                Our engineering team is ready to discuss your architecture and roadmap.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2de8b0] text-black font-bold text-xs sm:text-sm text-center tracking-wide transition-all duration-300 hover:bg-[#1bc497] hover:shadow-[0_0_20px_rgba(45,232,176,0.4)] active:scale-[0.98] shrink-0"
          >
            Ask Our Team →
          </a>
        </div>
      </div>
    </section>
  );
}
