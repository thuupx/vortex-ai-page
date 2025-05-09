"use client";
import i18n from "@/i18n/config";
import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") {
      document.documentElement.lang = lng;
    }
    setLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        className={`px-3 py-1 rounded ${
          language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => changeLanguage("en")}
        aria-pressed={language === "en"}
      >
        English
      </button>
      <button
        className={`px-3 py-1 rounded ${
          language === "vi" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => changeLanguage("vi")}
        aria-pressed={language === "vi"}
      >
        Tiếng Việt
      </button>
    </div>
  );
}
