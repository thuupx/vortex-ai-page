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

export function PrivacyPolicy() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Last Updated: February 8, 2025
            </p>
          </div>

          <div className="space-y-8">
            <Section title="1. Information We Collect">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We collect information that you provide directly to us when
                using the app:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Photos and media files you choose to analyze</li>
                <li>Device information for app functionality</li>
                <li>Usage data to improve our services</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Provide and maintain the app&apos;s core features</li>
                <li>Detect and manage duplicate photos</li>
                <li>Improve and optimize the app&apos;s performance</li>
                <li>Protect against unauthorized access</li>
              </ul>
            </Section>

            <Section title="3. Data Storage">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>All photo processing is done locally on your device</li>
                <li>We do not upload or store your photos on our servers</li>
                <li>Settings and preferences are stored locally</li>
                <li>You maintain full control of your data</li>
              </ul>
            </Section>

            <Section title="4. Permissions">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The app requires certain permissions to function:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Photo library access - to analyze and manage photos</li>
                <li>Storage access - to save processed photos</li>
              </ul>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                These permissions can be revoked at any time in your device
                settings.
              </p>
            </Section>

            <Section title="5. Third-Party Services">
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>We use analytics tools to improve app performance</li>
                <li>No personal data is shared with third parties</li>
                <li>Third-party services have their own privacy policies</li>
              </ul>
            </Section>

            <Section title="6. Data Security">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We implement appropriate security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Local encryption of sensitive data</li>
                <li>Secure data transmission protocols</li>
                <li>Regular security updates</li>
              </ul>
            </Section>

            <Section title="7. Children's Privacy">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Our app is not intended for children under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
            </Section>

            <Section title="8. Changes to Privacy Policy">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy in the app.
              </p>
            </Section>

            <Section title="9. Contact Us">
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                If you have questions about this Privacy Policy, please contact
                us at:
                <a
                  href="mailto:support@vortex.app"
                  className="text-primary-600 hover:underline ml-1"
                >
                  support@vortex.app
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}
