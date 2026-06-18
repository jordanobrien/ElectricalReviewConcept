import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Check, Building2, Mail, FileText, LogIn } from "lucide-react";

const plans = [
  { duration: "One off", description: "A single press release published to the hub." },
  { duration: "3 months", description: "Publish as many releases as you need over three months." },
  { duration: "6 months", description: "Six months of unlimited press release access." },
  { duration: "12 months", description: "A full year of coverage — our best-value option." },
];

const features = [
  "Unlimited press releases (subscription plans)",
  "Published to the Electrical Review Press Release Hub",
  "Company profile listing",
  "Included in our weekly newsletter",
  "Clearly branded as sponsored content",
];

export function SubmitPressReleasePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f] py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-white text-[42px] leading-[1.1] mb-4" style={{ fontWeight: "700" }}>
                Press Release Hub
              </h1>
              <p className="text-white/90 text-[18px] leading-[1.6]">
                Publish your company news directly to Electrical Review's Press Release Hub — reaching a focused audience of electrification infrastructure professionals across the UK.
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-white/70 text-[13px] mb-3 text-right">
                Already a subscriber?
              </p>
              <Link
                to="/press-release-dashboard"
                className="flex items-center gap-2 bg-white text-[var(--navy-deep)] hover:bg-gray-100 px-6 py-3 text-[15px] transition-colors"
                style={{ fontWeight: "600" }}
              >
                <LogIn size={18} />
                Log in to dashboard
              </Link>
            </div>
          </div>
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
                  Direct access to professionals working in grid connections, EV charging, energy storage, and commissioning — not a general trade audience.
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
                  Press releases are included in our weekly newsletter, delivered to engaged subscribers every Tuesday morning.
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
              Choose a package
            </h2>
            <p className="text-[15px] text-[var(--slate-medium)] mb-8">
              All pricing is POA. Contact us to discuss which option suits your needs.
            </p>

            <div className="grid grid-cols-4 gap-5">
              {plans.map((plan) => (
                <div key={plan.duration} className="bg-white border border-gray-200 p-6 flex flex-col">
                  <div className="h-1 w-8 bg-[var(--electric-blue)] mb-5" />
                  <h3 className="text-[20px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "700" }}>
                    {plan.duration}
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
                    Contact us
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
                  Get in touch and we'll put together the right package for you.
                </p>
              </div>
              <a
                href="mailto:massimom@sjpbusinessmedia.com"
                className="bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-8 py-3 text-[15px] transition-colors flex-shrink-0"
                style={{ fontWeight: "600" }}
              >
                Contact us
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
