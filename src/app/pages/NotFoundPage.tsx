import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { AlertCircle } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-[var(--electric-blue)]/10 border-2 border-[var(--electric-blue)] rounded-full flex items-center justify-center">
                <AlertCircle size={48} className="text-[var(--electric-blue)]" />
              </div>
            </div>
            
            <h1 className="text-[64px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '700' }}>
              404
            </h1>
            
            <h2 className="text-[32px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
              Page not found
            </h2>
            
            <p className="text-[16px] text-[var(--slate-dark)] leading-[1.7] mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link
              to="/"
              className="inline-block bg-[var(--electric-blue)] hover:bg-blue-600 text-white px-8 py-3 text-[16px] transition-colors"
              style={{ fontWeight: '600' }}
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
