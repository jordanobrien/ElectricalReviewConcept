export interface OpinionArticle {
  id: string;
  title: string;
  summary: string;
  content: {
    introduction: string[];
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
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
  category: string;
  imageUrl: string;
  readTime: string;
  topics?: string[];
}

export const opinionArticles: OpinionArticle[] = [
  {
    id: "grid-queue-reform-urgency",
    title: "The grid connection queue: Why tinkering won't fix a broken system",
    summary: "Current proposals for queue management miss the fundamental problem: the system was designed for a different era. We need structural reform, not incremental adjustment.",
    content: {
      introduction: [
        "The grid connection queue has become the defining constraint on UK electrification. With over 500GW of projects waiting—including essential EV charging infrastructure, industrial electrification, and renewable generation—the queue now represents a decade of connection work at current delivery rates. Yet policy discussions focus on queue management rather than addressing the fundamental inadequacy of grid capacity planning and investment frameworks.",
        "I've spent the past five years working with commercial operators trying to secure grid connections for depot electrification and energy storage projects. The pattern is consistent: application processes that take months, assessment results that push connection dates years into the future, and then—most frustratingly—dates that slip further as network reinforcement projects encounter their own delays. This isn't a queue management problem. It's a system capacity problem that requires infrastructure investment at a scale current regulatory frameworks don't enable."
      ],
      sections: [
        {
          heading: "Why Queue Management Misses the Point",
          paragraphs: [
            "Recent proposals focus on removing speculative projects, improving application quality, and introducing financial commitments to discourage applications that won't proceed. These measures might reduce queue length on paper, but they don't create any additional grid capacity. If we remove half the queue through stricter application criteria, the remaining projects still face the same capacity constraints and delivery timescales.",
            "The real bottleneck isn't queue position—it's the physical network reinforcement required to accommodate new connections. When a depot operator applies for a 5MW connection and receives a 2028 connection date contingent on primary substation upgrades, the problem isn't that 100 other projects are ahead in the queue. The problem is that the substation lacks capacity and the reinforcement project to add that capacity hasn't been funded, designed, or scheduled.",
            "Queue reform proposals create the illusion of action while avoiding the difficult conversation about infrastructure investment. It's politically easier to criticize applicants for submitting 'speculative' projects than to confront the reality that our grid infrastructure investment has been fundamentally inadequate for the transition we're attempting."
          ]
        },
        {
          heading: "The Investment Framework Problem",
          paragraphs: [
            "DNOs can only invest based on Ofgem's price control determinations, which occur every five years and are based on forecasting methodologies that consistently underestimate electrification pace. The RIIO-ED2 price control, set in 2023 for the period to 2028, allocated network investment based on connection forecasts that are already proving far too conservative. But DNOs can't simply accelerate investment—they're limited by their allowed revenue and face penalties for over-investment that proves unnecessary.",
            "This creates perverse incentives. DNOs know connection demand will exceed forecasts, but they can't proactively build capacity without regulatory approval. So they wait for connection applications to demonstrate demand before submitting requests for additional investment through 'use it or lose it' mechanisms or mid-period reviews. This reactive approach guarantees connection delays—by the time demand is proven, network reinforcement projects are years away from completion.",
            "We need regulatory frameworks that reward anticipatory investment in grid capacity. That means accepting some risk of over-investment in exchange for removing the systematic under-investment that's now constraining the entire electrification programme. It means shifting from five-year price controls based on conservative forecasts to rolling investment programmes with mechanisms to fund capacity ahead of demonstrated demand."
          ]
        },
        {
          heading: "What Structural Reform Looks Like",
          paragraphs: [
            "First, shift from reactive to anticipatory network investment. Identify locations where electrification will create capacity constraints—depots, industrial sites, logistics hubs—and pre-emptively build capacity. Yes, this risks some stranded investment if forecasts prove optimistic. But the cost of stranded capacity is far less than the economic cost of delaying essential infrastructure for years while waiting for certainty.",
            "Second, create dedicated funding mechanisms for electrification infrastructure that sit outside standard price controls. The strategic grid investment announced in the 2024 Autumn Statement points in the right direction, but it focuses on transmission rather than distribution networks. We need equivalent mechanisms for distribution networks to accelerate substation upgrades, cable reinforcement, and HV network extensions in areas where connection demand is emerging.",
            "Third, separate connection timescales from reinforcement dependencies. If network capacity exists, connections should proceed in months, not years. If reinforcement is required, provide realistic timescales and contractual commitments, not aspirational dates contingent on uncertain investment approvals. This transparency would enable project developers to make informed decisions about site selection and project phasing rather than gambling on connection dates that routinely slip."
          ]
        }
      ],
      conclusion: [
        "The grid connection queue is a symptom, not the disease. The disease is a regulatory and investment framework designed for steady-state grid management in an era when electricity demand was flat or declining. That framework is fundamentally unsuited to managing rapid electrification that will double or triple electricity demand over two decades.",
        "Queue management reforms might create political cover, but they won't deliver the infrastructure required for vehicle electrification, industrial decarbonization, or renewable integration. That requires confronting uncomfortable truths about investment risk, regulatory timescales, and the inadequacy of current approaches. The question is whether we'll have that conversation now, or wait until connection delays force it upon us after we've missed our electrification targets."
      ]
    },
    author: {
      name: "Dr. James Morrison",
      role: "Infrastructure Director",
      company: "Major Fleet Operator",
      bio: "Dr. James Morrison leads infrastructure development for one of the UK's largest transport operators, responsible for deploying EV charging across 50+ depot locations. He previously worked in network planning at National Grid and holds a PhD in Power Systems from Imperial College London.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces"
    },
    publishedDate: "28 February 2026",
    category: "Grid & Connections",
    imageUrl: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=1200&h=600&fit=crop",
    readTime: "8 min read",
    topics: ["grid-connections"]
  },
  {
    id: "battery-safety-complacency",
    title: "Battery storage safety: We're still too complacent",
    summary: "The industry has learned from high-profile BESS incidents, but safety standards remain inconsistent. Until fire authorities develop specialised capability, we're one major incident away from regulatory overcorrection.",
    content: {
      introduction: [
        "The UK battery storage sector has deployed over 3GW of capacity without any major fire incidents. That's a significant achievement and testament to improved design practices, more robust safety systems, and better operational procedures. But scratch beneath this reassuring headline and you find concerning inconsistencies: projects with minimal fire detection, inadequate suppression systems, and emergency response plans that assume local fire services have capability they don't possess.",
        "I've reviewed safety systems for dozens of battery storage installations over the past three years. The gap between best practice and minimum compliance is alarming. Some projects incorporate multiple detection layers, sophisticated suppression systems, and comprehensive emergency procedures. Others meet regulatory minimums with basic smoke detection and assume local fire brigades can respond effectively to lithium-ion fires—a dangerous assumption given most fire services lack appropriate equipment, training, or procedures for BESS incidents."
      ],
      sections: [
        {
          heading: "The Detection Gap",
          paragraphs: [
            "Early detection is critical for BESS safety. Thermal runaway in lithium-ion batteries doesn't happen instantaneously—there's typically a warning period where off-gassing and temperature rises provide opportunity for intervention. But detecting these early indicators requires more than standard smoke detectors. You need off-gas detection monitoring for volatile organic compounds, thermal imaging to identify cell-level temperature variations, and voltage monitoring that can identify failing cells before they enter thermal runaway.",
            "Many installations rely solely on smoke detection, which only triggers when combustion is already underway. By that point, suppression becomes dramatically more difficult and the risk of propagation to adjacent battery modules increases substantially. Off-gas detection can provide 30 minutes to several hours of warning, enabling controlled shutdown or discharge to remove energy before thermal runaway occurs. Yet it's often treated as optional rather than essential.",
            "The problem is regulatory: current standards specify what must be detected (fire, smoke) but not how early detection should occur. This creates a compliance mentality where meeting minimum requirements is sufficient, even when those requirements provide inadequate protection for installations containing megawatt-hours of stored energy in thermally unstable chemistries."
          ]
        },
        {
          heading: "Fire Service Capability",
          paragraphs: [
            "Emergency response planning for BESS typically assumes local fire services can respond effectively. That assumption is increasingly questionable. Lithium-ion battery fires require different approaches than conventional fires: they can re-ignite hours or days after apparent suppression, they produce toxic gases including hydrogen fluoride, and they may require allowing controlled burn-down rather than active suppression in certain scenarios.",
            "Most UK fire brigades lack equipment designed for BESS fires. Standard breathing apparatus isn't rated for the chemical hazards involved. Water supplies may be inadequate for the volumes required—lithium-ion fires can require continuous water application for hours or days. Thermal imaging equipment used for building fires isn't necessarily suitable for identifying hotspots within battery enclosures. And crucially, most brigades lack tactical procedures for BESS incidents, meaning incident commanders are developing response strategies in real-time during emergencies.",
            "Some regions are building specialised capability. London Fire Brigade has developed BESS-specific procedures and acquired appropriate equipment. But this is the exception, not the rule. Installations in regions without specialised capability effectively have no assured emergency response beyond 'evacuate and establish exclusion zone'—a reasonable approach for protecting firefighters, but one that accepts extended burn duration and potentially catastrophic asset loss."
          ]
        },
        {
          heading: "The Regulatory Risk",
          paragraphs: [
            "The industry has been fortunate: despite rapid deployment growth, we've avoided the high-profile incidents that could trigger regulatory reaction. But that fortune won't hold indefinitely. A major incident—particularly one involving injury, community evacuation, or environmental impact—would likely prompt regulatory response that could be far more restrictive than anything we'd design proactively.",
            "Look at what happened in South Korea after multiple BESS fires: moratoriums on new installations, mandatory retrofits of existing systems, and insurance requirements that made many projects economically unviable. Or Arizona, where a single incident resulting in firefighter injuries led to 18-month investigation and suspension of multiple installations pending safety reviews. Reactive regulation after incidents is inevitably more disruptive than proactive standards before incidents occur.",
            "We should be getting ahead of this. The industry should be developing voluntary safety standards that exceed regulatory minimums, working with fire authorities to build appropriate response capability, and sharing operational data to identify issues before they become incidents. Instead, competitive pressure drives cost reduction and projects are designed to minimum compliance standards. This is a recipe for eventual regulatory reaction that will be expensive and disruptive for the entire sector."
          ]
        }
      ],
      conclusion: [
        "Battery storage is essential for the UK's energy transition. We need it for renewable integration, grid stability, and enabling electrification infrastructure. But we need sustainable growth supported by genuine safety capability, not rapid deployment that accepts gaps in protection and response.",
        "The industry should voluntarily adopt enhanced safety standards before regulatory events force them upon us. That means off-gas detection as standard, suppression systems designed for worst-case scenarios, and working with fire authorities to build the specialist capability these installations require. The cost of enhanced safety is modest compared to the cost of major incidents or regulatory reaction. We've been fortunate so far. Let's not assume that fortune will continue indefinitely."
      ]
    },
    author: {
      name: "Sarah Chen",
      role: "Head of Technical Safety",
      company: "Independent Safety Consultant",
      bio: "Sarah Chen specializes in BESS safety systems design and emergency response planning. She previously led safety engineering at a major battery storage developer and has reviewed safety systems for over 2GW of installed capacity. She sits on several industry working groups developing safety standards.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces"
    },
    publishedDate: "15 February 2026",
    category: "Storage & Resilience",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    readTime: "7 min read",
    topics: ["storage-resilience"]
  },
  {
    id: "contractor-shortage-reality",
    title: "The skilled contractor shortage: Stop blaming training, start paying properly",
    summary: "The industry blames training systems for contractor shortages while refusing to pay rates that reflect the skills required. Until commercial realities change, training initiatives won't solve the problem.",
    content: {
      introduction: [
        "Every industry conference features a panel on skills shortages. Speakers lament the lack of qualified electrical contractors, call for enhanced training programmes, and suggest apprenticeship reforms. What they rarely discuss is pay. Because the skills shortage isn't primarily a training problem—it's an economics problem. We're asking for specialist capabilities while offering commodity rates.",
        "I run an electrical contracting business focused on EV infrastructure and energy storage. We're turning away work because we can't recruit qualified staff fast enough. But it's not because qualified electricians don't exist—it's because they're working in sectors that pay better for less demanding work. Residential and commercial building services pay comparable or better day rates for work that doesn't require weekend shifts, tight deadlines, or exposure to depot operations while vehicles are moving around you."
      ],
      sections: [
        {
          heading: "The Rate Reality",
          paragraphs: [
            "EV depot charging projects typically involve working in operational environments with limited shutdown windows, requiring night and weekend work. They involve HV installations requiring additional qualifications. They often have aggressive schedules with liquidated damages for delays. And they're increasingly located in areas with limited accommodation, requiring contractors to be away from home for extended periods.",
            "Yet day rates offered on these projects are often barely above standard building services rates. A qualified electrician doing retail fit-outs in Central London—working standard hours, sleeping in their own bed every night—can earn comparable money to working night shifts at a depot outside Manchester with accommodation in a budget hotel. Given that choice, why would they choose the depot work?",
            "Project developers talk about skills shortages while procuring on lowest price. They want 18th Edition qualified electricians with HV authorization, NICEIC certification, and experience with EV charging systems—then they balk at rates £50/day higher than building services work. This is market failure: demanding specialist capabilities while refusing to pay for them."
          ]
        },
        {
          heading: "Training Isn't the Bottleneck",
          paragraphs: [
            "Industry discussions focus on training pipeline: how do we train more electricians for EV infrastructure work? But qualified electricians exist—they're just working in other sectors. The construction industry employs hundreds of thousands of electricians. Many have, or could quickly acquire, the additional qualifications needed for EV infrastructure work. They're not doing this work because the economic incentive isn't there.",
            "I can send an electrician on a 3-day HV authorization course and a 2-day EV charging installation course. For under £3,000 and a week of their time, they have the qualifications needed for depot charging work. That's not the barrier. The barrier is that after spending that money and time, they can earn more doing less demanding work in building services. So why would they make the investment?",
            "Training initiatives matter for long-term pipeline, particularly bringing new entrants into the industry. But they won't solve short-term capacity constraints because those constraints aren't caused by lack of qualified people—they're caused by qualified people making rational economic decisions to work in sectors with better conditions and comparable or better pay."
          ]
        },
        {
          heading: "What Would Actually Work",
          paragraphs: [
            "First, pay rates that reflect the work demanded. If you want weekend working, HV expertise, and operational environment work, pay accordingly. If depot charging projects paid £50-100/day more than building services work, you'd see electricians moving into the sector. The cost impact on projects would be modest—labour is typically 20-30% of electrical installation costs, so a 15% premium on labour rates adds perhaps 4% to overall project costs.",
            "Second, improve working conditions. Better site facilities, decent accommodation for away work, more realistic schedules that don't require constant overtime to maintain programme. Contractors vote with their feet—they migrate to projects and clients that treat them professionally and respect their time. Companies that develop reputations for poor conditions struggle to staff projects regardless of rates offered.",
            "Third, stop procuring purely on price. Evaluate contractors on capability, track record, and staff retention rates. The contractor who quotes lowest often does so by planning to use cheaper, less experienced staff or by assuming everything will go perfectly. Neither assumption tends to survive contact with reality. Projects that blow budgets because contractors can't staff them or because inexperienced staff create quality issues are far more expensive than paying market rates for qualified contractors up front."
          ]
        }
      ],
      conclusion: [
        "The skills shortage is real, but it's not a training problem—it's an economic problem. We have training infrastructure, we have qualification pathways, and we have experienced electricians. What we don't have is market pricing that reflects the specialist nature of EV infrastructure work and the demanding conditions it involves.",
        "Until clients and developers accept that specialist work requires specialist rates, training initiatives will simply produce electricians who work in other sectors. The solution is straightforward: pay properly, treat contractors professionally, and stop procuring on lowest price. The skills will follow the money. They always do."
      ]
    },
    author: {
      name: "Michael Davies",
      role: "Managing Director",
      company: "EV Infrastructure Contractor",
      bio: "Michael Davies founded an electrical contracting business specialising in EV charging and energy storage installations in 2019. The business has delivered over 100 depot charging projects and employs 45 electrical contractors. Michael holds 18th Edition and HV qualifications and previously worked as a site manager for a major M&E contractor.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
    },
    publishedDate: "5 March 2026",
    category: "Commissioning & Reliability",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
    readTime: "6 min read",
    topics: ["commissioning-reliability"]
  }
];

export function getOpinionArticleById(id: string): OpinionArticle | undefined {
  return opinionArticles.find(article => article.id === id);
}