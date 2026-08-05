import { ArrowUpRight, Building2, FileText, Globe, LogOut, Mail, Settings } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { pressReleases } from "../data/pressReleases";

export function PressReleaseDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { if (!user?.hasSubscription) navigate("/submit-press-release"); }, [user, navigate]);
  if (!user?.hasSubscription) return null;
  const profile = user.companyProfile;
  const expiry = user.subscriptionExpiry ? new Date(user.subscriptionExpiry).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "Not set";
  const companyRelease = pressReleases.find(release => release.company === profile?.companyName);

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <Navigation />
      <main>
        <header className="bg-[var(--navy-deep)] text-white"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-4 py-12 md:px-8 lg:flex-row lg:items-end lg:justify-between"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9eacd9]">Client workspace · Demo account</span><h1 className="mt-4 text-[42px] leading-[1] md:text-[58px]" style={{ fontWeight: 750 }}>Press Release Dashboard</h1><p className="mt-4 text-[15px] text-white/65">Signed in as {user.email}</p></div><button onClick={() => { logout(); navigate('/submit-press-release'); }} className="inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70"><LogOut size={15} />Log out</button></div></header>

        <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
          {profile && <section className="grid overflow-hidden border border-gray-200 bg-white lg:grid-cols-[320px_minmax(0,1fr)_300px]"><div className="flex items-center justify-center border-b border-gray-200 bg-[#eef1fa] p-8 lg:border-b-0 lg:border-r"><img src={profile.logo} alt={profile.companyName} className="max-h-[90px] max-w-full object-contain" /></div><div className="p-7 md:p-9"><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Company profile</span><h2 className="mt-3 text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>{profile.companyName}</h2><p className="mt-4 max-w-[700px] text-[14px] leading-[1.7] text-[var(--slate-dark)]">{profile.description}</p><div className="mt-5 flex flex-wrap gap-5 text-[11px] text-[var(--slate-medium)]">{profile.website && <span className="inline-flex items-center gap-2"><Globe size={13} />{profile.website}</span>}{profile.contactEmail && <span className="inline-flex items-center gap-2"><Mail size={13} />{profile.contactEmail}</span>}</div></div><div className="border-t border-gray-200 bg-[#f7f8fc] p-7 lg:border-l lg:border-t-0"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--slate-medium)]">Primary contact</span><strong className="mt-3 block text-[16px] text-[var(--navy-deep)]">{profile.contactName}</strong><span className="mt-2 block text-[13px] text-[var(--slate-dark)]">{profile.contactPhone}</span><Link to="/company-profile-setup" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]"><Settings size={14} />Edit profile</Link></div></section>}

          <section className="mt-8 grid gap-5 sm:grid-cols-3"><div className="border border-gray-200 bg-white p-6"><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">Credits remaining</span><strong className="mt-2 block text-[24px] text-[var(--navy-deep)]">5 of 6</strong><span className="mt-2 block text-[12px] text-[var(--slate-medium)]">One credit per published release</span></div><div className="border border-gray-200 bg-white p-6"><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">Credits valid until</span><strong className="mt-2 block text-[24px] text-[var(--navy-deep)]">{expiry}</strong><span className="mt-2 block text-[12px] text-[var(--slate-medium)]">Valid for 12 months from purchase</span></div><div className="border border-gray-200 bg-white p-6"><span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">Profile</span><strong className="mt-2 block text-[24px] text-[var(--navy-deep)]">Complete</strong><span className="mt-2 block text-[12px] text-[var(--slate-medium)]">Details pre-filled on submissions</span></div></section>

          <section className="mt-12 grid gap-6 lg:grid-cols-2"><Link to="/submit-press-release-form" className="group bg-[#5a6eb4] p-8 text-white md:p-10"><FileText size={24} /><h2 className="mt-6 text-[30px]" style={{ fontWeight: 720 }}>Post a Press Release</h2><p className="mt-3 max-w-[520px] text-[14px] leading-[1.65] text-white/70">Your company logo, company description and media-contact details will already be filled in.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em]">Create release <ArrowUpRight size={15} /></span></Link><Link to="/company-profile-setup" className="group border border-gray-200 bg-white p-8 md:p-10"><Building2 size={24} className="text-[#5a6eb4]" /><h2 className="mt-6 text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>Manage company details</h2><p className="mt-3 max-w-[520px] text-[14px] leading-[1.65] text-[var(--slate-dark)]">Update the reusable information attached to every company announcement.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Edit details <ArrowUpRight size={15} /></span></Link></section>

          {companyRelease && <section className="mt-12"><div className="mb-5 border-b border-gray-200 pb-5"><h2 className="text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>Recent activity</h2></div><Link to={`/press-release/${companyRelease.id}`} className="group grid overflow-hidden border border-gray-200 bg-white md:grid-cols-[260px_minmax(0,1fr)]"><img src={companyRelease.imageUrl} alt="" className="h-full min-h-[210px] w-full object-cover" /><div className="p-7"><span className="text-[10px] uppercase tracking-[0.12em] text-[var(--slate-medium)]">Published · {companyRelease.date}</span><h3 className="mt-3 text-[25px] leading-[1.1] text-[var(--navy-deep)] group-hover:text-[#5a6eb4]" style={{ fontWeight: 710 }}>{companyRelease.headline}</h3><p className="mt-3 text-[14px] leading-[1.65] text-[var(--slate-dark)]">{companyRelease.summary}</p></div></Link></section>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
