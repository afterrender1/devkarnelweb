"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  BookOpen,
  X,
  Share2,
  Check,
  ChevronRight,
  TrendingUp,
  Code2,
  Layout,
  ShoppingBag,
  Smartphone,
  Palette,
} from "lucide-react";
import { urbanist } from "@/app/fonts";

const CATEGORIES = [
  { key: "All", label: "All Insights", icon: BookOpen },
  { key: "Web Architecture", label: "Web Architecture", icon: Code2 },
  { key: "E-Commerce", label: "E-Commerce", icon: ShoppingBag },
  { key: "UI/UX Design", label: "UI/UX Design", icon: Layout },
  { key: "Growth & SEO", label: "Growth & SEO", icon: TrendingUp },
  { key: "Branding", label: "Branding", icon: Palette },
];

export const ARTICLES = [
  {
    id: "headless-nextjs-architecture",
    slug: "headless-nextjs-architecture",
    title: "Why Modern Brands are Moving to Headless Next.js Architectures",
    excerpt:
      "How decoupled frontends and edge rendering unlock sub-second load times, 100/100 Core Web Vitals, and 40%+ conversion improvements over legacy monoliths.",
    category: "Web Architecture",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Arham & Devskarnel Engineering",
      role: "Lead Systems Architect",
      initial: "A",
    },
    thumbnail:
      "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_800/v1770205987/supps_vm41cl.png",
    featured: true,
    tags: ["Next.js", "Performance", "Core Web Vitals", "Edge Rendering"],
    color: "#2de8b0",
    gradient: "from-[#2de8b0] to-[#0F7C6E]",
    content: `
### The Limitations of Traditional Monolithic Architectures
For over a decade, traditional CMS and all-in-one platforms dominated the web. However, as user expectations for instant interactivity and mobile performance have skyrocketed, the bloat of server-side monoliths has become a significant bottleneck for high-growth brands.

### Why Headless & Edge-Rendered Frameworks Win
Decoupling the frontend presentation layer from the backend database allows engineering teams to build with purpose-built frameworks like Next.js:

1. **Sub-Second TTFB (Time to First Byte):** By deploying on modern edge networks, assets and pre-rendered HTML are served from the closest geographic node to the visitor.
2. **Superior Core Web Vitals:** Next.js automatically optimizes images, defers unused JavaScript, and minimizes layout shifts (CLS), resulting in perfect performance scores.
3. **Infinite Design Flexibility:** Unshackled from rigid template constraints, brands can craft immersive GSAP animations and bespoke design systems.
4. **Enhanced Security:** Without a direct database exposure on the public frontend, the attack surface is virtually eliminated.

### Business Impact: The Conversion Multiplier
Every 100ms decrease in page load speed directly correlates with a 1.1% increase in conversion rates. Modern brands transitioning to modern headless architectures routinely observe:
- **35% - 50% Reduction in Bounce Rates**
- **40%+ Increase in Mobile Checkout Completions**
- **Immediate Lift in Google Organic Search Rankings**

### Conclusion
Investing in modern frontend engineering isn't just an aesthetic upgrade—it's a critical commercial engine that drives revenue and builds lasting brand equity.
    `,
  },
  {
    id: "7-figure-ecommerce-automation",
    slug: "7-figure-ecommerce-automation",
    title: "The Anatomy of a 7-Figure E-Commerce Automation Pipeline",
    excerpt:
      "A deep dive into hands-free inventory synchronisation, automated order routing, abandoned cart rescue flows, and AI-driven customer retention.",
    category: "E-Commerce",
    date: "Aug 14, 2026",
    readTime: "5 min read",
    author: {
      name: "Devskarnel E-Commerce Team",
      role: "Automation Specialist",
      initial: "D",
    },
    thumbnail: "/images/our-work/coffee.png",
    featured: false,
    tags: ["Shopify", "Automation", "Retention", "Klaviyo"],
    color: "#f59e0b",
    gradient: "from-amber-400 to-orange-600",
    content: `
### Automating Beyond the Basics
Scaling an e-commerce brand to 7 figures without doubling your operational headcount requires seamless, automated backend pipelines.

### Core Systems of the Automated Store:
- **Multi-Channel Inventory Sync:** Real-time stock balancing across Shopify, TikTok Shop, and marketplaces to prevent overselling.
- **Smart Order Routing & 3PL Integration:** Automatic dispatching to nearest fulfillment centers with zero human friction.
- **Predictive Abandoned Cart Workflows:** Behavior-triggered email & SMS sequences recovering 18-24% of lost revenue.
- **Dynamic Post-Purchase Upsells:** One-click offers that lift Average Order Value (AOV) by 15-30%.
    `,
  },
  {
    id: "micro-interactions-gsap",
    slug: "micro-interactions-gsap",
    title: "Micro-Interactions & GSAP: Crafting Memorable Digital Experiences",
    excerpt:
      "Why subtle motion choreography and frictionless interactions differentiate world-class websites from forgettable templates.",
    category: "UI/UX Design",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    author: {
      name: "UI/UX Creative Studio",
      role: "Interaction Designer",
      initial: "U",
    },
    thumbnail: "/images/our-work/magnetik.png",
    featured: false,
    tags: ["GSAP", "Micro-animations", "UI/UX", "WebGL"],
    color: "#a855f7",
    gradient: "from-purple-400 to-indigo-600",
    content: `
### Motion with Purpose
Great web design isn't about flashy, distracting animations; it's about subtle physical feedback that communicates state changes and guides the user's natural gaze.

### Key Principles:
- **Smooth Easing Curves:** Using power2.out or cubic bezier transitions to mimic real-world inertia.
- **Micro-Hover States:** Rewarding user curiosity with responsive scale, glow, and tilt effects.
- **Scroll-Linked Storytelling:** Using ScrollTrigger to reveal content in harmonious rhythm as the user scrolls.
    `,
  },
  {
    id: "technical-seo-semantic-graphs",
    slug: "technical-seo-semantic-graphs",
    title: "Technical SEO in 2026: Beyond Keywords to Semantic Graph Optimization",
    excerpt:
      "How structured JSON-LD schemas, entity authority, and Core Web Vitals dominate AI search overviews and traditional Google rankings.",
    category: "Growth & SEO",
    date: "Aug 06, 2026",
    readTime: "7 min read",
    author: {
      name: "Devskarnel SEO Lab",
      role: "Technical SEO Strategist",
      initial: "S",
    },
    thumbnail: "/images/our-work/freelancer30.png",
    featured: false,
    tags: ["Technical SEO", "Schema Markup", "AI Search", "Core Web Vitals"],
    color: "#06b6d4",
    gradient: "from-cyan-400 to-blue-600",
    content: `
### The New Search Paradigm
Modern search engines and AI knowledge engines (Search Generative Experience) no longer rank pages based solely on keyword frequency. They evaluate entity authority, semantic relationships, and technical page health.

### Crucial Technical Pillars:
- **Comprehensive Schema Graphs:** Nesting Organization, Product, WebSite, and FAQPage schemas to establish clear entity relationships.
- **Zero CLS & Minimal INP:** Optimizing Interaction to Next Paint (INP) to ensure responsive taps and inputs.
- **Clean Crawl Architecture:** Eliminating redirect chains and maintaining strict canonical discipline.
    `,
  },
  {
    id: "brand-identity-premium-pricing",
    slug: "brand-identity-premium-pricing",
    title: "Brand Identity Systems That Command 5x Premium Pricing in B2B",
    excerpt:
      "The visual psychology, typography discipline, and luxury design cues that allow elite agencies and B2B brands to charge top tier rates.",
    category: "Branding",
    date: "Jul 29, 2026",
    readTime: "5 min read",
    author: {
      name: "Brand Identity Studio",
      role: "Creative Director",
      initial: "B",
    },
    thumbnail: "/images/our-work/deigo.png",
    featured: false,
    tags: ["Branding", "Visual Identity", "Typography", "Design Systems"],
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    content: `
### Perception Defines Price
In B2B and high-ticket service industries, prospective clients form 94% of their first impression based solely on design credibility and visual polish.

### Elements of High-Value Branding:
- **Restraint & White Space:** Luxury brands communicate confidence through deliberate minimalism rather than clutter.
- **Harmonious Typography:** Custom typographic scales pairing an authoritative display font with a clean, functional sans-serif body.
- **Cohesive Design Systems:** Every touchpoint—from invoice templates to pitch decks and web interactions—reflects identical brand precision.
    `,
  },
  {
    id: "conversion-rate-engineering",
    slug: "conversion-rate-engineering",
    title: "Conversion Rate Engineering: Turning Casual Visitors into High-Ticket Leads",
    excerpt:
      "Proven frameworks for reducing friction in discovery calls, interactive inquiry forms, and strategic value propositions.",
    category: "Web Architecture",
    date: "Jul 22, 2026",
    readTime: "6 min read",
    author: {
      name: "Growth Strategy Group",
      role: "Conversion Specialist",
      initial: "G",
    },
    thumbnail: "/images/our-work/tmgvan1.png",
    featured: false,
    tags: ["CRO", "UX Design", "Funnels", "Lead Generation"],
    color: "#10b981",
    gradient: "from-emerald-400 to-teal-600",
    content: `
### Friction Is the Enemy of Conversion
Every unnecessary field, ambiguous call-to-action, or slow form response creates friction that drains your pipeline.

### High-Converting Engineering Tactics:
- **Interactive Step Forms:** Breaking complex intake questions into lightweight 2-step micro-commitments.
- **Strategic Social Proof Placement:** Embedding contextual client validation right beside the final CTA button.
- **Zero-Latency Response Systems:** Instant email and CRM webhooks ensuring prospective leads are contacted within 15 minutes.
    `,
  },
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleShare = (article) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className={`relative bg-black text-white min-h-screen ${urbanist.className}`}>
      {/* Background Ambience Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 10%, rgba(45, 232, 176, 0.09) 0%, transparent 60%),
            radial-gradient(circle at 90% 40%, rgba(15, 124, 110, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 10% 70%, rgba(45, 232, 176, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-24">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#2de8b0]" />
            <span className="text-xs sm:text-sm text-[#2de8b0] font-semibold uppercase tracking-widest">
              Insights & Engineering Articles
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Thought <span className="text-[#2de8b0]">Leadership</span> & Guides
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Deep architectural breakdowns, performance playbooks, e-commerce automation systems, and high-impact design strategies curated by Devskarnel.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-12 sm:mb-16 space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? "bg-[#2de8b0] text-black border-[#2de8b0] shadow-[0_0_20px_rgba(45,232,176,0.35)]"
                        : "bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search articles or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#2de8b0] focus:ring-1 focus:ring-[#2de8b0] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Featured Flagship Article (Shown when no search/filter or matching) */}
        {selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-16 sm:mb-20">
            <div
              onClick={() => setActiveArticle(featuredArticle)}
              className="group relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/[0.02] border border-white/10 hover:border-[#2de8b0]/40 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,232,176,0.12)] cursor-pointer overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Subtle Ambient Glow inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2de8b0]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-[#2de8b0]/15 transition-all duration-700" />

              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/30 text-[#2de8b0] text-xs font-bold uppercase tracking-wider">
                      Featured Insight
                    </span>
                    <span className="text-white/40 text-xs sm:text-sm flex items-center gap-1.5">
                      <Calendar size={13} /> {featuredArticle.date}
                    </span>
                    <span className="text-white/40 text-xs sm:text-sm flex items-center gap-1.5">
                      <Clock size={13} /> {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#2de8b0] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2de8b0] to-[#0F7C6E] flex items-center justify-center text-black font-bold text-sm">
                      {featuredArticle.author.initial}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {featuredArticle.author.name}
                      </p>
                      <p className="text-white/40 text-xs">
                        {featuredArticle.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2de8b0] group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              {/* Cover visual */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}{" "}
              <span className="text-white/40 text-sm font-normal">
                ({filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"})
              </span>
            </h3>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-3xl bg-white/[0.02] border border-white/10">
              <BookOpen className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white">No articles found</h4>
              <p className="text-white/50 text-sm mt-1">
                Try selecting a different category or refining your search term.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white/[0.02] border border-white/10 hover:border-[#2de8b0]/40 backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,232,176,0.08)] cursor-pointer"
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-5 bg-white/5 border border-white/10">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://res.cloudinary.com/dlurrugno/image/upload/f_auto,q_auto,w_800/v1770205987/supps_vm41cl.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-[#2de8b0]">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 text-white/70 text-[11px] flex items-center gap-1 font-medium bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
                        <Clock size={11} /> {article.readTime}
                      </div>
                    </div>

                    {/* Metadata */}
                    <p className="text-white/40 text-xs mb-2 flex items-center gap-1.5">
                      <Calendar size={12} /> {article.date}
                    </p>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#2de8b0] transition-colors leading-snug line-clamp-2 mb-3">
                      {article.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Author & Read Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg bg-gradient-to-br ${article.gradient} flex items-center justify-center text-black font-bold text-xs`}
                      >
                        {article.author.initial}
                      </div>
                      <span className="text-white/80 text-xs font-semibold truncate max-w-[130px]">
                        {article.author.name}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2de8b0] group-hover:translate-x-1 transition-transform">
                      Read <ChevronRight size={14} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter / Insights Subscription Box */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2de8b0]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/30 text-[#2de8b0] text-xs font-bold uppercase tracking-wider inline-block mb-4">
              Direct to Your Inbox
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Stay Ahead of Modern Web & E-Commerce Trends
            </h3>
            <p className="mt-3 text-white/60 text-sm sm:text-base leading-relaxed">
              Receive actionable engineering teardowns, conversion optimization case studies, and modern stack guides directly from our core team.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#2de8b0] transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#2de8b0] hover:bg-[#26cb9a] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(45,232,176,0.3)] hover:shadow-[0_0_30px_rgba(45,232,176,0.5)] active:scale-95 shrink-0 cursor-pointer"
              >
                {subscribed ? "Subscribed!" : "Get Updates"}
              </button>
            </form>

            {subscribed && (
              <p className="text-[#2de8b0] text-xs mt-3 font-semibold animate-fade-in">
                ✓ Thank you for subscribing to Devskarnel Insights!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1017] border border-white/15 rounded-3xl overflow-y-auto p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#2de8b0]/15 border border-[#2de8b0]/30 text-[#2de8b0] text-xs font-bold uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="text-white/50 text-xs flex items-center gap-1">
                  <Clock size={12} /> {activeArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs"
                  title="Copy Article Link"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#2de8b0]" />
                      <span className="text-[#2de8b0]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
                  aria-label="Close article"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-4 mt-6">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${activeArticle.gradient} flex items-center justify-center text-black font-extrabold text-base`}
                >
                  {activeArticle.author.initial}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    {activeArticle.author.name}
                  </p>
                  <p className="text-white/40 text-xs">
                    {activeArticle.author.role} • Published {activeArticle.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Article Image Banner */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={activeArticle.thumbnail}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Markdown / Formatted Body */}
            <div className="prose prose-invert max-w-none text-white/80 text-sm sm:text-base leading-relaxed space-y-4">
              {activeArticle.content.split("\n\n").map((para, i) => {
                if (para.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 text-[#2de8b0]"
                    >
                      {para.replace("### ", "")}
                    </h3>
                  );
                }
                if (para.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-disc pl-5 space-y-1.5 text-white/75">
                      {para.split("\n").map((li, j) => (
                        <li key={j}>{li.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            {/* Modal Footer */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <a
                href="https://calendly.com/devskarnel/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#2de8b0] text-black font-bold text-xs sm:text-sm hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
              >
                Discuss a Project with Us →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
