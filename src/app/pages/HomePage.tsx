import { ArrowUpRight, CalendarDays, Download, Play } from "lucide-react";
import { Link } from "react-router";
import { ContentRiver } from "../components/ContentRiver";
import { EventSponsorLogo } from "../components/EventSponsorLogo";
import { Footer } from "../components/Footer";
import { HeroBanner } from "../components/HeroBanner";
import { Navigation } from "../components/Navigation";
import { TopicsGrid } from "../components/TopicsGrid";
import { downloads } from "../data/downloads";
import { events } from "../data/events";
import { pressReleases } from "../data/pressReleases";
import { videos } from "../data/videos";

export function HomePage() {
  const featuredVideo = videos[0];
  const upcomingEvents = events
    .filter((event) => event.status !== "on-demand")
    .sort((firstEvent, secondEvent) => firstEvent.startDate.localeCompare(secondEvent.startDate))
    .slice(0, 2);
  const featuredDownload = downloads[0];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="mx-auto max-w-[970px] px-4 py-6 md:px-0 md:py-8">
        <div className="flex min-h-[70px] items-center justify-center border border-gray-200 bg-[#f7f8fc] text-center">
          <div><span className="block text-[9px] font-bold uppercase tracking-[0.17em] text-[var(--slate-medium)]">Advertisement</span><span className="mt-2 block text-[10px] tracking-[0.08em] text-gray-400">Leaderboard · 970×90</span></div>
        </div>
      </div>

      <HeroBanner />
      <ContentRiver />

      <section className="bg-[#f7f8fc] py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
            <div><h2 className="text-[32px] leading-tight text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>Explore by topic</h2></div>
          </div>
          <TopicsGrid />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#eef1fa] text-[#5a6eb4]"><Play size={18} fill="currentColor" /></span><div><h2 className="text-[32px] text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>Video</h2></div></div>
            <Link to="/videos" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">View all video <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
            <Link to={`/video/${featuredVideo.id}`} className="group relative min-h-[500px] overflow-hidden bg-[#17131f]"><img src={featuredVideo.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /><span className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full bg-white text-[#5a6eb4]"><Play size={19} fill="currentColor" /></span><div className="absolute inset-x-0 bottom-0 max-w-[820px] p-6 md:p-9"><h3 className="text-[32px] leading-[1.03] text-white md:text-[42px]" style={{ fontWeight: 730 }}>{featuredVideo.title}</h3><p className="mt-4 max-w-[680px] text-[14px] leading-[1.6] text-white/72">{featuredVideo.description}</p></div></Link>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {videos.slice(1, 3).map((video) => <Link key={video.id} to={`/video/${video.id}`} className="group relative min-h-[240px] overflow-hidden bg-[#17131f]"><img src={video.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" /><span className="absolute right-4 top-4 bg-white px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">Video</span><h3 className="absolute inset-x-0 bottom-0 p-5 text-[21px] leading-[1.08] text-white" style={{ fontWeight: 710 }}>{video.title}</h3></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fc] py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#5a6eb4]"><CalendarDays size={19} /></span><div><h2 className="text-[32px] text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>Events</h2></div></div>
            <Link to="/events" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">View all events <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {upcomingEvents.map((event) => <Link key={event.id} to={`/event/${event.id}`} className="group grid overflow-hidden bg-white md:grid-cols-[1.05fr_0.95fr]"><div className="relative min-h-[320px] overflow-hidden"><img src={event.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><span className="absolute left-4 top-4 bg-[#5a6eb4] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-white">{event.type === "Webinar" ? "Live webinar" : "Event"}</span></div><div className="flex flex-col justify-center p-6"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">{event.date}</span><h3 className="mt-3 text-[27px] leading-[1.05] text-[var(--navy-deep)] group-hover:text-[#5a6eb4]" style={{ fontWeight: 720 }}>{event.title}</h3><p className="mt-4 line-clamp-3 text-[13px] leading-[1.6] text-[var(--slate-dark)]">{event.summary}</p>{event.partners && event.partners.length > 0 && <span className="mt-5 flex min-w-0 items-center gap-3 border-t border-gray-200 pt-4"><span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[var(--slate-medium)]">In partnership with</span><EventSponsorLogo sponsor={event.partners[0]} compact /></span>}<span className="mt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">{event.location}</span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#eef1fa] text-[#5a6eb4]"><Download size={19} /></span><div><h2 className="text-[32px] text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>Downloads</h2></div></div>
            <Link to="/downloads" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">View all downloads <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <Link to={`/download/${featuredDownload.id}`} className="group grid overflow-hidden bg-[var(--navy-deep)] text-white md:grid-cols-[1.1fr_0.9fr]"><div className="relative min-h-[440px] overflow-hidden"><img src={featuredDownload.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div><div className="flex flex-col justify-center p-7 md:p-9"><span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9eacd9]">{featuredDownload.type}</span><h3 className="mt-4 text-[31px] leading-[1.04]" style={{ fontWeight: 730 }}>{featuredDownload.title}</h3><p className="mt-4 text-[14px] leading-[1.65] text-white/72">{featuredDownload.summary}</p><span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em]">Get the resource <ArrowUpRight size={15} /></span></div></Link>
            <div className="grid gap-4">
              {downloads.slice(1, 3).map((download) => <Link key={download.id} to={`/download/${download.id}`} className="group grid overflow-hidden border border-gray-200 bg-white sm:grid-cols-[150px_1fr] lg:grid-cols-[170px_1fr]"><img src={download.imageUrl} alt="" className="h-full min-h-[190px] w-full object-cover" /><div className="flex flex-col justify-center p-5"><span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Download · {download.type}</span><h3 className="mt-2 text-[20px] leading-[1.08] text-[var(--navy-deep)] group-hover:text-[#5a6eb4]" style={{ fontWeight: 710 }}>{download.title}</h3><span className="mt-4 text-[9px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{download.size}</span></div></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-deep)] py-14 text-white md:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 md:px-8 lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#9eacd9]">The DCR Newsletter</span><h2 className="mt-3 max-w-[650px] text-[32px] leading-[1.05] md:text-[42px]" style={{ fontWeight: 700 }}>Critical infrastructure intelligence, delivered twice weekly.</h2></div>
          <div><p className="mb-5 text-[14px] leading-[1.6] text-white/70">Get the essential news, analysis and technical insight without the noise.</p><div className="flex flex-col gap-3 sm:flex-row"><input type="email" placeholder="Email address" className="min-w-0 flex-1 border border-white/20 bg-white/10 px-5 py-4 text-[14px] text-white outline-none placeholder:text-white/50 focus:border-white/60" /><button type="button" className="flex items-center justify-center gap-2 bg-[#5a6eb4] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Subscribe <ArrowUpRight size={15} /></button></div></div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="mb-3 flex items-end justify-between border-b border-gray-200 pb-6"><div className="flex flex-wrap items-center gap-3"><h2 className="text-[32px] text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>From the industry</h2><span className="border border-[#5a6eb4]/35 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Sponsored</span></div><Link to="/press-releases" className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4] sm:flex">View all <ArrowUpRight size={15} /></Link></div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="grid md:grid-cols-2">
              {pressReleases.map((release) => <Link key={release.id} to={`/press-release/${release.id}`} className="group grid gap-5 border-b border-gray-200 py-7 transition-colors hover:bg-[#f7f8fc] sm:grid-cols-[140px_1fr] md:px-5"><img src={release.imageUrl} alt="" className="aspect-[4/3] w-full object-cover" /><div><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">{release.company}</span><h3 className="mt-2 text-[20px] leading-[1.12] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4]" style={{ fontWeight: 700 }}>{release.headline}</h3><span className="mt-4 block text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{release.date}</span></div></Link>)}
            </div>
            <aside className="flex justify-center border-t border-gray-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-label="Advertisement">
              <div className="flex h-[250px] w-[300px] items-center justify-center border border-gray-200 bg-[#f7f8fc] text-center">
                <div><span className="block text-[9px] font-bold uppercase tracking-[0.17em] text-[var(--slate-medium)]">Advertisement</span><span className="mt-2 block text-[10px] tracking-[0.08em] text-gray-400">MPU · 300×250</span></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
