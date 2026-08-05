import { Building2, Cable, Landmark, Leaf, Snowflake, Zap } from "lucide-react";
import { Link } from "react-router";
import { topics } from "../data/topics";

const icons = {
  cooling: Snowflake,
  building: Building2,
  network: Cable,
  markets: Landmark,
  power: Zap,
  sustainability: Leaf,
};

export function TopicsGrid() {
  const orderedTopics = Object.values(topics);

  return (
    <div className="grid grid-cols-1 border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
      {orderedTopics.map((topic) => {
        const Icon = icons[topic.icon as keyof typeof icons] || Building2;
        return (
          <Link
            key={topic.id}
            to={`/topic/${topic.id}`}
            className="group relative flex min-h-[180px] flex-col border-b border-r border-gray-200 bg-white p-6 transition-colors hover:bg-[#eef1fa] md:p-7"
          >
            <Icon size={25} strokeWidth={1.8} className="mb-5 text-[#5a6eb4]" />
            <h3 className="mb-2 text-[18px] leading-tight text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{topic.title}</h3>
            <p className="flex-grow text-[13px] leading-[1.55] text-[var(--slate-dark)]">{topic.description}</p>
            <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">Explore →</span>
          </Link>
        );
      })}
    </div>
  );
}
