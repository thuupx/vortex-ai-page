"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import React from "react";

// Temporary enums for plans and features
const SubscriptionPlan = {
  Free: "Free",
  Pro: "Pro",
  Premium: "Premium",
} as const;

type SubscriptionPlanType = keyof typeof SubscriptionPlan;

const FeatureType = {
  VisualSearch: "VisualSearch",
  DuplicateMerge: "DuplicateMerge",
  AIImageSearch: "AIImageSearch",
  AIChat: "AIChat",
  AICaption: "AICaption",
} as const;

type FeatureTypeType = keyof typeof FeatureType;

const FREE_DAILY_LIMIT = 10;
const FREE_MONTHLY_LIMIT = 50;

const LIMITS = {
  [SubscriptionPlan.Free]: {
    [FeatureType.VisualSearch]: {
      monthly: FREE_MONTHLY_LIMIT,
      daily: FREE_DAILY_LIMIT,
    },
    [FeatureType.DuplicateMerge]: {
      monthly: FREE_MONTHLY_LIMIT,
      daily: FREE_DAILY_LIMIT,
    },
    [FeatureType.AIImageSearch]: {
      monthly: FREE_MONTHLY_LIMIT,
      daily: FREE_DAILY_LIMIT,
    },
    [FeatureType.AIChat]: {
      monthly: FREE_MONTHLY_LIMIT,
      daily: FREE_DAILY_LIMIT,
    },
    [FeatureType.AICaption]: {
      monthly: FREE_MONTHLY_LIMIT,
      daily: FREE_DAILY_LIMIT,
    },
  },
  [SubscriptionPlan.Pro]: {
    [FeatureType.VisualSearch]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.DuplicateMerge]: {
      monthly: 500,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.AIImageSearch]: {
      monthly: 300,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.AIChat]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: 100,
    },
    [FeatureType.AICaption]: {
      monthly: 500,
      daily: Number.MAX_SAFE_INTEGER,
    },
  },
  [SubscriptionPlan.Premium]: {
    [FeatureType.VisualSearch]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.DuplicateMerge]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.AIImageSearch]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.AIChat]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: Number.MAX_SAFE_INTEGER,
    },
    [FeatureType.AICaption]: {
      monthly: Number.MAX_SAFE_INTEGER,
      daily: Number.MAX_SAFE_INTEGER,
    },
  },
};

const featureLabels: Record<FeatureTypeType, string> = {
  VisualSearch: "Visual Search",
  DuplicateMerge: "Duplicate Merge",
  AIImageSearch: "AI Image Search",
  AIChat: "AI Chat",
  AICaption: "AI Caption",
};

const planDescriptions: Record<SubscriptionPlanType, string> = {
  Free: "For getting started and trying out our core AI features.",
  Pro: "For power users who want more AI and productivity.",
  Premium: "Unlimited access for professionals and teams.",
};

const planHighlights: Record<SubscriptionPlanType, string | null> = {
  Free: null,
  Pro: "Most Popular",
  Premium: null,
};

const planColors: Record<SubscriptionPlanType, string> = {
  Free: "border-primary-200 bg-white/80",
  Pro: "border-primary-400 bg-primary-50/80 shadow-lg scale-105 z-20",
  Premium: "border-yellow-300 bg-yellow-50/80",
};

export function PricingSection() {
  const t = useTranslations("pricing");
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  const plans = [
    SubscriptionPlan.Free,
    SubscriptionPlan.Pro,
    SubscriptionPlan.Premium,
  ];

  const priceMap: Record<
    "monthly" | "yearly",
    Record<SubscriptionPlanType, string>
  > = {
    monthly: {
      Free: "Free",
      Pro: t("proPrice", { defaultValue: "$2.99/mo" }),
      Premium: t("premiumPrice", { defaultValue: "$6.99/mo" }),
    },
    yearly: {
      Free: "Free",
      Pro: t("proPriceYear", { defaultValue: "$29.99/yr" }),
      Premium: t("premiumPriceYear", { defaultValue: "$69.99/yr" }),
    },
  };

  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden"
      id="pricing"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary-400 mb-4">
            {t("sectionTitle", { defaultValue: "Pricing Plans" })}
          </h2>
          <p className="text-lg text-primary-300/80 max-w-2xl mx-auto">
            {t("sectionDescription", {
              defaultValue:
                "Choose the plan that fits your needs and unlock the full power of AI.",
            })}
          </p>
          {/* Billing Toggle */}
          <div className="flex justify-center mt-8 mb-4 gap-2">
            <button
              className={`px-5 py-2 rounded-l-lg border border-primary-200 font-semibold text-primary-400 transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-primary-100"
                  : "bg-white/80 hover:bg-primary-50/80"
              }`}
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
            >
              {t("monthly", { defaultValue: "Monthly" })}
            </button>
            <button
              className={`px-5 py-2 rounded-r-lg border border-primary-200 font-semibold text-primary-400 transition-all duration-200 ${
                billing === "yearly"
                  ? "bg-primary-100"
                  : "bg-white/80 hover:bg-primary-50/80"
              }`}
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
            >
              {t("yearly", { defaultValue: "Yearly" })}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isPro = plan === SubscriptionPlan.Pro;
            return (
              <Card
                key={plan}
                className={`relative flex flex-col border-2 ${
                  planColors[plan]
                } transition-all duration-300 hover:scale-105 ${
                  isPro ? "shadow-2xl ring-2 ring-primary-200" : ""
                }`}
              >
                {planHighlights[plan] && (
                  <div className="absolute top-4 right-4 bg-primary-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {planHighlights[plan]}
                  </div>
                )}
                {/* Best Value badge for Premium */}
                {plan === SubscriptionPlan.Premium && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {t("bestValue", { defaultValue: "Best Value" })}
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary-400">
                    {t(`${plan}.title`, { defaultValue: plan })}
                  </CardTitle>
                  {/* Pricing */}
                  <div className="flex items-end gap-2 mt-2 mb-1">
                    <span
                      className={`text-4xl font-extrabold ${
                        plan === SubscriptionPlan.Free
                          ? "text-primary-300"
                          : "text-primary-400"
                      }`}
                    >
                      {priceMap[billing][plan]}
                    </span>
                    {plan !== SubscriptionPlan.Free && (
                      <span className="text-primary-300 text-base font-medium mb-0.5">
                        {billing === "monthly"
                          ? t("perMonth", { defaultValue: "per month" })
                          : t("perYear", { defaultValue: "per year" })}
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-primary-300/80">
                    {t(`${plan}.description`, {
                      defaultValue: planDescriptions[plan],
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {Object.keys(FeatureType).map((featureKey) => {
                      const feature =
                        FeatureType[featureKey as FeatureTypeType];
                      const limits = LIMITS[plan][feature];
                      let limitText = "";
                      const isUnlimitedMonthly =
                        limits.monthly === Number.MAX_SAFE_INTEGER;
                      const isUnlimitedDaily =
                        limits.daily === Number.MAX_SAFE_INTEGER;
                      if (isUnlimitedMonthly && isUnlimitedDaily) {
                        limitText = t("unlimited", {
                          defaultValue: "Unlimited",
                        });
                      } else if (isUnlimitedMonthly) {
                        limitText = t("limitText", {
                          defaultValue: "Unlimited/mo, {daily}/day",
                          monthly: t("unlimited", {
                            defaultValue: "Unlimited",
                          }),
                          daily: limits.daily,
                          feature: featureLabels[feature as FeatureTypeType],
                        });
                      } else if (isUnlimitedDaily) {
                        limitText = t("limitText", {
                          defaultValue: "{monthly}/mo, Unlimited/day",
                          monthly: limits.monthly,
                          daily: t("unlimited", { defaultValue: "Unlimited" }),
                          feature: featureLabels[feature as FeatureTypeType],
                        });
                      } else {
                        limitText = t("limitText", {
                          defaultValue: "{monthly}/mo, {daily}/day",
                          monthly: limits.monthly,
                          daily: limits.daily,
                          feature: featureLabels[feature as FeatureTypeType],
                        });
                      }
                      return (
                        <li
                          key={feature}
                          className="flex items-center justify-between text-primary-400/90"
                        >
                          <span>
                            {t(`feature.${feature}`, {
                              defaultValue:
                                featureLabels[feature as FeatureTypeType],
                            })}
                          </span>
                          <span
                            className="font-semibold overflow-x-auto whitespace-nowrap block max-w-[180px] custom-scrollbar"
                            style={{ WebkitOverflowScrolling: "touch" }}
                          >
                            {limitText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  {plan === SubscriptionPlan.Free && (
                    <div className="mt-6 p-3 rounded-lg bg-primary-50 border border-primary-100 text-primary-400 text-sm text-center font-medium shadow-sm">
                      {t("freeNote", {
                        defaultValue:
                          "We offer 500 AI credits for you to experience the app.",
                      })}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      isPro
                        ? "bg-primary-400 text-white hover:bg-primary-500"
                        : "bg-primary-100 text-primary-400 hover:bg-primary-200"
                    }`}
                  >
                    {t("choose", { defaultValue: "Choose" })}
                  </button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
