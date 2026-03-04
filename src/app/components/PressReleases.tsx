import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import abbLogo from "figma:asset/e2e5ae183c23612418776f21bc9f917b1ae6c068.png";
import siemensLogo from "figma:asset/27568e539c1371835eae37bf7fa63a78ed21d34d.png";
import schneiderLogo from "figma:asset/c996060d11d90ebd9268c794033e78653888594b.png";
import legrandLogo from "figma:asset/5746765b8424685bcaca58dba1263589ab9b5a83.png";

export function PressReleases() {
  const releases = [
    { 
      id: "abb-switchgear-launch",
      company: "ABB",
      text: "ABB Launches Two Energy-Efficient Switchgear Ranges", 
      time: "1d ago",
      logo: abbLogo
    },
    { 
      id: "siemens-bp-pulse-partnership",
      company: "Siemens",
      text: "Siemens Expands EV Infrastructure Partnership with BP Pulse", 
      time: "2d ago",
      logo: siemensLogo
    },
    { 
      id: "schneider-modular-ups",
      company: "Schneider Electric",
      text: "Schneider Electric Introduces New Modular UPS", 
      time: "3d ago",
      logo: schneiderLogo
    },
    { 
      id: "legrand-ev-charging-portfolio",
      company: "Legrand",
      text: "Legrand Expands EV Charging Portfolio with Smart Solutions", 
      time: "4d ago",
      logo: legrandLogo
    },
  ];

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
                <img 
                  src={release.logo} 
                  alt={release.company}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="text-[12px] text-[var(--slate-medium)] mb-1">{release.time}</div>
                <Link
                  to={`/press-release/${release.id}`}
                  className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4]"
                >
                  {release.text}
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