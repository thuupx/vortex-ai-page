import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VortexAI - AI-Powered Image Management",
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
    title: "VortexAI - AI-Powered Image Management",
    description:
      "Manage your images with AI-powered search, cleanup, and insights - all while keeping your data private with on-device processing.",
    type: "website",
    locale: "en_US",
    url: "https://vortexai.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "VortexAI - AI-Powered Image Management",
    description:
      "Manage your images with AI-powered search, cleanup, and insights - all while keeping your data private with on-device processing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
