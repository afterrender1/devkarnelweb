"use client";

import React, { useState } from "react";
import { urbanist, truculenta } from "@/app/fonts";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What technologies and frameworks do you use for web development?",
    answer:
      "We build modern, fast web applications using Next.js, React, Node.js, TypeScript, and Tailwind CSS. For backend databases and content management, we leverage PostgreSQL, MongoDB, Supabase, and headless CMS systems tailored to your needs.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "Timelines depend on the project's scope. A standard custom business website typically takes 2 to 4 weeks, while complex full-stack web applications and SaaS platforms take 6 to 10 weeks with milestone-based progress updates.",
  },
  {
    question: "Will my website be mobile-friendly and fast on all devices?",
    answer:
      "Yes, absolutely. We use a mobile-first responsive architecture to ensure your website looks sharp and works flawlessly across smartphones, tablets, laptops, and desktop screens with high PageSpeed scores.",
  },
  {
    question: "Do you design from scratch or use pre-made templates?",
    answer:
      "Every website is 100% custom designed in Figma from scratch. We craft unique layouts, typography, color palettes, and interactive elements tailored specifically to your brand identity.",
  },
  {
    question: "Will my website be optimized for SEO and search engines?",
    answer:
      "Yes. Every project includes technical and on-page SEO best practices: semantic HTML5, structured schema markup, fast server-side rendering, meta tags, and automatic sitemaps to help your site rank higher.",
  },
  {
    question: "Do I get full ownership of the source code upon completion?",
    answer:
      "Yes, 100%. Once final delivery is made, all intellectual property, source code (GitHub/GitLab), deployment configurations, and Figma design files belong completely to you.",
  },
  {
    question: "Do you provide ongoing support and website maintenance?",
    answer:
      "Yes! We provide post-launch support as well as continuous maintenance plans covering security updates, performance monitoring, regular backups, and new feature additions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#010504] text-white ${urbanist.className}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#2de8b0] text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20">
            FAQ
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white ${truculenta.className}`}>
            Frequently Asked <span className="text-[#2de8b0]">Questions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60">
            Everything you need to know about our web development process and solutions.
          </p>
        </div>

        {/* Simple Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white/5 border-[#2de8b0]/40 shadow-[0_0_20px_rgba(45,232,176,0.08)]"
                    : "bg-white/2 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-[#2de8b0]" : "text-white"
                    } ${truculenta.className}`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#2de8b0] text-black"
                        : "bg-white/5 text-white/60 border border-white/10"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
