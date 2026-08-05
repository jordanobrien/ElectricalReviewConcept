import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { EditorialSidebar } from "../components/EditorialSidebar";
import { useParams, Link } from "react-router";
import { getDeepDiveArticleById, deepDiveArticles } from "../data/deepDiveArticles";
import { articles } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { Mail, Share2, Linkedin, Twitter, TrendingUp, Calendar, MapPin, ChevronRight } from "lucide-react";
import { getPrimaryTopicId, getPrimaryTopicTitle, getTopicColor } from "../utils/topicColors";

export function DeepDiveArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getDeepDiveArticleById(id) : undefined;

  // Get trending news articles
  const trendingArticles = articles.slice(0, 4);

  // Get recommended analysis articles (exclude current article)
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
            <Link to="/analysis" className="hover:text-[var(--electric-blue)]">Analysis</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{getPrimaryTopicTitle(article.topics, article.category)}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8 pt-12 pb-8">
          <div className="w-full">
            {/* Category */}
            <div className="flex items-center gap-3 mb-6">
              <Link to={`/topics/${getPrimaryTopicId(article.topics, article.category)}`} className="inline-block px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: getTopicColor(getPrimaryTopicId(article.topics, article.category)).cssVar }}>
                {getPrimaryTopicTitle(article.topics, article.category)}
              </Link>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-[42px] leading-[1.04] text-[var(--navy-deep)] md:text-[60px] lg:text-[68px]" style={{ fontWeight: '750' }}>
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
      <div className="mx-auto max-w-[1440px] px-4 pb-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            {article.sections.map((section, sectionIndex) => (
              <section key={sectionIndex} className="mb-16">
                {/* Section Heading */}
                <h2 className="mb-6 border-b-2 border-[#5a6eb4] pb-3 text-[28px] leading-[1.2] text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>
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
              <h2 className="mb-6 text-[27px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>
                Recommended Reading
              </h2>
              <div className="space-y-5">
                {recommendedDeepDives.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/analysis/${rec.id}`}
                    className="flex gap-5 bg-white border border-gray-200 h-[140px] overflow-hidden hover:border-[var(--electric-blue)] transition-colors group"
                  >
                    <img
                      src={rec.heroImageUrl}
                      alt={rec.headline}
                      className="w-[180px] h-full object-cover flex-shrink-0"
                    />
                    <div className="py-4 pr-4 flex-1 flex flex-col">
                      <span className="mb-2 inline-block w-fit px-2 py-1 text-[10px] uppercase tracking-wide text-white" style={{ backgroundColor: getTopicColor(getPrimaryTopicId(rec.topics, rec.category)).cssVar }}>
                        {getPrimaryTopicTitle(rec.topics, rec.category)}
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
          <div className="lg:col-span-4">
            <EditorialSidebar />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 pb-12 md:px-8"><Link to="/analysis" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">← Back to Analysis</Link></div>

      <Footer />
    </div>
  );
}
