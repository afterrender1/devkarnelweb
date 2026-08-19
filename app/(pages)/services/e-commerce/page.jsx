"use client";

import React, { useState } from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";
import { urbanist, truculenta } from "@/app/fonts";

const ecommerceAutomations = [
  {
    id: "shopify",
    name: "Shopify Automation",
    badge: "Most Popular",
    desc: "Automate inventory sync, order fulfillment, customer remarketing, and high-converting checkout flows for scalable Shopify stores.",
    highlights: ["Automated Order Processing", "Klaviyo Email Workflows", "Multi-Currency Checkout", "Inventory Sync"],
  },
  {
    id: "ebay",
    name: "Ebay Automation",
    badge: "Marketplace",
    desc: "Automated product listing creation, pricing algorithms, feedback automation, and multi-channel inventory management on eBay.",
    highlights: ["Bulk Listing Tool", "Automated Repricing", "Feedback Generator", "Order Tracking Sync"],
  },
  {
    id: "walmart",
    name: "Walmart Automation",
    badge: "Enterprise",
    desc: "Seamless setup and automation for Walmart Marketplace stores with guaranteed compliance, fast shipping tags, and account health monitoring.",
    highlights: ["Walmart WFS Integration", "Buy Box Optimization", "2-Day Shipping Badges", "Account Compliance"],
  },
  {
    id: "tiktok",
    name: "TikTok Shop Automation",
    badge: "Trending",
    desc: "Tap into viral social selling with TikTok Shop integration, affiliate management automation, and live shopping store setups.",
    highlights: ["Creator Affiliate System", "Viral Product Sourcing", "Short Video Tagging", "Auto Fulfillment"],
  },
  {
    id: "temu",
    name: "Temu Automation",
    badge: "Global Growth",
    desc: "Expand your product reach on Temu with automated supplier logistics, bulk uploads, and automated pricing rules.",
    highlights: ["Supplier API Integration", "Global Logistics", "Price Monitoring", "Automated Refunds"],
  },
  {
    id: "shopee",
    name: "Shopee Marketplace Growth Service",
    badge: "APAC Leader",
    desc: "Dominate Southeast Asian markets with automated Shopee campaign setups, chat bots, and flash sale automation.",
    highlights: ["Auto Chat Assistants", "Flash Sale Manager", "Local Currency Payouts", "Keyword Bidding"],
  },
  {
    id: "woocommerce",
    name: "WooCommerce Development",
    badge: "Custom Commerce",
    desc: "High-performance custom WooCommerce themes, plugin integrations, payment gateway setups, and automated database optimization.",
    highlights: ["Custom Theme & Plugins", "Stripe/PayPal Integration", "Sub-second Load Times", "Automated Backups"],
  },
  {
    id: "penties",
    name: "Penties Automation",
    badge: "Niche Commerce",
    desc: "Automated subscription box systems, recurring billing, and inventory tracking customized for intimate apparel e-commerce brands.",
    highlights: ["Recurring Billing", "Custom Size Selectors", "VIP Member Clubs", "Discrete Packaging Sync"],
  },
  {
    id: "telehealth",
    name: "Telehealth Automation",
    badge: "HIPAA Compliant",
    desc: "Automated prescription e-commerce, HIPAA-compliant patient intake portals, appointment scheduling, and recurring refills.",
    highlights: ["HIPAA Compliance", "Doctor Approval Workflows", "Prescription Refill Engine", "E-Prescribe Sync"],
  },
  {
    id: "etsy",
    name: "Etsy Shop Automation",
    badge: "Craft & POD",
    desc: "Automated print-on-demand fulfillment, digital download automation, SEO listing tag optimization, and automated customer replies.",
    highlights: ["POD Integration (Printify/Printful)", "Instant Digital Downloads", "Tag Generator", "Auto Message Replies"],
  },
  {
    id: "amazon",
    name: "Amazon Store Setup & Growth",
    badge: "FBA & FBM",
    desc: "End-to-end Amazon FBA setup, A+ Content design, PPC ad management, and automated review request funnels.",
    highlights: ["Amazon FBA Logistics", "A+ Brand Story Content", "PPC Campaign Engine", "Automated Review Requests"],
  },
  {
    id: "merchandise",
    name: "Shopify Merchandise",
    badge: "Custom Merch",
    desc: "Turn your brand or audience into revenue with automated custom merchandise stores, print-on-demand, and global distribution.",
    highlights: ["Mockup Generator", "Global POD Network", "Zero Inventory Overhead", "Automated Royalty Splits"],
  },
];

const generalFeatures = [
  {
    title: "Multi-Marketplace Syncing",
    desc: "Keep inventory and order tracking synchronized across Shopify, Amazon, eBay, Walmart, and TikTok simultaneously.",
    icon: "🔄",
    bullets: ["Zero Overselling", "Real-time API Sync", "Central Dashboard"],
  },
  {
    title: "High-Converting Checkout",
    desc: "Optimize checkout conversion rates with 1-click upsells, localized currencies, express wallets (Apple/Google Pay).",
    icon: "💳",
    bullets: ["1-Click Upsells", "Apple & Google Pay", "Cart Abandonment Recovery"],
  },
  {
    title: "Automated Order Fulfillment",
    desc: "Automate tracking updates, shipping labels, and logistics routing directly to your preferred 3PL or FBA warehouses.",
    icon: "📦",
    bullets: ["3PL Warehouse Sync", "Automated Shipping Labels", "Instant Tracking Emails"],
  },
  {
    title: "AI-Powered Customer Support Bots",
    desc: "Deploy intelligent chatbots to resolve 80% of customer order inquiries, order tracking, and returns 24/7.",
    icon: "🤖",
    bullets: ["Order Status Lookup", "Returns Portal", "24/7 Automated Help"],
  },
];

export default function EcommercePage() {
  const [selectedService, setSelectedService] = useState(ecommerceAutomations[0]);

  return (
    <>
      <ServiceHero
        badge="E-Commerce & Automation Studio"
        titlePrefix="Scalable E-Commerce &"
        titleHighlight="Marketplace Automation"
        titleSuffix="Services"
        description="Launch, scale, and automate high-converting online stores across Shopify, Amazon, Walmart, TikTok Shop, eBay, and global marketplaces."
        tags={["Shopify Plus", "Amazon FBA", "TikTok Shop", "Multi-Channel Sync"]}
        stats={[
          { label: "Stores Launched", value: "200+" },
          { label: "Automated Orders Processed", value: "2M+" },
          { label: "Avg Sales Growth", value: "4.2x" },
        ]}
      />

      {/* Interactive Automations Hub */}
      <section
        className={`py-20 bg-[#010504] text-white ${urbanist.className}`}
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(45, 232, 176, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 10% 50%, rgba(15, 124, 110, 0.12) 0%, transparent 50%),
            linear-gradient(180deg, #010504 0%, #02120e 50%, #010504 100%)
          `,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#2de8b0] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 shadow-[0_0_15px_rgba(45,232,176,0.1)]">
              Complete Ecosystem
            </span>
            <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white ${truculenta.className}`}>
              Marketplace & Automation Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70">
              Select any of our specialized automation solutions below to see detailed capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar List */}
            <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {ecommerceAutomations.map((item) => {
                const isSelected = selectedService.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#2de8b0]/15 border-[#2de8b0]/50 text-white shadow-lg"
                        : "bg-white/[0.02] border-white/5 text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div>
                      <h4 className={`text-base font-bold ${truculenta.className}`}>{item.name}</h4>
                      <p className="text-xs text-white/50 line-clamp-1 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-[#2de8b0] font-semibold shrink-0">
                      {item.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Service Card */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-white/[0.03] border border-[#2de8b0]/30 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2de8b0]/10 rounded-full blur-3xl pointer-events-none" />

              <span className="px-3.5 py-1 rounded-full bg-[#2de8b0]/20 text-[#2de8b0] text-xs font-bold uppercase tracking-wider">
                {selectedService.badge}
              </span>

              <h3 className={`mt-4 text-3xl font-extrabold text-white ${truculenta.className}`}>
                {selectedService.name}
              </h3>

              <p className="mt-4 text-base text-white/80 leading-relaxed font-normal">
                {selectedService.desc}
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#2de8b0] mb-4">
                  Key Deliverables & Automations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-[#2de8b0]" />
                      <span className="text-sm text-white/90 font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-[#2de8b0] hover:bg-[#1bc497] text-black font-bold text-sm text-center transition-all shadow-[0_0_20px_rgba(45,232,176,0.3)]"
                >
                  Request {selectedService.name} Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures
        badge="Enterprise Features"
        heading="Built for E-Commerce Scale"
        subheading="Everything you need to run a hands-free, high-margin online store."
        features={generalFeatures}
      />
      <ServiceProcess
        badge="Execution"
        heading="Our E-Commerce Launch Blueprint"
        subheading="From platform setup to full automated fulfillment."
      />
      <CTASection />
    </>
  );
}
