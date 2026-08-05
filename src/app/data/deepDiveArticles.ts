export interface DeepDiveSection {
  heading: string;
  paragraphs: string[];
  imageUrl?: string;
  imageCaption?: string;
}

export interface DeepDiveArticle {
  id: string;
  category: string;
  categoryColor: string;
  headline: string;
  summary: string;
  author: string;
  authorRole: string;
  publishDate: string;
  lastUpdated?: string;
  readTime: string;
  heroImageUrl: string;
  topics?: string[];
  sections: DeepDiveSection[];
}

export const deepDiveArticles: DeepDiveArticle[] = [
  {
    id: "liquid-cooling-deployment-guide",
    category: "Cooling",
    categoryColor: "bg-[#8a72c9]",
    headline: "The operator's guide to liquid cooling deployment",
    summary: "From facility water systems to rack interfaces, this guide maps the decisions that turn a cooling concept into a maintainable production environment.",
    author: "Elena Brooks",
    authorRole: "Cooling & Sustainability Editor",
    publishDate: "2 August 2026",
    lastUpdated: "5 August 2026",
    readTime: "14 min read",
    heroImageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop",
    topics: ["cooling-thermal-management"],
    sections: [
      {
        heading: "Start with the heat, not the product",
        paragraphs: [
          "Liquid cooling projects often begin with a technology shortlist. A stronger starting point is the workload: expected rack density, heat capture target, deployment profile and the temperatures available at every point in the loop. Those values determine whether direct-to-chip, rear-door heat exchangers or immersion is the right fit.",
          "The design basis should include part-load operation and future processor generations. A system sized only for a headline maximum can perform poorly during commissioning or leave no practical route to expand.",
        ],
      },
      {
        heading: "Define every fluid boundary",
        paragraphs: [
          "Facility water, technology cooling water and the rack loop have different owners, materials and maintenance expectations. The interfaces between them need agreed pressure, temperature, cleanliness and isolation requirements.",
          "Materials compatibility and water chemistry are lifecycle decisions. Early testing, filtration strategy and sampling points prevent corrosion and biological problems from becoming operational surprises.",
        ],
        imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop",
        imageCaption: "Cooling deployment succeeds when plant, distribution and rack interfaces are engineered as one system.",
      },
      {
        heading: "Design for maintenance in a live hall",
        paragraphs: [
          "Isolation valves, drains, hose routing and service clearance are easy to compress in a model and difficult to recover once equipment is installed. Maintainers should review the layout before construction begins.",
          "Leak detection must lead to an actionable response. Teams need to know which alarms trigger local isolation, which require workload migration and which can wait for a planned intervention.",
        ],
      },
      {
        heading: "Commission the failure modes",
        paragraphs: [
          "Steady-state testing proves capacity; resilience testing proves the operating model. Commissioning should include loss of a pump, sensor drift, partial blockage, controller failover and rapid changes in IT load.",
          "The final deliverable is not only test sheets. It is a trained team, a clean asset record and a set of operating procedures that match what was actually installed.",
        ],
      },
    ],
  },
  {
    id: "data-centre-power-strategy",
    category: "Power",
    categoryColor: "bg-[#6752a8]",
    headline: "Building a power strategy for the constrained-grid era",
    summary: "A practical framework for aligning connection capacity, generation, storage, controls and operational risk across a growing data centre campus.",
    author: "Jordan Ellis",
    authorRole: "Power & Infrastructure Correspondent",
    publishDate: "30 July 2026",
    readTime: "13 min read",
    heroImageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
    topics: ["power-energy"],
    sections: [
      {
        heading: "Separate contracted power from usable capacity",
        paragraphs: [
          "A connection agreement sets an import boundary; it does not describe how much dependable compute a campus can deliver. Conversion losses, redundancy, cooling demand, commissioning reserves and growth phasing all sit between the meter and the rack.",
          "A campus power model should make those deductions visible and show how they change during maintenance and faults.",
        ],
      },
      {
        heading: "Choose flexibility with clear guardrails",
        paragraphs: [
          "Batteries, flexible connections and workload orchestration can create headroom, but every flexible megawatt needs an operational rule. The rule should state when it is available, who controls it and which customer commitments override it.",
          "This avoids treating theoretical flexibility as firm capacity during investment decisions.",
        ],
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=800&fit=crop",
        imageCaption: "Grid supply, on-site assets and controllable load need one operating strategy.",
      },
      {
        heading: "Plan the energisation sequence",
        paragraphs: [
          "Large campuses rarely arrive at once. The order in which substations, generators, batteries and halls become available determines whether early capacity can be used efficiently.",
          "A phased energisation plan should link construction milestones to protection studies, witness testing, operator training and commercial readiness.",
        ],
      },
      {
        heading: "Measure resilience as a system",
        paragraphs: [
          "Component redundancy does not guarantee service resilience. Control power, fuel transfer, cooling auxiliaries and communications can connect supposedly separate trains.",
          "Integrated systems testing should follow the full chain from utility disturbance to stable IT operation and documented recovery.",
        ],
      },
    ],
  },
  {
    id: "ai-ready-retrofit-roadmap",
    category: "Data Centre Design & Operations",
    categoryColor: "bg-[#382673]",
    headline: "An AI-ready retrofit roadmap for live facilities",
    summary: "How to identify the halls, electrical paths and cooling zones that can support higher-density compute without compromising existing customers.",
    author: "Noah Bennett",
    authorRole: "Technical Features Writer",
    publishDate: "27 July 2026",
    readTime: "12 min read",
    heroImageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=800&fit=crop",
    topics: ["design-construction-operations", "cooling-thermal-management"],
    sections: [
      {
        heading: "Map the real constraints",
        paragraphs: [
          "Nameplate capacity is only the opening assumption. The retrofit survey needs measured load, protective-device limits, busway condition, cooling performance, floor loading and maintainable access.",
          "The result should rank zones by credible deployment potential rather than present one optimistic campus total.",
        ],
      },
      {
        heading: "Create a repeatable high-density module",
        paragraphs: [
          "A standard module—electrical feed, cooling distribution, controls and rack interface—lets teams learn on the first zone and repeat with fewer surprises.",
          "Modularity also gives customers a clearer product and makes spares, training and maintenance procedures easier to standardise.",
        ],
      },
      {
        heading: "Protect the live environment",
        paragraphs: [
          "Every intrusive activity should have an isolation plan, rollback point and agreed impact boundary. Temporary monitoring can show whether construction is affecting adjacent halls before a threshold becomes an incident.",
          "Change control must include the facilities, network and customer operations teams; none of them sees the complete risk alone.",
        ],
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop",
        imageCaption: "Retrofit programmes need to create capacity while preserving the resilience of the live estate.",
      },
      {
        heading: "Hand over an operating capability",
        paragraphs: [
          "The project is complete only when monitoring is integrated, alarms are rationalised, spares are available and operators have rehearsed abnormal conditions.",
          "That handover discipline is what converts installed equipment into dependable AI capacity.",
        ],
      },
    ],
  },
];

export function getDeepDiveArticleById(id: string): DeepDiveArticle | undefined {
  return deepDiveArticles.find((article) => article.id === id);
}
