import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "TikTok Shop Automation Services | Devskarnel",
  description:
    "Automate your TikTok Shop store operations, influencer affiliate outreach, viral product sync, and automated order fulfillment.",
};

const features = [
  {
    title: "Automated Affiliate Outreach Engines",
    desc: "Send thousands of customized affiliate invitation messages daily to high-converting TikTok creators in your exact niche.",
    icon: "🚀",
    bullets: ["Auto Creator Prospecting", "Custom Message Sequences", "Sample Dispatch Rules"],
  },
  {
    title: "Viral Product & Catalog Sync",
    desc: "Seamlessly map your Shopify or warehouse catalog directly into TikTok Shop Seller Center with real-time stock sync.",
    icon: "🛍️",
    bullets: ["Shopify-to-TikTok Sync", "Real-Time Stock Lock", "Bulk Category Mapping"],
  },
  {
    title: "Automated Sample Order Dispatch",
    desc: "Approve and ship product sample requests from creator affiliates automatically based on follower metrics and engagement criteria.",
    icon: "📦",
    bullets: ["Metric-Based Sample Approvals", "Auto Warehouse Shipments", "Sample Tracking Sync"],
  },
  {
    title: "TikTok Ads & GMV Max Automation",
    desc: "AI-powered campaign optimization for TikTok Shop GMV Max ads to maximize ROAS on trending viral products.",
    icon: "📊",
    bullets: ["GMV Max Ad Bidding", "ROAS Target Safeguards", "Creative Performance Tracking"],
  },
  {
    title: "Order Fulfillment & Tracking Sync",
    desc: "Fulfill TikTok Shop orders within TikTok's strict SLA windows automatically using 3PL warehouses or FBT (Fulfilled by TikTok).",
    icon: "⚡",
    bullets: ["Strict SLA Compliance", "FBT / 3PL Dispatch", "Auto Tracking Updates"],
  },
  {
    title: "Flash Sale & Live Commerce Pricing",
    desc: "Schedule automated TikTok Shop Flash Deals, vouchers, and live stream discount pricing scripts for high-volume conversion spikes.",
    icon: "🔥",
    bullets: ["Automated Flash Deals", "Live Stream Coupon Scripts", "Dynamic Voucher Creation"],
  },
];

export default function TikTokShopAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="TikTok Shop Growth Engine"
        titlePrefix="Turn Viral Views Into Sales With"
        titleHighlight="TikTok Shop Automation"
        titleSuffix="Systems"
        description="Automate creator affiliate outreach, product catalog sync, automated sample shipping, and 2-day order fulfillment for explosive TikTok Shop growth."
        tags={["TikTok Seller Center", "Affiliate Outreach", "GMV Max Ads", "Shopify Sync"]}
        stats={[
          { label: "Creator Outreach / Day", value: "1,000+" },
          { label: "Affiliate Revenue Share", value: "70%+" },
          { label: "Fulfillment SLA Score", value: "99.8%" },
        ]}
      />
      <ServiceFeatures
        badge="TikTok Capabilities"
        heading="Complete TikTok Shop Autopilot Toolkit"
        subheading="Designed to capture social commerce market share and scale viral product sales."
        features={features}
      />
      <ServiceProcess
        badge="Implementation"
        heading="Our TikTok Shop Automation Blueprint"
        subheading="From Seller Center audit to automated affiliate messaging and order dispatch."
      />
      <CTASection />
    </>
  );
}
