/**
 * Line icons: 24px box, 1.5px stroke, currentColor — they inherit the tile's
 * colour. No emoji: it renders differently per OS and is read aloud as a word.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconAgent = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M10 10.5h4M10 13.5h2.5" />
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.5 2.5M16 16l2.5 2.5M18.5 5.5L16 8M8 16l-2.5 2.5" />
  </Svg>
);

export const IconChain = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.5 20.5 7 12 11.5 3.5 7 12 2.5Z" />
    <path d="M3.5 12 12 16.5 20.5 12" />
    <path d="M3.5 17 12 21.5 20.5 17" />
  </Svg>
);

export const IconContract = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="m10.5 12-2 2 2 2M13.5 12l2 2-2 2" />
  </Svg>
);

export const IconEnterprise = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.5 19.5 6v6c0 4.2-3 7.7-7.5 9.5C7.5 19.7 4.5 16.2 4.5 12V6L12 2.5Z" />
    <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
  </Svg>
);

export const IconNft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4L12 2.8Z" />
    <path d="M8.8 15.2V9.6l6.4 5.6V9.6" />
  </Svg>
);

export const IconDefi = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 9.5H10a1.8 1.8 0 0 0 0 3.6h4a1.8 1.8 0 0 1 0 3.6H8.5" />
    <path d="M12 7v1.8M12 15.2V17" />
  </Svg>
);

export const IconGame = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7.5 7h9a4.5 4.5 0 0 1 4.4 5.4l-.8 4A3 3 0 0 1 15 17.5l-1-1.5h-4l-1 1.5a3 3 0 0 1-5.1-1.1l-.8-4A4.5 4.5 0 0 1 7.5 7Z" />
    <path d="M8 10.5v2.2M6.9 11.6h2.2M15.2 11h.01M17.2 12.8h.01" />
  </Svg>
);

export const IconArrow = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const IconArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 16 16 8M9.5 8H16v6.5" />
  </Svg>
);

export const serviceIcons = {
  agent: IconAgent,
  chain: IconChain,
  contract: IconContract,
  enterprise: IconEnterprise,
  nft: IconNft,
  defi: IconDefi,
  game: IconGame,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
