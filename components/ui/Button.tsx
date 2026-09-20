import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-[550] leading-none whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out border";

const variants: Record<Variant, string> = {
  primary:
    "border-transparent bg-violet text-white hover:bg-violet-bright hover:text-canvas hover:shadow-[var(--shadow-glow-violet)] active:translate-y-px active:bg-violet-deep active:text-white",
  secondary:
    "border-[var(--color-line-strong)] text-ink hover:bg-surface-raised hover:border-violet active:translate-y-px",
  ghost: "border-transparent text-ink-muted hover:text-ink hover:bg-surface-200",
};

const sizes: Record<Size, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-6 text-base",
  lg: "min-h-13 px-8 text-[17px]",
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  icon,
  onClick,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? "pointer-events-none opacity-40" : ""
  } ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {icon && <span className="inline-flex h-[18px] w-[18px]">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick} aria-disabled={disabled || undefined}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
