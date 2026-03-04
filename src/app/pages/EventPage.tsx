import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useParams, Link } from "react-router";
import { getEventById } from "../data/events";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";

export function EventPage() {
  const { id } = useParams<{ id: string }>();
  const event = id ? getEventById(id) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <h1 className="text-[32px] text-[var(--navy-deep)]" style={{ fontWeight: '600' }}>
            Event not found
          </h1>
          <Link to="/" className="text-[var(--electric-blue)] hover:underline mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[var(--slate-medium)]">
            <Link to="/" className="hover:text-[var(--electric-blue)]">Home</Link>
            <span>/</span>
            <Link to="/events" className="hover:text-[var(--electric-blue)]">Events</Link>
            <span>/</span>
            <span className="text-[var(--navy-deep)]">{event.type}</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 pt-12 pb-12">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column - Content */}
            <div className="col-span-9">
              {/* Type Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[var(--electric-blue)]/10 text-[var(--electric-blue)] text-[11px] uppercase tracking-wider rounded" style={{ fontWeight: '600' }}>
                  {event.type}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[42px] leading-[1.15] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                {event.title}
              </h1>

              {/* Summary */}
              <p className="text-[20px] leading-[1.5] text-[var(--slate-dark)] mb-8">
                {event.summary}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <Calendar size={16} className="text-[var(--electric-blue)]" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <MapPin size={16} className="text-[var(--electric-blue)]" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-[14px] text-[var(--slate-dark)]">
                  <Ticket size={16} className="text-[var(--electric-blue)]" />
                  {event.price}
                </div>
              </div>

              {/* Main Image */}
              <figure className="mb-12">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-[500px] object-cover"
                />
              </figure>

              {/* Description */}
              <div className="space-y-6 mb-12">
                {event.description.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-[1.8] text-[var(--slate-dark)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Agenda Section */}
              <div className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                  Event Agenda
                </h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex-shrink-0 w-24">
                        <div className="flex items-center gap-2 text-[13px] text-[var(--electric-blue)]" style={{ fontWeight: '600' }}>
                          <Clock size={14} />
                          {item.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[16px] text-[var(--navy-deep)] mb-2" style={{ fontWeight: '600' }}>
                          {item.title}
                        </h3>
                        <p className="text-[15px] leading-[1.6] text-[var(--slate-medium)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers Section */}
              <div className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-6" style={{ fontWeight: '600' }}>
                  Featured Speakers
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 border border-gray-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--electric-blue)] to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[16px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: '600' }}>
                          {speaker.name}
                        </div>
                        <div className="text-[14px] text-[var(--slate-dark)] mb-1">
                          {speaker.role}
                        </div>
                        <div className="text-[13px] text-[var(--slate-medium)]">
                          {speaker.company}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Information */}
              <div className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-[28px] text-[var(--navy-deep)] mb-4" style={{ fontWeight: '600' }}>
                  Venue Information
                </h2>
                <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200">
                  <MapPin size={20} className="text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-[16px] text-[var(--navy-deep)] mb-1" style={{ fontWeight: '600' }}>
                      {event.location}
                    </div>
                    <div className="text-[15px] leading-[1.6] text-[var(--slate-medium)]">
                      {event.venue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Card */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}