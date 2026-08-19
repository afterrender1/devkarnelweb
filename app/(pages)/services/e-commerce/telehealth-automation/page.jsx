import React from "react";
import ServiceHero from "@/app/components/service-components/ServiceHero";
import ServiceFeatures from "@/app/components/service-components/ServiceFeatures";
import ServiceProcess from "@/app/components/service-components/ServiceProcess";
import CTASection from "@/app/components/web-components/CTASection";

export const metadata = {
  title: "Telehealth E-Commerce Automation Services | Devskarnel",
  description:
    "HIPAA-compliant e-commerce automation for telehealth platforms: automated patient intake forms, physician portal routing, prescription auto-refills, and pharmacy fulfillment.",
};

const features = [
  {
    title: "HIPAA-Compliant Patient Intake & Assessment",
    desc: "Automated medical questionnaire intake forms with end-to-end encryption and instant patient data encryption.",
    icon: "📋",
    bullets: ["HIPAA-Compliant Encrypted Forms", "Instant EMR Sync", "Automated Eligibility Check"],
  },
  {
    title: "Automated Physician Portal Routing",
    desc: "Route patient assessments automatically to licensed physicians for fast review, approval, and digital prescription issuance.",
    icon: "🩺",
    bullets: ["Auto Doctor Assignment", "Digital Signature Workflow", "Sub-15m Review Routing"],
  },
  {
    title: "Partner Pharmacy & Dispensing Sync",
    desc: "Automated e-prescription dispatch to compounding and partner pharmacies for fast order preparation and tracking.",
    icon: "💊",
    bullets: ["E-Prescription Dispensing Sync", "Partner Pharmacy API", "Discreet Medication Shipping"],
  },
  {
    title: "Automated Prescription Refill Subscriptions",
    desc: "Recurring subscription engine managing monthly or quarterly prescription renewals with automated physician re-approvals.",
    icon: "🔄",
    bullets: ["Recurring Refill Engine", "Automated Doctor Re-auth", "Payment Retry Automation"],
  },
  {
    title: "Patient Telehealth CRM & SMS Reminders",
    desc: "Automated SMS and email notifications for refill reminders, lab updates, and virtual consultation follow-ups.",
    icon: "📲",
    bullets: ["HIPAA-Compliant SMS", "Refill Reminder Sequences", "Consultation Follow-ups"],
  },
  {
    title: "Compliance Audit & Encryption Shield",
    desc: "Continuous security monitoring, SOC 2 compliance frameworks, and BAA (Business Associate Agreement) verification for digital health platforms.",
    icon: "🔒",
    bullets: ["HIPAA & BAA Verified", "SOC 2 Type II Standards", "End-to-End Field Encryption"],
  },
];

export default function TelehealthAutomationPage() {
  return (
    <>
      <ServiceHero
        badge="Telehealth E-Commerce Systems"
        titlePrefix="Scale Medical Platforms With"
        titleHighlight="Telehealth Automation"
        titleSuffix="Solutions"
        description="Build and scale HIPAA-compliant telehealth storefronts with automated patient intake, physician approval portals, partner pharmacy e-dispensing, and auto-refill subscriptions."
        tags={["HIPAA Compliant", "Doctor Approval Portal", "Pharmacy API", "Auto Refills"]}
        stats={[
          { label: "HIPAA Security Score", value: "100%" },
          { label: "Physician Review Time", value: "<15 Min" },
          { label: "Refill Retention Rate", value: "88%" },
        ]}
      />
      <ServiceFeatures
        badge="Healthcare Capabilities"
        heading="Enterprise Telehealth Automation Stack"
        subheading="Engineered specifically for digital health, wellness, and prescription subscription brands."
        features={features}
      />
      <ServiceProcess
        badge="Security Workflow"
        heading="Our Telehealth Integration Process"
        subheading="From HIPAA architecture design to live doctor & pharmacy portal automation."
      />
      <CTASection />
    </>
  );
}
