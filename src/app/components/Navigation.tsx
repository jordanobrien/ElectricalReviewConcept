import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export function Navigation() {
  const [showTopicsDropdown, setShowTopicsDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
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
      title: "Grid & Connections",
      description: "Capacity, connection, uptime, power quality",
      icon: "grid",
      id: "grid-connections",
    },
    {
      title: "EV Charging Infrastructure",
      description: "Depot, transit, destination, uptime, CPM",
      icon: "charging",
      id: "ev-charging",
    },
    {
      title: "Storage & Resilience",
      description: "On-site, re-charge, peaking power",
      icon: "storage",
      id: "storage-resilience",
    },
    {
      title: "Commissioning & Reliability",
      description: "Testing, standards, maintenance, operations",
      icon: "reliability",
      id: "commissioning-reliability",
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="tracking-[0.08em] font-bold text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">
            ELECTRICAL REVIEW
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setShowTopicsDropdown(true)}
              onMouseLeave={() => setShowTopicsDropdown(false)}
            >
              <button className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] flex items-center gap-1">
                Topics
                <svg width="8" height="5" viewBox="0 0 8 5" fill="currentColor">
                  <path d="M4 5L0 0h8L4 5z"/>
                </svg>
              </button>
              
              {/* Topics Dropdown */}
              {showTopicsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-[680px] bg-white border border-gray-200 shadow-lg">
                    <div className="grid grid-cols-2 gap-4 p-6">
                      {topics.map((topic, index) => (
                        <Link
                          key={index}
                          to={`/topic/${topic.id}`}
                          className="group p-5 border border-gray-200 hover:border-[var(--electric-blue)] transition-colors bg-white hover:bg-gray-50"
                        >
                          {/* Icon */}
                          <div className="mb-3">
                            {topic.icon === "grid" && (
                              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors">
                                <rect x="8" y="8" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
                                <rect x="28" y="8" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
                                <rect x="8" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
                                <rect x="28" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
                                <path d="M20 14h8M14 20v8M34 20v8M20 34h8" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="24" cy="14" r="2" fill="currentColor"/>
                                <circle cx="14" cy="24" r="2" fill="currentColor"/>
                                <circle cx="34" cy="24" r="2" fill="currentColor"/>
                                <circle cx="24" cy="34" r="2" fill="currentColor"/>
                              </svg>
                            )}
                            {topic.icon === "charging" && (
                              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors">
                                <rect x="14" y="8" width="20" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                                <path d="M20 18l4 6h-2v6l-4-6h2v-6z" fill="currentColor"/>
                                <rect x="18" y="12" width="12" height="3" fill="currentColor"/>
                              </svg>
                            )}
                            {topic.icon === "storage" && (
                              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors">
                                <rect x="10" y="10" width="28" height="8" stroke="currentColor" strokeWidth="2"/>
                                <rect x="10" y="20" width="28" height="8" stroke="currentColor" strokeWidth="2"/>
                                <rect x="10" y="30" width="28" height="8" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="16" cy="14" r="1.5" fill="currentColor"/>
                                <circle cx="16" cy="24" r="1.5" fill="currentColor"/>
                                <circle cx="16" cy="34" r="1.5" fill="currentColor"/>
                              </svg>
                            )}
                            {topic.icon === "reliability" && (
                              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors">
                                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
                                <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <circle cx="24" cy="24" r="2" fill="currentColor"/>
                              </svg>
                            )}
                          </div>
                          <h3 className="text-[14px] text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors mb-1" style={{ fontWeight: '600' }}>
                            {topic.title}
                          </h3>
                          <p className="text-[12px] text-[var(--slate-dark)] leading-[1.5]">
                            {topic.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/news" className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">
              News
            </Link>
            <Link to="/deep-dives" className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">
              Deep Dives
            </Link>
            <Link to="/opinion-articles" className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">
              Opinion
            </Link>
            <Link to="/press-releases" className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">
              Press Releases
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setShowMoreDropdown(true)}
              onMouseLeave={() => setShowMoreDropdown(false)}
            >
              <button className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] flex items-center gap-1">
                More
                <svg width="8" height="5" viewBox="0 0 8 5" fill="currentColor">
                  <path d="M4 5L0 0h8L4 5z"/>
                </svg>
              </button>
              
              {/* More Dropdown */}
              {showMoreDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-[280px] bg-white border border-gray-200 shadow-lg">
                    <div className="py-2">
                      <Link
                        to="/events"
                        className="block px-5 py-3 text-[14px] text-[var(--navy-deep)] hover:bg-gray-50 hover:text-[var(--electric-blue)] transition-colors"
                        style={{ fontWeight: '500' }}
                      >
                        Events
                      </Link>
                      <Link
                        to="/downloads"
                        className="block px-5 py-3 text-[14px] text-[var(--navy-deep)] hover:bg-gray-50 hover:text-[var(--electric-blue)] transition-colors"
                        style={{ fontWeight: '500' }}
                      >
                        Downloads
                      </Link>
                      <Link
                        to="/magazines"
                        className="block px-5 py-3 text-[14px] text-[var(--navy-deep)] hover:bg-gray-50 hover:text-[var(--electric-blue)] transition-colors"
                        style={{ fontWeight: '500' }}
                      >
                        Magazines
                      </Link>
                      <Link
                        to="/videos"
                        className="block px-5 py-3 text-[14px] text-[var(--navy-deep)] hover:bg-gray-50 hover:text-[var(--electric-blue)] transition-colors"
                        style={{ fontWeight: '500' }}
                      >
                        Videos
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="flex items-center gap-2 text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)]" onClick={() => setShowSearchModal(true)}>
              Search
              <Search size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-50 pt-24">
          <div 
            className="bg-white w-full max-w-[680px] mx-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3">
              <Link to="/" className="tracking-[0.08em] font-bold text-[var(--navy-deep)] hover:text-[var(--electric-blue)]">
                ELECTRICAL REVIEW
              </Link>
              <button className="text-[var(--navy-deep)] hover:text-[var(--electric-blue)]" onClick={() => setShowMobileMenu(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="px-5 py-3">
              <Link to="/news" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                News
              </Link>
              <Link to="/deep-dives" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                Deep Dives
              </Link>
              <Link to="/opinion-articles" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                Opinion
              </Link>
              <Link to="/press-releases" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                Press Releases
              </Link>
              <Link to="/events" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                Events
              </Link>
              <Link to="/downloads" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                Downloads
              </Link>
              <Link to="/magazines" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
                Magazines
              </Link>
              <Link to="/videos" className="block text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors">
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
                  <h3 className="text-[14px] text-[var(--slate-medium)] uppercase tracking-wide mb-4" style={{ fontWeight: '600' }}>
                    Popular Topics
                  </h3>
                  <div className="space-y-2">
                    <Link
                      to="/topic/grid-connections"
                      className="block text-[15px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                      onClick={() => setShowSearchModal(false)}
                    >
                      Grid & Connections
                    </Link>
                    <Link
                      to="/topic/ev-charging"
                      className="block text-[15px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                      onClick={() => setShowSearchModal(false)}
                    >
                      EV Charging Infrastructure
                    </Link>
                    <Link
                      to="/topic/storage-resilience"
                      className="block text-[15px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                      onClick={() => setShowSearchModal(false)}
                    >
                      Storage & Resilience
                    </Link>
                    <Link
                      to="/topic/commissioning-reliability"
                      className="block text-[15px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] py-2 hover:bg-gray-50 px-3 transition-colors"
                      onClick={() => setShowSearchModal(false)}
                    >
                      Commissioning & Reliability
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[14px] text-[var(--slate-medium)] mb-4">
                    Searching for "<span className="text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>{searchQuery}</span>"...
                  </p>
                  <p className="text-[13px] text-[var(--slate-medium)] italic">
                    Search functionality coming soon. This is a demonstration of the search interface.
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