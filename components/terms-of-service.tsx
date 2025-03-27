import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

export function TermsOfService() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Terms of Service
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Last Updated: February 8, 2025
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                By downloading, installing, or using Vortex (&quot;the
                App&quot;), you agree to be bound by these Terms of Service. If
                you do not agree to these terms, do not use the App.
              </p>
            </Section>

            <Section title="2. License and Usage Rights">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We grant you a limited, non-exclusive, non-transferable license
                to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  Download and install the &quot;App&quot; on your personal
                  device
                </li>
                <li>Use the App for personal, non-commercial purposes</li>
                <li>Access and use the App&apos;s features as intended</li>
              </ul>
            </Section>

            <Section title="3. User Responsibilities">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Provide accurate information when required</li>
                <li>Use the App in compliance with all applicable laws</li>
                <li>Not modify, reverse engineer, or hack the App</li>
                <li>Not use the App for illegal or unauthorized purposes</li>
              </ul>
            </Section>

            <Section title="4. Content and Data">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>You retain all rights to your photos and content</li>
                <li>You are responsible for backing up your data</li>
                <li>We are not responsible for lost or corrupted data</li>
                <li>
                  You grant us necessary rights to process your photos locally
                </li>
              </ul>
            </Section>

            <Section title="5. App Updates and Changes">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>We may update the App periodically</li>
                <li>Updates may add, modify, or remove features</li>
                <li>We may change these terms at any time</li>
                <li>Continued use after changes constitutes acceptance</li>
              </ul>
            </Section>

            <Section title="6. Disclaimers">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  The App is provided &quot;as is&quot; without warranties
                </li>
                <li>We do not guarantee uninterrupted service</li>
                <li>We are not responsible for third-party content</li>
                <li>Results may vary based on device capabilities</li>
              </ul>
            </Section>

            <Section title="7. Limitation of Liability">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Direct or indirect damages</li>
                <li>Loss of data or profits</li>
                <li>Service interruptions</li>
                <li>Issues caused by third-party software</li>
              </ul>
            </Section>

            <Section title="8. Termination">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>We may terminate access for violations</li>
                <li>You may stop using the App at any time</li>
                <li>Terms survive termination where applicable</li>
              </ul>
            </Section>

            <Section title="9. Governing Law">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                These terms are governed by the laws of the jurisdiction in
                which the App is operated, without regard to its conflict of law
                provisions.
              </p>
            </Section>

            <Section title="10. Contact Information">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                For questions about these Terms, please contact us at:
                <a
                  href="mailto:legal@vortex.app"
                  className="text-primary-600 hover:underline ml-1"
                >
                  legal@vortex.app
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}
