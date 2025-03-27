"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";
import * as motion from "motion/react-client"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-gradient opacity-10 z-0"></div>
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10" id="waitlist">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Manage Your Images with{" "}
                <span className="gradient-text font-extrabold">
                  AI-Powered Intelligence
                </span>
              </h1>
              <p className="max-w-[600px] text-primary-400/80 md:text-xl">
                Search, clean up, and gain insights from your image collection
                with privacy-first, on-device AI technology.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 min-[400px]:flex-row">
              <WaitlistForm />
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl border bg-white/50 backdrop-blur-sm md:rounded-2xl lg:max-w-none floating">
              <Image
                src="/placeholder.svg"
                alt="VortexAI App Screenshot"
                width={400}
                height={600}
                className="object-cover w-auto h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
