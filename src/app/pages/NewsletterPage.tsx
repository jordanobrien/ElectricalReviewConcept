import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, MapPin, ChevronRight, TrendingUp, CheckCircle } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";
import { useState } from "react";

export function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [frequency, setFrequency] = useState("weekly");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  const handleInterestToggle = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Newsletter subscription:", { email, name, company, frequency, interests });
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setName("");
      setCompany("");
      setFrequency("weekly");
      setInterests([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">Newsletter</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-[48px] text-white mb-3" style={{ fontWeight: '700' }}>
              Newsletter signup
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl leading-[1.6]">
              Get expert insights on electrification infrastructure delivered to your inbox
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content - 8 columns */}
            <div className="col-span-8">
              {/* Introduction */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <p className="text-[18px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                  Stay ahead of the curve with Electrical Review's newsletter. We deliver carefully curated content on grid connections, EV charging infrastructure, energy storage, and commissioning — focused on what matters for delivery.
                </p>
                <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7]">
                  Our newsletter is read by estates directors, fleet operators, consulting engineers, and infrastructure professionals who are actively managing electrification projects.
                </p>
              </section>

              {/* What You'll Receive */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                  What you'll receive
                </h2>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-6">
                    <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                      <CheckCircle size={24} className="text-[var(--electric-blue)]" />
                    </div>
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Weekly highlights
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      Key news, regulatory updates, and industry developments affecting electrification delivery
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6">
                    <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                      <CheckCircle size={24} className="text-[var(--electric-blue)]" />
                    </div>
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Deep Dive alerts
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      Notification when we publish new long-form technical explainers and updates to existing guides
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6">
                    <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                      <CheckCircle size={24} className="text-[var(--electric-blue)]" />
                    </div>
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Expert commentary
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      Opinion pieces from practitioners, engineers, and delivery experts working in the field
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6">
                    <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                      <CheckCircle size={24} className="text-[var(--electric-blue)]" />
                    </div>
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Event notifications
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                      Early access to industry events, webinars, and technical briefings relevant to your work
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 mt-6">
                  <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                    <strong>Delivered every Tuesday at 7:00 AM GMT.</strong> Concise, actionable, and focused on delivery — not hype.
                  </p>
                </div>
              </section>

              {/* Subscription Form */}
              <section className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                  Subscribe now
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8">
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[14px] mb-2 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                            Full name *
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] rounded"
                          />
                        </div>

                        <div>
                          <label className="block text-[14px] mb-2 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                            Email address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] rounded"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] mb-2 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                          Company name (optional)
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] rounded"
                        />
                      </div>

                      <div>
                        <label className="block text-[14px] mb-3 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                          Content interests (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Grid & Connections", "EV Charging", "Energy Storage", "Commissioning", "Policy & Regulation", "Technical Guides"].map((interest) => (
                            <label key={interest} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={interests.includes(interest)}
                                onChange={() => handleInterestToggle(interest)}
                                className="w-4 h-4 text-[var(--electric-blue)] border-gray-300 rounded focus:ring-[var(--electric-blue)]"
                              />
                              <span className="text-[14px] text-[var(--slate-dark)]">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] mb-3 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                          Email frequency
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="frequency"
                              value="weekly"
                              checked={frequency === "weekly"}
                              onChange={(e) => setFrequency(e.target.value)}
                              className="w-4 h-4 text-[var(--electric-blue)] border-gray-300 focus:ring-[var(--electric-blue)]"
                            />
                            <span className="text-[14px] text-[var(--slate-dark)]">
                              <strong>Weekly digest</strong> — Every Tuesday (recommended)
                            </span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="frequency"
                              value="daily"
                              checked={frequency === "daily"}
                              onChange={(e) => setFrequency(e.target.value)}
                              className="w-4 h-4 text-[var(--electric-blue)] border-gray-300 focus:ring-[var(--electric-blue)]"
                            />
                            <span className="text-[14px] text-[var(--slate-dark)]">
                              <strong>Daily updates</strong> — Breaking news as it happens
                            </span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="bg-[var(--electric-blue)] hover:bg-blue-600 text-white px-8 py-3 text-[15px] transition-colors rounded flex items-center gap-2"
                        style={{ fontWeight: '600' }}
                      >
                        <Mail size={18} />
                        Subscribe to Newsletter
                      </button>

                      <p className="text-[12px] text-[var(--slate-medium)] mt-3">
                        By subscribing, you agree to receive emails from Electrical Review. You can unsubscribe at any time. Read our <Link to="/privacy" className="text-[var(--electric-blue)] hover:underline">privacy policy</Link>.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="bg-gradient-to-br from-[var(--electric-blue)] to-blue-600 p-12 text-white text-center rounded">
                    <div className="w-20 h-20 bg-white/20 flex items-center justify-center rounded-full mx-auto mb-4">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-[28px] mb-3" style={{ fontWeight: '600' }}>
                      You're subscribed!
                    </h3>
                    <p className="text-[16px] text-white/90 mb-2">
                      Thank you for subscribing to the Electrical Review newsletter.
                    </p>
                    <p className="text-[14px] text-white/80">
                      Check your inbox for a confirmation email. Your first newsletter will arrive next Tuesday at 7:00 AM.
                    </p>
                  </div>
                )}
              </section>

              {/* Sample Content */}
              <section>
                <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                  Sample newsletter
                </h2>

                <div className="bg-gray-50 border border-gray-200 p-8">
                  <div className="mb-6 pb-6 border-b border-gray-300">
                    <div className="text-[12px] text-[var(--slate-medium)] mb-2">ELECTRICAL REVIEW | TUESDAY 3 MARCH 2026</div>
                    <h3 className="text-[24px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                      This week in electrification
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                      Grid reform proposals, new depot charging guidance, and storage cost reductions
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] text-[var(--electric-blue)] uppercase tracking-wide mb-1" style={{ fontWeight: '600' }}>
                        LEAD STORY
                      </div>
                      <h4 className="text-[18px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                        Ofgem proposes connection queue reform
                      </h4>
                      <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-2">
                        New framework aims to prioritise "shovel-ready" projects with secured planning and finance. Consultation closes 15 April.
                      </p>
                      <a href="#" className="text-[13px] text-[var(--electric-blue)] hover:underline">
                        Read full analysis →
                      </a>
                    </div>

                    <div>
                      <div className="text-[10px] text-[var(--slate-medium)] uppercase tracking-wide mb-1" style={{ fontWeight: '600' }}>
                        DEEP DIVE UPDATE
                      </div>
                      <h4 className="text-[16px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                        Load management strategies: Updated with new case studies
                      </h4>
                      <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-2">
                        Three new depot implementations added, including successful dynamic charging approach.
                      </p>
                    </div>

                    <div>
                      <div className="text-[10px] text-[var(--slate-medium)] uppercase tracking-wide mb-1" style={{ fontWeight: '600' }}>
                        UPCOMING EVENT
                      </div>
                      <h4 className="text-[16px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                        Commissioning Clinic: Manchester | 18 March
                      </h4>
                      <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7]">
                        Practitioner-led session on testing protocols and handover documentation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-300 text-center">
                    <p className="text-[12px] text-[var(--slate-medium)]">
                      This is a preview. Actual newsletters include additional content and links.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - 4 columns */}
            <aside className="col-span-4 space-y-6">
              {/* Why Subscribe */}
              <div className="bg-gradient-to-br from-[var(--navy-deep)] to-blue-900 p-6 text-white">
                <h3 className="text-[18px] mb-4" style={{ fontWeight: '600' }}>
                  Why subscribe?
                </h3>
                <ul className="space-y-3 text-[14px] leading-[1.6]">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" />
                    <span>No fluff or promotional content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" />
                    <span>Focused on delivery, not policy theatre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" />
                    <span>Unsubscribe anytime with one click</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" />
                    <span>Your data is never shared or sold</span>
                  </li>
                </ul>
              </div>

              {/* MPU Ad Placeholder */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 h-[250px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[14px] text-[var(--slate-medium)] mb-1" style={{ fontWeight: '600' }}>
                    Advertisement
                  </div>
                  <div className="text-[12px] text-[var(--slate-light)]">
                    MPU 300×250
                  </div>
                </div>
              </div>

              {/* Trending Articles */}
              <div className="bg-white border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp size={18} className="text-[var(--electric-blue)]" />
                  <h3 className="text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    Trending Articles
                  </h3>
                </div>
                <ul className="space-y-4">
                  {trendingArticles.map((trending, index) => (
                    <li key={trending.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--electric-blue)] to-blue-600 flex items-center justify-center flex-shrink-0 rounded">
                          <span className="text-white text-[14px]" style={{ fontWeight: '700' }}>
                            {index + 1}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <span className={`${trending.categoryColor} text-white px-2 py-0.5 text-[9px] tracking-wide uppercase inline-block mb-2`}>
                            {trending.category}
                          </span>
                          <Link
                            to={`/article/${trending.id}`}
                            className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4] block"
                            style={{ fontWeight: '500' }}
                          >
                            {trending.headline}
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Press Releases */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-[18px] mb-5 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                  Press Releases
                </h3>
                <ul className="space-y-4 mb-4">
                  {latestPressReleases.map((release) => (
                    <li key={release.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 rounded">
                          <span className="text-white text-[9px] font-bold tracking-wider">
                            {release.company.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-[11px] text-[var(--slate-medium)] mb-1">{release.publishDate}</div>
                          <Link
                            to={`/press-release/${release.id}`}
                            className="text-[13px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4]"
                          >
                            {release.headline}
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/press-releases"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all press releases
                  <ChevronRight size={14} />
                </Link>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Calendar size={18} className="text-[var(--electric-blue)]" />
                  <h3 className="text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    Upcoming Events
                  </h3>
                </div>
                <ul className="space-y-4 mb-4">
                  {upcomingEvents.map((event) => (
                    <li key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex flex-col items-center justify-center flex-shrink-0 rounded">
                          <span className="text-[10px] text-[var(--electric-blue)] font-bold uppercase">
                            {event.date.split(' ')[1].substring(0, 3)}
                          </span>
                          <span className="text-[16px] text-[var(--electric-blue)] font-bold leading-none">
                            {event.date.split(' ')[0]}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-[11px] text-[var(--electric-blue)] mb-1 uppercase tracking-wide">
                            {event.type}
                          </div>
                          <Link
                            to={`/event/${event.id}`}
                            className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4] block mb-2"
                            style={{ fontWeight: '500' }}
                          >
                            {event.title}
                          </Link>
                          <div className="flex items-center gap-1 text-[12px] text-[var(--slate-medium)]">
                            <MapPin size={12} />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/events"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all events
                  <ChevronRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
