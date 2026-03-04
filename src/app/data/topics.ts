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
  'grid-connections': {
    id: 'grid-connections',
    title: 'Grid & Connections',
    description: 'News, analysis, and resources on capacity, connection, uptime, and power quality',
    icon: 'grid',
    heroImage: 'https://images.unsplash.com/photo-1768783034942-9e61bb966eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcG93ZXIlMjBncmlkJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcyNTQzODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startHereTitle: 'The UK path to grid infrastructure modernisation',
    startHereDescription: 'Connecting new capacity to meet 2030 targets requires unprecedented grid expansion. This guide covers the key considerations:',
    startHerePoints: [
      'Understanding grid connection queues and acceleration schemes',
      'DNO vs TSO requirements for large-scale projects',
      'Power quality standards and compliance testing',
      'Strategic investment zones and planning priorities'
    ],
    keyTopics: ['Grid Capacity', 'Connection Standards', 'Network Planning', 'Power Quality']
  },
  'ev-charging': {
    id: 'ev-charging',
    title: 'EV Charging Infrastructure',
    description: 'News, analysis, and resources on depot charging, uptime, and O&M',
    icon: 'charging',
    heroImage: 'https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb258ZW58MXx8fHwxNzcyNDk5MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startHereTitle: 'The UK path to EV charging uptime',
    startHereDescription: 'Building an EV charging network that meets 99% uptime targets by mid-2025 isn\'t straightforward. This guide begins with the key elements:',
    startHerePoints: [
      'Choosing depot vs. public charging approaches',
      'What "uptime" really means and how it\'s incentivised',
      'Solving supply chain and O&M challenges',
      'Regulatory and grid realities: what you need to know'
    ],
    keyTopics: ['Depot Charging', 'Uptime & Performance', 'O&M', 'Grid Realities']
  },
  'storage-resilience': {
    id: 'storage-resilience',
    title: 'Storage & Resilience',
    description: 'News, analysis, and resources on on-site storage, re-charge, and peaking power',
    icon: 'storage',
    heroImage: 'https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmF0dGVyeSUyMHN0b3JhZ2UlMjBzeXN0ZW18ZW58MXx8fHwxNzcyNTQzODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startHereTitle: 'Energy storage deployment for industrial resilience',
    startHereDescription: 'Deploying battery energy storage systems for operational continuity and peak demand management. This guide covers:',
    startHerePoints: [
      'Sizing systems for peak shaving vs backup power',
      'Battery technology selection and lifecycle costs',
      'Integration with existing electrical infrastructure',
      'Revenue stacking opportunities and business cases'
    ],
    keyTopics: ['Battery Storage', 'Peak Shaving', 'Grid Services', 'Resilience Planning']
  },
  'commissioning-reliability': {
    id: 'commissioning-reliability',
    title: 'Commissioning & Reliability',
    description: 'News, analysis, and resources on testing, standards, maintenance, and operations',
    icon: 'reliability',
    heroImage: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZyUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc3MjU0Mzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startHereTitle: 'Commissioning best practices for critical infrastructure',
    startHereDescription: 'Ensuring electrical infrastructure reliability through comprehensive testing and commissioning protocols. This guide explores:',
    startHerePoints: [
      'Testing standards and compliance requirements',
      'Commissioning procedures for complex systems',
      'Preventative maintenance strategies and schedules',
      'Operational performance monitoring and optimisation'
    ],
    keyTopics: ['Testing Standards', 'Commissioning', 'Maintenance', 'Operations']
  }
};
