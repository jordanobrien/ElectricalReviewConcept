import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useParams, Link } from "react-router";
import { getDeepDiveArticleById, deepDiveArticles } from "../data/deepDiveArticles";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { Mail, Share2, Linkedin, Twitter, TrendingUp, Calendar, MapPin, ChevronRight } from "lucide-react";

export function DeepDiveArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getDeepDiveArticleById(id) : undefined;

  // Get trending news articles
  const trendingArticles = articles.slice(0, 4);

  // Get recommended deep dive articles (exclude current article)
  const recommendedDeepDives = article 
    ? deepDiveArticles
        .filter(dd => dd.id !== id)
        .slice(0, 3)
    : [];

  const upcomingEvents = [
    {
      date: "15 March",
      type: "Conference",
      title: "UK Grid Infrastructure Summit 2026",
      location: "London"
    },
    {
      date: "22 March",
      type: "Webinar",
      title: "Future of Fleet Electrification",
      location: "Online"
    },
    {
      date: "5 April",
      type: "Workshop",
      title: "BESS Design & Installation Best Practices",
      location: "Birmingham"
    },
  ];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <h1 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Article not found
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
            <Link to="/deep-dives" className="hover:text-[var(--electric-blue)]">Deep Dives</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{article.category}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8 pt-12 pb-8">
          <div className="max-w-[900px]">
            {/* Category */}
            <div className="flex items-center gap-3 mb-6">
              <span className={`${article.categoryColor} text-white px-3 py-1.5 text-[11px] tracking-wide uppercase inline-block`}>
                {article.category}
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-[42px] leading-[1.15] mb-6 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
              {article.headline}
            </h1>
            
            {/* Summary */}
            <p className="text-[20px] leading-[1.5] text-[var(--slate-dark)] mb-8">
              {article.summary}
            </p>
            
            {/* Meta & Share */}
            <div className="flex items-center justify-between pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-[15px] text-[var(--slate-medium)]">
                  {article.lastUpdated ? `Last updated ${article.lastUpdated}` : article.publishDate}
                </span>
              </div>
              
              {/* Social Share Links */}
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[var(--slate-medium)] mr-2">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.headline)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 hover:bg-[#1DA1F2] text-[var(--slate-dark)] hover:text-white flex items-center justify-center rounded transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 hover:bg-[#0A66C2] text-[var(--slate-dark)] hover:text-white flex items-center justify-center rounded transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(article.headline)}&body=${encodeURIComponent(article.summary + '\n\n' + window.location.href)}`}
                  className="w-9 h-9 bg-gray-100 hover:bg-[var(--navy-deep)] text-[var(--slate-dark)] hover:text-white flex items-center justify-center rounded transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail size={16} />
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  className="w-9 h-9 bg-gray-100 hover:bg-[var(--electric-blue)] text-[var(--slate-dark)] hover:text-white flex items-center justify-center rounded transition-colors"
                  aria-label="Copy link"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 py-8">
          <img
            src={article.heroImageUrl}
            alt={article.headline}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Two-Column Layout: Content + Sidebar */}
      <div className="max-w-[1440px] mx-auto px-8 pb-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="col-span-8">
            {article.sections.map((section, sectionIndex) => (
              <section key={sectionIndex} className="mb-16">
                {/* Section Heading */}
                <h2 className="text-[28px] leading-[1.3] mb-6 text-[var(--navy-deep)] pb-3 border-b-2 border-[var(--electric-blue)]" style={{ fontWeight: '600' }}>
                  {section.heading}
                </h2>
                
                {/* Section Paragraphs */}
                <div className="space-y-6 mb-8">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Section Image */}
                {section.imageUrl && (
                  <figure className="my-10">
                    <img
                      src={section.imageUrl}
                      alt={section.heading}
                      className="w-full h-[450px] object-cover mb-3"
                    />
                    {section.imageCaption && (
                      <figcaption className="text-[14px] text-[var(--slate-medium)] italic text-center">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}

            {/* Recommended Reading Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-[24px] mb-6 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                Recommended Reading
              </h2>
              <div className="space-y-5">
                {recommendedDeepDives.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/deep-dive/${rec.id}`}
                    className="flex gap-5 bg-white border border-gray-200 h-[140px] overflow-hidden hover:border-[var(--electric-blue)] transition-colors group"
                  >
                    <img
                      src={rec.heroImageUrl}
                      alt={rec.headline}
                      className="w-[180px] h-full object-cover flex-shrink-0"
                    />
                    <div className="py-4 pr-4 flex-1 flex flex-col">
                      <span className={`${rec.categoryColor} text-white px-2 py-1 text-[10px] tracking-wide uppercase inline-block mb-2 w-fit`}>
                        {rec.category}
                      </span>
                      <h3 className="text-[16px] leading-[1.3] mb-2 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                        {rec.headline}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-[var(--slate-medium)] mb-3 line-clamp-2 flex-1">
                        {rec.summary}
                      </p>
                      <div className="flex items-center gap-4 text-[12px] text-[var(--slate-medium)] mt-auto">
                        <span>{rec.publishDate}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>

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

            {/* Latest Press Releases */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-[18px] mb-5 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                Press Releases
              </h3>
              <ul className="space-y-4 mb-4">
                {pressReleases.slice(0, 3).map((release) => (
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
          </aside>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}