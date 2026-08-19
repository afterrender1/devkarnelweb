import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Walmart Marketplace Automation Services | Devskarnel",
  description:
    "Scale your Walmart Marketplace business with automated Buy Box repricing, WFS inventory routing, order processing, and listing spec sync.",
};

const features = [
  {
    title: "Walmart Buy Box Repricer",
    desc: "Algorithmic repricing that actively competes for the Walmart Buy Box in real time while maintaining minimum margin protections.",
    icon: "🎯",
    bullets: ["Real-Time Buy Box Targeting", "Margin Floor Locks", "Competitor Trigger Rules"],
  },
  {
    title: "WFS & 3PL Order Routing",
    desc: "Automated inventory routing to Walmart Fulfillment Services (WFS) or third-party logistics warehouses for fast 2-day delivery tags.",
    icon: "🚚",
    bullets: ["WFS Auto-Replenishment", "2-Day Delivery Badge Setup", "Multi-Warehouse Sync"],
  },
  {
    title: "Spec 4.0 Listing Feed Automation",
    desc: "Automated listing uploads meeting Walmart Spec 4.0 guidelines with optimized attributes, rich media, and compliance checks.",
    icon: "📋",
    bullets: ["Spec 4.0 Compatibility", "Rich Media Integration", "Error Code Auto-Fixing"],
  },
  {
    title: "Automated Walmart Ad Campaign Management",
    desc: "AI-driven bidding for Sponsored Products ad campaigns to capture high-converting search terms and boost organic ranking.",
    icon: "📈",
    bullets: ["Keyword Bid Automation", "Placement Optimization", "Ad Spend Guardrails"],
  },
  {
    title: "Customer Support & Returns Portal Sync",
    desc: "Automated ticket resolution for tracking inquiries and seamless processing of Walmart Return Portal requests.",
    icon: "🎧",
    bullets: ["Auto Ticket Escalation", "In-Store Return Processing", "Dispute Resolution Feeds"],
  },
  {
    title: "Account Health & Seller Score Shield",
    desc: "24/7 monitoring of On-Time Delivery (OTD), Cancellation Rate, and Valid Tracking Rate (VTR) metrics to prevent suspensions.",
    icon: "🛡️",
    bullets: ["OTD & VTR Health Tracking", "Auto Alerts & Diagnostics", "Policy Compliance Guards"],
  },
];

export default function WalmartAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="Walmart Marketplace Specialist"
        titlePrefix="Accelerate Revenue With"
        titleHighlight="Walmart Automation"
        titleSuffix="Systems"
        description="Win the Walmart Buy Box, gain 2-Day Delivery badges, and automate inventory & order management across Walmart Marketplace and WFS."
        tags={["Walmart Buy Box", "WFS Fulfillment", "Spec 4.0 Feeds", "Sponsored Ads"]}
        stats={[
          { label: "Buy Box Win Rate", value: "+62%" },
          { label: "Order Processing Speed", value: "Instant" },
          { label: "Seller Score", value: "99.4%" },
        ]}
      />
      <ServiceFeatures
        badge="Automation Architecture"
        heading="Enterprise Walmart Marketplace Tools"
        subheading="Built to capture market share on America's fastest-growing retail marketplace."
        features={features}
      />
      <ServiceProcess
        badge="Onboarding Flow"
        heading="Our Walmart Store Automation Roadmap"
        subheading="From API keys configuration to live automated repricing & fulfillment."
      />
      <CTASection />
    </>
  );
}
