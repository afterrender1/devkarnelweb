"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getArticlesFromFirebase } from "@/lib/articles";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Development", "Technology", "Innovation", "Design", "Strategy"];

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticlesFromFirebase();
        setArticles(data);
        setFilteredArticles(data);
      } catch (err) {
        console.error("Error loading articles:", err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter(
          (a) => a.category?.toLowerCase() === activeCategory.toLowerCase()
        )
      );
    }
  }, [activeCategory, articles]);

  return (
    <main className="min-h-screen bg-[#010504] text-white pt-32 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-[#2de8b0] selection:text-black">
      {/* Radial Glow Background */}
      <div className="fixed inset-0 bg-radial from-[#2de8b0]/10 via-black to-black pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2de8b0] px-4 py-1.5 rounded-full bg-[#2de8b0]/10 border border-[#2de8b0]/20 inline-block">
            Our Articles & Insights
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            The <span className="bg-linear-to-r from-[#2de8b0] via-emerald-300 to-teal-400 bg-clip-text text-transparent">Devskarnel Journal.</span>
          </h1>

          <p className="text-white/70 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Architectural perspectives, Next.js engineering insights, web strategy, and high-converting growth frameworks.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2de8b0] text-black border-[#2de8b0] shadow-lg shadow-[#2de8b0]/20 scale-105"
                    : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading Skeletons
            Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-[420px] bg-white/5 border border-white/10 rounded-3xl animate-pulse"
                />
              ))
          ) : filteredArticles.length === 0 ? (
            <div className="col-span-full text-center py-20 text-white/50 text-base space-y-4">
              <p>No articles published yet.</p>
              <Link
                href="/admin"
                className="inline-block px-5 py-2.5 rounded-full bg-[#2de8b0] text-black text-xs font-bold hover:scale-105 transition-all"
              >
                Go to Admin Studio to Publish Article ↗
              </Link>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const coverImage = (article.image && article.image.trim()) ? article.image : "/images/website_growth_blog.jpg";
              const formattedDate = article.createdAt
                ? new Date(article.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent";

              return (
                <Link
                  key={article.id || article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2de8b0]/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#2de8b0]/10"
                >
                  {/* Article Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-900 shrink-0">
                    <img
                      src={coverImage}
                      alt={article.title || "Article Image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/website_growth_blog.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#010504] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#2de8b0] rounded-full">
                        {article.category || "General"}
                      </span>
                    </div>
                  </div>

                  {/* Article Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{article.author || "Devskarnel Team"}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#2de8b0] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-white/60 text-sm line-clamp-3 leading-relaxed font-light">
                        {article.subtitle || article.content?.substring(0, 120) + "..."}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#2de8b0]">
                      <span>Read Perspective</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l7-7m7 7H3"
                        />
                      </svg>
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
