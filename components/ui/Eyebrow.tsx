import type { ReactNode } from "react";

/**
 * The mono section label. Copy is written in sentence case and uppercased in
 * CSS, so screen readers still read words rather than spelled-out letters.
 */
export default function Eyebrow({
  children,
  index,
  live = false,
  rule = false,
  className = "",
}: {
  children: ReactNode;
  index?: string;
  live?: boolean;
  rule?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`t-label inline-flex items-center gap-2 ${
        live ? "text-signal" : "text-violet-bright"
      } ${className}`}
    >
      {live && (
        <span className="pulse-dot h-[7px] w-[7px] flex-none rounded-full bg-signal" />
      )}
      {index && <span className="text-ink-faint">{index}</span>}
      <span>{children}</span>
      {rule && <span className="block h-px w-7 bg-current opacity-50" />}
    </span>
  );
}
