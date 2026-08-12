export interface PressRelease {
  id: string; company: string; companyLogo?: string; headline: string; summary: string; date: string;
  location: string; imageUrl: string; imageCaption?: string; introText: string; bodyParagraphs: string[];
  contactName: string; contactEmail: string; contactPhone: string;
}

export const pressReleases: PressRelease[] = [
  {
    id: "northstar-cooling-test-lab", company: "Northstar Thermal", headline: "Northstar Thermal Opens European Liquid Cooling Test Lab", summary: "New facility will support full-load testing of CDUs and direct-to-chip loops before live data centre deployment.", date: "4 August 2026", location: "LONDON, UK",
    imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop", imageCaption: "Liquid cooling distribution and plant infrastructure",
    introText: "Northstar Thermal has opened a European test facility designed to help operators validate liquid cooling systems against realistic load profiles before installation.",
    bodyParagraphs: ["The lab combines configurable heat loads, multiple CDU architectures and instrumented water loops so project teams can prove controls, water chemistry and failure responses.", "Customers can use the facility for factory acceptance testing, operator training and repeatable fault scenarios before equipment enters a live hall.", "The company says the programme is intended to reduce commissioning risk as liquid cooling moves from pilot zones to larger production deployments."],
    contactName: "Partner Content Team", contactEmail: "partners@datacentrereview.com", contactPhone: "+44 (0)20 0000 0000",
  },
  {
    id: "voltstream-modular-ups", company: "Voltstream Critical Power", headline: "Voltstream Introduces Modular UPS Platform for High-Density Halls", summary: "The new platform combines scalable power modules with monitoring designed for rapidly changing AI load profiles.", date: "1 August 2026", location: "MANCHESTER, UK",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
    introText: "Voltstream Critical Power has introduced a modular UPS platform aimed at facilities deploying high-density compute in phases.",
    bodyParagraphs: ["The architecture allows modules to be added as contracted IT capacity is brought online, reducing early-stage operating losses.", "Integrated monitoring tracks module temperature, battery health and power-quality events through a shared operations interface.", "Standard configurations will be available for UK and European projects from the fourth quarter of 2026."],
    contactName: "Partner Content Team", contactEmail: "partners@datacentrereview.com", contactPhone: "+44 (0)20 0000 0000",
  },
  {
    id: "circulab-server-reuse", company: "Circulab Systems", headline: "Circulab Launches Secure Server Reuse and Materials Tracking Service", summary: "The service combines verified data destruction, component recovery and asset-level reporting for decommissioned infrastructure.", date: "30 July 2026", location: "BIRMINGHAM, UK",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop",
    introText: "Circulab Systems has launched a circular asset service for operators seeking clearer evidence on the destination and reuse of retired IT equipment.",
    bodyParagraphs: ["Each asset receives a recorded chain of custody from collection through data destruction, testing, reuse or materials recovery.", "Customers receive project-level reporting designed to support security assurance and sustainability disclosures.", "The service will initially operate from two UK processing centres before expanding into mainland Europe."],
    contactName: "Partner Content Team", contactEmail: "partners@datacentrereview.com", contactPhone: "+44 (0)20 0000 0000",
  },
  {
    id: "gridwise-campus-controller", company: "Gridwise Controls", headline: "Gridwise Debuts Campus Controller for Storage and Flexible Demand", summary: "A new control platform coordinates batteries, generation and non-critical load within operator-defined resilience limits.", date: "28 July 2026", location: "DUBLIN, IRELAND",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=800&fit=crop",
    introText: "Gridwise Controls has introduced a campus energy controller designed for critical facilities combining storage, on-site generation and flexible demand.",
    bodyParagraphs: ["Operators define state-of-charge floors, service priorities and conditions that remove assets from commercial dispatch.", "The platform records each control decision to support event review and operational assurance.", "Pilot deployments are planned across the UK and Ireland during the remainder of 2026."],
    contactName: "Partner Content Team", contactEmail: "partners@datacentrereview.com", contactPhone: "+44 (0)20 0000 0000",
  },
  {
    id: "schneider-edge-power", company: "Schneider Electric", companyLogo: "/brand-logos/schneider-electric-square.png", headline: "Schneider Electric Expands Edge Power Resilience Programme", summary: "New partner support helps operators standardise power, monitoring and maintenance across regional edge deployments.", date: "29 July 2026", location: "LONDON, UK",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop", imageCaption: "Critical power infrastructure supporting distributed edge facilities",
    introText: "Schneider Electric has expanded its edge power resilience programme to help operators standardise critical systems across distributed sites.",
    bodyParagraphs: ["The programme combines reference designs, remote monitoring and partner-led maintenance for regional edge deployments.", "Operators can use a common set of resilience targets while adapting capacity and service coverage to individual locations.", "The expanded support programme is available to UK and European customers through Schneider Electric's partner network."],
    contactName: "Priya Shah", contactEmail: "media.uk@se.example", contactPhone: "+44 (0)20 4555 0174",
  },
];

export function getPressReleaseById(id: string): PressRelease | undefined { return pressReleases.find((item) => item.id === id); }
