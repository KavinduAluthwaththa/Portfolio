import Link from "next/link";
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
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data/site";

type LogoIcon = IconType | LucideIcon;

const STACK_LOGOS: { icon: LogoIcon; label: string }[] = [
  { icon: SiPython, label: "Python" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiDotnet, label: ".NET" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiSupabase, label: "Supabase" },
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

export function BentoHero() {
  return (
    <section className="relative">
      <Container size="wide" className="pt-12 pb-16 sm:pt-16">
        <div className="grid gap-4 lg:grid-cols-12 lg:auto-rows-min">
          <GlassCard className="lg:col-span-8 lg:row-span-2 p-8 sm:p-10 gradient-border flex flex-col">
            <div className="flex flex-col gap-6 flex-1">
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
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
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

          <GlassCard className="lg:col-span-4 p-6 sm:p-8 flex flex-col gap-5 gradient-border">
            <div className="space-y-2">
              <EyebrowLabel index="03">Stack</EyebrowLabel>
              <p className="text-sm text-ink-muted">
                The tools I reach for first when shipping product.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-2">
              {STACK_LOGOS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  title={label}
                  className="group/logo aspect-square grid place-items-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-ink-muted hover:text-ink hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors"
                >
                  <Icon className="h-5 w-5" aria-label={label} />
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
        </div>
      </Container>
    </section>
  );
}
