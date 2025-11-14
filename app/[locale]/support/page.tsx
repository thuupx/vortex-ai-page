import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex-1 px-6 py-16 md:px-10 lg:px-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Support</h1>
        <p className="text-muted-foreground mb-4">
          If you need help with PicetaAI, have questions about how the app
          works, or want to report a problem, please reach out to us.
        </p>
        <p className="text-muted-foreground mb-4">
          You can contact our support team via email at{" "}
          <a
            href="mailto:thepiceta.ai@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            thepiceta.ai@gmail.com
          </a>
          . We aim to respond as soon as possible.
        </p>
        <p className="text-muted-foreground">
          This page is provided as the official support URL for the PicetaAI app
          listed on the App Store.
        </p>
      </section>
      <Footer />
    </main>
  );
}
