import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Mobile App Development Services | Devskarnel",
  description:
    "Native iOS, Android, and cross-platform mobile app development services built with React Native, Flutter, Swift, and Kotlin.",
};

const features = [
  {
    title: "iOS & Android Cross-Platform Apps",
    desc: "Single codebase apps powered by React Native & Flutter, delivering 60 FPS native performance on both Apple App Store and Google Play.",
    icon: "📱",
    bullets: ["React Native & Flutter", "60 FPS Animations", "Native Device APIs"],
  },
  {
    title: "Native Swift & Kotlin Development",
    desc: "Dedicated native app development for performance-intensive applications utilizing latest iOS Swift and Android Kotlin frameworks.",
    icon: "⚡",
    bullets: ["SwiftUI & Kotlin", "Bluetooth/BLE Sync", "GPU/AR Acceleration"],
  },
  {
    title: "Push Notifications & Real-Time Sync",
    desc: "Integrated Firebase Cloud Messaging (FCM), Apple Push Notification service (APNs), WebSocket connections, and live data sync.",
    icon: "🔔",
    bullets: ["Segmented Notifications", "Live WebSockets", "Offline Data Sync"],
  },
  {
    title: "In-App Purchases & Payment Gateways",
    desc: "Seamless Stripe, Apple Pay, Google Pay, and RevenueCat subscription management built into your mobile application.",
    icon: "💳",
    bullets: ["Apple Pay & Google Pay", "RevenueCat Subscriptions", "Stripe Mobile SDK"],
  },
  {
    title: "App Store & Play Store Deployment",
    desc: "Complete Apple App Store and Google Play Store submission handling, app review compliance, screenshot generation, and ASO.",
    icon: "🚀",
    bullets: ["App Store Approval Guarantee", "ASO Keyword Optimization", "Beta TestFlight Setup"],
  },
  {
    title: "Backend API & Cloud Architecture",
    desc: "Scalable Node.js, Next.js, or AWS backend services powering instant mobile API requests with strict authentication protocols.",
    icon: "☁️",
    bullets: ["REST & GraphQL APIs", "OAuth & Biometric Auth", "AWS / Firebase Cloud"],
  },
];

const faqs = [
  {
    q: "Should I build cross-platform (React Native/Flutter) or native?",
    a: "Cross-platform development saves up to 40% in cost and time while maintaining near-native speed. Native (Swift/Kotlin) is recommended for hardware-intensive apps like AR, heavy gaming, or complex Bluetooth sync.",
  },
  {
    q: "Do you handle App Store submission and approval?",
    a: "Yes! We handle full deployment, App Store guidelines compliance, TestFlight beta distribution, and Google Play Store console setups.",
  },
  {
    q: "Will my app work offline?",
    a: "We implement offline local caching and instant synchronization once internet connection is restored.",
  },
  {
    q: "How long does mobile app development take?",
    a: "An MVP app typically takes 4-6 weeks, while complex full-scale mobile applications take 8-12 weeks.",
  },
];

export default function MobileAppPage() {
  return (
    <>
      <ServiceHero
        badge="Mobile Engineering Studio"
        titlePrefix="High Performance"
        titleHighlight="Mobile App"
        titleSuffix="Development"
        description="We build fast, beautiful, and feature-rich mobile applications for iOS and Android that users love."
        tags={["React Native", "Flutter", "iOS Swift", "Android Kotlin"]}
        stats={[
          { label: "Apps Published", value: "85+" },
          { label: "App Store Approval Rate", value: "100%" },
          { label: "Active Mobile Users", value: "1.5M+" },
        ]}
      />
      <ServiceFeatures
        badge="Mobile Capabilities"
        heading="End-to-End Mobile App Development"
        subheading="From prototype to App Store feature."
        features={features}
      />
      <ServiceProcess
        badge="App Blueprint"
        heading="Our App Development Lifecycle"
        subheading="From wireframe to App Store approval."
      />
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
