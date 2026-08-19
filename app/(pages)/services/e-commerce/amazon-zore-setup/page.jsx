import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Amazon Store Setup & Growth Services (Amazon Zore) | Devskarnel",
  description:
    "End-to-end Amazon FBA/FBM store setup, Brand Registry, A+ Content design, PPC ad automation, and inventory forecasting for Amazon Zore growth.",
};

const features = [
  {
    title: "Amazon Brand Registry & Storefront Setup",
    desc: "Complete Amazon Seller Central setup, trademark registration guidance, and custom Amazon Brand Storefront design.",
    icon: "🏪",
    bullets: ["Brand Registry Approval", "Custom Brand Storefront", "A+ Premium Content"],
  },
  {
    title: "Amazon FBA Shipment & Inbound Automation",
    desc: "Automated FBA shipment creation, 2D barcode label generation, and automated inventory replenishment thresholds.",
    icon: "📦",
    bullets: ["Automated FBA Inbound", "2D Barcode Labeling", "FBA Stock Restock Alerts"],
  },
  {
    title: "Algorithmic Amazon PPC & Sponsored Ads",
    desc: "AI-driven bidding tools for Amazon Sponsored Products, Brands, and Display ads to maximize ROAS and organic keyword ranking.",
    icon: "🚀",
    bullets: ["Auto Negative Keywords", "Target ACOS Bidding", "Sponsored Video Ads"],
  },
  {
    title: "Buy Box & Competitor Repricing Engine",
    desc: "24/7 dynamic repricing to capture and retain the Amazon Buy Box while setting hard price floors to protect margins.",
    icon: "🎯",
    bullets: ["Buy Box Repricing Rules", "Margin Safeguards", "Suppressed Buy Box Alerts"],
  },
  {
    title: "Automated Buyer Review Generation (Vine & Feedback)",
    desc: "Compliant automated review request sequences and Amazon Vine program management to generate early 5-star customer ratings.",
    icon: "⭐",
    bullets: ["Amazon Compliant Review Requests", "Amazon Vine Enrollment", "Hijacker & Seller Alerts"],
  },
  {
    title: "Listing Optimization & Indexing Audit",
    desc: "SEO listing copywriting, backend search terms optimization, and indexation checks ensuring your products rank on page 1.",
    icon: "📈",
    bullets: ["Helium 10 & Jungle Scout SEO", "Backend Search Terms", "Page 1 Keyword Ranking"],
  },
];

export default function AmazonZoreSetupPage() {
  return (
    <>
      <ServiceHero
        badge="Amazon FBA & Brand Growth"
        titlePrefix="Build & Scale With"
        titleHighlight="Amazon Store Setup"
        titleSuffix="& Automation"
        description="Launch and scale a high-profit Amazon FBA business with Brand Registry, custom A+ storefront design, Buy Box repricing, and automated PPC ad optimization."
        tags={["Amazon FBA", "Brand Registry", "A+ Content", "PPC Automation"]}
        stats={[
          { label: "Page 1 Keyword Index", value: "95%+" },
          { label: "Average ACOS Reduction", value: "-35%" },
          { label: "Buy Box Win Rate", value: "+68%" },
        ]}
      />
      <ServiceFeatures
        badge="Amazon Architecture"
        heading="Enterprise Amazon Growth Toolkit"
        subheading="Everything required to build a multi-million dollar Amazon brand from scratch."
        features={features}
      />
      <ServiceProcess
        badge="Execution Blueprint"
        heading="Our Amazon Zore Setup Process"
        subheading="From Seller Central verification and Brand Registry to live FBA launch and PPC automation."
      />
      <Review />
      <CTASection />
    </>
  );
}
