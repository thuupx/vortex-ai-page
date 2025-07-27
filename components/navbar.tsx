"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Navbar() {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-primary-400">
              Piceta<span className="text-primary-200">AI</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("features")}
          </Link>
          <Link
            href="#privacy"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("privacy")}
          </Link>
          <Link
            href="#join-beta"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("join_beta")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
