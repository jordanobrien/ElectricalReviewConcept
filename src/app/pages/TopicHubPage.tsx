import { ArrowUpRight, Download, Play, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { articles } from "../data/articles";
import { deepDiveArticles } from "../data/deepDiveArticles";
import { downloads } from "../data/downloads";
import { opinionArticles } from "../data/opinionArticles";
import { topics } from "../data/topics";
import { videos } from "../data/videos";
import { getTopicColor } from "../utils/topicColors";

export function TopicHubPage() {
  const { topicId = "" } = useParams<{ topicId: string }>();
  const topic = topics[topicId];
  const [visibleCount, setVisibleCount] = useState(3);

  if (!topic) {
    return <div className="min-h-screen bg-white"><Navigation /><main className="mx-auto max-w-[1440px] px-4 py-20 md:px-8"><h1 className="text-[48px] text-[var(--navy-deep)]" style={{ fontWeight: 750 }}>Topic not found</h1><Link to="/" className="mt-6 inline-block text-[#5a6eb4]">Return home</Link></main><Footer /></div>;
  }

  const topicColor = getTopicColor(topicId);
  const stories = [
    ...articles.filter((item) => item.topics?.includes(topicId)).map((item) => ({ id: item.id, to: `/article/${item.id}`, format: "News", category: item.category, title: item.headline, summary: item.summary, imageUrl: item.imageUrl, date: item.publishDate })),
    ...deepDiveArticles.filter((item) => item.topics?.includes(topicId)).map((item) => ({ id: item.id, to: `/analysis/${item.id}`, format: "Analysis", category: item.category, title: item.headline, summary: item.summary, imageUrl: item.heroImageUrl, date: item.publishDate })),
    ...opinionArticles.filter((item) => item.topics?.includes(topicId)).map((item) => ({ id: item.id, to: `/opinion/${item.id}`, format: "Opinion", category: item.category, title: item.title, summary: item.summary, imageUrl: item.imageUrl, date: item.publishedDate })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const relatedVideos = videos.filter((item) => item.topics?.includes(topicId));
  const relatedDownloads = downloads.filter((item) => item.topics?.includes(topicId));
  const visibleStories = stories.slice(0, visibleCount);
  const [leadStory, ...latestStories] = visibleStories;
  const hasMoreStories = visibleCount < stories.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="relative w-full overflow-hidden bg-[var(--navy-deep)] text-white">
          <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16 lg:py-20">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-[1150px] text-[42px] leading-[1.01] md:text-[58px] lg:text-[66px]" style={{ fontWeight: 750 }}>{topic.title}</h1>
              <p className="mt-5 max-w-[1000px] text-[15px] leading-[1.7] text-white/72 md:text-[17px]">{topic.description}</p>
            </div>
          </div>
          <div className="absolute left-0 top-0 h-2 w-full" style={{ backgroundColor: topicColor.cssVar }} />
        </section>

        {leadStory && (
          <section className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-20">
            <div className="mb-8 border-b border-gray-200 pb-6"><h2 className="text-[30px] text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>Latest in {topic.title}</h2></div>
            <Link to={leadStory.to} className="group grid overflow-hidden bg-[var(--navy-deep)] lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[380px] overflow-hidden md:min-h-[500px]"><img src={leadStory.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
              <div className="flex flex-col justify-center p-7 text-white md:p-12">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65"><span>{topic.title}</span></div>
                <h2 className="mt-5 text-[32px] leading-[1.04] md:text-[44px]" style={{ fontWeight: 720 }}>{leadStory.title}</h2>
                <p className="mt-5 text-[15px] leading-[1.7] text-white/72">{leadStory.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em]">Read story <ArrowUpRight size={16} /></span>
              </div>
            </Link>

            <div className="mt-2">
              {latestStories.map((story) => (
                <Link key={`${story.format}-${story.id}`} to={story.to} className="group grid gap-5 border-b border-gray-200 py-7 transition-colors hover:bg-[#f7f8fc] md:grid-cols-[150px_minmax(0,1fr)_320px] md:items-center md:gap-8 md:px-5">
                  <div><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{story.format}</span><span className="mt-3 block text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{story.date}</span></div>
                  <div><span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{topic.title}</span><h3 className="mt-2 text-[25px] leading-[1.08] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[31px]" style={{ fontWeight: 710 }}>{story.title}</h3><p className="mt-3 line-clamp-2 text-[14px] leading-[1.65] text-[var(--slate-dark)]">{story.summary}</p></div>
                  <div className="relative order-first aspect-[16/9] overflow-hidden md:order-none"><img src={story.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
                </Link>
              ))}
            </div>
            {hasMoreStories && (
              <div className="flex justify-center pt-10">
                <button type="button" onClick={() => setVisibleCount((count) => Math.min(count + 4, stories.length))} className="group flex min-w-[210px] items-center justify-center gap-3 border border-[#5a6eb4] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4] transition-colors hover:bg-[#5a6eb4] hover:text-white">
                  Load more <Plus size={16} className="transition-transform group-hover:rotate-90" />
                </button>
              </div>
            )}
          </section>
        )}

        {(relatedVideos.length > 0 || relatedDownloads.length > 0) && (
          <section className="bg-[#f7f8fc] py-14 md:py-20">
            <div className="mx-auto max-w-[1440px] px-4 md:px-8">
              <div className="mb-8 border-b border-gray-200 pb-6"><h2 className="text-[30px] text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>Watch & download</h2></div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedVideos.slice(0, 2).map((video) => <Link key={video.id} to={`/video/${video.id}`} className="group bg-white"><div className="relative aspect-[16/9] overflow-hidden"><img src={video.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#5a6eb4]"><Play size={16} fill="currentColor" /></span></div><div className="p-5"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">Video</span><h3 className="mt-2 text-[22px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{video.title}</h3></div></Link>)}
                {relatedDownloads.slice(0, 2).map((download) => <Link key={download.id} to={`/download/${download.id}`} className="group bg-white"><div className="relative aspect-[16/9] overflow-hidden"><img src={download.imageUrl} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#5a6eb4]"><Download size={16} /></span></div><div className="p-5"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">{download.type}</span><h3 className="mt-2 text-[22px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{download.title}</h3></div></Link>)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
