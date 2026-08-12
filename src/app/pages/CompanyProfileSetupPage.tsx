import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { BrandProfile, useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";
import { ArrowLeft, Building2, Globe, Mail, Plus, Save, User } from "lucide-react";
import { ImageUploadField } from "../components/ImageUploadField";

const EMPTY_BRAND_ID = "new-brand";

export function CompanyProfileSetupPage() {
  const { user, addBrandProfile, updateBrandProfile } = useAuth();
  const navigate = useNavigate();
  const brands = user?.brandProfiles ?? [];
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const selectedBrand = brands.find((brand) => brand.id === selectedBrandId);

  useEffect(() => {
    if (!user?.hasSubscription) {
      navigate("/submit-press-release");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!selectedBrandId && brands.length) {
      setSelectedBrandId(brands[0].id);
    }
  }, [brands, selectedBrandId]);

  useEffect(() => {
    if (selectedBrand) {
      setCompanyName(selectedBrand.companyName || "");
      setWebsite(selectedBrand.website || "");
      setDescription(selectedBrand.description || "");
      setLogo(selectedBrand.logo || "");
      setContactName(selectedBrand.contactName || "");
      setContactEmail(selectedBrand.contactEmail || "");
      setContactPhone(selectedBrand.contactPhone || "");
    }
  }, [selectedBrand]);

  if (!user?.hasSubscription) {
    return null;
  }

  const startNewBrand = () => {
    setSelectedBrandId(EMPTY_BRAND_ID);
    setCompanyName("");
    setWebsite("");
    setDescription("");
    setLogo("");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setSavedMessage("");
  };

  const brandFromForm = (): Omit<BrandProfile, "id"> => ({
    companyName,
    website: website || undefined,
    description: description || undefined,
    logo: logo || undefined,
    contactName: contactName || undefined,
    contactEmail: contactEmail || undefined,
    contactPhone: contactPhone || undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedBrandId === EMPTY_BRAND_ID || !selectedBrand) {
      const brand = addBrandProfile(brandFromForm());
      if (brand) {
        setSelectedBrandId(brand.id);
        setSavedMessage(`${brand.companyName} has been added to this account.`);
      }
      return;
    }

    updateBrandProfile({
      id: selectedBrand.id,
      ...brandFromForm(),
    });
    setSavedMessage(`${companyName} has been updated.`);
  };

  const handleSkip = () => {
    if (!brands.length) {
      addBrandProfile({
        companyName: user.email.split('@')[0] || "Company",
      });
    }
    navigate("/press-release-dashboard");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1180px] px-4 md:px-8">
          <Link
            to="/press-release-dashboard"
            className="mb-6 inline-flex items-center gap-2 text-[14px] text-[var(--electric-blue)] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--electric-blue)]/10">
                <Building2 size={32} className="text-[var(--electric-blue)]" />
              </div>
              <h1 className="text-[36px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: "700" }}>
                Manage Account & Brand Profiles
              </h1>
              <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[var(--slate-medium)]">
                Keep a permanent account profile, then add reusable brand profiles for every client or business unit that submits press releases.
              </p>
            </div>
            <div className="border border-gray-200 bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">Account profile</div>
              <strong className="mt-3 block text-[20px] text-[var(--navy-deep)]">{user.accountName || user.email}</strong>
              <span className="mt-2 flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
                <Mail size={14} />
                {user.email}
              </span>
              <p className="mt-4 text-[13px] leading-[1.6] text-[var(--slate-dark)]">
                Brand profiles stay attached to this account, so agencies can publish for multiple clients without recreating details each time.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="border border-gray-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: "700" }}>
                  Saved brands
                </h2>
                <button
                  type="button"
                  onClick={startNewBrand}
                  className="inline-flex h-10 w-10 items-center justify-center border border-gray-200 text-[#5a6eb4] hover:border-[#5a6eb4]/45"
                  aria-label="Add brand"
                >
                  <Plus size={18} />
                </button>
              </div>

              <div className="grid gap-3">
                {brands.map((brand) => (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => {
                      setSelectedBrandId(brand.id);
                      setSavedMessage("");
                    }}
                    className={`border p-4 text-left transition-colors ${selectedBrandId === brand.id ? "border-[#5a6eb4] bg-[#eef1fa]" : "border-gray-200 bg-white hover:border-[#5a6eb4]/45"}`}
                  >
                    <div className="flex h-16 items-center">
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.companyName} className="h-14 w-14 object-contain" />
                      ) : (
                        <Building2 size={22} className="text-[#5a6eb4]" />
                      )}
                    </div>
                    <strong className="mt-3 block text-[14px] leading-[1.25] text-[var(--navy-deep)]">
                      {brand.companyName}
                    </strong>
                    {brand.contactEmail && (
                      <span className="mt-1 block break-words text-[12px] text-[var(--slate-medium)]">
                        {brand.contactEmail}
                      </span>
                    )}
                  </button>
                ))}

                {!brands.length && (
                  <div className="border border-dashed border-gray-300 p-5 text-[13px] leading-[1.6] text-[var(--slate-medium)]">
                    Add the first brand profile for this account.
                  </div>
                )}
              </div>
            </aside>

            <div className="border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 pb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">
                      {selectedBrandId === EMPTY_BRAND_ID || !selectedBrand ? "New brand profile" : "Edit brand profile"}
                    </span>
                    <h2 className="mt-2 text-[26px] text-[var(--navy-deep)]" style={{ fontWeight: "700" }}>
                      {companyName || "Brand details"}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={startNewBrand}
                    className="inline-flex items-center gap-2 border border-gray-200 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4] hover:border-[#5a6eb4]/45"
                  >
                    <Plus size={14} />
                    Add another brand
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                      Brand Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full border border-gray-300 px-4 py-3 text-[15px] focus:border-[var(--electric-blue)] focus:outline-none"
                      placeholder="e.g., Schneider Electric"
                      required
                    />
                    <p className="mt-2 text-[13px] text-[var(--slate-medium)]">
                      This is shown as the publisher of assigned press releases.
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <ImageUploadField
                      label="Brand logo"
                      value={logo}
                      onChange={setLogo}
                      kind="brand-logo"
                      helpText="Required size: 1200 × 1200 px (square). Treat it like a social profile image: use one bold, centred mark with enough clear space to survive a circular crop. PNG or WebP only."
                      previewClassName="h-48 w-full object-contain"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                      Website
                    </label>
                    <div className="flex items-center gap-3">
                      <Globe size={20} className="text-[var(--slate-medium)]" />
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="flex-1 border border-gray-300 px-4 py-3 text-[15px] focus:border-[var(--electric-blue)] focus:outline-none"
                        placeholder="https://www.brand.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                      Media Contact Name
                    </label>
                    <div className="flex items-center gap-3">
                      <User size={18} className="text-[var(--slate-medium)]" />
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full border border-gray-300 px-3 py-2 text-[14px] focus:border-[var(--electric-blue)] focus:outline-none"
                        placeholder="Contact name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                      Media Contact Email
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full border border-gray-300 px-3 py-2 text-[14px] focus:border-[var(--electric-blue)] focus:outline-none"
                      placeholder="press@brand.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                      Media Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full border border-gray-300 px-3 py-2 text-[14px] focus:border-[var(--electric-blue)] focus:outline-none"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                      Brand Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full resize-none border border-gray-300 px-4 py-3 text-[15px] focus:border-[var(--electric-blue)] focus:outline-none"
                      placeholder="Brief description shown in press release footer"
                    />
                  </div>
                </div>

                {companyName && (
                  <div className="mt-8 border border-gray-200 bg-gray-50 p-6">
                    <h3 className="mb-3 text-[14px] uppercase tracking-wide text-[var(--slate-dark)]" style={{ fontWeight: "600" }}>
                      Preview
                    </h3>
                    <div className="border border-gray-200 bg-white p-4">
                      <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                        {logo ? (
                          <img src={logo} alt={companyName} className="h-8 w-auto object-contain" />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-blue-800">
                            <span className="text-[10px] font-bold text-white">
                              {companyName.substring(0, 3).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div>
                          <div className="mb-0.5 text-[13px] text-[var(--slate-medium)]">
                            Provided by
                          </div>
                          <div className="text-[15px] text-[var(--navy-deep)]" style={{ fontWeight: "600" }}>
                            {companyName}
                          </div>
                        </div>
                      </div>
                      {description && (
                        <p className="mt-3 text-[13px] leading-[1.6] text-[var(--slate-dark)]">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {savedMessage && (
                  <p className="mt-5 text-[13px] text-emerald-700" role="status" aria-live="polite">
                    {savedMessage}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 bg-[var(--electric-blue)] py-3 text-[15px] text-white transition-colors hover:bg-blue-500"
                    style={{ fontWeight: "600" }}
                  >
                    <Save size={17} />
                    Save Brand Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/press-release-dashboard")}
                    className="px-6 py-3 text-[15px] text-[var(--navy-deep)] transition-colors hover:bg-gray-100"
                    style={{ fontWeight: "600" }}
                  >
                    Back to Dashboard
                  </button>
                  {!brands.length && (
                    <button
                      type="button"
                      onClick={handleSkip}
                      className="px-6 py-3 text-[15px] text-[var(--navy-deep)] transition-colors hover:bg-gray-100"
                      style={{ fontWeight: "600" }}
                    >
                      Skip for Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
