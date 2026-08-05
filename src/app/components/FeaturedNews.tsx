import { ChevronRight, Newspaper } from "lucide-react";
import { Link } from "react-router";

export function FeaturedNews() {
  return (
    <article className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all duration-300">
      <Link to="/article/ai-density-rewrites-data-centre-design" className="relative overflow-hidden block">
        <span className="absolute top-4 left-4 bg-[var(--navy-deep)] text-white px-3 py-1 text-[11px] tracking-wide uppercase z-10">
          Data Centre Design & Operations
        </span>
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop"
          alt="Rows of data centre server racks"
          className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* News icon badge */}
        <div className="absolute bottom-3 right-3 bg-[var(--slate-dark)] text-white p-2 rounded shadow-lg">
          <Newspaper size={16} strokeWidth={2.5} />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[12px] text-[var(--slate-medium)]">5 August 2026</span>
        </div>
        <Link to="/article/ai-density-rewrites-data-centre-design">
          <h3 className="text-[22px] leading-[1.3] mb-3 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
            AI density is rewriting the data centre design rulebook
          </h3>
        </Link>
        <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
          Operators are redesigning power trains, white space and cooling loops as accelerated compute moves from isolated pods to campus-wide deployment.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12px] text-[var(--slate-medium)]">
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}
