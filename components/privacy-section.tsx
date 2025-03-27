"use client";

import { Shield, Lock, Smartphone } from "lucide-react";
import * as motion from "motion/react-client";

export function PrivacySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative" id="privacy">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/50 to-white z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-400">
              Privacy First
            </h2>
            <p className="max-w-[900px] text-primary-300/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your data never leaves your device. All AI processing happens
              locally.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          <motion.div
            className="flex flex-col items-center space-y-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <Shield className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-primary-400">
              On-Device Processing
            </h3>
            <p className="text-primary-300/80">
              All AI operations run directly on your device, ensuring your
              images never leave your control.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <Lock className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-primary-400">
              No Cloud Storage
            </h3>
            <p className="text-primary-300/80">
              Unlike other apps, we don&apos;t store your images in the cloud.
              Your photos stay on your device.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <Smartphone className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-primary-400">
              Offline Capability
            </h3>
            <p className="text-primary-300/80">
              Use VortexAI even without an internet connection. Your privacy is
              never compromised.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
