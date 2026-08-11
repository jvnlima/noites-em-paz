type IconProps = { className?: string };

const base = "h-6 w-6 stroke-current";

export function IconMoonSplit({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18" strokeLinecap="round" />
      <path d="M12 3a9 9 0 0 1 0 18" strokeLinecap="round" strokeDasharray="2.5 3" />
      <path d="M12 1.5v21" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.4l3.4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconScale({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M12 4v16M6 20h12" strokeLinecap="round" />
      <path d="M4 8h16M4 8l-2.5 5.5a3.2 3.2 0 0 0 5 0L4 8Zm16 0-2.5 5.5a3.2 3.2 0 0 0 5 0L20 8Z" strokeLinejoin="round" />
      <circle cx="12" cy="4" r="1.4" />
    </svg>
  );
}

export function IconBottle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M10 3h4v2.2c0 .8.3 1.5.9 2.1l.6.6c.9.9 1.5 2.2 1.5 3.5V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7.6c0-1.3.6-2.6 1.5-3.5l.6-.6c.6-.6.9-1.3.9-2.1V3Z" strokeLinejoin="round" />
      <path d="M7.4 12h9.2M7.4 15.5h9.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconDoc({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
      <path d="M14 3v4h4M8.5 12h7M8.5 15.5h7M8.5 19h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M12 2.8 20 6v6.2c0 4.4-3.2 7.7-8 9.1-4.8-1.4-8-4.7-8-9.1V6l8-3.2Z" strokeLinejoin="round" />
      <path d="m8.6 12.2 2.3 2.3 4.5-4.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5 stroke-current" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className={className} aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4 stroke-current" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} className={className} aria-hidden="true">
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBed({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M3 18V7M3 18h18M21 18v-5.5a2.5 2.5 0 0 0-2.5-2.5H10v5.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.6" cy="12.2" r="1.8" />
    </svg>
  );
}

export function IconSeal({ className = "h-14 w-14 stroke-current" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeWidth={1.4} className={className} aria-hidden="true">
      <path
        d="M32 4.5 39 9l8.4-.6 2.4 8L56 21.6l-2.8 8 2.8 8-6.2 5.2-2.4 8L39 49.8 32 54.4l-7-4.6-8.4.6-2.4-8L8 37.6l2.8-8L8 21.6l6.2-5.2 2.4-8L25 9l7-4.5Z"
        strokeLinejoin="round"
      />
      <path d="m24 32 5.6 5.6L41 26" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} />
    </svg>
  );
}
