import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useParams, Link } from "react-router";
import { getOpinionArticleById, opinionArticles } from "../data/opinionArticles";
import { Calendar, Clock, MessageSquare, Linkedin, Twitter, Mail, MapPin, ChevronRight, FileText, Download } from "lucide-react";
import { events } from "../data/events";
import { downloads } from "../data/downloads";
import { pressReleases } from "../data/pressReleases";
import { getTopicColorByCategory } from "../utils/topicColors";

export function OpinionArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getOpinionArticleById(id) : undefined;

  // Get recommended opinion articles
  const recommendedOpinions = article 
    ? opinionArticles
        .filter(a => a.id !== id)
        .slice(0, 3)
    : [];

  // Get sidebar data
  const upcomingEvents = events.slice(0, 3);
  const latestDownloads = downloads.slice(0, 3);
  const latestPressReleases = pressReleases.slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <h1 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Opinion article not found
          </h1>
          <Link to="/" className="text-[var(--electric-blue)] hover:underline mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
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
            <Link to="/opinion-articles" className="hover:text-[var(--electric-blue)]">Opinion</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{article.category}</span>
          </div>
        </div>
      </div>

      {/* Opinion Badge Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-3">
            <MessageSquare size={16} className="text-amber-700" />
            <span className="text-[13px] text-amber-900" style={{ fontWeight: '600' }}>
              OPINION — The views expressed in this article are those of the author and do not necessarily reflect the editorial position of Electrical Review.
            </span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 pt-12 pb-12">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column - Content */}
            <article className="col-span-8">
              {/* Category Badge */}
              <div className="mb-4">
                <Link 
                  to={`/topics/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block px-3 py-1 bg-[var(--electric-blue)]/10 text-[var(--electric-blue)] text-[11px] uppercase tracking-wider rounded hover:bg-[var(--electric-blue)]/20 transition-colors" 
                  style={{ fontWeight: '600' }}
                >
                  {article.category}
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-[42px] leading-[1.15] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                {article.title}
              </h1>

              {/* Summary */}
              <p className="text-[20px] leading-[1.5] text-[var(--slate-dark)] mb-8">
                {article.summary}
              </p>

              {/* Prominent Author Section */}
              <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
                <div className="flex items-start gap-4">
                  {/* Large Author Photo */}
                  <img
                    src={article.author.imageUrl}
                    alt={article.author.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-gray-300"
                  />
                  <div className="flex-1">
                    <div className="text-[18px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: '600' }}>
                      {article.author.name}
                    </div>
                    <div className="text-[15px] text-[var(--slate-dark)] mb-2">
                      {article.author.role}, {article.author.company}
                    </div>
                    <p className="text-[14px] leading-[1.6] text-[var(--slate-medium)]">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Meta Information with Share Buttons */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200 flex-wrap">
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  {article.publishedDate}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-[13px] text-[var(--slate-medium)]" style={{ fontWeight: '600' }}>Share:</span>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white border border-gray-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-[var(--slate-dark)] hover:text-white flex items-center justify-center transition-colors rounded"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white border border-gray-300 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] text-[var(--slate-dark)] hover:text-white flex items-center justify-center transition-colors rounded"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(article.summary + '\n\n' + window.location.href)}`}
                    className="w-8 h-8 bg-white border border-gray-300 hover:bg-[var(--navy-deep)] hover:border-[var(--navy-deep)] text-[var(--slate-dark)] hover:text-white flex items-center justify-center transition-colors rounded"
                    aria-label="Share via Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Main Image */}
              <figure className="mb-12">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-[500px] object-cover"
                />
              </figure>

              {/* Introduction */}
              <div className="space-y-6 mb-12">
                {article.content.introduction.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Content Sections */}
              {article.content.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-12">
                  <h2 className="text-[28px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                    {section.heading}
                  </h2>
                  <div className="space-y-6">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Conclusion */}
              <div className="space-y-6 mb-12 pt-8 border-t border-gray-200">
                {article.content.conclusion.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="p-6 bg-amber-50 border-l-4 border-amber-500 mb-12">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[13px] text-amber-900 mb-1" style={{ fontWeight: '600' }}>
                      Opinion Content Notice
                    </div>
                    <p className="text-[13px] leading-[1.6] text-amber-900">
                      The views and opinions expressed in this article are those of {article.author.name} and do not necessarily reflect the official policy or position of Electrical Review. This content represents individual perspective and industry commentary.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommended Reading Section */}
              <div className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-[24px] mb-6 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                  Recommended Reading
                </h2>
                <div className="space-y-5">
                  {recommendedOpinions.map((rec) => (
                    <Link
                      key={rec.id}
                      to={`/opinion/${rec.id}`}
                      className="flex gap-5 bg-white border border-gray-200 h-[140px] overflow-hidden hover:border-[var(--electric-blue)] transition-colors group"
                    >
                      <img
                        src={rec.imageUrl}
                        alt={rec.title}
                        className="w-[180px] h-full object-cover flex-shrink-0"
                      />
                      <div className="py-4 pr-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-white px-2 py-1 text-[10px] tracking-wide uppercase inline-block"
                            style={{ backgroundColor: getTopicColorByCategory(rec.category).cssVar }}
                          >
                            {rec.category}
                          </span>
                        </div>
                        <h3 className="text-[16px] leading-[1.3] mb-2 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                          {rec.title}
                        </h3>
                        <p className="text-[13px] leading-[1.5] text-[var(--slate-medium)] mb-3 line-clamp-2 flex-1">
                          By {rec.author.name}, {rec.author.company}
                        </p>
                        <div className="flex items-center gap-4 text-[12px] text-[var(--slate-medium)] mt-auto">
                          <span>{rec.publishedDate}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Column - Standard Sidebar */}
            <aside className="col-span-4 space-y-8">
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
                      <div className="flex gap-3 items-center">
                        {/* Company Logo */}
                        {release.companyLogo ? (
                          <div className="w-16 h-10 flex items-center justify-center flex-shrink-0 bg-white border border-gray-200 rounded p-1.5">
                            <img 
                              src={release.companyLogo} 
                              alt={`${release.company} logo`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 rounded">
                            <span className="text-white text-[9px] font-bold tracking-wider">
                              {release.company.substring(0, 3).toUpperCase()}
                            </span>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="text-[11px] text-[var(--slate-medium)] mb-1">{release.date}</div>
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
                <a
                  href="#"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  View all events
                  <ChevronRight size={14} />
                </a>
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
                        <div className="w-10 h-10 bg-[var(--slate-light)] border border-gray-200 flex items-center justify-center flex-shrink-0 rounded">
                          <FileText size={20} className="text-[var(--slate-dark)]" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="text-[11px] text-[var(--electric-blue)] mb-1 uppercase tracking-wide">
                            {download.category}
                          </div>
                          <Link
                            to={`/download/${download.id}`}
                            className="text-[13px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4] block mb-1"
                          >
                            {download.title}
                          </Link>
                          <div className="text-[11px] text-[var(--slate-medium)]">
                            {download.type} • {download.size}
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
                  View all downloads
                  <ChevronRight size={14} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}