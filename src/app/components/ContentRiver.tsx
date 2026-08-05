import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { articles } from "../data/articles";
import { deepDiveArticles } from "../data/deepDiveArticles";
import { opinionArticles } from "../data/opinionArticles";
import { getPrimaryTopicTitle } from "../utils/topicColors";

interface RiverItem {
  id: string;
  format: "News" | "Analysis" | "Opinion";
  category: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  to: string;
  author?: {
    name: string;
    company: string;
    imageUrl: string;
  };
}

const toNewsItem = (article: (typeof articles)[number]): RiverItem => ({
  id: article.id,
  format: "News",
  category: getPrimaryTopicTitle(article.topics, article.category),
  title: article.headline,
  summary: article.summary,
  imageUrl: article.imageUrl,
  date: article.publishDate,
  to: `/article/${article.id}`,
});

const toDeepDiveItem = (article: (typeof deepDiveArticles)[number]): RiverItem => ({
  id: article.id,
  format: "Analysis",
  category: getPrimaryTopicTitle(article.topics, article.category),
  title: article.headline,
  summary: article.summary,
  imageUrl: article.heroImageUrl,
  date: article.publishDate,
  to: `/analysis/${article.id}`,
});

const toOpinionItem = (article: (typeof opinionArticles)[number]): RiverItem => ({
  id: article.id,
  format: "Opinion",
  category: getPrimaryTopicTitle(article.topics, article.category),
  title: article.title,
  summary: article.summary,
  imageUrl: article.imageUrl,
  date: article.publishedDate,
  to: `/opinion/${article.id}`,
  author: {
    name: article.author.name,
    company: article.author.company,
    imageUrl: article.author.imageUrl,
  },
});

const riverItems: RiverItem[] = [
  toDeepDiveItem(deepDiveArticles[0]),
  toOpinionItem(opinionArticles[1]),
  toNewsItem(articles[4]),
  toDeepDiveItem(deepDiveArticles[1]),
  toOpinionItem(opinionArticles[2]),
  toNewsItem(articles[7]),
  toNewsItem(articles[0]),
  toOpinionItem(opinionArticles[0]),
  toDeepDiveItem(deepDiveArticles[2]),
  toNewsItem(articles[1]),
  toNewsItem(articles[2]),
  toOpinionItem(opinionArticles[3]),
  toNewsItem(articles[3]),
  toNewsItem(articles[5]),
  toNewsItem(articles[6]),
];

export function ContentRiver() {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleItems = riverItems.slice(0, visibleCount);
  const [leadStory, ...latestStories] = visibleItems;
  const hasMoreStories = visibleCount < riverItems.length;

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="mb-7 md:mb-9">
          <h2 className="max-w-[760px] text-[34px] leading-[1.05] text-[var(--navy-deep)] md:text-[48px]" style={{ fontWeight: 700 }}>
            Latest News &amp; Analysis
          </h2>
        </div>

        <Link to={leadStory.to} className="group relative block min-h-[440px] overflow-hidden bg-[#17131f] md:min-h-[540px]">
          <img src={leadStory.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 max-w-[940px] p-6 md:p-10 lg:p-12">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/85">
              <span className="bg-[#5a6eb4] px-2.5 py-1.5 text-white">{leadStory.format}</span>
              <span>{leadStory.category}</span>
            </div>
            <h3 className="mb-4 text-[30px] leading-[1.06] text-white md:text-[48px] lg:text-[56px]" style={{ fontWeight: 750 }}>
              {leadStory.title}
            </h3>
            <p className="max-w-[720px] text-[14px] leading-[1.6] text-white/80 md:text-[16px]">{leadStory.summary}</p>
            <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">{leadStory.date}</div>
          </div>
          <span className="absolute bottom-7 right-7 grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--navy-deep)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:bottom-10 md:right-10">
            <ArrowUpRight size={19} />
          </span>
        </Link>

        <div className="mt-2">
          {latestStories.map((item) => (
            <Link
              key={`${item.format}-${item.id}`}
              to={item.to}
              className="group grid gap-5 border-b border-gray-200 py-7 transition-colors hover:bg-[#f7f8fc] md:grid-cols-[150px_minmax(0,1fr)_280px] md:items-center md:gap-8 md:px-5 md:py-8 lg:grid-cols-[190px_minmax(0,1fr)_360px]"
            >
              <div className="flex items-center gap-3 md:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{item.format}</span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)] md:mt-3 md:block">{item.date}</span>
              </div>

              <div className="md:pr-4">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{item.category}</span>
                <h3 className="text-[23px] leading-[1.12] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[28px] lg:text-[32px]" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-2 max-w-[720px] text-[14px] leading-[1.6] text-[var(--slate-dark)]">{item.summary}</p>
                {item.format === "Opinion" && item.author && (
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={item.author.imageUrl}
                      alt={item.author.name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="min-w-0 leading-tight">
                      <span className="block text-[12px] font-bold text-[var(--navy-deep)]">{item.author.name}</span>
                      <span className="mt-1 block truncate text-[11px] text-[var(--slate-medium)]">{item.author.company}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative order-first aspect-[16/9] overflow-hidden bg-[#17131f] md:order-none">
                <img src={item.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-[var(--navy-deep)] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {hasMoreStories && (
          <div className="flex justify-center pt-10 md:pt-12">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + 4, riverItems.length))}
              className="group flex min-w-[210px] items-center justify-center gap-3 border border-[#5a6eb4] bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4] transition-colors hover:bg-[#5a6eb4] hover:text-white"
              aria-label="Load more news and analysis stories"
            >
              Load more
              <Plus size={16} className="transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
