import { ArrowUpRight, Download } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { magazines } from "../data/magazines";

export function MagazinesPage() {
  const [currentIssue, ...pastIssues] = magazines;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <header className="mx-auto max-w-[1440px] px-4 pb-9 pt-12 md:px-8 md:pb-12 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
            <h1 className="text-[48px] leading-[0.96] text-[var(--navy-deep)] md:text-[72px]" style={{ fontWeight: 750 }}>Magazine</h1>
            <p className="max-w-[540px] text-[15px] leading-[1.7] text-[var(--slate-dark)] md:text-[17px]">Published twice a year, Data Centre Review magazine brings together the best opinion and analysis from across the data centre industry.</p>
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="grid overflow-hidden bg-[var(--navy-deep)] text-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[540px] overflow-hidden lg:min-h-[660px]">
              <img src={currentIssue.coverImage} alt={`${currentIssue.title} cover`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute left-6 top-6 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--navy-deep)]">Current issue</span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">{currentIssue.issueDate}</span>
              <h2 className="mt-5 text-[42px] leading-[1] md:text-[58px]" style={{ fontWeight: 750 }}>{currentIssue.title}</h2>
              <p className="mt-6 max-w-[600px] text-[16px] leading-[1.7] text-white/72">The latest print edition, featuring a curated selection of expert opinion and in-depth industry analysis.</p>
              <button type="button" className="mt-10 inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--navy-deep)] transition-transform hover:-translate-y-1"><Download size={16} /> Download issue</button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h2 className="text-[30px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>Previous issues</h2>
          </div>
          <div className="grid gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {pastIssues.map((magazine) => (
              <article key={magazine.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#17131f]">
                  <img src={magazine.coverImage} alt={`${magazine.title} cover`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <button type="button" aria-label={`Download ${magazine.title}`} className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--navy-deep)] opacity-0 transition-all group-hover:-translate-y-1 group-hover:opacity-100"><Download size={17} /></button>
                </div>
                <div className="pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{magazine.issueDate}</span>
                  <div className="mt-2 flex items-start justify-between gap-5">
                    <h3 className="text-[24px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{magazine.title}</h3>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-[#5a6eb4]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
