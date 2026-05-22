import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { events } from "../data/events";
import { articles } from "../data/articles";
import { downloads } from "../data/downloads";
import { videos } from "../data/videos";
import { Calendar, Mail, MapPin, ChevronRight, FileText, Download, TrendingUp, ChevronLeft, Play, Clock } from "lucide-react";
import { useState } from "react";
import { getTopicColorByCategory } from "../utils/topicColors";

export function EventsArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Get sidebar data
  const latestDownloads = downloads.slice(0, 3);
  const trendingArticles = articles.slice(0, 4);

  // Calculate pagination
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const paginatedEvents = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">Events</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f]">
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Calendar size={64} className="text-white drop-shadow-lg" />
            </div>
            <div>
              <h1 className="text-[32px] text-white mb-2" style={{ fontWeight: '600' }}>
                Events
              </h1>
              <p className="text-[16px] text-white/90">
                Industry conferences, workshops, and forums for electrification infrastructure professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Featured Event */}
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                Featured Event
              </h2>
            </div>
            <Link to="/events" className="block group">
              <div className="bg-gradient-to-br from-[#e07849] to-[#d4653a] p-8 md:p-12 rounded-lg overflow-hidden relative hover:shadow-xl transition-shadow">
                <div className="max-w-3xl">
                  <div className="text-white/90 text-[13px] italic mb-3 tracking-wide" style={{ fontWeight: "600" }}>
                    EV CHARGING INFRASTRUCTURE
                  </div>
                  <div className="text-white text-[18px] mb-4" style={{ fontWeight: "500" }}>
                    Wednesday 20 May 2026
                  </div>
                  <h3 className="text-white text-[36px] leading-[1.2] mb-6" style={{ fontWeight: "700" }}>
                    The Briefing:<br />
                    Reliable, affordable grid-ready charging
                  </h3>
                  <p className="text-white/90 text-[16px] leading-[1.6] mb-6">
                    Join industry leaders and technical experts for an in-depth discussion on delivering cost-effective, grid-integrated EV charging infrastructure at scale.
                  </p>
                  <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                    <p className="text-white/70 text-[12px] uppercase tracking-wide">
                      BROUGHT TO YOU BY ELECTRICAL REVIEW
                    </p>
                    <div className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded transition-colors inline-flex items-center gap-2" style={{ fontWeight: "600" }}>
                      Learn More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* Main Content - Full Width */}
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                Upcoming Events
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/event/${event.id}`}
                  className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg hover:border-[var(--electric-blue)] transition-all block"
                >
                  {/* Event Image */}
                  <div className="h-[180px] overflow-hidden bg-gray-100">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[var(--electric-blue)] text-white px-2.5 py-1 text-[10px] tracking-wide uppercase">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-[17px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                      {event.title}
                    </h3>
                    
                    <p className="text-[13px] leading-[1.6] text-[var(--slate-dark)] mb-4 line-clamp-2">
                      {event.summary}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
                        <MapPin size={14} />
                        <span>{event.location}</span>
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

          {/* Previous Events - Recordings */}
          <section className="mb-12 pt-12 border-t border-gray-200">
            <div className="mb-6">
              <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                Previous Events - Watch Recordings
              </h2>
              <p className="text-[14px] text-[var(--slate-medium)] mt-2">
                Catch up on past events with our video recordings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(0, 6).map((video) => (
                <Link
                  key={video.id}
                  to={`/video/${video.id}`}
                  className="group block bg-white border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-gray-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-[var(--electric-blue)] rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 flex items-center gap-1">
                      <Clock size={12} className="text-white" />
                      <span className="text-white text-[11px]" style={{ fontWeight: '600' }}>
                        {video.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Category */}
                    <div className="mb-2">
                      {video.isSponsored && video.sponsorLogo ? (
                        <div className="flex items-center gap-1.5">
                          <img
                            src={video.sponsorLogo}
                            alt={video.sponsor}
                            className="h-4 w-auto object-contain"
                          />
                          <span className="text-[10px] text-amber-600 uppercase tracking-wide" style={{ fontWeight: '600' }}>
                            Sponsored
                          </span>
                        </div>
                      ) : (
                        <span
                          className="text-white px-2 py-1 text-[10px] tracking-wide uppercase inline-block"
                          style={{ backgroundColor: getTopicColorByCategory(video.category).cssVar }}
                        >
                          {video.category}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-[14px] text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors leading-[1.4] mb-2" style={{ fontWeight: '600' }}>
                      {video.title}
                    </h3>

                    {/* Date */}
                    <div className="text-[11px] text-[var(--slate-medium)]">
                      {video.publishDate}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/videos"
                className="inline-flex items-center gap-2 text-[var(--electric-blue)] hover:underline text-[15px]"
                style={{ fontWeight: '600' }}
              >
                View All Event Recordings
                <ChevronRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}