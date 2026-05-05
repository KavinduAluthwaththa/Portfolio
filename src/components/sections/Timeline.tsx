import { ArrowUpRight } from "lucide-react";

import { GlassCard } from "@/components/primitives/GlassCard";
import { TechChipList } from "@/components/primitives/TechChip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  subtitle: string;
  href?: string;
  start: string;
  end: string;
  badge?: string;
  description?: string;
  highlights?: string[];
  stack?: string[];
}

export function Timeline({
  entries,
  className,
}: {
  entries: TimelineEntry[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "relative space-y-6 before:absolute before:left-[calc(0.5rem-1px)] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-white/[0.12] before:via-white/[0.08] before:to-transparent",
        className
      )}
    >
      {entries.map((entry, idx) => (
        <li key={idx} className="relative pl-8">
          <span
            className="absolute left-0 top-3 grid h-4 w-4 place-items-center rounded-full border border-brand/40 bg-base"
            aria-hidden
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          <GlassCard className="p-6 gradient-border">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                {entry.start} - {entry.end}
              </div>
              {entry.badge && <Badge variant="outline">{entry.badge}</Badge>}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink">
              {entry.title}{" "}
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand hover:text-ink transition-colors"
                >
                  @ {entry.subtitle}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-brand">@ {entry.subtitle}</span>
              )}
            </h3>
            {entry.description && (
              <p className="mt-2 text-sm text-ink-muted">{entry.description}</p>
            )}
            {entry.highlights && entry.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {entry.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            {entry.stack && entry.stack.length > 0 && (
              <TechChipList items={entry.stack} size="sm" className="mt-4" />
            )}
          </GlassCard>
        </li>
      ))}
    </ol>
  );
}
