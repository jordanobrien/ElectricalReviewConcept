import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";
import { Building2, FileText, Calendar, BarChart3, Settings, LogOut } from "lucide-react";
import { useEffect } from "react";

export function PressReleaseDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.hasSubscription) {
      navigate("/submit-press-release");
    }
  }, [user, navigate]);

  if (!user?.hasSubscription) {
    return null;
  }

  const getSubscriptionEndDate = () => {
    if (!user.subscriptionExpiry) return "N/A";
    const date = new Date(user.subscriptionExpiry);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getSubscriptionLabel = () => {
    switch (user.subscriptionType) {
      case '3-months': return '3 Month Plan';
      case '6-months': return '6 Month Plan';
      case '12-months': return '12 Month Plan';
      default: return 'Active';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--navy-deep)] to-[#1e3a5f] py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white text-[36px] mb-2" style={{ fontWeight: "700" }}>
                Press Release Dashboard
              </h1>
              <p className="text-white/90 text-[16px]">
                Welcome back, {user.email}
              </p>
            </div>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="flex items-center gap-2 text-white/80 hover:text-white text-[14px] transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Subscription Status */}
          <div className="bg-blue-50 border border-blue-200 p-6 mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[18px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: "600" }}>
                  {getSubscriptionLabel()} - Active
                </h2>
                <p className="text-[14px] text-[var(--slate-medium)]">
                  Your subscription is active until {getSubscriptionEndDate()}
                </p>
              </div>
              <div className="text-right">
                <div className="text-[14px] text-[var(--slate-medium)] mb-1">Press Releases Published</div>
                <div className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: "700" }}>
                  0
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-[24px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: "600" }}>
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Profile Setup */}
              <Link
                to="/company-profile-setup"
                className="group bg-white border-2 border-gray-200 hover:border-[var(--electric-blue)] p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[var(--electric-blue)]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--electric-blue)]/20 transition-colors">
                    <Building2 size={32} className="text-[var(--electric-blue)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] text-[var(--navy-deep)] mb-2 group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: "700" }}>
                      Company Profile Setup
                    </h3>
                    <p className="text-[15px] text-[var(--slate-dark)] leading-[1.6] mb-4">
                      {user.companyProfile
                        ? "Update your company information, logo, and details that appear on your press releases"
                        : "Set up your company profile to get started. This information will appear on all your press releases"}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[var(--electric-blue)] text-[14px]" style={{ fontWeight: "600" }}>
                      {user.companyProfile ? "Edit Profile" : "Set Up Now"}
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Post Press Release */}
              <Link
                to="/submit-press-release-form"
                className="group bg-gradient-to-br from-[var(--electric-blue)] to-blue-500 border-2 border-[var(--electric-blue)] p-8 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <FileText size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] text-white mb-2" style={{ fontWeight: "700" }}>
                      Post a Press Release
                    </h3>
                    <p className="text-[15px] text-white/90 leading-[1.6] mb-4">
                      Submit a new press release to reach 45,000+ electrification infrastructure professionals
                    </p>
                    <div className="inline-flex items-center gap-2 text-white text-[14px]" style={{ fontWeight: "600" }}>
                      Create New Release
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mb-12">
            <h2 className="text-[24px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: "600" }}>
              Manage Your Account
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-4">
                  <Calendar size={24} className="text-[var(--slate-dark)]" />
                </div>
                <h3 className="text-[16px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
                  Published Releases
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6] mb-3">
                  View and manage all your published press releases
                </p>
                <button className="text-[14px] text-[var(--electric-blue)]" style={{ fontWeight: "600" }}>
                  View History
                </button>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-[var(--slate-dark)]" />
                </div>
                <h3 className="text-[16px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
                  Analytics
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6] mb-3">
                  Track views and engagement on your press releases
                </p>
                <button className="text-[14px] text-[var(--electric-blue)]" style={{ fontWeight: "600" }}>
                  View Analytics
                </button>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-4">
                  <Settings size={24} className="text-[var(--slate-dark)]" />
                </div>
                <h3 className="text-[16px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: "600" }}>
                  Account Settings
                </h3>
                <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6] mb-3">
                  Manage your subscription and account preferences
                </p>
                <button className="text-[14px] text-[var(--electric-blue)]" style={{ fontWeight: "600" }}>
                  Manage Settings
                </button>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <h3 className="text-[18px] text-[var(--navy-deep)] mb-3" style={{ fontWeight: "600" }}>
              Need Help?
            </h3>
            <p className="text-[14px] text-[var(--slate-dark)] leading-[1.6] mb-4">
              If you have questions about posting press releases or managing your account, our support team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--navy-deep)] hover:bg-[#1e3a5f] text-white px-6 py-3 text-[14px] transition-colors"
              style={{ fontWeight: "600" }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
