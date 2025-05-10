import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import FsBackend from "i18next-fs-backend";

const isServer = typeof window === "undefined";
let Backend: typeof HttpBackend | typeof FsBackend;
if (isServer) {
  Backend = await import("i18next-fs-backend").then((module) => module.default);
} else {
  Backend = HttpBackend;
}

const availableLanguages = ["en", "vi"];

const i18nConfig = {
  fallbackLng: "en",
  supportedLngs: availableLanguages,
  lng: "en",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: isServer
      ? process.cwd() + "/public/locales/{{lng}}/{{ns}}.json"
      : "/locales/{{lng}}/{{ns}}.json",
  },
  detection: {
    order: [
      "cookie",
      "localStorage",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],
    caches: ["cookie"],
  },
};

if (!i18n.isInitialized) {
  const i18nWithBackend = i18n.use(Backend as typeof HttpBackend);

  if (!isServer) {
    i18nWithBackend.use(LanguageDetector);
  }

  i18nWithBackend.use(initReactI18next).init(i18nConfig);
}

export default i18n;
