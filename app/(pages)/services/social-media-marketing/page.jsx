import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Social Media Marketing & Ads | Devskarnel",
  description:
    "High-ROI social media marketing, Meta (Facebook/Instagram) Ads, TikTok Ads, viral content creation, and community growth services.",
};

const features = [
  {
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Targeted paid ad campaigns engineered with dynamic creatives, Lookalike audiences, retargeting pixels, and high-ROAS funnels.",
    icon: "🎯",
    bullets: ["Custom Audience Funnels", "A/B Creative Testing", "3x-6x ROAS Target"],
  },
  {
    title: "TikTok Ads & UGC Video Campaigns",
    desc: "Viral short-form video ads created in collaboration with UGC creators to capture Gen-Z and Millennial buyer attention.",
    icon: "📹",
    bullets: ["UGC Creator Sourcing", "TikTok Spark Ads", "High-Converting Scripting"],
  },
  {
    title: "Social Media Content Strategy",
    desc: "Consistent monthly content calendars including carousels, reels, graphics, and engaging captions tailored to your brand identity.",
    icon: "📅",
    bullets: ["Monthly Content Calendars", "Custom Graphic Design", "Engaging Copywriting"],
  },
  {
    title: "Community Growth & Management",
    desc: "Active community engagement, comment responses, direct message support, and follower acquisition strategies.",
    icon: "💬",
    bullets: ["DM Lead Nurturing", "Comment Moderation", "Brand Voice Consistency"],
  },
  {
    title: "Influencer Outreach & Partnerships",
    desc: "Hand-picked micro and macro influencer collaborations to generate authentic brand endorsements and social proof.",
    icon: "🌟",
    bullets: ["Influencer Matchmaking", "Contract Negotiation", "Campaign Tracking"],
  },
  {
    title: "Analytics & ROI Reporting",
    desc: "Comprehensive monthly performance reports tracking Cost Per Acquisition (CPA), ROAS, Click-Through Rates (CTR), and conversion volume.",
    icon: "📈",
    bullets: ["ROAS Tracking", "Meta Pixel & CAPI Setup", "Transparent Monthly Reports"],
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <ServiceHero
        badge="Performance Growth Studio"
        titleLine1="High-converting"
        titleLine2="Social media marketing & ads."
        description="Scale your brand revenue with targeted paid ad campaigns, viral UGC videos, and data-backed creative testing that maximizes ROAS."
        ctaText="Grow Your Brand"
        ctaHref="#contact"
        secondaryCtaText="Request Ad Strategy"
        secondaryCtaHref="https://calendly.com/devskarnel/30min"
      />
      <ServiceFeatures
        badge="Performance Growth"
        heading="Social Media Marketing Capabilities"
        subheading="Data-backed campaigns designed to turn impressions into profitable sales."
        features={features}
      />
      <ServiceProcess
        badge="Ad Strategy"
        heading="Our Paid Growth Framework"
        subheading="Test, optimize, scale winning creatives."
      />
      <CTASection />
    </>
  );
}
