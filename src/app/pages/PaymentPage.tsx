import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useSearchParams } from "react-router";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function PaymentPage() {
  const { user, login, subscribe } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planType = searchParams.get('plan') as '3-months' | '6-months' | '12-months' || '6-months';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const planDetails = {
    '3-months': { price: '£299', duration: '3 Months', perMonth: '£99.67/month' },
    '6-months': { price: '£499', duration: '6 Months', perMonth: '£83.17/month' },
    '12-months': { price: '£799', duration: '12 Months', perMonth: '£66.58/month' },
  };

  const plan = planDetails[planType];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create account and subscribe
    if (!user) {
      await login(email, password);
    }
    subscribe(planType);

    setIsProcessing(false);
    navigate("/press-release-dashboard");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <Link
            to="/submit-press-release"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--electric-blue)] hover:underline mb-6"
          >
            <ArrowLeft size={16} />
            Back to Plans
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8 shadow-sm">
                <h1 className="text-[28px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: "700" }}>
                  Complete Your Purchase
                </h1>

                <form onSubmit={handleSubmit}>
                  {/* Account Details */}
                  {!user && (
                    <div className="mb-8 pb-8 border-b border-gray-200">
                      <h2 className="text-[18px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: "600" }}>
                        Create Your Account
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                            Email Address <span className="text-red-500">*</span>
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
                        <div>
                          <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                            Password <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                            placeholder="Create a password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment Details */}
                  <div className="mb-8">
                    <h2 className="text-[18px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: "600" }}>
                      Payment Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                          Name on Card <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                          Card Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            required
                          />
                          <CreditCard size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                            Expiry Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                            placeholder="MM/YY"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[14px] text-[var(--slate-dark)] mb-2" style={{ fontWeight: "600" }}>
                            CVV <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[var(--electric-blue)] text-[15px]"
                            placeholder="123"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="bg-green-50 border border-green-200 p-4 mb-6 flex items-start gap-3">
                    <Lock size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] text-[var(--slate-dark)] leading-[1.6]">
                        Your payment information is secure and encrypted. We use industry-standard security measures to protect your data.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-[var(--electric-blue)] hover:bg-blue-500 text-white py-4 text-[16px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ fontWeight: "600" }}
                  >
                    {isProcessing ? (
                      <>Processing Payment...</>
                    ) : (
                      <>
                        <Lock size={18} />
                        Complete Purchase - {plan.price}
                      </>
                    )}
                  </button>

                  <p className="text-[12px] text-[var(--slate-medium)] text-center mt-4">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 p-6 shadow-sm sticky top-8">
                <h3 className="text-[18px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: "600" }}>
                  Order Summary
                </h3>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-[14px] text-[var(--slate-dark)]">Plan</span>
                    <span className="text-[14px] text-[var(--navy-deep)]" style={{ fontWeight: "600" }}>
                      {plan.duration}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[14px] text-[var(--slate-dark)]">Billing Period</span>
                    <span className="text-[14px] text-[var(--slate-medium)]">
                      {plan.perMonth}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[16px] text-[var(--navy-deep)]" style={{ fontWeight: "600" }}>
                      Total
                    </span>
                    <span className="text-[28px] text-[var(--navy-deep)]" style={{ fontWeight: "700" }}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-[12px] text-[var(--slate-medium)]">
                    Charged once per {planType.replace('-', ' ')}
                  </p>
                </div>

                <div className="bg-blue-50 p-4 border border-blue-200">
                  <h4 className="text-[14px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
                    What's Included:
                  </h4>
                  <ul className="space-y-2 text-[13px] text-[var(--slate-dark)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--electric-blue)] mt-0.5">✓</span>
                      <span>Unlimited press releases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--electric-blue)] mt-0.5">✓</span>
                      <span>Company profile page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--electric-blue)] mt-0.5">✓</span>
                      <span>Email distribution to 45,000+ subscribers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--electric-blue)] mt-0.5">✓</span>
                      <span>Priority listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--electric-blue)] mt-0.5">✓</span>
                      <span>Analytics dashboard</span>
                    </li>
                  </ul>
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
