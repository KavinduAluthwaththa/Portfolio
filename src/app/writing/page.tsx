import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { writing } from "#site/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { TechChip } from "@/components/primitives/TechChip";
import { CursorSpotlight } from "@/components/primitives/CursorSpotlight";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on engineering, design and the craft of shipping software.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function WritingPage() {
  const posts = writing
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <Container size="wide" className="pt-12 pb-8 sm:pt-16">
        <div className="space-y-5 max-w-3xl">
          <EyebrowLabel index="01">Writing</EyebrowLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Notes on engineering, design &amp; shipping.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted text-pretty">
            Short essays on the craft - what I&apos;ve learned, where I&apos;ve
            gotten things wrong, and how I think about building software.
          </p>
        </div>
      </Container>

      <Section containerSize="wide" className="!pt-8">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slugAsParams}`} className="group block">
                <CursorSpotlight className="rounded-2xl">
                  <GlassCard className="p-6 sm:p-8 gradient-border-hover transition-transform group-hover:-translate-y-0.5">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                      <span>{formatDate(post.date)}</span>
                      <ArrowUpRight className="h-4 w-4 group-hover:text-brand transition-colors" />
                    </div>
                    <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-ink group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-ink-muted text-pretty max-w-3xl">
                      {post.summary}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <TechChip key={tag} label={tag} size="sm" />
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </CursorSpotlight>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
