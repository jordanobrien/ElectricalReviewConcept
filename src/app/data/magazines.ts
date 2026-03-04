export interface Magazine {
  id: string;
  title: string;
  coverImage: string;
  issueDate: string;
  year: number;
}

export const magazines: Magazine[] = [
  {
    id: "q3-2025",
    title: "Q3 2025",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=1000&fit=crop",
    issueDate: "July - September 2025",
    year: 2025,
  },
  {
    id: "q2-2025",
    title: "Q2 2025",
    coverImage: "https://images.unsplash.com/photo-1586864387634-b28d873e45ca?w=800&h=1000&fit=crop",
    issueDate: "April - June 2025",
    year: 2025,
  },
  {
    id: "q1-2025",
    title: "Q1 2025",
    coverImage: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=1000&fit=crop",
    issueDate: "January - March 2025",
    year: 2025,
  },
  {
    id: "autumn-2024",
    title: "Autumn 2024",
    coverImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=1000&fit=crop",
    issueDate: "October - December 2024",
    year: 2024,
  },
  {
    id: "summer-2024",
    title: "Summer 2024",
    coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
    issueDate: "July - September 2024",
    year: 2024,
  },
  {
    id: "spring-2024",
    title: "Spring 2024",
    coverImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1000&fit=crop",
    issueDate: "April - June 2024",
    year: 2024,
  },
  {
    id: "sep-oct-2023",
    title: "September/October 2023",
    coverImage: "https://images.unsplash.com/photo-1509390144881-c5bffcef9f8d?w=800&h=1000&fit=crop",
    issueDate: "September - October 2023",
    year: 2023,
  },
  {
    id: "may-jun-2023",
    title: "May/June 2023",
    coverImage: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=1000&fit=crop",
    issueDate: "May - June 2023",
    year: 2023,
  },
];
