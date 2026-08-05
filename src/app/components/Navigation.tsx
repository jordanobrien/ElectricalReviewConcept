import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { topics } from "../data/topics";

const topicLinks = Object.values(topics);

const contentLinks = [
  { label: "Analysis", to: "/analysis" },
  { label: "News", to: "/news" },
  { label: "Opinion", to: "/opinion-articles" },
  { label: "Press Releases", to: "/press-releases" },
];

const primaryLinks = [
  { label: "Downloads", to: "/downloads" },
  { label: "Events", to: "/events" },
  { label: "Magazine", to: "/magazines" },
  { label: "Video", to: "/videos" },
];

const utilityRight = [
  { label: "Advertise with Us", to: "/advertise" },
  { label: "Newsletter", to: "/newsletter" },
];

export function Navigation() {
  const [showTopics, setShowTopics] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setShowTopics(false);
      setShowContent(false);
      setShowSearch(false);
      setShowMobileMenu(false);
      setSearchQuery("");
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMobileMenu = () => setShowMobileMenu(false);

  return (
    <nav className="relative z-40 border-b border-black/10 bg-white">
      <div className="bg-[#40528f] text-white">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-end px-4 md:px-8">
          <div className="flex items-center gap-4 sm:gap-6">
            {utilityRight.map((item) => (
              <Link key={item.to} to={item.to} className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-white sm:text-[11px]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#5a6eb4] text-white">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center" aria-label="Data Centre Review home">
            <img src="/dcr-logo-white.svg" alt="Data Centre Review" className="h-[58px] w-auto" />
          </Link>

          <div className="hidden items-center self-stretch lg:flex">
            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => {
                setShowContent(false);
                setShowTopics(true);
              }}
              onMouseLeave={() => setShowTopics(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setShowContent(false);
                  setShowTopics((open) => !open);
                }}
                aria-expanded={showTopics}
                aria-haspopup="menu"
                className="flex h-full items-center gap-2 border-x border-white/10 px-7 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-white/10"
              >
                Topics
                <ChevronDown size={16} className={`transition-transform ${showTopics ? "rotate-180" : ""}`} />
              </button>

              {showTopics && (
                <div className="absolute left-0 top-full w-[520px] border-t-4 border-[#9eacd9] bg-white p-3 text-[#5a6eb4] shadow-2xl" role="menu">
                  <div className="grid grid-cols-2 gap-1">
                    {topicLinks.map((topic) => (
                      <Link
                        key={topic.id}
                        to={`/topic/${topic.id}`}
                        role="menuitem"
                        onClick={() => setShowTopics(false)}
                        className="px-4 py-3 text-[14px] font-semibold leading-[1.25] transition-colors hover:bg-[#eef1fa]"
                      >
                        {topic.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => {
                setShowTopics(false);
                setShowContent(true);
              }}
              onMouseLeave={() => setShowContent(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setShowTopics(false);
                  setShowContent((open) => !open);
                }}
                aria-expanded={showContent}
                aria-haspopup="menu"
                className="flex h-full items-center gap-2 border-r border-white/10 px-7 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-white/10"
              >
                Content
                <ChevronDown size={16} className={`transition-transform ${showContent ? "rotate-180" : ""}`} />
              </button>

              {showContent && (
                <div className="absolute left-0 top-full w-[250px] border-t-4 border-[#9eacd9] bg-white p-3 text-[#5a6eb4] shadow-2xl" role="menu">
                  {contentLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      onClick={() => setShowContent(false)}
                      className="block px-4 py-3 text-[14px] font-semibold transition-colors hover:bg-[#eef1fa]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {primaryLinks.map((item) => (
              <Link key={item.to} to={item.to} className="flex h-full items-center px-7 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-white/10">
                {item.label}
              </Link>
            ))}

            <button type="button" onClick={() => setShowSearch(true)} className="ml-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#5a6eb4]" aria-label="Search">
              <Search size={19} />
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button type="button" onClick={() => setShowSearch(true)} className="flex h-10 w-10 items-center justify-center text-white/90" aria-label="Search">
              <Search size={20} />
            </button>
            <button type="button" onClick={() => setShowMobileMenu(true)} className="flex h-10 w-10 items-center justify-center text-white" aria-label="Open menu">
              <Menu size={25} />
            </button>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/60 lg:hidden" onClick={closeMobileMenu}>
          <div className="ml-auto h-full w-[min(90vw,430px)] overflow-y-auto bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">Menu</span>
              <button type="button" onClick={closeMobileMenu} className="text-[#5a6eb4]" aria-label="Close menu"><X size={24} /></button>
            </div>

            <div className="border-b border-gray-200 px-6 py-5">
              {primaryLinks.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeMobileMenu} className="block border-b border-gray-100 py-3 text-[16px] font-semibold text-[#5a6eb4] last:border-0">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-b border-gray-200 px-6 py-5">
              <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">Content</h2>
              {contentLinks.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeMobileMenu} className="block py-2.5 text-[14px] font-semibold leading-tight text-[#5a6eb4]">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-b border-gray-200 px-6 py-5">
              <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">Topics</h2>
              {topicLinks.map((topic) => (
                <Link key={topic.id} to={`/topic/${topic.id}`} onClick={closeMobileMenu} className="block py-2.5 text-[14px] font-semibold leading-tight text-[#5a6eb4]">
                  {topic.title}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 px-6 py-5">
              {utilityRight.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeMobileMenu} className="bg-[#eef1fa] px-3 py-3 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-[#5a6eb4]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {showSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm" onClick={() => setShowSearch(false)}>
          <div className="w-full max-w-[680px] bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-gray-200 p-6">
              <Search size={20} className="text-gray-500" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search Data Centre Review"
                className="flex-1 text-[18px] text-[#5a6eb4] outline-none placeholder:text-gray-400"
                autoFocus
              />
              <button type="button" onClick={() => setShowSearch(false)} className="text-gray-500" aria-label="Close search"><X size={22} /></button>
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">Browse topics</h2>
              <div className="grid gap-1 sm:grid-cols-2">
                {topicLinks.map((topic) => (
                  <Link key={topic.id} to={`/topic/${topic.id}`} onClick={() => setShowSearch(false)} className="px-3 py-2 text-[14px] font-semibold text-[#5a6eb4] hover:bg-[#eef1fa]">
                    {topic.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
