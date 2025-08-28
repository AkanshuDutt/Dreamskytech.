"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Terms() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section
          id="top"
          className="px-6 md:px-10 lg:px-24 pt-16 pb-10 border-b border-gray-200 bg-gray-50"
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#000080]">
              Terms & Conditions
            </h1>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              These Terms and Conditions ("<span className="font-semibold">Terms</span>") govern your access to and use of DreamSkyTech’s websites, products, software, APIs, and services (collectively, the "<span className="font-semibold">Services</span>"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 md:px-10 lg:px-24 py-10">
          <div className="max-w-5xl mx-auto">
            {/* Table of Contents */}
            <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
              <ol className="grid md:grid-cols-2 gap-y-2 list-decimal list-inside text-gray-700">
                {[
                  "Acceptance of Terms",
                  "About DreamSkyTech",
                  "Eligibility & Account Registration",
                  "Use of Services",
                  "Orders, Pricing & Payments",
                  "Subscriptions, Trials & Renewal",
                  "User Content & License",
                  "Intellectual Property",
                  "Acceptable Use Policy",
                  "Third-Party Services & Links",
                  "Confidentiality",
                  "Privacy & Data Protection",
                  "Security & Responsible Disclosure",
                  "Service Levels & Support",
                  "Beta Features & Experimental Tools",
                  "Open-Source Components",
                  "Compliance, Export & Anti-Corruption",
                  "Disclaimers",
                  "Limitation of Liability",
                  "Indemnification",
                  "Force Majeure",
                  "Changes to the Services or Terms",
                  "Term, Suspension & Termination",
                  "Governing Law & Dispute Resolution",
                  "Notices & Contact",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i + 1}`}
                      className="hover:text-[#000080] underline underline-offset-4 decoration-gray-400 hover:decoration-[#000080]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="space-y-10 leading-relaxed text-gray-700">
              <section id="section-1" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By accessing or using the Services, you confirm that you have read, understood, and agree to be bound by these Terms and any policies referenced herein. If you do not agree, you must not use the Services. If you are using the Services on behalf of an entity, you represent that you have authority to bind that entity to these Terms.
                </p>
              </section>

              <section id="section-2" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  2. About DreamSkyTech
                </h3>
                <p>
                  DreamSkyTech provides IT consulting, software development, web solutions, and digital transformation services to businesses and individuals. These Terms apply to all offerings unless otherwise specified.
                </p>
              </section>

              <section id="section-3" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  3. Eligibility & Account Registration
                </h3>
                <p>
                  You must be at least 18 years old or the age of majority in your jurisdiction to use our Services. When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.
                </p>
              </section>

              <section id="section-4" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  4. Use of Services
                </h3>
                <p>
                  You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to misuse our Services, attempt to gain unauthorized access, or interfere with their operation.
                </p>
              </section>

              <section id="section-5" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  5. Orders, Pricing & Payments
                </h3>
                <p>
                  All prices are listed in INR (unless stated otherwise). DreamSkyTech reserves the right to modify pricing at any time. Payments must be made in accordance with the billing terms in effect at the time of your order.
                </p>
              </section>

              <section id="section-6" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  6. Subscriptions, Trials & Renewal
                </h3>
                <p>
                  Some Services may be offered on a subscription basis. Subscriptions automatically renew unless canceled before the renewal date. Free trials may convert to paid subscriptions unless canceled prior to expiration.
                </p>
              </section>

              <section id="section-7" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  7. User Content & License
                </h3>
                <p>
                  By submitting content through our Services, you grant DreamSkyTech a worldwide, non-exclusive, royalty-free license to use, host, reproduce, and distribute your content solely for the purpose of providing and improving the Services.
                </p>
              </section>

              <section id="section-8" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  8. Intellectual Property
                </h3>
                <p>
                  All content, trademarks, logos, and intellectual property related to the Services are owned by DreamSkyTech or its licensors. You may not copy, modify, or distribute without authorization.
                </p>
              </section>

              <section id="section-9" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  9. Acceptable Use Policy
                </h3>
                <ul className="list-disc pl-5">
                  <li>No unlawful, harmful, or fraudulent activity.</li>
                  <li>No spamming, hacking, or distribution of malware.</li>
                  <li>No infringement of intellectual property rights.</li>
                </ul>
              </section>

              <section id="section-10" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  10. Third-Party Services & Links
                </h3>
                <p>
                  Our Services may contain links to third-party websites or integrations. DreamSkyTech is not responsible for third-party content, policies, or practices.
                </p>
              </section>

              <section id="section-11" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  11. Confidentiality
                </h3>
                <p>
                  Both parties agree to maintain confidentiality of non-public information obtained during the course of business.
                </p>
              </section>

              <section id="section-12" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  12. Privacy & Data Protection
                </h3>
                <p>
                  Your use of Services is subject to our Privacy Policy, which explains how we collect, use, and protect your personal data.
                </p>
              </section>

              <section id="section-13" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  13. Security & Responsible Disclosure
                </h3>
                <p>
                  We take security seriously. If you discover a vulnerability, you agree to report it responsibly and not exploit it.
                </p>
              </section>

              <section id="section-14" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  14. Service Levels & Support
                </h3>
                <p>
                  DreamSkyTech will make reasonable efforts to ensure Services are available but does not guarantee uninterrupted access.
                </p>
              </section>

              <section id="section-15" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  15. Beta Features & Experimental Tools
                </h3>
                <p>
                  Some features may be labeled as beta. These are provided on an “as-is” basis without warranties.
                </p>
              </section>

              <section id="section-16" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  16. Open-Source Components
                </h3>
                <p>
                  Our Services may include open-source components governed by their own licenses.
                </p>
              </section>

              <section id="section-17" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  17. Compliance, Export & Anti-Corruption
                </h3>
                <p>
                  You agree to comply with all applicable laws, including export controls and anti-bribery regulations.
                </p>
              </section>

              <section id="section-18" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  18. Disclaimers
                </h3>
                <p>
                  The Services are provided “as is” without warranties of any kind. DreamSkyTech disclaims all implied warranties to the fullest extent permitted by law.
                </p>
              </section>

              <section id="section-19" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  19. Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by law, DreamSkyTech shall not be liable for indirect, incidental, or consequential damages arising from your use of Services.
                </p>
              </section>

              <section id="section-20" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  20. Indemnification
                </h3>
                <p>
                  You agree to indemnify and hold harmless DreamSkyTech, its affiliates, and employees against any claims, damages, or expenses resulting from your violation of these Terms.
                </p>
              </section>

              <section id="section-21" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  21. Force Majeure
                </h3>
                <p>
                  DreamSkyTech shall not be liable for delays or failures caused by events beyond reasonable control, including natural disasters, internet outages, or government restrictions.
                </p>
              </section>

              <section id="section-22" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  22. Changes to the Services or Terms
                </h3>
                <p>
                  We may modify Services or update these Terms at any time. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section id="section-23" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  23. Term, Suspension & Termination
                </h3>
                <p>
                  We reserve the right to suspend or terminate your access if you violate these Terms or applicable law.
                </p>
              </section>

              <section id="section-24" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  24. Governing Law & Dispute Resolution
                </h3>
                <p>
                  These Terms shall be governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in New Delhi, India.
                </p>
              </section>

              <section id="section-25" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-2 text-[#000080]">
                  25. Notices & Contact
                </h3>
                <p>
                  For questions or concerns regarding these Terms, you may contact us at:{" "}
                  <span className="font-semibold">info@dreamskytech.com</span>
                </p>
              </section>
            </div>

            {/* Back to top */}
            <div className="mt-8 flex justify-end">
              <a
                href="#top"
                className="px-4 py-2 rounded-lg border border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white transition"
              >
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
