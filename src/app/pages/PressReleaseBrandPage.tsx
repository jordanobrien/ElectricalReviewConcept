import { ArrowLeft, ArrowUpRight, Building2, Mail, Phone } from "lucide-react";
import { Link, useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { getPublicBrandById } from "../data/brandProfiles";
import { pressReleases } from "../data/pressReleases";

export function PressReleaseBrandPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const { user } = useAuth();
  const brand = user?.brandProfiles.find((item) => item.id === brandId)
    ?? (brandId ? getPublicBrandById(brandId) : undefined);

  if (!brand) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="mx-auto max-w-[1440px] px-4 py-16 md:px-8">
          <h1 className="text-[36px] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>Brand not found</h1>
          <Link to="/press-releases" className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]"><ArrowLeft size={16} />Back to press releases</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const accountReleases = (user?.pressReleaseHistory ?? []).filter(
    (release) => release.brandId === brand.id && release.status === "published",
  );
  const staticReleases = pressReleases.filter(
    (release) => release.company.toLowerCase() === brand.companyName.toLowerCase(),
  );
  const associatedReleases = [
    ...staticReleases,
    ...accountReleases.filter((release) => !staticReleases.some((item) => item.id === release.id)),
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="border-b border-gray-200 bg-[#f7f8fc]">
          <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
            <Link to="/press-releases" className="mb-9 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]"><ArrowLeft size={15} />Press release hub</Link>
            <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">Brand Profile</span>
                <h1 className="mt-4 text-[44px] leading-[0.98] text-[var(--navy-deep)] md:text-[64px]" style={{ fontWeight: 750 }}>{brand.companyName}</h1>
                {brand.description && <p className="mt-6 max-w-[780px] text-[17px] leading-[1.75] text-[var(--slate-dark)]">{brand.description}</p>}
                {brand.website && (
                  <a href={brand.website} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 border border-[#5a6eb4] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4] transition-colors hover:bg-[#5a6eb4] hover:text-white">
                    Visit website <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
              <div className="border border-gray-200 bg-white p-7">
                <div className="flex min-h-44 items-center justify-center border border-gray-100 bg-white p-4">
                  {brand.logo ? <img src={brand.logo} alt={brand.companyName + " logo"} className="h-36 w-36 object-contain" /> : <Building2 size={52} className="text-[#5a6eb4]" />}
                </div>
                {(brand.contactName || brand.contactEmail || brand.contactPhone) && (
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--slate-medium)]">Press Contact</span>
                    {brand.contactName && <strong className="mt-3 block text-[16px] text-[var(--navy-deep)]">{brand.contactName}</strong>}
                    {brand.contactEmail && <a href={"mailto:" + brand.contactEmail} className="mt-3 flex items-center gap-2 text-[13px] text-[#5a6eb4] hover:underline"><Mail size={14} />{brand.contactEmail}</a>}
                    {brand.contactPhone && <a href={"tel:" + brand.contactPhone} className="mt-2 flex items-center gap-2 text-[13px] text-[var(--slate-dark)]"><Phone size={14} />{brand.contactPhone}</a>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
          <div className="flex items-end justify-between gap-6 border-b border-gray-200 pb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">From {brand.companyName}</span>
              <h2 className="mt-2 text-[32px] leading-tight text-[var(--navy-deep)] md:text-[42px]" style={{ fontWeight: 700 }}>Press Releases</h2>
            </div>
            <span className="text-[12px] text-[var(--slate-medium)]">{associatedReleases.length} published</span>
          </div>
          {associatedReleases.length ? (
            <div>
              {associatedReleases.map((release) => {
                const href = "articlePath" in release && release.articlePath ? release.articlePath : "/press-release/" + release.id;
                return (
                  <Link key={release.id} to={href} className="group grid gap-6 border-b border-gray-200 py-8 transition-colors hover:bg-[#f7f8fc] md:grid-cols-[320px_minmax(0,1fr)] md:items-stretch md:gap-9 md:px-5">
                    <div className="relative min-h-[230px] overflow-hidden bg-[#17131f]">
                      {release.imageUrl ? (
                        <img src={release.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#f7f8fc] p-10">
                          {brand.logo ? <img src={brand.logo} alt="" className="h-28 w-28 object-contain" /> : <Building2 size={42} className="text-[#5a6eb4]" />}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-center py-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="border border-[#5a6eb4]/35 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">Sponsored</span>
                        <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{release.date}</span>
                        <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--slate-medium)]">{brand.companyName}</span>
                      </div>
                      <h3 className="mt-5 text-[28px] leading-[1.08] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[36px]" style={{ fontWeight: 710 }}>{release.headline}</h3>
                      <p className="mt-4 max-w-[820px] text-[15px] leading-[1.7] text-[var(--slate-dark)]">{release.summary}</p>
                      <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">Read announcement →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="border-b border-gray-200 py-14">
              <p className="text-[16px] text-[var(--slate-medium)]">No published press releases are available for this brand yet.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
