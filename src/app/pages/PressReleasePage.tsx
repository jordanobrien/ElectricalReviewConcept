import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useParams, Link } from "react-router";
import { getPressReleaseById } from "../data/pressReleases";
import { getPublicBrandByCompanyName } from "../data/brandProfiles";
import { ArrowUpRight, Linkedin, Twitter, Mail as MailIcon, Building2, Calendar as CalendarIcon } from "lucide-react";

export function PressReleasePage() {
  const { id } = useParams<{ id: string }>();
  const pressRelease = id ? getPressReleaseById(id) : undefined;
  const brandProfile = pressRelease ? getPublicBrandByCompanyName(pressRelease.company) : undefined;
  const brandPath = brandProfile ? "/press-release-brands/" + brandProfile.id : undefined;

  if (!pressRelease) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <h1 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Press Release not found
          </h1>
          <Link to="/" className="text-[var(--electric-blue)] hover:underline mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <Link to="/press-releases" className="hover:text-[var(--electric-blue)]">Press Releases</Link>
            <span>/</span>
            {brandPath ? <Link to={brandPath} className="text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">{pressRelease.company}</Link> : <span className="text-[var(--navy-deep)]">{pressRelease.company}</span>}
          </div>
        </div>
      </div>

      {/* Sponsored Content Banner */}
      <div className="bg-amber-50 border-t-4 border-amber-500">
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-[13px] text-amber-900 uppercase tracking-wider" style={{ fontWeight: '600' }}>
              Sponsored Content
            </span>
            <span className="text-[13px] text-amber-700">
              This press release is provided by {pressRelease.company}
            </span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 pt-12 pb-12">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column - Content */}
            <div className="col-span-9">
              {/* Headline */}
              <h1 className="text-[42px] leading-[1.15] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                {pressRelease.headline}
              </h1>

              {/* Summary */}
              <p className="text-[20px] leading-[1.5] text-[var(--slate-dark)] mb-8">
                {pressRelease.summary}
              </p>

              {/* Meta Information */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <CalendarIcon size={16} className="text-[var(--electric-blue)]" />
                  {pressRelease.date}
                </div>
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <Building2 size={16} className="text-[var(--electric-blue)]" />
                  {pressRelease.location}
                </div>
              </div>

              {/* Main Image */}
              <figure className="mb-12">
                <img
                  src={pressRelease.imageUrl}
                  alt={pressRelease.headline}
                  className="w-full h-[500px] object-cover"
                />
                {pressRelease.imageCaption && (
                  <figcaption className="text-[14px] text-[var(--slate-medium)] italic mt-4">
                    {pressRelease.imageCaption}
                  </figcaption>
                )}
              </figure>

              {/* Intro Paragraph with Location */}
              <p className="text-[18px] leading-[1.8] text-[var(--slate-dark)] mb-8">
                <span className="text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>
                  {pressRelease.location}
                </span>{" "}
                — {pressRelease.introText}
              </p>

              {/* Body Paragraphs */}
              <div className="space-y-6 mb-12">
                {pressRelease.bodyParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* About Company Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-[16px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                  About {pressRelease.company}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[var(--slate-medium)]">
                  For more information, please visit the company website or contact the press office using the details provided.
                </p>
              </div>

              {/* Editorial Disclaimer */}
              <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[12px]" style={{ fontWeight: '700' }}>i</span>
                  </div>
                  <div>
                    <div className="text-[13px] text-amber-900 mb-1" style={{ fontWeight: '600' }}>
                      Sponsored Content Notice
                    </div>
                    <p className="text-[13px] leading-[1.6] text-amber-900">
                      This press release is provided by {pressRelease.company} and published as submitted. Data Centre Review does not endorse or verify claims made in press releases. All inquiries should be directed to the company's press office.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Company Logo */}
            <div className="col-span-3">
              <div className="bg-gray-50 border border-gray-200 p-8 sticky top-8">
                <div className="text-[11px] text-[var(--slate-medium)] uppercase tracking-wider mb-4" style={{ fontWeight: '600' }}>
                  Provided By
                </div>
                
                {/* Company Logo */}
                {(pressRelease.companyLogo || brandProfile?.logo) ? (
                  brandPath ? (
                    <Link to={brandPath} className="group flex h-40 w-full items-center justify-center border border-gray-200 bg-white p-3 transition-colors hover:border-[#5a6eb4]" aria-label={"View " + pressRelease.company + " brand profile"}>
                      <img src={pressRelease.companyLogo || brandProfile?.logo} alt={pressRelease.company} className="h-32 w-32 object-contain transition-transform group-hover:scale-[1.02]" />
                    </Link>
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center border border-gray-200 bg-white p-3">
                      <img src={pressRelease.companyLogo || brandProfile?.logo} alt={pressRelease.company} className="h-32 w-32 object-contain" />
                    </div>
                  )
                ) : (
                  <div className="flex h-40 w-full items-center justify-center bg-[var(--navy-deep)]">
                    <span className="text-white text-[24px] tracking-wider" style={{ fontWeight: '700' }}>
                      {pressRelease.company.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                )}
                
                {brandPath ? (
                  <Link to={brandPath} className="group mb-6 mt-5 flex items-center justify-between gap-3 text-[18px] text-[var(--navy-deep)] hover:text-[#5a6eb4]" style={{ fontWeight: '600' }}>
                    {pressRelease.company}<ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <div className="mb-6 mt-5 text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>{pressRelease.company}</div>
                )}

                {/* Press Contact */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-[12px] text-[var(--slate-medium)] uppercase tracking-wider mb-3" style={{ fontWeight: '600' }}>
                    Press Contact
                  </div>
                  <div className="space-y-2">
                    <div className="text-[14px] text-[var(--navy-deep)]" style={{ fontWeight: '500' }}>
                      {pressRelease.contactName}
                    </div>
                    <a
                      href={`mailto:${pressRelease.contactEmail}`}
                      className="text-[13px] text-[var(--electric-blue)] hover:underline block"
                    >
                      {pressRelease.contactEmail}
                    </a>
                    <div className="text-[13px] text-[var(--slate-dark)]">
                      {pressRelease.contactPhone}
                    </div>
                  </div>
                </div>

                {/* Share */}
                <div className="pt-6 border-t border-gray-200 mt-6">
                  <div className="text-[12px] text-[var(--slate-medium)] uppercase tracking-wider mb-3" style={{ fontWeight: '600' }}>
                    Share
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white border border-gray-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-[var(--slate-dark)] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(pressRelease.headline)}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white border border-gray-300 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] text-[var(--slate-dark)] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(pressRelease.headline)}&body=${encodeURIComponent(pressRelease.summary + '\n\n' + window.location.href)}`}
                      className="w-10 h-10 bg-white border border-gray-300 hover:bg-[var(--navy-deep)] hover:border-[var(--navy-deep)] text-[var(--slate-dark)] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Share via Email"
                    >
                      <MailIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
