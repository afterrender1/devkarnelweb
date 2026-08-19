import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import LogoPricing from "@/app/components/logo-components/LogoPricing";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Branding & Logo Design Services | Devskarnel",
  description:
    "Complete brand identity design, logo design, brand guidelines, color palettes, and visual branding assets for modern companies.",
};

const features = [
  {
    title: "Custom Logo Design",
    desc: "Memorable, versatile, vector logos crafted to reflect your brand's mission across digital and print mediums.",
    icon: "💎",
    bullets: ["Vector Formats (SVG/EPS)", "3D & Flat Variations", "Full Copyright Ownership"],
  },
  {
    title: "Comprehensive Brand Guidelines",
    desc: "Complete brand style books covering typography hierarchy, logo usage rules, spacing, and brand voice guidelines.",
    icon: "📖",
    bullets: ["PDF Brand Guidelines", "Typography Rules", "Dos & Don'ts Manual"],
  },
  {
    title: "Color Palette Systems",
    desc: "Scientifically curated color harmonies (HEX, RGB, CMYK, Pantone) optimized for digital screens and physical print.",
    icon: "🎨",
    bullets: ["Primary & Accent Colors", "Dark & Light Mode Variants", "Pantone Standard Matching"],
  },
  {
    title: "Social Media Branding Kits",
    desc: "Cohesive social media banners, avatar assets, story templates, and post frames tailored for Instagram, LinkedIn, and X.",
    icon: "📱",
    bullets: ["Profile & Banner Assets", "Editable Canva Templates", "Story & Post Kits"],
  },
  {
    title: "Stationery & Packaging Design",
    desc: "Business card layouts, letterheads, product packaging mockups, and corporate merchandise designs.",
    icon: "📦",
    bullets: ["Print-ready Files", "Packaging Dielines", "Corporate Stationery"],
  },
  {
    title: "3D Brand Mockups & Visual Assets",
    desc: "High-resolution 3D renders showcasing your product packaging, mobile apps, and merchandise in real-world contexts.",
    icon: "✨",
    bullets: ["Photorealistic 3D Renders", "High Resolution Output", "Marketing-ready Graphics"],
  },
];


export default function BrandingPage() {
  return (
    <>
      <ServiceHero
        badge="Brand Identity Studio"
        titleLine1="Memorable & timeless"
        titleLine2="Branding & visual design."
        description="We craft iconic brand identities, custom logo systems, and complete visual guidelines that establish immediate market authority."
        ctaText="Start Your Brand"
        ctaHref="#contact"
        secondaryCtaText="Book a Discovery Call"
        secondaryCtaHref="https://calendly.com/devskarnel/30min"
      />
      <ServiceFeatures
        badge="Visual Identity"
        heading="Complete Branding Services"
        subheading="Everything required to position your company as an industry leader."
        features={features}
      />
      <LogoPricing />
      <ServiceProcess
        badge="Methodology"
        heading="Our Brand Design Process"
        subheading="From brand discovery to complete style guide handoff."
      />
      <CTASection />
    </>
  );
}
