import "../globals.css";
import { Inter } from "next/font/google";
import Providers from "../providers";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale || "en";
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (e) {
    console.error(e);
    messages = (await import("../../messages/en.json")).default;
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
