import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, MapPin, ChevronRight, TrendingUp, Shield, FileText } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";

export function PrivacyPage() {
  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-[48px] text-white mb-3" style={{ fontWeight: '700' }}>
              Privacy policy
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl leading-[1.6]">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Main Content - Full Width */}
          <div className="max-w-4xl mx-auto">
            {/* Main Content - 8 columns */}
            <div className="col-span-8">
              {/* Last Updated */}
              <div className="bg-gray-50 border border-gray-200 px-5 py-3 mb-8">
                <p className="text-[13px] text-[var(--slate-medium)]">
                  <strong>Last updated:</strong> 3 March 2026
                </p>
              </div>

              {/* Introduction */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Electrical Review Publishing Ltd ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7]">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              {/* 1. Information We Collect */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  1. Information we collect
                </h2>
                
                <h3 className="text-[20px] text-[var(--navy-deep)] mb-3 mt-5" style={{ fontWeight: '600' }}>
                  Personal data you provide to us
                </h3>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Subscribe to our newsletter
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Register for events or download resources
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Contact us through our contact forms
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Request advertising information or media packs
                  </li>
                </ul>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  This information may include your name, email address, company name, job title, and any other information you choose to provide.
                </p>

                <h3 className="text-[20px] text-[var(--navy-deep)] mb-3 mt-5" style={{ fontWeight: '600' }}>
                  Automatically collected information
                </h3>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Browser type and version
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    IP address
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Pages viewed and time spent on pages
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Referring website addresses
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Operating system and device information
                  </li>
                </ul>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  2. How we use your information
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We use the information we collect or receive to:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Deliver and improve our content and services
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Send you newsletters and communications you have subscribed to
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Respond to your enquiries and provide customer support
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Process event registrations and download requests
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Analyse website usage and improve user experience
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Comply with legal obligations
                  </li>
                </ul>
              </section>

              {/* 3. Legal Basis for Processing */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  3. Legal basis for processing (GDPR)
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Under the General Data Protection Regulation (GDPR), we rely on the following legal bases to process your personal information:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Consent:</strong> When you have given us explicit consent to process your information for a specific purpose (e.g., newsletter subscription)
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Legitimate interests:</strong> When we have a legitimate business interest (e.g., website analytics, improving services)
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Legal obligation:</strong> When we need to comply with legal requirements
                  </li>
                </ul>
              </section>

              {/* 4. Cookies and Tracking */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  4. Cookies and tracking technologies
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until deleted) for the following purposes:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Essential cookies:</strong> Required for the website to function properly
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Analytics cookies:</strong> Help us understand how visitors use our website
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Preference cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              {/* 5. Third-Party Services */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  5. Third-party services and disclosure
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We may share your information with third-party service providers who perform services on our behalf, including:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Email service providers (for newsletter distribution)
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Analytics providers (e.g., Google Analytics)
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Web hosting and infrastructure providers
                  </li>
                </ul>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              {/* 6. Data Retention */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  6. Data retention
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  When we no longer have a legitimate business need to process your personal information, we will either delete or anonymise it.
                </p>
              </section>

              {/* 7. Your Data Rights */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  7. Your data protection rights
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Under the GDPR, you have the following rights:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right of access:</strong> You can request copies of your personal data
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right to rectification:</strong> You can request correction of inaccurate or incomplete data
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right to erasure:</strong> You can request deletion of your personal data in certain circumstances
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right to restrict processing:</strong> You can request that we restrict processing of your data
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right to data portability:</strong> You can request transfer of your data to another organisation
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right to object:</strong> You can object to processing of your data in certain circumstances
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    <strong>Right to withdraw consent:</strong> You can withdraw consent at any time where we rely on consent
                  </li>
                </ul>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  To exercise any of these rights, please contact us at privacy@electricalreview.co.uk
                </p>
              </section>

              {/* 8. Security */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  8. Security of your information
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  Any information transmitted online is done at your own risk. We cannot guarantee the absolute security of any information you transmit to us.
                </p>
              </section>

              {/* 9. Children's Privacy */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  9. Children's privacy
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
                </p>
              </section>

              {/* 10. Changes to Privacy Policy */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  10. Changes to this privacy policy
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Contact us about privacy
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:
                </p>
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield size={18} className="text-[var(--electric-blue)]" />
                    <span className="text-[16px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                      Data Protection Officer
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-[var(--electric-blue)]" />
                      <a href="mailto:privacy@electricalreview.co.uk" className="text-[15px] text-[var(--electric-blue)] hover:underline">
                        privacy@electricalreview.co.uk
                      </a>
                    </div>
                    <p className="text-[14px] text-[var(--slate-dark)] mt-3">
                      Electrical Review Publishing Ltd<br />
                      123 Infrastructure Way<br />
                      London EC1A 1BB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}