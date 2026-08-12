export interface EventSpeaker {
  name: string;
  role: string;
  company: string;
  isModerator?: boolean;
}

export interface EventSponsor {
  name: string;
  mark: string;
  tier?: string;
  logoUrl?: string;
}

export interface EventAgendaSession {
  day?: string;
  time: string;
  format?: string;
  title: string;
  description: string;
  speakers?: EventSpeaker[];
  sponsor?: EventSponsor;
  videoId?: string;
  duration?: string;
}

export interface Event {
  id: string; title: string; date: string; startDate: string; location: string; venue: string; type: string; summary: string;
  description: string[]; imageUrl: string;
  agenda: EventAgendaSession[];
  speakers: EventSpeaker[];
  partners?: EventSponsor[];
  registrationUrl?: string; price?: string; status?: "upcoming" | "on-demand";
}

const arcCurrent = { name: "ArcCurrent", mark: "AC" };
const polarStack = { name: "PolarStack", mark: "PS" };
const signalGrid = { name: "SignalGrid", mark: "SG" };
const loopScale = { name: "LoopScale", mark: "LS" };

export const events: Event[] = [
  {
    id: "critical-insight-2026", title: "Critical Insight 2026", date: "10–11 November 2026", startDate: "2026-11-10", location: "Virtual Event", venue: "Online", type: "Virtual Conference",
    summary: "Two focused days bringing operators, designers and technology leaders together to examine power, cooling and resilience for the next generation of compute.",
    description: ["Critical Insight 2026 moves beyond product claims to the engineering and operating decisions behind dependable data centre capacity.", "Sessions combine practical case studies, technical briefings and live discussion on AI density, grid constraints, cooling deployment and sustainability evidence."],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&h=800&fit=crop",
    partners: [
      { name: "Riello UPS", mark: "RU", tier: "Gold sponsor", logoUrl: "/event-sponsors/logos/riello-ups.jpg" },
      { name: "Phoenix Contact", mark: "PC", tier: "Gold sponsor", logoUrl: "/event-sponsors/logos/phoenix-contact.jpg" },
      { name: "Ecolab", mark: "E", tier: "Gold sponsor", logoUrl: "/event-sponsors/logos/ecolab.jpg" },
      { name: "DCA", mark: "DCA", tier: "Media partner", logoUrl: "/event-sponsors/logos/dca.jpg" },
    ],
    agenda: [
      { day: "Day 1 · Tuesday 10 November", time: "09:00", format: "Welcome", title: "Welcome to Critical Insight", description: "Opening remarks and an introduction to the two-day programme.", speakers: [{ name: "Maya Patel", role: "Editor", company: "Data Centre Review" }] },
      { day: "Day 1 · Tuesday 10 November", time: "09:10", format: "Keynote", title: "The capacity question", description: "Where power, planning reform and AI demand meet.", speakers: [{ name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory" }] },
      { day: "Day 1 · Tuesday 10 November", time: "09:45", format: "Presentation", title: "Engineering high-density cooling", description: "Lessons from live liquid-cooling deployments.", sponsor: polarStack, speakers: [{ name: "Elena Brooks", role: "Cooling & Sustainability Editor", company: "Data Centre Review" }] },
      { day: "Day 1 · Tuesday 10 November", time: "10:25", format: "Panel", title: "Who owns the cooling interface?", description: "Operators, designers and suppliers examine responsibility from chip to heat rejection.", speakers: [{ name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital", isModerator: true }, { name: "Sofia Grant", role: "Operations Director", company: "MetroCore" }, { name: "Daniel Mercer", role: "Principal Engineer", company: "Thermal Works" }, { name: "Aisha Khan", role: "Head of Design", company: "Vertex Colocation" }] },
      { day: "Day 1 · Tuesday 10 November", time: "11:20", format: "Presentation", title: "Grid flexibility without resilience compromise", description: "Storage, flexible demand and operating guardrails.", speakers: [{ name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital" }] },
      { day: "Day 2 · Wednesday 11 November", time: "09:00", format: "Welcome", title: "Day two welcome", description: "A recap of day one and introduction to the resilience programme.", speakers: [{ name: "Maya Patel", role: "Editor", company: "Data Centre Review" }] },
      { day: "Day 2 · Wednesday 11 November", time: "09:10", format: "Keynote", title: "Resilience in the AI era", description: "How operating assumptions must change as density and dependency increase.", speakers: [{ name: "Oliver Price", role: "Chief Technology Officer", company: "Continuum Facilities" }] },
      { day: "Day 2 · Wednesday 11 November", time: "09:45", format: "Presentation", title: "Integrated systems testing at campus scale", description: "Designing scenarios that reveal dependencies between power, cooling, controls and people.", sponsor: signalGrid, speakers: [{ name: "Rachel Hammond", role: "Commissioning Director", company: "Assure Critical" }] },
      { day: "Day 2 · Wednesday 11 November", time: "10:25", format: "Panel", title: "Resilient by design", description: "A multi-disciplinary panel on grid events, heat, supply chains and high-density halls.", speakers: [{ name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory", isModerator: true }, { name: "Oliver Price", role: "Chief Technology Officer", company: "Continuum Facilities" }, { name: "Rachel Hammond", role: "Commissioning Director", company: "Assure Critical" }, { name: "Sofia Grant", role: "Operations Director", company: "MetroCore" }] },
      { day: "Day 2 · Wednesday 11 November", time: "11:20", format: "Closing discussion", title: "What needs to change next?", description: "The speakers identify the practical priorities the industry should carry into 2027.", speakers: [{ name: "Maya Patel", role: "Editor", company: "Data Centre Review", isModerator: true }, { name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital" }, { name: "Aisha Khan", role: "Head of Design", company: "Vertex Colocation" }] },
    ],
    speakers: [
      { name: "Maya Patel", role: "Editor", company: "Data Centre Review" },
      { name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory" },
      { name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital" },
      { name: "Elena Brooks", role: "Cooling & Sustainability Editor", company: "Data Centre Review" },
      { name: "Sofia Grant", role: "Operations Director", company: "MetroCore" },
      { name: "Daniel Mercer", role: "Principal Engineer", company: "Thermal Works" },
      { name: "Aisha Khan", role: "Head of Design", company: "Vertex Colocation" },
      { name: "Oliver Price", role: "Chief Technology Officer", company: "Continuum Facilities" },
      { name: "Rachel Hammond", role: "Commissioning Director", company: "Assure Critical" },
    ], registrationUrl: "#", price: "Free",
  },
  {
    id: "cooling-in-focus", title: "Cooling in Focus", date: "24 September 2026", startDate: "2026-09-24", location: "London", venue: "The Brewery, London", type: "Technical Briefing",
    summary: "A one-day technical programme on liquid cooling design, water systems, commissioning and operational readiness.",
    description: ["Cooling in Focus is built for the teams responsible for making high-density thermal systems work in practice.", "The programme follows the complete system from IT load to heat rejection and gives maintainers a central voice."],
    imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop",
    agenda: [
      { time: "09:00", title: "Registration", description: "Coffee and networking." },
      { time: "10:00", title: "From chip to plant", description: "Defining interfaces and ownership." },
      { time: "13:30", title: "Retrofit case study", description: "Introducing liquid cooling to a live facility." },
    ],
    speakers: [{ name: "Elena Brooks", role: "Cooling & Sustainability Editor", company: "Data Centre Review" }], registrationUrl: "#", price: "£295 + VAT",
  },
  {
    id: "power-path-for-ai", title: "The Power Path for AI", date: "27 August 2026", startDate: "2026-08-27", location: "Virtual Event", venue: "Live online", type: "Webinar",
    summary: "A practical briefing on securing, sequencing and operating the power needed for high-density AI deployments.",
    description: ["This live webinar follows the power path from grid connection and on-site generation through to the rack.", "The panel will examine what operators can deliver now, where constraints remain and how to avoid building stranded capacity."],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
    partners: [arcCurrent],
    agenda: [
      { time: "10:00", format: "Live webinar", title: "The Power Path for AI", description: "A 40-minute expert discussion followed by 20 minutes of audience questions.", speakers: [{ name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory" }, { name: "Elliot Ward", role: "Power Systems Director", company: "ArcCurrent" }, { name: "Maya Patel", role: "Editor", company: "Data Centre Review", isModerator: true }] },
    ],
    speakers: [{ name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory" }, { name: "Elliot Ward", role: "Power Systems Director", company: "ArcCurrent" }, { name: "Maya Patel", role: "Editor", company: "Data Centre Review", isModerator: true }],
    registrationUrl: "#", price: "Free",
  },
  {
    id: "beyond-pue-useful-work", title: "Beyond PUE: Measuring Useful Work", date: "17 September 2026", startDate: "2026-09-17", location: "Virtual Event", venue: "Live online", type: "Webinar",
    summary: "How data centre teams can connect facility efficiency with compute output, carbon and commercial value.",
    description: ["A focused live conversation about the metrics that can sit alongside PUE as density and workloads change.", "Speakers will explore practical measurement, honest boundaries and the evidence customers increasingly expect."],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=800&fit=crop",
    partners: [loopScale],
    agenda: [
      { time: "11:00", format: "Live webinar", title: "Beyond PUE: Measuring Useful Work", description: "A 45-minute discussion followed by a live audience Q&A.", speakers: [{ name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital" }, { name: "Nadia Cole", role: "Head of Product", company: "LoopScale" }, { name: "Elena Brooks", role: "Cooling & Sustainability Editor", company: "Data Centre Review", isModerator: true }] },
    ],
    speakers: [{ name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital" }, { name: "Nadia Cole", role: "Head of Product", company: "LoopScale" }, { name: "Elena Brooks", role: "Cooling & Sustainability Editor", company: "Data Centre Review", isModerator: true }],
    registrationUrl: "#", price: "Free",
  },
  {
    id: "critical-insight-2025", title: "Critical Insight 2025", date: "18–19 November 2025", startDate: "2025-11-18", location: "Virtual Event", venue: "Watch online", type: "On-Demand Virtual Conference", status: "on-demand",
    summary: "Revisit the keynotes, panels and technical sessions from DCR's virtual conference on power, cooling and AI-ready data centre infrastructure.",
    description: ["Critical Insight 2025 brought operators, consultants and technology specialists together for two days of practical discussion.", "The original agenda now acts as an on-demand programme, with each available session linked directly to its recording."],
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&h=800&fit=crop",
    agenda: [
      { time: "Session 01", title: "Inside a high-density liquid cooling loop", description: "A plant-to-rack discussion covering CDUs, water quality, controls and commissioning.", videoId: "1", duration: "14:28" },
      { time: "Session 02", title: "How to test a data centre power train", description: "Integrated systems testing from utility loss through stable IT load.", videoId: "2", duration: "18:42" },
      { time: "Session 03", title: "AI-ready retrofit: survey to first rack", description: "Finding usable capacity and delivering a repeatable high-density zone.", videoId: "3", duration: "16:05" },
    ],
    speakers: [
      { name: "Maya Patel", role: "Editor", company: "Data Centre Review" },
      { name: "Elena Brooks", role: "Cooling & Sustainability Editor", company: "Data Centre Review" },
    ],
  },
];

export function getEventById(id: string): Event | undefined { return events.find((event) => event.id === id); }
