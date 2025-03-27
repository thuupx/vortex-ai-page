"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Trash2, MessageSquare, FileText } from "lucide-react";
import * as motion from "motion/react-client"
import { TiltCard } from "@/components/tilt-card";

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Search className="h-12 w-12 text-primary-300 mb-2" />,
      title: "Smart Image Search",
      description:
        "Find any image instantly with text or image-based search powered by AI.",
      content:
        "Search by describing what you're looking for or upload a similar image to find matches in your collection.",
    },
    {
      icon: <FileText className="h-12 w-12 text-primary-300 mb-2" />,
      title: "Natural Language Search",
      description:
        "Search your images using everyday language and conversational queries.",
      content:
        'Ask "Show me beach photos from last summer" or "Find pictures with my dog" and get instant, accurate results.',
    },
    {
      icon: <Trash2 className="h-12 w-12 text-primary-300 mb-2" />,
      title: "Duplicate Cleanup",
      description:
        "Automatically identify and remove duplicate or similar images.",
      content:
        "Free up storage space and keep your collection organized with intelligent duplicate detection.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary-300 mb-2" />,
      title: "AI Chat Insights",
      description: "Chat with AI to gain insights about your image collection and organization.",
      content:
        "Ask questions about your photos and get intelligent answers about content, patterns, and organization.",
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
      id="features"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white z-0"></div>
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
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-primary-300/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              VortexAI combines cutting-edge AI with intuitive design to
              transform how you manage your images.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="perspective-1000"
            >
              <TiltCard>
                <Card className="h-full border-primary-100 bg-white/80 backdrop-blur-sm transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="pb-2 relative z-10">
                    {feature.icon}
                    <CardTitle className="text-primary-400">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-primary-300/70">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-primary-400/80">{feature.content}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
