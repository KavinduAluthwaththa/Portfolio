import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { writing } from "#site/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { TechChip } from "@/components/primitives/TechChip";
import { Mdx } from "@/components/primitives/Mdx";
import { siteConfig } from "@/content/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return writing.map((p) => ({ slug: p.slugAsParams }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = writing.find((p) => p.slugAsParams === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/writing/${post.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = writing.find((p) => p.slugAsParams === slug);
  if (!post) notFound();

  return (
    <>
      <Container size="wide" className="pt-12 pb-4">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-sm font-mono text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All writing
        </Link>
      </Container>

      <Container className="pb-8">
        <article className="space-y-5">
          <EyebrowLabel>{formatDate(post.date)}</EyebrowLabel>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="text-lg text-ink-muted text-pretty">{post.summary}</p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <TechChip key={tag} label={tag} size="sm" />
              ))}
            </div>
          )}
        </article>
      </Container>

      <Section className="!pt-6">
        <Mdx code={post.body} />
      </Section>
    </>
  );
}
