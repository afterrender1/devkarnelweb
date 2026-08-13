import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import ServiceFAQ from "@/app/components/service-components/ServiceFAQ";
import Review from "@/app/components/web-components/Review";
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

const faqs = [
  {
    q: "Which social media platforms do you manage?",
    a: "We manage and run ad campaigns across Meta (Facebook & Instagram), TikTok, LinkedIn, YouTube Shorts, and X (Twitter).",
  },
  {
    q: "What ad budget do you recommend for Meta or TikTok ads?",
    a: "We recommend starting with a testing budget of at least $1,000 - $3,000/month to efficiently test creative variations and find profitable audiences.",
  },
  {
    q: "Do you produce video creatives for ads?",
    a: "Yes! We script, edit, format, and optimize short-form video ads (Reels/TikToks) with hook variations, subtitles, and call-to-actions.",
  },
  {
    q: "How do you track conversions accurately?",
    a: "We implement Meta Conversions API (CAPI), Google Tag Manager, and UTM tracking parameters to guarantee 100% accurate conversion data.",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <ServiceHero
        badge="Performance Growth Studio"
        titlePrefix="High Converting"
        titleHighlight="Social Media Marketing"
        titleSuffix="& Ads"
        description="Scale your brand revenue with paid ad campaigns, viral UGC video content, and targeted social media growth strategies."
        tags={["Meta Ads", "TikTok Ads", "UGC Videos", "High ROAS"]}
        stats={[
          { label: "Ad Spend Managed", value: "$3.5M+" },
          { label: "Avg Campaign ROAS", value: "4.8x" },
          { label: "Video Views Generated", value: "25M+" },
        ]}
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
      <Review />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </>
  );
}
