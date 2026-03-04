import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { events } from "../data/events";

export function LatestEvents() {
  // Get first 4 events
  const displayEvents = events.slice(0, 4);

  return (
    <div className="bg-white border border-gray-200 p-6 h-full flex flex-col">
      <h2 className="text-[18px] mb-5 text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
        Latest Events
      </h2>
      <ul className="space-y-4 mb-6 flex-1">
        {displayEvents.map((event) => (
          <li key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex gap-3">
              {/* Date Icon */}
              <div className="w-12 h-12 bg-[var(--electric-blue)]/10 border border-[var(--electric-blue)]/20 flex flex-col items-center justify-center flex-shrink-0 rounded">
                <span className="text-[10px] text-[var(--electric-blue)] font-bold uppercase">
                  {event.date.split(' ')[1].substring(0, 3)}
                </span>
                <span className="text-[16px] text-[var(--electric-blue)] font-bold leading-none">
                  {event.date.split(' ')[0]}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="text-[11px] text-[var(--electric-blue)] mb-1 uppercase tracking-wide">
                  {event.type}
                </div>
                <Link
                  to={`/event/${event.id}`}
                  className="text-[14px] text-[var(--navy-deep)] hover:text-[var(--electric-blue)] transition-colors leading-[1.4] block mb-2 font-medium"
                >
                  {event.title}
                </Link>
                <div className="flex items-center gap-3 text-[12px] text-[var(--slate-medium)]">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/events"
        className="text-[13px] text-[var(--electric-blue)] hover:underline flex items-center gap-1"
      >
        View all events
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}