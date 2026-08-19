import React from "react";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Articles & Consultations | Devskarnel",
  description:
    "Ready to get a website that actually grows your business? Schedule a call or request a quote with Devskarnel.",
};

export default function ArticlesPage() {
  return (
    <main className="pt-16 sm:pt-20 min-h-[60vh] bg-black">
      <CTASection />
    </main>
  );
}
