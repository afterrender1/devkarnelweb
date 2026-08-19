import React from "react";
import Articles from "@/app/components/layout/Articles";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Engineering Articles & Insights | Devskarnel",
  description:
    "Explore architectural guides, e-commerce automation playbooks, UI/UX interaction teardowns, and technical SEO strategies published by Devskarnel.",
};

export default function ArticlesPage() {
  return (
    <main>
      <Articles />
      <CTASection />
    </main>
  );
}
