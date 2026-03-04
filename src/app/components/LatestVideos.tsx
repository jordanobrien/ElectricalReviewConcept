import { Link } from "react-router";
import { Play, Clock, Eye } from "lucide-react";
import { videos } from "../data/videos";

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
            {/* Category & Views */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-[var(--electric-blue)] uppercase tracking-wide" style={{ fontWeight: '600' }}>
                {video.category}
              </span>
              <div className="flex items-center gap-1 text-[11px] text-[var(--slate-medium)]">
                <Eye size={12} />
                {video.views}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-[18px] text-[var(--navy-deep)] group-hover:text-[var(--electric-blue)] transition-colors leading-[1.4] mb-2" style={{ fontWeight: '600' }}>
              {video.title}
            </h3>

            {/* Date */}
            <div className="text-[12px] text-[var(--slate-medium)] mt-auto">
              {video.publishDate}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}