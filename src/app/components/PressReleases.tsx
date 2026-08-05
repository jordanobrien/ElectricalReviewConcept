import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { pressReleases } from "../data/pressReleases";

export function PressReleases() {
  const releases = pressReleases.slice(0, 4);

  return (
    <div className="bg-white border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-[18px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
          Press Releases
        </h2>
        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] uppercase tracking-wider" style={{ fontWeight: '600' }}>
          Sponsored
        </span>
      </div>
      <ul className="space-y-4 mb-6 flex-1">
        {releases.map((release, index) => (
          <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex gap-4">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                <span className="text-[22px] text-[var(--navy-deep)]" style={{ fontWeight: '700' }}>{release.company.charAt(0)}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="text-[12px] text-[var(--slate-medium)] mb-1">{release.company} · {release.date}</div>
                <Link
                  to={`/press-release/${release.id}`}
                  className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4]"
                >
                  {release.headline}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/press-releases"
        className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
      >
        View all press releases
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}
