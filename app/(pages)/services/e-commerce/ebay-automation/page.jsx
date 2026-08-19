import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "eBay Automation Services | Devskarnel",
  description:
    "Automate listing creation, pricing algorithms, multi-channel inventory sync, and buyer messaging for high-velocity eBay store growth.",
};

const features = [
  {
    title: "Bulk AI Listing Creation",
    desc: "Generate SEO-optimized eBay product titles, HTML item descriptions, and item specifics in bulk using advanced AI engines.",
    icon: "🏷️",
    bullets: ["Auto Item Specifics", "Mobile-Optimized HTML Templates", "Bulk CSV Uploads"],
  },
  {
    title: "Real-Time Multi-Channel Sync",
    desc: "Sync inventory instantly between eBay, Shopify, Amazon, and Walmart to prevent double-selling and seller defect ratings.",
    icon: "🔄",
    bullets: ["Zero-Stock Prevention", "Multi-Store Inventory Engine", "Instant Status Sync"],
  },
  {
    title: "Automated Competitor Repricing",
    desc: "Algorithmic repricing that adjusts your eBay listing prices dynamically to win Best Match placement while protecting margins.",
    icon: "📊",
    bullets: ["Best Match Algorithm Rules", "Margin Safeguards", "Competitor Price Tracking"],
  },
  {
    title: "Auto Buyer Messaging & Feedback",
    desc: "Automatic positive feedback generation upon payment and automated tracking updates sent directly to buyers.",
    icon: "💬",
    bullets: ["Instant Feedback Delivery", "Automated Tracking Messages", "Buyer Disagree Filter"],
  },
  {
    title: "Automated Best Offer Management",
    desc: "Accept, counter, or decline eBay buyer offers automatically based on custom minimum profit percentage thresholds.",
    icon: "🤝",
    bullets: ["Auto-Accept Rules", "Dynamic Counter Offers", "Minimum Margin Controls"],
  },
  {
    title: "eBay Promoted Listings Optimization",
    desc: "Automated ad rate adjustments for Promoted Listings Standard & Advanced to maximize visibility while maintaining low ad cost of sales (ACOS).",
    icon: "🚀",
    bullets: ["Dynamic Ad Rate Rules", "ACOS Cap Optimization", "Keyword Bid Automation"],
  },
];

export default function EbayAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="eBay Marketplace Solution"
        titlePrefix="Scale Your Business With"
        titleHighlight="eBay Automation"
        titleSuffix="Services"
        description="Dominate eBay search rankings with bulk AI listing creation, real-time repricing rules, automated Best Offer management, and multi-channel inventory sync."
        tags={["eBay API", "Bulk AI Listings", "Auto Repricing", "Promoted Ads"]}
        stats={[
          { label: "Best Match Lift", value: "+55%" },
          { label: "Listing Creation Speed", value: "10x" },
          { label: "Inventory Accuracy", value: "100%" },
        ]}
      />
      <ServiceFeatures
        badge="eBay Capabilities"
        heading="High-Profit eBay Automation Features"
        subheading="Streamline store management, increase conversion rates, and protect your margins effortlessly."
        features={features}
      />
      <ServiceProcess
        badge="Execution"
        heading="Our eBay Automation Blueprint"
        subheading="Step-by-step onboarding, rule configuration, and full store automation."
      />
      <CTASection />
    </>
  );
}
