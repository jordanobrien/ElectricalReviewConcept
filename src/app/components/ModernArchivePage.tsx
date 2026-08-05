import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export interface ModernArchiveItem {
  id: string;
  to: string;
  format: string;
  category: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  author?: { name: string; company?: string; imageUrl?: string };
}

interface ModernArchivePageProps {
  eyebrow?: string;
  title: string;
  introduction: string;
  collectionTitle: string;
  items: ModernArchiveItem[];
}

export function ModernArchivePage({ eyebrow, title, introduction, collectionTitle, items }: ModernArchivePageProps) {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleItems = items.slice(0, visibleCount);
  const [featuredItem, ...latestItems] = visibleItems;
  const hasMoreItems = visibleCount < items.length;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <header className="mx-auto max-w-[1440px] px-4 pb-9 pt-12 md:px-8 md:pb-12 md:pt-20">
          {eyebrow && <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a6eb4]">{eyebrow}</span>}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
            <h1 className="text-[48px] leading-[0.96] text-[var(--navy-deep)] md:text-[72px]" style={{ fontWeight: 750 }}>{title}</h1>
            <p className="max-w-[540px] text-[15px] leading-[1.7] text-[var(--slate-dark)] md:text-[17px]">{introduction}</p>
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 md:px-8">
          <Link to={featuredItem.to} className="group relative block min-h-[500px] overflow-hidden bg-[#17131f] md:min-h-[640px]">
            <img src={featuredItem.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 max-w-[1050px] p-6 md:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                <span>{featuredItem.category}</span>
              </div>
              <h2 className="text-[36px] leading-[1.01] text-white md:text-[56px] lg:text-[66px]" style={{ fontWeight: 750 }}>{featuredItem.title}</h2>
              <p className="mt-5 max-w-[760px] text-[15px] leading-[1.65] text-white/78 md:text-[17px]">{featuredItem.summary}</p>
              <div className="mt-6 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.11em] text-white/65">
                <span>{featuredItem.date}</span>
                {featuredItem.author && <span>{featuredItem.author.name}</span>}
              </div>
            </div>
            <span className="absolute bottom-7 right-7 grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--navy-deep)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:bottom-10 md:right-10"><ArrowUpRight size={20} /></span>
          </Link>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
          <div className="mb-2 border-b border-gray-200 pb-6">
            <h2 className="text-[30px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>{collectionTitle}</h2>
          </div>

          {latestItems.map((item) => (
            <Link key={item.id} to={item.to} className="group grid gap-5 border-b border-gray-200 py-7 transition-colors hover:bg-[#f7f8fc] md:grid-cols-[160px_minmax(0,1fr)_340px] md:items-center md:gap-8 md:px-5 md:py-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{item.format}</span>
                <span className="mt-3 block text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{item.date}</span>
              </div>
              <div>
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{item.category}</span>
                <h3 className="text-[25px] leading-[1.08] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[32px]" style={{ fontWeight: 710 }}>{item.title}</h3>
                <p className="mt-3 line-clamp-2 max-w-[720px] text-[14px] leading-[1.65] text-[var(--slate-dark)]">{item.summary}</p>
                {item.author && (
                  <div className="mt-5 flex items-center gap-3">
                    {item.author.imageUrl && <img src={item.author.imageUrl} alt={item.author.name} className="h-10 w-10 rounded-full object-cover" />}
                    <div className="text-[11px] leading-tight">
                      <span className="block font-bold text-[var(--navy-deep)]">{item.author.name}</span>
                      {item.author.company && <span className="mt-1 block text-[var(--slate-medium)]">{item.author.company}</span>}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative order-first aspect-[16/9] overflow-hidden bg-[#17131f] md:order-none">
                <img src={item.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-[var(--navy-deep)] opacity-0 transition-all group-hover:-translate-y-1 group-hover:opacity-100"><ArrowUpRight size={16} /></span>
              </div>
            </Link>
          ))}
          {hasMoreItems && (
            <div className="flex justify-center pt-10 md:pt-12">
              <button type="button" onClick={() => setVisibleCount((count) => Math.min(count + 4, items.length))} className="group flex min-w-[210px] items-center justify-center gap-3 border border-[#5a6eb4] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4] transition-colors hover:bg-[#5a6eb4] hover:text-white">
                Load more <Plus size={16} className="transition-transform group-hover:rotate-90" />
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
