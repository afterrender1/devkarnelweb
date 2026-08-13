import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Shopify Automation Services | Devskarnel",
  description:
    "Automate your Shopify store operations, inventory syncing, order fulfillment, pricing rules, and customer retargeting for hands-free passive growth.",
};

const features = [
  {
    title: "Automated Inventory & Supplier Sync",
    desc: "Real-time stock level synchronization across multiple suppliers and warehouses to eliminate overselling and manual updates.",
    icon: "📦",
    bullets: ["Auto-Stock Updates", "Supplier API Connectors", "Low Stock Alerts"],
  },
  {
    title: "Order Processing & Auto-Fulfillment",
    desc: "Seamless order Routing to 3PL partners and dropshipping suppliers with instant tracking number generation.",
    icon: "⚡",
    bullets: ["Auto-3PL Dispatch", "Tracking Notifications", "Multi-Warehouse Routing"],
  },
  {
    title: "Dynamic Price & Profit Optimization",
    desc: "Automated repricing algorithms and currency conversion to maximize profit margins based on market demand.",
    icon: "🏷️",
    bullets: ["Smart Repricing Rules", "Margin Protection", "Multi-Currency Sync"],
  },
  {
    title: "Klaviyo Email & SMS Flow Automation",
    desc: "High-converting abandoned cart recovery, welcome series, post-purchase upsells, and review requests built on autopilot.",
    icon: "📧",
    bullets: ["Abandoned Cart Sequences", "Post-Purchase Upsells", "VIP Loyalty Flows"],
  },
  {
    title: "Automated Returns & Exchange Management",
    desc: "Self-service return portals that issue store credits or return labels without customer support intervention.",
    icon: "🔄",
    bullets: ["Self-Service Portal", "Auto Return Labels", "Store Credit Refunds"],
  },
  {
    title: "Shopify Flow & Custom Webhooks",
    desc: "Tailored Shopify Flow workflows and custom API integrations connecting your store to ERP, CRM, and accounting tools.",
    icon: "⚙️",
    bullets: ["Shopify Flow Rules", "QuickBooks / Xero Sync", "Custom Webhooks"],
  },
];

const faqs = [
  {
    q: "How does Shopify Automation work?",
    a: "We integrate custom API connectors, Shopify Flow apps, and automated workflows into your Shopify backend so orders, stock levels, tracking, and email flows run 24/7 without manual effort.",
  },
  {
    q: "Will this slow down my Shopify store speed?",
    a: "Not at all. All automation scripts run server-side via webhooks and background workers, maintaining peak store load times and Google Core Web Vitals.",
  },
  {
    q: "Can I connect custom suppliers or dropshipping agents?",
    a: "Yes! We build custom REST/GraphQL API integrations to sync CSV/XML feeds, FTP servers, or direct portal connections from any supplier worldwide.",
  },
  {
    q: "What is the expected ROI for automated store management?",
    a: "Our clients typically save 30+ hours per week of manual labor and experience a 25-40% increase in recovered sales through automated abandoned checkout flows.",
  },
];

export default function ShopifyAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="E-Commerce Automation"
        titlePrefix="Scale Hands-Free With"
        titleHighlight="Shopify Automation"
        titleSuffix="Solutions"
        description="Transform your Shopify store into a self-running revenue engine with automated inventory sync, hands-free order fulfillment, and AI-driven retention flows."
        tags={["Shopify Plus", "Auto Fulfillment", "Klaviyo Flows", "Inventory Sync"]}
        stats={[
          { label: "Hours Saved Weekly", value: "30+" },
          { label: "Auto Order Accuracy", value: "99.9%" },
          { label: "Recovered Cart Revenue", value: "+38%" },
        ]}
      />
      <ServiceFeatures
        badge="Automation Capabilities"
        heading="Complete Shopify Autopilot Suite"
        subheading="Everything you need to automate daily operations, eliminate human error, and scale your brand effortlessly."
        features={features}
      />
      <ServiceProcess
        badge="Implementation"
        heading="Our Automation Deployment Process"
        subheading="From backend audit to fully tested, self-operating Shopify store."
      />
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
