import { ArrowUpRight, Building2, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { publicBrandProfiles } from "../data/brandProfiles";
import { pressReleases } from "../data/pressReleases";

export function PressReleaseArchivePage() {
  const { user } = useAuth();
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleReleases = pressReleases.slice(0, visibleCount);
  const hasMore = visibleCount < pressReleases.length;
  const brands = user?.brandProfiles.length ? user.brandProfiles : publicBrandProfiles;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="mx-auto max-w-[1440px] px-4 pt-4 md:px-8 md:pt-6">
          <div className="relative overflow-hidden bg-[var(--navy-deep)] text-white">
            <div className="flex flex-col justify-between gap-8 p-7 md:p-10 lg:flex-row lg:items-end lg:p-12">
              <div><span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Sponsored announcements</span><h1 className="max-w-[1000px] text-[48px] leading-[0.96] md:text-[72px]" style={{ fontWeight: 750 }}>Press Releases</h1><p className="mt-5 max-w-[720px] text-[15px] leading-[1.65] text-white/72 md:text-[17px]">Latest announcements from companies serving the data centre sector.</p></div>
              <Link to="/submit-press-release" className="inline-flex w-fit shrink-0 items-center gap-2 bg-[#5a6eb4] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white"><Plus size={17} />Post a Press Release</Link>
            </div>
            <div className="absolute left-0 top-0 h-2 w-full bg-[#5a6eb4]" />
          </div>
          <div className="border-x border-b border-amber-200 bg-amber-50 px-5 py-4 md:px-7"><p className="text-[13px] leading-[1.6] text-[var(--slate-dark)]"><strong>Disclaimer:</strong> Press releases are supplied by companies and organisations. Their claims have not been independently verified by Data Centre Review&apos;s editorial team.</p></div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
          <div className="mb-2 border-b border-gray-200 pb-6"><h2 className="text-[32px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>All Press Releases</h2></div>
          <div>
            {visibleReleases.map((release) => (
              <Link key={release.id} to={`/press-release/${release.id}`} className="group grid gap-6 border-b border-gray-200 py-8 transition-colors hover:bg-[#f7f8fc] md:grid-cols-[320px_minmax(0,1fr)] md:items-stretch md:gap-9 md:px-5">
                <div className="relative min-h-[230px] overflow-hidden bg-[#17131f]"><img src={release.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
                <div className="flex flex-col justify-center py-2"><div className="flex flex-wrap items-center gap-3"><span className="border border-[#5a6eb4]/35 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Sponsored</span><span className="text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{release.date}</span><span className="text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{release.company}</span></div><h3 className="mt-5 text-[28px] leading-[1.08] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[36px]" style={{ fontWeight: 710 }}>{release.headline}</h3><p className="mt-4 max-w-[820px] text-[15px] leading-[1.7] text-[var(--slate-dark)]">{release.summary}</p><span className="mt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">Read announcement →</span></div>
              </Link>
            ))}
          </div>
          {hasMore && <div className="flex justify-center pt-10"><button onClick={() => setVisibleCount(count => Math.min(count + 3, pressReleases.length))} className="group flex min-w-[210px] items-center justify-center gap-3 border border-[#5a6eb4] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4] hover:bg-[#5a6eb4] hover:text-white">Load more <Plus size={16} className="transition-transform group-hover:rotate-90" /></button></div>}
        </section>

        <section className="border-t border-gray-200 bg-[#f7f8fc]">
          <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
            <div className="mb-8 max-w-[760px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">Company Directory</span>
              <h2 className="mt-3 text-[32px] leading-tight text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>Meet the brands behind the announcements</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-[var(--slate-dark)]">Explore company profiles, press contacts and every published announcement from each brand.</p>
            </div>
            <div className="grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <Link key={brand.id} to={"/press-release-brands/" + brand.id} className="group flex min-h-[220px] flex-col bg-white p-7 transition-colors hover:bg-[#eef1fa]">
                  <div className="flex h-28 items-center justify-center border border-gray-100 bg-white p-3">
                    {brand.logo ? <img src={brand.logo} alt={brand.companyName + " logo"} className="h-24 w-24 object-contain" /> : <Building2 size={42} className="text-[#5a6eb4]" />}
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <h3 className="text-[20px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{brand.companyName}</h3>
                    <ArrowUpRight size={17} className="shrink-0 text-[#5a6eb4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <span className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">View brand profile</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
