import {
  ArrowUpRight,
  Calendar,
  Check,
  ChevronRight,
  Linkedin,
  Mail,
  MapPin,
  Share2,
  TrendingUp,
  Twitter,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { EditorialSidebar } from "../components/EditorialSidebar";
import { articles, getArticleById } from "../data/articles";
import { pressReleases } from "../data/pressReleases";
import { getPrimaryTopicId, getPrimaryTopicTitle, getTopicColor } from "../utils/topicColors";

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

const exploreLinks = [
  { label: "Analysis", description: "Technical guides and deeper reporting", to: "/analysis" },
  { label: "Downloads", description: "Reports, guides and practical resources", to: "/downloads" },
  { label: "Video", description: "Walkthroughs, briefings and interviews", to: "/videos" },
];

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  const recommendedArticles = article
    ? articles
        .filter((item) => item.id !== id)
        .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
        .slice(0, 3)
    : [];

  const trendingArticles = articles.filter((item) => item.id !== id).slice(0, 4);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="mx-auto max-w-[1440px] px-4 py-20 md:px-8">
          <h1 className="text-[48px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 750 }}>Article not found</h1>
          <Link to="/" className="mt-6 inline-block text-[#5a6eb4]">Return to homepage</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="border-b border-gray-200 bg-[#f7f8fc]">
        <div className="mx-auto max-w-[1440px] px-4 py-3 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[var(--electric-blue)]">News</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{getPrimaryTopicTitle(article.topics, article.category)}</span>
          </div>
        </div>
      </div>

      <main className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-10 md:px-8 md:py-14 lg:grid-cols-12 lg:items-start">
        <div className="min-w-0 lg:col-span-8">
        <header className="pb-8 md:pb-10">
          <Link to={`/topics/${getPrimaryTopicId(article.topics, article.category)}`} className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white" style={{ backgroundColor: getTopicColor(getPrimaryTopicId(article.topics, article.category)).cssVar }}>{getPrimaryTopicTitle(article.topics, article.category)}</Link>
          <h1 className="mt-5 max-w-[1050px] text-[38px] leading-[1.05] text-[var(--navy-deep)] md:text-[50px] lg:text-[56px]" style={{ fontWeight: 750 }}>{article.headline}</h1>
          <p className="mt-5 max-w-[880px] text-[17px] leading-[1.6] text-[var(--slate-dark)] md:text-[19px]">{article.summary}</p>

          <div className="mt-8 flex flex-col gap-5 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[var(--slate-medium)]">{article.publishDate}</span>
            <div className="flex items-center gap-2">
              <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--slate-medium)]">Share</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.headline)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="grid h-10 w-10 place-items-center border border-gray-200 text-[var(--navy-deep)] transition-colors hover:border-[#5a6eb4] hover:bg-[#5a6eb4] hover:text-white"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="grid h-10 w-10 place-items-center border border-gray-200 text-[var(--navy-deep)] transition-colors hover:border-[#5a6eb4] hover:bg-[#5a6eb4] hover:text-white"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.headline)}&body=${encodeURIComponent(`${article.summary}\n\n${window.location.href}`)}`}
                aria-label="Share via email"
                className="grid h-10 w-10 place-items-center border border-gray-200 text-[var(--navy-deep)] transition-colors hover:border-[#5a6eb4] hover:bg-[#5a6eb4] hover:text-white"
              >
                <Mail size={16} />
              </a>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                aria-label="Copy link"
                className="grid h-10 w-10 place-items-center border border-gray-200 text-[var(--navy-deep)] transition-colors hover:border-[#5a6eb4] hover:bg-[#5a6eb4] hover:text-white"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </header>

        <div>
          <div className="relative aspect-[16/7] min-h-[260px] overflow-hidden bg-[#17131f] md:min-h-0">
            <img src={article.imageUrl} alt={article.headline} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

          <article className="pt-10 md:pt-12">
            <section className="relative overflow-hidden border border-gray-200 bg-[#f7f8fc] p-6 md:p-7">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#5a6eb4]" />
              <h2 className="max-w-[560px] text-[25px] leading-tight text-[var(--navy-deep)] md:text-[28px]" style={{ fontWeight: 700 }}>What you need to know</h2>
              <ul className="mt-5 space-y-3.5">
                {article.inBrief.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[#5a6eb4] text-white"><Check size={11} strokeWidth={3} /></span>
                    <span className="text-[15px] leading-[1.55] text-[var(--slate-dark)] md:text-[16px]">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="py-10 md:py-12">
              <div className="space-y-7">
                {article.inReview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-[1.85] text-[var(--slate-dark)] md:text-[18px]">{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="border-t border-gray-200 pt-10">
              <div className="mb-7 flex items-end justify-between">
                <h2 className="text-[30px] leading-tight text-[var(--navy-deep)] md:text-[36px]" style={{ fontWeight: 700 }}>Recommended Reading</h2>
                <Link to="/news" className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4] sm:flex">All news <ArrowUpRight size={15} /></Link>
              </div>
              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {recommendedArticles.map((item) => (
                  <Link key={item.id} to={`/article/${item.id}`} className="group grid gap-5 py-6 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-center">
                    <img src={item.imageUrl} alt="" className="aspect-[4/3] w-full object-cover" />
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">{getPrimaryTopicTitle(item.topics, item.category)}</span>
                      <h3 className="mt-2 text-[21px] leading-[1.13] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4]" style={{ fontWeight: 700 }}>{item.headline}</h3>
                      <p className="mt-2 line-clamp-2 text-[13px] leading-[1.55] text-[var(--slate-medium)]">{item.summary}</p>
                      <span className="mt-3 block text-[9px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{item.publishDate}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/news" className="mt-9 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">← Back to News</Link>
            </section>
          </article>
        </div>

          <div className="lg:col-span-4">
            <EditorialSidebar currentArticleId={id} />
          </div>
      </main>

      <Footer />
    </div>
  );
}
