import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "UI/UX Design Services | Devskarnel",
  description:
    "User-centered UI/UX design services crafting intuitive interfaces, high-converting prototypes, and seamless user experiences.",
};

const features = [
  {
    title: "User Research & Persona Mapping",
    desc: "In-depth user behavior analysis and persona creation to ensure product design aligns with your target audience's core motivations.",
    icon: "🧠",
    bullets: ["User Journeys", "Competitor Benchmarking", "Behavioral Heatmaps"],
  },
  {
    title: "Wireframing & Interactive Prototypes",
    desc: "Rapid wireframing and clickable Figma prototypes to test usability, flow, and user engagement before writing code.",
    icon: "📐",
    bullets: ["Figma & Framer Prototypes", "Low & High Fidelity", "User Flow Diagrams"],
  },
  {
    title: "Design Systems & Component Libraries",
    desc: "Scalable, reusable design tokens and UI components that speed up development and keep brand consistency across all platforms.",
    icon: "🎨",
    bullets: ["Design Tokens", "Typography Systems", "Accessible UI Kits"],
  },
  {
    title: "Mobile App & Web App Interfaces",
    desc: "Pixel-perfect visual designs tailored for iOS, Android, and modern web applications with glassmorphism and modern aesthetics.",
    icon: "📱",
    bullets: ["Responsive Web UI", "iOS & Android Apps", "Micro-Interactions"],
  },
  {
    title: "Usability Testing & Conversion Optimization",
    desc: "Data-driven UX audits and heatmapping to identify friction points and double conversion rates.",
    icon: "📈",
    bullets: ["A/B Test Designs", "Friction Audit", "Conversion Rate UX"],
  },
  {
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
        titlePrefix="Intuitive & High-Converting"
        titleHighlight="UI/UX Design"
        titleSuffix="Solutions"
        description="We craft intuitive digital interfaces, sleek design systems, and engaging user experiences that turn visitors into loyal customers."
        tags={["Figma Experts", "Design Systems", "User Research", "Conversion UX"]}
        stats={[
          { label: "Usability Score", value: "98%" },
          { label: "Design Systems Built", value: "60+" },
          { label: "Avg Conversion Increase", value: "+45%" },
        ]}
      />
      <ServiceFeatures
        badge="Capabilities"
        heading="Our UI/UX Expertise"
        subheading="Everything required to transform ideas into captivating, user-friendly digital products."
        features={features}
      />
      <ServiceProcess
        badge="Workflow"
        heading="Our UI/UX Design Process"
        subheading="From initial user research to developer handoff."
      />
      <Review />
      <CTASection />
    </>
  );
}
