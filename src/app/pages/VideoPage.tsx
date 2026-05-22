import { Link, useParams } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Calendar, Mail, MapPin, ChevronRight, TrendingUp, Play, Clock, Eye, Share2 } from "lucide-react";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { events } from "../data/events";
import { videos } from "../data/videos";
import { getTopicColorByCategory } from "../utils/topicColors";

export function VideoPage() {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-20 text-center">
          <h1 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
            Video not found
          </h1>
          <Link to="/videos" className="text-[var(--electric-blue)] hover:underline">
            View all videos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get sidebar data
  const trendingArticles = articles.slice(0, 4);
  const latestPressReleases = pressReleases.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  // Get related videos (same category, excluding current video)
  const relatedVideos = videos
    .filter(v => v.id !== video.id && v.category === video.category)
    .slice(0, 3);

  // If not enough related videos in same category, fill with other videos
  if (relatedVideos.length < 3) {
    const additionalVideos = videos
      .filter(v => v.id !== video.id && !relatedVideos.includes(v))
      .slice(0, 3 - relatedVideos.length);
    relatedVideos.push(...additionalVideos);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <Link to="/videos" className="hover:text-[var(--electric-blue)]">Videos</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{video.category}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content - 8 columns */}
            <div className="col-span-8">
              {/* Video Player */}
              <div className="mb-6">
                <div className="relative aspect-video bg-gray-900 overflow-hidden border border-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Video Player Placeholder Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-20 h-20 bg-[var(--electric-blue)] hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group">
                      <Play size={36} className="text-white ml-1" fill="white" />
                    </button>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1.5 flex items-center gap-2">
                    <Clock size={14} className="text-white" />
                    <span className="text-white text-[13px]" style={{ fontWeight: '600' }}>
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Metadata */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {video.isSponsored ? (
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 text-[11px] uppercase tracking-wide" style={{ fontWeight: '600' }}>
                      Sponsored Content
                    </span>
                  ) : (
                    <span className="bg-[var(--electric-blue)] text-white px-3 py-1 text-[11px] uppercase tracking-wide" style={{ fontWeight: '600' }}>
                      {video.category}
                    </span>
                  )}
                  <div className="flex items-center gap-4 text-[13px] text-[var(--slate-medium)]">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      {video.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {video.publishDate}
                    </div>
                  </div>
                </div>

                <h1 className="text-[36px] text-[var(--navy-deep)] mb-4 leading-[1.2]" style={{ fontWeight: '700' }}>
                  {video.title}
                </h1>

                <div className="flex items-center justify-between py-4 border-t border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    {video.isSponsored && video.sponsorLogo ? (
                      <>
                        <img 
                          src={video.sponsorLogo} 
                          alt={video.sponsor} 
                          className="h-10 w-auto object-contain"
                        />
                        <div className="text-[14px] text-[var(--slate-dark)]">
                          Presented by <span style={{ fontWeight: '600' }}>{video.sponsor}</span> • <span className="text-[var(--slate-medium)]">Sponsored content</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-[14px] text-[var(--slate-dark)]">
                        Published by <span style={{ fontWeight: '600' }}>Electrical Review</span>
                      </div>
                    )}
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-[14px] text-[var(--slate-dark)] hover:bg-gray-50 border border-gray-200 transition-colors">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>

              {/* Video Description */}
              <div className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[20px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  About this video
                </h2>
                <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7]">
                  {video.description}
                </p>
              </div>

              {/* Video Notes / Key Takeaways */}
              <div className="mb-10 pb-10 border-b border-gray-200">
                <h2 className="text-[20px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Key takeaways
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center flex-shrink-0 rounded mt-0.5">
                      <span className="text-[12px] text-[var(--electric-blue)]" style={{ fontWeight: '600' }}>1</span>
                    </div>
                    <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] flex-1">
                      Comprehensive overview of technical requirements and regulatory framework
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center flex-shrink-0 rounded mt-0.5">
                      <span className="text-[12px] text-[var(--electric-blue)]" style={{ fontWeight: '600' }}>2</span>
                    </div>
                    <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] flex-1">
                      Real-world case studies demonstrating practical implementation
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center flex-shrink-0 rounded mt-0.5">
                      <span className="text-[12px] text-[var(--electric-blue)]" style={{ fontWeight: '600' }}>3</span>
                    </div>
                    <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] flex-1">
                      Expert insights on common challenges and how to avoid them
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center flex-shrink-0 rounded mt-0.5">
                      <span className="text-[12px] text-[var(--electric-blue)]" style={{ fontWeight: '600' }}>4</span>
                    </div>
                    <p className="text-[15px] text-[var(--slate-dark)] leading-[1.7] flex-1">
                      Actionable recommendations for project delivery teams
                    </p>
                  </li>
                </ul>
              </div>

              {/* Related Videos */}
              {relatedVideos.length > 0 && (
                <div>
                  <h2 className="text-[28px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                    Related videos
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {relatedVideos.map((relatedVideo) => (
                      <Link
                        key={relatedVideo.id}
                        to={`/video/${relatedVideo.id}`}
                        className="group block bg-white border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-video overflow-hidden bg-gray-900">
                          <img
                            src={relatedVideo.thumbnail}
                            alt={relatedVideo.title}
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
                              {relatedVideo.duration}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          {/* Category */}
                          <div className="mb-2">
                            <span
                              className="text-white px-2 py-1 text-[10px] tracking-wide uppercase inline-block"
                              style={{ backgroundColor: getTopicColorByCategory(relatedVideo.category).cssVar }}
                            >
                              {relatedVideo.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-[14px] text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors leading-[1.4] mb-2" style={{ fontWeight: '600' }}>
                            {relatedVideo.title}
                          </h3>

                          {/* Date */}
                          <div className="text-[11px] text-[var(--slate-medium)]">
                            {relatedVideo.publishDate}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      to="/videos"
                      className="inline-flex items-center gap-2 text-[14px] text-[var(--electric-blue)] hover:underline"
                      style={{ fontWeight: '600' }}
                    >
                      View all videos
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - 4 columns */}
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