import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  doc,
  limit,
} from "firebase/firestore";

// Helper function to create URL-friendly slug
export function createSlug(text) {
  if (!text) return "article-" + Date.now();
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Local Storage Key for persistence
const LOCAL_STORAGE_KEY = "devskarnel_local_articles";

function getLocalArticles() {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveLocalArticle(article) {
  if (typeof window === "undefined") return;
  try {
    const current = getLocalArticles();
    const updated = [article, ...current.filter((a) => a.id !== article.id)];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }
}

function deleteLocalArticle(id) {
  if (typeof window === "undefined") return;
  try {
    const current = getLocalArticles();
    const updated = current.filter((a) => a.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("Could not delete from localStorage", e);
  }
}

// 1. Add New Article (with 2.5s Firebase Timeout & instant local fallback)
export async function addArticleToFirebase(articleData) {
  const title = (articleData.title || "").trim();
  const content = (articleData.content || "").trim();
  const slug = articleData.slug || createSlug(title);

  const payload = {
    title: title,
    slug: slug,
    subtitle: (articleData.subtitle || "").trim() || content.substring(0, 160) + "...",
    content: content,
    category: articleData.category || "General",
    tags: Array.isArray(articleData.tags) ? articleData.tags.map((t) => String(t)) : [],
    image: articleData.image || "",
    author: (articleData.author || "Devskarnel Team").trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  let firebaseSuccess = false;
  let docId = "art-" + Date.now();

  try {
    const articlesRef = collection(db, "articles");

    // Race against 2.5s timeout so Firebase SDK WebChannel never hangs infinitely
    const firebasePromise = addDoc(articlesRef, payload);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Firebase request timeout")), 2500)
    );

    const docRef = await Promise.race([firebasePromise, timeoutPromise]);
    docId = docRef.id;
    firebaseSuccess = true;
  } catch (error) {
    console.warn("Firebase write timeout/error (saving locally):", error.message);
  }

  const newArticle = { id: docId, ...payload };
  saveLocalArticle(newArticle);

  return {
    success: true,
    isFirebase: firebaseSuccess,
    id: docId,
    slug: slug,
  };
}

// 2. Fetch All REAL Articles (Firestore with 2.5s timeout + LocalStorage)
export async function getArticlesFromFirebase() {
  const localArticles = getLocalArticles();
  let firebaseArticles = [];

  try {
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, orderBy("createdAt", "desc"));

    const firebasePromise = getDocs(q);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Firebase fetch timeout")), 2500)
    );

    const querySnapshot = await Promise.race([firebasePromise, timeoutPromise]);

    querySnapshot.forEach((docSnap) => {
      firebaseArticles.push({ id: docSnap.id, ...docSnap.data() });
    });
  } catch (error) {
    console.warn("Firestore fetch notice:", error.message);
  }

  // Combine Firestore and Local articles uniquely by slug
  const allMap = new Map();
  firebaseArticles.forEach((item) => allMap.set(item.slug, item));
  localArticles.forEach((item) => {
    if (!allMap.has(item.slug)) allMap.set(item.slug, item);
  });

  const result = Array.from(allMap.values());
  result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return result;
}

// 3. Fetch Single Article by Slug
export async function getArticleBySlugFromFirebase(slug) {
  try {
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, where("slug", "==", slug), limit(1));

    const firebasePromise = getDocs(q);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Fetch slug timeout")), 2500)
    );

    const querySnapshot = await Promise.race([firebasePromise, timeoutPromise]);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      return { id: docSnap.id, ...docSnap.data() };
    }
  } catch (error) {
    console.warn("Firestore slug query fallback:", error.message);
  }

  // Check local articles
  const localArticles = getLocalArticles();
  const localMatch = localArticles.find((a) => a.slug === slug);
  return localMatch || null;
}

// 4. Delete Article by ID
export async function deleteArticleFromFirebase(id) {
  deleteLocalArticle(id);
  if (!id.startsWith("art-")) {
    try {
      await deleteDoc(doc(db, "articles", id));
    } catch (error) {
      console.warn("Firestore delete notice:", error.message);
    }
  }
  return { success: true };
}
