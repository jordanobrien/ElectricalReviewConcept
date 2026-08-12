import type { EventSponsor } from "../data/events";

interface EventSponsorLogoProps {
  sponsor: EventSponsor;
  compact?: boolean;
}

export function EventSponsorLogo({ sponsor, compact = false }: EventSponsorLogoProps) {
  if (sponsor.logoUrl) {
    return <img src={sponsor.logoUrl} alt={sponsor.name} className={`${compact ? "h-7 max-w-[132px]" : "h-10 max-w-[170px]"} w-auto object-contain object-left`} />;
  }

  return (
    <span className="inline-flex min-w-0 items-center gap-3" role="img" aria-label={`${sponsor.name} logo`}>
      <span className={`${compact ? "h-8 w-8 text-[9px]" : "h-10 w-10 text-[10px]"} grid flex-shrink-0 place-items-center bg-[var(--navy-deep)] font-bold text-white`}>{sponsor.mark}</span>
      <strong className={`${compact ? "text-[12px]" : "text-[14px]"} truncate text-[var(--navy-deep)]`}>{sponsor.name}</strong>
    </span>
  );
}
