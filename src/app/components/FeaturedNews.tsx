import { ChevronRight, Newspaper } from "lucide-react";
import { Link } from "react-router";

export function FeaturedNews() {
  return (
    <article className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all duration-300">
      <Link to="/article/ofgem-compliance-gap" className="relative overflow-hidden block">
        <span className="absolute top-4 left-4 bg-[var(--topic-grid)] text-white px-3 py-1 text-[11px] tracking-wide uppercase z-10">
          Grid & Connections
        </span>
        <img
          src="https://images.unsplash.com/photo-1720645042951-014193bb5c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZ3JpZCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MjEwMzExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Grid infrastructure"
          className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* News icon badge */}
        <div className="absolute bottom-3 right-3 bg-[var(--slate-dark)] text-white p-2 rounded shadow-lg">
          <Newspaper size={16} strokeWidth={2.5} />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[12px] text-[var(--slate-medium)]">3 March 2026</span>
        </div>
        <Link to="/article/ofgem-compliance-gap">
          <h3 className="text-[22px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
            OFGEM flags compliance gaps in new connection requests
          </h3>
        </Link>
        <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
          Compliance gaps in new grid connection requests could "actively hamper" project delivery across the UK's networks, warns Ofgem in the UK regulator's...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12px] text-[var(--slate-medium)]">
            <span>4 min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}