"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { addArticleToFirebase, getArticlesFromFirebase, deleteArticleFromFirebase } from "@/lib/articles";

const SECURE_EMAIL = process.env.NEXT_PUBLIC_SECURE_EMAIL || "admin@devskarnel.com";
const SECURE_PASSWORD = process.env.NEXT_PUBLIC_SECURE_PASSWORD || "admin123";

export default function AdminStudioPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Form states
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Web Development");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("Devskarnel Team");

  // Existing articles list
  const [articlesList, setArticlesList] = useState([]);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const auth = localStorage.getItem("is_admin");
    if (auth === "true") {
      setIsAdmin(true);
      fetchArticles();
    } else {
      setFetching(false);
    }
  }, []);

  const fetchArticles = async () => {
    setFetching(true);
    try {
      const data = await getArticlesFromFirebase();
      setArticlesList(data);
    } catch (err) {
      console.error("Fetch articles error:", err);
    } finally {
      setFetching(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email === SECURE_EMAIL && loginData.password === SECURE_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem("is_admin", "true");
      fetchArticles();
    } else {
      alert("❌ Access Denied: Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("is_admin");
    setIsAdmin(false);
  };

  // Image compressor & FileReader helper
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const scaleSize = MAX_WIDTH / img.width;

        if (scaleSize < 1) {
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
        setImage(resizedDataUrl);
      };
    };
  };

  const addTag = (e) => {
    if (e && e.key && e.key !== "Enter") return;
    if (e) e.preventDefault();

    const val = tagInput.trim().replace(/#/g, "");
    if (val && !tags.includes(val)) {
      setTags((prev) => [...prev, val]);
      setTagInput("");
    }
  };

  const removeTag = (idx) => setTags(tags.filter((_, i) => i !== idx));

  const submitArticle = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!title.trim() || !content.trim() || !category) {
      alert("⚠️ Please fill in Title, Category, and Narrative Content.");
      return;
    }

    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = {
        title: title.trim(),
        subtitle: subtitle.trim() || content.trim().substring(0, 150) + "...",
        content: content.trim(),
        category,
        tags: [...tags],
        image: image || "",
        author: author.trim() || "Devskarnel Team",
      };

      const result = await addArticleToFirebase(payload);

      if (result.success) {
        const msg = result.warning
          ? `✨ ${result.warning}`
          : "✨ Article published successfully!";
        setStatusMessage({ type: "success", text: msg });
        setTitle("");
        setSubtitle("");
        setContent("");
        setTags([]);
        setImage("");
        setTagInput("");
        await fetchArticles();
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatusMessage({ type: "error", text: "❌ Error publishing: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, articleTitle) => {
    if (!confirm(`Are you sure you want to delete "${articleTitle}"?`)) return;

    try {
      await deleteArticleFromFirebase(id);
      setArticlesList((prev) => prev.filter((a) => a.id !== id));
      alert("Deleted successfully!");
    } catch (err) {
      alert("Error deleting article: " + err.message);
    }
  };

  // Locked Login Screen
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010504] px-4 py-32 text-white">
        <div className="fixed inset-0 bg-radial from-[#2de8b0]/10 via-black to-black pointer-events-none z-0 opacity-40" />

        <form
          onSubmit={handleLogin}
          className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6"
        >
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2de8b0]">
              Devskarnel Admin
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Article Studio</h2>
            <p className="text-xs text-white/50">Enter admin credentials to manage perspectives</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-white/60 mb-1 block">Admin Email</label>
              <input
                type="email"
                placeholder="admin@devskarnel.com"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#2de8b0] transition-colors"
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-xs text-white/60 mb-1 block">Security Key</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#2de8b0] transition-colors"
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#2de8b0] text-black font-bold hover:bg-[#28d29f] transition-all cursor-pointer hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#2de8b0]/20"
          >
            Unlock Article Studio
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010504] text-white pt-28 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background Radial Glow */}
      <div className="fixed inset-0 bg-radial from-[#2de8b0]/10 via-black to-black pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Top Header & Navigation Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2de8b0]">
              Devskarnel Creator Studio
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Publish & Manage Articles
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/articles"
              className="px-4 py-2 rounded-full border border-white/20 text-xs font-semibold text-white/80 hover:text-white hover:border-[#2de8b0] transition-all"
            >
              View Articles Page ↗
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-semibold text-red-300 hover:bg-red-500/30 transition-all cursor-pointer"
            >
              Lock Studio
            </button>
          </div>
        </div>

        {/* Feedback Alert */}
        {statusMessage.text && (
          <div
            className={`p-4 rounded-2xl border text-sm font-medium ${
              statusMessage.type === "success"
                ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-200"
                : "bg-red-950/80 border-red-500/50 text-red-200"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Create Article Form Container */}
        <form
          onSubmit={submitArticle}
          className="bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8"
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <h2 className="text-xl font-bold text-white">Create New Article</h2>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg ${
                loading
                  ? "bg-white/20 text-white/40 cursor-not-allowed"
                  : "bg-[#2de8b0] text-black hover:bg-[#28d29f] hover:scale-105 active:scale-95 shadow-[#2de8b0]/20"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <span>Publish Article</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-2">
                Article Headline *
              </label>
              <input
                type="text"
                placeholder="e.g. How a High-Converting Website Drives 10x Business Growth..."
                className="w-full text-xl sm:text-2xl font-bold bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#2de8b0] transition-colors"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Subtitle / Excerpt */}
            <div>
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-2">
                Subtitle / Executive Summary
              </label>
              <input
                type="text"
                placeholder="Short teaser paragraph for preview cards..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2de8b0] transition-colors"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>

            {/* Category & Author Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-2">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2de8b0] transition-colors cursor-pointer"
                >
                  <option value="Web Development" className="bg-[#010504] text-white">Web Development</option>
                  <option value="Technology" className="bg-[#010504] text-white">Technology</option>
                  <option value="Innovation" className="bg-[#010504] text-white">Innovation</option>
                  <option value="Design" className="bg-[#010504] text-white">Design & UX</option>
                  <option value="Strategy" className="bg-[#010504] text-white">Business Strategy</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  placeholder="Devskarnel Team"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2de8b0] transition-colors"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>

            {/* Tags & Image Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tags Input */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block">
                  Tags (Press Enter to Add)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Next.js, SEO..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2de8b0]"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={addTag}
                  />
                  <button
                    type="button"
                    onClick={() => addTag()}
                    className="px-4 py-3 bg-white/10 hover:bg-[#2de8b0] hover:text-black text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2de8b0]/15 text-[#2de8b0] text-xs rounded-full border border-[#2de8b0]/30 flex items-center gap-2"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => removeTag(i)}
                        className="hover:text-red-400 font-bold cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Image Upload / Input */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block">
                  Featured Cover Image
                </label>

                {image ? (
                  <div className="relative h-28 w-full rounded-xl overflow-hidden border border-white/20 group">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setImage("")}
                      className="absolute top-2 right-2 bg-black/80 hover:bg-red-600 text-white w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center transition-colors cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="flex flex-col items-center justify-center h-20 bg-white/5 hover:bg-white/10 border border-dashed border-white/20 rounded-xl cursor-pointer transition-colors">
                      <span className="text-xs text-white/60 font-medium">+ Click to Upload Image File</span>
                      <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                    </label>
                    <input
                      type="text"
                      placeholder="Or paste Image URL (https://...)"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white outline-none focus:border-[#2de8b0]"
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Markdown Content Textarea */}
            <div>
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-2">
                Article Narrative Content (Markdown Supported: ## Headings, **bold**, lists) *
              </label>
              <textarea
                placeholder="Write your article narrative here... 

## Section Title

Your insights and analysis go here..."
                rows={12}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white/90 text-base leading-relaxed outline-none focus:border-[#2de8b0] transition-colors resize-y font-mono"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </div>
        </form>

        {/* Existing Published Articles List */}
        <div className="bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white">Published Articles</h3>
            <span className="text-xs text-[#2de8b0] font-semibold">{articlesList.length} Total Articles</span>
          </div>

          {fetching ? (
            <div className="py-8 text-center text-white/40 text-sm">Loading articles...</div>
          ) : articlesList.length === 0 ? (
            <div className="py-8 text-center text-white/40 text-sm">No articles published yet.</div>
          ) : (
            <div className="divide-y divide-white/10">
              {articlesList.map((art) => (
                <div key={art.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-[#2de8b0]/15 text-[#2de8b0] text-[10px] font-bold uppercase">
                        {art.category}
                      </span>
                      <span className="text-xs text-white/40">
                        {new Date(art.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm sm:text-base truncate">{art.title}</h4>
                    <p className="text-xs text-white/50 truncate">{art.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href={`/articles/${art.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
                    >
                      Preview
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDelete(art.id, art.title)}
                      className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-xs text-red-300 font-medium transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
