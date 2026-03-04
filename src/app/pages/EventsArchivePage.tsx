import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { events } from "../data/events";
import { articles } from "../data/articles";
import { downloads } from "../data/downloads";
import { Calendar, Mail, MapPin, ChevronRight, FileText, Download, TrendingUp, ChevronLeft } from "lucide-react";
import { useState } from "react";

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
        </div>
      </div>

      <Footer />
    </div>
  );
}