// Lightweight inline SVG icon set (stroke-based, currentColor).
import type { JSX } from "react";
import type { IconName } from "./content";

type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---- service icons ---- */
export const ServiceIcon = ({ name, className }: { name: IconName; className?: string }) => {
  const map: Record<IconName, JSX.Element> = {
    consult: (
      <>
        <path d="M4 5h16v11H8l-4 3z" />
        <path d="M8 9h8M8 12h5" />
      </>
    ),
    echo: (
      <>
        <path d="M3 12a9 9 0 0 1 9-9" />
        <path d="M7 12a5 5 0 0 1 5-5" />
        <path d="M11 12a1 1 0 0 1 1-1" />
        <path d="M4 19h16" />
      </>
    ),
    stress: (
      <>
        <path d="M3 13h4l2-6 3 11 2-7 2 2h5" />
      </>
    ),
    ecg: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M6 13h2l1.5-3 2 6 1.5-3H18" />
      </>
    ),
    device: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="3" />
        <path d="M12 8v5M9.5 10.5h5" />
      </>
    ),
    monitor: (
      <>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
        <path d="M7 12h2l1-2 2 4 1-2h3" />
      </>
    ),
    angio: (
      <>
        <path d="M6 3v6a4 4 0 0 0 4 4h1a3 3 0 0 1 3 3v5" />
        <path d="M18 3v4a3 3 0 0 1-3 3" />
        <circle cx="6" cy="3" r="0.4" />
      </>
    ),
    cardioversion: (
      <>
        <path d="M13 3 4 14h6l-1 7 9-11h-6z" />
      </>
    ),
  };
  return (
    <svg {...base} className={className}>
      {map[name]}
    </svg>
  );
};

/* ---- utility icons ---- */
export const Phone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 11l2 5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Download = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3v12M7 11l5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Chevron = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Message = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 5h16v11H9l-4 3v-3H4z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21s-7-4.6-9.3-9.2C1.2 8.6 2.6 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.4 0 4.8 3.6 3.3 6.8C19 16.4 12 21 12 21z" />
  </svg>
);
