"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Trash2, MessageSquare, FileText } from "lucide-react";
import * as motion from "motion/react-client";
import { TiltCard } from "@/components/tilt-card";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations('features');
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
      title: t('features.0.title'),
      description: t('features.0.description'),
      content: t('features.0.content'),
    },
    {
      icon: <FileText className="h-12 w-12 text-primary-300 mb-2" />,
      title: t('features.1.title'),
      description: t('features.1.description'),
      content: t('features.1.content'),
    },
    {
      icon: <Trash2 className="h-12 w-12 text-primary-300 mb-2" />,
      title: t('features.2.title'),
      description: t('features.2.description'),
      content: t('features.2.content'),
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary-300 mb-2" />,
      title: t('features.3.title'),
      description: t('features.3.description'),
      content: t('features.3.content'),
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
              {t('sectionTitle')}
            </h2>
            <p className="max-w-[900px] text-primary-300/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('sectionDescription')}
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
                <Card className="h-[360px] border-primary-100 bg-white/80 backdrop-blur-sm transition-all duration-300 overflow-hidden">
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
