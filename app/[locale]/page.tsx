import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import dynamic from "next/dynamic";

const FeaturesSection = dynamic(() =>
  import("@/components/features-section").then((mod) => mod.FeaturesSection)
);
const QualityAssessmentSection = dynamic(() =>
  import("@/components/quality-assessment-section").then(
    (mod) => mod.QualityAssessmentSection
  )
);
const HowItWorks = dynamic(() =>
  import("@/components/how-it-works").then((mod) => mod.HowItWorks)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/testimonials-section").then(
    (mod) => mod.TestimonialsSection
  )
);
const PricingSection = dynamic(() =>
  import("@/components/pricing-section").then((mod) => mod.PricingSection)
);
const PrivacySection = dynamic(() =>
  import("@/components/privacy-section").then((mod) => mod.PrivacySection)
);
const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer)
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
