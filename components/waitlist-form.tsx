"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export function WaitlistForm() {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailSchema = z.string().email();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(t("invalidEmail"));
      return;
    }

    setIsSubmitting(true);

    const trimmedEmail = email.trim();

    try {
      // Call our API endpoint to save to the database
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("joinFailed"));
      }

      toast.success(t("joinSuccess"), {
        description: t("joinSuccessDesc"),
      });

      setEmail("");
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast.error(t("submitError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row w-full items-center space-y-2 sm:space-y-0 sm:space-x-2"
      >
        <Input
          type="email"
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/80 border-primary-100"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-primary-400 hover:bg-primary-400/90 text-white"
        >
          {isSubmitting ? t("joining") : t("joinWaitlist")}
        </Button>
      </form>
      <p className="text-xs text-center text-primary-400/70">
        {t("waitlistDescription")}
      </p>
    </div>
  );
}
