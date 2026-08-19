import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Shopify Merchandise & Creator Store Automation | Devskarnel",
  description:
    "Automate merchandise stores for influencers, creators, and brands: Print-on-Demand product sync, VIP drops, pre-order automation, and fan loyalty rewards.",
};

const features = [
  {
    title: "Creator Merch Print-on-Demand Sync",
    desc: "Connect your Shopify merchandise store directly to high-quality apparel printers with automated fulfillment and custom neck tags.",
    icon: "👕",
    bullets: ["Custom Brand Neck Labels", "Zero Inventory Overhead", "Global POD Printer Sync"],
  },
  {
    title: "Limited Drop & Flash Sale Automation",
    desc: "Automate countdown timers, password-protected VIP shop access, and inventory allocation for viral merchandise drops.",
    icon: "⏱️",
    bullets: ["VIP Password Lock", "Live Countdown Timers", "Instant Inventory Release"],
  },
  {
    title: "Pre-Order & Backorder Engine",
    desc: "Accept customer pre-orders for upcoming apparel lines with automated card authorization and batch release dispatch.",
    icon: "💳",
    bullets: ["Pre-Order Authorizations", "Batch Shipping Sync", "Auto Backorder Notices"],
  },
  {
    title: "Bundling & Dynamic Discount Automation",
    desc: "Automated multi-item bundle creation (Hoodie + Cap + Sticker Pack) that dynamically boosts Average Order Value (AOV).",
    icon: "🎒",
    bullets: ["Smart Merch Bundles", "Tiered Quantity Discounts", "Free Gift Triggers"],
  },
  {
    title: "Social Commerce & YouTube/Instagram Merch Sync",
    desc: "Sync your merchandise catalog directly onto YouTube Merch Shelf, Instagram Shop, and TikTok Shop for instant in-feed checkout.",
    icon: "📲",
    bullets: ["YouTube Shopping Shelf", "Instagram Merch Store", "In-Feed Social Checkout"],
  },
  {
    title: "Fan Loyalty & VIP Subscriber Rewards",
    desc: "Automate fan loyalty points, exclusive merch access, and automated birthday gift rewards for dedicated community members.",
    icon: "👑",
    bullets: ["Loyalty Points Engine", "Subscriber-Exclusive Merch", "Automated Birthday Gift Drops"],
  },
];

export default function ShopifyMerchandisePage() {
  return (
    <>
      <ServiceHero
        badge="Creator Merch Automation"
        titlePrefix="Monetize Your Audience With"
        titleHighlight="Shopify Merchandise"
        titleSuffix="Automation"
        description="Launch and automate high-margin merchandise stores for creators, influencers, and brands with Print-on-Demand sync, limited drop countdowns, and social checkout."
        tags={["Creator Merch", "POD Fulfillment", "Limited Drops", "YouTube Shopping"]}
        stats={[
          { label: "AOV Increase", value: "+38%" },
          { label: "Fulfillment Speed", value: "Autopilot" },
          { label: "Inventory Risk", value: "Zero Stock" },
        ]}
      />
      <ServiceFeatures
        badge="Merchandise Architecture"
        heading="Enterprise Creator Merch Toolkit"
        subheading="Designed specifically to monetize fan communities with premium merchandise and zero inventory overhead."
        features={features}
      />
      <ServiceProcess
        badge="Implementation Roadmap"
        heading="Our Creator Merch Launch Blueprint"
        subheading="From merch mockups and POD connection to limited drop setup and social store sync."
      />
      <Review />
      <CTASection />
    </>
  );
}
