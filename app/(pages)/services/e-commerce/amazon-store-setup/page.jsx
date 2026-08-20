import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Amazon Store Setup & Growth Services | Devskarnel",
  description:
    "End-to-end Amazon FBA/FBM store setup, Brand Registry, A+ Content design, PPC ad automation, and inventory forecasting for Amazon Store growth.",
};

const features = [
  {
    title: "Amazon Brand Registry & Storefront Setup",
    desc: "Complete Amazon Seller Central setup, trademark registration guidance, and custom Amazon Brand Storefront design.",
    icon: "🏪",
    bullets: ["Brand Registry Approval", "Custom Brand Storefront", "A+ Premium Content"],
  },
  {
    title: "Product Listing Optimization & SEO Copy",
    desc: "Keyword-rich Amazon SEO copywriting, title structure, backend search terms, and bullet points to maximize organic ranking.",
    icon: "📝",
    bullets: ["Helium 10 Keyword Mining", "Backend Search Terms", "High-Converting Bullet Points"],
  },
  {
    title: "A+ Brand Content & 3D Infographics",
    desc: "High-resolution graphic design for Amazon A+ Content, comparison charts, and lifestyle infographic product photography.",
    icon: "🎨",
    bullets: ["Lifestyle Visuals", "Comparison Modules", "Brand Story Carousel"],
  },
  {
    title: "Amazon PPC & Sponsored Ads Automation",
    desc: "Automated keyword bidding, Sponsored Products, Sponsored Brands, and Sponsored Display ad campaigns to lower your ACOS.",
    icon: "📈",
    bullets: ["Automated Bid Adjustments", "Negative Keyword Scrubbing", "Target ACOS Under 20%"],
  },
  {
    title: "FBA Logistics & Inventory Forecasting",
    desc: "Shipment plan creation, automated barcode labeling (FNSKU), pallet shipping coordination, and inventory restock alerts.",
    icon: "📦",
    bullets: ["FNSKU Barcode Compliance", "Restock Alert Algorithms", "Customs & Freight Guidance"],
  },
  {
    title: "Review Request Funnels & Account Health",
    desc: "Automated Amazon TOS-compliant review request emails, seller feedback monitoring, and 100% account health guarantee.",
    icon: "⭐",
    bullets: ["TOS-Compliant Review Automation", "Buy Box Monitoring", "Hijacker & Infringement Shield"],
  },
];

export default function AmazonStorePage() {
  return (
    <>
      <ServiceHero
        badge="Amazon Growth Studio"
        titlePrefix="End-to-End Amazon"
        titleHighlight="Store Setup & Automation"
        titleSuffix="Services"
        description="Launch and scale a high-margin Amazon FBA brand with expert listing optimization, custom A+ storefront design, and automated PPC campaigns."
        tags={["Amazon FBA", "Brand Registry", "A+ Content", "PPC Automation"]}
        stats={[
          { label: "Stores Launched", value: "120+" },
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
        heading="Our Amazon Store Setup Process"
        subheading="From Seller Central verification and Brand Registry to live FBA launch and PPC automation."
      />
      <CTASection />
    </>
  );
}
