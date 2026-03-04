import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { articles } from "../data/articles";

export function InBrief() {
  // Get the first 4 articles
  const briefItems = articles.slice(0, 4);

  return (
    <div className="bg-white border border-gray-200 p-6 h-full flex flex-col">
      <ul className="space-y-4 mb-6 flex-1">
        {briefItems.map((item) => (
          <li key={item.id} className="flex gap-3 group">
            <ArrowRight size={18} className="text-[var(--electric-blue)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <div className="flex-1">
              <Link
                to={`/article/${item.id}`}
                className="text-[14px] leading-[1.4] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors block mb-1"
              >
                {item.headline}
              </Link>
              <span className="text-[12px] text-[var(--slate-medium)]">{item.publishDate}</span>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/news"
        className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
      >
        More in News
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}