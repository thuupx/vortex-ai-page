import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PrivacyPolicy } from "@/components/privacy-policy";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
