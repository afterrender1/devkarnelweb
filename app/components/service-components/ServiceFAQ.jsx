"use client";

import { useState } from "react";
import { urbanist, truculenta } from "@/app/fonts";

export default function ServiceFAQ({
  badge = "FAQ",
  heading = "Frequently Asked Questions",
  subheading = "Everything you need to know about our services and process.",
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 md:py-28 bg-[#0b0f19] text-white relative overflow-hidden ${urbanist.className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            {badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight ${truculenta.className}`}>
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            {subheading}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/3 border border-white/10 overflow-hidden transition-colors hover:border-emerald-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className={`text-lg sm:text-xl font-bold text-white ${truculenta.className}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 text-emerald-400 ${
                      isOpen ? "rotate-180 bg-emerald-500/20" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-white/70 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
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
