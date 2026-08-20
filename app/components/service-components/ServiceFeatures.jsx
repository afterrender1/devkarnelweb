"use client";

import React from "react";
import { urbanist } from "@/app/fonts";
import { CardStack } from "@/app/components/ui/card-stack";
import {
  Brain,
  PenTool,
  Palette,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Code2,
  RefreshCw,
  Zap,
  Globe,
  Search,
  Store,
  Box,
  Truck,
  Rocket,
  CheckCircle2,
  Share2,
  Megaphone,
  BarChart2,
  Sparkles,
  Layers,
  Crown,
  Type,
  Tag,
  Target,
  FileCode,
  FileText,
  DollarSign,
  Bot,
  Sliders,
  Cpu,
} from "lucide-react";

function getFeatureIcon(iconProp, title = "", idx = 0) {
  if (React.isValidElement(iconProp)) {
    return iconProp;
  }

  const t = title.toLowerCase();
  const ic = typeof iconProp === "string" ? iconProp.toLowerCase() : "";

  if (t.includes("research") || t.includes("persona") || ic.includes("🧠")) {
    return <Brain className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("wireframing") || t.includes("prototype") || t.includes("figma") || ic.includes("📐")) {
    return <PenTool className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("system") || t.includes("library") || t.includes("token") || ic.includes("🎨")) {
    return <Layers className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("mobile") || t.includes("app") || t.includes("responsive") || ic.includes("📱")) {
    return <Smartphone className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("usability") || t.includes("conversion") || t.includes("audit") || t.includes("testing") || ic.includes("📈")) {
    return <TrendingUp className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("accessibility") || t.includes("wcag") || t.includes("security") || ic.includes("♿") || ic.includes("🛡️")) {
    return <ShieldCheck className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("ecommerce") || t.includes("store") || t.includes("amazon") || t.includes("shopify") || ic.includes("🛒")) {
    return <ShoppingCart className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("seo") || t.includes("keyword") || t.includes("search")) {
    return <Search className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("brand") || t.includes("logo") || t.includes("identity")) {
    return <Crown className="w-6 h-6 text-[#2de8b0]" />;
  }
  if (t.includes("automation") || t.includes("speed") || t.includes("growth")) {
    return <Zap className="w-6 h-6 text-[#2de8b0]" />;
  }

  const fallbackIcons = [
    <Brain key="1" className="w-6 h-6 text-[#2de8b0]" />,
    <PenTool key="2" className="w-6 h-6 text-[#2de8b0]" />,
    <Layers key="3" className="w-6 h-6 text-[#2de8b0]" />,
    <Smartphone key="4" className="w-6 h-6 text-[#2de8b0]" />,
    <TrendingUp key="5" className="w-6 h-6 text-[#2de8b0]" />,
    <ShieldCheck key="6" className="w-6 h-6 text-[#2de8b0]" />,
  ];

  return fallbackIcons[idx % fallbackIcons.length];
}

export default function ServiceFeatures({
  badge = "Capabilities",
  heading = "What We Deliver",
  subheading = "Comprehensive solutions engineered to scale your business with maximum impact.",
  features = [],
}) {
  const stackItems = features.map((f, idx) => ({
    id: f.id || idx + 1,
    tag: f.tag || `Capability 0${idx + 1}`,
    title: f.title,
    desc: f.desc || f.description,
    icon: getFeatureIcon(f.icon, f.title, idx),
    bullets: f.bullets || [],
  }));

  return (
    <section
      className={`py-20 md:py-28 bg-[#010504] text-white relative overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(45, 232, 176, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 10% 40%, rgba(15, 124, 110, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 90% 70%, rgba(45, 232, 176, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #010504 0%, #031411 50%, #010504 100%)
        `,
      }}
    >
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#2de8b0]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f7c6e]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#2de8b0] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 shadow-[0_0_15px_rgba(45,232,176,0.1)]">
            {badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            {subheading}
          </p>
        </div>

        {/* 3D Card Stack with Lucide Icons */}
        {stackItems.length > 0 && (
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <CardStack
              items={stackItems}
              initialIndex={0}
              autoAdvance
              intervalMs={3200}
              pauseOnHover
              showDots
              cardWidth={540}
              cardHeight={320}
            />
          </div>
        )}
      </div>
    </section>
  );
}
