import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Fracture",
  description: "Privacy Policy for Fracture and its products.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen">
      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo-transparent.png"
            alt="Fracture"
            width={32}
            height={32}
            className="rounded-sm sm:w-10 sm:h-10"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            fracture
          </span>
        </Link>
      </nav>

      {/* Content */}
      <article className="relative z-10 px-4 sm:px-8 py-12 sm:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-foreground/40 text-sm mb-12">
          Last updated: May 8, 2026
        </p>

        <div className="space-y-10 text-foreground/70 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              1. Introduction
            </h2>
            <p>
              Fracture (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy and is committed to protecting your personal
              data. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use
              our products and services.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground">Personal information</strong>{" "}
                — name, email address, and any other information you voluntarily
                provide when contacting us or signing up for our services.
              </li>
              <li>
                <strong className="text-foreground">Usage data</strong> — IP
                address, browser type, operating system, referring URLs, pages
                visited, and access times collected automatically when you
                interact with our website.
              </li>
              <li>
                <strong className="text-foreground">
                  Cookies and tracking technologies
                </strong>{" "}
                — we use cookies, pixels, and similar technologies to enhance
                your experience and gather analytical data. See Section 6 for
                details.
              </li>
              <li>
                <strong className="text-foreground">
                  Third-party sign-in data
                </strong>{" "}
                — if you authenticate via a third-party service (e.g., LinkedIn,
                Google), we may receive your profile information as permitted by
                that service and your privacy settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide, operate, and maintain our products and services.</li>
              <li>To communicate with you, including responding to inquiries and sending service-related notices.</li>
              <li>To improve and personalize your experience on our website.</li>
              <li>To analyze usage trends and monitor the effectiveness of our services.</li>
              <li>To detect, prevent, and address technical issues or security threats.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              4. How We Share Your Information
            </h2>
            <p className="mb-3">
              We do not sell your personal data. We may share your information
              in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground">Service providers</strong> —
                trusted third parties who assist us in operating our website and
                services, subject to confidentiality obligations.
              </li>
              <li>
                <strong className="text-foreground">Legal requirements</strong>{" "}
                — when required by law, regulation, legal process, or
                governmental request.
              </li>
              <li>
                <strong className="text-foreground">Business transfers</strong>{" "}
                — in connection with a merger, acquisition, or sale of assets,
                your data may be transferred as part of that transaction.
              </li>
              <li>
                <strong className="text-foreground">With your consent</strong> —
                we may share information for other purposes if you provide
                explicit consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfil the purposes described in this policy, unless a longer
              retention period is required or permitted by law. When your data is
              no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="mb-3">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Remember your preferences and settings.</li>
              <li>Understand how you use our website.</li>
              <li>Deliver relevant content and measure its effectiveness.</li>
            </ul>
            <p className="mt-3">
              You can control cookies through your browser settings. Disabling
              cookies may affect certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground">Access</strong> — request a
                copy of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-foreground">Correction</strong> —
                request correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-foreground">Deletion</strong> — request
                deletion of your personal data, subject to legal obligations.
              </li>
              <li>
                <strong className="text-foreground">Objection</strong> — object
                to the processing of your data in certain circumstances.
              </li>
              <li>
                <strong className="text-foreground">Portability</strong> —
                request a machine-readable copy of your data.
              </li>
              <li>
                <strong className="text-foreground">Withdraw consent</strong> —
                where processing is based on consent, you may withdraw it at any
                time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:hello@fracture.dev"
                className="text-red hover:underline"
              >
                hello@fracture.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              8. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over
              the internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices of those third
              parties. We encourage you to review their privacy policies before
              providing any personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 16.
              We do not knowingly collect personal data from children. If we
              become aware that we have collected data from a child without
              parental consent, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will revise the &quot;Last updated&quot; date at the top of
              this page. We encourage you to review this policy periodically to
              stay informed about how we are protecting your data.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <p className="mt-3">
              <a
                href="mailto:hello@fracture.dev"
                className="text-red hover:underline"
              >
                hello@fracture.dev
              </a>
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-8 py-6 sm:py-8 border-t border-foreground/10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-foreground/30">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-transparent.png"
              alt="Fracture"
              width={20}
              height={20}
              className="rounded-sm opacity-50"
            />
            <span>&copy; {new Date().getFullYear()} Fracture</span>
          </div>
          <span>Break the old. Build the new.</span>
        </div>
      </footer>
    </main>
  );
}
