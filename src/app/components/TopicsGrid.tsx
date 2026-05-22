import { Link } from "react-router";
import { TOPIC_COLORS } from "../utils/topicColors";

interface Topic {
  title: string;
  description: string;
  color: string;
  icon: string;
  id: string;
  articleCount: number;
}

export function TopicsGrid() {
  const topics: Topic[] = [
    {
      title: "Grid & Connections",
      description: "Capacity, connection, uptime, power quality",
      color: TOPIC_COLORS['grid-connections'].bg,
      icon: "grid",
      id: "grid-connections",
      articleCount: 127,
    },
    {
      title: "EV Charging Infrastructure",
      description: "Depot, transit, destination, uptime, CPM",
      color: TOPIC_COLORS['ev-charging'].bg,
      icon: "charging",
      id: "ev-charging",
      articleCount: 94,
    },
    {
      title: "Storage & Resilience",
      description: "On-site, re-charge, peaking power",
      color: TOPIC_COLORS['storage-resilience'].bg,
      icon: "storage",
      id: "storage-resilience",
      articleCount: 68,
    },
    {
      title: "Commissioning & Reliability",
      description: "Testing, standards, maintenance, operations",
      color: TOPIC_COLORS['commissioning-reliability'].bg,
      icon: "reliability",
      id: "commissioning-reliability",
      articleCount: 82,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {topics.map((topic, index) => (
        <Link
          key={index}
          to={`/topic/${topic.id}`}
          className={`${topic.color} text-white p-6 flex flex-col hover:opacity-90 transition-all duration-300 relative overflow-hidden group opacity-0 animate-fadeIn`}
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          {/* Icon placeholder */}
          <div className="mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
            {topic.icon === "grid" && (
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
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
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                <rect x="14" y="8" width="20" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 18l4 6h-2v6l-4-6h2v-6z" fill="currentColor"/>
                <rect x="18" y="12" width="12" height="3" fill="currentColor"/>
              </svg>
            )}
            {topic.icon === "storage" && (
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                <rect x="10" y="10" width="28" height="8" stroke="currentColor" strokeWidth="2"/>
                <rect x="10" y="20" width="28" height="8" stroke="currentColor" strokeWidth="2"/>
                <rect x="10" y="30" width="28" height="8" stroke="currentColor" strokeWidth="2"/>
                <circle cx="16" cy="14" r="1.5" fill="currentColor"/>
                <circle cx="16" cy="24" r="1.5" fill="currentColor"/>
                <circle cx="16" cy="34" r="1.5" fill="currentColor"/>
              </svg>
            )}
            {topic.icon === "reliability" && (
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-white">
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
                <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="2" fill="currentColor"/>
              </svg>
            )}
          </div>
          <h3 className="text-[16px] mb-2 relative z-10" style={{ fontWeight: '600' }}>
            {topic.title}
          </h3>
          <p className="text-[12px] text-white/90 mb-4 flex-grow relative z-10">
            {topic.description}
          </p>
          <div className="flex items-center justify-between relative z-10">
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 text-[12px] transition-colors border border-white/30">
              View Topics
            </button>
            <span className="text-[11px] text-white/80 bg-white/10 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontWeight: '600' }}>
              {topic.articleCount} articles
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}