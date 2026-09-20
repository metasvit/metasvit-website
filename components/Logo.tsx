/** The Metasvit mark: two linked loops crossed at the centre. Inherits currentColor. */
export function LogoMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="18" cy="24" r="6" stroke="currentColor" strokeWidth="3.25" />
      <circle cx="30" cy="24" r="6" stroke="currentColor" strokeWidth="3.25" />
      <path
        d="M21 21L27 27M27 21L21 27"
        stroke="currentColor"
        strokeWidth="3.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  showText = true,
  size = 30,
}: {
  className?: string;
  showText?: boolean;
  size?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} className="text-violet-bright" />
      {showText && (
        <span className="text-[17px] font-semibold tracking-[-0.03em] text-ink">
          Metasvit
        </span>
      )}
    </span>
  );
}
