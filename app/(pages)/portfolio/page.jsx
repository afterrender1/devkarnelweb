import React from "react";
import Portfolio from "@/app/components/layout/Portfolio";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Our Portfolio & Showcase Projects | Devskarnel",
  description:
    "Explore our showcase of live web platforms, e-commerce automation stores, custom WordPress & Next.js applications, and mobile UI solutions built by Devskarnel.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio />
      <CTASection />
    </main>
  );
}
