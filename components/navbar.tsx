import { Button } from "@/components/ui/button";
import Link from "next/link";
import LanguageToggle from "./language-toggle";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-primary-400">
              {t('navbar.brand').replace('AI', '')}
              <span className="text-primary-200">AI</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('navbar.features')}
          </Link>
          <Link
            href="#privacy"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('navbar.privacy')}
          </Link>
          <Link
            href="#waitlist"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t('navbar.join_waitlist')}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex">
            <Link href="#waitlist">{t('navbar.join_waitlist')}</Link>
          </Button>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
