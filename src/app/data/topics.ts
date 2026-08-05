export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  startHereTitle: string;
  startHereDescription: string;
  startHerePoints: string[];
  keyTopics: string[];
}

export const topics: Record<string, Topic> = {
  "cooling-thermal-management": {
    id: "cooling-thermal-management", title: "Cooling & Thermal Management", icon: "cooling",
    description: "Air, liquid and hybrid thermal strategies for reliable high-density computing.",
    heroImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop",
    startHereTitle: "Cooling high-density infrastructure",
    startHereDescription: "The engineering principles that connect IT demand to dependable heat rejection:",
    startHerePoints: ["Direct-to-chip and immersion cooling", "Facility and technology water systems", "Retrofit planning for live halls", "Commissioning and water chemistry"],
    keyTopics: ["Liquid Cooling", "Air Cooling", "Water Systems", "Heat Reuse"],
  },
  "design-construction-operations": {
    id: "design-construction-operations", title: "Design, Construction & Operations", icon: "building",
    description: "Planning, building, commissioning and operating dependable data centre estates.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop",
    startHereTitle: "From design intent to operating performance",
    startHereDescription: "The disciplines that turn a specification into resilient live capacity:",
    startHerePoints: ["Campus planning and phasing", "Construction quality", "Integrated systems testing", "Capacity and change management"],
    keyTopics: ["Design", "Construction", "Commissioning", "Operations"],
  },
  "digital-infrastructure-security": {
    id: "digital-infrastructure-security", title: "Digital Infrastructure & Security", icon: "network",
    description: "Compute, connectivity, physical security and operational resilience across digital estates.",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=800&fit=crop",
    startHereTitle: "Connecting and protecting critical infrastructure",
    startHereDescription: "A joined-up view of the platforms, networks and safeguards behind digital services:",
    startHerePoints: ["AI and accelerated compute", "Fibre and network diversity", "Physical and cyber security", "Operational resilience"],
    keyTopics: ["AI Infrastructure", "Networking", "Cyber Security", "Resilience"],
  },
  "markets-policy-people": {
    id: "markets-policy-people", title: "Markets, Policy & People", icon: "markets",
    description: "Investment, planning, regulation, skills and the people shaping sector growth.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=800&fit=crop",
    startHereTitle: "Understanding the market around the infrastructure",
    startHereDescription: "The commercial and human forces that determine where capacity is built:",
    startHerePoints: ["Investment and transactions", "Planning and public policy", "Skills and leadership", "Regional market development"],
    keyTopics: ["Investment", "Planning", "Policy", "Skills"],
  },
  "power-energy": {
    id: "power-energy", title: "Power & Energy", icon: "power",
    description: "Grid capacity, resilient power trains, storage and campus energy strategy.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
    startHereTitle: "Powering the next generation of compute",
    startHereDescription: "The electrical decisions shaping new and existing data centre capacity:",
    startHerePoints: ["Grid connection and campus phasing", "UPS, generation and storage", "Power quality and protection", "Flexibility, PPAs and microgrids"],
    keyTopics: ["Grid Connections", "Critical Power", "Energy Storage", "Microgrids"],
  },
  "sustainability-resources": {
    id: "sustainability-resources", title: "Sustainability & Resources", icon: "sustainability",
    description: "Energy, water, carbon, land and circular design across the data centre lifecycle.",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=800&fit=crop",
    startHereTitle: "Turning targets into operating evidence",
    startHereDescription: "The metrics and infrastructure that make sustainability progress measurable:",
    startHerePoints: ["Energy and carbon accounting", "Water stewardship", "Heat reuse", "Circular equipment strategies"],
    keyTopics: ["Energy Efficiency", "Water", "Heat Networks", "Circularity"],
  },
};
