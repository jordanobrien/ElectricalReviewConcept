import abbLogo from "figma:asset/e2e5ae183c23612418776f21bc9f917b1ae6c068.png";
import siemensLogo from "figma:asset/27568e539c1371835eae37bf7fa63a78ed21d34d.png";
import schneiderLogo from "figma:asset/c996060d11d90ebd9268c794033e78653888594b.png";
import legrandLogo from "figma:asset/5746765b8424685bcaca58dba1263589ab9b5a83.png";

export interface PressRelease {
  id: string;
  company: string;
  companyLogo?: string;
  headline: string;
  summary: string;
  date: string;
  location: string;
  imageUrl: string;
  imageCaption?: string;
  introText: string;
  bodyParagraphs: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export const pressReleases: PressRelease[] = [
  {
    id: "abb-switchgear-launch",
    company: "ABB",
    companyLogo: abbLogo,
    headline: "ABB Launches Two Energy-Efficient Switchgear Ranges for Commercial EV Infrastructure",
    summary: "New medium-voltage switchgear series delivers enhanced efficiency and digital connectivity for depot charging and commercial EV applications.",
    date: "March 1, 2026",
    location: "ZURICH, Switzerland",
    imageUrl: "https://images.unsplash.com/photo-1581092918484-8313e1f6d835?w=1200&h=600&fit=crop",
    introText: "ABB, a global technology leader in electrification and automation, today introduced two new medium-voltage switchgear product ranges specifically engineered for commercial electric vehicle charging infrastructure. The SafeRing MV and EcoGear MV series combine advanced arc-fault protection, reduced losses, and integrated digital monitoring to address the unique demands of high-power EV charging installations.",
    bodyParagraphs: [
      "As commercial fleet operators deploy increasingly large-scale charging infrastructure, electrical distribution equipment must handle high continuous loads, frequent switching cycles, and demanding environmental conditions. Traditional switchgear designed for building services or industrial applications often lacks the specific features required for optimal EV charging performance and reliability.",
      "ABB's new switchgear ranges incorporate design elements developed through extensive field experience with EV infrastructure projects globally. Arc-fault protection responds in under 50 milliseconds to prevent damage from short-circuit events. Low-loss busbar systems reduce energy waste—critical for installations drawing megawatts continuously. Sealed enclosures protect against dust and moisture in depot environments where equipment may be exposed to vehicle exhaust, cleaning operations, and weather.",
      "Digital connectivity represents a significant advancement. Integrated sensors monitor current, voltage, temperature, and partial discharge—key indicators of equipment health and impending failures. Data feeds into ABB's Ability cloud platform, enabling predictive maintenance strategies that prevent unexpected outages. For operators managing multiple depot locations, centralized visibility into electrical infrastructure status improves asset management and maintenance planning.",
      "\"EV charging infrastructure requires electrical distribution equipment to operate at capacity factors far higher than typical commercial buildings,\" explained Dr. Sarah Chen, Head of MV Products at ABB. \"Our new ranges are tested to 10,000 switching operations annually—five times conventional specifications—because that's what depot charging demands. This isn't adapted building products; it's purpose-built for electrification infrastructure.\"",
      "Both switchgear series comply with IEC 62271 standards and UK G99 grid connection requirements. Type-tested configurations are available for common EV charging applications, reducing engineering time and ensuring compliance. Modular design allows future expansion as charging infrastructure grows, protecting initial investment while maintaining flexibility.",
      "ABB has established dedicated EV infrastructure engineering support, providing application guidance, system design review, and commissioning assistance. The company's global service network ensures parts availability and technical support throughout equipment service life, typically 25-30 years for properly maintained switchgear.",
      "The SafeRing MV and EcoGear MV series are available for order now, with delivery timelines of 16-20 weeks for standard configurations. Custom engineered solutions for specialized applications can be quoted through ABB's regional sales offices."
    ],
    contactName: "Jennifer Matthews",
    contactEmail: "press@abb.com",
    contactPhone: "+41 43 317 7111"
  },
  {
    id: "siemens-bp-pulse-partnership",
    company: "Siemens",
    companyLogo: siemensLogo,
    headline: "Siemens Expands EV Infrastructure Partnership with BP Pulse",
    summary: "Extended collaboration will deliver integrated charging solutions across BP Pulse's UK rapid charging network expansion.",
    date: "February 28, 2026",
    location: "MUNICH, Germany",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=600&fit=crop",
    introText: "Siemens Smart Infrastructure and BP Pulse today announced a significant expansion of their strategic partnership to deploy integrated electrical infrastructure and charging technology across BP Pulse's ambitious UK rapid charging network expansion. The collaboration will deliver turnkey solutions combining Siemens' power distribution and control technology with BP Pulse's charging expertise and customer experience platforms.",
    bodyParagraphs: [
      "The expanded partnership addresses a critical challenge in rapid charging deployment: coordinating multiple technology systems—power distribution, charging hardware, energy management, and customer interfaces—into reliable, scalable installations. By integrating Siemens' electrical infrastructure technology with BP Pulse's charging operations platform, the collaboration aims to reduce deployment timelines and improve operational performance.",
      "Under the agreement, Siemens will provide medium-voltage switchgear, transformers, power distribution systems, and energy management software for BP Pulse sites. The integrated solution includes remote monitoring capabilities that provide BP Pulse with real-time visibility into electrical system performance alongside charging operations data. This unified approach to infrastructure and operations management has proven to reduce unplanned downtime by approximately 35% in pilot deployments.",
      "\"Charging network reliability depends fundamentally on electrical infrastructure reliability,\" said Thomas Schmidt, CEO of Siemens Smart Infrastructure. \"Our partnership with BP Pulse demonstrates how integrating upstream electrical systems with downstream charging technology creates measurably better outcomes. We're not just supplying equipment; we're co-engineering solutions optimized for the complete application.\"",
      "The partnership includes joint development of standardized site designs that can be rapidly deployed across diverse locations. Standardization reduces engineering time, simplifies permitting, and enables more efficient procurement and construction. However, the modular architecture maintains flexibility to accommodate site-specific requirements such as varying grid connection characteristics or future expansion capacity.",
      "Energy management software developed collaboratively by Siemens and BP Pulse optimizes power usage across charging sites to reduce demand charges while ensuring charging speed targets are met. The system coordinates charging across multiple dispensers, dynamically allocating available capacity based on vehicle requirements, customer service-level commitments, and energy pricing. For sites incorporating battery storage, the system manages storage dispatch to shave peak demand and provide grid services.",
      "BP Pulse plans to deploy the integrated solution across 150 new rapid charging locations throughout the UK over the next 18 months, with each site featuring 6-12 high-power charging dispensers. The standardized design approach is expected to reduce average deployment time from site acquisition to energization by approximately eight weeks compared to previous site-by-site engineering practices.",
      "Both companies emphasized the partnership's role in supporting UK electrification targets. With transportation accounting for the largest share of UK carbon emissions, rapid charging infrastructure that delivers high reliability and user experience is essential to EV adoption, particularly for drivers without home charging access."
    ],
    contactName: "Klaus Weber",
    contactEmail: "media@siemens.com",
    contactPhone: "+49 89 636 33446"
  },
  {
    id: "schneider-modular-ups",
    company: "Schneider Electric",
    companyLogo: schneiderLogo,
    headline: "Schneider Electric Introduces New Modular UPS for Mission-Critical Infrastructure",
    summary: "Galaxy VS modular UPS delivers scalable power protection for data centres, healthcare facilities, and EV charging hubs.",
    date: "February 27, 2026",
    location: "LONDON, UK",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&h=600&fit=crop",
    imageCaption: "Schneider Electric's Galaxy VS modular UPS system",
    introText: "Schneider Electric, a global leader in energy management and automation, today unveiled its Galaxy VS modular uninterruptible power supply (UPS) designed to meet the evolving power protection needs of mission-critical infrastructure including data centres, healthcare facilities, and electric vehicle charging networks. The system combines industry-leading efficiency with flexible scalability to support dynamic operational requirements.",
    bodyParagraphs: [
      "Modern mission-critical facilities face unprecedented demands on power infrastructure. Data centres must support increasing rack densities while minimizing energy consumption. Healthcare facilities require absolute reliability for life-safety systems. EV charging hubs need flexible capacity that can scale with demand growth. Traditional fixed-capacity UPS systems often force operators to choose between oversizing for future needs—wasting capital and energy—or undersizing and facing capacity constraints.",
      "The Galaxy VS addresses this challenge through modular architecture. Power modules can be added or removed without system shutdown, allowing capacity to track actual load requirements. Initial deployments can start small and grow incrementally as demand increases. This 'pay-as-you-grow' approach reduces upfront capital expenditure while maintaining long-term flexibility.",
      "Efficiency represents another critical advancement. The Galaxy VS achieves up to 99% efficiency in online double-conversion mode, significantly reducing cooling requirements and energy costs. For reference installations, this efficiency translates to annual energy savings of £15,000-25,000 compared to previous-generation systems—a meaningful operational expense reduction over the system's 15-year service life.",
      "\"The fundamental economics of power protection have shifted,\" explained David Thompson, VP of Secure Power at Schneider Electric UK. \"Energy costs and sustainability commitments now drive infrastructure decisions as much as reliability requirements. Galaxy VS delivers both—industry-leading uptime with minimal energy waste. Operators no longer have to compromise.\"",
      "The system incorporates predictive analytics capabilities through Schneider's EcoStruxure platform. Continuous monitoring of electrical parameters, thermal conditions, and battery health enables early detection of potential issues. Maintenance can be scheduled proactively based on actual equipment condition rather than fixed intervals, reducing unnecessary service visits while preventing unexpected failures.",
      "For EV charging applications specifically, the Galaxy VS provides power quality conditioning that protects charging hardware from grid disturbances while supporting high peak loads. The system can integrate with battery energy storage to provide load leveling—drawing power during off-peak periods and discharging during high-demand windows to reduce utility demand charges.",
      "The Galaxy VS is available in 10-500 kVA configurations with both 400V and 480V output options. UK deliveries are available with 12-16 week lead times for standard configurations. Schneider's nationwide service network provides commissioning support and ongoing maintenance throughout the system lifecycle."
    ],
    contactName: "Sarah Jenkins",
    contactEmail: "uk.press@se.com",
    contactPhone: "+44 (0) 870 608 8608"
  },
  {
    id: "legrand-ev-charging-portfolio",
    company: "Legrand",
    companyLogo: legrandLogo,
    headline: "Legrand Expands EV Charging Portfolio with Smart Solutions for Commercial Fleets",
    summary: "New connected charging stations feature dynamic load management and fleet management integration for depot applications.",
    date: "February 26, 2026",
    location: "LIMOGES, France",
    imageUrl: "https://images.unsplash.com/photo-1593941707445-24ec9e2d9d4c?w=1200&h=600&fit=crop",
    imageCaption: "Legrand's new commercial EV charging solution",
    introText: "Legrand, a global specialist in electrical and digital infrastructure, today announced a significant expansion of its electric vehicle charging portfolio with new connected charging stations specifically designed for commercial fleet depot applications. The Green'up Premium Pro range incorporates intelligent load management, fleet integration capabilities, and comprehensive energy monitoring to optimize charging operations while minimizing infrastructure costs.",
    bodyParagraphs: [
      "Commercial fleet electrification presents unique challenges distinct from public or residential charging. Fleet operators must charge multiple vehicles simultaneously on fixed schedules, often within constrained electrical capacity. Infrastructure costs can escalate quickly if facility grid connections require expensive upgrades to accommodate peak charging loads. Operational complexity increases when managing charging across diverse vehicle types with varying battery capacities and duty cycle requirements.",
      "Legrand's Green'up Premium Pro addresses these challenges through integrated dynamic load management. The system continuously monitors total facility power consumption and dynamically allocates available capacity across connected chargers. When building loads are high, charging power automatically moderates to stay within capacity limits. During low-demand periods, full charging power is restored. This intelligent management enables significantly more charging points to operate on existing electrical infrastructure—in many cases doubling or tripling the number of vehicles that can charge simultaneously without grid connection upgrades.",
      "Fleet management integration represents another critical capability. The charging stations communicate with fleet management platforms including Geotab, Verizon Connect, and Teletrac Navman to coordinate charging with vehicle duty cycles and operational requirements. High-priority vehicles—those scheduled for early departure or requiring full charge for long routes—receive preferential power allocation. Lower-priority vehicles charge opportunistically with available capacity. This intelligent orchestration ensures operational readiness while optimizing energy costs.",
      "\"Fleet managers need charging infrastructure that works with their operations, not against them,\" said Philippe Martin, Director of EV Solutions at Legrand. \"Our system understands both the electrical constraints and the operational requirements. It makes continuous micro-decisions to balance competing demands—available power, vehicle schedules, energy costs, and grid capacity. This intelligence transforms charging from a constraint into an optimized process.\"",
      "Energy monitoring capabilities provide detailed visibility into charging costs and patterns. Facility managers can track consumption by vehicle, time period, or department. This granular data supports internal cost allocation, helps identify optimization opportunities, and provides documentation for sustainability reporting requirements. For organizations with multiple depot locations, centralized dashboards aggregate data across the entire fleet footprint.",
      "The Green'up Premium Pro range includes both AC (7-22 kW) and DC fast charging (50-150 kW) options to accommodate different vehicle types and duty cycles. All models feature IP54-rated enclosures suitable for outdoor installation, RFID access control, and cellular connectivity for remote monitoring and management. Installation support includes site assessment, electrical design review, and commissioning services.",
      "The new charging stations are available for order through Legrand's commercial distribution channels, with deliveries beginning in April 2026. Volume pricing is available for fleet deployments of 10 or more charging points. Extended warranty and maintenance packages ensure long-term operational reliability."
    ],
    contactName: "Marie Dubois",
    contactEmail: "press.relations@legrand.com",
    contactPhone: "+33 5 55 06 87 87"
  }
];

export function getPressReleaseById(id: string): PressRelease | undefined {
  return pressReleases.find(pr => pr.id === id);
}