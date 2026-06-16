import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, BarChart3, Eye, Download, CheckCircle } from "lucide-react";
export function AdvertisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">Advertise</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 h-full flex items-center">
          <div>
            <h1 className="text-[48px] text-white mb-3" style={{ fontWeight: '700' }}>
              Advertise with us
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl leading-[1.6]">
              Reach decision-makers responsible for electrification infrastructure delivery across the UK
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Main Content - Full Width */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <p className="text-[18px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                Electrical Review connects you with senior professionals who commission, procure and operate electrification infrastructure. Our audience is actively engaged in projects right now — and seeking trusted partners who understand delivery.
              </p>
              <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7]">
                Advertising with Electrical Review positions your brand alongside authoritative, practitioner-focused editorial — not generic industry news.
              </p>
            </section>

            {/* Our Audience */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Our audience
              </h2>



              <div className="bg-gray-50 p-6">
                <h3 className="text-[20px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Reader profiles
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Estates &amp; infrastructure directors
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Fleet &amp; depot operators
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Commercial developers
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Consulting engineers
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Electrical contractors
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Operations &amp; maintenance teams
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Advertising Opportunities */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Advertising opportunities
              </h2>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Display Advertising */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Eye size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Display advertising
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                    Premium positions across homepage, article pages, and topic hubs. MPU, leaderboard and billboard formats available.
                  </p>
                </div>

                {/* Press Release Hub */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <BarChart3 size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Press Release Hub
                  </h3>
                  <div className="flex items-center gap-2 text-[13px] text-amber-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
                    Coming soon
                  </div>
                </div>

                {/* Newsletter Sponsorship */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Mail size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Newsletter sponsorship
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                    Feature your message in our weekly newsletter, delivered to engaged subscribers every Tuesday morning.
                  </p>
                </div>
              </div>

              {/* Event Sponsorship */}
              <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow mt-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded flex-shrink-0">
                    <Calendar size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                      Event sponsorship
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      Align your brand with <strong>Powered On Live</strong> — our flagship industry event bringing together the professionals shaping electrification infrastructure delivery across the UK. Sponsorship packages include brand placement, delegate engagement, and speaking opportunities. Contact us to discuss availability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ad Specs */}
              <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <h3 className="text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    Standard display formats
                  </h3>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-[15px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: '600' }}>
                        MPU
                      </div>
                      <div className="text-[13px] text-[var(--slate-medium)]">
                        300 × 250px
                      </div>
                    </div>
                    <div>
                      <div className="text-[15px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: '600' }}>
                        Leaderboard
                      </div>
                      <div className="text-[13px] text-[var(--slate-medium)]">
                        728 × 90px
                      </div>
                    </div>
                    <div>
                      <div className="text-[15px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: '600' }}>
                        Billboard
                      </div>
                      <div className="text-[13px] text-[var(--slate-medium)]">
                        970 × 250px
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Advertise */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Why advertise with Electrical Review
              </h2>

              <div className="bg-[var(--navy-deep)] text-white p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    <div>
                      <strong>High-intent readership:</strong> Our audience is actively engaged in procurement decisions, not passive browsing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    <div>
                      <strong>Editorial alignment:</strong> Your brand appears alongside trusted, authoritative content focused on delivery.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    <div>
                      <strong>Defined focus:</strong> We cover grid to plug. Your message reaches exactly the right people.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    <div>
                      <strong>Transparent environment:</strong> We clearly distinguish editorial from advertising. No misleading native formats.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 2026 Media Pack */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Our media pack
              </h2>

              <div className="bg-gray-50 border border-gray-200 overflow-hidden">
                <div className="bg-[var(--navy-deep)] px-8 py-6 flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center rounded flex-shrink-0">
                    <Download size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[22px] text-white" style={{ fontWeight: '600' }}>
                        Refreshed 2026 Media Pack
                      </h3>
                      <span className="bg-[var(--electric-blue)] text-white text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wide" style={{ fontWeight: '700' }}>
                        Coming soon
                      </span>
                    </div>
                    <p className="text-[14px] text-white/80">
                      Full advertising rates, specifications and audience data
                    </p>
                  </div>
                </div>
                <div className="px-8 py-6">
                  <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                    Our refreshed 2026 Media Pack is in preparation and will include updated rates, format specifications, audience insights, and event partnership details. In the meantime, contact us directly to discuss what we can offer.
                  </p>
                  <p className="text-[14px] text-[var(--slate-medium)]">
                    We will notify registered contacts as soon as the pack is available.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-[18px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Have questions?
                </h3>
                <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Our commercial team is available to discuss bespoke packages and multi-channel campaigns.
                </p>
                <div className="flex items-center gap-2 text-[15px] text-[var(--slate-dark)]">
                  <Mail size={16} className="text-[var(--electric-blue)]" />
                  <a href="mailto:massimom@sjpbusinessmedia.com" className="text-[var(--electric-blue)] hover:underline">
                    massimom@sjpbusinessmedia.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}