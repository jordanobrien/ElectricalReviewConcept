import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { Check, Building2, Mail, CreditCard, Zap } from "lucide-react";

export function SubmitPressReleasePage() {
  const { user, login, createDemoUser } = useAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subscriptionPlans = [
    {
      duration: "3 Months",
      price: "£299",
      type: "3-months" as const,
      pricePerMonth: "£99.67/month",
      features: [
        "Unlimited press releases",
        "Company profile page",
        "Priority listing",
        "Email distribution",
        "Analytics dashboard",
      ],
    },
    {
      duration: "6 Months",
      price: "£499",
      type: "6-months" as const,
      pricePerMonth: "£83.17/month",
      popular: true,
      features: [
        "Unlimited press releases",
        "Company profile page",
        "Priority listing",
        "Email distribution",
        "Analytics dashboard",
        "Featured placement",
      ],
    },
    {
      duration: "12 Months",
      price: "£799",
      type: "12-months" as const,
      pricePerMonth: "£66.58/month",
      features: [
        "Unlimited press releases",
        "Company profile page",
        "Priority listing",
        "Email distribution",
        "Analytics dashboard",
        "Featured placement",
        "Dedicated account manager",
      ],
    },
  ];

  const handleSubscribe = (type: '3-months' | '6-months' | '12-months') => {
    navigate(`/payment?plan=${type}`);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
    setShowLogin(false);
    navigate("/press-release-dashboard");
  };

  const handleDemoAccount = async () => {
    setIsLoading(true);
    // Create complete demo account in single update
    await createDemoUser();
    setIsLoading(false);
    setShowLogin(false);
    navigate("/press-release-dashboard");
  };

  // If user is logged in and has subscription, redirect to dashboard
  useEffect(() => {
    if (user?.hasSubscription) {
      navigate("/press-release-dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f] py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-[42px] leading-[1.1] mb-4" style={{ fontWeight: "700" }}>
              Submit Your Press Release
            </h1>
            <p className="text-white/90 text-[18px] leading-[1.6]">
              Reach over 45,000 electrification infrastructure professionals across the UK. Unlimited press releases with transparent pricing.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-[32px] text-[var(--navy-deep)] mb-8 text-center" style={{ fontWeight: "600" }}>
              Why Publish With Electrical Review?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-[var(--electric-blue)]/10 rounded flex items-center justify-center mb-4">
                  <Building2 size={24} className="text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
                  Targeted Audience
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                  Direct access to decision-makers in grid connections, EV charging, energy storage, and commissioning
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-[var(--electric-blue)]/10 rounded flex items-center justify-center mb-4">
                  <Mail size={24} className="text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
                  Email Distribution
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                  Your press releases are included in our weekly newsletter to 45,000+ subscribers
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-[var(--electric-blue)]/10 rounded flex items-center justify-center mb-4">
                  <CreditCard size={24} className="text-[var(--electric-blue)]" />
                </div>
                <h3 className="text-[20px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
                  Unlimited Publishing
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6]">
                  No per-release fees. Publish as many press releases as you need during your subscription
                </p>
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mb-12">
            <p className="text-[14px] text-[var(--slate-medium)] mb-2">
              Already have an account?
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="text-[var(--electric-blue)] hover:underline text-[15px]"
              style={{ fontWeight: "600" }}
            >
              Login to Continue
            </button>
          </div>

          {/* Pricing Section */}
          <div className="mb-12">
            <h2 className="text-[32px] text-[var(--navy-deep)] mb-3 text-center" style={{ fontWeight: "600" }}>
              Choose Your Plan
            </h2>
            <p className="text-[16px] text-[var(--slate-medium)] text-center mb-12">
              {user ? "Select a subscription to continue" : "Login or create an account to get started"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.type}
                  className={`bg-white border-2 p-8 relative ${
                    plan.popular
                      ? "border-[var(--electric-blue)] shadow-lg scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-[var(--electric-blue)] text-white px-6 py-1 text-[12px] uppercase tracking-wider" style={{ fontWeight: "700" }}>
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-[24px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "700" }}>
                      {plan.duration}
                    </h3>
                    <div className="text-[42px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: "700" }}>
                      {plan.price}
                    </div>
                    <div className="text-[14px] text-[var(--slate-medium)]">
                      {plan.pricePerMonth}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-[14px] text-[var(--slate-dark)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.type)}
                    className={`w-full py-3 text-[15px] transition-colors ${
                      plan.popular
                        ? "bg-[var(--electric-blue)] hover:bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-[var(--navy-deep)]"
                    }`}
                    style={{ fontWeight: "600" }}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="bg-white max-w-md w-full p-8 shadow-2xl">
            <h3 className="text-[24px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: "600" }}>
              Login to Your Account
            </h3>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                  Email Address
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
                <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
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
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[var(--electric-blue)] hover:bg-blue-500 text-white py-3 text-[15px] mb-3 disabled:opacity-50"
                style={{ fontWeight: "600" }}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Demo Account Button */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[var(--slate-medium)] text-[13px]">
                  Or try a demo
                </span>
              </div>
            </div>

            <button
              onClick={handleDemoAccount}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 text-[15px] mb-4 disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ fontWeight: "600" }}
            >
              <Zap size={18} />
              {isLoading ? "Setting up..." : "Skip Login (Demo Account)"}
            </button>

            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-[var(--navy-deep)] py-3 text-[15px]"
              style={{ fontWeight: "600" }}
            >
              Cancel
            </button>

            <p className="text-[13px] text-[var(--slate-medium)] text-center mt-6">
              Don't have an account? Select a plan above to create one.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
