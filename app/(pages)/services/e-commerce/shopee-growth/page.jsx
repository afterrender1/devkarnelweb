import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Shopee Marketplace Growth & Automation Services | Devskarnel",
  description:
    "Dominate Shopee SEA marketplaces with automated campaign enrollment, chat auto-responders, multi-store inventory sync, and localized SEO.",
};

const features = [
  {
    title: "Shopee Auto-Chat Assistant",
    desc: "AI-driven customer chat auto-responders that answer product queries and issue discount vouchers within 60 seconds for higher Chat Response Rates.",
    icon: "💬",
    bullets: ["Sub-60s Response Time", "Instant Voucher Triggers", "Multi-Language Support"],
  },
  {
    title: "Campaign & Flash Sale Auto-Enrollment",
    desc: "Automatically enroll top SKUs into Shopee Mega Sales (11.11, 12.12) and daily Flash Sales to maximize store traffic.",
    icon: "⚡",
    bullets: ["Auto Mega-Sale Registration", "Flash Sale Slot Booking", "Dynamic Discount Rules"],
  },
  {
    title: "Multi-Country Store Sync (SEA)",
    desc: "Sync inventory and listings across Shopee Singapore, Malaysia, Philippines, Thailand, Vietnam, and Indonesia from one portal.",
    icon: "🌐",
    bullets: ["SEA Multi-Marketplace Sync", "Currency Conversion Rules", "Cross-Border Fulfillment"],
  },
  {
    title: "Shopee Ads Automated Bidding",
    desc: "Optimize Shopee Search Ads and Discovery Ads with automated bid adjustment scripts to lower Cost-per-Click (CPC) and boost ROAS.",
    icon: "📈",
    bullets: ["Auto Keyword Bidding", "ROAS Target Automation", "Discovery Ads Optimization"],
  },
  {
    title: "Cross-Border 3PL & Fulfillment Sync",
    desc: "Seamless integration with Shopee International Platform (SIP) and local 3PL fulfillment centers for automated parcel dispatch.",
    icon: "🚚",
    bullets: ["SIP Integration", "Automated Waybill Generation", "Local Warehouse Sync"],
  },
  {
    title: "Shopee Live Stream & Broadcast Automation",
    desc: "Schedule automated Shopee Feed broadcasts and live stream discount pushes to increase follower retention.",
    icon: "📺",
    bullets: ["Shopee Feed Broadcasts", "Live Coupon Popups", "Follower Growth Automation"],
  },
];

const faqs = [
  {
    q: "Why is Shopee Chat Response Rate (CRR) crucial for seller ranking?",
    a: "Shopee heavily penalizes stores with slow chat response times. Our AI auto-responder maintains a 99%+ Chat Response Rate, qualifying your store for Preferred Seller status.",
  },
  {
    q: "Which Shopee Southeast Asia regions do you support?",
    a: "We support Shopee SG, MY, PH, TH, VN, ID, and BR cross-border seller accounts.",
  },
  {
    q: "Can Shopee inventory be managed alongside Shopify or Lazada?",
    a: "Yes! We set up central inventory management that syncs stock in real time between Shopee, Lazada, TikTok Shop, and Shopify.",
  },
  {
    q: "How long does full Shopee automation setup take?",
    a: "Integration usually takes 3 to 5 business days.",
  },
];

export default function ShopeeGrowthPage() {
  return (
    <>
      <ServiceHero
        badge="Shopee Marketplace Growth"
        titlePrefix="Dominate SEA E-Commerce With"
        titleHighlight="Shopee Automation"
        titleSuffix="Services"
        description="Scale your Shopee stores across Southeast Asia with AI chat auto-responders, 99%+ response rate guarantees, automated Flash Sale enrollment, and SEA cross-border inventory sync."
        tags={["Shopee Preferred", "Auto Chat Bot", "Flash Sales", "Cross-Border Sync"]}
        stats={[
          { label: "Chat Response Rate", value: "99.2%" },
          { label: "Flash Sale Conversion", value: "+48%" },
          { label: "SEA Regions Supported", value: "6 Markets" },
        ]}
      />
      <ServiceFeatures
        badge="Shopee Architecture"
        heading="Southeast Asia Growth & Automation Suite"
        subheading="Built to expand your brand presence across Singapore, Malaysia, Philippines, Thailand, and Vietnam."
        features={features}
      />
      <ServiceProcess
        badge="Execution Flow"
        heading="Our Shopee Growth Roadmap"
        subheading="From API configuration and Chat Bot training to live multi-region automation."
      />
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
