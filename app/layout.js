import "./globals.css";



export const metadata = {
  title: {
    default: "Devkarnel Web Solutions | Modern Web Development Agency",
    template: "%s | Devkarnel Web Solutions",
  },
  description:
    "Devkarnel Web Solutions builds modern, high-performance websites and web applications using Next.js, React, and the MERN stack. We deliver scalable, secure, and SEO-optimized digital solutions for businesses worldwide.",
  keywords: [
    "Devkarnel Web Solutions",
    "Web Development Agency",
    "Next.js Development",
    "MERN Stack Developer",
    "React Developer",
    "Custom Web Applications",
    "SEO Optimized Websites",
    "WordPress Development",
    "Custom WordPress Websites",
    "WordPress Theme Customization",
    "WooCommerce Development",
    "Shopify Development",
    "Shopify Store Setup",
    "Shopify Theme Customization",
    "Ecommerce Website Development",
    "Online Store Development",
    "Full Stack Web Developer",
    "Frontend and Backend Development",
    "Website Redesign Services",
    "Business Website Development",
    "Landing Page Design",
    "Performance Optimized Websites",
    "Website Maintenance Services"
  ],
  authors: [{ name: "Devkarnel Web Solutions" }],
  creator: "Devkarnel Web Solutions",
  metadataBase: new URL("https://yourdomain.com"), // change to your real domain
  openGraph: {
    title: "Devkarnel Web Solutions | Modern Web Development Agency",
    description:
      "We create fast, scalable, and SEO-friendly web applications using modern technologies like Next.js and MERN stack.",
    url: "https://yourdomain.com",
    siteName: "Devkarnel Web Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devkarnel Web Solutions",
    description:
      "Modern web development agency specializing in Next.js and MERN stack solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="selection:bg-[#91e9fd] selection:text-[#334155]"
      >
        {children}
      </body>
    </html>
  );
}
