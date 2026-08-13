import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import LogoPricing from "@/app/components/logo-components/LogoPricing";
import Review from "@/app/components/web-components/Review";
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

const faqs = [
  {
    q: "What files will I receive with my logo and branding?",
    a: "You get full source vector files (AI, EPS, SVG) along with high-res PNG, JPG, transparent files, and complete PDF brand guidelines.",
  },
  {
    q: "Do I own full commercial copyrights to the logo?",
    a: "Yes! Once final designs are delivered, 100% full intellectual property and commercial copyright belongs entirely to you.",
  },
  {
    q: "How many logo concepts will you present?",
    a: "Depending on your selected package, we present 3 to 6 unique initial logo concepts with unlimited revisions until you are thrilled.",
  },
  {
    q: "Can you refresh an existing company logo?",
    a: "Yes! We specialize in modernizing legacy logos into clean, timeless vector brand assets while retaining brand recognition.",
  },
];

export default function BrandingPage() {
  return (
    <>
      <ServiceHero
        badge="Brand Identity Studio"
        titlePrefix="Memorable & Timeless"
        titleHighlight="Branding & Logo"
        titleSuffix="Design"
        description="We craft iconic brand identities, custom logo designs, and complete visual systems that establish immediate authority and recognition."
        tags={["Vector Logos", "Brand Style Guides", "Color Palettes", "3D Mockups"]}
        stats={[
          { label: "Brands Created", value: "300+" },
          { label: "Client Approval Rate", value: "99.4%" },
          { label: "Avg Turnaround", value: "3-5 Days" },
        ]}
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
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
