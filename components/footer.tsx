import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations('footer');
  return (
    <footer className="w-full border-t border-primary-100 bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-primary-400">
                Piceta<span className="text-primary-200">AI</span>
              </span>
            </Link>
            <p className="text-center text-sm text-primary-300/70 md:text-left">
              &copy; {new Date().getFullYear()} {t('copyright')}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-primary-300 hover:text-primary-400"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-primary-300 hover:text-primary-400"
            >
              {t('terms')}
            </Link>
            <Link
              href="mailto:xuanthu404@gmail.com"
              className="text-sm text-primary-300 hover:text-primary-400"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
