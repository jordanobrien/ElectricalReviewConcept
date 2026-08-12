import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Lock,
  LogOut,
  Mail,
  Plus,
  Send,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { AccountPressRelease, useAuth } from "../contexts/AuthContext";

function StatusBadge({ release }: { release: AccountPressRelease }) {
  if (release.status === "published") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
        <CheckCircle2 size={12} />
        Published
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 border border-[#5a6eb4]/25 bg-[#eef1fa] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">
      <Clock size={12} />
      In review
    </span>
  );
}

function RecentActivityCard({ release }: { release: AccountPressRelease }) {
  const content = (
    <>
      {release.imageUrl ? (
        <img src={release.imageUrl} alt="" className="h-full min-h-[210px] w-full object-cover" />
      ) : (
        <div className="flex min-h-[210px] items-center justify-center bg-[#eef1fa] p-8">
          {release.brandLogo ? (
            <img src={release.brandLogo} alt="" className="max-h-[70px] max-w-full object-contain" />
          ) : (
            <Building2 size={38} className="text-[#5a6eb4]" />
          )}
        </div>
      )}
      <div className="p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--slate-medium)]">
            {release.date}
          </span>
          <span className="border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--navy-deep)]">
            {release.brandName}
          </span>
          <StatusBadge release={release} />
        </div>
        <h3 className="mt-3 text-[25px] leading-[1.1] text-[var(--navy-deep)] group-hover:text-[#5a6eb4]" style={{ fontWeight: 710 }}>
          {release.headline}
        </h3>
        <p className="mt-3 text-[14px] leading-[1.65] text-[var(--slate-dark)]">
          {release.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em]">
          <span className="text-[var(--slate-medium)]">{release.category}</span>
          {release.locked && (
            <span className="inline-flex items-center gap-1.5 text-[var(--slate-medium)]">
              <Lock size={12} />
              Locked after publishing
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (release.articlePath) {
    return (
      <Link to={release.articlePath} className="group grid overflow-hidden border border-gray-200 bg-white md:grid-cols-[260px_minmax(0,1fr)]">
        {content}
      </Link>
    );
  }

  return (
    <article className="grid overflow-hidden border border-gray-200 bg-white md:grid-cols-[260px_minmax(0,1fr)]">
      {content}
    </article>
  );
}

export function PressReleaseDashboardPage() {
  const { user, logout, requestMoreCredits } = useAuth();
  const navigate = useNavigate();
  const [creditRequestState, setCreditRequestState] = useState<'idle' | 'sending' | 'submitted'>(
    user?.creditRequest ? 'submitted' : 'idle',
  );

  useEffect(() => {
    if (!user?.hasSubscription) navigate("/submit-press-release");
  }, [user, navigate]);

  useEffect(() => {
    setCreditRequestState(user?.creditRequest ? 'submitted' : 'idle');
  }, [user?.creditRequest]);

  if (!user?.hasSubscription) return null;

  const brands = user.brandProfiles.length ? user.brandProfiles : user.companyProfile ? [user.companyProfile] : [];
  const primaryBrand = user.companyProfile ?? brands[0];
  const expiry = user.subscriptionExpiry
    ? new Date(user.subscriptionExpiry).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "Not set";
  const publishedCount = user.pressReleaseHistory.filter((release) => release.status === "published").length;
  const recentActivity = user.pressReleaseHistory.slice(0, 4);

  const handleBuyMore = async () => {
    setCreditRequestState('sending');
    await requestMoreCredits();
    setCreditRequestState('submitted');
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <Navigation />
      <main>
        <header className="bg-[var(--navy-deep)] text-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-4 py-12 md:px-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9eacd9]">Client workspace · Demo account</span>
              <h1 className="mt-4 text-[42px] leading-[1] md:text-[58px]" style={{ fontWeight: 750 }}>Press Release Dashboard</h1>
              <p className="mt-4 text-[15px] text-white/65">Signed in as {user.email}</p>
            </div>
            <button onClick={() => { logout(); navigate('/submit-press-release'); }} className="inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
              <LogOut size={15} />
              Log out
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
          <section className="grid overflow-hidden border border-gray-200 bg-white lg:grid-cols-[320px_minmax(0,1fr)_300px]">
            <div className="border-b border-gray-200 bg-[#eef1fa] p-8 lg:border-b-0 lg:border-r">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Permanent account</span>
              <h2 className="mt-3 text-[28px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>
                {user.accountName || user.email}
              </h2>
              <p className="mt-4 text-[14px] leading-[1.7] text-[var(--slate-dark)]">
                One account can hold multiple reusable brand profiles for agency clients or business divisions.
              </p>
            </div>

            <div className="p-7 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Brand profiles</span>
                  <h2 className="mt-3 text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>
                    {brands.length} saved {brands.length === 1 ? "brand" : "brands"}
                  </h2>
                </div>
                <Link to="/company-profile-setup" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4] hover:border-[#5a6eb4]/45">
                  <Plus size={14} />
                  Add brand
                </Link>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {brands.map((brand) => (
                  <div key={brand.id} className="border border-gray-200 bg-[#f7f8fc] p-4">
                    <div className="flex h-20 items-center">
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.companyName} className="h-16 w-16 object-contain" />
                      ) : (
                        <Building2 size={24} className="text-[#5a6eb4]" />
                      )}
                    </div>
                    <strong className="mt-4 block text-[15px] leading-[1.25] text-[var(--navy-deep)]">
                      {brand.companyName}
                    </strong>
                    {brand.contactEmail && (
                      <span className="mt-2 block break-words text-[12px] text-[var(--slate-medium)]">
                        {brand.contactEmail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 bg-[#f7f8fc] p-7 lg:border-l lg:border-t-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--slate-medium)]">Primary contact</span>
              <strong className="mt-3 block text-[16px] text-[var(--navy-deep)]">{primaryBrand?.contactName || "Not set"}</strong>
              <span className="mt-2 block text-[13px] text-[var(--slate-dark)]">{primaryBrand?.contactPhone || "Add a phone number"}</span>
              <div className="mt-5 flex flex-col gap-2 text-[11px] text-[var(--slate-medium)]">
                {primaryBrand?.website && <span className="inline-flex items-center gap-2"><Globe size={13} />{primaryBrand.website}</span>}
                {primaryBrand?.contactEmail && <span className="inline-flex items-center gap-2"><Mail size={13} />{primaryBrand.contactEmail}</span>}
              </div>
              <Link to="/company-profile-setup" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">
                <Settings size={14} />
                Manage profiles
              </Link>
            </div>
          </section>

          <section className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="border border-gray-200 bg-white p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">Credits remaining</span>
              <strong className="mt-2 block text-[42px] leading-none text-[var(--navy-deep)]">{user.creditsRemaining}</strong>
              <button
                type="button"
                onClick={handleBuyMore}
                disabled={creditRequestState === 'sending' || creditRequestState === 'submitted'}
                className="mt-4 inline-flex items-center gap-2 bg-[#5a6eb4] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4b5fa5] disabled:cursor-not-allowed disabled:bg-[#9eacd9]"
              >
                {creditRequestState === 'sending' ? <Send size={14} /> : <ShoppingCart size={14} />}
                {creditRequestState === 'sending' ? "Submitting" : creditRequestState === 'submitted' ? "Request sent" : "Buy More"}
              </button>
              {creditRequestState === 'submitted' && (
                <p className="mt-3 text-[12px] leading-[1.55] text-emerald-700" role="status" aria-live="polite">
                  Request submitted. Someone will be in touch soon.
                </p>
              )}
            </div>
            <div className="border border-gray-200 bg-white p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">Credits valid until</span>
              <strong className="mt-2 block text-[24px] text-[var(--navy-deep)]">{expiry}</strong>
              <span className="mt-2 block text-[12px] text-[var(--slate-medium)]">Valid for 12 months from purchase</span>
            </div>
            <div className="border border-gray-200 bg-white p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">Published press releases</span>
              <strong className="mt-2 block text-[42px] leading-none text-[var(--navy-deep)]">{publishedCount}</strong>
              <span className="mt-3 block text-[12px] text-[var(--slate-medium)]">Published releases are locked from further edits</span>
            </div>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-2">
            <Link to="/submit-press-release-form" className="group bg-[#5a6eb4] p-8 text-white md:p-10">
              <FileText size={24} />
              <h2 className="mt-6 text-[30px]" style={{ fontWeight: 720 }}>Post a Press Release</h2>
              <p className="mt-3 max-w-[520px] text-[14px] leading-[1.65] text-white/70">
                Choose the brand profile for the announcement, then submit it for review with the right logo and media-contact details attached.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em]">Create release <ArrowUpRight size={15} /></span>
            </Link>
            <Link to="/company-profile-setup" className="group border border-gray-200 bg-white p-8 md:p-10">
              <Building2 size={24} className="text-[#5a6eb4]" />
              <h2 className="mt-6 text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>Manage brand profiles</h2>
              <p className="mt-3 max-w-[520px] text-[14px] leading-[1.65] text-[var(--slate-dark)]">
                Keep permanent profiles for each client brand under this account so submissions stay consistent.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Edit profiles <ArrowUpRight size={15} /></span>
            </Link>
          </section>

          <section className="mt-12">
            <div className="mb-5 border-b border-gray-200 pb-5">
              <h2 className="text-[30px] text-[var(--navy-deep)]" style={{ fontWeight: 720 }}>Recent activity</h2>
            </div>
            <div className="grid gap-4">
              {recentActivity.length ? (
                recentActivity.map((release) => <RecentActivityCard key={release.id} release={release} />)
              ) : (
                <div className="border border-gray-200 bg-white p-8 text-[14px] text-[var(--slate-medium)]">
                  No press releases have been submitted yet.
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
