import { Navigation } from "../components/Navigation";
import { HeroBanner } from "../components/HeroBanner";
import { InBrief } from "../components/InBrief";
import { FeaturedNews } from "../components/FeaturedNews";
import { LatestCoverage } from "../components/LatestCoverage";
import { DeepDive } from "../components/DeepDive";
import { LatestOpinion } from "../components/LatestOpinion";
import { LatestVideos } from "../components/LatestVideos";
import { TopicsGrid } from "../components/TopicsGrid";
import { PressReleases } from "../components/PressReleases";
import { LatestEvents } from "../components/LatestEvents";
import { LatestDownloads } from "../components/LatestDownloads";
import { Footer } from "../components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroBanner />

      {/* Main content area */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Two column layout with headings above boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Latest News Column */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="mb-4">
                <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                  Latest News
                </h2>
              </div>
              <div className="flex-1">
                <InBrief />
              </div>
            </div>
            
            {/* Featured News Column */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                  Featured News
                </h2>
                <Link
                  to="/news"
                  className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                >
                  See All News
                  <ChevronRight size={14} />
                </Link>
              </div>
              <div className="flex-1">
                <FeaturedNews />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LatestCoverage />
      <DeepDive />
      
      {/* Topics Section - Full Width */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <h2 className="text-[24px] mb-6 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Explore By Topic
          </h2>
          <TopicsGrid />
        </div>
      </section>
      
      {/* Newsletter CTA - Prominent Placement */}
      <section className="py-16 bg-gradient-to-br from-[var(--navy-deep)] via-[#1e3a5f] to-[var(--navy-deep)] relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--electric-blue)]/20 border border-[var(--electric-blue)]/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[var(--electric-blue)] rounded-full animate-pulse"></span>
              <span className="text-[var(--electric-blue)] text-[12px] uppercase tracking-wider" style={{ fontWeight: '600' }}>
                Industry Insights Delivered Weekly
              </span>
            </div>
            
            <h2 className="text-[32px] text-white mb-4" style={{ fontWeight: '600' }}>
              Stay ahead of the electrification curve
            </h2>
            <p className="text-[16px] text-white/90 mb-8 leading-[1.6]">
              Get expert analysis, technical deep dives, and industry news delivered straight to your inbox. Join thousands of professionals shaping the UK's electrification infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 text-[15px] text-[var(--navy-deep)] bg-white border-2 border-white focus:outline-none focus:border-[var(--electric-blue)] rounded"
              />
              <button className="bg-[var(--electric-blue)] hover:bg-blue-500 text-white px-8 py-3.5 text-[15px] transition-all hover:shadow-lg hover:scale-105 rounded" style={{ fontWeight: '600' }}>
                Subscribe Now
              </button>
            </div>
            
            <p className="text-[12px] text-white/70 mt-4">
              No spam. Unsubscribe anytime. View our <a href="/privacy" className="underline hover:text-white">privacy policy</a>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Videos and Latest Events Section - Side by Side */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Latest Videos Column - Stacked Layout */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
                  Latest videos
                </h2>
                <Link
                  to="/videos"
                  className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
                  style={{ fontWeight: '600' }}
                >
                  View all videos →
                </Link>
              </div>
              <div className="space-y-4">
                {/* Videos will be stacked vertically */}
                <LatestVideos />
              </div>
            </div>
            
            {/* Latest Events Column */}
            <div className="lg:col-span-4">
              <LatestEvents />
            </div>
          </div>
        </div>
      </section>

      <LatestOpinion />
      
      {/* Press Releases and Downloads Section - Side by Side */}
      <section className="py-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Press Releases Column */}
            <div>
              <PressReleases />
            </div>
            
            {/* Latest Downloads Column */}
            <div>
              <LatestDownloads />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}