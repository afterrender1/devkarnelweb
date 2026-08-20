"use client";

import React from "react";
import { urbanist } from "@/app/fonts";
import { CardStack } from "@/app/components/ui/card-stack";
import {
  Building2,
  ShoppingCart,
  Code2,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const services = [
  {
    id: 1,
    tag: "Solution 01",
    title: "Corporate & Business",
    desc: "Make a powerful first impression. We build polished, credibility-building sites that communicate brand values.",
    icon: <Building2 className="w-6 h-6 text-[#2de8b0]" />,
    bullets: ["Brand Identity Alignment", "Credibility Infrastructure", "Executive Presence"],
  },
  {
    id: 2,
    tag: "Solution 02",
    title: "eCommerce Development",
    desc: "Sell products and services online with a fast, secure store. We handle payment integrations and optimized checkout.",
    icon: <ShoppingCart className="w-6 h-6 text-[#2de8b0]" />,
    bullets: ["Payment Gateways", "High-Converting Checkout", "Inventory Sync"],
  },
  {
    id: 3,
    tag: "Solution 03",
    title: "WordPress Development",
    desc: "Flexible, scalable, and easy to manage. Custom themes and plugins tailored to your exact business needs.",
    icon: <Code2 className="w-6 h-6 text-[#2de8b0]" />,
    bullets: ["Custom Theme Engine", "Plugin Architecture", "SEO & Speed Optimization"],
  },
  {
    id: 4,
    tag: "Solution 04",
    title: "Website Redesigns",
    desc: "We transform underperforming websites into modern, high-converting digital experiences without starting from scratch.",
    icon: <RefreshCw className="w-6 h-6 text-[#2de8b0]" />,
    bullets: ["UI Modernization", "Conversion Funnel Revamp", "Zero Downtime"],
  },
  {
    id: 5,
    tag: "Solution 05",
    title: "Maintenance & Security",
    desc: "Keep your site fast and secure. We provide regular security audits, updates, and performance optimization.",
    icon: <ShieldCheck className="w-6 h-6 text-[#2de8b0]" />,
    bullets: ["Malware Protection", "Core Updates & Backups", "99.9% Uptime SLA"],
  },
  {
    id: 6,
    tag: "Solution 06",
    title: "Mobile-First Design",
    desc: "Built mobile-first to ensure a perfect experience on any device, screen, or browser—guaranteed.",
    icon: <Smartphone className="w-6 h-6 text-[#2de8b0]" />,
    bullets: ["Responsive Layouts", "Touch Micro-Interactions", "Retina Assets"],
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        background: `radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.4) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)`,
      }}
      className={`bg-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${urbanist.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-[#2de8b0] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 shadow-[0_0_15px_rgba(45,232,176,0.1)]">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight">
            Tailored digital solutions for modern brands.
          </h2>
        </div>

        {/* 3D Card Stack */}
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <CardStack
            items={services}
            initialIndex={0}
            autoAdvance
            intervalMs={3200}
            pauseOnHover
            showDots
            cardWidth={540}
            cardHeight={320}
          />
        </div>
      </div>
    </section>
  );
}