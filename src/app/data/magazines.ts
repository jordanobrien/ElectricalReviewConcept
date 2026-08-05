export interface Magazine { id: string; title: string; coverImage: string; issueDate: string; year: number }

export const magazines: Magazine[] = [
  { id: "summer-2026", title: "Summer 2026", coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1000&fit=crop", issueDate: "July – August 2026", year: 2026 },
  { id: "spring-2026", title: "Spring 2026", coverImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=1000&fit=crop", issueDate: "May – June 2026", year: 2026 },
  { id: "ai-infrastructure-2026", title: "AI Infrastructure Special", coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=1000&fit=crop", issueDate: "March – April 2026", year: 2026 },
  { id: "power-2026", title: "Power & Resilience", coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop", issueDate: "January – February 2026", year: 2026 },
  { id: "winter-2025", title: "Winter 2025", coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop", issueDate: "November – December 2025", year: 2025 },
  { id: "sustainability-2025", title: "Sustainable Infrastructure", coverImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=1000&fit=crop", issueDate: "September – October 2025", year: 2025 },
];
