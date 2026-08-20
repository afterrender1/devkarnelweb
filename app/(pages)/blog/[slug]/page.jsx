"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urbanist } from "@/app/fonts";

const blogData = {
  "how-a-high-converting-website-drives-10x-business-growth": {
    title: "How a High-Converting Website Drives 10x Business Growth in 2026",
    category: "Web Development & Strategy",
    readTime: "6 Min Read",
    date: "August 19, 2026",
    author: "Devskarnel Architecture Team",
    image: "/images/website_growth_blog.jpg",
    subtitle: "A modern website is no longer an online business card—it is your highest-performing 24/7 sales representative. Learn the 5 architecture rules that turn visitors into high-ticket clients.",
    content: [
      {
        type: "h2",
        text: "Why Most Traditional Websites Fail to Convert Visitors"
      },
      {
        type: "p",
        text: "In 2026, user attention spans have dropped to under 4 seconds. Most legacy business websites are slow, bloated, difficult to navigate on mobile devices, and lack strategic call-to-actions. Visitors land on the page, get overwhelmed, and leave within seconds to your competitors."
      },
      {
        type: "p",
        text: "A high-converting website changes the game. By blending ultra-fast Next.js architecture, friction-free UI/UX, and persuasive sales funnels, your website becomes an active revenue generation engine."
      },
      {
        type: "h2",
        text: "1. Lightning Fast Performance: The 1-Second Conversion Rule"
      },
      {
        type: "p",
        text: "Studies show that a 1-second delay in page load time reduces conversion rates by up to 20%. Modern clients expect instant page transitions. By utilizing Next.js App Router, edge image optimization, and server-side rendering (SSR), our web architecture ensures sub-second load times."
      },
      {
        type: "h2",
        text: "2. Mobile-First & Thumb-Friendly UX Architecture"
      },
      {
        type: "p",
        text: "Over 75% of commercial traffic originates from mobile smartphones. Traditional sites force mobile users to zoom in or fight rigid layouts. Our mobile-first design philosophy ensures 2-column layouts, touch-swipe carousels, thumb-accessible CTA buttons, and seamless responsive typography."
      },
      {
        type: "h2",
        text: "3. Strategic Copywriting & Visual Hierarchy"
      },
      {
        type: "p",
        text: "A great website guides the reader's eye naturally from problem identification to your signature solution. Clear headlines (H1/H2), bold key takeaways, micro-animations, and social proof (client reviews, video testimonials) build trust before asking for the sale."
      },
      {
        type: "h2",
        text: "4. Organic SEO Architecture Built-In From Day One"
      },
      {
        type: "p",
        text: "A beautiful site is useless if nobody can find it. Every website built by Devskarnel includes clean semantic HTML5 markup, automated dynamic OpenGraph metadata, structured JSON-LD schemas, and keyword-targeted page routes to rank on Google organically."
      },
      {
        type: "h2",
        text: "5. Next-Gen Tech Stack: Next.js, React & TailwindCSS"
      },
      {
        type: "p",
        text: "Say goodbye to vulnerable WordPress plugins and slow database queries. Modern Jamstack & Next.js architectures provide bulletproof security, 99.99% uptime, zero database latency, and effortless scalability as your client base expands."
      },
      {
        type: "h2",
        text: "Ready to Transform Your Digital Presence?"
      },
      {
        type: "p",
        text: "Whether you are launching a new product, scaling your agency, or redesigning an outdated site, building a high-converting web platform is the single best investment for long-term ROI."
      }
    ]
  }
};

export default function BlogDetailPage({ params }) {
  // Unwrap params safely if promise or object
  const resolvedParams = React.use(params) || params;
  const slug = resolvedParams?.slug || "how-a-high-converting-website-drives-10x-business-growth";

  const article = blogData[slug] || blogData["how-a-high-converting-website-drives-10x-business-growth"];

  return (
    <main className={`min-h-screen bg-[#010504] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 ${urbanist.className}`}>
      {/* Background Radial Ambient */}
      <div className="fixed inset-0 bg-radial from-[#2de8b0]/10 via-black to-black pointer-events-none z-0 opacity-40" />

      <article className="relative z-10 max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services/website-development"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2de8b0] hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Website Development
          </Link>
        </div>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/60 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#2de8b0]/15 text-[#2de8b0] font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        {/* Article H1 Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
          {article.title}
        </h1>

        {/* Subtitle / Teaser */}
        <p className="text-white/80 text-base sm:text-xl leading-relaxed mb-8 border-l-4 border-[#2de8b0] pl-4 sm:pl-6 py-1 italic bg-white/5 rounded-r-xl">
          "{article.subtitle}"
        </p>

        {/* Featured Image */}
        <div className="relative w-full h-[240px] xs:h-[300px] sm:h-[420px] md:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-white/85 text-base sm:text-lg leading-relaxed border-b border-white/10 pb-12">
          {article.content.map((block, idx) => {
            if (block.type === 'h2') {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-10 mb-4 bg-linear-to-r from-white via-white to-[#2de8b0] bg-clip-text text-transparent">
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={idx} className="text-white/80">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Author Bio */}
        <div className="mt-8 flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
          <div className="w-12 h-12 rounded-full bg-[#2de8b0] text-black font-bold flex items-center justify-center text-lg shrink-0">
            DK
          </div>
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg">{article.author}</h4>
            <p className="text-white/50 text-xs sm:text-sm">Specializing in high-converting web architecture, Next.js engineering & SEO performance.</p>
          </div>
        </div>

        {/* High-Converting CTA Box */}
        <div className="rounded-3xl border border-[#2de8b0]/40 bg-linear-to-r from-emerald-950/70 via-black to-zinc-950 p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#2de8b0]/20 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build a Website That Grows Your Business?
          </h3>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Let's discuss how we can transform your digital presence into a high-converting revenue engine. Free strategy session included.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/devskarnel/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2de8b0] hover:bg-[#28d29f] text-black font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#2de8b0]/20"
            >
              Book Free Strategy Call
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
