import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { downloads } from "../data/downloads";
import { articles } from "../data/articles";
import { events } from "../data/events";
import { Calendar, Mail, MapPin, ChevronRight, FileText, Download, TrendingUp, ChevronLeft } from "lucide-react";
import { useState } from "react";

export function DownloadsArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Get sidebar data
  const upcomingEvents = events.slice(0, 3);
  const trendingArticles = articles.slice(0, 4);

  // Calculate pagination
  const totalPages = Math.ceil(downloads.length / itemsPerPage);
  const paginatedDownloads = downloads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">Downloads</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Download size={64} className="text-white drop-shadow-lg" />
            </div>
            <div>
              <h1 className="text-[32px] text-white mb-2" style={{ fontWeight: '600' }}>
                Downloads
              </h1>
              <p className="text-[16px] text-white/90">
                Technical guides, white papers, and resources for electrification infrastructure professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Featured Download */}
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                Featured Download
              </h2>
            </div>
            <Link to="/downloads" className="block group">
              <div className="bg-gradient-to-br from-[#e07849] to-[#d4653a] p-8 md:p-12 rounded-lg overflow-hidden relative hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-12 gap-8 items-center">
                  {/* Content - Left Side */}
                  <div className="col-span-8">
                    <div className="text-white/90 text-[13px] italic mb-3 tracking-wide" style={{ fontWeight: "600" }}>
                      TECHNICAL GUIDE
                    </div>
                    <h3 className="text-white text-[32px] leading-[1.2] mb-4" style={{ fontWeight: "700" }}>
                      Complete Guide to Grid Connections & DNO Applications
                    </h3>
                    <p className="text-white/90 text-[16px] leading-[1.6] mb-6">
                      Essential resource for navigating the grid connection process. Includes step-by-step guidance, application templates, and best practices for securing capacity allocations.
                    </p>
                    <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-6 text-white/90">
                      <div>
                        <div className="text-[12px] uppercase tracking-wide mb-1">Format</div>
                        <div className="text-[16px]" style={{ fontWeight: "600" }}>PDF Guide</div>
                      </div>
                      <div>
                        <div className="text-[12px] uppercase tracking-wide mb-1">Pages</div>
                        <div className="text-[16px]" style={{ fontWeight: "600" }}>45 Pages</div>
                      </div>
                      <div>
                        <div className="text-[12px] uppercase tracking-wide mb-1">Size</div>
                        <div className="text-[16px]" style={{ fontWeight: "600" }}>2.4 MB</div>
                      </div>
                    </div>
                  </div>

                  {/* Download Icon - Right Side */}
                  <div className="col-span-4 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <Download size={64} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-white/70 text-[12px] uppercase tracking-wide">
                    FREE DOWNLOAD FROM ELECTRICAL REVIEW
                  </p>
                  <div className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded transition-colors inline-flex items-center gap-2" style={{ fontWeight: "600" }}>
                    Download Now →
                  </div>
                </div>
              </div>
            </Link>
          </section>

          <div className="grid grid-cols-12 gap-8">
            {/* Main Content Column */}
            <div className="col-span-8">
              <section className="mb-12">
                <div className="mb-6">
                  <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    All Downloads
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {paginatedDownloads.map((download) => (
                    <Link
                      key={download.id}
                      to={`/download/${download.id}`}
                      className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg hover:border-[var(--electric-blue)] transition-all block"
                    >
                      {/* Download Image */}
                      <div className="h-[180px] overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50 relative">
                        <img
                          src={download.imageUrl}
                          alt={download.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-[var(--electric-blue)] rounded-full flex items-center justify-center shadow-lg">
                            <FileText size={32} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-[var(--slate-dark)] text-white px-2.5 py-1 text-[10px] tracking-wide uppercase">
                            {download.category}
                          </span>
                          <span className="text-[11px] text-[var(--slate-medium)]">
                            {download.size}
                          </span>
                        </div>
                        
                        <h3 className="text-[17px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                          {download.title}
                        </h3>
                        
                        <p className="text-[13px] leading-[1.6] text-[var(--slate-dark)] mb-4 line-clamp-2">
                          {download.summary}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] text-[var(--slate-medium)]">
                            {download.type}
                          </span>
                          {download.pages && (
                            <span className="text-[12px] text-[var(--slate-medium)]">
                              {download.pages} pages
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-[var(--electric-blue)] hover:text-[var(--electric-blue)] text-[var(--navy-deep)] text-[14px] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-[var(--navy-deep)]"
                      style={{ fontWeight: '500' }}
                    >
                      <ChevronLeft size={16} />
                      Previous
                    </button>
                    <span className="text-[14px] text-[var(--slate-medium)] px-4">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-[var(--electric-blue)] hover:text-[var(--electric-blue)] text-[var(--navy-deep)] text-[14px] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-[var(--navy-deep)]"
                      style={{ fontWeight: '500' }}
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="col-span-4 space-y-6">
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
                        {/* Rank Number */}
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--electric-blue)] to-blue-600 flex items-center justify-center flex-shrink-0 rounded">
                          <span className="text-white text-[14px]" style={{ fontWeight: '700' }}>
                            {index + 1}
                          </span>
                        </div>
                        
                        {/* Content */}
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

              {/* Newsletter Signup Module */}
              <div className="bg-gradient-to-br from-[var(--navy-deep)] to-blue-900 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={20} className="text-[var(--electric-blue)]" />
                  <h3 className="text-[18px]" style={{ fontWeight: '600' }}>
                    Stay Informed
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.6] text-blue-100 mb-4">
                  Get weekly insights on electrification infrastructure, grid connections, and EV charging delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 mb-3 text-[14px] text-[var(--navy-deep)] bg-white border border-blue-200 focus:outline-none focus:border-[var(--electric-blue)] rounded"
                />
                <button className="w-full bg-[var(--electric-blue)] hover:bg-blue-500 text-white py-2.5 text-[14px] transition-colors rounded" style={{ fontWeight: '600' }}>
                  Subscribe
                </button>
                <p className="text-[11px] text-blue-200 mt-3">
                  Unsubscribe anytime. View our privacy policy.
                </p>
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
                        {/* Date Icon */}
                        <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex flex-col items-center justify-center flex-shrink-0 rounded">
                          <span className="text-[10px] text-[var(--electric-blue)] font-bold uppercase">
                            {event.date.split(' ')[1].substring(0, 3)}
                          </span>
                          <span className="text-[16px] text-[var(--electric-blue)] font-bold leading-none">
                            {event.date.split(' ')[0]}
                          </span>
                        </div>
                        
                        {/* Content */}
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
