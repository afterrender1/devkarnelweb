import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "SEO Optimization Services | Devskarnel",
  description:
    "Data-driven SEO optimization, Technical SEO, Core Web Vitals speed optimization, Schema markup, and high-authority link building.",
};

const features = [
  {
    title: "Technical SEO & Schema Markup",
    desc: "Complete technical code audits, JSON-LD structured schema implementation, canonical fixes, and XML sitemap optimization.",
    icon: "⚙️",
    bullets: ["JSON-LD Schema Markup", "Crawl Budget Optimization", "Sitemap & Robots Fixes"],
  },
  {
    title: "Core Web Vitals & Speed Optimization",
    desc: "Achieve 90+ Google PageSpeed Insights scores with Next.js SSR, image compression, script optimization, and server caching.",
    icon: "⚡",
    bullets: ["LCP & CLS Optimization", "90+ PageSpeed Scores", "CDN & Asset Caching"],
  },
  {
    title: "Keyword Strategy & On-Page SEO",
    desc: "In-depth buyer intent keyword research, title tag optimization, meta descriptions, heading hierarchy, and content structuring.",
    icon: "🎯",
    bullets: ["Buyer Intent Keywords", "H1-H6 Content Hierarchy", "Internal Linking Matrix"],
  },
  {
    title: "Local SEO & Google Business Profile",
    desc: "Dominating local search results with Google Maps optimization, local citation building, and review management.",
    icon: "📍",
    bullets: ["Google Maps Pack Ranking", "Local Citations & NAP", "Geo-targeted Pages"],
  },
  {
    title: "Authority Backlinks & Content Marketing",
    desc: "High-authority white-hat link acquisition, guest posts, and SEO blog strategy to build domain authority (DA/DR).",
    icon: "🔗",
    bullets: ["High DA Contextual Backlinks", "SEO Content Creation", "White-Hat Outreach"],
  },
  {
    title: "Competitor Intelligence & Analytics",
    desc: "Track rankings, organic traffic trends, keyword positions, and competitor gaps with monthly transparent reporting.",
    icon: "📊",
    bullets: ["Search Console Integration", "Rank Tracking Dashboards", "Monthly Traffic Audits"],
  },
];

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "Technical fixes and speed improvements show impact within 2-4 weeks. Significant organic keyword ranking and traffic growth typically compound over 3-6 months.",
  },
  {
    q: "Do you guarantee #1 rankings on Google?",
    a: "No honest agency can guarantee #1 spot because search algorithms change constantly. However, our proven data-driven methodology consistently places clients in top 3 rankings for high-intent keywords.",
  },
  {
    q: "What tools do you use for SEO research?",
    a: "We leverage Ahrefs, SEMrush, Google Search Console, Screaming Frog, PageSpeed Insights, and Google Analytics 4.",
  },
  {
    q: "Is Next.js good for SEO?",
    a: "Yes! Next.js is outstanding for SEO because server-side rendering (SSR) and static generation (SSG) deliver pre-rendered HTML to search engine crawlers with sub-second response times.",
  },
];

export default function SEOPage() {
  return (
    <>
      <ServiceHero
        badge="Organic Growth Agency"
        titlePrefix="Data-Driven & Technical"
        titleHighlight="SEO Optimization"
        titleSuffix="Services"
        description="Dominate search results, boost organic traffic, and achieve 90+ Core Web Vitals scores with our technical SEO engineering."
        tags={["Technical SEO", "Core Web Vitals", "Keyword Strategy", "Schema Markup"]}
        stats={[
          { label: "Keywords Ranked #1-3", value: "1,200+" },
          { label: "Avg Traffic Growth", value: "+320%" },
          { label: "PageSpeed Score", value: "95+/100" },
        ]}
      />
      <ServiceFeatures
        badge="Organic Strategy"
        heading="Comprehensive SEO Solutions"
        subheading="Turn search engines into your #1 source of consistent customer leads."
        features={features}
      />
      <ServiceProcess
        badge="SEO Blueprint"
        heading="Our 4-Phase SEO Execution Strategy"
        subheading="Audit, optimize, build authority, and scale."
      />
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
