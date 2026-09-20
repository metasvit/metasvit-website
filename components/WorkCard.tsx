"use client";

import { IconArrowUpRight } from "./ui/Icons";
import type { WorkItem } from "@/lib/work";

export default function WorkCard({ item }: { item: WorkItem }) {
  function track(e: React.MouseEvent<HTMLElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
  }

  return (
    <article
      onMouseMove={track}
      className="spotlight flex h-full flex-col rounded-2xl border border-line bg-surface-100 p-6 transition-[border-color,transform,box-shadow] duration-150 ease-out hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[var(--shadow-lift)] sm:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-ink">
          {item.name}
        </h3>
        <span className="t-label-s flex-none text-ink-faint">{item.year}</span>
      </div>

      <p className="mt-3 text-[15px] font-[550] text-violet-bright">{item.summary}</p>
      <p className="mt-4 leading-relaxed text-ink-muted">{item.detail}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <span
            key={s}
            className="t-label-s rounded-md border border-line px-2 py-1 text-ink-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {item.link && (
        <div className="mt-auto pt-6">
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="t-label-s inline-flex items-center gap-1.5 text-violet-bright transition-colors hover:text-signal"
          >
            {item.link.label}
            <IconArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </article>
  );
}
