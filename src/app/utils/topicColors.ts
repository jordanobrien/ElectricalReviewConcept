// Topic color mapping for consistent styling across the website
// These colors match the CSS variables defined in theme.css

export const TOPIC_COLORS = {
  'grid-connections': {
    bg: 'bg-[#1e3a8a]', // Deep blue
    text: 'text-[#1e3a8a]',
    cssVar: 'var(--topic-grid)',
  },
  'ev-charging': {
    bg: 'bg-[#10b981]', // Green
    text: 'text-[#10b981]',
    cssVar: 'var(--topic-ev)',
  },
  'storage-resilience': {
    bg: 'bg-[#14b8a6]', // Teal
    text: 'text-[#14b8a6]',
    cssVar: 'var(--topic-storage)',
  },
  'commissioning-reliability': {
    bg: 'bg-[#3b82f6]', // Bright blue
    text: 'text-[#3b82f6]',
    cssVar: 'var(--topic-commissioning)',
  },
} as const;

// Helper function to get topic color by topic ID
export function getTopicColor(topicId: string): typeof TOPIC_COLORS[keyof typeof TOPIC_COLORS] {
  return TOPIC_COLORS[topicId as keyof typeof TOPIC_COLORS] || TOPIC_COLORS['grid-connections'];
}

// Helper function to get topic color by category name (for backwards compatibility)
export function getTopicColorByCategory(category: string): typeof TOPIC_COLORS[keyof typeof TOPIC_COLORS] {
  const categoryMap: Record<string, keyof typeof TOPIC_COLORS> = {
    'Grid & Connections': 'grid-connections',
    'Grid and connections': 'grid-connections',
    'Grids and connections': 'grid-connections',
    'EV Charging Infrastructure': 'ev-charging',
    'EV Charging': 'ev-charging',
    'Storage & Resilience': 'storage-resilience',
    'Commissioning & Reliability': 'commissioning-reliability',
  };

  const topicId = categoryMap[category] || 'grid-connections';
  return TOPIC_COLORS[topicId];
}
