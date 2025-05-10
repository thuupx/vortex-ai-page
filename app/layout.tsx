import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import type React from "react";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={open_sans.className}>
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
