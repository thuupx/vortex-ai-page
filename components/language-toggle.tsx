"use client";
import i18n from "@/i18n/config";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="flex items-center gap-2">
      <Select value={language} onValueChange={changeLanguage}>
        <SelectTrigger aria-label="Select language">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="vi">VI</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
