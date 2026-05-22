import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export function Navigation() {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle ESC key to close search modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSearchModal) {
        setShowSearchModal(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showSearchModal]);

  const topics = [
    {
      title: "Commissioning & Reliability",
      id: "commissioning-reliability",
      color: "var(--topic-commissioning)",
    },
    {
      title: "EV Charging Infrastructure",
      id: "ev-charging",
      color: "var(--topic-ev)",
    },
    {
      title: "Grid & Connections",
      id: "grid-connections",
      color: "var(--topic-grid)",
    },
    {
      title: "Storage & Resilience",
      id: "storage-resilience",
      color: "var(--topic-storage)",
    },
  ];

  const exploreCategories = [
    {
      title: "Deep Dives",
      description: "Comprehensive technical guides and in-depth analysis for electrification infrastructure professionals",
      link: "/deep-dives",
    },
    {
      title: "Downloads",
      description: "Technical resources, white papers, and industry reports for infrastructure planning",
      link: "/downloads",
    },
    {
      title: "Events",
      description: "Industry conferences, workshops, and networking opportunities across the UK",
      link: "/events",
    },
    {
      title: "Magazines",
      description: "Digital editions of Electrical Review magazine archives and special publications",
      link: "/magazines",
    },
    {
      title: "News",
      description: "Breaking news and updates from the electrification infrastructure sector",
      link: "/news",
    },
    {
      title: "Opinions",
      description: "Expert perspectives and industry insights from leading practitioners and thought leaders",
      link: "/opinion-articles",
    },
    {
      title: "Press Releases",
      description: "Latest announcements and product launches from industry leaders and suppliers",
      link: "/press-releases",
    },
    {
      title: "Videos",
      description: "Video interviews, site tours, and technical demonstrations from industry experts",
      link: "/videos",
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Desktop Header */}
      <div className="hidden md:flex items-stretch h-[72px]">
        {/* Logo section */}
        <div className="flex items-center justify-center px-10 border-r border-gray-300" style={{ backgroundColor: '#c3d100' }}>
          <Link to="/" className="flex items-center">
            <img
              src="/src/imports/logo_2026.png"
              alt="Electrical Review"
              className="h-[28px] w-auto"
            />
          </Link>
        </div>

        {/* Explore section */}
        <div
          className="flex items-center justify-center px-10 border-r border-gray-300 relative"
          style={{ backgroundColor: '#c3d100' }}
          onMouseEnter={() => setShowExploreDropdown(true)}
          onMouseLeave={() => setShowExploreDropdown(false)}
        >
          <button className="text-[16px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] flex items-center gap-2" style={{ fontWeight: "600" }}>
            Explore
            <ChevronDown size={18} />
          </button>

          {/* Explore Mega Menu - Full Width */}
          {showExploreDropdown && (
            <div className="fixed left-0 right-0 top-[72px] z-50">
              <div className="bg-white border-b border-gray-200 shadow-xl">
                <div className="grid grid-cols-12">
                  {/* Featured/Recommended Section - Left Side */}
                  <div className="col-span-3 bg-[var(--navy-deep)] p-8">
                    <div className="mb-6">
                      <h3 className="text-white text-[16px] mb-6" style={{ fontWeight: "600" }}>
                        Featured Event
                      </h3>

                      {/* The Briefing Event Advertisement */}
                      <Link to="/events" className="block group">
                        <div className="bg-gradient-to-br from-[#e07849] to-[#d4653a] p-6 rounded overflow-hidden relative hover:shadow-lg transition-shadow">
                          <div className="text-white/90 text-[11px] italic mb-2 tracking-wide" style={{ fontWeight: "600" }}>
                            EV CHARGING INFRASTRUCTURE
                          </div>
                          <div className="text-white text-[14px] mb-3" style={{ fontWeight: "500" }}>
                            Wednesday 20 May 2026
                          </div>
                          <h4 className="text-white text-[20px] leading-[1.2] mb-4" style={{ fontWeight: "700" }}>
                            Reliable, affordable grid-ready charging
                          </h4>
                          <div className="pt-3 border-t border-white/20">
                            <p className="text-white/70 text-[11px] uppercase tracking-wide">
                              BROUGHT TO YOU BY ELECTRICAL REVIEW
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <h4 className="text-white/70 text-[13px] uppercase tracking-wider mb-3" style={{ fontWeight: "600" }}>
                        Quick Access
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <button
                            onClick={() => setShowSearchModal(true)}
                            className="text-white/80 hover:text-white text-[14px] transition-colors flex items-center gap-2"
                          >
                            <Search size={16} />
                            Search
                          </button>
                        </li>
                        <li>
                          <Link
                            to="/magazines"
                            className="text-white/80 hover:text-white text-[14px] transition-colors"
                          >
                            Digital Magazines
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/newsletter"
                            className="text-white/80 hover:text-white text-[14px] transition-colors"
                          >
                            Newsletter Signup
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/submit-press-release"
                            className="text-[var(--electric-blue)] hover:text-blue-300 text-[14px] transition-colors"
                            style={{ fontWeight: "600" }}
                          >
                            Submit Press Release →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Navigation Categories - Right Side */}
                  <div className="col-span-9 py-8 px-8 flex items-center">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-full">
                      {exploreCategories.map((category, index) => (
                        <Link
                          key={index}
                          to={category.link}
                          className="block group"
                        >
                          <h3 className="text-[16px] text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] mb-2 transition-colors" style={{ fontWeight: "600" }}>
                            {category.title}
                          </h3>
                          <p className="text-[13px] text-[var(--slate-medium)] leading-[1.5]">
                            {category.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Topic navigation bars - colored sections */}
        <div className="flex flex-1">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topic/${topic.id}`}
              className="flex-1 flex items-center justify-center px-4 text-white text-center text-[15px] hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: topic.color,
                fontWeight: "500",
              }}
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-8 py-4">
          <Link
            to="/"
            className="tracking-[0.08em] font-bold text-[var(--navy-deep)] hover:text-[var(--electric-blue)]"
          >
            ELECTRICAL REVIEW
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearchModal(true)}
              className="text-[var(--navy-deep)] hover:text-[var(--electric-blue)]"
            >
              <Search size={20} />
            </button>
            <button
              className="text-[var(--navy-deep)]"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-50 pt-24">
          <div
            className="bg-white w-full max-w-[680px] mx-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
              <Link
                to="/"
                className="tracking-[0.08em] font-bold text-[var(--navy-deep)] hover:text-[var(--electric-blue)]"
              >
                ELECTRICAL REVIEW
              </Link>
              <button
                className="text-[var(--navy-deep)] hover:text-[var(--electric-blue)]"
                onClick={() => setShowMobileMenu(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Topics Section */}
            <div className="px-5 py-4 border-b border-gray-200">
              <h3
                className="text-[12px] text-[var(--slate-medium)] uppercase tracking-wider mb-3"
                style={{ fontWeight: "600" }}
              >
                Topics
              </h3>
              {topics.map((topic, index) => (
                <Link
                  key={index}
                  to={`/topic/${topic.id}`}
                  className="block py-2 px-3 mb-1 text-[14px] hover:bg-gray-50 transition-colors"
                  style={{ color: topic.color, fontWeight: "500" }}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {topic.title}
                </Link>
              ))}
            </div>

            {/* Other Links Section */}
            <div className="px-5 py-4">
              <h3
                className="text-[12px] text-[var(--slate-medium)] uppercase tracking-wider mb-3"
                style={{ fontWeight: "600" }}
              >
                Content
              </h3>
              <Link
                to="/news"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                News
              </Link>
              <Link
                to="/deep-dives"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Deep Dives
              </Link>
              <Link
                to="/opinion-articles"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Opinion
              </Link>
              <Link
                to="/press-releases"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Press Releases
              </Link>
              <Link
                to="/events"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Events
              </Link>
              <Link
                to="/downloads"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Downloads
              </Link>
              <Link
                to="/magazines"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Magazines
              </Link>
              <Link
                to="/videos"
                className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                Videos
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-50 pt-24"
          onClick={() => setShowSearchModal(false)}
        >
          <div
            className="bg-white w-full max-w-[680px] mx-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <Search size={20} className="text-[var(--slate-medium)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, press releases, and more..."
                  className="flex-1 text-[18px] text-[var(--navy-deep)] focus:outline-none placeholder:text-[var(--slate-light)]"
                  autoFocus
                />
                <button
                  onClick={() => setShowSearchModal(false)}
                  className="text-[13px] text-[var(--slate-medium)] hover:text-[var(--navy-deep)] px-3 py-1 border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  ESC
                </button>
              </div>
            </div>

            {/* Search Results / Suggestions */}
            <div className="p-6">
              {!searchQuery ? (
                <div>
                  <h3
                    className="text-[14px] text-[var(--slate-medium)] uppercase tracking-wide mb-4"
                    style={{ fontWeight: "600" }}
                  >
                    Popular Topics
                  </h3>
                  <div className="space-y-2">
                    {topics.map((topic, index) => (
                      <Link
                        key={index}
                        to={`/topic/${topic.id}`}
                        className="block text-[15px] py-2 hover:bg-gray-50 px-3 transition-colors"
                        style={{ color: topic.color, fontWeight: "500" }}
                        onClick={() => setShowSearchModal(false)}
                      >
                        {topic.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[14px] text-[var(--slate-medium)] mb-4">
                    Searching for "
                    <span
                      className="text-[var(--navy-deep)]"
                      style={{ fontWeight: "600" }}
                    >
                      {searchQuery}
                    </span>
                    "...
                  </p>
                  <p className="text-[13px] text-[var(--slate-medium)] italic">
                    Search functionality coming soon. This is a demonstration
                    of the search interface.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}