import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
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
      <CTASection />
    </>
  );
}
