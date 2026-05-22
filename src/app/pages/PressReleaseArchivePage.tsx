import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { pressReleases } from "../data/pressReleases";
import { articles } from "../data/articles";
import { events } from "../data/events";
import { downloads } from "../data/downloads";
import { Calendar, Mail, MapPin, ChevronRight, FileText, Download, TrendingUp, ChevronLeft, Megaphone, Plus } from "lucide-react";
import { useState } from "react";

export function PressReleaseArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get sidebar data
  const upcomingEvents = events.slice(0, 3);
  const latestDownloads = downloads.slice(0, 3);
  const trendingArticles = articles.slice(0, 4);

  // Calculate pagination
  const totalPages = Math.ceil(pressReleases.length / itemsPerPage);
  const paginatedReleases = pressReleases.slice(
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
            <span className="text-[var(--navy-deep)]">Press Releases</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Megaphone size={64} className="text-white drop-shadow-lg" />
            </div>
            <div>
              <h1 className="text-[32px] text-white mb-2" style={{ fontWeight: '600' }}>
                Press Releases
              </h1>
              <p className="text-[16px] text-white/90">
                Latest announcements from companies and organizations in the electrification sector
              </p>
            </div>
          </div>
          
          {/* Post Press Release CTA */}
          <div>
            <Link
              to="/submit-press-release"
              className="flex items-center gap-2 bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-6 py-3 transition-colors shadow-lg hover:shadow-xl"
              style={{ fontWeight: '600' }}
            >
              <Plus size={20} />
              Post a Press Release
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content Column */}
            <div className="col-span-8">
              {/* Post Press Release Info Box */}
              <div className="bg-blue-50 border-l-4 border-[var(--electric-blue)] p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[var(--electric-blue)] rounded-full flex items-center justify-center">
                      <Megaphone size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                      Share Your Company News
                    </h3>
                    <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6] mb-4">
                      Reach thousands of electrification infrastructure professionals with your press releases. Post announcements about new products, partnerships, projects, and company milestones to our engaged audience.
                    </p>
                    <Link
                      to="/submit-press-release"
                      className="inline-flex items-center gap-2 bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-5 py-2.5 text-[14px] transition-colors"
                      style={{ fontWeight: '600' }}
                    >
                      <Plus size={16} />
                      Submit Your Press Release
                    </Link>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                <p className="text-[13px] text-[var(--slate-dark)] leading-[1.6]">
                  <span style={{ fontWeight: '600' }}>Disclaimer:</span> Press releases are provided by companies and organizations for publication. The content reflects the views and information supplied by the issuing organization and has not been independently verified by Electrical Review's editorial team. Press releases are clearly marked to distinguish them from independently produced editorial content.
                </p>
              </div>

              <section className="mb-12">
                <div className="mb-6">
                  <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    All Press Releases
                  </h2>
                </div>

                <div className="space-y-6">
                  {paginatedReleases.map((release) => (
                    <Link
                      key={release.id}
                      to={`/press-release/${release.id}`}
                      className="bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-300 overflow-hidden group hover:shadow-lg hover:border-gray-400 transition-all block h-[240px]"
                    >
                      <div className="grid grid-cols-12 gap-0 h-full">
                        {/* Company Logo Section */}
                        <div className="col-span-2 h-full bg-white border-r border-gray-200 flex items-center justify-center p-4">
                          {release.companyLogo ? (
                            <img 
                              src={release.companyLogo} 
                              alt={release.company}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center rounded">
                              <span className="text-white text-[16px] font-bold tracking-wider">
                                {release.company.substring(0, 3).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="col-span-10 p-5 flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-[var(--slate-dark)] text-white px-2.5 py-1 text-[10px] tracking-wide uppercase">
                              Press Release
                            </span>
                          </div>
                          <h3 className="text-[19px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                            {release.headline}
                          </h3>
                          <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
                            {release.summary}
                          </p>
                          <div className="flex items-center gap-4 text-[13px] text-[var(--slate-medium)] mt-auto">
                            <span>{release.date}</span>
                          </div>
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
              {/* Submit Press Release CTA Card */}
              <div className="bg-gradient-to-br from-[var(--navy-deep)] to-blue-900 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Megaphone size={20} className="text-[var(--electric-blue)]" />
                  <h3 className="text-[18px]" style={{ fontWeight: '600' }}>
                    Post Your News
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.6] text-blue-100 mb-4">
                  Share your company's latest announcements, product launches, and industry insights with our professional audience.
                </p>
                <Link
                  to="/submit-press-release"
                  className="block w-full bg-[var(--electric-blue)] hover:bg-blue-500 text-white text-center py-2.5 text-[14px] transition-colors rounded"
                  style={{ fontWeight: '600' }}
                >
                  Submit Press Release
                </Link>
                <p className="text-[11px] text-blue-200 mt-3">
                  Quick approval process. Distributed to industry professionals.
                </p>
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
                  to="#"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all events
                  <ChevronRight size={14} />
                </Link>
              </div>

              {/* Latest Downloads */}
              <div className="bg-white border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Download size={18} className="text-[var(--electric-blue)]" />
                  <h3 className="text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    Latest Downloads
                  </h3>
                </div>
                <ul className="space-y-4 mb-4">
                  {latestDownloads.map((download) => (
                    <li key={download.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex gap-3">
                        {/* File Icon */}
                        <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center flex-shrink-0 rounded">
                          <FileText size={18} className="text-[var(--electric-blue)]" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="text-[11px] text-[var(--slate-medium)] mb-1 uppercase tracking-wide">
                            {download.type} • {download.fileSize}
                          </div>
                          <Link
                            to={`/download/${download.id}`}
                            className="text-[13px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4]"
                          >
                            {download.title}
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="#"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all downloads
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