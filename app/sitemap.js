import { getArticlesFromFirebase } from "@/lib/articles";
import { ARTICLES as staticArticles } from "@/app/components/layout/Articles";

export default async function sitemap() {
  const baseUrl = "https://devskarnel.com";

  // Static site pages
  const staticRoutes = [
    "",
    "/portfolio",
    "/articles",
    "/services/branding",
    "/services/e-commerce",
    "/services/e-commerce/amazon-store-setup",
    "/services/e-commerce/ebay-automation",
    "/services/e-commerce/etsy-automation",
    "/services/e-commerce/penties-automation",
    "/services/e-commerce/shopee-growth",
    "/services/e-commerce/shopify-automation",
    "/services/e-commerce/shopify-merchandise",
    "/services/e-commerce/telehealth-automation",
    "/services/e-commerce/temu-automation",
    "/services/e-commerce/tiktok-shop-automation",
    "/services/e-commerce/walmart-automation",
    "/services/e-commerce/woocommerce-development",
    "/services/logo-design",
    "/services/mobile-app-development",
    "/services/seo-optimization",
    "/services/social-media-marketing",
    "/services/ui-ux-design",
    "/services/website-development",
  ];

  // Fetch dynamic articles from Firebase / Local storage
  let fetchedArticles = [];
  try {
    fetchedArticles = await getArticlesFromFirebase();
  } catch (err) {
    console.warn("Sitemap articles fetch notice:", err.message);
  }

  // Combine static fallback articles & fetched articles uniquely by slug
  const articleSlugs = new Set();
  if (Array.isArray(staticArticles)) {
    staticArticles.forEach((art) => art.slug && articleSlugs.add(art.slug));
  }
  if (Array.isArray(fetchedArticles)) {
    fetchedArticles.forEach((art) => art.slug && articleSlugs.add(art.slug));
  }

  // Default article fallback slug if none returned
  if (articleSlugs.size === 0) {
    articleSlugs.add("how-a-high-converting-website-drives-10x-business-growth");
  }

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));

  const articleEntries = Array.from(articleSlugs).map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}