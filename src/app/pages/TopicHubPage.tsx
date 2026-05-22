import { useParams, Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { topics } from "../data/topics";
import { articles } from "../data/articles";
import { deepDiveArticles } from "../data/deepDiveArticles";
import { opinionArticles } from "../data/opinionArticles";
import { videos } from "../data/videos";
import { downloads } from "../data/downloads";
import { ChevronRight, Clock, TrendingUp, Mail, Calendar, MapPin, ChevronLeft, Play, Download, FileText, BookOpen, MessageSquare, Newspaper } from "lucide-react";
import { useState } from "react";
import { getTopicColorByCategory, getTopicColor } from "../utils/topicColors";

export function TopicHubPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? topics[topicId] : null;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!topic) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <h1 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Topic not found
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter articles and deep dives that are tagged with this topic
  const topicArticles = articles.filter(article => 
    article.topics?.includes(topicId || '')
  );
  const topicDeepDives = deepDiveArticles.filter(dd => 
    dd.topics?.includes(topicId || '')
  );
  const topicOpinions = opinionArticles.filter(opinion =>
    opinion.topics?.includes(topicId || '')
  );

  // Combine all content types into a unified river, sorted by date
  const parseDate = (dateStr: string) => new Date(dateStr);
  
  const allContent = [
    ...topicArticles.map(article => ({
      type: 'article' as const,
      date: parseDate(article.publishDate),
      data: article
    })),
    ...topicDeepDives.map(deepDive => ({
      type: 'deepDive' as const,
      date: parseDate(deepDive.publishDate),
      data: deepDive
    })),
    ...topicOpinions.map(opinion => ({
      type: 'opinion' as const,
      date: parseDate(opinion.publishedDate),
      data: opinion
    }))
  ].sort((a, b) => b.date.getTime() - a.date.getTime());
  
  // Trending articles for sidebar
  const trendingArticles = articles.slice(0, 4);

  // Press releases for sidebar
  const pressReleases = [
    { 
      id: "abb-switchgear-launch",
      company: "ABB",
      text: "ABB launches two energy-efficient switchgear ranges", 
      time: "1d ago"
    },
    { 
      id: "siemens-bp-pulse-partnership",
      company: "Siemens",
      text: "Siemens expands EV infrastructure partnership with BP Pulse", 
      time: "2d ago"
    },
    { 
      id: "schneider-modular-ups",
      company: "Schneider Electric",
      text: "Schneider Electric introduces new modular UPS", 
      time: "3d ago"
    }
  ];

  // Upcoming events for sidebar
  const upcomingEvents = [
    {
      title: "Future Grid Summit 2026",
      date: "15 March 2026",
      location: "ExCeL London",
      type: "Conference",
    },
    {
      title: "EV Infrastructure Delivery Workshop",
      date: "22 March 2026",
      location: "Manchester Central",
      type: "Workshop",
    },
    {
      title: "Grid Connections & Capacity Forum",
      date: "5 April 2026",
      location: "Birmingham NEC",
      type: "Forum",
    },
  ];

  // Render topic icon
  const renderIcon = (size: number = 48) => {
    const svgProps = {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      fill: "none",
      className: "text-white drop-shadow-lg"
    };

    switch (topic.icon) {
      case 'grid':
        return (
          <svg {...svgProps}>
            <rect x="8" y="8" width="12" height="12" stroke="currentColor" strokeWidth="2.5"/>
            <rect x="28" y="8" width="12" height="12" stroke="currentColor" strokeWidth="2.5"/>
            <rect x="8" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2.5"/>
            <rect x="28" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M20 14h8M14 20v8M34 20v8M20 34h8" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="24" cy="14" r="2.5" fill="currentColor"/>
            <circle cx="14" cy="24" r="2.5" fill="currentColor"/>
            <circle cx="34" cy="24" r="2.5" fill="currentColor"/>
            <circle cx="24" cy="34" r="2.5" fill="currentColor"/>
          </svg>
        );
      case 'charging':
        return (
          <svg {...svgProps}>
            <rect x="14" y="8" width="20" height="32" rx="2" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M20 18l4 6h-2v6l-4-6h2v-6z" fill="currentColor"/>
            <rect x="18" y="12" width="12" height="3" fill="currentColor"/>
          </svg>
        );
      case 'storage':
        return (
          <svg {...svgProps}>
            <rect x="10" y="10" width="28" height="8" stroke="currentColor" strokeWidth="2.5"/>
            <rect x="10" y="20" width="28" height="8" stroke="currentColor" strokeWidth="2.5"/>
            <rect x="10" y="30" width="28" height="8" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="16" cy="14" r="2" fill="currentColor"/>
            <circle cx="16" cy="24" r="2" fill="currentColor"/>
            <circle cx="16" cy="34" r="2" fill="currentColor"/>
          </svg>
        );
      case 'reliability':
        return (
          <svg {...svgProps}>
            <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Get topic color
  const topicColor = getTopicColor(topicId || '');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Colored Hero Section with Breadcrumb - Tabs from header */}
      <div
        className="relative shadow-inner"
        style={{ backgroundColor: topicColor.cssVar }}
      >
        {/* Tab connector bar at top */}
        <div
          className="h-2 w-full"
          style={{
            backgroundColor: topicColor.cssVar,
            boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        ></div>

        <div className="max-w-[1440px] mx-auto px-8 pt-6 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-white/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/" className="hover:text-white transition-colors">Topics</Link>
            <span>/</span>
            <span className="text-white">{topic.title}</span>
          </div>

          {/* Topic Title & Description */}
          <div>
            <h1 className="text-[48px] text-white mb-4 leading-[1.1]" style={{ fontWeight: '600' }}>
              {topic.title}
            </h1>
            <p className="text-[18px] text-white/90 max-w-3xl">
              {topic.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content Column */}
            <div className="col-span-8">
              
              {/* Unified Content River - Mixed Deep Dives and News */}
              <section className="mb-12">
                <div className="mb-6">
                  <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                    Latest from {topic.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {allContent.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                    <div key={`${item.type}-${item.data.id}`}>
                      {item.type === 'deepDive' ? (
                        // Deep Dive Card
                        <Link
                          to={`/deep-dive/${item.data.id}`}
                          className="relative bg-white border border-gray-200 overflow-hidden group hover:shadow-xl hover:border-[var(--electric-blue)]/30 transition-all block h-[240px]"
                        >
                          <div className="grid grid-cols-3 gap-6 h-full">
                            <div className="col-span-1 h-full relative">
                              <img
                                src={item.data.heroImageUrl}
                                alt={item.data.headline}
                                className="w-full h-full object-cover"
                              />
                              {/* Icon badge on image */}
                              <div className="absolute bottom-3 left-3 bg-[var(--electric-blue)] text-white p-2 rounded shadow-lg">
                                <BookOpen size={18} strokeWidth={2.5} />
                              </div>
                            </div>
                            <div className="col-span-2 p-5 flex flex-col h-full">
                              <div className="mb-3">
                                <span className={`${item.data.categoryColor} text-white px-2.5 py-1 text-[10px] tracking-wide uppercase`}>
                                  {item.data.category}
                                </span>
                              </div>
                              <h3 className="text-[19px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                                {item.data.headline}
                              </h3>
                              <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
                                {item.data.summary}
                              </p>
                              <div className="flex items-center gap-4 text-[13px] text-[var(--slate-medium)] mt-auto">
                                <span>{item.data.publishDate}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : item.type === 'opinion' ? (
                        // Opinion Article Card
                        <Link
                          to={`/opinion/${item.data.id}`}
                          className="relative bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow block h-[240px]"
                        >
                          <div className="grid grid-cols-3 gap-6 h-full">
                            <div className="col-span-1 h-full relative">
                              <img
                                src={item.data.imageUrl}
                                alt={item.data.title}
                                className="w-full h-full object-cover"
                              />
                              {/* Icon badge on image */}
                              <div className="absolute bottom-3 left-3 bg-[var(--navy-deep)] text-white p-2 rounded shadow-lg">
                                <MessageSquare size={18} strokeWidth={2.5} />
                              </div>
                            </div>
                            <div className="col-span-2 p-5 flex flex-col h-full">
                              <div className="mb-3">
                                <span
                                  className="text-white px-2.5 py-1 text-[10px] tracking-wide uppercase"
                                  style={{ backgroundColor: getTopicColorByCategory(item.data.category).cssVar }}
                                >
                                  {item.data.category}
                                </span>
                              </div>
                              <h3 className="text-[19px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                                {item.data.title}
                              </h3>
                              <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
                                {item.data.summary}
                              </p>
                              <div className="flex items-center gap-4 text-[13px] text-[var(--slate-medium)] mt-auto">
                                <span>{item.data.author.name}</span>
                                <span>•</span>
                                <span>{item.data.publishedDate}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        // News Article Card
                        <Link
                          to={`/article/${item.data.id}`}
                          className="relative bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow block h-[240px]"
                        >
                          <div className="grid grid-cols-3 gap-6 h-full">
                            <div className="col-span-1 h-full relative">
                              <img
                                src={item.data.imageUrl}
                                alt={item.data.headline}
                                className="w-full h-full object-cover"
                              />
                              {/* Icon badge on image */}
                              <div className="absolute bottom-3 left-3 bg-[var(--slate-dark)] text-white p-2 rounded shadow-lg">
                                <Newspaper size={18} strokeWidth={2.5} />
                              </div>
                            </div>
                            <div className="col-span-2 p-5 flex flex-col h-full">
                              <div className="mb-3">
                                <span className={`${item.data.categoryColor} text-white px-2.5 py-1 text-[10px] tracking-wide uppercase`}>
                                  {item.data.category}
                                </span>
                              </div>
                              <h3 className="text-[19px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                                {item.data.headline}
                              </h3>
                              <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
                                {item.data.summary}
                              </p>
                              <div className="flex items-center gap-4 text-[13px] text-[var(--slate-medium)] mt-auto">
                                <span>{item.data.publishDate}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {Math.ceil(allContent.length / itemsPerPage) > 1 && (
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
                      Page {currentPage} of {Math.ceil(allContent.length / itemsPerPage)}
                    </span>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage * itemsPerPage >= allContent.length}
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

            {/* Sidebar - Exact Article Page Sidebar */}
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

              {/* Latest Press Releases */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-[18px] mb-5 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                  Press Releases
                </h3>
                <ul className="space-y-4 mb-4">
                  {pressReleases.map((release, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex gap-3 items-center">
                        {/* Company Logo */}
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 rounded">
                          <span className="text-white text-[9px] font-bold tracking-wider">
                            {release.company.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="text-[11px] text-[var(--slate-medium)] mb-1">{release.time}</div>
                          <Link
                            to={`/press-release/${release.id}`}
                            className="text-[13px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4]"
                          >
                            {release.text}
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all press releases
                  <ChevronRight size={14} />
                </a>
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
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
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
                          <a
                            href="#"
                            className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4] block mb-2"
                            style={{ fontWeight: '500' }}
                          >
                            {event.title}
                          </a>
                          <div className="flex items-center gap-3 text-[12px] text-[var(--slate-medium)]">
                            <span className="flex items-center gap-1">
                              <MapPin size={12} />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all events
                  <ChevronRight size={14} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Videos & Downloads Section - Full Width */}
      {(() => {
        const topicVideos = videos.filter(video => video.topics?.includes(topicId || ''));
        const topicDownloads = downloads.filter(download => download.topics?.includes(topicId || ''));
        
        if (topicVideos.length === 0 && topicDownloads.length === 0) return null;
        
        return (
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Videos Section */}
                {topicVideos.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Play size={24} className="text-[var(--electric-blue)]" />
                      <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                        Related Videos
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {topicVideos.slice(0, 3).map((video) => (
                        <Link
                          key={video.id}
                          to={`/video/${video.id}`}
                          className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all flex h-[140px]"
                        >
                          <div className="w-[240px] flex-shrink-0 relative">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                              <div className="w-12 h-12 rounded-full bg-[var(--electric-blue)] flex items-center justify-center">
                                <Play size={20} className="text-white ml-0.5" fill="currentColor" />
                              </div>
                            </div>
                            {video.isSponsored && (
                              <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-0.5 text-[9px] uppercase tracking-wider" style={{ fontWeight: '700' }}>
                                SPONSORED
                              </div>
                            )}
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-0.5 text-[11px]">
                              {video.duration}
                            </div>
                          </div>
                          <div className="flex-1 p-4 flex flex-col justify-between">
                            <h3 className="text-[15px] leading-[1.3] text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors line-clamp-3" style={{ fontWeight: '600' }}>
                              {video.title}
                            </h3>
                            <div className="flex items-center gap-3 text-[12px] text-[var(--slate-medium)]">
                              <span>{video.publishDate}</span>
                              <span>•</span>
                              <span>{video.views} views</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {topicVideos.length > 3 && (
                      <div className="mt-6">
                        <Link
                          to="/videos"
                          className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                          style={{ fontWeight: '500' }}
                        >
                          View all videos
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* Downloads Section */}
                {topicDownloads.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Download size={24} className="text-[var(--electric-blue)]" />
                      <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                        Related Downloads
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {topicDownloads.slice(0, 3).map((download) => (
                        <Link
                          key={download.id}
                          to={`/download/${download.id}`}
                          className="bg-white border border-gray-200 p-5 group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all block"
                        >
                          <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center flex-shrink-0 rounded">
                              <FileText size={24} className="text-[var(--electric-blue)]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[11px] text-[var(--slate-medium)] uppercase tracking-wide" style={{ fontWeight: '600' }}>
                                  {download.type}
                                </span>
                                <span className="text-[11px] text-[var(--slate-light)]">{download.size}</span>
                              </div>
                              <h3 className="text-[15px] leading-[1.3] mb-2 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                                {download.title}
                              </h3>
                              <p className="text-[13px] leading-[1.5] text-[var(--slate-dark)] line-clamp-2">
                                {download.summary}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {topicDownloads.length > 3 && (
                      <div className="mt-6">
                        <Link
                          to="/downloads"
                          className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                          style={{ fontWeight: '500' }}
                        >
                          View all downloads
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })()}

      <Footer />
    </div>
  );
}