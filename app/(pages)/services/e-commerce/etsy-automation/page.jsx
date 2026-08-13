import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Etsy Shop Automation & POD Growth Services | Devskarnel",
  description:
    "Automate your Etsy store: Print-on-Demand (POD) integration, bulk SEO keyword tag generation, automated customer buyer messaging, and inventory sync.",
};

const features = [
  {
    title: "Print-on-Demand (POD) Order Automation",
    desc: "Automated routing of Etsy orders directly to Printify, Gelato, Printful, or Gooten for instant fulfillment without manual entry.",
    icon: "🖨️",
    bullets: ["Printify & Printful Sync", "Zero Manual Order Entry", "Auto Shipping & Tracking Sync"],
  },
  {
    title: "Etsy Rank SEO Tag & Title Optimizer",
    desc: "AI keyword generator that creates high-ranking Etsy titles, 13 tags, and SEO product descriptions to dominate search results.",
    icon: "🔍",
    bullets: ["13 Tag Auto-Generation", "Etsy Search Algorithm Rules", "High-Volume Long-Tail Keywords"],
  },
  {
    title: "Bulk Listing & Mockup Generation",
    desc: "Automated creation of realistic apparel and digital product mockups with automated batch listing uploads to your Etsy shop.",
    icon: "🎨",
    bullets: ["Batch Mockup Creation", "Bulk Listing Uploads", "Personalization Text Fields"],
  },
  {
    title: "Automated Digital File Delivery",
    desc: "Instant automated delivery of digital downloads, Canva links, and printable files as soon as buyer payment clears.",
    icon: "⚡",
    bullets: ["Instant Digital Downloads", "Protected File Hosting", "Automated Licensing Messages"],
  },
  {
    title: "Etsy Buyer Messaging & Review Requests",
    desc: "Automated post-purchase message sequences thanking buyers, updating delivery status, and requesting 5-star reviews.",
    icon: "⭐",
    bullets: ["Order Confirmation Messages", "Delivered Status Follow-up", "5-Star Review Booster"],
  },
  {
    title: "Multi-Store & Shopify Sync",
    desc: "Synchronize inventory and orders seamlessly between Etsy, Shopify, Amazon Handmade, and eBay.",
    icon: "🔄",
    bullets: ["Shopify-to-Etsy Sync", "Stock Defect Protection", "Central Order Dashboard"],
  },
];

const faqs = [
  {
    q: "Can I automate Print-on-Demand (POD) orders on Etsy?",
    a: "Yes! We integrate your Etsy shop directly with Printify, Printful, Gelato, or custom print suppliers so when an order is placed, it is printed, packed, and shipped automatically.",
  },
  {
    q: "Does this work for digital download Etsy shops?",
    a: "Absolutely. We set up automated instant file delivery systems that deliver digital assets to buyers immediately upon checkout.",
  },
  {
    q: "How does the Etsy SEO keyword tag generator work?",
    a: "Our AI tool analyzes Etsy search demand and populates your 13 tags and titles with high-intent, low-competition keywords to rank your listings on page 1.",
  },
  {
    q: "Will automation risk my Etsy Star Seller status?",
    a: "On the contrary! Automated tracking number updates and sub-minute digital delivery guarantee 100% compliance with Etsy Star Seller criteria.",
  },
];

export default function EtsyAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="Etsy Marketplace Growth"
        titlePrefix="Scale Your Shop With"
        titleHighlight="Etsy Automation"
        titleSuffix="Systems"
        description="Automate your Etsy store with hands-free Print-on-Demand (POD) fulfillment, instant digital file delivery, automated 13-tag SEO optimization, and 5-star review flows."
        tags={["Etsy Star Seller", "POD Integration", "Digital Downloads", "13-Tag SEO"]}
        stats={[
          { label: "POD Order Speed", value: "Instant" },
          { label: "Star Seller Rating", value: "99.6%" },
          { label: "Search Visibility Lift", value: "+75%" },
        ]}
      />
      <ServiceFeatures
        badge="Etsy Capabilities"
        heading="Complete Etsy Autopilot Suite"
        subheading="Built for Print-on-Demand sellers, digital product creators, and handmade brand owners."
        features={features}
      />
      <ServiceProcess
        badge="Implementation"
        heading="Our Etsy Automation Blueprint"
        subheading="From POD provider connection and SEO tag setup to live automated dispatch."
      />
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
