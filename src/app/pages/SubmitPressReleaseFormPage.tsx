import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";
import { FileText, Image, Calendar, Tag, Eye, Send, ArrowLeft } from "lucide-react";

export function SubmitPressReleaseFormPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [headline, setHeadline] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("Cooling & Thermal Management");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!user?.hasSubscription) {
      navigate("/submit-press-release");
    } else if (!user?.companyProfile) {
      navigate("/company-profile-setup");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user?.companyProfile) {
      setContactName(user.companyProfile.contactName || "");
      setContactEmail(user.companyProfile.contactEmail || user.email);
      setContactPhone(user.companyProfile.contactPhone || "");
    }
  }, [user]);

  if (!user?.hasSubscription || !user?.companyProfile) {
    return null;
  }

  const categories = ["Cooling & Thermal Management", "Design, Construction & Operations", "Digital Infrastructure & Security", "Markets, Policy & People", "Power & Energy", "Sustainability & Resources"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="py-16">
          <div className="max-w-2xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={40} className="text-green-600" />
            </div>
            <h1 className="text-[36px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: "700" }}>
              Press Release Submitted!
            </h1>
            <p className="text-[16px] text-[var(--slate-medium)] mb-8 leading-[1.6]">
              Your press release has been submitted for review. It will be published within 24 hours and distributed in our next newsletter.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setHeadline("");
                  setSummary("");
                  setBody("");
                  setImageUrl("");
                  setContactName(user.companyProfile?.contactName || "");
                  setContactEmail(user.companyProfile?.contactEmail || user.email);
                  setContactPhone(user.companyProfile?.contactPhone || "");
                }}
                className="bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-6 py-3 text-[15px]"
                style={{ fontWeight: "600" }}
              >
                Submit Another
              </button>
              <Link
                to="/press-release-dashboard"
                className="bg-gray-100 hover:bg-gray-200 text-[var(--navy-deep)] px-6 py-3 text-[15px] flex items-center"
                style={{ fontWeight: "600" }}
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <Link
            to="/press-release-dashboard"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--electric-blue)] hover:underline mb-4"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[32px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "700" }}>
                Submit Press Release
              </h1>
              <p className="text-[15px] text-[var(--slate-medium)]">
                Publishing as: <span style={{ fontWeight: "600" }}>{user.companyProfile.companyName}</span>
              </p>
            </div>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-[var(--electric-blue)] text-[var(--navy-deep)] text-[14px] transition-colors"
              style={{ fontWeight: "600" }}
            >
              <Eye size={16} />
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className={showPreview ? "lg:col-span-6" : "lg:col-span-8"}>
              <form onSubmit={handleSubmit}>
                {/* Headline */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                    <FileText size={18} />
                    Headline <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                    placeholder="Enter a compelling headline for your press release"
                    required
                  />
                  <p className="text-[13px] text-[var(--slate-medium)] mt-2">
                    {headline.length} / 120 characters recommended
                  </p>
                </div>

                {/* Summary */}
                <div className="mb-6">
                  <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                    Summary <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px] resize-none"
                    placeholder="Brief summary (will appear in listings and newsletter)"
                    required
                  />
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                    <Tag size={18} />
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px] bg-white"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Image URL */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                    <Image size={18} />
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                    placeholder="https://example.com/image.jpg"
                  />
                  {imageUrl && (
                    <div className="mt-3 border border-gray-200 p-2 bg-gray-50">
                      <img src={imageUrl} alt="Preview" className="w-full h-48 object-cover" />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="mb-6">
                  <label className="block text-[15px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                    Press Release Body <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px] resize-none font-mono"
                    placeholder="Full press release content. Use line breaks to separate paragraphs."
                    required
                  />
                  <p className="text-[13px] text-[var(--slate-medium)] mt-2">
                    Tip: Write in a clear, professional tone. Include quotes, facts, and contact information.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
                  <h3 className="text-[16px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: "600" }}>
                    Media Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[14px] text-[var(--slate-dark)] mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[14px]"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] text-[var(--slate-dark)] mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[14px]"
                        placeholder="press@company.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[14px] text-[var(--slate-dark)] mb-2">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[14px]"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--electric-blue)] hover:bg-blue-500 text-white py-4 text-[16px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontWeight: "600" }}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Press Release
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Preview Panel */}
            {showPreview ? (
              <div className="lg:col-span-6">
                <div className="sticky top-8">
                  <div className="bg-white border-2 border-[var(--electric-blue)]/20 p-6">
                    <h3 className="text-[14px] text-[var(--slate-medium)] uppercase tracking-wide mb-4" style={{ fontWeight: "600" }}>
                      Live Preview
                    </h3>

                    {imageUrl && (
                      <img src={imageUrl} alt={headline} className="w-full h-48 object-cover mb-4" />
                    )}

                    {headline && (
                      <h2 className="text-[24px] text-[var(--navy-deep)] mb-3 leading-[1.2]" style={{ fontWeight: "700" }}>
                        {headline}
                      </h2>
                    )}

                    {summary && (
                      <p className="text-[15px] text-[var(--slate-dark)] mb-4 leading-[1.6]">
                        {summary}
                      </p>
                    )}

                    {category && (
                      <div className="mb-4">
                        <span className="bg-[var(--electric-blue)] text-white px-3 py-1 text-[11px] uppercase tracking-wide">
                          {category}
                        </span>
                      </div>
                    )}

                    {body && (
                      <div className="text-[14px] text-[var(--slate-dark)] leading-[1.7] mb-6 whitespace-pre-wrap">
                        {body}
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        {user.companyProfile.logo ? (
                          <img src={user.companyProfile.logo} alt={user.companyProfile.companyName} className="h-8 w-auto object-contain" />
                        ) : (
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">
                              {user.companyProfile.companyName.substring(0, 3).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div>
                          <div className="text-[12px] text-[var(--slate-medium)]">Provided by</div>
                          <div className="text-[14px] text-[var(--navy-deep)]" style={{ fontWeight: "600" }}>
                            {user.companyProfile.companyName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-4">
                <div className="sticky top-8 bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-[16px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
                    Tips for Great Press Releases
                  </h3>
                  <ul className="space-y-2 text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                    <li>• Start with the most important information</li>
                    <li>• Keep headlines clear and compelling</li>
                    <li>• Include relevant quotes from key stakeholders</li>
                    <li>• Add specific facts, figures, and dates</li>
                    <li>• Proofread carefully before submitting</li>
                    <li>• Include high-quality images when possible</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
