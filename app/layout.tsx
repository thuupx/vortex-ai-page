import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import type React from "react";
import "./globals.css";
import I18nProvider from "./i18n-provider";

const open_sans = Open_Sans({ subsets: ["latin"] });

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

import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSR: get language from cookie or default to 'en'
  let lang = "en";
  try {
    const cookieStore = await cookies();
    lang = cookieStore.get("i18next")?.value || "en";

  } catch {}
  console.log("🚀 ~ lang:", lang)

  return (
    <html lang={lang}>
      <body className={open_sans.className}>
        <I18nProvider lang={lang}>{children}</I18nProvider>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
