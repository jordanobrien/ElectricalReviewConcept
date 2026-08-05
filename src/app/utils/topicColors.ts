export const TOPIC_COLORS = {
  "cooling-thermal-management": { bg: "bg-[#7661b5]", text: "text-[#7661b5]", cssVar: "#7661b5" },
  "design-construction-operations": { bg: "bg-[#382673]", text: "text-[#382673]", cssVar: "#382673" },
  "digital-infrastructure-security": { bg: "bg-[#315a72]", text: "text-[#315a72]", cssVar: "#315a72" },
  "markets-policy-people": { bg: "bg-[#a14f7f]", text: "text-[#a14f7f]", cssVar: "#a14f7f" },
  "power-energy": { bg: "bg-[#5b4797]", text: "text-[#5b4797]", cssVar: "#5b4797" },
  "sustainability-resources": { bg: "bg-[#4f8075]", text: "text-[#4f8075]", cssVar: "#4f8075" },
} as const;

export const TOPIC_TITLES: Record<keyof typeof TOPIC_COLORS, string> = {
  "cooling-thermal-management": "Cooling & Thermal Management",
  "design-construction-operations": "Design, Construction & Operations",
  "digital-infrastructure-security": "Digital Infrastructure & Security",
  "markets-policy-people": "Markets, Policy & People",
  "power-energy": "Power & Energy",
  "sustainability-resources": "Sustainability & Resources",
};

const CATEGORY_TO_TOPIC: Record<string, keyof typeof TOPIC_COLORS> = {
  "Cooling": "cooling-thermal-management",
  "Cooling & Thermal Management": "cooling-thermal-management",
  "Data Centre Design & Operations": "design-construction-operations",
  "Design, Construction & Operations": "design-construction-operations",
  "Design & Operations": "design-construction-operations",
  "Operations": "design-construction-operations",
  "Edge Computing": "digital-infrastructure-security",
  "Artificial Intelligence": "digital-infrastructure-security",
  "Cloud & Hybrid Computing": "digital-infrastructure-security",
  "Digital Infrastructure & Connectivity": "digital-infrastructure-security",
  "Digital Infrastructure & Security": "digital-infrastructure-security",
  "Industry": "markets-policy-people",
  "Markets, Policy & People": "markets-policy-people",
  "Power": "power-energy",
  "Power & Energy": "power-energy",
  "Data Analytics & Security": "digital-infrastructure-security",
  "Security & Resilience": "digital-infrastructure-security",
  "Green IT & Sustainability": "sustainability-resources",
  "Sustainability & Resources": "sustainability-resources",
};

export function getPrimaryTopicId(topics?: string[], category?: string): keyof typeof TOPIC_COLORS {
  const explicitTopic = topics?.[0] as keyof typeof TOPIC_COLORS | undefined;
  return explicitTopic && explicitTopic in TOPIC_COLORS
    ? explicitTopic
    : CATEGORY_TO_TOPIC[category || ""] || "design-construction-operations";
}

export function getPrimaryTopicTitle(topics?: string[], category?: string): string {
  return TOPIC_TITLES[getPrimaryTopicId(topics, category)];
}

export function getTopicColor(topicId: string): typeof TOPIC_COLORS[keyof typeof TOPIC_COLORS] {
  return TOPIC_COLORS[topicId as keyof typeof TOPIC_COLORS] || TOPIC_COLORS["design-construction-operations"];
}

export function getTopicColorByCategory(category: string): typeof TOPIC_COLORS[keyof typeof TOPIC_COLORS] {
  return TOPIC_COLORS[getPrimaryTopicId(undefined, category)];
}
