import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { Check, Building2, Mail, FileText, LogIn, X } from "lucide-react";

const plans = [
  { credits: "1 credit", description: "For a single company announcement." },
  { credits: "3 credits", description: "A flexible package for occasional announcements." },
  { credits: "6 credits", description: "For organisations with a regular news pipeline." },
  { credits: "9 credits", description: "For sustained partner communications throughout the year." },
  { credits: "Custom", description: "Choose the number of credits that fits your programme." },
];

const features = [
  "One credit covers one press release",
  "Every credit is valid for 12 months",
  "Published to the Data Centre Review Press Release Hub",
  "Permanent account with reusable brand profiles",
  "Clearly branded as sponsored content",
];

export function SubmitPressReleasePage() {
  const { login, createDemoUser } = useAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await login(email, password);
      setShowLogin(false);
      navigate("/press-release-dashboard");
    } catch {
      setError("Login failed. Please check your details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-8 md:py-6">
        <div className="relative overflow-hidden bg-[var(--navy-deep)] text-white">
          <div className="flex flex-col justify-between gap-8 p-7 md:p-10 lg:flex-row lg:items-end lg:p-12">
            <div className="max-w-2xl">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Partner publishing</span>
              <h1 className="text-[48px] leading-[0.96] text-white md:text-[72px]" style={{ fontWeight: 750 }}>
                Post a Press Release
              </h1>
              <p className="mt-5 max-w-[760px] text-[16px] leading-[1.7] text-white/75">
                Publish company news to Data Centre Review and reach a specialist audience across the data centre, energy and critical-infrastructure sector.
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-white/70 text-[13px] mb-3 text-right">
                Already have credits?
              </p>
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-2 bg-white text-[var(--navy-deep)] hover:bg-gray-100 px-6 py-3 text-[15px] transition-colors"
                style={{ fontWeight: "600" }}
              >
                <LogIn size={18} />
                Log in to dashboard
              </button>
            </div>
          </div><div className="absolute left-0 top-0 h-2 w-full bg-[#5a6eb4]" />
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">

          {/* Why publish */}
          <section className="mb-16">
            <h2 className="text-[28px] text-[var(--navy-deep)] mb-8" style={{ fontWeight: "600" }}>
              Why publish with us
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                  <Building2 size={20} className="text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-[17px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
                  Specialist audience
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                  Direct access to data centre, energy, facilities and building-services professionals.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                  <Mail size={20} className="text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-[17px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
                  Newsletter distribution
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                  Eligible announcements can be surfaced across DCR's newsletter and partner-content channels.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-10 h-10 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex items-center justify-center rounded mb-4">
                  <FileText size={20} className="text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-[17px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
                  Editorially distinct
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                  Press releases are clearly presented as company-submitted content, maintaining the editorial integrity readers trust.
                </p>
              </div>
            </div>
          </section>

          {/* What's included */}
          <section className="mb-16">
            <div className="bg-gray-50 border border-gray-200 p-8">
              <h2 className="text-[22px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: "600" }}>
                What's included with every package
              </h2>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={17} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[14px] text-[var(--slate-dark)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Plans */}
          <section className="mb-16">
              <h2 className="text-[28px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
              Choose a credit package
            </h2>
            <p className="text-[15px] text-[var(--slate-medium)] mb-8">
              Price is on application. All credits remain valid for 12 months from purchase.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {plans.map((plan) => (
                <div key={plan.credits} className="bg-white border border-gray-200 p-6 flex flex-col">
                  <div className="h-1 w-8 bg-[var(--electric-blue)] mb-5" />
                  <h3 className="text-[20px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "700" }}>
                    {plan.credits}
                  </h3>
                  <p className="text-[13px] text-[var(--slate-medium)] leading-[1.6] mb-6 flex-1">
                    {plan.description}
                  </p>
                  <div className="text-[15px] text-[var(--slate-medium)] mb-5" style={{ fontWeight: "500" }}>
                    Price on application
                  </div>
                  <a
                    href="mailto:massimom@sjpbusinessmedia.com"
                    className="block text-center bg-[var(--navy-deep)] hover:bg-[#1a2942] text-white py-2.5 text-[14px] transition-colors"
                    style={{ fontWeight: "600" }}
                  >
                    Request pricing
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact strip */}
          <section>
            <div className="bg-[var(--navy-deep)] p-8 flex items-center justify-between">
              <div>
                <h3 className="text-white text-[20px] mb-1" style={{ fontWeight: "600" }}>
                  Ready to get started?
                </h3>
                <p className="text-white/80 text-[14px]">
                  Tell us how many announcements you expect to publish and we’ll recommend the right credit package.
                </p>
              </div>
              <a
                href="mailto:massimom@sjpbusinessmedia.com"
                className="bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-8 py-3 text-[15px] transition-colors flex-shrink-0"
                style={{ fontWeight: "600" }}
              >
                Request pricing
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Login modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="bg-white max-w-md w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-[var(--slate-medium)] hover:text-[var(--navy-deep)]"
            >
              <X size={20} />
            </button>
            <h3 className="text-[22px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
              Log in to your dashboard
            </h3>
            <p className="text-[14px] text-[var(--slate-medium)] mb-6">
              Access your press release dashboard and manage your submissions.
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-5 border border-[#5a6eb4]/25 bg-[#f7f8fc] p-4 text-[12px] leading-[1.6] text-[var(--slate-dark)]">
                <strong className="block text-[var(--navy-deep)]">Demo agency account</strong>
                <span className="block">Explore the multi-brand press release workspace without signing in.</span>
                <button
                  type="button"
                  onClick={async () => {
                    setIsLoading(true);
                    await createDemoUser();
                    navigate('/press-release-dashboard');
                  }}
                  className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]"
                >
                  Open demo workspace →
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-[13px] text-[var(--slate-dark)] mb-1.5" style={{ fontWeight: "600" }}>
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-[13px] text-[var(--slate-dark)] mb-1.5" style={{ fontWeight: "600" }}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && (
                <p className="text-[13px] text-red-600 mb-4">{error}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[var(--navy-deep)] hover:bg-[#1a2942] text-white py-3 text-[15px] disabled:opacity-50 transition-colors"
                style={{ fontWeight: "600" }}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </form>
            <p className="text-[13px] text-[var(--slate-medium)] text-center mt-6">
              Need to purchase credits?{" "}
              <a href="mailto:massimom@sjpbusinessmedia.com" className="text-[var(--electric-blue)] hover:underline">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
