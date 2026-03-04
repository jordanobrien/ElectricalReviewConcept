export interface Download {
  id: string;
  title: string;
  type: string;
  size: string;
  category: string;
  summary: string;
  description: string[];
  imageUrl: string;
  fileUrl: string;
  publishedDate: string;
  author?: string;
  pages?: number;
}

export const downloads: Download[] = [
  {
    id: "grid-connection-standards-guide-2026",
    title: "Grid Connection Standards Guide 2026",
    type: "PDF Guide",
    size: "2.4 MB",
    category: "Technical Standards",
    summary: "Comprehensive guide to UK grid connection standards, covering G99, G100, and Engineering Recommendation documentation for commercial connections.",
    description: [
      "This guide provides practical interpretation of the UK's grid connection standards for commercial and industrial connections. While the Engineering Recommendations themselves are technical documents written for electrical engineers, this guide explains what they mean for project delivery—what you must demonstrate, what documentation DNOs require, and how to structure connection applications for approval.",
      "The guide covers G99 (connections under 50MW, which includes virtually all commercial projects), addressing requirements for protection equipment, power quality, fault ride-through capability, and grid services provision. It explains how these requirements translate into equipment specifications and testing procedures.",
      "Updated for 2026, the guide reflects recent revisions to connection standards, including enhanced requirements for demand flexibility, cybersecurity for grid-connected equipment, and revised power quality limits. It includes example calculations, documentation templates, and case studies from successful connection applications.",
      "Sections cover connection application processes, technical requirements for different connection voltages, testing and commissioning procedures, and ongoing compliance obligations once connected. The guide is designed for project managers, engineers, and commercial developers who need to understand connection requirements without wading through hundreds of pages of technical standards."
    ],
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    fileUrl: "/downloads/grid-connection-standards-guide-2026.pdf",
    publishedDate: "15 January 2026",
    author: "Technical Standards Team",
    pages: 68
  },
  {
    id: "ev-charging-infrastructure-best-practices",
    title: "EV Charging Infrastructure Best Practices",
    type: "White Paper",
    size: "1.8 MB",
    category: "Best Practices",
    summary: "Best practice guide for planning, designing, and delivering EV charging infrastructure for commercial fleet operations, based on analysis of 50+ operational depot installations.",
    description: [
      "This white paper distills lessons learned from EV charging infrastructure projects delivered over the past three years. Based on interviews with fleet operators, depot managers, and electrical contractors who have completed operational installations, it identifies what works—and what doesn't—when delivering charging infrastructure under real-world constraints.",
      "The paper examines common problems: underestimating future power requirements and needing costly upgrades within two years; inadequate consideration of vehicle routing when positioning chargers, resulting in operational inefficiencies; insufficient contractor briefing leading to delays when site conditions differ from drawings; and commissioning shortcuts that cause reliability problems months later.",
      "Best practices cover power requirement forecasting, incorporating growth assumptions and operational contingency; site layout optimization, considering vehicle movements and operational workflows; specification development, defining requirements clearly enough for accurate contractor pricing; and quality assurance during construction, identifying the hold-points that prevent expensive remedial work.",
      "The paper includes planning checklists, specification templates, and contractor selection criteria developed from projects that finished on time and to budget. It's written for operational decision-makers, not technical specialists—the focus is on practical management of complex projects where multiple disciplines (electrical, civil, IT, operations) must coordinate effectively."
    ],
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=600&fit=crop",
    fileUrl: "/downloads/ev-charging-best-practices.pdf",
    publishedDate: "3 February 2026",
    author: "Electrical Review Research Team",
    pages: 42
  },
  {
    id: "depot-design-specification-template",
    title: "Depot Design Specification Template",
    type: "Excel Template",
    size: "850 KB",
    category: "Templates",
    summary: "Editable Excel template for developing electrical design specifications for depot charging installations, including load calculations, equipment schedules, and contractor requirements.",
    description: [
      "This Excel template provides a structured format for developing electrical design specifications for EV depot charging projects. Rather than starting from blank documents—and potentially omitting critical requirements—the template guides you through the necessary sections while allowing customization for your specific project.",
      "The template includes calculation sheets for determining power requirements based on fleet composition, duty cycles, and charging strategies. It incorporates diversity factors appropriate for different operational patterns (continuous vs. scheduled charging, daytime vs. overnight, uniform vs. mixed fleet types) and allows scenario modeling to understand how different assumptions affect connection capacity requirements.",
      "Equipment schedule sections list typical components (transformers, switchgear, distribution boards, charging units, cable infrastructure) with placeholder specifications that should be customized based on detailed design. Commentary notes explain the considerations behind each specification—why particular ratings or features are recommended for depot environments.",
      "Contractor requirement sections define the scope of work, standards to be applied, testing procedures, and documentation deliverables. These sections help ensure contractor quotations are based on consistent specifications, enabling meaningful price comparison. The template has been reviewed by electrical contractors to confirm specifications are clear and comprehensive enough for accurate pricing and execution.",
      "The template is provided as an editable Excel workbook with instructions on each sheet. It is intended as a starting point for projects, not a substitute for professional electrical design. Complex projects will require detailed design by qualified electrical engineers; the template helps structure project requirements and briefing for design consultants."
    ],
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    fileUrl: "/downloads/depot-design-template.xlsx",
    publishedDate: "20 January 2026",
    author: "Technical Resources Team",
    pages: null
  },
  {
    id: "annual-market-report-2025",
    title: "Annual Market Report 2025",
    type: "PDF Report",
    size: "5.2 MB",
    category: "Market Analysis",
    summary: "Comprehensive analysis of the UK electrification infrastructure market, covering EV charging deployment, grid connection trends, energy storage adoption, and investment forecasts for 2026-2030.",
    description: [
      "Electrical Review's annual market report provides the definitive analysis of UK electrification infrastructure deployment and investment trends. Based on proprietary datasets tracking grid connection applications, planning approvals, and capital expenditure across the sector, the report quantifies market activity and projects future growth trajectories.",
      "The 2025 report examines a transformative year for the sector. Public transport fleet electrification accelerated dramatically, with over 3,000 electric buses entering service and depot charging infrastructure investment exceeding £400 million. Commercial vehicle operators progressed from trials to operational deployments, with major logistics operators committing to substantial fleet transitions requiring significant depot electrical upgrades.",
      "Grid connection timelines remained the critical constraint. Analysis of connection application data reveals the average wait time for connections above 1MW increased to 68 months—up from 52 months in 2024. The report examines the causes (unprecedented application volumes, network capacity constraints, regulatory process limitations) and potential solutions (queue management reforms, flexible connection products, investment acceleration).",
      "Energy storage deployment reached 2.8GW of operational capacity, with another 5.2GW in construction or advanced development. The report analyzes commercial models, examining which revenue sources are sustaining projects (capacity market, frequency response, wholesale arbitrage, flexibility services) and how returns vary by location, configuration, and operational strategy.",
      "The report includes five-year forecasts for infrastructure investment, connection capacity deployment, and technology adoption. It identifies the regulatory changes, commercial developments, and technology innovations likely to shape the sector through 2030. Market sizing is provided for key segments: public transport electrification, commercial vehicle infrastructure, energy storage, grid reinforcement, and demand flexibility technologies."
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    fileUrl: "/downloads/annual-market-report-2025.pdf",
    publishedDate: "10 February 2026",
    author: "Market Research Team",
    pages: 124
  }
];

export function getDownloadById(id: string): Download | undefined {
  return downloads.find(download => download.id === id);
}
