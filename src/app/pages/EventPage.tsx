import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, Play, Users } from "lucide-react";
import { Link, useParams } from "react-router";
import { Footer } from "../components/Footer";
import { EventSponsorLogo } from "../components/EventSponsorLogo";
import { Navigation } from "../components/Navigation";
import { getEventById } from "../data/events";

export function EventPage() {
  const { id } = useParams<{ id: string }>();
  const event = id ? getEventById(id) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="mx-auto max-w-[1440px] px-4 py-20 md:px-8">
          <h1 className="text-[48px] text-[var(--navy-deep)]" style={{ fontWeight: 750 }}>Event not found</h1>
          <Link to="/events" className="mt-6 inline-block text-[#5a6eb4]">Return to events</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="mx-auto max-w-[1440px] px-4 py-4 md:px-8 md:py-6">
          <div className="relative min-h-[580px] overflow-hidden bg-[#17131f] md:min-h-[700px]">
            <img src={event.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 max-w-[1050px] p-6 md:p-10 lg:p-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">{event.type}</span>
              <h1 className="mt-4 text-[44px] leading-[0.98] text-white md:text-[68px]" style={{ fontWeight: 750 }}>{event.title}</h1>
              <p className="mt-5 max-w-[780px] text-[16px] leading-[1.65] text-white/78 md:text-[18px]">{event.summary}</p>
              <div className="mt-7 flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-[0.11em] text-white/75">
                <span className="flex items-center gap-2"><CalendarDays size={15} />{event.date}</span>
                <span className="flex items-center gap-2"><MapPin size={15} />{event.location}</span>
                {event.price && <span>{event.price}</span>}
              </div>
              {event.partners && event.partners.length === 1 && (
                <div className="mt-7 inline-flex flex-col border border-white/25 bg-white px-4 py-3">
                  <span className="mb-2 text-[8px] font-bold uppercase tracking-[0.11em] text-[#5a6eb4]">In partnership with</span>
                  <EventSponsorLogo sponsor={event.partners[0]} compact />
                </div>
              )}
            </div>
          </div>
        </section>

        {event.partners && event.partners.length > 1 && (
          <section className="mx-auto max-w-[1180px] px-4 pt-8 md:px-8 md:pt-12" aria-label="Event partners">
            <div className="border-y border-gray-200 py-5">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">Event partners</span>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {event.partners.map((partner) => (
                  <div key={partner.name} className="flex min-h-[112px] min-w-0 flex-col justify-center border border-gray-200 bg-[#f7f8fc] px-5 py-4">
                    <span className="mb-3 text-[8px] font-bold uppercase tracking-[0.11em] text-[#5a6eb4]">{partner.tier ?? "Event partner"}</span>
                    <EventSponsorLogo sponsor={partner} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto grid max-w-[1180px] gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">About the event</span>
            <div className="mt-6 space-y-6">
              {event.description.map((paragraph) => <p key={paragraph} className="text-[18px] leading-[1.8] text-[var(--slate-dark)]">{paragraph}</p>)}
            </div>

            <div className="mb-6 mt-14 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5a6eb4]">{event.agenda.length} sessions</span>
                <h2 id="programme" className="mt-2 scroll-mt-8 text-[34px] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{event.status === "on-demand" ? "Watch the programme" : "Programme"}</h2>
              </div>
              <span className="flex items-center gap-2 text-[11px] text-[var(--slate-medium)]"><Users size={15} />Multiple speakers and panels</span>
            </div>

            <div className="border-t border-gray-200">
              {event.agenda.map((item, index) => {
                const showDay = item.day && item.day !== event.agenda[index - 1]?.day;
                const sessionContent = (
                  <>
                    <span className="text-[12px] font-bold text-[#5a6eb4]">{item.time}</span>
                    <div>
                      {item.format && <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[var(--slate-medium)]">{item.format}</span>}
                      <h3 className="mt-1 text-[19px] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{item.title}</h3>
                      <p className="mt-2 text-[14px] leading-[1.6] text-[var(--slate-dark)]">{item.description}</p>
                      {item.sponsor && (
                        <div className="mt-4 flex max-w-[430px] items-center gap-3 border-l-2 border-[#5a6eb4] bg-[#f7f8fc] px-4 py-3">
                          <span className="min-w-0"><span className="mb-2 block text-[8px] font-bold uppercase tracking-[0.11em] text-[#5a6eb4]">Sponsored session · Session partner</span><EventSponsorLogo sponsor={item.sponsor} compact /></span>
                        </div>
                      )}
                      {item.speakers && (
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                          {item.speakers.map((speaker) => (
                            <span key={speaker.name} className="text-[11px] leading-[1.45] text-[var(--slate-medium)]">
                              <strong className="text-[var(--navy-deep)]">{speaker.name}</strong>{speaker.isModerator ? " · Moderator" : ""}<br />{speaker.role}, {speaker.company}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.duration && <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">{item.duration}</span>}
                    </div>
                    {item.videoId && <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eef1fa] text-[#5a6eb4]"><Play size={16} fill="currentColor" className="ml-0.5" /></span>}
                  </>
                );

                return (
                  <div key={`${item.day}-${item.time}-${item.title}`}>
                    {showDay && <h3 className="border-b border-gray-200 bg-[#f7f8fc] px-5 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--navy-deep)]">{item.day}</h3>}
                    {item.videoId ? (
                      <Link to={`/video/${item.videoId}`} className="group grid gap-3 border-b border-gray-200 py-6 transition-colors hover:bg-[#f7f8fc] sm:grid-cols-[90px_minmax(0,1fr)_auto] sm:items-start">{sessionContent}</Link>
                    ) : (
                      <div className="grid gap-3 border-b border-gray-200 py-6 sm:grid-cols-[90px_minmax(0,1fr)]">{sessionContent}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="border border-gray-200 bg-[#f7f8fc] p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">{event.status === "on-demand" ? "On demand" : "Attend"}</span>
              <h2 className="mt-3 text-[25px] leading-[1.1] text-[var(--navy-deep)]" style={{ fontWeight: 700 }}>{event.status === "on-demand" ? "Watch at your pace" : `Join ${event.title}`}</h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-[var(--slate-dark)]">{event.venue}<br />{event.date}</p>
              {event.status === "on-demand" ? (
                <a href="#programme" className="mt-6 flex w-full items-center justify-center gap-2 bg-[#5a6eb4] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Browse sessions <ArrowUpRight size={15} /></a>
              ) : (
                <button type="button" className="mt-6 w-full bg-[#5a6eb4] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white">Register now</button>
              )}
              <h3 className="mt-8 border-t border-gray-200 pt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--slate-medium)]">Speaker roster</h3>
              <p className="mt-2 text-[12px] text-[var(--slate-medium)]">{event.speakers.length} confirmed speakers</p>
              {event.speakers.slice(0, 6).map((speaker) => (
                <div key={speaker.name} className="mt-4">
                  <span className="block text-[13px] font-bold text-[var(--navy-deep)]">{speaker.name}</span>
                  <span className="mt-1 block text-[11px] leading-[1.4] text-[var(--slate-medium)]">{speaker.role}, {speaker.company}</span>
                </div>
              ))}
              {event.speakers.length > 6 && <a href="#programme" className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a6eb4]">See all speakers in agenda <ArrowUpRight size={13} /></a>}
            </div>
          </aside>
        </section>

        <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8">
          <Link to="/events" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]"><ArrowLeft size={15} />Back to events</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
