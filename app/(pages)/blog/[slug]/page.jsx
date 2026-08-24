import { redirect } from "next/navigation";

export default async function BlogRedirectPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "how-a-high-converting-website-drives-10x-business-growth";
  redirect(`/articles/${slug}`);
}
