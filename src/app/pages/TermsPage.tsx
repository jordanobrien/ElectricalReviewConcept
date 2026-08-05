import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, MapPin, ChevronRight, TrendingUp, FileText } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";

export function TermsPage() {
  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-[1440px] px-4 py-3 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">Terms of Use</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-4 md:px-8">
          <div>
            <h1 className="mb-4 text-[48px] leading-[0.96] text-white md:text-[72px]" style={{ fontWeight: 750 }}>
              Terms of use
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl leading-[1.6]">
              Legal terms governing your use of the Electrical Review website
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
                  Welcome to Electrical Review. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use our website.
                </p>
                <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7]">
                  These terms apply to all visitors, users, and others who access or use the service.
                </p>
              </section>

              {/* 1. Acceptance of Terms */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  1. Acceptance of terms
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. Additionally, when using particular services or materials on this website, you shall be subject to any posted guidelines or rules applicable to such services or materials.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  Electrical Review Publishing Ltd reserves the right to update or modify these Terms of Use at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.
                </p>
              </section>

              {/* 2. Use of Website */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  2. Use of website
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  You may use our website for lawful purposes only. You agree not to use the website:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    In any way that breaches any applicable local, national or international law or regulation
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    To knowingly transmit any data, send or upload any material that contains viruses or any other harmful programs
                  </li>
                </ul>
              </section>

              {/* 3. Intellectual Property */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  3. Intellectual property rights
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Unless otherwise stated, Electrical Review Publishing Ltd and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    You must not republish material from this website without prior written consent
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    You must not sell, rent or sub-license material from the website
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    You must not reproduce, duplicate or copy material from this website for commercial purposes
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    You must not redistribute content from Electrical Review (unless content is specifically made for redistribution)
                  </li>
                </ul>
              </section>

              {/* 4. User Content */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  4. User content and submissions
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  If you submit any content to our website (including comments, feedback, or other materials), you grant Electrical Review Publishing Ltd a non-exclusive, royalty-free, perpetual, and worldwide licence to use, reproduce, modify, and publish such content.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  You warrant that any content you submit does not infringe the intellectual property rights of any third party and that you have all necessary rights to grant the above licence.
                </p>
              </section>

              {/* 5. Links to Other Websites */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  5. Links to other websites
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Our website may contain links to third-party websites or services that are not owned or controlled by Electrical Review Publishing Ltd.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Electrical Review Publishing Ltd shall not be responsible or liable for any damage or loss caused by your use of any such content, goods or services available through any such websites.
                </p>
              </section>

              {/* 6. Disclaimer */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  6. Disclaimer and limitation of liability
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Electrical Review Publishing Ltd:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Excludes all representations and warranties relating to this website and its contents
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Excludes all liability for damages arising out of or in connection with your use of this website
                  </li>
                  <li className="text-[15px] text-[var(--slate-dark)] leading-[1.7] list-disc">
                    Does not warrant that the website will be constantly available or available at all
                  </li>
                </ul>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  Nothing on this website constitutes, or is meant to constitute, advice of any kind. All content is provided for general informational purposes only.
                </p>
              </section>

              {/* 7. Advertising and Press Releases */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  7. Advertising and press releases
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Electrical Review clearly distinguishes between editorial content and commercial content. All advertisements and sponsored content are clearly labelled as such.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  Press releases published on this website are submitted by third-party companies and organisations. While we review submissions for appropriateness, the content of press releases reflects the views of the submitting organisation, not Electrical Review.
                </p>
              </section>

              {/* 8. Governing Law */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  8. Governing law and jurisdiction
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  These Terms of Use shall be governed by and construed in accordance with the laws of England and Wales.
                </p>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                  Any disputes relating to these Terms of Use shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Questions about these terms
                </h2>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail size={18} className="text-[var(--electric-blue)]" />
                    <a href="mailto:legal@electricalreview.co.uk" className="text-[15px] text-[var(--electric-blue)] hover:underline">
                      legal@electricalreview.co.uk
                    </a>
                  </div>
                  <p className="text-[14px] text-[var(--slate-dark)]">
                    Electrical Review Publishing Ltd<br />
                    123 Infrastructure Way<br />
                    London EC1A 1BB<br />
                    United Kingdom
                  </p>
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
