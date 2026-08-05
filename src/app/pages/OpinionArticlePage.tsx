import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { EditorialSidebar } from "../components/EditorialSidebar";
import { useParams, Link } from "react-router";
import { getOpinionArticleById, opinionArticles } from "../data/opinionArticles";
import { Calendar, Clock, MessageSquare, Linkedin, Twitter, Mail, MapPin, ChevronRight, FileText, Download } from "lucide-react";
import { events } from "../data/events";
import { downloads } from "../data/downloads";
import { pressReleases } from "../data/pressReleases";
import { getPrimaryTopicId, getPrimaryTopicTitle, getTopicColor } from "../utils/topicColors";

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
            <span className="text-[var(--navy-deep)]">{getPrimaryTopicTitle(article.topics, article.category)}</span>
          </div>
        </div>
      </div>

      {/* Opinion Badge Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-3">
            <MessageSquare size={16} className="text-amber-700" />
            <span className="text-[13px] text-amber-900" style={{ fontWeight: '600' }}>
              OPINION — The views expressed in this article are those of the author and do not necessarily reflect the editorial position of Data Centre Review.
            </span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 pb-12 pt-12 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column - Content */}
            <article className="lg:col-span-8">
              {/* Category Badge */}
              <div className="mb-4">
                <Link
                  to={`/topics/${getPrimaryTopicId(article.topics, article.category)}`}
                  className="inline-block px-3 py-1 bg-[var(--electric-blue)]/10 text-[var(--electric-blue)] text-[11px] uppercase tracking-wider rounded hover:bg-[var(--electric-blue)]/20 transition-colors"
                  style={{ fontWeight: '600' }}
                >
                  {getPrimaryTopicTitle(article.topics, article.category)}
                </Link>
              </div>

              {/* Title */}
              <h1 className="mb-6 text-[40px] leading-[1.08] text-[var(--navy-deep)] md:text-[52px]" style={{ fontWeight: '750' }}>
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
                      The views and opinions expressed in this article are those of {article.author.name} and do not necessarily reflect the official policy or position of Data Centre Review. This content represents individual perspective and industry commentary.
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
                            style={{ backgroundColor: getTopicColor(getPrimaryTopicId(rec.topics, rec.category)).cssVar }}
                          >
                            {getPrimaryTopicTitle(rec.topics, rec.category)}
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
            <div className="lg:col-span-4">
              <EditorialSidebar />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 pb-12 md:px-8"><Link to="/opinion-articles" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">← Back to Opinion</Link></div>

      <Footer />
    </div>
  );
}
