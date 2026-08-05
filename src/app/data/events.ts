export interface Event {
  id: string; title: string; date: string; location: string; venue: string; type: string; summary: string;
  description: string[]; imageUrl: string;
  agenda: { time: string; title: string; description: string }[];
  speakers: { name: string; role: string; company: string }[];
  registrationUrl?: string; price?: string;
}

export const events: Event[] = [
  {
    id: "critical-insight-2026", title: "Critical Insight 2026", date: "10–11 November 2026", location: "Virtual Event", venue: "Online", type: "Virtual Conference",
    summary: "Two focused days bringing operators, designers and technology leaders together to examine power, cooling and resilience for the next generation of compute.",
    description: ["Critical Insight 2026 moves beyond product claims to the engineering and operating decisions behind dependable data centre capacity.", "Sessions combine practical case studies, technical briefings and live discussion on AI density, grid constraints, cooling deployment and sustainability evidence."],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&h=800&fit=crop",
    agenda: [
      { time: "09:30", title: "Opening keynote: The capacity question", description: "Where power, planning and AI demand meet." },
      { time: "10:30", title: "Engineering high-density cooling", description: "Lessons from live liquid-cooling deployments." },
      { time: "12:00", title: "Grid flexibility without resilience compromise", description: "Storage, flexible demand and operating guardrails." },
      { time: "14:00", title: "Integrated systems testing workshop", description: "Designing scenarios that reveal real dependencies." },
    ],
    speakers: [
      { name: "Maya Patel", role: "Editor", company: "Data Centre Review" },
      { name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory" },
      { name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital" },
    ], registrationUrl: "#", price: "Free",
  },
  {
    id: "cooling-in-focus", title: "Cooling in Focus", date: "24 September 2026", location: "London", venue: "The Brewery, London", type: "Technical Briefing",
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
];

export function getEventById(id: string): Event | undefined { return events.find((event) => event.id === id); }
