import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";
import { CardStack } from "@/app/components/ui/card-stack";

export const metadata = {
  title: "UI/UX Design Services | Devskarnel",
  description:
    "User-centered UI/UX design services crafting intuitive interfaces, high-converting prototypes, and seamless user experiences.",
};

const featuresData = [
  {
    id: 1,
    tag: "Capability 01",
    title: "User Research & Persona Mapping",
    desc: "In-depth user behavior analysis and persona creation to ensure product design aligns with your target audience's core motivations.",
    icon: "🧠",
    bullets: ["User Journeys", "Competitor Benchmarking", "Behavioral Heatmaps"],
  },
  {
    id: 2,
    tag: "Capability 02",
    title: "Wireframing & Interactive Prototypes",
    desc: "Rapid wireframing and clickable Figma prototypes to test usability, flow, and user engagement before writing code.",
    icon: "📐",
    bullets: ["Figma & Framer Prototypes", "Low & High Fidelity", "User Flow Diagrams"],
  },
  {
    id: 3,
    tag: "Capability 03",
    title: "Design Systems & Component Libraries",
    desc: "Scalable, reusable design tokens and UI components that speed up development and keep brand consistency across all platforms.",
    icon: "🎨",
    bullets: ["Design Tokens", "Typography Systems", "Accessible UI Kits"],
  },
  {
    id: 4,
    tag: "Capability 04",
    title: "Mobile App & Web App Interfaces",
    desc: "Pixel-perfect visual designs tailored for iOS, Android, and modern web applications with glassmorphism and modern aesthetics.",
    icon: "📱",
    bullets: ["Responsive Web UI", "iOS & Android Apps", "Micro-Interactions"],
  },
  {
    id: 5,
    tag: "Capability 05",
    title: "Usability Testing & Conversion Optimization",
    desc: "Data-driven UX audits and heatmapping to identify friction points and double conversion rates.",
    icon: "📈",
    bullets: ["A/B Test Designs", "Friction Audit", "Conversion Rate UX"],
  },
  {
    id: 6,
    tag: "Capability 06",
    title: "Accessibility & WCAG Compliance",
    desc: "Ensuring your digital product meets WCAG standards for inclusivity, contrast ratio, and seamless navigation.",
    icon: "♿",
    bullets: ["Contrast Ratios", "Screen-reader Ready", "WCAG 2.1 AA"],
  },
];

export default function UIUXDesignPage() {
  return (
    <>
      <ServiceHero
        badge="UI/UX Design Studio"
        titleLine1="Intuitive & high-converting"
        titleLine2="UI/UX design experiences."
        description="We craft intuitive digital interfaces, sleek design systems, and engaging user journeys that turn visitors into loyal customers."
        ctaText="Start Your Project"
        ctaHref="#contact"
        secondaryCtaText="Book a Consultation"
        secondaryCtaHref="https://calendly.com/devskarnel/30min"
      />

      {/* Interactive 3D Card Stack replacing old static grid */}
      <section className="py-20 sm:py-28 bg-[#010504] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="text-[#2de8b0] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 shadow-[0_0_15px_rgba(45,232,176,0.1)]">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our UI/UX <span className="text-[#2de8b0]">Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Everything required to transform ideas into captivating, user-friendly digital products.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <CardStack
            items={featuresData}
            initialIndex={0}
            autoAdvance
            intervalMs={3200}
            pauseOnHover
            showDots
            cardWidth={540}
            cardHeight={320}
          />
        </div>
      </section>

      <ServiceProcess
        badge="Workflow"
        heading="Our UI/UX Design Process"
        subheading="From initial user research to developer handoff."
      />
      <CTASection />
    </>
  );
}
