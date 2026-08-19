import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Penties E-Commerce Automation Services | Devskarnel",
  description:
    "Automate your apparel & intimacy merchandise brand with recurring subscription workflows, size recommendation AI, discreet packaging automation, and automated fulfillment.",
};

const features = [
  {
    title: "Automated Monthly Subscription Boxes",
    desc: "Recurring billing and automated subscription box curation workflows for seamless monthly customer deliveries.",
    icon: "🎁",
    bullets: ["Recharge / Skio Subscriptions", "Auto Curation Rules", "Swap & Skip Management"],
  },
  {
    title: "AI Size Recommendation & Fit Quiz",
    desc: "Interactive size recommendation quizzes that reduce returns and increase customer purchase confidence.",
    icon: "📏",
    bullets: ["Smart Fit Calculator", "Return Rate Reduction", "Personalized Recommendations"],
  },
  {
    title: "Discreet Packaging & 3PL Warehouse Routing",
    desc: "Automated warehouse pick-and-pack rules ensuring 100% unbranded, discreet packaging for customer privacy.",
    icon: "📦",
    bullets: ["Discreet Packaging Rules", "3PL Warehouse Automation", "Custom Insert Cards"],
  },
  {
    title: "Automated Customer Retention & VIP Flows",
    desc: "Automated email & SMS marketing flows that boost subscriber lifetime value (LTV) and encourage multi-pack upsells.",
    icon: "💌",
    bullets: ["Multi-Pack Upsell Sequences", "VIP Subscriber Perks", "Win-Back Campaigns"],
  },
  {
    title: "Inventory Matrix & Variant Sync",
    desc: "Automated stock tracking for complex color, fabric, and size matrices across multiple fulfillment locations.",
    icon: "📊",
    bullets: ["Complex Variant Matrix", "Real-Time Stock Sync", "Low Variant Restock Alerts"],
  },
  {
    title: "Hygiene Return Policy & Auto Support Portal",
    desc: "Automated customer support workflows enforcing intimacy garment hygiene return policies with instant store credit issues.",
    icon: "🛡️",
    bullets: ["Hygiene Policy Enforcement", "Instant Store Credit", "Automated Ticket Resolution"],
  },
];

export default function PentiesAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="Intimacy & Apparel Automation"
        titlePrefix="Scale Your Brand With"
        titleHighlight="Penties E-Commerce"
        titleSuffix="Automation"
        description="Scale your intimacy and apparel brand with automated monthly subscription boxes, AI size recommendation quizzes, discreet packaging workflows, and automated 3PL fulfillment."
        tags={["Apparel Subscriptions", "AI Fit Quiz", "Discreet Packaging", "LTV Retention"]}
        stats={[
          { label: "Subscriber LTV Increase", value: "+42%" },
          { label: "Return Rate Reduction", value: "-35%" },
          { label: "Auto Order Accuracy", value: "99.9%" },
        ]}
      />
      <ServiceFeatures
        badge="Specialized Capabilities"
        heading="Apparel & Intimacy Store Systems"
        subheading="Built to streamline subscription models, enhance customer privacy, and maximize subscriber lifetime value."
        features={features}
      />
      <ServiceProcess
        badge="Deployment Roadmap"
        heading="Our Apparel Automation Blueprint"
        subheading="From subscription setup and fit quiz creation to warehouse 3PL automation."
      />
      <CTASection />
    </>
  );
}
