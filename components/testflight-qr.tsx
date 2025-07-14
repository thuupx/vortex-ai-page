"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TestFlightQRProps {
  testflightUrl?: string;
}

export function TestFlightQR({ testflightUrl = "https://testflight.apple.com/join/yourTestFlightCode" }: TestFlightQRProps) {
  const t = useTranslations("testflight");

  return (
    <div className="w-full max-w-md space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary-100 shadow-sm">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-primary-900">{t("title", { fallback: "Try the Beta" })}</h3>
        <p className="text-sm text-primary-600">{t("subtitle", { fallback: "Scan the QR code to download our app on TestFlight" })}</p>
      </div>
      
      <div className="flex justify-center">
        <div className="relative aspect-square w-48 h-48 border border-primary-100 rounded-lg overflow-hidden">
          <Image 
            src="/testflight-qr.png" 
            alt="TestFlight QR Code"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <Button 
          onClick={() => window.open(testflightUrl, "_blank")}
          className="w-full bg-primary-400 hover:bg-primary-400/90 text-white"
        >
          {t("openTestflight", { fallback: "Open in TestFlight" })}
        </Button>
        <p className="text-xs text-center text-primary-400/70">
          {t("instructions", { fallback: "TestFlight app required. Available only on iOS devices." })}
        </p>
      </div>
    </div>
  );
}
