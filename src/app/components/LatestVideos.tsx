import { Link } from "react-router";
import { Play, Clock, Eye } from "lucide-react";
import { videos } from "../data/videos";
import { getTopicColorByCategory } from "../utils/topicColors";

export function LatestVideos() {
  const latestVideos = videos.slice(0, 2);

  return (
    <div className="space-y-4">
      {latestVideos.map((video) => (
        <Link
          key={video.id}
          to={`/video/${video.id}`}
          className="group flex flex-col sm:flex-row gap-4 bg-white border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
        >
          {/* Thumbnail */}
          <div className="relative w-full sm:w-[280px] flex-shrink-0 aspect-video overflow-hidden bg-gray-900">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-[var(--electric-blue)] rounded-full flex items-center justify-center">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 flex items-center gap-1">
              <Clock size={12} className="text-white" />
              <span className="text-white text-[11px]" style={{ fontWeight: '600' }}>
                {video.duration}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:py-4 sm:pr-4 flex-1 flex flex-col">
            {/* Category & Date */}
            <div className="flex items-center justify-between mb-3">
              {video.isSponsored && video.sponsorLogo ? (
                <div className="flex items-center gap-2">
                  <img
                    src={video.sponsorLogo}
                    alt={video.sponsor}
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-[10px] text-amber-600 uppercase tracking-wide" style={{ fontWeight: '600' }}>
                    Sponsored
                  </span>
                </div>
              ) : (
                <span
                  className="text-white px-2.5 py-1 text-[10px] tracking-wide uppercase inline-block"
                  style={{ backgroundColor: getTopicColorByCategory(video.category).cssVar }}
                >
                  {video.category}
                </span>
              )}
              <span className="text-[11px] text-[var(--slate-medium)]">{video.publishDate}</span>
            </div>

            {/* Title */}
            <h3 className="text-[16px] leading-[1.3] mb-2 text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors" style={{ fontWeight: '600' }}>
              {video.title}
            </h3>

            {/* Views */}
            <div className="flex items-center gap-1 text-[12px] text-[var(--slate-medium)] mt-auto">
              <Eye size={12} />
              {video.views} views
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}