"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getArticleBySlugFromFirebase } from "@/lib/articles";

// Simple built-in Markdown Renderer for headers, bold, lists, and paragraphs
function ArticleContentRenderer({ content }) {
  if (!content) return null;

  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-6 text-white/85 text-base sm:text-lg leading-relaxed">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // H2 Header (## Title)
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 bg-linear-to-r from-white via-white to-[#2de8b0] bg-clip-text text-transparent border-b border-white/10 pb-3"
            >
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          );
        }

        // H3 Header (### Title)
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#2de8b0] mt-8 mb-3">
              {trimmed.replace(/^###\s+/, "")}
            </h3>
          );
        }

        // Blockquote (> text)
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-[#2de8b0] pl-4 py-2 italic bg-white/5 rounded-r-xl text-white/90 my-6"
            >
              {trimmed.replace(/^>\s+/, "")}
            </blockquote>
          );
        }

        // Unordered List (- item or * item)
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split(/\n/).map((line) => line.replace(/^[-*]\s+/, ""));
          return (
            <ul key={idx} className="list-disc list-inside space-y-2 pl-2 text-white/80 my-4">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
                </li>
              ))}
            </ul>
          );
        }

        // Paragraph
        return (
          <p
            key={idx}
            className="text-white/80 leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
          />
        );
      })}
    </div>
  );
}

// Inline formatting helper for **bold** and *italic*
function formatInlineMarkdown(text) {
  if (!text) return "";
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // **bold**
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
  // *italic*
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-[#2de8b0]">$1</em>');
  return html;
}

export default function ArticleDetailPage({ params }) {
  const resolvedParams = React.use ? React.use(params) : params;
  const slug = resolvedParams?.slug;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return;
      try {
        const data = await getArticleBySlugFromFirebase(slug);
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#010504] text-white pt-32 pb-20 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4 animate-pulse">
          <div className="h-6 w-32 bg-white/10 rounded-full mx-auto" />
          <div className="h-12 w-full bg-white/10 rounded-xl" />
          <div className="h-64 w-full bg-white/10 rounded-3xl" />
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-[#010504] text-white pt-40 pb-20 px-4 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Article Not Found</h2>
          <p className="text-white/60 text-sm">The article you are looking for does not exist or has been removed.</p>
          <Link
            href="/articles"
            className="inline-block px-6 py-3 rounded-full bg-[#2de8b0] text-black font-bold text-sm hover:scale-105 transition-all"
          >
            ← Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  // Calculate read time
  const wordCount = article.content ? article.content.split(/\s+/).length : 0;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  const coverImage = (article.image && article.image.trim()) ? article.image : "/images/website_growth_blog.jpg";
  const formattedDate = article.createdAt
    ? new Date(article.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recent";

  return (
    <main className="min-h-screen bg-[#010504] text-white pt-28 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-[#2de8b0] selection:text-black">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-radial from-[#2de8b0]/10 via-black to-black pointer-events-none z-0 opacity-40" />

      <article className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2de8b0] hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/60">
            <span className="px-3.5 py-1 rounded-full bg-[#2de8b0]/15 text-[#2de8b0] font-bold uppercase tracking-wider">
              {article.category || "General"}
            </span>
            <span>•</span>
            <span>{readTimeMinutes} Min Read</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white tracking-tight">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          {article.subtitle && (
            <p className="text-white/80 text-base sm:text-xl leading-relaxed border-l-4 border-[#2de8b0] pl-4 sm:pl-6 py-2 italic bg-white/5 rounded-r-2xl">
              "{article.subtitle}"
            </p>
          )}
        </div>

        {/* Featured Cover Image */}
        <div className="relative w-full h-64 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          <img
            src={coverImage}
            alt={article.title || "Article Cover"}
            className="w-full h-full object-cover opacity-95"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/website_growth_blog.jpg";
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#010504] via-transparent to-transparent opacity-60" />
        </div>

        {/* Article Body Content */}
        <div className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/10 shadow-xl">
          <ArticleContentRenderer content={article.content} />
        </div>

        {/* Tags & Author Footer */}
        <footer className="space-y-8 border-t border-white/10 pt-8">
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-[#2de8b0]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Box */}
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#2de8b0] text-black font-bold flex items-center justify-center text-lg shrink-0 shadow-md">
              DK
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">{article.author || "Devskarnel Team"}</h4>
              <p className="text-white/60 text-xs sm:text-sm font-light">
                Specializing in high-converting web architecture, Next.js engineering & digital strategic growth.
              </p>
            </div>
          </div>
        </footer>

        {/* High-Converting CTA Box */}
        <div className="rounded-3xl border border-[#2de8b0]/40 bg-linear-to-r from-emerald-950/70 via-black to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#2de8b0]/20 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Ready to Build a Website That Grows Your Business?
          </h3>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Let's discuss how we can transform your digital presence into a high-converting revenue engine. Free strategy session included.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://calendly.com/devskarnel/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2de8b0] hover:bg-[#28d29f] text-black font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#2de8b0]/20"
            >
              Book Free Strategy Call
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
