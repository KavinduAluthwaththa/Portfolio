"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { GlassCard } from "@/components/primitives/GlassCard";
import { TechChipList } from "@/components/primitives/TechChip";
import { CursorSpotlight } from "@/components/primitives/CursorSpotlight";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "#site/content";

const FILTERS = ["All", "Full-Stack", "Web", "Mobile", "Design"] as const;
type Filter = (typeof FILTERS)[number];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.type === filter);
  }, [projects, filter]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Button
            key={f}
            variant={filter === f ? "brand" : "glass"}
            size="sm"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f}
          </Button>
        ))}
        <span className="ml-auto self-center text-xs font-mono text-ink-faint">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slugAsParams}`}
            className="group block h-full"
          >
            <CursorSpotlight className="h-full rounded-2xl">
              <GlassCard className="h-full overflow-hidden gradient-border-hover transition-transform duration-300 group-hover:-translate-y-1">
                {project.cover && (
                  <div className="p-3 pb-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-base/60 ring-1 ring-white/[0.08] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                      <Image
                        src={project.cover.src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        placeholder={project.cover.blurDataURL ? "blur" : undefined}
                        blurDataURL={project.cover.blurDataURL}
                      />
                    </div>
                  </div>
                )}
                <div className="p-6 pt-5 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted line-clamp-2">
                    {project.summary}
                  </p>
                  <TechChipList items={project.stack.slice(0, 5)} size="sm" />
                </div>
              </GlassCard>
            </CursorSpotlight>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <div
          className={cn(
            "rounded-2xl border border-dashed border-white/[0.10] bg-white/[0.02] py-16 text-center"
          )}
        >
          <p className="text-ink-muted">
            No projects in this category yet - check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
