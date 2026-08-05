export interface Article {
  id: string;
  category: string;
  categoryColor: string;
  headline: string;
  summary: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
  topics?: string[];
  inBrief: string[];
  inReview: { paragraphs: string[] };
}

const images = {
  racks: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop",
  server: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=800&fit=crop",
  power: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
  solar: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=800&fit=crop",
  cooling: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop",
  security: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=800&fit=crop",
  city: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=800&fit=crop",
  wind: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&h=800&fit=crop",
};

export const articles: Article[] = [
  {
    id: "ai-density-rewrites-data-centre-design",
    category: "Data Centre Design & Operations",
    categoryColor: "bg-[#382673]",
    headline: "AI density is rewriting the data centre design rulebook",
    summary: "Operators are redesigning power trains, white space and cooling loops as accelerated compute moves from isolated pods to campus-wide deployment.",
    author: "Maya Patel",
    authorRole: "Editor, Data Centre Review",
    publishDate: "5 August 2026",
    readTime: "6 min read",
    imageUrl: images.racks,
    topics: ["design-construction-operations", "digital-infrastructure-security"],
    inBrief: [
      "High-density AI halls are pushing conventional room layouts beyond their design assumptions",
      "Power, cooling and network architecture now need to be planned as a single system",
      "Phased deployment can protect existing capacity while new liquid loops are commissioned",
      "Operational telemetry is becoming central to capacity planning",
    ],
    inReview: { paragraphs: [
      "The shift to accelerated computing is not simply a matter of installing hotter racks. Higher density changes the relationship between the electrical room, cooling plant, network fabric and the white space itself. Designs that once allowed disciplines to progress in sequence increasingly require shared models and coordinated commissioning.",
      "Many operators are responding with repeatable high-density zones rather than rebuilding an entire facility at once. This creates a controlled route to deploy direct-to-chip cooling, higher-capacity busway and new monitoring while keeping neighbouring halls live.",
      "The most successful programmes treat telemetry as design evidence. Rack inlet temperatures, pressure differentials, power quality and utilisation data reveal where theoretical capacity can be converted into dependable operating headroom—and where it cannot.",
    ] },
  },
  {
    id: "grid-flexibility-campus-capacity",
    category: "Power",
    categoryColor: "bg-[#6752a8]",
    headline: "Can flexible demand unlock the next wave of campus capacity?",
    summary: "Data centres are exploring storage, workload orchestration and flexible connections to make better use of constrained electricity networks.",
    author: "Jordan Ellis",
    authorRole: "Power & Infrastructure Correspondent",
    publishDate: "4 August 2026",
    readTime: "5 min read",
    imageUrl: images.power,
    topics: ["power-energy"],
    inBrief: [
      "Grid connection constraints remain a defining issue for new UK campuses",
      "Batteries can support peak management but do not replace a robust connection strategy",
      "Flexible demand agreements require clear operational guardrails",
      "Workload placement is emerging as an energy-management tool",
    ],
    inReview: { paragraphs: [
      "A constrained grid does not always mean a site has no route to growth. It does mean the conventional approach—requesting a fixed maximum import and designing every system around it—may leave usable capacity stranded.",
      "Operators are combining on-site storage, carefully defined flexible connection products and software that can move non-urgent workloads between regions or time windows. Each measure has limits, but together they can reduce the distance between contracted capacity and actual compute delivered.",
      "The critical discipline is to protect resilience. Flexibility should be bounded by service commitments, battery state of charge and realistic recovery scenarios. Commercial benefits disappear quickly if an energy strategy creates a new single point of operational risk.",
    ] },
  },
  {
    id: "liquid-cooling-retrofit-live-halls",
    category: "Cooling",
    categoryColor: "bg-[#8a72c9]",
    headline: "Retrofitting liquid cooling without taking the hall offline",
    summary: "A staged engineering approach is helping operators introduce direct-to-chip cooling alongside established air-cooled estates.",
    author: "Elena Brooks",
    authorRole: "Cooling & Sustainability Editor",
    publishDate: "3 August 2026",
    readTime: "7 min read",
    imageUrl: images.cooling,
    topics: ["cooling-thermal-management"],
    inBrief: [
      "Hybrid air-and-liquid environments will be normal for many existing facilities",
      "Water chemistry and materials compatibility must be settled before live connection",
      "Isolation, leak detection and maintainability matter as much as headline cooling capacity",
      "Commissioning should prove failure modes, not only steady-state performance",
    ],
    inReview: { paragraphs: [
      "The retrofit challenge begins outside the rack. Pipe routes, distribution units, plant capacity and maintenance access all have to coexist with a live environment designed around airflow. A successful project therefore starts with the building, not with a preferred cold plate.",
      "Staged deployment allows teams to validate water chemistry, controls and operating procedures on a contained zone. The approach also exposes practical issues—valve access, condensate risk, hose management and alarm ownership—before they are multiplied across a hall.",
      "Commissioning needs to test the uncomfortable scenarios: loss of pump duty, rapid IT load changes, partial isolation and a sensor fault during maintenance. These exercises turn a cooling installation into an operationally credible system.",
    ] },
  },
  {
    id: "heat-reuse-commercial-case",
    category: "Green IT & Sustainability",
    categoryColor: "bg-[#5f8f83]",
    headline: "Heat reuse moves from ambition to infrastructure planning",
    summary: "Developers are aligning data centre heat output with local networks earlier, improving the odds that recovered energy reaches a useful customer.",
    author: "Amelia Wright",
    authorRole: "Sustainability Correspondent",
    publishDate: "1 August 2026",
    readTime: "5 min read",
    imageUrl: images.city,
    topics: ["sustainability-resources"],
    inBrief: [
      "Heat reuse depends on nearby demand, temperature requirements and long-term commercial alignment",
      "Planning the interface early is more effective than adding it after the campus design is fixed",
      "Heat pumps can raise useful temperatures but add electrical demand",
      "Transparent performance metrics are essential for credible carbon claims",
    ],
    inReview: { paragraphs: [
      "Waste heat has genuine value only when infrastructure, demand and commercial responsibility line up. That makes heat reuse less like a bolt-on sustainability feature and more like a local utility project with its own network, customers and long-term operating model.",
      "Developers are now discussing heat quality and off-take during site selection. A lower-temperature source can be useful for modern district networks, while other customers may require heat pumps that change both the economics and the electrical load profile of the data centre.",
      "The strongest schemes disclose what is available, what is actually delivered and which emissions assumptions sit behind the claim. That discipline helps communities and planners distinguish deliverable infrastructure from a line in a planning statement.",
    ] },
  },
  {
    id: "sovereign-cloud-physical-resilience",
    category: "Data Analytics & Security",
    categoryColor: "bg-[#244c66]",
    headline: "Why data sovereignty starts with physical resilience",
    summary: "Jurisdiction matters, but so do supply chains, maintenance access, network diversity and the people authorised to touch critical systems.",
    author: "Ravi Shah",
    authorRole: "Security & Resilience Analyst",
    publishDate: "31 July 2026",
    readTime: "6 min read",
    imageUrl: images.security,
    topics: ["digital-infrastructure-security"],
    inBrief: [
      "Sovereignty requirements extend beyond the location of stored data",
      "Operational access and third-party maintenance can create overlooked dependencies",
      "Network route diversity should be verified physically, not assumed contractually",
      "Incident exercises need to include facilities and supply-chain teams",
    ],
    inReview: { paragraphs: [
      "A postcode cannot provide sovereignty on its own. If remote support, spare parts, network paths or privileged maintenance access depend on uncontrolled jurisdictions, the physical platform may undermine the assurance promised at the software layer.",
      "Operators are mapping dependencies in more detail, including who can enter secure zones, where firmware is sourced, how replacement equipment is transported and whether supposedly diverse fibre routes share ducts or exchanges.",
      "The practical test is an incident exercise that joins cyber, facilities, security and suppliers. It reveals whether authority, evidence and recovery procedures remain clear when the building and the digital service are under pressure at the same time.",
    ] },
  },
  {
    id: "brownfield-ai-capacity",
    category: "Industry",
    categoryColor: "bg-[#b14f83]",
    headline: "Brownfield sites gain ground in the race for AI capacity",
    summary: "Existing grid access and industrial infrastructure are making complex redevelopment sites increasingly attractive to data centre investors.",
    author: "Jordan Ellis",
    authorRole: "Power & Infrastructure Correspondent",
    publishDate: "30 July 2026",
    readTime: "4 min read",
    imageUrl: images.city,
    topics: ["markets-policy-people"],
    inBrief: [
      "Power availability is giving selected brownfield sites a strategic advantage",
      "Legacy assets require extensive surveys before programme assumptions are fixed",
      "Phased remediation can align enabling works with connection milestones",
      "Community benefits need to be designed into the development case",
    ],
    inReview: { paragraphs: [
      "Former industrial sites often arrive with complications: uncertain ground conditions, ageing utilities and constrained access. They can also offer something much harder to manufacture—a history of high electrical demand and infrastructure corridors suited to large-scale redevelopment.",
      "That value is only real after investigation. Developers need verified title, contamination surveys, cable routes, network studies and a realistic view of which legacy assets can be retained. An assumed connection is not the same as a deliverable one.",
      "Where the fundamentals work, brownfield campuses can reconnect digital growth with established industrial communities. Skills programmes, heat networks and better local infrastructure make that story tangible rather than abstract.",
    ] },
  },
  {
    id: "microgrid-black-start-strategy",
    category: "Power",
    categoryColor: "bg-[#6752a8]",
    headline: "Inside the new microgrid playbook for critical facilities",
    summary: "Microgrids are evolving from fuel-saving projects into coordinated resilience platforms for campuses with complex power profiles.",
    author: "Noah Bennett",
    authorRole: "Technical Features Writer",
    publishDate: "29 July 2026",
    readTime: "7 min read",
    imageUrl: images.solar,
    topics: ["power-energy", "sustainability-resources"],
    inBrief: [
      "A microgrid needs a clearly defined operating objective before technology is selected",
      "Protection and control philosophy determine whether assets can work safely as one system",
      "Black-start sequences should be demonstrated under realistic load conditions",
      "Renewables and storage add value when coordinated with reliability priorities",
    ],
    inReview: { paragraphs: [
      "The word microgrid can describe very different systems. For a critical facility, the useful definition is an electrical island with a tested control philosophy, known load priorities and enough dispatchable energy to move through a credible outage sequence.",
      "Solar, batteries, generators and flexible loads each behave differently during faults and transitions. Integration therefore depends on protection settings, controls, communications and a shared model of which asset leads at every stage.",
      "The decisive test is black start. A tabletop sequence is not enough: operators need evidence that auxiliaries, pumps, controls and staged IT loads can be restored without exhausting stored energy or destabilising the island.",
    ] },
  },
  {
    id: "edge-estates-observability",
    category: "Edge Computing",
    categoryColor: "bg-[#cf7b3a]",
    headline: "Managing hundreds of edge sites as one resilient estate",
    summary: "Standardised telemetry and remote operating models are helping small distributed facilities achieve big-site discipline.",
    author: "Maya Patel",
    authorRole: "Editor, Data Centre Review",
    publishDate: "28 July 2026",
    readTime: "5 min read",
    imageUrl: images.server,
    topics: ["digital-infrastructure-security"],
    inBrief: [
      "Edge resilience depends on consistency across a large number of small sites",
      "Alarm quality matters more than raw alarm volume",
      "Remote recovery should be designed before locations are rolled out",
      "Common spares and documented configuration reduce mean time to repair",
    ],
    inReview: { paragraphs: [
      "A single edge location may be simple; an estate of hundreds is not. Small differences in configuration, naming, firmware or maintenance practice accumulate into a support problem that central teams cannot see clearly.",
      "Leading operators are defining a minimum telemetry standard and commissioning every site against it. The goal is to surface a small number of actionable conditions with enough context for remote teams to diagnose them quickly.",
      "This approach turns repeatability into resilience. Common spares, remote reset paths and controlled configuration make it possible to operate distributed infrastructure with the discipline expected of a major data centre campus.",
    ] },
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}
