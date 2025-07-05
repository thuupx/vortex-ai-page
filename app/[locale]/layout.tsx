import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Toaster } from "sonner";

import "../globals.css";
import Providers from "../providers";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PicetaAI - AI-Powered Image Management",
  description:
    "Manage your images with AI-powered search, cleanup, and insights - all while keeping your data private with on-device processing.",
  keywords: [
    "image search",
    "image cleanup",
    "AI chat",
    "privacy",
    "on-device AI",
    "mobile app",
  ],
  openGraph: {
    title: "PicetaAI - AI-Powered Image Management",
    description:
      "Manage your images with AI-powered search, cleanup, and insights - all while keeping your data private with on-device processing.",
    type: "website",
    locale: "en_US",
    url: "https://www.thepiceta.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PicetaAI - AI-Powered Image Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PicetaAI - AI-Powered Image Management",
    description:
      "Manage your images with AI-powered search, cleanup, and insights - all while keeping your data private with on-device processing.",
    images: ["/og-image.png"],
  },
};


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
      <body className={openSans.className}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
