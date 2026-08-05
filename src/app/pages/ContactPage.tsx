import { Building2, CheckCircle, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const teams = [
  { role: "Editorial", name: "Jordan O'Brien", title: "Managing Editor", text: "Story ideas, expert commentary and editorial contributions." },
  { role: "Sales", name: "Tom Bell", title: "Group Commercial Manager", text: "Advertising, partnerships and campaign planning." },
  { role: "Publishing", name: "Wayne Darroch", title: "Group Publisher", text: "Publishing partnerships and strategic enquiries." },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <header className="bg-[var(--navy-deep)] text-white"><div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24"><h1 className="text-[48px] leading-[0.96] md:text-[72px]" style={{ fontWeight: 750 }}>Contact Data Centre Review</h1><p className="mt-7 max-w-[820px] text-[17px] leading-[1.75] text-white/75 md:text-[20px]">Talk to the editorial, commercial or publishing team about coverage, campaigns and opportunities across the DCR portfolio.</p></div></header>

        <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-px bg-gray-200 md:grid-cols-3">{teams.map(team => <article key={team.role} className="bg-white p-7 md:p-9"><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{team.role}</span><h2 className="mt-4 text-[25px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>{team.name}</h2><p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--slate-medium)]">{team.title}</p><p className="mt-5 text-[14px] leading-[1.7] text-[var(--slate-dark)]">{team.text}</p><a href="#enquiry" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Send an enquiry <Mail size={14} /></a></article>)}</div>
        </section>

        <section id="enquiry" className="bg-[#f7f8fc] py-16 md:py-24"><div className="mx-auto grid max-w-[1440px] gap-12 px-4 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">General enquiries</span><h2 className="mt-4 text-[36px] leading-[1.05] text-[var(--navy-deep)] md:text-[48px]" style={{ fontWeight: 720 }}>How can we help?</h2><p className="mt-5 text-[15px] leading-[1.75] text-[var(--slate-dark)]">Choose the relevant team and send the details. We’ll make sure your message reaches the right person.</p><div className="mt-9 border-t border-gray-200 pt-7"><Building2 size={20} className="text-[#5a6eb4]" /><p className="mt-3 text-[14px] leading-[1.7] text-[var(--slate-dark)]">Data Centre Review<br />SJP Business Media<br />37 Lombard Street<br />London EC3V 9BQ</p></div></div>
          <div className="border border-gray-200 bg-white p-7 md:p-10">{submitted ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center"><CheckCircle size={44} className="text-[#5a6eb4]" /><h3 className="mt-5 text-[28px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>Thanks—we've received your enquiry.</h3><p className="mt-3 text-[15px] text-[var(--slate-dark)]">A member of the DCR team will be in touch.</p><button onClick={() => setSubmitted(false)} className="mt-7 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Send another</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="grid gap-5 sm:grid-cols-2"><label className="text-[12px] font-bold text-[var(--navy-deep)]">Name<input required className="mt-2 w-full border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]" /></label><label className="text-[12px] font-bold text-[var(--navy-deep)]">Email<input required type="email" className="mt-2 w-full border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]" /></label></div><label className="mt-5 block text-[12px] font-bold text-[var(--navy-deep)]">Team<select className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]"><option>Editorial</option><option>Sales</option><option>Publishing</option><option>General enquiry</option></select></label><label className="mt-5 block text-[12px] font-bold text-[var(--navy-deep)]">Message<textarea required rows={7} className="mt-2 w-full resize-none border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]" /></label><button className="mt-6 inline-flex items-center gap-2 bg-[#5a6eb4] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Send enquiry <Send size={15} /></button></form>}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
