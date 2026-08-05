import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { events } from "../data/events";

export function EventsArchivePage() {
  const [featuredEvent, ...upcomingEvents] = events;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <header className="mx-auto max-w-[1440px] px-4 pb-9 pt-12 md:px-8 md:pb-12 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end">
            <h1 className="text-[48px] leading-[0.96] text-[var(--navy-deep)] md:text-[72px]" style={{ fontWeight: 750 }}>Events</h1>
            <p className="max-w-[540px] text-[15px] leading-[1.7] text-[var(--slate-dark)] md:text-[17px]">
              Focused conferences and technical briefings for the teams shaping the next generation of data centre capacity.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 md:px-8">
          <Link to={`/event/${featuredEvent.id}`} className="group relative block min-h-[560px] overflow-hidden bg-[#17131f] md:min-h-[660px]">
            <img src={featuredEvent.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" />

            <div className="absolute left-5 top-5 bg-white p-4 text-center text-[var(--navy-deep)] md:left-10 md:top-10 md:min-w-[150px] md:p-5">
              <CalendarDays size={20} className="mx-auto mb-2 text-[#5a6eb4]" />
              <span className="block text-[11px] font-bold uppercase tracking-[0.11em]">{featuredEvent.date}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 max-w-[1030px] p-6 md:p-10 lg:p-12">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-white/75">{featuredEvent.type}</span>
              <h2 className="text-[40px] leading-[0.98] text-white md:text-[62px] lg:text-[72px]" style={{ fontWeight: 750 }}>{featuredEvent.title}</h2>
              <p className="mt-5 max-w-[780px] text-[15px] leading-[1.65] text-white/78 md:text-[17px]">{featuredEvent.summary}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.11em] text-white/75">
                <span className="flex items-center gap-2"><MapPin size={15} />{featuredEvent.location}</span>
                <span>{featuredEvent.venue}</span>
                <span>{featuredEvent.price}</span>
              </div>
            </div>

            <span className="absolute bottom-7 right-7 grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--navy-deep)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:bottom-10 md:right-10"><ArrowUpRight size={20} /></span>
          </Link>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
          <div className="mb-3 border-b border-gray-200 pb-6">
            <h2 className="text-[30px] leading-tight text-[var(--navy-deep)] md:text-[40px]" style={{ fontWeight: 700 }}>The programme</h2>
          </div>

          {upcomingEvents.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="group grid gap-6 border-b border-gray-200 py-8 transition-colors hover:bg-[#f7f8fc] md:grid-cols-[180px_minmax(0,1fr)_380px] md:items-center md:gap-9 md:px-5">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a6eb4]">{event.type}</span>
                <span className="mt-3 block text-[13px] font-semibold leading-[1.35] text-[var(--navy-deep)]">{event.date}</span>
                <span className="mt-2 flex items-center gap-1.5 text-[11px] text-[var(--slate-medium)]"><MapPin size={13} />{event.location}</span>
              </div>

              <div>
                <h3 className="text-[28px] leading-[1.06] text-[var(--navy-deep)] transition-colors group-hover:text-[#5a6eb4] md:text-[36px]" style={{ fontWeight: 720 }}>{event.title}</h3>
                <p className="mt-4 max-w-[720px] text-[14px] leading-[1.65] text-[var(--slate-dark)]">{event.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5a6eb4]">View event <ArrowUpRight size={15} /></span>
              </div>

              <div className="relative order-first aspect-[16/10] overflow-hidden bg-[#17131f] md:order-none">
                <img src={event.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
            </Link>
          ))}

          <div className="mt-14 grid gap-7 bg-[#5a6eb4] p-7 text-white md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10 lg:p-12">
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
