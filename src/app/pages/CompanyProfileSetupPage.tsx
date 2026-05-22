import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";
import { Building2, Upload, Globe, ArrowLeft } from "lucide-react";

export function CompanyProfileSetupPage() {
  const { user, updateCompanyProfile } = useAuth();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (!user?.hasSubscription) {
      navigate("/submit-press-release");
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyProfile({
      companyName,
      website,
      description,
      logo: logo || undefined,
    });
    navigate("/press-release-dashboard");
  };

  const handleSkip = () => {
    // Create minimal profile
    updateCompanyProfile({
      companyName: user?.email.split('@')[0] || "Company",
    });
    navigate("/press-release-dashboard");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <Link
            to="/press-release-dashboard"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--electric-blue)] hover:underline mb-6"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="w-16 h-16 bg-[var(--electric-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={32} className="text-[var(--electric-blue)]" />
            </div>
            <h1 className="text-[36px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "700" }}>
              Set Up Your Company Profile
            </h1>
            <p className="text-[16px] text-[var(--slate-medium)]">
              This information will appear on your press releases as "Provided by [Your Company]"
            </p>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 p-8 shadow-sm">
            <form onSubmit={handleSubmit}>
              {/* Company Name */}
              <div className="mb-6">
                <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                  placeholder="e.g., Acme Electrical Solutions"
                  required
                />
                <p className="text-[13px] text-[var(--slate-medium)] mt-2">
                  This will be displayed as the publisher of your press releases
                </p>
              </div>

              {/* Company Logo URL */}
              <div className="mb-6">
                <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                  Company Logo URL
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="url"
                      value={logo}
                      onChange={(e) => setLogo(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                    {logo ? (
                      <img src={logo} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                    ) : (
                      <Upload size={24} className="text-gray-400" />
                    )}
                  </div>
                </div>
                <p className="text-[13px] text-[var(--slate-medium)] mt-2">
                  Optional: Paste a URL to your company logo (recommended size: 200x80px)
                </p>
              </div>

              {/* Website */}
              <div className="mb-6">
                <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                  Company Website
                </label>
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-[var(--slate-medium)]" />
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>
              </div>

              {/* Company Description */}
              <div className="mb-8">
                <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                  Company Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px] resize-none"
                  placeholder="Brief description of your company (shown in press release footer)"
                />
                <p className="text-[13px] text-[var(--slate-medium)] mt-2">
                  Optional: A short paragraph about your company (max 500 characters)
                </p>
              </div>

              {/* Preview */}
              {companyName && (
                <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
                  <h3 className="text-[14px] text-[var(--slate-dark)] mb-3 uppercase tracking-wide" style={{ fontWeight: "600" }}>
                    Preview
                  </h3>
                  <div className="bg-white p-4 border border-gray-200">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      {logo ? (
                        <img src={logo} alt={companyName} className="h-8 w-auto object-contain" />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">
                            {companyName.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div>
                        <div className="text-[13px] text-[var(--slate-medium)] mb-0.5">
                          Provided by
                        </div>
                        <div className="text-[15px] text-[var(--navy-deep)]" style={{ fontWeight: "600" }}>
                          {companyName}
                        </div>
                      </div>
                    </div>
                    {description && (
                      <p className="text-[13px] text-[var(--slate-dark)] leading-[1.6] mt-3">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[var(--electric-blue)] hover:bg-blue-500 text-white py-3 text-[15px] transition-colors"
                  style={{ fontWeight: "600" }}
                >
                  Save Profile & Continue
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="px-6 bg-gray-100 hover:bg-gray-200 text-[var(--navy-deep)] py-3 text-[15px] transition-colors"
                  style={{ fontWeight: "600" }}
                >
                  Skip for Now
                </button>
              </div>
            </form>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-[14px] text-[var(--slate-medium)]">
              You can update your company profile at any time from your account settings
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
