import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { FileText, Newspaper, Users, CheckCircle, Calendar, Mail, MapPin, ChevronRight, TrendingUp } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";

export function AboutPage() {
  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">About</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 h-full flex items-center">
          <div>
            <h1 className="text-[48px] text-white mb-3" style={{ fontWeight: '700' }}>
              Electrification. Delivered.
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl leading-[1.6]">
              Electrical Review covers electrification as a delivery challenge — from securing grid capacity to commissioning and operating infrastructure that works in the real world.
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
              <p className="text-[18px] text-[var(--slate-dark)] leading-[1.7]">
                We are a UK-based B2B publication focused on the practical realities of powering sites, fleets and estates. Our editorial mission is simple: to explain what happens between the grid connection and the plug — and why that journey matters.
              </p>
            </section>

            {/* What We Cover - With Images */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                What we cover
              </h2>
              <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7] mb-8">
                Electrification is rarely a technology problem in isolation. It is a sequence of decisions, trade-offs, and operational risks. Electrical Review focuses on four connected areas:
              </p>

              {/* Four topics — equal weight, alphabetical order */}
              <div className="grid grid-cols-2 gap-6">
                {/* Commissioning & Reliability — bright blue */}
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[#1E90FF]" />
                  <div className="p-6">
                    <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Commissioning &amp; reliability
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-3">
                      Where success is proven — or quietly undermined.
                    </p>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      We focus on handover, testing, documentation, evidence, diagnostics and operational ownership. Installation is not the finish line — reliability is.
                    </p>
                  </div>
                </div>

                {/* EV Charging Infrastructure — green */}
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[#16A34A]" />
                  <div className="p-6">
                    <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      EV charging infrastructure
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-3">
                      Where electrification becomes visible — and fragile.
                    </p>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      From depot design and load management to commissioning and uptime, we examine what makes charging infrastructure dependable at scale.
                    </p>
                  </div>
                </div>

                {/* Grid & Connections — deep navy */}
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[var(--navy-deep)]" />
                  <div className="p-6">
                    <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Grid &amp; connections
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-3">
                      How capacity is secured, what constraints really mean for projects, and how early assumptions shape long-term outcomes.
                    </p>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      We cover connection processes, power quality, phasing strategies, flexibility in practice, and the implications of network reform — not as policy theatre, but as delivery reality.
                    </p>
                  </div>
                </div>

                {/* Storage & Resilience — teal */}
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-[#0D9488]" />
                  <div className="p-6">
                    <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Storage &amp; resilience
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-3">
                      The bridge between grid limits and operational reliability.
                    </p>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      We explore behind-the-meter storage, resilience architectures, integration challenges, and performance expectations — separating technical potential from project reality.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Report */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                How we report
              </h2>
              <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7] mb-6">
                Electrical Review is a publisher-led newsroom. Our content falls into three core formats:
              </p>

              <div className="grid grid-cols-3 gap-6">
                {/* News */}
                <div className="bg-white border border-gray-200 p-6 hover:border-[var(--electric-blue)] transition-colors">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Newspaper size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    News
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-3">
                    Every news article is structured in two layers:
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="text-[13px] text-[var(--slate-dark)] leading-[1.6]">
                      <strong>In Brief</strong> — the essential facts.
                    </li>
                    <li className="text-[13px] text-[var(--slate-dark)] leading-[1.6]">
                      <strong>In Review</strong> — context and implications.
                    </li>
                  </ul>
                </div>

                {/* Deep Dives */}
                <div className="bg-white border border-gray-200 p-6 hover:border-[var(--electric-blue)] transition-colors">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <FileText size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Deep Dives
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                    Long-form, regularly updated explainers that examine the mechanics of electrification projects. Designed to be referenced, revisited, and cited.
                  </p>
                </div>

                {/* Opinion & Clinics */}
                <div className="bg-white border border-gray-200 p-6 hover:border-[var(--electric-blue)] transition-colors">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Users size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Opinion &amp; Clinics
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                    Expert perspectives and practitioner-led case discussions that surface real-world lessons, not marketing narratives.
                  </p>
                </div>
              </div>
            </section>

            {/* Who We Serve & Image */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h2 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                    Who we serve
                  </h2>
                  <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7] mb-6">
                    Electrical Review is written for professionals responsible for making electrification work in practice:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Estates and infrastructure leaders
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Fleet and depot operators
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Developers and commercial asset owners
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Consulting engineers and specifiers
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Electrical contractors and commissioning specialists
                    </li>
                    <li className="flex items-start gap-2 text-[15px] text-[var(--slate-dark)]">
                      <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full flex-shrink-0 mt-2"></div>
                      Operations and reliability teams
                    </li>
                  </ul>
                  <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                    Our coverage respects experience. We assume our readers understand the fundamentals — and need sharper insights, not simplified explanations.
                  </p>
                </div>
                <div className="h-[400px] overflow-hidden border border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MjQ4Mzg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Engineering collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Editorial Principles */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                Our editorial principles
              </h2>
              
              <div className="bg-[var(--navy-deep)] text-white p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    We focus on delivery, not hype.
                  </li>
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    We prioritise practical relevance over breadth.
                  </li>
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    We distinguish clearly between editorial content and submitted press releases.
                  </li>
                  <li className="flex items-start gap-3 text-[16px] leading-[1.7]">
                    <CheckCircle size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                    We provide context, not promotion.
                  </li>
                </ul>
                <p className="text-[16px] leading-[1.7] mt-6 text-white/90">
                  Electrification is advancing rapidly. The risks are real, the constraints are material, and the consequences of poor assumptions can last for years. Electrical Review exists to clarify those assumptions.
                </p>
              </div>
            </section>

            {/* Why Electrical Review - Closing */}
            <section>
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                Why Electrical Review
              </h2>
              <p className="text-[17px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                As electrification reshapes transport, estates and industry, the conversation is shifting from "what should we install?" to "how will this actually work?"
              </p>
              <p className="text-[17px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                Electrical Review sits at that intersection.
              </p>
              <p className="text-[24px] text-[var(--navy-deep)] leading-[1.5] mb-6" style={{ fontWeight: '600' }}>
                From grid to plug, we cover the joins.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}