import { TestFlightQR } from "@/components/testflight-qr";
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";

import { BubbleCanvas } from "./bubble-canvas";

export async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-gradient opacity-10 z-0"></div>
      <BubbleCanvas />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10" id="waitlist">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="py-2 gradient-text font-extrabold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                {t("title")}
              </h1>
              <p className="max-w-[600px] text-primary-400/80 md:text-xl">
                {t("subtitle")}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TestFlightQR testflightUrl="https://testflight.apple.com/join/9es5JZbD" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
