export interface OpinionArticle {
  id: string;
  title: string;
  summary: string;
  content: {
    introduction: string[];
    sections: { heading: string; paragraphs: string[] }[];
    conclusion: string[];
  };
  author: {
    name: string;
    role: string;
    company: string;
    bio: string;
    imageUrl: string;
  };
  publishedDate: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  topics?: string[];
}

export const opinionArticles: OpinionArticle[] = [
  {
    id: "resilience-is-an-operating-discipline",
    title: "Resilience is an operating discipline, not an equipment list",
    summary: "Redundant components matter, but the quality of procedures, evidence and rehearsal determines whether a facility can actually ride through disruption.",
    content: {
      introduction: [
        "The data centre industry is fluent in redundancy. We can describe N+1 and 2N architectures in exquisite detail, yet many incidents still begin in the space between two healthy systems: an unclear handover, a misunderstood alarm or a maintenance sequence that was technically possible but operationally unsafe.",
        "Resilience is the ability of a whole organisation to recognise a changing condition, make the right decision and recover without losing control. Hardware is essential, but it is only one part of that capability.",
      ],
      sections: [
        { heading: "Design for the people who will operate it", paragraphs: [
          "A diagram can show independent power paths while hiding the fact that both rely on one procedure, one control screen or one experienced engineer. Operational review should begin during design, when interfaces and access can still be changed cheaply.",
          "Clear labelling, alarm rationalisation and maintainable layouts reduce cognitive load when time is limited. Those are resilience features every bit as real as an additional breaker or pump.",
        ] },
        { heading: "Use testing to create shared knowledge", paragraphs: [
          "Integrated systems testing should not be a final performance. It should be a structured learning process in which facilities teams, vendors and customer operations see how the system behaves away from steady state.",
          "Recording decisions, expected responses and recovery times builds an evidence base that training and future changes can use.",
        ] },
      ],
      conclusion: ["The facilities that recover well are rarely the ones with the most impressive single component. They are the ones that have made resilience observable, rehearsed and owned."],
    },
    author: { name: "Dr Priya Nair", role: "Director of Critical Infrastructure", company: "Continuum Advisory", bio: "Priya advises operators on resilience engineering, integrated testing and organisational readiness for critical facilities.", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
    publishedDate: "4 August 2026",
    date: "4 Aug 2026",
    category: "Data Centre Design & Operations",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=800&fit=crop",
    readTime: "6 min read",
    topics: ["design-construction-operations", "digital-infrastructure-security"],
  },
  {
    id: "cooling-metric-beyond-pue",
    title: "The cooling conversation needs to move beyond PUE",
    summary: "A single annual efficiency ratio cannot explain water use, heat quality, climate response or the performance of high-density cooling zones.",
    content: {
      introduction: [
        "PUE remains useful because it gives operators a common way to discuss facility overhead. The problem begins when it is asked to answer questions it was never designed to answer.",
        "As liquid cooling, heat reuse and water stewardship become central design issues, we need a fuller set of measures that reveals where energy and resources actually go.",
      ],
      sections: [
        { heading: "Measure at the boundary where decisions are made", paragraphs: [
          "Campus-level averages can hide a high-performing new hall and a constrained legacy one. Zone-level measurement connects efficiency to specific operating choices and makes improvement projects accountable.",
          "The same principle applies to water: withdrawals, consumption and discharge are different quantities and should not be collapsed into one claim.",
        ] },
        { heading: "Value useful heat honestly", paragraphs: [
          "Recovered heat should be reported as energy actually delivered to a customer, together with the electricity used to upgrade and move it. Available heat is not the same as useful heat.",
          "Transparent boundaries make sustainability reporting more credible and help engineers compare designs on equal terms.",
        ] },
      ],
      conclusion: ["PUE should remain in the toolkit, but not sit alone. Better decisions come from a small family of metrics tied directly to energy, water, carbon and useful output."],
    },
    author: { name: "Marcus Lee", role: "Sustainability Engineering Lead", company: "Northbank Digital", bio: "Marcus works on energy, water and heat-recovery strategies for data centre developments across Europe.", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
    publishedDate: "1 August 2026",
    date: "1 Aug 2026",
    category: "Green IT & Sustainability",
    imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=800&fit=crop",
    readTime: "5 min read",
    topics: ["sustainability-resources", "cooling-thermal-management"],
  },
  {
    id: "grid-queue-needs-better-signals",
    title: "The grid queue needs better signals, not bigger promises",
    summary: "Credible milestones and flexible demand can help network planners distinguish deliverable data centre projects from capacity held only on paper.",
    content: {
      introduction: [
        "Every developer wants certainty, and every network needs evidence before committing scarce reinforcement capacity. The queue becomes dysfunctional when neither side can see which projects are genuinely ready to move.",
        "The solution is not another heroic date. It is a set of transparent milestones that let credible projects progress and allow dormant capacity to return to the system.",
      ],
      sections: [
        { heading: "Make readiness visible", paragraphs: [
          "Land control, planning maturity, funding, equipment strategy and a realistic demand ramp are stronger signals than an early application alone. Milestone-based queue management should reward evidence without locking smaller developers out.",
          "Networks also need to publish clearer assumptions about reinforcement and the dependencies that could move a date.",
        ] },
        { heading: "Treat demand shape as part of the connection", paragraphs: [
          "A flat maximum-demand figure hides useful flexibility. Campuses can often phase IT load, manage non-critical processes and coordinate storage within carefully defined service limits.",
          "Connection products that recognise that shape could unlock capacity without pretending that flexible megawatts are firm megawatts.",
        ] },
      ],
      conclusion: ["A credible queue is one where progress is earned through evidence and where both networks and customers can see what must happen next."],
    },
    author: { name: "Sophie Grant", role: "Energy Strategy Partner", company: "Gridline Partners", bio: "Sophie works with large energy users and network companies on connection strategy, flexibility and investment planning.", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
    publishedDate: "29 July 2026",
    date: "29 Jul 2026",
    category: "Power",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&h=800&fit=crop",
    readTime: "6 min read",
    topics: ["power-energy", "markets-policy-people"],
  },
  {
    id: "edge-estates-need-standardisation",
    title: "Edge estates need ruthless standardisation",
    summary: "Distributed infrastructure becomes resilient when every site speaks the same operational language—even if the physical locations are different.",
    content: {
      introduction: [
        "Edge programmes often celebrate local adaptation. Some adaptation is unavoidable, but too much creates an estate where every fault requires rediscovery.",
        "The operating model should be standard even when the building is not: consistent telemetry, naming, spares, access control and recovery paths.",
      ],
      sections: [
        { heading: "Standardise the evidence", paragraphs: [
          "A central team needs comparable alarms, performance data and configuration records. Without them, an estate of small sites becomes a collection of blind spots.",
          "Commissioning should prove that each new location meets the shared evidence standard before it enters service.",
        ] },
        { heading: "Design remote recovery first", paragraphs: [
          "Remote reset, safe isolation and out-of-band communications should be part of the baseline architecture. Truck rolls should be the exception, not the recovery plan.",
          "Where local attendance is unavoidable, common parts and clear procedures shorten the path back to service.",
        ] },
      ],
      conclusion: ["At the edge, consistency is not bureaucracy. It is the mechanism that lets a small team operate a large physical footprint with confidence."],
    },
    author: { name: "Daniel Okafor", role: "Edge Infrastructure Architect", company: "Locality Compute", bio: "Daniel designs distributed compute platforms for telecommunications, retail and industrial environments.", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
    publishedDate: "25 July 2026",
    date: "25 Jul 2026",
    category: "Edge Computing",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=800&fit=crop",
    readTime: "5 min read",
    topics: ["digital-infrastructure-security"],
  },
];

export function getOpinionArticleById(id: string): OpinionArticle | undefined {
  return opinionArticles.find((article) => article.id === id);
}
