import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useParams, Link } from "react-router";
import { getDownloadById } from "../data/downloads";
import { FileText, Download, Calendar, User, FileCheck } from "lucide-react";
import { useState } from "react";

export function DownloadPage() {
  const { id } = useParams<{ id: string }>();
  const download = id ? getDownloadById(id) : undefined;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    consent: false
  });

  if (!download) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <h1 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Download not found
          </h1>
          <Link to="/" className="text-[var(--electric-blue)] hover:underline mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to your backend
    console.log("Form submitted:", formData);
    
    // Show success state
    setIsSubmitted(true);
    
    // Simulate file download
    setTimeout(() => {
      window.open(download.fileUrl, '_blank');
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <Link to="/downloads" className="hover:text-[var(--electric-blue)]">Downloads</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{download.category}</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 pt-12 pb-12">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column - Content */}
            <div className="col-span-8">
              {/* Back Link */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[13px] text-[var(--slate-medium)] hover:text-[var(--electric-blue)] transition-colors mb-6"
              >
                ← Downloads
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[var(--electric-blue)]/10 text-[var(--electric-blue)] text-[11px] uppercase tracking-wider rounded" style={{ fontWeight: '600' }}>
                  {download.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[42px] leading-[1.15] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                {download.title}
              </h1>

              {/* Summary */}
              <p className="text-[20px] leading-[1.5] text-[var(--slate-dark)] mb-8">
                {download.summary}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <FileText size={16} className="text-[var(--electric-blue)]" />
                  {download.type}
                </div>
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <Calendar size={16} className="text-[var(--electric-blue)]" />
                  {download.publishedDate}
                </div>
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <Download size={16} className="text-[var(--electric-blue)]" />
                  {download.size}
                </div>
                {download.pages && (
                  <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                    <FileCheck size={16} className="text-[var(--electric-blue)]" />
                    {download.pages} pages
                  </div>
                )}
              </div>

              {/* Main Image */}
              <figure className="mb-12">
                <img
                  src={download.imageUrl}
                  alt={download.title}
                  className="w-full h-[400px] object-cover"
                />
              </figure>

              {/* Description */}
              <div className="space-y-6 mb-12">
                <h2 className="text-[24px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  About This Resource
                </h2>
                {download.description.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Information */}
              {download.author && (
                <div className="pt-8 border-t border-gray-200 mb-12">
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-[var(--electric-blue)]" />
                    <div>
                      <div className="text-[13px] text-[var(--slate-medium)] uppercase tracking-wide" style={{ fontWeight: '600' }}>
                        Author
                      </div>
                      <div className="text-[15px] text-[var(--slate-dark)]">
                        {download.author}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Download Form */}
            <div className="col-span-4">
              <div className="bg-gray-50 border border-gray-200 p-6 sticky top-8">
                {!isSubmitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[var(--electric-blue)] rounded flex items-center justify-center flex-shrink-0">
                        <Download size={24} className="text-white" />
                      </div>
                      <h3 className="text-[20px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                        Download Resource
                      </h3>
                    </div>

                    <p className="text-[14px] text-[var(--slate-dark)] mb-6 leading-[1.6]">
                      Please complete the form below to download this resource. We respect your privacy and will only use your information to send you relevant content.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="firstName" className="block text-[13px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: '600' }}>
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-[14px] text-[var(--slate-dark)] focus:outline-none focus:border-[var(--electric-blue)] focus:ring-2 focus:ring-[var(--electric-blue)]/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-[13px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: '600' }}>
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-[14px] text-[var(--slate-dark)] focus:outline-none focus:border-[var(--electric-blue)] focus:ring-2 focus:ring-[var(--electric-blue)]/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[13px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: '600' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-[14px] text-[var(--slate-dark)] focus:outline-none focus:border-[var(--electric-blue)] focus:ring-2 focus:ring-[var(--electric-blue)]/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-[13px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: '600' }}>
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-[14px] text-[var(--slate-dark)] focus:outline-none focus:border-[var(--electric-blue)] focus:ring-2 focus:ring-[var(--electric-blue)]/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="jobTitle" className="block text-[13px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: '600' }}>
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-[14px] text-[var(--slate-dark)] focus:outline-none focus:border-[var(--electric-blue)] focus:ring-2 focus:ring-[var(--electric-blue)]/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-[13px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: '600' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 text-[14px] text-[var(--slate-dark)] focus:outline-none focus:border-[var(--electric-blue)] focus:ring-2 focus:ring-[var(--electric-blue)]/20"
                        />
                      </div>

                      <div className="pt-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="consent"
                            required
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 border-gray-300 text-[var(--electric-blue)] focus:ring-[var(--electric-blue)]"
                          />
                          <span className="text-[13px] text-[var(--slate-dark)] leading-[1.6]">
                            I agree to receive communications from Electrical Review about relevant content and industry updates. You can unsubscribe at any time. *
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[var(--electric-blue)] text-white text-center text-[15px] hover:bg-blue-700 transition-colors"
                        style={{ fontWeight: '600' }}
                      >
                        Download Now
                      </button>

                      <p className="text-[12px] text-[var(--slate-medium)] leading-[1.6] text-center">
                        By submitting this form, you agree to our Privacy Policy.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileCheck size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: '600' }}>
                      Thank You!
                    </h3>
                    <p className="text-[15px] text-[var(--slate-dark)] mb-6 leading-[1.6]">
                      Your download should begin automatically. If it doesn't, please click the button below.
                    </p>
                    <a
                      href={download.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[var(--electric-blue)] text-white text-[15px] hover:bg-blue-700 transition-colors"
                      style={{ fontWeight: '600' }}
                    >
                      Download File
                    </a>
                    <p className="text-[13px] text-[var(--slate-medium)] mt-6 leading-[1.6]">
                      We've also sent a download link to your email address.
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-[12px] text-[var(--slate-medium)] leading-[1.6]">
                    <strong className="text-[var(--slate-dark)]">Privacy Notice:</strong> We take your privacy seriously. Your information will only be used to send you relevant technical content and market insights. We will never share your data with third parties.
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