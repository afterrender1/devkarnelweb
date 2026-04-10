import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://devskarnel.com"),

  title: {
    default: "Devskarnel – Web Development Agency",
    template: "%s | Devskarnel",
  },

  description:
    "Devskarnel is a web development agency building fast, SEO-optimized websites using Next.js, React, and MERN stack.",

  keywords: [
    "Devskarnel",
    "Web Development Agency",
    "Next.js Developer",
    "MERN Stack Developer",
    "React Developer",
    "SEO-Friendly Web Development",
    "Fast Web Applications",
    "Scalable Web Solutions",
    "Custom Web Development",
    "Full-Stack Development",
    "WordPress Development",
    "Shopify Development",
    
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
    title: "Devskarnel – Web Development Agency",
    description:
      "We build fast, scalable, and SEO-friendly web applications using Next.js and MERN stack.",
    url: "https://devskarnel.com/",
    siteName: "Devskarnel",
    images:[
      {
        url : 'favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Devskarnel - Web Development Agency',
      }
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devskarnel",
    description: "Next.js & MERN Web Development Agency",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devskarnel",
    url: "https://devskarnel.com",
    logo: "https://devskarnel.com/logo.png",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Devskarnel",
    alternateName: "Devskarnel Web Solutions",
    url: "https://devskarnel.com/",
  };

  return (
    <html lang="en">
      <body className="">

        <h1 className="hidden">
          Devskarnel Web Development Agency - Next.js & MERN Experts
        </h1>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      <Navbar />


        {children}
      <Footer/>
      </body>
    </html>
  );
}