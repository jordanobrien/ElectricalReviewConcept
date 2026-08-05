import { ArrowUpRight, BookOpen, CalendarDays, Mail, Monitor, Presentation, Video } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const formats = [
  { icon: Monitor, title: "Website", text: "High-impact display, sponsored hubs and campaigns alongside DCR's daily coverage." },
  { icon: Mail, title: "Email marketing", text: "Target readers directly through newsletters and dedicated campaign sends." },
  { icon: BookOpen, title: "Magazine", text: "Print and digital placements within DCR's long-form editorial environment." },
  { icon: Video, title: "Video & webinars", text: "Expert-led formats that help technical stories earn attention and engagement." },
  { icon: CalendarDays, title: "Events", text: "Partnerships across DCR events, awards and face-to-face industry programmes." },
  { icon: Presentation, title: "Bespoke campaigns", text: "Integrated packages tailored around your audience, message and commercial goals." },
];

export function AdvertisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <header className="bg-[var(--navy-deep)] text-white">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_420px] lg:items-end">
            <div><h1 className="max-w-[900px] text-[48px] leading-[0.96] md:text-[72px]" style={{ fontWeight: 750 }}>Reach the people shaping data centre infrastructure.</h1><p className="mt-7 max-w-[840px] text-[17px] leading-[1.75] text-white/75 md:text-[20px]">Build a credible presence with the managers, directors and technical specialists responsible for availability, energy, facilities and building services.</p></div>
            <div className="border border-white/15 bg-white/5 p-7"><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9eacd9]">Start a conversation</span><p className="mt-3 text-[15px] leading-[1.65] text-white/75">Tell us who you need to reach and what success looks like. The DCR commercial team will shape the right mix.</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#5a6eb4] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Contact sales <ArrowUpRight size={16} /></Link></div>
          </div>
        </header>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">The audience</span><h2 className="mt-4 text-[36px] leading-[1.05] text-[var(--navy-deep)] md:text-[48px]" style={{ fontWeight: 720 }}>Specialist influence, not general reach.</h2></div>
          <div><p className="text-[18px] leading-[1.75] text-[var(--slate-dark)]">DCR reaches the people tasked with keeping sites running effectively and maintaining the best possible availability—from data centre and energy leaders to facilities and building-services teams.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Data centre managers & directors", "Energy and sustainability leaders", "Facilities & operations teams", "Building-services professionals", "Consultants and project teams", "Technology and solution partners"].map(item => <div key={item} className="border-l-2 border-[#5a6eb4] bg-[#f7f8fc] px-4 py-3 text-[14px] font-semibold text-[var(--navy-deep)]">{item}</div>)}</div></div>
        </section>

        <section className="bg-[#f7f8fc] py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><div className="mb-9 flex flex-wrap items-end justify-between gap-5 border-b border-gray-200 pb-7"><h2 className="text-[34px] text-[var(--navy-deep)] md:text-[44px]" style={{ fontWeight: 720 }}>Campaign opportunities</h2><a href="https://datacentrereview.com/media-pack/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">View the DCR media pack <ArrowUpRight size={15} /></a></div><div className="grid gap-px bg-gray-200 md:grid-cols-2 lg:grid-cols-3">{formats.map(({ icon: Icon, title, text }) => <div key={title} className="bg-white p-7 md:p-9"><Icon size={22} className="text-[#5a6eb4]" /><h3 className="mt-5 text-[23px] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{title}</h3><p className="mt-3 text-[14px] leading-[1.7] text-[var(--slate-dark)]">{text}</p></div>)}</div></div></section>

        <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-20"><div className="grid gap-8 bg-[#5a6eb4] p-8 text-white md:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Made around your objectives</span><h2 className="mt-3 text-[32px] leading-tight md:text-[42px]" style={{ fontWeight: 720 }}>Put your expertise in front of the right sector audience.</h2></div><Link to="/contact" className="inline-flex items-center gap-2 bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Plan a campaign <ArrowUpRight size={16} /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
