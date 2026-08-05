import { Link } from "react-router";
import { Bookmark, BookOpen } from "lucide-react";
import { TOPIC_COLORS } from "../utils/topicColors";

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
      id: "liquid-cooling-deployment-guide",
      topic: "Cooling",
      topicColor: TOPIC_COLORS['cooling-thermal-management'].bg,
      headline: "The Operator's Guide to Liquid Cooling Deployment",
      summary:
        "From facility water systems to rack interfaces, a practical map of the decisions that create a maintainable production environment.",
      readTime: "14 min read",
      imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop",
      publishDate: "2 August 2026",
    },
    {
      id: "data-centre-power-strategy",
      topic: "Power",
      topicColor: TOPIC_COLORS['power-energy'].bg,
      headline: "Building a Power Strategy for the Constrained-Grid Era",
      summary:
        "Align connection capacity, generation, storage, controls and operational risk across a growing data centre campus.",
      readTime: "13 min read",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
      publishDate: "30 July 2026",
    },
    {
      id: "ai-ready-retrofit-roadmap",
      topic: "Design & Operations",
      topicColor: TOPIC_COLORS['design-construction-operations'].bg,
      headline: "An AI-Ready Retrofit Roadmap for Live Facilities",
      summary:
        "Identify the halls, electrical paths and cooling zones that can support higher-density compute without compromising live customers.",
      readTime: "12 min read",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=800&fit=crop",
      publishDate: "27 July 2026",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Latest Analysis
          </h2>
          <Link
            to="/analysis"
            className="text-[14px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
            style={{ fontWeight: '500' }}
          >
            See All Analysis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsCards.map((card, index) => (
            <Link
              key={index}
              to={`/analysis/${card.id}`}
              className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all duration-300 block opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.headline}
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Analysis icon badge */}
                <div className="absolute bottom-3 left-3 bg-[var(--electric-blue)] text-white p-2 rounded shadow-lg">
                  <BookOpen size={16} strokeWidth={2.5} />
                </div>
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
                <p className="text-[13px] leading-[1.5] text-[var(--slate-dark)]">
                  {card.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
