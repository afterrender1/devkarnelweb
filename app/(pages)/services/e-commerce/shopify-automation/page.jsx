import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
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
      <CTASection />
    </>
  );
}
