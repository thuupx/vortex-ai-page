import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGUAGES = ["en", "vi"];
const DEFAULT_LANGUAGE = "en";

export function middleware(request: NextRequest) {
  // Try to get language from cookie
  let lang = request.cookies.get("i18next")?.value;
  console.log("🚀 ~ middleware ~ lang:", lang);

  // Fallback: try Accept-Language header
  if (!lang) {
    const acceptLang = request.headers.get("accept-language");
    if (acceptLang) {
      lang = acceptLang.split(",")[0].split("-")[0];
    }
  }

  // Ensure supported language
  if (!SUPPORTED_LANGUAGES.includes(lang || "")) {
    lang = DEFAULT_LANGUAGE;
  }

  // Set language cookie if not set
  if (request.cookies.get("i18next")?.value !== lang) {
    const response = NextResponse.next();
    response.cookies.set({
      name: "i18next",
      value: lang || DEFAULT_LANGUAGE,
      path: "/",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply to all routes except static files and API
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
