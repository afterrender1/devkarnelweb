import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "WooCommerce Store Development & Management | Devskarnel",
  description:
    "Custom WooCommerce store development, high-speed performance optimization, custom plugin development, and automated inventory systems.",
};

const features = [
  {
    title: "Custom WooCommerce Theme Development",
    desc: "Bespoke, lightweight WooCommerce themes built for speed, conversion rate optimization, and high mobile responsiveness.",
    icon: "💻",
    bullets: ["Pixel-Perfect Design", "Sub-1s Load Time", "Mobile-First UX"],
  },
  {
    title: "Headless WooCommerce & REST API",
    desc: "Decoupled frontend architecture using Next.js/React with WooCommerce REST API backend for ultimate speed and scalability.",
    icon: "🚀",
    bullets: ["Next.js Headless Frontend", "GraphQL / REST API Integration", "Zero Database Bottleneck"],
  },
  {
    title: "Custom WooCommerce Plugin Development",
    desc: "Tailored WordPress plugins engineered to implement complex business logic, custom payment gateways, and subscription models.",
    icon: "🔌",
    bullets: ["Custom PHP/JS Plugins", "Stripe / PayPal Gateways", "Recurring Subscriptions"],
  },
  {
    title: "WooCommerce Speed & Database Optimization",
    desc: "Drastic database cleanup, Object Caching (Redis), CDN integration, and script minification for 95+ PageSpeed scores.",
    icon: "⚡",
    bullets: ["Redis Object Cache", "Database Indexing", "95+ Google PageSpeed"],
  },
  {
    title: "Automated Multi-Channel ERP Sync",
    desc: "Connect WooCommerce with Salesforce, QuickBooks, SAP, and external marketplaces for synchronized order and inventory management.",
    icon: "🔄",
    bullets: ["QuickBooks / SAP Connectors", "Real-Time Stock Sync", "Auto Order Export"],
  },
  {
    title: "WooCommerce Security & Maintenance",
    desc: "24/7 malware scanning, automated off-site daily backups, database optimization, and core/plugin update safeguards.",
    icon: "🛡️",
    bullets: ["Off-Site Daily Backups", "Malware Firewall", "Staging Environment Testing"],
  },
];

const faqs = [
  {
    q: "Why choose WooCommerce over Shopify?",
    a: "WooCommerce provides 100% code ownership, zero monthly transaction fees, complete customizability, and unlimited control over checkout workflows.",
  },
  {
    q: "Can you fix a slow WooCommerce store?",
    a: "Yes! We specialize in WooCommerce speed optimization, implementing Redis caching, database indexing, and script optimizations to achieve sub-second load times.",
  },
  {
    q: "What is Headless WooCommerce?",
    a: "Headless WooCommerce pairs WordPress as a backend database with a lightning-fast modern frontend like Next.js, giving you maximum website speed and SEO rankings.",
  },
  {
    q: "Do you provide ongoing WooCommerce maintenance & support?",
    a: "Yes! We offer monthly maintenance packages covering core updates, plugin audits, speed monitoring, and dedicated developer support.",
  },
];

export default function WooCommerceDevelopmentPage() {
  return (
    <>
      <ServiceHero
        badge="WooCommerce Experts"
        titlePrefix="Custom & High-Performance"
        titleHighlight="WooCommerce Store"
        titleSuffix="Development"
        description="Build lightning-fast, highly custom WooCommerce stores with bespoke theme design, headless Next.js architecture, and automated ERP integrations."
        tags={["WooCommerce", "Headless Next.js", "Custom Plugins", "Sub-1s Speed"]}
        stats={[
          { label: "Google PageSpeed", value: "95+" },
          { label: "Avg Speed Increase", value: "+300%" },
          { label: "Code Ownership", value: "100%" },
        ]}
      />
      <ServiceFeatures
        badge="Development Capabilities"
        heading="Enterprise WooCommerce Solutions"
        subheading="Everything you need to build, scale, and automate your WordPress e-commerce store."
        features={features}
      />
      <ServiceProcess
        badge="Engineering Workflow"
        heading="Our WooCommerce Development Process"
        subheading="From custom UI wireframes to staging QA and seamless production launch."
      />
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
