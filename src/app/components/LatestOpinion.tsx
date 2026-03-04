import { Link } from "react-router";
import { opinionArticles } from "../data/opinionArticles";
import { MessageSquare, Clock } from "lucide-react";

export function LatestOpinion() {
  // Get first 3 opinion articles
  const displayArticles = opinionArticles.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100 relative">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--electric-blue)] to-[var(--navy-deep)] opacity-50"></div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Latest Opinion
          </h2>
          <Link
            to="/opinion-articles"
            className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
          >
            See All Opinion
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.map((article, index) => (
            <article key={article.id} className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full group hover:shadow-lg hover:border-[var(--electric-blue)]/30 transition-all duration-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              {/* Featured Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--navy-deep)]/90 text-white text-[10px] uppercase tracking-wider" style={{ fontWeight: '600' }}>
                    <MessageSquare size={11} />
                    Opinion
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <div className="text-[11px] text-[var(--electric-blue)] mb-3 uppercase tracking-wide" style={{ fontWeight: '600' }}>
                  {article.category}
                </div>

                {/* Title */}
                <Link to={`/opinion/${article.id}`}>
                  <h3 className="text-[18px] leading-[1.3] text-[var(--navy-deep)] mb-3 hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
                    {article.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="text-[14px] leading-[1.6] text-[var(--slate-dark)] mb-4 flex-1">
                  {article.summary}
                </p>

                {/* Author Section with Prominent Headshot */}
                <div className="pt-4 border-t border-gray-200 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Large Author Headshot */}
                    <img
                      src={article.author.imageUrl}
                      alt={article.author.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] text-[var(--navy-deep)] truncate" style={{ fontWeight: '600' }}>
                        {article.author.name}
                      </div>
                      <div className="text-[12px] text-[var(--slate-medium)] truncate">
                        {article.author.role}
                      </div>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-2 text-[12px] text-[var(--slate-medium)]">
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}