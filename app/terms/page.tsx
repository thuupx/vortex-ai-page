import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TermsOfService } from "@/components/terms-of-service";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <TermsOfService />
      <Footer />
    </main>
  );
}
