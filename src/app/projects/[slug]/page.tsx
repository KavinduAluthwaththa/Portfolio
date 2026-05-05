import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";

import { projects } from "#site/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { TechChipList } from "@/components/primitives/TechChip";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Mdx } from "@/components/primitives/Mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slugAsParams }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slugAsParams === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slugAsParams}`,
      images: project.cover ? [{ url: project.cover.src }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: project.cover ? [project.cover.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slugAsParams === slug);
  if (!project) notFound();

  const sorted = [...projects].sort((a, b) => b.year - a.year);
  const idx = sorted.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <>
      <Container size="wide" className="pt-12 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-mono text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all work
        </Link>
      </Container>

      <Container size="wide" className="pb-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="brand">{project.type}</Badge>
              <Badge variant="outline">{project.year}</Badge>
              {project.featured && <Badge variant="success">Featured</Badge>}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-ink-muted max-w-3xl text-pretty">
              {project.summary}
            </p>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-3">
            <GlassCard className="p-6 gradient-border space-y-5">
              <div>
                <EyebrowLabel>Role</EyebrowLabel>
                <p className="mt-2 text-sm text-ink">{project.role}</p>
              </div>
              <div>
                <EyebrowLabel>Stack</EyebrowLabel>
                <TechChipList items={project.stack} size="sm" className="mt-2" />
              </div>
              {project.metrics.length > 0 && (
                <div>
                  <EyebrowLabel>Highlights</EyebrowLabel>
                  <dl className="mt-3 grid grid-cols-2 gap-3">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                          {m.label}
                        </dt>
                        <dd className="mt-0.5 text-base font-semibold text-ink">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              {(project.links.repo || project.links.live || project.links.demo) && (
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {project.links.live && (
                    <Button asChild variant="brand" className="w-full">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        Visit live <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button asChild variant="glass" className="w-full">
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" /> Source
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button asChild variant="ghost" className="w-full">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        Demo <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </GlassCard>
          </aside>
        </div>
      </Container>

      {project.cover && (
        <Container size="wide" className="pb-8">
          <GlassCard className="overflow-hidden gradient-border p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-base/60 ring-1 ring-white/[0.08] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.7)]">
              <Image
                src={project.cover.src}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
                placeholder={project.cover.blurDataURL ? "blur" : undefined}
                blurDataURL={project.cover.blurDataURL}
              />
            </div>
          </GlassCard>
        </Container>
      )}

      <Section containerSize="wide" className="!pt-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <Mdx code={project.body} />
          </div>
        </div>
      </Section>

      <Section containerSize="wide">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.slugAsParams}`}
              className="group block sm:col-start-1"
            >
              <GlassCard className="p-6 gradient-border-hover h-full transition-transform group-hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </div>
                <p className="mt-3 text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                  {prev.title}
                </p>
                <p className="mt-1 text-sm text-ink-muted line-clamp-1">
                  {prev.summary}
                </p>
              </GlassCard>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slugAsParams}`}
              className="group block sm:text-right"
            >
              <GlassCard className="p-6 gradient-border-hover h-full transition-transform group-hover:-translate-y-0.5">
                <div className="flex items-center justify-end gap-2 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                  Next <ArrowRight className="h-3 w-3" />
                </div>
                <p className="mt-3 text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                  {next.title}
                </p>
                <p className="mt-1 text-sm text-ink-muted line-clamp-1">
                  {next.summary}
                </p>
              </GlassCard>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </Section>
    </>
  );
}
