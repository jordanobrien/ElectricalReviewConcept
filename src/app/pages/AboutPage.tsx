import { ArrowUpRight, BookOpen, CalendarDays, Mail, MonitorPlay, Newspaper, Users } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const portfolio = [
  { icon: Newspaper, title: "News & opinion", text: "Breaking developments and independent industry perspectives." },
  { icon: BookOpen, title: "Magazine", text: "Long-form features and expert opinion in DCR's print and digital editions." },
  { icon: Mail, title: "Newsletter", text: "A regular briefing on the news, products and decisions affecting the sector." },
  { icon: CalendarDays, title: "Events", text: "Conferences, awards and technical forums that inform and connect the industry." },
  { icon: MonitorPlay, title: "Video & webinars", text: "Practical briefings and conversations with specialists across the market." },
  { icon: Users, title: "Industry voices", text: "A broad network of operators, engineers, suppliers and advisers sharing expertise." },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <header className="bg-[var(--navy-deep)] text-white">
          <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
            <h1 className="max-w-[1050px] text-[48px] leading-[0.96] md:text-[72px]" style={{ fontWeight: 750 }}>About Data Centre Review</h1>
            <p className="mt-7 max-w-[900px] text-[17px] leading-[1.75] text-white/75 md:text-[20px]">Independent reporting, expert opinion and practical insight for the people designing, building and operating critical digital infrastructure.</p>
          </div>
        </header>

        <section className="border-b border-gray-200 bg-[#f7f8fc]">
          <div className="mx-auto grid max-w-[1440px] divide-y divide-gray-200 px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
            {[['Since', '2009'], ['Industry voices', '100+ contributors'], ['Core market', 'UK & Ireland']].map(([label, value]) => (
              <div key={label} className="py-8 md:px-8 md:first:pl-0"><span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{label}</span><strong className="mt-2 block text-[28px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>{value}</strong></div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">What we do</span>
            <h2 className="mt-4 text-[36px] leading-[1.05] text-[var(--navy-deep)] md:text-[48px]" style={{ fontWeight: 720 }}>Helping the industry understand what changes next.</h2>
          </div>
          <div className="space-y-6 text-[17px] leading-[1.8] text-[var(--slate-dark)]">
            <p>Data Centre Review has followed the sector's evolution since 2009, reporting the stories that matter and creating space for specialist voices to explain their impact.</p>
            <p>DCR is written for data centre, energy, facilities and building-services managers and directors, alongside the wider community responsible for availability, efficiency and dependable operation.</p>
            <p>Our coverage connects power, cooling, design, operations, security, sustainability, policy and people—because infrastructure decisions rarely sit in isolation.</p>
          </div>
        </section>

        <section className="bg-[#f7f8fc] py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8">
            <div className="mb-9 border-b border-gray-200 pb-7"><h2 className="text-[34px] text-[var(--navy-deep)] md:text-[44px]" style={{ fontWeight: 720 }}>The DCR portfolio</h2></div>
            <div className="grid gap-px bg-gray-200 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.map(({ icon: Icon, title, text }) => <div key={title} className="bg-white p-7 md:p-9"><Icon size={22} className="text-[#5a6eb4]" /><h3 className="mt-5 text-[23px] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{title}</h3><p className="mt-3 text-[14px] leading-[1.7] text-[var(--slate-dark)]">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><h2 className="text-[34px] leading-tight text-[var(--navy-deep)] md:text-[44px]" style={{ fontWeight: 720 }}>Join the Data Centre Review community.</h2><p className="mt-4 text-[16px] text-[var(--slate-dark)]">Get the latest reporting, magazine editions and invitations to DCR events.</p></div>
          <div className="flex flex-wrap gap-3"><Link to="/newsletter" className="inline-flex items-center gap-2 bg-[#5a6eb4] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Subscribe <ArrowUpRight size={16} /></Link><Link to="/contact" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--navy-deep)]">Contact DCR</Link></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
