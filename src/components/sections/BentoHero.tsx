import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Download,
  GraduationCap,
  HeartPulse,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { CursorSpotlight } from "@/components/primitives/CursorSpotlight";
import { TechChipList } from "@/components/primitives/TechChip";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data/site";
import { stats } from "@/content/data/stats";
import type { Project } from "#site/content";

const STACK_GROUPS: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { label: "Backend", items: [".NET", "Node.js", "Laravel"] },
  { label: "Mobile", items: ["Flutter", "Dart"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "MySQL"] },
];

interface ActiveEngagement {
  icon: LucideIcon;
  title: string;
  context: string;
  tag: string;
  live?: boolean;
}

const ACTIVE_NOW: ActiveEngagement[] = [
  {
    icon: HeartPulse,
    title: "Software engineering intern",
    context: "Innobot Health",
    tag: "Intern",
    live: true,
  },
  {
    icon: Briefcase,
    title: "Full-stack developer",
    context: "Viosu",
    tag: "PT",
    live: true,
  },
  {
    icon: GraduationCap,
    title: "BSc in Computing",
    context: "Sabaragamuwa University",
    tag: "Y4",
    live: true,
  },
];

const EXPLORING = ["System design", "Data engineering", "AWS"];

interface BentoHeroProps {
  featured: Project[];
}

export function BentoHero({ featured }: BentoHeroProps) {
  const top = featured[0];
  const second = featured[1];

  return (
    <section className="relative">
      <Container size="wide" className="pt-12 pb-16 sm:pt-16">
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto] auto-rows-min">
          <GlassCard className="lg:col-span-8 p-8 sm:p-10 lg:row-span-1 gradient-border">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="success">
                  <span className="h-1.5 w-1.5 rounded-full bg-status-available animate-pulse" />
                  {siteConfig.availability}
                </Badge>
                <Badge variant="outline">
                  <MapPin className="h-3 w-3" />
                  {siteConfig.location}
                </Badge>
              </div>
              <EyebrowLabel index="01">Introduction</EyebrowLabel>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                Hi, I&apos;m {siteConfig.shortName} -{" "}
                <span className="gradient-text">a full-stack developer</span>{" "}
                building production web &amp; mobile apps.
              </h1>
              <p className="text-base sm:text-lg text-ink-muted max-w-2xl text-pretty">
                {siteConfig.tagline} Currently engineering at Viosu, leading my
                university capstone, and freelancing on the side.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild variant="brand" size="lg">
                  <Link href="/projects">
                    See my work <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={siteConfig.social.cv} download>
                    <Download className="h-4 w-4" /> Resume
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/contact">
                    Get in touch <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-4 p-6 sm:p-8 flex flex-col gap-5 gradient-border">
            <EyebrowLabel index="02">Currently</EyebrowLabel>
            <ul className="space-y-3">
              {ACTIVE_NOW.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5"
                >
                  <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.06] bg-white/[0.04] text-brand">
                    <item.icon className="h-4 w-4" />
                    {item.live && (
                      <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-available opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-status-available" />
                      </span>
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-ink truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-ink-muted truncate">
                      {item.context}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                  <span className="h-px flex-1 bg-white/[0.06]" aria-hidden />
                  Exploring
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {EXPLORING.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-brand" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <p className="text-xs font-mono text-ink-faint flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-available opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-available" />
                  </span>
                  Open to FT &amp; freelance
                </p>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-4 p-6 sm:p-8 gradient-border">
            <EyebrowLabel index="03">By the numbers</EyebrowLabel>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 flex items-baseline gap-1 text-2xl font-semibold text-ink">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-brand text-lg">{stat.suffix}</span>
                    )}
                  </dd>
                  {stat.hint && (
                    <p className="text-[11px] text-ink-faint mt-0.5">
                      {stat.hint}
                    </p>
                  )}
                </div>
              ))}
            </dl>
          </GlassCard>

          <GlassCard className="lg:col-span-4 p-6 sm:p-8 flex flex-col gap-5 gradient-border">
            <div className="space-y-2">
              <EyebrowLabel index="04">Stack</EyebrowLabel>
              <p className="text-sm text-ink-muted">
                The tools I reach for first when shipping product.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {STACK_GROUPS.map((group) => (
                <div key={group.label} className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                    <span className="h-px flex-1 bg-white/[0.06]" aria-hidden />
                    {group.label}
                  </div>
                  <TechChipList items={group.items} size="sm" />
                </div>
              ))}
            </div>
            <Link
              href="/about#skills"
              className="inline-flex items-center gap-1 self-start text-xs font-mono text-brand hover:text-ink transition-colors"
            >
              See full stack <ArrowRight className="h-3 w-3" />
            </Link>
          </GlassCard>

          {top && (
            <Link
              href={`/projects/${top.slugAsParams}`}
              className="lg:col-span-4 group block"
            >
              <CursorSpotlight className="h-full rounded-2xl">
              <GlassCard className="h-full overflow-hidden gradient-border-hover transition-transform duration-300 group-hover:-translate-y-1">
                {top.cover && (
                  <div className="p-3 pb-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-base/60 ring-1 ring-white/[0.08] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                      <Image
                        src={top.cover.src}
                        alt={top.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        placeholder={top.cover.blurDataURL ? "blur" : undefined}
                        blurDataURL={top.cover.blurDataURL}
                      />
                    </div>
                  </div>
                )}
                <div className="p-6 pt-5 space-y-3">
                  <EyebrowLabel index="05">Featured project</EyebrowLabel>
                  <h3 className="text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                    {top.title}
                  </h3>
                  <p className="text-sm text-ink-muted line-clamp-2">
                    {top.summary}
                  </p>
                  <TechChipList items={top.stack.slice(0, 4)} size="sm" />
                </div>
              </GlassCard>
              </CursorSpotlight>
            </Link>
          )}

          {second && (
            <Link
              href={`/projects/${second.slugAsParams}`}
              className="lg:col-span-4 group block"
            >
              <CursorSpotlight className="h-full rounded-2xl">
              <GlassCard className="h-full overflow-hidden gradient-border-hover transition-transform duration-300 group-hover:-translate-y-1">
                {second.cover && (
                  <div className="p-3 pb-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-base/60 ring-1 ring-white/[0.08] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                      <Image
                        src={second.cover.src}
                        alt={second.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        placeholder={second.cover.blurDataURL ? "blur" : undefined}
                        blurDataURL={second.cover.blurDataURL}
                      />
                    </div>
                  </div>
                )}
                <div className="p-6 pt-5 space-y-3">
                  <EyebrowLabel index="06">Featured project</EyebrowLabel>
                  <h3 className="text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                    {second.title}
                  </h3>
                  <p className="text-sm text-ink-muted line-clamp-2">
                    {second.summary}
                  </p>
                  <TechChipList items={second.stack.slice(0, 4)} size="sm" />
                </div>
              </GlassCard>
              </CursorSpotlight>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
