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
              Terms of Use & End User License Agreement (EULA)
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Last Updated: November 14, 2025
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                By downloading, installing, or using Piceta (&quot;the
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
                <li>Access and use the App&apos;s features</li>
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

            <Section title="5. Subscriptions and Payments">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Piceta may offer auto-renewable subscription options (for
                example, a premium plan with additional features). The
                subscription title, length (such as monthly or yearly), and
                price are clearly displayed in the app at the time of purchase.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  Payment will be charged to your Apple ID account at
                  confirmation of purchase.
                </li>
                <li>
                  The subscription automatically renews for the same price and
                  duration unless auto-renew is turned off at least 24 hours
                  before the end of the current period.
                </li>
                <li>
                  Your account will be charged for renewal within 24 hours prior
                  to the end of the current period.
                </li>
                <li>
                  You can manage or cancel your subscription and turn off
                  auto-renewal at any time after purchase by going to your
                  account settings in the App Store.
                </li>
                <li>
                  Any unused portion of a free trial period, if offered, will be
                  forfeited when you purchase a subscription.
                </li>
              </ul>
            </Section>

            <Section title="6. App Updates and Changes">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>We may update the App periodically</li>
                <li>Updates may add, modify, or remove features</li>
                <li>We may change these terms at any time</li>
                <li>Continued use after changes constitutes acceptance</li>
              </ul>
            </Section>

            <Section title="7. Disclaimers">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  The App is provided &quot;as is&quot; without warranties
                </li>
                <li>We do not guarantee uninterrupted service</li>
                <li>We are not responsible for third-party content</li>
                <li>Results may vary based on device capabilities</li>
              </ul>
            </Section>

            <Section title="8. Limitation of Liability">
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

            <Section title="9. Termination">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>You may stop using the App and uninstall it at any time.</li>
                <li>We may suspend or terminate your right to use the App if you
                materially or repeatedly violate these Terms or if we discontinue
                the App.</li>
                <li>Sections that by their nature should survive termination (such
                as intellectual property, disclaimers, and limitations of
                liability) will continue to apply.</li>
              </ul>
            </Section>

            <Section title="10. Governing Law">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                These terms are governed by the laws of the jurisdiction in
                which the App is operated, without regard to its conflict of law
                provisions.
              </p>
            </Section>

            <Section title="11. Apple App Store End User License Agreement (EULA)">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                If you download Piceta from the Apple App Store, your use of the
                App is also governed by Apple&apos;s standard Licensed
                Application End User License Agreement (EULA), which applies in
                addition to and, where applicable, supersedes these Terms. You
                can review Apple&apos;s EULA at:
              </p>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className="text-primary-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </Section>

            <Section title="12. Contact Information">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                For questions about these Terms, please contact us at:
                <a
                  href="mailto:thepiceta.ai@gmail.com"
                  className="text-primary-600 hover:underline ml-1"
                >
                  thepiceta.ai@gmail.com
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}
