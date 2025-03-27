"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { Star, ImagePlus, Gauge, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TiltCard } from "@/components/tilt-card";
import { useEffect, useRef } from "react";

import "@splidejs/splide/css";

export function QualityAssessmentSection() {
  const qualityFactors = [
    {
      icon: <Star className="h-6 w-6 text-primary-300" />,
      title: "Aesthetic Evaluation",
      description: "Analyzes composition, color harmony, and visual appeal",
    },
    {
      icon: <Gauge className="h-6 w-6 text-primary-300" />,
      title: "Technical Analysis",
      description: "Measures sharpness, noise levels, and exposure accuracy",
    },
    {
      icon: <ImagePlus className="h-6 w-6 text-primary-300" />,
      title: "Comparative Scoring",
      description:
        "Ranks similar images to identify the highest quality version",
    },
    {
      icon: <Award className="h-6 w-6 text-primary-300" />,
      title: "Smart Recommendations",
      description: "Suggests which images to keep based on quality scores",
    },
  ];

  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSplide = async () => {
      if (splideRef.current) {
        const { Splide } = await import("@splidejs/splide");

        const splide = new Splide(splideRef.current, {
          type: "slide",
          rewind: true,
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          width: '100%',
          fixedWidth: '100%',
          fixedHeight: 'auto',
          heightRatio: 1.5,
          focus: 'center',
          trimSpace: false,
          gap: '1rem',
        });

        splide.mount();

        return () => {
          splide.destroy();
        };
      }
    };

    loadSplide();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute -left-20 top-40 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -right-20 bottom-40 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-400 text-sm font-medium mb-2">
              Advanced Feature
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-400">
              Image Quality Assessment
            </h2>
            <p className="text-lg text-primary-300/80 max-w-[600px]">
              Our state-of-the-art AI evaluates your images based on both
              aesthetic and technical factors, all while running completely on
              your device for maximum privacy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {qualityFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  className="perspective-1000"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <TiltCard>
                    <Card className="flex items-start gap-3 p-4 border-primary-100 bg-white/80 backdrop-blur-sm">
                      <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 text-primary-400">
                        {factor.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-primary-400">
                          {factor.title}
                        </h3>
                        <p className="text-sm text-primary-300/80">
                          {factor.description}
                        </p>
                      </div>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative w-full flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-0">
              {/* Image slider with quality scores */}
              <div ref={splideRef} className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-2 border-primary-100">
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src="/best-image.jpeg"
                            alt="High quality image"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 350px, 400px"
                            priority
                          />
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-primary-400 text-white font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center border-2 border-white text-xs sm:text-sm">
                            <span>9.8</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-white">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-green-600 text-xs sm:text-sm">
                              Best Quality
                            </span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="h-3 w-3 sm:h-4 sm:w-4 fill-green-600 text-green-600"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="splide__slide">
                      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-2 border-primary-200">
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src="/best-image.jpeg"
                            alt="Similar image with good quality"
                            fill
                            className="object-cover opacity-90"
                            quality={40}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 350px, 400px"
                          />
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-primary-200 text-primary-400 font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center border-2 border-white text-xs sm:text-sm">
                            <span>7.2</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-white">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-green-300 text-xs sm:text-sm">
                              Good Quality
                            </span>
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="h-3 w-3 sm:h-4 sm:w-4 fill-green-300 text-green-300"
                                />
                              ))}
                              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-green-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="splide__slide">
                      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-2 border-primary-100">
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src="/best-image.jpeg"
                            alt="Similar image with average quality"
                            fill
                            className="object-cover"
                            quality={10}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 350px, 400px"
                          />
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-primary-100 text-primary-400 font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center border-2 border-white text-xs sm:text-sm">
                            <span>6.5</span>
                          </div>
                        </div>
                        <div className="p-2 sm:p-3 bg-white">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-yellow-300 text-xs sm:text-sm">
                              Average Quality
                            </span>
                            <div className="flex">
                              {[1, 2, 3].map((star) => (
                                <Star
                                  key={star}
                                  className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-300 text-yellow-300"
                                />
                              ))}
                              {[1, 2].map((star) => (
                                <Star
                                  key={star}
                                  className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-primary-400 mb-2">
            Why Quality Assessment Matters
          </h3>
          <p className="text-primary-300/80">
            When you take multiple similar photos, it can be challenging to
            decide which one to keep. VortexAI&apos;s Image Quality Assessment
            eliminates the guesswork by objectively analyzing each image and
            providing a quality score. This helps you maintain only the best
            images in your collection, saving storage space while preserving
            your most valuable memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
