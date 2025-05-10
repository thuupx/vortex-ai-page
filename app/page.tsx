"use client";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { PrivacySection } from "@/components/privacy-section";
import { QualityAssessmentSection } from "@/components/quality-assessment-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <QualityAssessmentSection />
      <HowItWorks />
      <TestimonialsSection />
      <PrivacySection />
      <Footer />
    </main>
  );
}
