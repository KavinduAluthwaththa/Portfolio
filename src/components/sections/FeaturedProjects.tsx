import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { TechChipList } from "@/components/primitives/TechChip";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { CursorSpotlight } from "@/components/primitives/CursorSpotlight";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/chrome/Reveal";
import type { Project } from "#site/content";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <Section containerSize="wide">
      <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
        <div className="space-y-3">
          <EyebrowLabel index="07">Selected work</EyebrowLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Recent projects, fully shipped.
          </h2>
          <p className="text-ink-muted max-w-xl text-pretty">
            A small selection of products I&apos;ve designed, engineered and
            deployed - each one a real problem with real users.
          </p>
        </div>
        <Button asChild variant="glass">
          <Link href="/projects">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.05}>
            <Link
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
