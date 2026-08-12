import { ArrowUpRight, Download, FileText } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { downloads } from "../data/downloads";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function DownloadsArchivePage() {
  const [featuredDownload, ...libraryDownloads] = downloads;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <header className="mx-auto max-w-[1440px] px-4 pb-9 pt-12 md:px-8 md:pb-12 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
            <h1 className="text-[48px] leading-[0.96] text-[var(--navy-deep)] md:text-[72px]" style={{ fontWeight: 750 }}>Downloads</h1>
            <p className="max-w-[540px] text-[15px] leading-[1.7] text-[var(--slate-dark)] md:text-[17px]">
              Reports, whitepapers and original research examining the technologies and challenges shaping the data centre industry.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 md:px-8">
          <Link to={`/download/${featuredDownload.id}`} className="group grid overflow-hidden bg-[var(--navy-deep)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[390px] overflow-hidden bg-black md:min-h-[520px]">
              <img src={featuredDownload.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--navy-deep)] md:bottom-8 md:left-8">
                Featured resource
              </span>
            </div>

            <div className="relative flex flex-col justify-center p-7 text-white md:p-12 lg:p-14">
              <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">
                <FileText size={16} />
                <span>{featuredDownload.type}</span>
                <span aria-hidden="true">•</span>
                <span>{featuredDownload.publishedDate}</span>
              </div>
              <h2 className="text-[32px] leading-[1.04] md:text-[44px]" style={{ fontWeight: 720 }}>{featuredDownload.title}</h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-white/72">{featuredDownload.summary}</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/65">
                {featuredDownload.pages && <span>{featuredDownload.pages} pages</span>}
                <span>{featuredDownload.size}</span>
                <span>{featuredDownload.author}</span>
              </div>
              <span className="mt-10 inline-flex w-fit items-center gap-3 text-[11px] font-bold uppercase tracking-[0.13em] text-white">
                Get the resource <ArrowUpRight size={17} />
              </span>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-6">
            <h2 className="text-[30px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>The library</h2>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--slate-medium)] sm:block">Reports · Whitepapers · Research</span>
          </div>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {libraryDownloads.map((download) => (
              <Link key={download.id} to={`/download/${download.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#17131f]">
                  <img src={download.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#5a6eb4] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white">{download.type}</span>
                  <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--navy-deep)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><Download size={17} /></span>
                </div>
                <div className="pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{getPrimaryTopicTitle(download.topics, download.category)}</span>
                  <h3 className="mt-2 text-[23px] leading-[1.12] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4]" style={{ fontWeight: 700 }}>{download.title}</h3>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-[1.65] text-[var(--slate-dark)]">{download.summary}</p>
                  <div className="mt-5 flex items-center gap-4 border-t border-gray-200 pt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--slate-medium)]">
                    {download.pages && <span>{download.pages} pages</span>}
                    <span>{download.size}</span>
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
