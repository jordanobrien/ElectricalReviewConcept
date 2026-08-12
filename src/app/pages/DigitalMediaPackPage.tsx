import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowUpRight, BarChart3, BookOpen, Check, Download, Mail, Monitor, Presentation, Sparkles, Users, Video } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

type Objective = "lead-generation" | "thought-leadership" | "brand-awareness";

interface Opportunity {
  id: string;
  title: string;
  label: string;
  description: string;
  icon: typeof Monitor;
  objectives: Objective[];
  highlights: string[];
}

const objectives: Array<{ id: Objective; label: string; description: string }> = [
  { id: "lead-generation", label: "Lead generation", description: "Create measurable response and build opted-in prospect data." },
  { id: "thought-leadership", label: "Thought leadership", description: "Own a complex issue with credible, expert-led editorial formats." },
  { id: "brand-awareness", label: "Brand awareness", description: "Build sustained visibility with the people shaping infrastructure." },
];

const opportunities: Opportunity[] = [
  { id: "trend-reports", title: "Trend reports", label: "Independent research", description: "Sponsor a deep editorial report around the defining challenges facing data centres.", icon: BarChart3, objectives: ["lead-generation", "thought-leadership", "brand-awareness"], highlights: ["Exclusive co-branded sponsorship", "Six-week multi-channel campaign", "Access to GDPR-compliant leads"] },
  { id: "webinars", title: "Webinars", label: "Live expertise", description: "Bring experts and prospects together through editor-led panels or a standalone session.", icon: Presentation, objectives: ["lead-generation", "thought-leadership", "brand-awareness"], highlights: ["Live Q&A, polling and chat", "Dedicated audience promotion", "On-demand lead capture"] },
  { id: "video-interviews", title: "In the Spotlight", label: "Video interviews", description: "Turn a subject-matter expert into an editorial video series built for web, email and social.", icon: Video, objectives: ["thought-leadership", "brand-awareness"], highlights: ["Editor-led interview", "Short-form social edits", "Website article and promotion"] },
  { id: "ebooks", title: "eBooks & whitepapers", label: "Content partnerships", description: "Create or amplify useful long-form content with distribution across the DCR community.", icon: BookOpen, objectives: ["lead-generation", "thought-leadership", "brand-awareness"], highlights: ["Editorial and design support", "Newsletter and social promotion", "Ongoing gated downloads"] },
  { id: "virtual-conferences", title: "Virtual conferences", label: "Critical Insight", description: "Take a prime speaking role in an interactive programme tackling the sector's biggest issues.", icon: Users, objectives: ["lead-generation", "thought-leadership", "brand-awareness"], highlights: ["Speaking and panel opportunities", "Full event marketing campaign", "GDPR-compliant delegate data"] },
  { id: "website", title: "Website & content hubs", label: "Digital display", description: "Pair high-impact display with sponsored editorial and exclusive topic ownership.", icon: Monitor, objectives: ["brand-awareness"], highlights: ["Billboards, leaderboards and MPUs", "Exclusive content-hub sponsorship", "Sponsored and native stories"] },
  { id: "print", title: "Print & insights", label: "Magazine and surveys", description: "Combine the authority of print with original audience research and editorial interpretation.", icon: BookOpen, objectives: ["lead-generation", "thought-leadership", "brand-awareness"], highlights: ["15,445 readers per issue", "Cover, spread and feature options", "Co-branded survey insight"] },
  { id: "newsletters", title: "Newsletters & HTMLs", label: "Direct audience", description: "Reach DCR's core community through trusted newsletters and dedicated campaign sends.", icon: Mail, objectives: ["lead-generation", "brand-awareness"], highlights: ["13,380 newsletter circulation", "14,365 third-party email database", "Sponsored content and display"] },
];

const SESSION_KEY = "dcr:media-pack-access";

const tradeInterests = [["UPS", 95], ["Cooling", 92], ["Telecoms / 5G", 92], ["Data centre design & build", 90], ["AI & machine learning", 87], ["Colocation & outsourcing", 85]] as const;
const audienceBrands = ["ABB", "Schneider Electric", "Siemens", "Vertiv", "Legrand", "IBM", "CBRE", "BlackRock", "Kao Data", "Mitsubishi Electric", "Jacobs", "WSP"];

function FormatVisual({ id }: { id: string }) {
  if (id === "trend-reports") return <div className="grid min-h-[520px] gap-5 bg-[#dde2ef] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10"><div className="flex min-h-[360px] flex-col justify-between bg-[#273960] p-7 text-white shadow-2xl"><span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#f0bf64]">DCR independent research</span><div><span className="text-[12px] text-white/55">Sponsored by your brand</span><h4 className="mt-3 text-[34px] leading-[1.02]" style={{ fontWeight: 740 }}>Powering the data centres of the future</h4></div><div className="h-1 w-20 bg-[#d8a447]" /></div><div className="flex flex-col justify-center"><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Six-week campaign</span>{["Editorial report", "4 dedicated HTMLs", "4 newsletter features", "60-day MPU", "Qualified lead delivery"].map((item, index) => <div key={item} className="grid grid-cols-[28px_1fr] gap-3 border-b border-[#bcc5da] py-4 text-[13px]"><span className="font-bold text-[#5a6eb4]">0{index + 1}</span>{item}</div>)}</div></div>;
  if (id === "webinars") return <div className="min-h-[520px] bg-[#11182a] p-6 text-white md:p-10"><div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9eacd9]">DCR Live</span><span className="bg-red-500 px-3 py-1 text-[9px] font-bold uppercase">On air</span></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Editor", "Your expert", "Industry guest", "Industry guest"].map((role, index) => <div key={role} className="flex aspect-video items-end bg-[#26364f] p-4"><div><span className="grid h-10 w-10 place-items-center bg-[#5a6eb4] text-[12px] font-bold">{["ED", "YE", "IG", "IG"][index]}</span><span className="mt-2 block text-[11px] text-white/65">{role}</span></div></div>)}</div><div className="mt-5 grid grid-cols-3 border-y border-white/15 py-4 text-center"><div><strong className="block text-[24px]">60</strong><span className="text-[9px] uppercase text-white/50">Minutes</span></div><div><strong className="block text-[24px]">15</strong><span className="text-[9px] uppercase text-white/50">Min Q&A</span></div><div><strong className="block text-[24px]">12</strong><span className="text-[9px] uppercase text-white/50">Months online</span></div></div></div>;
  if (id === "video-interviews") return <div className="grid min-h-[520px] bg-[#e9ebf2] p-6 md:grid-cols-[1.25fr_0.75fr] md:p-10"><div className="relative flex min-h-[360px] items-center justify-center bg-[#11182a] text-white"><span className="grid h-20 w-20 place-items-center rounded-full bg-white text-[#5a6eb4]"><Video size={28} /></span><div className="absolute inset-x-5 bottom-5"><span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#d8a447]">In the Spotlight</span><h4 className="mt-2 text-[24px]">A conversation with your industry expert</h4></div></div><div className="flex flex-col justify-center bg-white p-6"><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">One interview becomes</span>{[["01", "8-10 minute feature"], ["02", "Three social edits"], ["03", "1,200-word article"], ["04", "Newsletter promotion"]].map(([number, label]) => <div key={number} className="flex gap-3 border-b border-gray-200 py-4 text-[12px]"><strong className="text-[#5a6eb4]">{number}</strong>{label}</div>)}</div></div>;
  if (id === "ebooks") return <div className="grid min-h-[520px] place-items-center bg-[#dfe4ef] p-8"><div className="grid w-full max-w-[680px] gap-8 md:grid-cols-[260px_1fr] md:items-center"><div className="relative h-[340px]"><div className="absolute left-8 top-3 h-[310px] w-[210px] rotate-6 bg-[#5a6eb4]/40" /><div className="absolute left-2 top-0 flex h-[310px] w-[210px] flex-col justify-between bg-[#273960] p-6 text-white shadow-2xl"><span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#f0bf64]">DCR + Your brand</span><h4 className="text-[28px] leading-[1.04]">A practical guide to resilient infrastructure</h4><BookOpen size={25} /></div></div><div><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Distribution engine</span>{["Editorial creation & design", "14,365 email subscribers", "13,380 newsletter circulation", "Social promotion", "Always-on gated download"].map((item) => <div key={item} className="flex items-center gap-3 border-b border-[#bcc5da] py-4 text-[13px]"><Check size={15} className="text-[#5a6eb4]" />{item}</div>)}</div></div></div>;
  if (id === "virtual-conferences") return <div className="min-h-[520px] bg-[#11182a] p-7 text-white md:p-10"><div className="flex flex-wrap items-end justify-between gap-5"><div><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f0bf64]">Critical Insight</span><h4 className="mt-2 text-[38px] leading-none" style={{ fontWeight: 750 }}>Three days. One live sector conversation.</h4></div><div><strong className="block text-[46px] text-[#d8a447]">374</strong><span className="text-[9px] uppercase text-white/50">2024 registrations</span></div></div><div className="mt-10 grid gap-3 md:grid-cols-3">{[["Day 01", "Power & capacity"], ["Day 02", "AI infrastructure"], ["Day 03", "Sustainable growth"]].map(([day, topic], index) => <div key={day} className="border border-white/15 p-5"><span className="text-[10px] font-bold text-[#9eacd9]">{day}</span><strong className="mt-8 block text-[20px]">{topic}</strong><span className="mt-4 block text-[11px] text-white/50">Keynote {index + 1} · Panel · Live Q&A</span></div>)}</div><div className="mt-6 flex flex-wrap gap-2">{["Prime speaking platform", "Delegate data", "55,000 campaign reach", "Speaker profile"].map((item) => <span key={item} className="border border-white/15 px-3 py-2 text-[10px] text-white/65">{item}</span>)}</div></div>;
  if (id === "website") return <div className="min-h-[520px] bg-[#e9ebf2] p-5 md:p-8"><div className="mx-auto max-w-[760px] border border-gray-300 bg-white shadow-xl"><div className="flex h-12 items-center justify-between bg-[#5a6eb4] px-4 text-white"><img src="/dcr-logo-white.svg" alt="" className="h-8 w-auto" /><span className="text-[9px] uppercase">Content hub</span></div><div className="p-4"><div className="flex h-14 items-center justify-center bg-[#eef1fa] text-[9px] font-bold uppercase text-[#5a6eb4]">Leaderboard · Your brand</div><div className="mt-4 grid gap-4 sm:grid-cols-[1fr_220px]"><div><div className="h-40 bg-[#273960] p-5 text-white"><span className="text-[9px] uppercase text-[#d8a447]">Sponsored top story</span><h4 className="mt-10 text-[22px]">Own the topic your audience cares about</h4></div><div className="mt-3 grid grid-cols-2 gap-3"><div className="h-24 bg-gray-100" /><div className="h-24 bg-gray-100" /></div></div><div className="flex h-[250px] items-center justify-center bg-[#eef1fa] text-center text-[10px] font-bold uppercase text-[#5a6eb4]">MPU<br />300 × 250</div></div></div></div></div>;
  if (id === "print") return <div className="grid min-h-[520px] gap-8 bg-[#dfe4ef] p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10"><div className="flex min-h-[370px] flex-col justify-between bg-white p-6 shadow-2xl"><span className="self-start bg-[#5a6eb4] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white">Data Centre Review</span><div><span className="text-[9px] font-bold uppercase text-[#5a6eb4]">Biannual magazine</span><h4 className="mt-3 text-[31px] leading-[1.02]">The trusted liquid cooling experts</h4></div><strong className="text-[38px] text-[#5a6eb4]">15,445</strong><span className="text-[9px] uppercase text-gray-500">Readers per issue</span></div><div className="flex flex-col justify-center"><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Audience survey</span><h4 className="mt-3 text-[28px]">Turn first-party responses into original insight.</h4><div className="mt-7 space-y-5">{[["Awareness", 82], ["Consideration", 67], ["Purchase intent", 48]].map(([label, value]) => <div key={label as string}><div className="mb-2 flex justify-between text-[11px]"><span>{label}</span><strong>{value}%</strong></div><div className="h-2 bg-white"><div className="h-full bg-[#5a6eb4]" style={{ width: `${value}%` }} /></div></div>)}</div></div></div>;
  return <div className="grid min-h-[520px] gap-6 bg-[#e9ebf2] p-7 md:grid-cols-[1fr_0.8fr] md:p-10"><div className="bg-white shadow-xl"><div className="flex h-12 items-center justify-between bg-[#5a6eb4] px-4"><img src="/dcr-logo-white.svg" alt="" className="h-8 w-auto" /><span className="text-[9px] uppercase text-white/70">Editor's newsletter</span></div><div className="p-5"><div className="h-16 bg-[#eef1fa]" /><div className="mt-5 border-l-4 border-[#d8a447] pl-4"><span className="text-[9px] font-bold uppercase text-[#5a6eb4]">Sponsored content</span><h4 className="mt-2 text-[22px]">Your story, delivered in an editorial context</h4></div><div className="mt-5 grid grid-cols-[120px_1fr] gap-4"><div className="h-24 bg-[#273960]" /><div className="space-y-3"><div className="h-3 bg-gray-200" /><div className="h-3 w-4/5 bg-gray-200" /><div className="h-3 w-3/5 bg-gray-200" /></div></div></div></div><div className="flex flex-col justify-center"><div className="border-y border-[#bcc5da] py-6"><strong className="block text-[42px] text-[#5a6eb4]">13,380</strong><span className="text-[10px] font-bold uppercase text-gray-500">Core newsletter audience</span></div><div className="border-b border-[#bcc5da] py-6"><strong className="block text-[42px] text-[#5a6eb4]">14,365</strong><span className="text-[10px] font-bold uppercase text-gray-500">Third-party email database</span></div></div></div>;
}

export function DigitalMediaPackPage() {
  const [hasAccess, setHasAccess] = useState(() => typeof window !== "undefined" && window.sessionStorage.getItem(SESSION_KEY) === "granted");
  const [fullName, setFullName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [objective, setObjective] = useState<Objective>("lead-generation");
  const [activeOpportunityId, setActiveOpportunityId] = useState(opportunities[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!hasAccess) return;
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [hasAccess]);

  const recommended = useMemo(() => opportunities.filter((item) => item.objectives.includes(objective)), [objective]);
  const activeOpportunity = opportunities.find((item) => item.id === activeOpportunityId) ?? opportunities[0];

  const handleAccess = async (event: FormEvent) => {
    event.preventDefault();
    setFormError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/media-pack-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, businessEmail, companyName }),
      });
      const result = await response.json() as { accessGranted?: boolean; message?: string };
      if (!response.ok || !result.accessGranted) throw new Error(result.message || "We could not open the media pack.");
      window.sessionStorage.setItem(SESSION_KEY, "granted");
      setHasAccess(true);
      window.scrollTo({ top: 0 });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "We could not open the media pack.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasAccess) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#11182a] text-white">
        <img src="/media-pack/cover-background.jpg" alt="Illuminated data centre aisle" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#11182a]/65" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex items-center justify-between px-5 py-5 md:px-10">
            <Link to="/advertise" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/75 hover:text-white"><ArrowLeft size={16} /> Back to advertising</Link>
            <img src="/dcr-logo-white.svg" alt="Data Centre Review" className="h-12 w-auto" />
          </div>
          <div className="mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-10 px-5 py-10 md:px-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-20">
            <div className="max-w-[760px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8a447]">Digital Media Pack 2025</span>
              <h1 className="mt-5 text-[46px] leading-[0.98] md:text-[72px]" style={{ fontWeight: 760 }}>Ideas made visible. Expertise made influential.</h1>
              <p className="mt-6 max-w-[650px] text-[16px] leading-[1.7] text-white/75 md:text-[18px]">Explore the audience, formats and partnerships that connect your brand with the people building and operating critical digital infrastructure.</p>
            </div>
            <form onSubmit={handleAccess} className="bg-white p-6 text-[var(--navy-deep)] shadow-2xl md:p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Open the experience</span>
              <h2 className="mt-3 text-[27px] leading-[1.1]" style={{ fontWeight: 720 }}>Enter your details to continue.</h2>
              <div className="mt-7 grid gap-5">
                <label className="text-[13px] font-semibold">Full Name*<input required autoComplete="name" value={fullName} onChange={(event) => setFullName(event.target.value)} className="mt-2 w-full border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]" /></label>
                <label className="text-[13px] font-semibold">Business Email*<input required type="email" autoComplete="email" value={businessEmail} onChange={(event) => setBusinessEmail(event.target.value)} className="mt-2 w-full border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]" /></label>
                <label className="text-[13px] font-semibold">Company Name*<input required autoComplete="organization" value={companyName} onChange={(event) => setCompanyName(event.target.value)} className="mt-2 w-full border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#5a6eb4]" /></label>
              </div>
              {formError && <p className="mt-4 text-[12px] text-red-600" role="alert">{formError}</p>}
              <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#5a6eb4] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#40528f] disabled:opacity-60">{isSubmitting ? "Opening media pack" : "Enter digital media pack"}<ArrowUpRight size={16} /></button>
              <p className="mt-4 text-[10px] leading-[1.55] text-[var(--slate-medium)]">By continuing, you agree that DCR may contact you about relevant advertising opportunities. See our <Link to="/privacy" className="underline">Privacy Policy</Link>.</p>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[var(--navy-deep)]">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/15"><div className="h-full bg-[#d8a447] transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} /></div>
      <header className="relative flex min-h-[86vh] items-end overflow-hidden bg-[#11182a] text-white">
        <img src="/media-pack/cover-background.jpg" alt="Illuminated data centre aisle" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#11182a]/62" />
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 md:px-10"><Link to="/advertise" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/75 hover:text-white"><ArrowLeft size={16} /> Advertise with DCR</Link><img src="/dcr-logo-white.svg" alt="Data Centre Review" className="h-12 w-auto" /></div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0bf64]">Digital Media Pack 2025</span>
          <h1 className="mt-5 max-w-[980px] text-[48px] leading-[0.96] md:text-[78px]" style={{ fontWeight: 760 }}>Shape the conversation around critical infrastructure.</h1>
          <div className="mt-8 flex flex-wrap items-center gap-5"><a href="#audience" className="inline-flex items-center gap-2 bg-white px-5 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#11182a]">Explore the audience <ArrowDown size={15} /></a><span className="text-[12px] text-white/65">55,000 total reach across DCR products</span></div>
        </div>
      </header>

      <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur" aria-label="Media pack sections"><div className="mx-auto flex max-w-[1440px] items-center gap-7 overflow-x-auto px-5 py-4 md:px-10">{[["Audience", "#audience"], ["Objectives", "#objectives"], ["Formats", "#formats"], ["Plan", "#plan"]].map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)] hover:text-[#5a6eb4]">{label}</a>)}<a href="/media-pack/dcr-media-pack-2025.pdf" target="_blank" rel="noreferrer" className="ml-auto inline-flex whitespace-nowrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">PDF <Download size={14} /></a></div></nav>

      <main>
        <section id="audience" className="scroll-mt-20 bg-[#f5f6fa] py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">The audience</span><h2 className="mt-4 text-[38px] leading-[1.02] md:text-[54px]" style={{ fontWeight: 740 }}>Scale with specialist influence.</h2></div><p className="max-w-[760px] text-[17px] leading-[1.75] text-[var(--slate-dark)]">DCR connects technology partners with directors, project leaders, consultants and operators making consequential infrastructure decisions.</p></div>
            <div className="mt-12 grid border-y border-gray-300 sm:grid-cols-2 lg:grid-cols-4">{[["55,000", "Total product reach"], ["15,265", "Total database"], ["13,380", "Newsletter circulation"], ["31%", "CEOs, directors & founders"]].map(([value, label]) => <div key={label} className="overflow-visible border-b border-gray-300 px-5 py-8 sm:border-r md:px-6 md:py-9 lg:border-b-0 last:border-r-0"><strong className="inline-flex min-h-[58px] items-center whitespace-nowrap text-[38px] leading-[1.2] tabular-nums text-[#5a6eb4] md:text-[46px]">{value}</strong><span className="mt-2 block text-[10px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[var(--slate-medium)]">{label}</span></div>)}</div>
            <div className="mt-12 grid gap-0 border border-gray-200 bg-white lg:grid-cols-[1.15fr_0.85fr]">
              <div className="border-b border-gray-200 p-6 md:p-9 lg:border-b-0 lg:border-r"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">Areas of trade by popularity</span><div className="mt-7 grid gap-5">{tradeInterests.map(([label, value]) => <div key={label}><div className="mb-2 flex items-center justify-between text-[11px]"><span className="font-semibold">{label}</span><strong className="text-[#5a6eb4]">{value}%</strong></div><div className="h-2 bg-[#eef1fa]"><div className="h-full bg-[#5a6eb4]" style={{ width: `${value}%` }} /></div></div>)}</div></div>
              <div className="p-6 md:p-9"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">Most popular job roles</span><div className="mt-6 grid grid-cols-3 gap-px bg-gray-200"><div className="bg-[#273960] p-5 text-white"><strong className="text-[32px]">31%</strong><span className="mt-2 block text-[9px] uppercase leading-[1.4] text-white/60">CEOs, directors & founders</span></div><div className="bg-[#eef1fa] p-5"><strong className="text-[32px] text-[#5a6eb4]">15%</strong><span className="mt-2 block text-[9px] uppercase leading-[1.4] text-gray-500">Project managers</span></div><div className="bg-[#eef1fa] p-5"><strong className="text-[32px] text-[#5a6eb4]">12%</strong><span className="mt-2 block text-[9px] uppercase leading-[1.4] text-gray-500">Consultants</span></div></div><span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">Teams in the community</span><div className="mt-4 flex flex-wrap gap-2">{audienceBrands.map((brand) => <span key={brand} className="border border-gray-200 px-3 py-2 text-[10px] font-semibold text-[var(--slate-dark)]">{brand}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="objectives" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">Start with the outcome</span><h2 className="mt-4 max-w-[850px] text-[38px] leading-[1.03] md:text-[54px]" style={{ fontWeight: 740 }}>What should your campaign achieve?</h2>
            <div className="mt-9 grid gap-2 lg:grid-cols-3" role="tablist" aria-label="Campaign objective">{objectives.map((item) => <button key={item.id} type="button" role="tab" aria-selected={objective === item.id} onClick={() => setObjective(item.id)} className={`min-h-[145px] border p-6 text-left transition-colors ${objective === item.id ? "border-[#5a6eb4] bg-[#5a6eb4] text-white" : "border-gray-200 bg-white hover:border-[#5a6eb4]/50"}`}><span className="text-[18px]" style={{ fontWeight: 700 }}>{item.label}</span><span className={`mt-3 block text-[13px] leading-[1.6] ${objective === item.id ? "text-white/72" : "text-[var(--slate-medium)]"}`}>{item.description}</span></button>)}</div>
            <div className="mt-10 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">{recommended.map((item) => { const Icon = item.icon; return <button key={item.id} type="button" onClick={() => { setActiveOpportunityId(item.id); document.querySelector("#formats")?.scrollIntoView({ behavior: "smooth" }); }} className="group min-h-[210px] bg-[#f7f8fc] p-6 text-left hover:bg-white"><Icon size={21} className="text-[#5a6eb4]" /><span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{item.label}</span><strong className="mt-2 block text-[20px] leading-[1.15] group-hover:text-[#5a6eb4]">{item.title}</strong><span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">Explore <ArrowUpRight size={14} /></span></button>; })}</div>
          </div>
        </section>

        <section id="formats" className="scroll-mt-20 bg-[#11182a] py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9eacd9]">Format explorer</span><h2 className="mt-4 text-[38px] leading-[1.03] md:text-[54px]" style={{ fontWeight: 740 }}>Build across every touchpoint.</h2></div><span className="text-[12px] text-white/55">Select a format to explore</span></div>
            <div className="mt-10 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Media formats">{opportunities.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={activeOpportunity.id === item.id} onClick={() => setActiveOpportunityId(item.id)} className={`min-w-[150px] border px-4 py-3 text-left ${activeOpportunity.id === item.id ? "border-[#d8a447] bg-[#d8a447] text-[#11182a]" : "border-white/15 text-white/70 hover:border-white/45"}`}><span className="text-[9px] font-bold uppercase tracking-[0.12em]">0{index + 1}</span><span className="mt-1 block text-[12px] font-semibold">{item.title}</span></button>)}</div>
            <div className="mt-7 grid gap-0 overflow-hidden bg-white text-[var(--navy-deep)] lg:grid-cols-[1.35fr_0.65fr]">
              <FormatVisual id={activeOpportunity.id} />
              <div className="flex flex-col justify-center p-7 md:p-10"><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{activeOpportunity.label}</span><h3 className="mt-3 text-[31px] leading-[1.03] md:text-[40px]" style={{ fontWeight: 730 }}>{activeOpportunity.title}</h3><p className="mt-5 text-[14px] leading-[1.7] text-[var(--slate-dark)]">{activeOpportunity.description}</p><ul className="mt-7 grid gap-4">{activeOpportunity.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3 text-[13px] leading-[1.5]"><span className="mt-0.5 grid h-5 w-5 flex-none place-items-center bg-[#eef1fa] text-[#5a6eb4]"><Check size={13} /></span>{highlight}</li>)}</ul><Link to="/contact" className="mt-8 inline-flex items-center gap-2 self-start bg-[#5a6eb4] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white">Discuss this format <ArrowUpRight size={15} /></Link></div>
            </div>
          </div>
        </section>

        <section id="plan" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><span className="inline-flex h-12 w-12 items-center justify-center bg-[#eef1fa] text-[#5a6eb4]"><Sparkles size={21} /></span><h2 className="mt-6 text-[38px] leading-[1.03] md:text-[54px]" style={{ fontWeight: 740 }}>Your starting shortlist.</h2><p className="mt-5 text-[15px] leading-[1.7] text-[var(--slate-dark)]">Based on your selected objective, these formats create a strong first campaign architecture. The commercial team can shape timing, editorial scope and channel mix around your brief.</p></div>
            <div className="border-y border-gray-200">{recommended.slice(0, 3).map((item, index) => <button key={item.id} type="button" onClick={() => { setActiveOpportunityId(item.id); document.querySelector("#formats")?.scrollIntoView({ behavior: "smooth" }); }} className="grid w-full grid-cols-[48px_minmax(0,1fr)_24px] items-center gap-4 border-b border-gray-200 py-6 text-left last:border-b-0"><span className="text-[18px] font-bold text-[#5a6eb4]/50">0{index + 1}</span><span><strong className="block text-[18px]">{item.title}</strong><span className="mt-1 block text-[12px] text-[var(--slate-medium)]">{item.label}</span></span><ArrowUpRight size={17} className="text-[#5a6eb4]" /></button>)}</div>
          </div>
        </section>

        <section className="bg-[#5a6eb4] py-14 text-white md:py-20"><div className="mx-auto grid max-w-[1440px] gap-8 px-5 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Make the next move</span><h2 className="mt-3 max-w-[850px] text-[35px] leading-[1.05] md:text-[48px]" style={{ fontWeight: 730 }}>Turn attention into a campaign with purpose.</h2></div><div className="flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">Talk to the team <ArrowUpRight size={15} /></Link><a href="/media-pack/dcr-media-pack-2025.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/35 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white">Download PDF <Download size={15} /></a></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
