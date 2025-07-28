import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { TestimonialsSection } from "@/components/testimonials-section";
import dynamic from "next/dynamic";

const QualityAssessmentSection = dynamic(() =>
  import("@/components/quality-assessment-section").then(
    (mod) => mod.QualityAssessmentSection
  )
);

const PricingSection = dynamic(() =>
  import("@/components/pricing-section").then((mod) => mod.PricingSection)
);
const PrivacySection = dynamic(() =>
  import("@/components/privacy-section").then((mod) => mod.PrivacySection)
);


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <QualityAssessmentSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <PrivacySection />
      <Footer />
    </main>
  );
}
