import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, MapPin, ChevronRight, TrendingUp, Phone, MessageSquare, Send } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";
import { useState } from "react";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Contact form submission:", { name, email, subject, message });
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
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
            <span className="text-[var(--navy-deep)]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center">
          <div>
            <h1 className="text-[48px] text-white mb-3" style={{ fontWeight: '700' }}>
              Contact us
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl leading-[1.6]">
              Get in touch with our editorial and commercial teams
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
                Whether you have a story to share, feedback on our coverage, or questions about advertising opportunities, we'd like to hear from you. Select the most appropriate contact method below or use our general enquiry form.
              </p>
            </section>

            {/* Contact Methods */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                How to reach us
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {/* Editorial Enquiries */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <MessageSquare size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Editorial enquiries
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                    Story suggestions, technical corrections, or commentary requests
                  </p>
                  <a 
                    href="mailto:editorial@electricalreview.co.uk" 
                    className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-2"
                    style={{ fontWeight: '600' }}
                  >
                    <Mail size={16} />
                    editorial@electricalreview.co.uk
                  </a>
                </div>

                {/* Advertising */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Mail size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Advertising & sponsorship
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                    Advertising packages, media pack requests, and partnership opportunities
                  </p>
                  <a 
                    href="mailto:advertising@electricalreview.co.uk" 
                    className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-2"
                    style={{ fontWeight: '600' }}
                  >
                    <Mail size={16} />
                    advertising@electricalreview.co.uk
                  </a>
                </div>

                {/* Press Releases */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Send size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    Press releases
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                    Submit company announcements, product launches, and industry updates
                  </p>
                  <a 
                    href="mailto:pressreleases@electricalreview.co.uk" 
                    className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-2"
                    style={{ fontWeight: '600' }}
                  >
                    <Mail size={16} />
                    pressreleases@electricalreview.co.uk
                  </a>
                </div>

                {/* General Enquiries */}
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                    <Phone size={24} className="text-[var(--electric-blue)]" />
                  </div>
                  <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                    General enquiries
                  </h3>
                  <p className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-4">
                    All other questions, feedback, and general correspondence
                  </p>
                  <a 
                    href="mailto:info@electricalreview.co.uk" 
                    className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-2"
                    style={{ fontWeight: '600' }}
                  >
                    <Mail size={16} />
                    info@electricalreview.co.uk
                  </a>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="mb-10 pb-10 border-b border-gray-200">
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Send us a message
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
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="What is your message about?"
                        className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-[14px] mb-2 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={8}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message..."
                        className="w-full px-4 py-2.5 text-[14px] text-[var(--navy-deep)] bg-white border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] rounded resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[var(--electric-blue)] hover:bg-blue-600 text-white px-8 py-3 text-[15px] transition-colors rounded flex items-center gap-2"
                      style={{ fontWeight: '600' }}
                    >
                      <Send size={18} />
                      Send Message
                    </button>

                    <p className="text-[12px] text-[var(--slate-medium)] mt-3">
                      We aim to respond to all enquiries within 2 working days.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="bg-gradient-to-br from-[var(--electric-blue)] to-blue-600 p-12 text-white text-center rounded">
                  <div className="w-20 h-20 bg-white/20 flex items-center justify-center rounded-full mx-auto mb-4">
                    <Send size={40} className="text-white" />
                  </div>
                  <h3 className="text-[28px] mb-3" style={{ fontWeight: '600' }}>
                    Message sent successfully
                  </h3>
                  <p className="text-[16px] text-white/90">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              )}
            </section>

            {/* Office Information */}
            <section>
              <h2 className="text-[32px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                Visit us
              </h2>

              <div className="bg-gray-50 border border-gray-200 p-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                      Electrical Review
                    </h3>
                    <div className="space-y-3 text-[15px] text-[var(--slate-dark)] leading-[1.7]">
                      <p>
                        Electrical Review Publishing Ltd<br />
                        123 Infrastructure Way<br />
                        London EC1A 1BB<br />
                        United Kingdom
                      </p>
                      <p>
                        <strong>Office hours:</strong><br />
                        Monday – Friday: 9:00 AM – 5:30 PM<br />
                        Saturday – Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="h-[280px] overflow-hidden border border-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MjQ3NTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Office workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
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