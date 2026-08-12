import { Twitter, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white">
      {/* Main Footer Content */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-[24px] mb-4" style={{ fontWeight: '700' }}>
                Data Centre Review
              </h3>
              <p className="text-[14px] text-white/70 leading-[1.6] mb-6">
                Essential news, analysis and technical insight for the people designing, building and operating data centres.
              </p>
              
              {/* Newsletter CTA */}
              <div className="bg-white/5 border border-white/10 p-4 mb-6">
                <p className="text-[13px] mb-3" style={{ fontWeight: '600' }}>
                  Stay Informed
                </p>
                <Link 
                  to="/newsletter"
                  className="inline-block bg-[var(--electric-blue)] hover:bg-[#0066cc] text-white text-[13px] px-4 py-2 transition-colors"
                  style={{ fontWeight: '600' }}
                >
                  Subscribe to Newsletter
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://uk.linkedin.com/company/datacentrereviewmag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[var(--electric-blue)] text-white flex items-center justify-center transition-colors"
                  aria-label="Data Centre Review on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@datacentrereview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[var(--electric-blue)] text-white flex items-center justify-center transition-colors"
                  aria-label="Data Centre Review on YouTube"
                >
                  <Youtube size={17} />
                </a>
                <a
                  href="https://twitter.com/dcrmagazine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[var(--electric-blue)] text-white flex items-center justify-center transition-colors"
                  aria-label="Data Centre Review on X"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h4 className="text-[14px] mb-4 text-white/50 uppercase tracking-wider" style={{ fontWeight: '600' }}>
                Content
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/analysis" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/downloads" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link to="/magazines" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Magazines
                  </Link>
                </li>
                <li>
                  <Link to="/opinion-articles" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Opinion Articles
                  </Link>
                </li>
                <li>
                  <Link to="/press-releases" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Press Releases
                  </Link>
                </li>
                <li>
                  <Link to="/videos" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Videos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-[14px] mb-4 text-white/50 uppercase tracking-wider" style={{ fontWeight: '600' }}>
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/advertise" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-[14px] mb-4 text-white/50 uppercase tracking-wider" style={{ fontWeight: '600' }}>
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-[var(--electric-blue)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white/50 mb-1">Editorial</p>
                    <a href="mailto:editorial@electricalreview.co.uk" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                      editorial@datacentrereview.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[var(--electric-blue)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white/50 mb-1">Office</p>
                    <p className="text-[14px] text-white/80 leading-[1.5]">
                      London, United Kingdom
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[var(--electric-blue)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white/50 mb-1">Sales</p>
                    <a href="tel:+442012345678" className="text-[14px] text-white/80 hover:text-[var(--electric-blue)] transition-colors">
                      +44 (0) 20 1234 5678
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a1628]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/60">
              © 2026 Data Centre Review. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
