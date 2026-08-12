import type { BrandProfile } from "../contexts/AuthContext";

export const publicBrandProfiles: BrandProfile[] = [
  {
    id: "northstar-thermal",
    companyName: "Northstar Thermal",
    website: "https://northstarthermal.example",
    description: "Northstar Thermal designs and validates liquid-cooling infrastructure for high-density data centre deployments across Europe.",
    logo: "/brand-logos/northstar-thermal-square.png",
    contactName: "Alex Morgan",
    contactEmail: "press@northstarthermal.example",
    contactPhone: "+44 (0)20 7946 0182",
  },
  {
    id: "schneider-electric",
    companyName: "Schneider Electric",
    website: "https://www.se.com/uk",
    description: "Schneider Electric supports critical infrastructure teams with energy management, automation and resilience technology.",
    logo: "/brand-logos/schneider-electric-square.png",
    contactName: "Priya Shah",
    contactEmail: "media.uk@se.example",
    contactPhone: "+44 (0)20 4555 0174",
  },
  {
    id: "avk",
    companyName: "AVK",
    website: "https://www.avk-seg.com",
    description: "AVK provides power generation, transformer and maintenance services for critical facilities and infrastructure operators.",
    logo: "/brand-logos/avk-square.png",
    contactName: "Daniel Reed",
    contactEmail: "press@avk.example",
    contactPhone: "+44 (0)1785 812 345",
  },
];

export function getPublicBrandById(id: string) {
  return publicBrandProfiles.find((brand) => brand.id === id);
}

export function getPublicBrandByCompanyName(companyName: string) {
  return publicBrandProfiles.find(
    (brand) => brand.companyName.toLowerCase() === companyName.toLowerCase(),
  );
}
