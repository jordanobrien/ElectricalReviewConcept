import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { EventSponsorLogo } from "../components/EventSponsorLogo";
import { Navigation } from "../components/Navigation";
import { events } from "../data/events";

export function EventsArchivePage() {
  const upcomingEvents = events
    .filter((event) => event.status !== "on-demand")
    .sort((firstEvent, secondEvent) => firstEvent.startDate.localeCompare(secondEvent.startDate));
  const onDemandEvents = events.filter((event) => event.status === "on-demand");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <header className="mx-auto max-w-[1440px] px-4 pb-9 pt-12 md:px-8 md:pb-12 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
            <h1 className="text-[48px] leading-[0.96] text-[var(--navy-deep)] md:text-[72px]" style={{ fontWeight: 750 }}>Events</h1>
            <p className="max-w-[540px] text-[15px] leading-[1.7] text-[var(--slate-dark)] md:text-[17px]">
              Discover DCR's live conferences, virtual events and webinars, then revisit completed programmes on demand.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between border-b border-gray-200 pb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">Register now</span>
              <h2 className="mt-2 text-[30px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>Upcoming events</h2>
            </div>
            <span className="hidden text-[11px] text-[var(--slate-medium)] sm:block">{upcomingEvents.length} upcoming</span>
          </div>

          <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="group grid overflow-hidden border border-gray-200 bg-white md:grid-cols-[0.72fr_1.28fr] md:items-stretch">
              <div className="relative min-h-[300px] overflow-hidden bg-[#17131f]">
                <img src={event.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">{event.type}</span>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">{event.type} · {event.date}</span>
                <h3 className="mt-4 text-[34px] leading-[1.02] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[46px]" style={{ fontWeight: 720 }}>{event.title}</h3>
                <p className="mt-5 max-w-[720px] text-[15px] leading-[1.7] text-[var(--slate-dark)]">{event.summary}</p>
                {event.partners && event.partners.length > 0 && (
                  <div className="mt-7 border-t border-gray-200 pt-5">
                    <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--slate-medium)]">{event.partners.length === 1 ? "In partnership with" : "Event partners"}</span>
                    <div className="grid max-w-[760px] gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {event.partners.map((partner) => (
                        <span key={partner.name} className="flex min-h-[70px] min-w-0 flex-col justify-center border border-gray-200 bg-[#f7f8fc] px-4 py-3">
                          <span className="mb-2 text-[8px] font-bold uppercase tracking-[0.11em] text-[#5a6eb4]">{partner.tier ?? "Event partner"}</span>
                          <EventSponsorLogo sponsor={partner} compact />
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">View event <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          ))}
          </div>
        </section>

        {onDemandEvents.length > 0 && (
          <section className="mt-16 border-y border-gray-200 bg-[#f7f8fc] md:mt-20">
            <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
              <div className="mb-8 grid gap-5 border-b border-gray-300 pb-7 md:grid-cols-[minmax(0,1fr)_440px] md:items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a6eb4]">Previous events</span>
                  <h2 className="mt-3 text-[34px] leading-tight text-[var(--navy-deep)] md:text-[46px]" style={{ fontWeight: 700 }}>Watch on demand</h2>
                </div>
                <p className="text-[14px] leading-[1.7] text-[var(--slate-dark)]">Open a completed event to browse its full agenda and watch each available session in programme order.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {onDemandEvents.map((event) => (
                  <Link key={event.id} to={`/event/${event.id}`} className="group grid overflow-hidden border border-gray-200 bg-white sm:grid-cols-[200px_minmax(0,1fr)]">
                    <div className="relative min-h-[220px] overflow-hidden bg-[#17131f]">
                      <img src={event.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#5a6eb4]"><Play size={16} fill="currentColor" className="ml-0.5" /></span>
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">{event.date}</span>
                      <h3 className="mt-3 text-[25px] leading-[1.08] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4]" style={{ fontWeight: 710 }}>{event.title}</h3>
                      <span className="mt-4 text-[11px] text-[var(--slate-medium)]">{event.agenda.filter((session) => session.videoId).length} sessions available</span>
                      <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">View programme <ArrowUpRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
          <div className="grid gap-7 bg-[#5a6eb4] p-7 text-white md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10 lg:p-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">Stay in the room</span>
              <h2 className="mt-3 text-[28px] leading-[1.08] md:text-[38px]" style={{ fontWeight: 700 }}>Be first to hear about new briefings and events.</h2>
            </div>
            <Link to="/newsletter" className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4] transition-transform hover:-translate-y-1">Join the newsletter <ArrowUpRight size={16} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
