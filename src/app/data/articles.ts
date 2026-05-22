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
  topics?: string[]; // Array of topic IDs this article is tagged with
  inBrief: string[];
  inReview: {
    paragraphs: string[];
  };
}

export const articles: Article[] = [
  {
    id: "ofgem-compliance-gap",
    category: "Grid & Connections",
    categoryColor: "bg-[#1e3a8a]",
    headline: "Ofgem flags compliance gap in new connection requests",
    summary: "Regulator identifies significant documentation issues in connection applications, potentially delaying critical infrastructure projects across the UK.",
    author: "Sarah Mitchell",
    authorRole: "Infrastructure Policy Editor",
    publishDate: "March 2,2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    topics: ["grid-connections"],
    inBrief: [
      "Ofgem reports 40% of new connection applications contain incomplete technical documentation",
      "Average processing delays extended from 8 to 14 weeks due to compliance gaps",
      "New guidance document issued with mandatory checklist for DNO submissions",
      "Industry consultation opened on standardised connection application formats",
      "Stricter enforcement measures to take effect from Q3 2026"
    ],
    inReview: {
      paragraphs: [
        "This development has significant implications for fleet operators and infrastructure developers planning grid connections in 2026. The extended processing times could push back project timelines by up to six weeks, affecting capital deployment schedules and potentially delaying electrification targets.",
        "The compliance gap primarily affects applications for connections above 1MW – precisely the threshold most depot charging and commercial EV infrastructure projects exceed. Fleet operators should immediately review their connection applications against Ofgem's new checklist to avoid delays.",
        "More fundamentally, this signals a tightening regulatory environment around grid connections. Companies should budget additional time for technical documentation preparation and consider engaging specialist consultants early in the application process. Those with projects in advanced planning stages may want to accelerate submissions before the Q3 enforcement measures take effect."
      ]
    }
  },
  {
    id: "national-grid-hcv-model",
    category: "Grid & Connections",
    categoryColor: "bg-[#1e3a8a]",
    headline: "National Grid pitches new HCV connection model to speed larger projects",
    summary: "Proposed framework aims to streamline high-capacity connections above 10MW, targeting major depot and industrial electrification schemes.",
    author: "James Robertson",
    authorRole: "Grid Infrastructure Correspondent",
    publishDate: "March 1, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1552772588-12592fc15a64?w=1200&h=600&fit=crop",
    topics: ["grid-connections"],
    inBrief: [
      "National Grid proposes fast-track process for connections exceeding 10MW capacity",
      "New model includes pre-assessment phase to identify grid constraints early",
      "Dedicated project managers assigned to HCV applications from day one",
      "Target processing time reduced from 26 weeks to 16 weeks for eligible projects",
      "Pilot scheme launches in Midlands and Southeast regions this summer"
    ],
    inReview: {
      paragraphs: [
        "For large fleet operators planning depot electrification at scale, this represents a meaningful acceleration in grid connection timelines. The 10-week reduction in processing time could translate to earlier revenue generation and faster return on investment for major infrastructure projects.",
        "The pre-assessment phase is particularly valuable. Rather than discovering grid constraints late in the application process – a common cause of delays and redesigns – operators will gain visibility into network capacity issues upfront. This allows for more realistic project planning and budgeting from the outset.",
        "However, the pilot scheme's geographic limitation means only projects in the Midlands and Southeast will benefit initially. Fleet operators in other regions should monitor the pilot's progress and prepare applications to align with the new model when it expands nationally, likely in 2027. Those with flexibility in site selection may want to prioritize locations within the pilot regions."
      ]
    }
  },
  {
    id: "ev-charging-shortages",
    category: "EV Charging",
    categoryColor: "bg-[#10b981]",
    headline: "EV charging market sees cable and switchgear shortages ahead",
    summary: "Supply chain analysis warns of potential equipment shortages in Q4 2026 as demand for charging infrastructure accelerates beyond manufacturing capacity.",
    author: "Emma Thompson",
    authorRole: "Supply Chain Analyst",
    publishDate: "February 28, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=600&fit=crop",
    topics: ["ev-charging"],
    inBrief: [
      "Industry forecasts predict 30% shortfall in medium-voltage switchgear availability by Q4 2026",
      "Copper cable lead times extended to 16-20 weeks, up from typical 8-12 weeks",
      "Major manufacturers report order books filled through September",
      "Price increases of 15-20% expected across electrical infrastructure components",
      "Experts recommend securing long-lead items now for projects planned beyond Q2"
    ],
    inReview: {
      paragraphs: [
        "This supply chain squeeze creates immediate procurement urgency for any fleet operator with charging infrastructure projects scheduled for late 2026 or early 2027. Delaying equipment orders until detailed design completion is no longer viable – early procurement commitment is now essential to avoid project delays.",
        "The financial impact is twofold: not only are prices rising significantly, but project delays caused by equipment unavailability carry substantial opportunity costs. A delayed charging depot means delayed fleet electrification, extended diesel costs, and missed carbon reduction targets.",
        "Fleet operators should immediately engage with equipment suppliers to understand current lead times and secure provisional allocations for critical components like MV switchgear and transformers. Some forward-thinking operators are placing orders based on conceptual designs, accepting the risk of minor specification changes rather than facing potential six-month delays. Capital planning processes may need adjustment to accommodate earlier equipment procurement."
      ]
    }
  },
  {
    id: "storage-audit-guidance",
    category: "Storage & Resilience",
    categoryColor: "bg-[#14b8a6]",
    headline: "Behind the meter storage audit guidance updates",
    summary: "New technical standards for battery energy storage systems introduce stricter safety and performance audit requirements for commercial installations.",
    author: "Dr. Michael Chen",
    authorRole: "Energy Storage Technical Lead",
    publishDate: "March 2, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1626163602001-c5c88c6e2ecf?w=1200&h=600&fit=crop",
    topics: ["storage-resilience"],
    inBrief: [
      "Updated G99 guidance mandates annual third-party audits for BESS installations above 500kWh",
      "New thermal management verification requirements added to commissioning protocols",
      "Fire suppression system testing frequency increased from annual to bi-annual",
      "Battery management system data logging now requires 12-month retention minimum",
      "Existing installations have 18-month compliance window from April 2026"
    ],
    inReview: {
      paragraphs: [
        "These enhanced audit requirements will increase operational costs for any organization using behind-the-meter storage to support EV charging or provide grid services. Budget holders should factor in additional annual compliance costs of £8,000-£15,000 depending on system size.",
        "The thermal management verification requirement is particularly significant for existing installations. Many older BESS were designed before thermal runaway became a central safety concern. Retrofitting adequate thermal monitoring and control may be necessary to meet the new standards, potentially requiring unplanned capital expenditure.",
        "For new projects, the guidance should inform design specifications from the outset. Specifying compliant BMS systems, appropriate fire suppression, and accessible audit points during the design phase is far more cost-effective than retrofitting. Organizations planning BESS installations should ensure consultants and contractors are working to the updated G99 guidance to avoid costly modifications during commissioning."
      ]
    }
  },
  // Additional Grid & Connections articles
  {
    id: "ssen-capacity-map-update",
    category: "Grid & Connections",
    categoryColor: "bg-[#1e3a8a]",
    headline: "SSEN publishes updated capacity heatmap showing network constraints",
    summary: "Distribution network operator reveals significant capacity limitations across Southern England, impacting connection timescales for new projects.",
    author: "Sarah Mitchell",
    authorRole: "Infrastructure Policy Editor",
    publishDate: "February 27, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1760789149696-30ce2d28b331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI1MDY1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["grid-connections"],
    inBrief: [
      "SSEN heatmap shows 47 primary substations at or near capacity across Southern England",
      "New connections in constrained areas may face delays of 18-36 months",
      "£890m reinforcement programme announced for 2026-2028 period",
      "Interactive map allows developers to check capacity before site selection",
      "Priority queuing system introduced for projects with grid flexibility capabilities"
    ],
    inReview: {
      paragraphs: [
        "The capacity heatmap provides unprecedented visibility into network constraints, enabling more informed site selection for major infrastructure projects. Fleet operators planning depot locations should consult this tool early in feasibility studies to avoid selecting sites with limited grid capacity.",
        "The 18-36 month delay warning is particularly significant for projects on critical timelines. In constrained areas, grid connection may become the project's longest lead time item, fundamentally affecting project phasing and financial planning.",
        "SSEN's priority queuing for flexibility-enabled projects creates a strategic opportunity. Projects incorporating smart charging, battery storage, or demand-side response capabilities may jump the queue, potentially saving months in connection timescales. This strengthens the business case for integrating flexibility from the outset rather than adding it later."
      ]
    }
  },
  {
    id: "idno-market-share-growth",
    category: "Grid & Connections",
    categoryColor: "bg-[#1e3a8a]",
    headline: "IDNO market share reaches 18% as developers seek alternatives to DNOs",
    summary: "Independent distribution network operators capture growing share of new connections market, particularly for large commercial developments.",
    author: "James Robertson",
    authorRole: "Grid Infrastructure Correspondent",
    publishDate: "February 26, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI1NDE0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["grid-connections"],
    inBrief: [
      "IDNO connections now represent 18% of new commercial developments, up from 12% in 2024",
      "Average connection timescales 22% faster for IDNO routes versus traditional DNO",
      "Three new IDNO licenses granted by Ofgem in past six months",
      "Competitive tension driving DNOs to improve service levels and response times",
      "87% of logistics parks now evaluate both DNO and IDNO options"
    ],
    inReview: {
      paragraphs: [
        "The growth in IDNO market share reflects broader dissatisfaction with DNO connection timescales and service quality. For large commercial projects where grid connection sits on the critical path, the 22% time saving offered by IDNOs can translate to significant financial benefits through earlier revenue generation.",
        "Increased competition is already improving the market. DNOs facing IDNO competition are responding with improved service levels, dedicated account management for major projects, and more flexible commercial terms. Even projects ultimately connecting via DNO routes benefit from this competitive dynamic.",
        "Fleet operators should actively evaluate both options for any substantial project. The due diligence process—requesting proposals from both DNO and relevant IDNOs, comparing not just cost and timescales but also service quality, flexibility provisions, and long-term support—has become standard practice for sophisticated infrastructure developers."
      ]
    }
  },
  {
    id: "substation-transformer-shortage",
    category: "Grid & Connections",
    categoryColor: "bg-[#1e3a8a]",
    headline: "UK faces 11kV transformer shortage as grid upgrade demand surges",
    summary: "Industry analysis warns of equipment bottlenecks for distribution network reinforcement projects throughout 2026 and into 2027.",
    author: "Emma Thompson",
    authorRole: "Supply Chain Analyst",
    publishDate: "February 24, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    topics: ["grid-connections"],
    inBrief: [
      "Lead times for 11kV transformers extended to 52 weeks, double the historical average",
      "UK manufacturing capacity unable to meet surge in DNO reinforcement programmes",
      "Import challenges due to global demand for grid infrastructure equipment",
      "Some DNOs establishing strategic equipment reserves to protect project timescales",
      "Experts recommend provisional transformer orders at feasibility stage for major projects"
    ],
    inReview: {
      paragraphs: [
        "This shortage creates a hidden risk for projects dependent on network reinforcement. Even after securing a connection offer from your DNO, equipment availability may delay energisation. Projects should explicitly ask DNOs about equipment procurement timescales and secure commitments on delivery dates.",
        "The strategic implication is that projects in areas requiring reinforcement face not only longer connection timescales but also greater schedule uncertainty. This strengthens the case for sites with existing network capacity, even if land costs are marginally higher.",
        "For projects with flexibility on commissioning dates, the shortage may create opportunity. DNOs prioritising equipment allocation may offer favourable terms to projects with relaxed timescales, potentially reducing connection charges in exchange for schedule flexibility."
      ]
    }
  },
  // Additional EV Charging articles
  {
    id: "rapid-charging-hub-roi",
    category: "EV Charging",
    categoryColor: "bg-[#10b981]",
    headline: "Public rapid charging hubs show 28-month payback in new analysis",
    summary: "Financial modeling reveals accelerating returns on public charging infrastructure as EV adoption rates exceed forecasts across commercial vehicle segments.",
    author: "Robert Chang",
    authorRole: "EV Infrastructure Analyst",
    publishDate: "March 1, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1650452233063-8f308616b729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2UyMHZlaGljbGUlMjBkZXBvdCUyMGNoYXJnaW5nfGVufDF8fHx8MTc3MjU0NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["ev-charging"],
    inBrief: [
      "Analysis of 47 operational rapid charging hubs shows average payback of 28 months",
      "Utilisation rates averaging 41% across operational sites, up from 23% in 2024",
      "Peak demand periods extending beyond initial morning and evening windows",
      "Average transaction value increased 17% as commercial vehicles adopt rapid charging",
      "Hub operators reporting stronger-than-modeled performance across most metrics"
    ],
    inReview: {
      paragraphs: [
        "These economics transform the business case for public charging infrastructure. The 28-month payback significantly outperforms the 48-60 month models that guided investment decisions in 2024, reflecting both higher utilisation and better pricing power as demand intensifies.",
        "For fleet operators, this data supports build-own-operate models for charging infrastructure rather than purely captive depot charging. Excess capacity during off-peak periods can serve third-party demand, creating revenue streams that improve project economics while providing resilience against changes in fleet size or operational patterns.",
        "The extended peak periods are particularly notable. Early models assumed concentrated demand during limited time windows. Real-world data shows more distributed usage patterns, improving infrastructure utilisation and reducing the business case for expensive peak-shaving battery storage."
      ]
    }
  },
  {
    id: "smart-charging-mandate",
    category: "EV Charging",
    categoryColor: "bg-[#10b981]",
    headline: "Government confirms smart charging mandate for workplace installations",
    summary: "New regulations require all workplace EV charging installations above 50kW to include smart charging capabilities from July 2026.",
    author: "Sarah Mitchell",
    authorRole: "Infrastructure Policy Editor",
    publishDate: "February 29, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1678244584152-0761c770e6ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwRVYlMjBjaGFyZ2VyJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MjU0NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["ev-charging"],
    inBrief: [
      "All workplace charging installations above 50kW must include smart charging from 1 July 2026",
      "Existing installations have 24-month compliance window to retrofit capabilities",
      "Smart charging systems must meet new BS EN 63110 technical standard",
      "Integration with grid flexibility services becomes eligibility requirement for government grants",
      "Estimated retrofit costs of £800-£1,200 per charge point for non-compliant systems"
    ],
    inReview: {
      paragraphs: [
        "This mandate formalises what leading operators already implement voluntarily. Smart charging's benefits—reduced peak demand, lower grid connection costs, and grid services revenue—already provide strong business cases. The regulation simply ensures universal adoption, leveling the playing field.",
        "The 24-month retrofit window for existing installations creates immediate planning requirements. Operators with non-smart charging infrastructure should budget for compliance costs and schedule retrofits strategically to minimise operational disruption. Some may find equipment replacement more cost-effective than retrofitting older systems.",
        "The integration requirement for grant eligibility is significant. Government support programmes increasingly link funding to grid flexibility capabilities. Projects designed from the outset with smart charging and grid services integration will access better grant support than basic installations, often making the incremental technology cost neutral or better."
      ]
    }
  },
  {
    id: "depot-charging-best-practices",
    category: "EV Charging",
    categoryColor: "bg-[#10b981]",
    headline: "New industry guidance sets depot charging best practices",
    summary: "Energy Networks Association publishes comprehensive design standards for fleet depot electrification projects.",
    author: "James Robertson",
    authorRole: "Grid Infrastructure Correspondent",
    publishDate: "February 25, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=600&fit=crop",
    topics: ["ev-charging"],
    inBrief: [
      "ENA publishes 147-page technical specification for depot charging infrastructure",
      "Guidance covers electrical design, safety systems, smart charging integration, and scalability",
      "New standards expected to be referenced in DNO connection offers from Q2 2026",
      "Insurance industry signals preferential rates for compliant installations",
      "Document developed with input from 34 fleet operators and electrical contractors"
    ],
    inReview: {
      paragraphs: [
        "This guidance provides a blueprint for best-practice depot charging design, reducing the need for bespoke engineering on every project. Standardisation should reduce design costs and timescales while improving installation quality and safety.",
        "The insurance industry's interest is telling. Electrical infrastructure failures in depot charging installations have driven several high-profile incidents. Insurers are now differentiating premiums based on design standards, creating financial incentives for compliance beyond technical merits.",
        "Fleet operators procuring depot charging should reference this guidance in tender specifications. It provides clear, industry-consensus standards against which contractors' proposals can be evaluated, reducing risk of inadequate designs that meet minimal regulatory requirements but lack operational robustness."
      ]
    }
  },
  {
    id: "charge-point-reliability-study",
    category: "EV Charging",
    categoryColor: "bg-[#10b981]",
    headline: "Charge point reliability rates improve but remain below target",
    summary: "Annual industry survey shows uptime increasing to 94.7% but still short of government's 99% availability target.",
    author: "Dr. Michael Chen",
    authorRole: "Energy Storage Technical Lead",
    publishDate: "February 23, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1626163602001-c5c88c6e2ecf?w=1200&h=600&fit=crop",
    topics: ["ev-charging"],
    inBrief: [
      "Public charge point uptime reaches 94.7%, up from 91.2% in 2024",
      "Rapid chargers show better reliability (95.8%) than fast chargers (93.1%)",
      "Connectivity issues remain leading cause of downtime, accounting for 47% of failures",
      "Preventive maintenance programmes correlate with 3.4 percentage point improvement",
      "Government maintains pressure for 99% availability target by end 2026"
    ],
    inReview: {
      paragraphs: [
        "Improving reliability is essential for EV adoption, particularly in commercial fleets where downtime directly impacts operations. The 94.7% figure means the average charge point is unavailable 19 days per year—unacceptable for mission-critical fleet charging.",
        "The connectivity finding is instructive. Nearly half of failures aren't mechanical or electrical but software and communications issues. This emphasises the importance of robust network infrastructure and backend systems, not just reliable charge point hardware.",
        "The preventive maintenance correlation provides clear operational guidance. Operators implementing regular inspection and maintenance schedules see measurably better uptime. This should inform maintenance budget decisions—investment in preventive programmes reduces both unexpected downtime and emergency repair costs."
      ]
    }
  },
  // Additional Storage & Resilience articles
  {
    id: "bess-fire-safety-update",
    category: "Storage & Resilience",
    categoryColor: "bg-[#14b8a6]",
    headline: "New fire safety protocols mandated for battery storage installations",
    summary: "Following recent incidents, regulators introduce enhanced safety requirements for commercial battery energy storage systems.",
    author: "Dr. Michael Chen",
    authorRole: "Energy Storage Technical Lead",
    publishDate: "March 2, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmF0dGVyeSUyMHN5c3RlbXxlbnwxfHx8fDE3NzI1NDU1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["storage-resilience"],
    inBrief: [
      "All BESS installations over 100kWh must include thermal runaway detection from April 2026",
      "Minimum 3-metre separation distance required between battery modules",
      "Automatic fire suppression systems mandatory for indoor installations",
      "Remote monitoring with 24/7 alert capability becomes licensing requirement",
      "Existing systems have 12-month window to achieve compliance"
    ],
    inReview: {
      paragraphs: [
        "These requirements respond to several concerning incidents in 2025 where inadequate fire safety systems led to significant damage and prolonged outages. The regulations impose meaningful costs—particularly the suppression system requirements—but are essential for safe operation.",
        "The thermal runaway detection requirement is particularly important for lithium-ion systems. Early detection enables orderly shutdown and isolation before minor cell failures cascade into major incidents. Modern battery systems include this as standard, but many existing installations lack adequate monitoring.",
        "The compliance window for existing systems creates budget pressure. Operators must assess current installations against new requirements and schedule necessary upgrades. In some cases, particularly for older systems nearing end-of-life, replacement may prove more economical than extensive retrofit work."
      ]
    }
  },
  {
    id: "grid-services-revenue-drop",
    category: "Storage & Resilience",
    categoryColor: "bg-[#14b8a6]",
    headline: "Battery storage revenue from frequency services falls 23% in Q1",
    summary: "Increased competition and changing grid requirements reduce income potential from traditional battery storage revenue streams.",
    author: "Robert Chang",
    authorRole: "EV Infrastructure Analyst",
    publishDate: "February 27, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1552772588-12592fc15a64?w=1200&h=600&fit=crop",
    topics: ["storage-resilience"],
    inBrief: [
      "Average revenue per MW from frequency response services down 23% year-on-year",
      "Market oversupply as new battery storage capacity outpaces grid requirement growth",
      "National Grid ESO adjusting service specifications to favor faster response times",
      "Capacity payments declining while performance requirements tighten",
      "Industry analysts predict further revenue compression through 2026"
    ],
    inReview: {
      paragraphs: [
        "This revenue compression challenges business cases built on optimistic grid services assumptions. Battery storage projects justified primarily by frequency response revenue face deteriorating economics. Multi-revenue stream models incorporating demand reduction, peak shaving, and backup power provide more resilient business cases.",
        "The specification changes favor newer, faster-responding battery technologies over older systems. This creates performance stratification in the market—premium prices for capability National Grid values most, commoditised pricing for basic response. Investment in advanced power electronics and control systems increasingly differentiates asset performance.",
        "For fleet operators considering battery storage to support depot charging, the message is clear: justify the investment on direct operational benefits—demand charge reduction, grid connection cost savings, backup power—treating grid services revenue as upside rather than foundation. Projects dependent on grid services revenue may no longer stack up financially."
      ]
    }
  },
  {
    id: "behind-meter-storage-growth",
    category: "Storage & Resilience",
    categoryColor: "bg-[#14b8a6]",
    headline: "Behind-the-meter battery storage installations surge 340% year-on-year",
    summary: "Commercial and industrial battery storage deployments accelerate as businesses seek protection from grid constraints and high peak charges.",
    author: "Emma Thompson",
    authorRole: "Supply Chain Analyst",
    publishDate: "February 26, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1626163602001-c5c88c6e2ecf?w=1200&h=600&fit=crop",
    topics: ["storage-resilience"],
    inBrief: [
      "Behind-the-meter storage capacity additions reach 487MW in 2025, up from 143MW in 2024",
      "Depot electrification projects account for 41% of BTM storage installations",
      "Average system size increasing to 650kWh as projects target peak demand reduction",
      "Payback periods compress to 3.8 years driven by rising demand charges and grid constraints",
      "Financial institutions developing standardized lending products for BTM storage projects"
    ],
    inReview: {
      paragraphs: [
        "The surge in behind-the-meter storage reflects growing recognition that battery systems deliver multiple value streams beyond grid services. For depot charging operations, storage can reduce peak grid demand, minimize demand charges, provide backup power, and enable load shifting to exploit time-of-use tariffs.",
        "The depot electrification connection is particularly significant. Many fleet operators discover that battery storage reduces required grid connection capacity, sometimes dramatically. If storage can peak-shave charging load, a depot might need 1.5MW grid capacity instead of 2.5MW—a difference that can save £200,000+ in connection costs alone.",
        "Improving project economics and standardised lending products lower barriers to adoption. Fleet operators previously viewing battery storage as complex or risky can now access proven reference designs, competitive equipment pricing, and favorable financing. This should accelerate integration of storage into depot electrification projects as standard practice rather than exception."
      ]
    }
  },
  // Additional Commissioning & Reliability articles  
  {
    id: "commissioning-protocol-updates",
    category: "Commissioning & Testing",
    categoryColor: "bg-[#3b82f6]",
    headline: "Updated commissioning protocols address EV infrastructure complexity",
    summary: "Industry working group publishes revised testing and commissioning procedures specifically for integrated EV charging and storage systems.",
    author: "James Robertson",
    authorRole: "Grid Infrastructure Correspondent",
    publishDate: "March 1, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZyUyMGNvbW1pc3Npb25pbmd8ZW58MXx8fHwxNzcyNTQ1NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["commissioning-reliability"],
    inBrief: [
      "New commissioning protocols cover integrated testing of charging, storage, and control systems",
      "Enhanced procedures for smart charging validation and grid service readiness",
      "Mandatory load testing under realistic operational scenarios before handover",
      "Documentation requirements expanded to include system integration points",
      "Training certification required for engineers commissioning systems above 500kW"
    ],
    inReview: {
      paragraphs: [
        "These protocols address a genuine gap in industry practice. Traditional electrical commissioning procedures focused on individual equipment items—test the transformer, test the switchgear, test the charge points. Modern depot installations require integrated system testing to verify complex interactions between components.",
        "The realistic load testing requirement is particularly valuable. Paper-based testing may show all components functioning individually while integrated system performance under real load reveals control logic errors, communication failures, or capacity bottlenecks. Catching these during commissioning rather than operational launch prevents costly disruptions.",
        "The certification requirement professionalises commissioning work for complex installations. Fleet operators should verify that commissioning engineers hold appropriate certifications, particularly for projects incorporating smart charging, battery storage, and grid integration. This reduces risk of poor commissioning work that creates ongoing operational problems."
      ]
    }
  },
  {
    id: "predictive-maintenance-ai",
    category: "Commissioning & Testing",
    categoryColor: "bg-[#3b82f6]",
    headline: "AI-powered predictive maintenance reduces unplanned downtime by 67%",
    summary: "Machine learning systems demonstrate ability to forecast electrical infrastructure failures days before conventional monitoring detects issues.",
    author: "Dr. Michael Chen",
    authorRole: "Energy Storage Technical Lead",
    publishDate: "February 28, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRpc3RyaWJ1dGlvbiUyMHBhbmVsfGVufDF8fHx8MTc3MjU0MDcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["commissioning-reliability"],
    inBrief: [
      "AI monitoring systems demonstrate 67% reduction in unplanned downtime across trial fleet",
      "Machine learning models identify failure patterns 3-7 days before traditional alerts",
      "Systems analyse electrical signatures, thermal profiles, and usage patterns",
      "Early adopters report 43% reduction in maintenance costs through optimised interventions",
      "Technology providers targeting depot charging and critical infrastructure applications"
    ],
    inReview: {
      paragraphs: [
        "Predictive maintenance transforms the economics of infrastructure operation. Rather than scheduled maintenance based on time intervals or reactive repairs after failures, AI-driven approaches intervene precisely when needed—maximising uptime while minimising maintenance costs.",
        "The 3-7 day advance warning is operationally significant. Instead of emergency repairs disrupting operations, maintenance can be scheduled during planned downtime windows. For depot charging where overnight availability is critical, the ability to schedule daytime repairs while vehicles are deployed is highly valuable.",
        "As these systems mature and costs decline, predictive maintenance should become standard for substantial EV charging installations. The business case is clear: improved uptime, reduced maintenance costs, and extended asset life. Operators specifying new installations should evaluate predictive maintenance capabilities as part of equipment selection."
      ]
    }
  },
  {
    id: "testing-standards-harmonization",
    category: "Commissioning & Testing",
    categoryColor: "bg-[#3b82f6]",
    headline: "UK and EU commissioning standards harmonization agreed",
    summary: "Regulatory alignment on testing and commissioning procedures simplifies compliance for equipment manufacturers and project developers.",
    author: "Sarah Mitchell",
    authorRole: "Infrastructure Policy Editor",
    publishDate: "February 24, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    topics: ["commissioning-reliability"],
    inBrief: [
      "UK adopts EU testing standards for EV charging infrastructure from June 2026",
      "Harmonized approach reduces duplicate testing for equipment sold in both markets",
      "Common certification framework enables mutual recognition of test results",
      "Industry estimates 12-15% cost reduction for compliant equipment",
      "Simplified compliance expected to accelerate new product introductions"
    ],
    inReview: {
      paragraphs: [
        "Standards harmonization removes inefficiency and cost from supply chains. Equipment manufacturers previously conducting separate testing for UK and EU markets can now satisfy both with common procedures. These savings should flow through to end customers as reduced equipment costs.",
        "For project developers, common standards mean equipment certified for EU markets works without modification in UK installations. This expands supplier options and increases competition, potentially reducing procurement costs and improving availability.",
        "The timing is helpful, arriving as supply chains face capacity constraints. Harmonization enables European suppliers to serve UK demand more easily, somewhat alleviating equipment shortages. Projects should benefit from better availability and pricing as supply side efficiency improves."
      ]
    }
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}