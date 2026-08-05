import { ArrowUpRight, Eye, Play } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { videos } from "../data/videos";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function VideosArchivePage() {
  const [featuredVideo, ...latestVideos] = videos;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <header className="mx-auto max-w-[1440px] px-4 pb-9 pt-12 md:px-8 md:pb-12 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
            <h1 className="text-[48px] leading-[0.96] text-[var(--navy-deep)] md:text-[72px]" style={{ fontWeight: 750 }}>Video</h1>
            <p className="max-w-[540px] text-[15px] leading-[1.7] text-[var(--slate-dark)] md:text-[17px]">
              Technical walkthroughs, expert briefings and conversations from across the data centre industry.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 md:px-8">
          <Link to={`/video/${featuredVideo.id}`} className="group relative block min-h-[520px] overflow-hidden bg-[#17131f] md:min-h-[680px]">
            <img src={featuredVideo.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

            <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#5a6eb4] shadow-2xl transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
              <Play size={28} fill="currentColor" className="ml-1" />
            </span>

            <div className="absolute inset-x-0 bottom-0 max-w-[1020px] p-6 md:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/75">
                <span>{getPrimaryTopicTitle(featuredVideo.topics, featuredVideo.category)}</span>
              </div>
              <h2 className="text-[36px] leading-[1.02] text-white md:text-[56px] lg:text-[66px]" style={{ fontWeight: 750 }}>{featuredVideo.title}</h2>
              <p className="mt-5 max-w-[760px] text-[15px] leading-[1.65] text-white/78 md:text-[17px]">{featuredVideo.description}</p>
              <div className="mt-6 flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.11em] text-white/65">
                <span>{featuredVideo.publishDate}</span>
                <span className="flex items-center gap-1.5"><Eye size={14} />{featuredVideo.views} views</span>
              </div>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
            <h2 className="text-[30px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>Latest to watch</h2>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--slate-medium)] sm:block">Films · Briefings · Interviews</span>
          </div>

          <div className="grid gap-x-6 gap-y-11 md:grid-cols-2">
            {latestVideos.map((video, index) => (
              <Link key={video.id} to={`/video/${video.id}`} className={`group block ${index === latestVideos.length - 1 ? "md:col-span-2 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:bg-[#f7f8fc]" : ""}`}>
                <div className={`relative overflow-hidden bg-[#17131f] ${index === latestVideos.length - 1 ? "aspect-[16/9] md:aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <img src={video.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-[#5a6eb4] transition-transform duration-300 group-hover:scale-110"><Play size={17} fill="currentColor" className="ml-0.5" /></span>
                </div>

                <div className={index === latestVideos.length - 1 ? "py-5 md:p-10" : "pt-5"}>
                  <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--slate-medium)]">
                    <span className="text-[#5a6eb4]">{getPrimaryTopicTitle(video.topics, video.category)}</span>
                    <span>{video.publishDate}</span>
                  </div>
                  <h3 className="mt-3 text-[25px] leading-[1.08] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[30px]" style={{ fontWeight: 710 }}>{video.title}</h3>
                  <p className="mt-3 line-clamp-2 text-[14px] leading-[1.65] text-[var(--slate-dark)]">{video.description}</p>
                  <div className="mt-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.11em] text-[var(--slate-medium)]">
                    <span className="flex items-center gap-1.5"><Eye size={14} />{video.views} views</span>
                    <span className="flex items-center gap-2 text-[#5a6eb4]">Watch <ArrowUpRight size={15} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
