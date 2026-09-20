"use client";

import Link from "next/link";
import { serviceIcons, type ServiceIconKey } from "./ui/Icons";

export default function ServiceCard({
  icon,
  title,
  description,
  tags,
  index,
  href,
}: {
  icon: ServiceIconKey;
  title: string;
  description: string;
  tags: string[];
  index: number;
  href?: string;
}) {
  const Icon = serviceIcons[icon];

  function track(e: React.MouseEvent<HTMLElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
  }

  const body = (
    <>
      <span className="pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-[10px] bg-[var(--violet-tint)] text-violet-bright">
          <Icon className="h-[22px] w-[22px]" />
        </span>
        <span className="t-label-s text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((t) => (
          <span
            key={t}
            className="t-label-s rounded-md border border-line px-2 py-1 text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  const cls =
    "spotlight group relative flex h-full flex-col rounded-2xl border border-line bg-surface-100 p-6 transition-[border-color,transform,box-shadow] duration-150 ease-out hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[var(--shadow-lift)]";

  if (href) {
    return (
      <Link href={href} className={cls} onMouseMove={track}>
        {body}
      </Link>
    );
  }
  return (
    <div className={cls} onMouseMove={track}>
      {body}
    </div>
  );
}
