"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getArticlesFromFirebase } from "@/lib/articles";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticlesFromFirebase();
        setArticles(data);
      } catch (err) {
        console.error("Error loading articles:", err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0b10] text-white pt-32 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-[#2de8b0] selection:text-black">
      {/* Subtle Background Radial Glow */}
      <div className="fixed inset-0 bg-radial from-[#2de8b0]/5 via-black to-black pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* --- HEADER SECTION MATCHING EXACT SCREENSHOT --- */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span
              style={{
                WebkitTextStroke: "1.5px #2de8b0",
                color: "transparent",
              }}
              className="mr-3"
            >
              Sharing Our
            </span>
            <span className="italic text-[#2de8b0] bg-linear-to-r from-[#2de8b0] to-teal-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>

          {/* Decorative Zigzag Wave Divider Line */}
          <div className="overflow-hidden py-2 max-w-4xl mx-auto opacity-70">
            <svg
              className="w-full h-4 text-[#2de8b0]"
              viewBox="0 0 1200 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0,12 L15,4 L30,20 L45,4 L60,20 L75,4 L90,20 L105,4 L120,20 L135,4 L150,20 L165,4 L180,20 L195,4 L210,20 L225,4 L240,20 L255,4 L270,20 L285,4 L300,20 L315,4 L330,20 L345,4 L360,20 L375,4 L390,20 L405,4 L420,20 L435,4 L450,20 L465,4 L480,20 L495,4 L510,20 L525,4 L540,20 L555,4 L570,20 L585,4 L600,20 L615,4 L630,20 L645,4 L660,20 L675,4 L690,20 L705,4 L720,20 L735,4 L750,20 L765,4 L780,20 L795,4 L810,20 L825,4 L840,20 L855,4 L870,20 L885,4 L900,20 L915,4 L930,20 L945,4 L960,20 L975,4 L990,20 L1005,4 L1020,20 L1035,4 L1050,20 L1065,4 L1080,20 L1095,4 L1110,20 L1125,4 L1140,20 L1155,4 L1170,20 L1185,4 L1200,12" />
            </svg>
          </div>
        </div>

        {/* --- ARTICLES GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {loading ? (
            // Loading Skeleton Cards
            Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-[460px] bg-[#12141d] border border-white/10 rounded-2xl animate-pulse"
                />
              ))
          ) : articles.length === 0 ? (
            <div className="col-span-full text-center py-20 text-white/40 text-base">
              No articles published yet.
            </div>
          ) : (
            articles.map((article) => {
              const coverImage =
                article.image && article.image.trim()
                  ? article.image
                  : "/images/website_growth_blog.jpg";

              return (
                <Link
                  key={article.id || article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col bg-[#12141d] hover:bg-[#161824] border border-white/10 hover:border-[#2de8b0]/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/80"
                >
                  {/* Top Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-zinc-950 shrink-0">
                    <img
                      src={coverImage}
                      alt={article.title || "Article thumbnail"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/website_growth_blog.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#12141d] via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Category Pill */}
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#2de8b0]/10 border border-[#2de8b0]/30 text-[#2de8b0] text-[11px] font-semibold rounded-md uppercase tracking-wider">
                          {article.category || "Web"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#2de8b0] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                    </div>

                    {/* Divider Line & Author Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="font-medium text-white/70">
                          {article.author || "Devskarnel Team"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </section>
      </div>
    </main>
  );
}
