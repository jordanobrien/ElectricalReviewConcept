import { BookOpen, CalendarDays, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const benefits = [
  { icon: Mail, title: "News and insight, twice weekly", text: "Essential data centre news, expert opinion, in-depth analysis and technical insight." },
  { icon: BookOpen, title: "Reports and magazine editions", text: "New reports, whitepapers and digital editions of Data Centre Review." },
  { icon: CalendarDays, title: "Events and webinars", text: "Invitations to DCR events, live webinars and new on-demand sessions." },
];

export function NewsletterPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="bg-[#f7f8fc]">
        <section className="bg-[var(--navy-deep)] text-white"><div className="mx-auto max-w-[1440px] px-4 py-16 text-center md:px-8 md:py-24"><h1 className="text-[48px] leading-[0.96] md:text-[72px]" style={{ fontWeight: 750 }}>The DCR Newsletter</h1><p className="mx-auto mt-6 max-w-[820px] text-[17px] leading-[1.7] text-white/75 md:text-[20px]">Twice a week, get the essential data centre news, expert opinion, in-depth analysis and technical insight, plus new reports, event invitations and selected industry developments.</p></div></section>

        <section className="mx-auto max-w-[1120px] px-4 py-12 md:px-8 md:py-20">
          <div className="grid overflow-hidden border border-gray-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#5a6eb4] p-8 text-white md:p-11"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Free registration</span><h2 className="mt-4 text-[32px] leading-[1.06] md:text-[42px]" style={{ fontWeight: 720 }}>Stay informed without the noise.</h2><div className="mt-9 space-y-7">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><Icon size={20} className="mt-1 shrink-0 text-white/75" /><div><h3 className="text-[16px]" style={{ fontWeight: 700 }}>{title}</h3><p className="mt-1 text-[13px] leading-[1.6] text-white/70">{text}</p></div></div>)}</div></div>
            <div className="p-8 md:p-11">{submitted ? <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><CheckCircle size={48} className="text-[#5a6eb4]" /><h2 className="mt-6 text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>You're on the list.</h2><p className="mt-3 max-w-[360px] text-[15px] leading-[1.65] text-[var(--slate-dark)]">Look out for your first edition of The DCR Newsletter.</p></div> : <><h2 className="text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>Subscribe to The DCR Newsletter</h2><p className="mt-3 text-[14px] leading-[1.65] text-[var(--slate-dark)]">It takes less than a minute.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-8"><label className="block text-[12px] font-bold text-[var(--navy-deep)]">First name<input required className="mt-2 w-full border border-gray-300 px-4 py-3.5 text-[15px] outline-none focus:border-[#5a6eb4]" /></label><label className="mt-5 block text-[12px] font-bold text-[var(--navy-deep)]">Email address<input required type="email" className="mt-2 w-full border border-gray-300 px-4 py-3.5 text-[15px] outline-none focus:border-[#5a6eb4]" /></label><label className="mt-5 block text-[12px] font-bold text-[var(--navy-deep)]">Company <span className="font-normal text-[var(--slate-medium)]">(optional)</span><input className="mt-2 w-full border border-gray-300 px-4 py-3.5 text-[15px] outline-none focus:border-[#5a6eb4]" /></label><label className="mt-6 flex items-start gap-3 text-[12px] leading-[1.55] text-[var(--slate-dark)]"><input required type="checkbox" className="mt-0.5 h-4 w-4 accent-[#5a6eb4]" />I would like to receive The DCR Newsletter and related updates.</label><button className="mt-7 w-full bg-[#5a6eb4] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Subscribe</button><p className="mt-4 text-center text-[10px] text-[var(--slate-medium)]">Unsubscribe at any time. Your information is handled in line with our privacy policy.</p></form></>}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
