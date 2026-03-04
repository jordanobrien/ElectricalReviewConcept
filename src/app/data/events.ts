export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  type: string;
  summary: string;
  description: string[];
  imageUrl: string;
  agenda: {
    time: string;
    title: string;
    description: string;
  }[];
  speakers: {
    name: string;
    role: string;
    company: string;
  }[];
  registrationUrl?: string;
  price?: string;
}

export const events: Event[] = [
  {
    id: "future-grid-summit-2026",
    title: "Future Grid Summit 2026",
    date: "15 March 2026",
    location: "ExCeL London",
    venue: "ExCeL London, Royal Victoria Dock, 1 Western Gateway, London E16 1XL",
    type: "Conference",
    summary: "The UK's premier conference for grid infrastructure professionals, bringing together network operators, regulators, technology providers, and major energy users to address the challenges of delivering grid capacity for electrification.",
    description: [
      "The Future Grid Summit brings together the key decision-makers responsible for delivering the grid infrastructure required to support the UK's electrification targets. With network investment projected to exceed £100 billion over the next decade, and connection queue times creating significant barriers to deployment, the summit addresses the critical commercial, technical, and regulatory challenges facing the sector.",
      "This year's programme focuses on practical solutions to accelerate grid connections, manage demand flexibility, and deploy energy storage at scale. Case studies from major projects provide operational insights into what works—and what doesn't—when delivering complex grid infrastructure under time and budget constraints.",
      "The summit creates an environment where network operators can explain their constraints and priorities, technology providers can demonstrate proven solutions, and major energy users can articulate their connection requirements. This dialogue is essential to breaking the current bottlenecks that are delaying the UK's transition to electrified transport and heating."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    agenda: [
      {
        time: "09:00 - 09:30",
        title: "Registration & Networking Breakfast",
        description: "Coffee and networking in the exhibition hall"
      },
      {
        time: "09:30 - 10:15",
        title: "Keynote: Grid Investment Strategy 2026-2035",
        description: "National Grid ESO on infrastructure priorities and regulatory frameworks"
      },
      {
        time: "10:15 - 11:00",
        title: "Panel: Accelerating Connection Timeframes",
        description: "DNO representatives discuss queue management and fast-track processes"
      },
      {
        time: "11:00 - 11:30",
        title: "Coffee Break & Exhibition",
        description: "Networking and technology demonstrations"
      },
      {
        time: "11:30 - 12:15",
        title: "Case Study Track: Large-Scale Depot Electrification",
        description: "Behind-the-scenes look at major fleet operator grid connection projects"
      },
      {
        time: "12:15 - 13:00",
        title: "Technical Session: Demand Management Technologies",
        description: "Smart charging, battery storage, and load balancing solutions"
      },
      {
        time: "13:00 - 14:00",
        title: "Networking Lunch",
        description: "Lunch and exhibition hall"
      },
      {
        time: "14:00 - 14:45",
        title: "Regulatory Update: Ofgem Policy Changes",
        description: "Latest developments in connection policy and price controls"
      },
      {
        time: "14:45 - 15:30",
        title: "Panel: Energy Storage & Grid Services",
        description: "Commercial models for battery storage and flexibility services"
      },
      {
        time: "15:30 - 16:00",
        title: "Afternoon Tea & Exhibition",
        description: "Final networking session"
      },
      {
        time: "16:00 - 17:00",
        title: "Closing Panel: 2030 Infrastructure Roadmap",
        description: "Looking ahead to capacity requirements and investment priorities"
      }
    ],
    speakers: [
      {
        name: "James Morrison",
        role: "Director of Connections",
        company: "National Grid ESO"
      },
      {
        name: "Dr. Sarah Chen",
        role: "Head of Network Strategy",
        company: "UK Power Networks"
      },
      {
        name: "Michael Davies",
        role: "Fleet Electrification Director",
        company: "FirstGroup"
      },
      {
        name: "Emma Thompson",
        role: "Senior Policy Manager",
        company: "Ofgem"
      }
    ],
    registrationUrl: "#",
    price: "£495 + VAT"
  },
  {
    id: "ev-infrastructure-delivery-workshop",
    title: "EV Infrastructure Delivery Workshop",
    date: "22 March 2026",
    location: "Manchester Central",
    venue: "Manchester Central Convention Complex, Windmill Street, Manchester M2 3GX",
    type: "Workshop",
    summary: "Practical workshop for project managers and engineers delivering EV charging infrastructure projects, covering design, procurement, construction, and commissioning from real-world project experience.",
    description: [
      "This intensive one-day workshop provides practical guidance for professionals responsible for delivering EV charging infrastructure projects. Based on lessons learned from operational depot installations across the UK, the workshop addresses the technical decisions, procurement strategies, and project management approaches that determine whether projects finish on time, on budget, and to specification.",
      "Unlike conferences focused on policy or market trends, this workshop concentrates on execution. Sessions cover power requirement calculations, electrical design specifications, contractor selection, construction phase management, and commissioning verification. Attendees work through real design scenarios and examine case studies where projects encountered—and overcame—typical problems.",
      "The workshop format encourages questions and discussion. With a maximum of 80 attendees and extended Q&A sessions, there's opportunity to explore specific challenges relevant to your projects. Presenters are practitioners currently delivering live projects, not consultants or vendors—the focus is on what actually works when complexity meets reality."
    ],
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=600&fit=crop",
    agenda: [
      {
        time: "09:00 - 09:30",
        title: "Registration & Introduction",
        description: "Workshop overview and participant introductions"
      },
      {
        time: "09:30 - 10:45",
        title: "Power Requirements & Electrical Design",
        description: "Load calculations, diversity factors, and design specifications for depot charging"
      },
      {
        time: "10:45 - 11:00",
        title: "Coffee Break",
        description: "Networking"
      },
      {
        time: "11:00 - 12:30",
        title: "Grid Connections & DNO Engagement",
        description: "Application processes, assessment periods, and managing connection delays"
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch",
        description: "Networking lunch"
      },
      {
        time: "13:30 - 15:00",
        title: "Procurement & Contractor Selection",
        description: "Specification development, tendering, and contract management"
      },
      {
        time: "15:00 - 15:15",
        title: "Afternoon Break",
        description: "Tea and coffee"
      },
      {
        time: "15:15 - 16:30",
        title: "Construction Phase & Commissioning",
        description: "Site management, testing, documentation, and handover"
      },
      {
        time: "16:30 - 17:00",
        title: "Case Studies & Q&A",
        description: "Real project examples and open discussion"
      }
    ],
    speakers: [
      {
        name: "Tom Richardson",
        role: "Head of Engineering",
        company: "Zenobē Energy"
      },
      {
        name: "Rachel Foster",
        role: "Technical Director",
        company: "Connected Kerb"
      },
      {
        name: "David Palmer",
        role: "Senior Project Manager",
        company: "Stagecoach"
      }
    ],
    registrationUrl: "#",
    price: "£395 + VAT"
  },
  {
    id: "grid-connections-capacity-forum",
    title: "Grid Connections & Capacity Forum",
    date: "5 April 2026",
    location: "Birmingham NEC",
    venue: "National Exhibition Centre, Birmingham B40 1NT",
    type: "Forum",
    summary: "Forum bringing together DNOs, major connection applicants, and policymakers to address the grid capacity crisis affecting UK electrification projects.",
    description: [
      "The grid connection queue has become the critical constraint on UK electrification. With over 500GW of generation and storage projects awaiting connection, and commercial projects regularly facing 5+ year timelines, the current system is clearly not fit for purpose. This forum brings together the organisations responsible for operating, regulating, and using the grid to identify practical solutions.",
      "Unlike traditional conference formats, this forum structures dialogue around specific challenges. Roundtable sessions enable frank discussion between DNOs explaining operational constraints and major users describing project requirements. The objective is mutual understanding of what's technically possible, commercially viable, and regulatory permissible.",
      "Policy proposals will be developed throughout the day, with final recommendations presented to attending Ofgem representatives. This is an opportunity to influence regulatory changes that could accelerate connection processes and remove barriers to essential infrastructure projects."
    ],
    imageUrl: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=1200&h=600&fit=crop",
    agenda: [
      {
        time: "09:30 - 10:00",
        title: "Registration & Coffee",
        description: "Networking"
      },
      {
        time: "10:00 - 10:30",
        title: "State of the Connection Queue",
        description: "Data presentation on current queue status and projection trends"
      },
      {
        time: "10:30 - 12:00",
        title: "Roundtable 1: DNO Perspectives",
        description: "Network operators on constraints, priorities, and process improvements"
      },
      {
        time: "12:00 - 13:00",
        title: "Lunch & Networking",
        description: "Working lunch"
      },
      {
        time: "13:00 - 14:30",
        title: "Roundtable 2: User Requirements",
        description: "Major connection applicants on project needs and commercial impacts"
      },
      {
        time: "14:30 - 15:00",
        title: "Coffee Break",
        description: "Networking"
      },
      {
        time: "15:00 - 16:30",
        title: "Roundtable 3: Regulatory Solutions",
        description: "Policy proposals and implementation pathways"
      },
      {
        time: "16:30 - 17:00",
        title: "Closing: Recommendations & Next Steps",
        description: "Summary of policy proposals and commitment to actions"
      }
    ],
    speakers: [
      {
        name: "Martin Hughes",
        role: "Network Development Director",
        company: "Scottish Power Energy Networks"
      },
      {
        name: "Claire Watson",
        role: "Head of Connections Policy",
        company: "Ofgem"
      },
      {
        name: "Robert Mitchell",
        role: "Infrastructure Director",
        company: "Amazon UK"
      }
    ],
    registrationUrl: "#",
    price: "£595 + VAT"
  },
  {
    id: "storage-resilience-symposium",
    title: "Storage & Resilience Symposium",
    date: "18 April 2026",
    location: "Edinburgh ICC",
    venue: "Edinburgh International Conference Centre, The Exchange, Edinburgh EH3 8EE",
    type: "Symposium",
    summary: "Technical symposium on battery energy storage systems, focusing on commercial deployment, safety requirements, and integration with EV charging infrastructure.",
    description: [
      "Battery energy storage has transitioned from demonstration projects to commercial deployment, with hundreds of megawatts installed annually to support grid services, renewable integration, and demand management. This symposium examines the technical realities of deploying BESS at scale, drawing on operational data from live installations.",
      "Safety remains the critical concern for BESS projects. Recent incidents—while statistically rare—highlight the consequences when thermal management or fire suppression systems fail. The symposium dedicates substantial time to safety system design, examining different detection and suppression approaches and the latest regulatory requirements from fire authorities and insurers.",
      "Integration with EV charging infrastructure represents an emerging application. Battery storage can reduce grid connection costs by managing peak demand, provide resilience against supply interruptions, and enable participation in grid services markets. Sessions explore commercial models, technical integration requirements, and real-world performance data from operational systems."
    ],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    agenda: [
      {
        time: "09:00 - 09:30",
        title: "Registration & Coffee",
        description: "Networking and exhibition viewing"
      },
      {
        time: "09:30 - 10:30",
        title: "Keynote: UK BESS Market Review 2025",
        description: "Market analysis, project pipeline, and commercial trends"
      },
      {
        time: "10:30 - 11:30",
        title: "Technical Deep Dive: Safety Systems",
        description: "Fire detection, suppression, and thermal management design"
      },
      {
        time: "11:30 - 12:00",
        title: "Coffee & Exhibition",
        description: "Technology demonstrations"
      },
      {
        time: "12:00 - 13:00",
        title: "Panel: Regulatory & Insurance Requirements",
        description: "Compliance with fire safety standards and insurer expectations"
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch",
        description: "Networking lunch"
      },
      {
        time: "14:00 - 15:00",
        title: "BESS + EV Charging: Integration Models",
        description: "Technical and commercial considerations for combined systems"
      },
      {
        time: "15:00 - 16:00",
        title: "Case Studies: Operational Performance",
        description: "Real-world data from operating installations"
      },
      {
        time: "16:00 - 16:30",
        title: "Afternoon Tea & Exhibition",
        description: "Final networking"
      },
      {
        time: "16:30 - 17:30",
        title: "Closing Panel: Technology Roadmap",
        description: "Battery technology evolution and future applications"
      }
    ],
    speakers: [
      {
        name: "Dr. Jennifer Walsh",
        role: "Technical Director",
        company: "Habitat Energy"
      },
      {
        name: "Andrew Stevens",
        role: "Head of Safety & Compliance",
        company: "Zenobē Energy"
      },
      {
        name: "Lisa Patel",
        role: "Senior Fire Safety Officer",
        company: "London Fire Brigade"
      },
      {
        name: "Mark Thompson",
        role: "Chief Technology Officer",
        company: "Pivot Power"
      }
    ],
    registrationUrl: "#",
    price: "£545 + VAT"
  }
];

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}
