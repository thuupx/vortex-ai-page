"use client";

import { motion } from "framer-motion";
import { Search, Zap, Sparkles, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary-50" />,
      title: "Describe or Upload",
      description:
        "Use natural language to describe what you're looking for or upload a similar image.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-50" />,
      title: "AI Processing",
      description:
        "Our on-device AI analyzes your request and searches through your image collection.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary-50" />,
      title: "Instant Results",
      description:
        "Get accurate results instantly, with no data ever leaving your device.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-400 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-primary-50/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how VortexAI makes finding and managing your images
              effortless.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-primary-50/90">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(33.33%*1.5-10px)] transform -translate-x-1/2">
                  <ArrowRight className="h-8 w-8 text-primary-100" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
