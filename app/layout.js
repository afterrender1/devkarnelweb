import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://devskarnel.com"),

  title: {
    default: "Devskarnel | Next.js & MERN Web Development Agency",
    template: "%s | Devskarnel",
  },

  description:
    "Devskarnel is a web development agency building fast, SEO-optimized websites using Next.js, React, and MERN stack. We help businesses grow online with modern, scalable solutions.",

  keywords: [
    "Devskarnel",
    "Web Development Agency",
    "Next.js Developer",
    "MERN Stack Developer",
    "React Developer",
    "Custom Web Applications",
    "SEO Optimized Websites",
    "WordPress Development",
    "Shopify Development",
    "Ecommerce Website Development",
  ],

  authors: [{ name: "Devskarnel" }],
  creator: "Devskarnel",
  publisher: "Devskarnel",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "oUXQaTT_eWALgmCQeRgd5gKX6TLZpvJ2_bg2nWA5g60",
  },

  openGraph: {
    title: "Devskarnel | Next.js & MERN Web Development Agency",
    description:
      "We build fast, scalable, and SEO-friendly web applications using Next.js and MERN stack.",
    url: "https://devskarnel.com/",
    siteName: "Devskarnel",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devskarnel",
    description:
      "Modern web development agency specializing in Next.js and MERN stack.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devskarnel",
    url: "https://devskarnel.com",
    logo: "https://devskarnel.com/logo.png",
    sameAs: [
      "https://www.linkedin.com",
      "https://github.com",
    ],
  };

  return (
    <html lang="en">
      <body className="selection:bg-[#91e9fd] selection:text-[#334155]">

        {/* Hidden SEO H1 */}
        <h1 className="hidden">
          Devskarnel Web Development Agency - Next.js & MERN Experts
        </h1>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}