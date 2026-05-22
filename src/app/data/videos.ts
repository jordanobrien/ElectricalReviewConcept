export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  category: string;
  views: string;
  videoUrl: string;
  isSponsored?: boolean; // For branded content
  sponsor?: string; // Sponsor name for branded videos
  sponsorLogo?: string; // Sponsor logo for branded videos
  topics?: string[];
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Grid connection fundamentals: What every developer needs to know",
    description: "A comprehensive guide to the grid connection process, from initial application through to energisation. Includes key timelines, regulatory requirements, and common pitfalls to avoid.",
    thumbnail: "https://images.unsplash.com/photo-1768783034942-9e61bb966eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5mcmFzdHJ1Y3R1cmUlMjBwb3dlciUyMGdyaWR8ZW58MXx8fHwxNzcyNTUwMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12:34",
    publishDate: "28 February 2026",
    category: "Grid & Connections",
    views: "8.2K",
    videoUrl: "#",
    topics: ["grid-connections"]
  },
  {
    id: "2",
    title: "Depot charging infrastructure: Site walkthrough and lessons learned",
    description: "On-site tour of a recently commissioned 50-vehicle electric bus depot in Manchester. Engineering team discusses load management strategy, charging hardware selection, and first-year operational experience.",
    thumbnail: "https://images.unsplash.com/photo-1676539432110-78f836970ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGVsZWN0cmljfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "18:45",
    publishDate: "21 February 2026",
    category: "EV Charging Infrastructure",
    views: "12.5K",
    videoUrl: "#",
    topics: ["ev-charging"]
  },
  {
    id: "3",
    title: "Battery energy storage systems: Commissioning and testing protocols",
    description: "Step-by-step demonstration of BESS commissioning procedures, including safety protocols, functional testing, and performance verification. Recorded at a 5MW/10MWh container installation.",
    thumbnail: "https://images.unsplash.com/photo-1766507679659-30076abc8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGJhdHRlcnklMjBzdG9yYWdlfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "22:10",
    publishDate: "14 February 2026",
    category: "Storage & Resilience",
    views: "6.8K",
    videoUrl: "#",
    topics: ["storage-resilience"]
  },
  {
    id: "4",
    title: "Substation inspection: What to look for during site surveys",
    description: "Experienced consulting engineer walks through a typical HV/LV substation inspection, highlighting critical components, common defects, and maintenance priorities.",
    thumbnail: "https://images.unsplash.com/photo-1771904866994-231c8ef22bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3MjQ1MzIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15:28",
    publishDate: "7 February 2026",
    category: "Commissioning & Reliability",
    views: "5.3K",
    videoUrl: "#",
    topics: ["commissioning-reliability"]
  },
  {
    id: "5",
    title: "Understanding DNO connection offers: Reading between the lines",
    description: "Line-by-line explanation of a typical DNO connection offer document, covering technical requirements, cost breakdowns, and programme implications. Essential viewing for project managers.",
    thumbnail: "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI1NTAyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "14:52",
    publishDate: "31 January 2026",
    category: "Grid & Connections",
    views: "9.1K",
    videoUrl: "#",
    topics: ["grid-connections"]
  },
  {
    id: "6",
    title: "Sponsored: Advanced load management solutions for depot electrification",
    description: "TechGrid Solutions demonstrates their cloud-based load management platform designed specifically for large-scale depot electrification projects. Learn how intelligent charging algorithms can reduce peak demand by up to 40% while maintaining operational requirements.",
    thumbnail: "https://images.unsplash.com/photo-1676539432110-78f836970ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGVsZWN0cmljfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8:42",
    publishDate: "28 January 2026",
    category: "EV Charging Infrastructure",
    views: "4.2K",
    videoUrl: "#",
    isSponsored: true,
    sponsor: "TechGrid Solutions",
    sponsorLogo: "https://images.unsplash.com/photo-1676539432110-78f836970ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGVsZWN0cmljfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: ["ev-charging"]
  },
  {
    id: "7",
    title: "Load management strategies for fleet depot electrification",
    description: "Practical comparison of different load management approaches, including OCPP smart charging, physical infrastructure design, and cost-benefit analysis of each strategy.",
    thumbnail: "https://images.unsplash.com/photo-1676539432110-78f836970ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGVsZWN0cmljfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "16:23",
    publishDate: "17 January 2026",
    category: "EV Charging Infrastructure",
    views: "11.2K",
    videoUrl: "#",
    topics: ["ev-charging"]
  },
  {
    id: "8",
    title: "Protection relay settings: Avoiding nuisance trips in EV installations",
    description: "Common protection coordination issues in EV charging installations and how to resolve them. Includes case studies from recent projects and recommended settings.",
    thumbnail: "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI1NTAyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "13:47",
    publishDate: "10 January 2026",
    category: "Commissioning & Reliability",
    views: "7.4K",
    videoUrl: "#",
    topics: ["commissioning-reliability", "ev-charging"]
  },
  {
    id: "9",
    title: "HV cable termination: Best practices and common mistakes",
    description: "Demonstration of proper HV cable termination techniques, stress control application, and quality assurance procedures. Filmed on-site during a live installation.",
    thumbnail: "https://images.unsplash.com/photo-1768783034942-9e61bb966eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5mcmFzdHJ1Y3R1cmUlMjBwb3dlciUyMGdyaWR8ZW58MXx8fHwxNzcyNTUwMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "20:15",
    publishDate: "3 January 2026",
    category: "Commissioning & Reliability",
    views: "6.1K",
    videoUrl: "#",
    topics: ["commissioning-reliability"]
  },
  {
    id: "10",
    title: "Public charging network: Operations and maintenance realities",
    description: "Charge point operator discusses real-world O&M challenges, uptime strategies, and the business case for different service models. Based on 500-charger network.",
    thumbnail: "https://images.unsplash.com/photo-1676539432110-78f836970ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGVsZWN0cmljfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "17:08",
    publishDate: "27 December 2025",
    category: "EV Charging Infrastructure",
    views: "8.9K",
    videoUrl: "#",
    topics: ["ev-charging"]
  },
  {
    id: "11",
    title: "Energy storage feasibility: When does BESS make commercial sense?",
    description: "Financial analyst breaks down BESS business case fundamentals, revenue stacking opportunities, and realistic ROI expectations in today's market conditions.",
    thumbnail: "https://images.unsplash.com/photo-1766507679659-30076abc8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGJhdHRlcnklMjBzdG9yYWdlfGVufDF8fHx8MTc3MjU1MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "21:42",
    publishDate: "20 December 2025",
    category: "Storage & Resilience",
    views: "10.3K",
    videoUrl: "#",
    topics: ["storage-resilience"]
  },
  {
    id: "12",
    title: "Flexible connection agreements: Understanding curtailment requirements",
    description: "Expert explanation of flexible connection terms, curtailment mechanisms, and operational implications. Essential for developers considering flexible offers.",
    thumbnail: "https://images.unsplash.com/photo-1771904866994-231c8ef22bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3MjQ1MzIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "11:56",
    publishDate: "13 December 2025",
    category: "Grid & Connections",
    views: "5.8K",
    videoUrl: "#",
    topics: ["grid-connections"]
  },
];