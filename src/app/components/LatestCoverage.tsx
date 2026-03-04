import { Link } from "react-router";
import { Bookmark } from "lucide-react";

interface NewsCard {
  id: string;
  topic: string;
  topicColor: string;
  headline: string;
  summary: string;
  readTime: string;
  imageUrl: string;
  publishDate: string;
}

export function LatestCoverage() {
  const newsCards: NewsCard[] = [
    {
      id: "dno-vs-idno-guide",
      topic: "Grid & Connections",
      topicColor: "bg-blue-700",
      headline: "Understanding DNO vs IDNO: The Complete Guide to Grid Connections",
      summary:
        "An in-depth exploration of the differences between DNOs and IDNOs, how they operate, and what fleet operators need to know when planning major grid connections.",
      readTime: "12 min read",
      imageUrl: "https://images.unsplash.com/photo-1552772588-12592fc15a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zbWlzc2lvbiUyMGxpbmVzfGVufDF8fHx8MTc3MjEwMzExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      publishDate: "2 March 2026",
    },
    {
      id: "depot-charging-infrastructure",
      topic: "EV Charging",
      topicColor: "bg-green-600",
      headline: "Depot Charging Infrastructure: From Planning to Commissioning",
      summary:
        "A comprehensive guide covering site assessment, load profiling, electrical design, procurement, installation, and testing for large-scale depot charging projects.",
      readTime: "15 min read",
      imageUrl: "https://images.unsplash.com/photo-1768310465625-5824a01fff4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIwMTQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      publishDate: "1 March 2026",
    },
    {
      id: "bess-design-installation",
      topic: "Storage & Resilience",
      topicColor: "bg-orange-600",
      headline: "Battery Energy Storage Systems: Design, Installation & Safety Standards",
      summary:
        "Technical deep dive into BESS sizing, system architecture, safety protocols, fire suppression, and compliance with UK regulations for commercial installations.",
      readTime: "14 min read",
      imageUrl: "https://images.unsplash.com/photo-1771432512609-18ed0f0d86ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5lcmd5JTIwc3RvcmFnZXxlbnwxfHx8fDE3NzIxMDMxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      publishDate: "28 Feb 2026",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100 relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--electric-blue)] to-transparent opacity-50"></div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Latest Deep Dives
          </h2>
          <Link 
            to="/deep-dives" 
            className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
            style={{ fontWeight: '500' }}
          >
            See All Deep Dives
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsCards.map((card, index) => (
            <Link
              key={index}
              to={`/deep-dive/${card.id}`}
              className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all duration-300 block opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.headline}
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Bookmark icon */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Bookmark size={16} className="text-[var(--navy-deep)]" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${card.topicColor} text-white px-2.5 py-1 text-[10px] tracking-wide uppercase inline-block`}>
                    {card.topic}
                  </span>
                  <span className="text-[11px] text-[var(--slate-medium)]">{card.publishDate}</span>
                </div>
                <h3 className="text-[16px] leading-[1.3] mb-2 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                  {card.headline}
                </h3>
                <p className="text-[13px] leading-[1.5] text-[var(--slate-dark)] mb-3">
                  {card.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[12px]">
                    <span className="bg-[var(--electric-blue)]/10 text-[var(--electric-blue)] px-2 py-0.5 text-[10px] uppercase tracking-wider" style={{ fontWeight: '600' }}>
                      Deep Dive
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}