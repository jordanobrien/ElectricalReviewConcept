import { FileText, Download, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { downloads } from "../data/downloads";
import { getPrimaryTopicTitle } from "../utils/topicColors";

export function LatestDownloads() {
  // Get first 4 downloads
  const displayDownloads = downloads.slice(0, 4);

  return (
    <div className="bg-white border border-gray-200 p-6 h-full flex flex-col">
      <h2 className="text-[18px] mb-5 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
        Latest Downloads
      </h2>
      <ul className="space-y-4 mb-6 flex-1">
        {displayDownloads.map((download) => (
          <li key={download.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex gap-3">
              {/* File Icon */}
              <div className="w-12 h-12 bg-[var(--slate-light)] border border-gray-200 flex items-center justify-center flex-shrink-0 rounded">
                <FileText size={24} className="text-[var(--slate-dark)]" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="text-[11px] text-[var(--electric-blue)] mb-1 uppercase tracking-wide">
                  {getPrimaryTopicTitle(download.topics, download.category)}
                </div>
                <Link
                  to={`/download/${download.id}`}
                  className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4] block mb-2 font-medium"
                >
                  {download.title}
                </Link>
                <div className="flex items-center gap-3 text-[12px] text-[var(--slate-medium)]">
                  <span>{download.type}</span>
                  <span>•</span>
                  <span>{download.size}</span>
                </div>
              </div>
              
              {/* Download Button */}
              <Link
                to={`/download/${download.id}`}
                className="self-center p-2 hover:bg-gray-100 rounded transition-colors"
                aria-label={`Download ${download.title}`}
              >
                <Download size={18} className="text-[var(--electric-blue)]" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/downloads"
        className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
      >
        View all downloads
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}
