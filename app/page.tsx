import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { QualityAssessmentSection } from "@/components/quality-assessment-section";
import { HowItWorks } from "@/components/how-it-works";
import { PrivacySection } from "@/components/privacy-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

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
