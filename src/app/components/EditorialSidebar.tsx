import { ArrowUpRight, BookOpen, Calendar, ChevronRight, Mail, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { articles } from "../data/articles";
import { magazines } from "../data/magazines";
import { pressReleases } from "../data/pressReleases";
import { getPrimaryTopicTitle } from "../utils/topicColors";

const upcomingEvents = [
  { title: "Future Grid Summit 2026", date: "15 March 2026", location: "ExCeL London", type: "Conference" },
  { title: "EV Infrastructure Delivery Workshop", date: "22 March 2026", location: "Manchester Central", type: "Workshop" },
  { title: "Grid Connections & Capacity Forum", date: "5 April 2026", location: "Birmingham NEC", type: "Forum" },
];

const exploreLinks = [
  { label: "Analysis", description: "Technical guides and deeper reporting", to: "/analysis" },
  { label: "Downloads", description: "Reports, guides and practical resources", to: "/downloads" },
  { label: "Video", description: "Walkthroughs, briefings and interviews", to: "/videos" },
];

interface EditorialSidebarProps {
  currentArticleId?: string;
}

function MpuPlaceholder() {
  return (
    <div className="flex h-[250px] w-full items-center justify-center border border-gray-200 bg-[#f7f8fc]" aria-label="Advertisement">
      <div className="text-center">
        <span className="block text-[9px] font-bold uppercase tracking-[0.17em] text-[var(--slate-medium)]">Advertisement</span>
        <span className="mt-2 block text-[10px] tracking-[0.08em] text-gray-400">MPU · 300×250</span>
      </div>
    </div>
  );
}

export function EditorialSidebar({ currentArticleId }: EditorialSidebarProps) {
  const trendingArticles = articles.filter((item) => item.id !== currentArticleId).slice(0, 4);
  const latestIssue = magazines[0];

  return (
    <div className="space-y-6">
      <MpuPlaceholder />

      <section className="border border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">
          <TrendingUp size={18} className="text-[#5a6eb4]" />
          <h2 className="text-[22px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>Trending Articles</h2>
        </div>
        <ol className="space-y-5">
          {trendingArticles.map((item, index) => (
            <li key={item.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <span className="ml-[52px] block text-[8px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">{getPrimaryTopicTitle(item.topics, item.category)}</span>
              <div className="mt-1.5 grid grid-cols-[36px_minmax(0,1fr)] items-start gap-4">
                <span className="text-right text-[23px] tabular-nums leading-[1.2] text-[#5a6eb4]/45" style={{ fontWeight: 750 }}>0{index + 1}</span>
                <Link to={`/article/${item.id}`} className="block text-[14px] leading-[1.4] text-[var(--navy-deep)] transition-colors hover:text-[#5a6eb4]" style={{ fontWeight: 650 }}>{item.headline}</Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[var(--navy-deep)] p-7 text-white">
        <Mail size={21} className="text-[#9eacd9]" />
        <h2 className="mt-4 text-[26px] leading-tight" style={{ fontWeight: 700 }}>Stay Informed</h2>
        <p className="mt-3 text-[13px] leading-[1.65] text-white/70">Get weekly data centre news, analysis and technical insight delivered to your inbox.</p>
        <input type="email" placeholder="Your email address" className="mt-5 w-full border border-white/20 bg-white px-4 py-3 text-[14px] text-[var(--navy-deep)] outline-none" />
        <button type="button" className="mt-3 w-full bg-[#5a6eb4] py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white">Subscribe</button>
        <p className="mt-3 text-[10px] text-white/45">Unsubscribe anytime. View our privacy policy.</p>
      </section>

      <section className="overflow-hidden border border-gray-200 bg-white">
        <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-4">
          <BookOpen size={17} className="text-[#5a6eb4]" />
          <h2 className="text-[20px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>Latest Issue</h2>
        </div>
        <Link to="/magazines" className="group grid grid-cols-[132px_minmax(0,1fr)] items-center gap-5 bg-[#f7f8fc] p-5">
          <div className="aspect-[4/5] overflow-hidden bg-[#17131f] shadow-[0_8px_20px_rgba(18,30,61,0.14)]">
            <img src={latestIssue.coverImage} alt={`${latestIssue.title} cover`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <h3 className="text-[20px] leading-[1.12] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4]" style={{ fontWeight: 700 }}>{latestIssue.title}</h3>
            <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.11em] text-[#5a6eb4]">View issue <ArrowUpRight size={14} /></span>
          </div>
        </Link>
      </section>

      <section className="border border-gray-200 bg-white p-6">
        <div className="mb-5 flex items-end justify-between gap-3 border-b border-gray-200 pb-4">
          <h2 className="text-[22px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>Press Releases</h2>
          <span className="border border-[#5a6eb4]/35 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Sponsored</span>
        </div>
        <ul className="space-y-4">
          {pressReleases.slice(0, 3).map((release) => (
            <li key={release.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <span className="text-[9px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{release.date}</span>
              <Link to={`/press-release/${release.id}`} className="mt-1.5 block text-[13px] leading-[1.45] text-[var(--navy-deep)] transition-colors hover:text-[#5a6eb4]" style={{ fontWeight: 600 }}>{release.headline}</Link>
            </li>
          ))}
        </ul>
        <Link to="/press-releases" className="mt-5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">View all press releases <ChevronRight size={14} /></Link>
      </section>

      <section className="border border-gray-200 bg-white p-6">
        <div className="mb-5 flex items-center gap-3 border-b border-gray-200 pb-4">
          <Calendar size={18} className="text-[#5a6eb4]" />
          <h2 className="text-[22px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>Upcoming Events</h2>
        </div>
        <ul className="space-y-5">
          {upcomingEvents.map((event) => (
            <li key={event.title} className="flex gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center bg-[#eef1fa] text-[#5a6eb4]">
                <span className="text-[9px] font-bold uppercase">{event.date.split(" ")[1].substring(0, 3)}</span>
                <span className="text-[16px] font-bold leading-none">{event.date.split(" ")[0]}</span>
              </div>
              <div>
                <span className="text-[8px] font-bold uppercase tracking-[0.11em] text-[#5a6eb4]">{event.type}</span>
                <h3 className="mt-1 text-[14px] leading-[1.35] text-[var(--navy-deep)]" style={{ fontWeight: 650 }}>{event.title}</h3>
                <span className="mt-2 flex items-center gap-1 text-[10px] text-[var(--slate-medium)]"><MapPin size={11} />{event.location}</span>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/events" className="mt-5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">View all events <ChevronRight size={14} /></Link>
      </section>

      <MpuPlaceholder />

      <nav className="border border-gray-200 bg-white" aria-label="Explore more content">
        <div className="border-b border-gray-200 px-6 py-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Continue exploring</span>
          <h2 className="mt-2 text-[25px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>More from DCR</h2>
        </div>
        {exploreLinks.map((item) => (
          <Link key={item.to} to={item.to} className="group flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-5 last:border-0 hover:bg-[#f7f8fc]">
            <span>
              <strong className="block text-[15px] text-[var(--navy-deep)]">{item.label}</strong>
              <span className="mt-1 block text-[11px] leading-[1.45] text-[var(--slate-medium)]">{item.description}</span>
            </span>
            <ArrowUpRight size={16} className="flex-shrink-0 text-[#5a6eb4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </nav>
    </div>
  );
}
