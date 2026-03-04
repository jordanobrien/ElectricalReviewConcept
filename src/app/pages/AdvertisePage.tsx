import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, MapPin, ChevronRight, TrendingUp, Target, Users, BarChart3, Eye, Download, CheckCircle } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";
import { useState } from "react";

export function AdvertisePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate download
    console.log("Media pack download request:", { email, name, company });
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setName("");
      setCompany("");
    }, 3000);
  };

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

              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Image */}
                <div className="h-[320px] overflow-hidden border border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTE5ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Business professionals"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded">
                        <Users size={20} className="text-[var(--electric-blue)]" />
                      </div>
                      <div className="text-[28px] text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>
                        45,000+
                      </div>
                    </div>
                    <p className="text-[14px] text-[var(--slate-dark)]">
                      Monthly unique visitors
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded">
                        <Eye size={20} className="text-[var(--electric-blue)]" />
                      </div>
                      <div className="text-[28px] text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>
                        4.2 mins
                      </div>
                    </div>
                    <p className="text-[14px] text-[var(--slate-dark)]">
                      Average time on site
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded">
                        <Target size={20} className="text-[var(--electric-blue)]" />
                      </div>
                      <div className="text-[28px] text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>
                        87%
                      </div>
                    </div>
                    <p className="text-[14px] text-[var(--slate-dark)]">
                      Senior decision-makers
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-[20px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Reader profiles
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Estates & infrastructure directors
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Fleet & depot operators
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
                      Operations & maintenance teams
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
                    Premium positions across homepage, article pages, and topic hubs. MPU, leaderboard and skyscraper formats available.
                  </p>
                </div>

                {/* Sponsored Content */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <BarChart3 size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Sponsored content
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                    Thought leadership articles positioned alongside editorial content, clearly labelled and editorially reviewed.
                  </p>
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
                        Skyscraper
                      </div>
                      <div className="text-[13px] text-[var(--slate-medium)]">
                        160 × 600px
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
                      <strong>Defined focus:</strong> We cover grid to plug — not generic renewable energy news. Your message reaches the right people.
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

            {/* Download Media Pack */}
            <section>
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Download our media pack
              </h2>

              <div className="bg-gradient-to-br from-[var(--electric-blue)] to-blue-600 p-8 text-white">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded">
                        <Download size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-[24px] mb-1" style={{ fontWeight: '600' }}>
                          2026 Media Pack
                        </h3>
                        <p className="text-[14px] text-white/90">
                          Full advertising rates, specifications and audience data
                        </p>
                      </div>
                    </div>

                    <p className="text-[15px] leading-[1.6] text-white/90 mb-6">
                      Get detailed information about our advertising opportunities, pricing, and technical specifications. Complete the form below to receive instant access.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[13px] mb-2 text-white/90" style={{ fontWeight: '600' }}>
                          Full name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] mb-2 text-white/90" style={{ fontWeight: '600' }}>
                          Email address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] mb-2 text-white/90" style={{ fontWeight: '600' }}>
                          Company name *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[var(--navy-deep)] hover:bg-[#0a1929] text-white py-3 text-[15px] transition-colors rounded flex items-center justify-center gap-2"
                        style={{ fontWeight: '600' }}
                      >
                        <Download size={18} />
                        Download Media Pack
                      </button>

                      <p className="text-[12px] text-white/80 mt-3">
                        By downloading, you agree to receive occasional updates about advertising opportunities. Unsubscribe anytime.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-white/20 flex items-center justify-center rounded-full mx-auto mb-4">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-[28px] mb-3" style={{ fontWeight: '600' }}>
                      Thank you!
                    </h3>
                    <p className="text-[16px] text-white/90 mb-4">
                      Your media pack is downloading now.
                    </p>
                    <p className="text-[14px] text-white/80">
                      We'll be in touch shortly to discuss how we can help you reach our audience.
                    </p>
                  </div>
                )}
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
                  <a href="mailto:advertising@electricalreview.co.uk" className="text-[var(--electric-blue)] hover:underline">
                    advertising@electricalreview.co.uk
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