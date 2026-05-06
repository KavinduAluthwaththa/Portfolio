import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, Gamepad2, Tv } from "lucide-react";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { CursorSpotlight } from "@/components/primitives/CursorSpotlight";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/sections/Timeline";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { siteConfig } from "@/content/data/site";
import { experience } from "@/content/data/experience";
import { education } from "@/content/data/education";
import profile from "../../../public/images/profile/kavindu.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kavindu Aluthwaththa - full-stack developer building production web and mobile apps from Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <Container size="wide" className="pt-12 pb-8 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <EyebrowLabel index="01">About</EyebrowLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              I design and build the full thing - from the data model to the
              last pixel.
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-ink-muted text-pretty max-w-2xl">
              <p>
                I&apos;m {siteConfig.shortName}, a full-stack developer based in{" "}
                {siteConfig.location}. I started writing code in school as a
                way to make my graphic-design ideas actually do things, and
                somewhere along the way the engineering side of the craft took
                over.
              </p>
              <p>
                Today I work across the stack - shipping production features at
                Viosu in TypeScript, leading my university capstone in .NET and
                Flutter, and taking on the occasional freelance brief for
                clients who need both design and engineering done well. I care
                about clarity, performance and the boring details that
                separate &quot;works on my machine&quot; from &quot;works for
                real users&quot;.
              </p>
              <p>
                When I&apos;m not at a keyboard, I&apos;m usually sketching new
                project ideas, exploring new frameworks for the joy of it, or
                catching up on the latest anime season.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge variant="success">
                <span className="h-1.5 w-1.5 rounded-full bg-status-available animate-pulse" />
                {siteConfig.availability}
              </Badge>
              <Badge variant="outline">{siteConfig.location}</Badge>
              <Badge variant="brand">{siteConfig.role}</Badge>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28 self-start">
            <GlassCard className="overflow-hidden gradient-border">
              <div className="relative aspect-[4/5]">
                <Image
                  src={profile}
                  alt={siteConfig.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>

      <Section id="skills" containerSize="wide">
        <div className="space-y-3 mb-10">
          <EyebrowLabel index="02">Skills</EyebrowLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            A polyglot stack, grouped by where it lives.
          </h2>
          <p className="text-ink-muted max-w-2xl text-pretty">
            A polyglot toolkit, grouped by where it lives in the stack.
          </p>
        </div>
        <SkillsGrid />
      </Section>

      <Section id="experience" containerSize="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28 self-start">
            <EyebrowLabel index="03">Experience</EyebrowLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Where I&apos;ve worked, and what I shipped there.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Timeline
              entries={experience.map((e) => ({
                title: e.role,
                subtitle: e.company,
                href: e.url,
                start: e.start,
                end: e.end,
                badge: e.type,
                highlights: e.highlights,
                stack: e.stack,
              }))}
            />
          </div>
        </div>
      </Section>

      <Section id="education" containerSize="wide">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28 self-start">
            <EyebrowLabel index="04">Education</EyebrowLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Formal training and where I picked up the rest.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Timeline
              entries={education.map((e) => ({
                title: e.qualification,
                subtitle: e.institution,
                start: e.start,
                end: e.end,
                description: e.description,
                stack: e.focus,
              }))}
            />
          </div>
        </div>
      </Section>

      <Section containerSize="wide">
        <div className="space-y-3 mb-10">
          <EyebrowLabel index="05">Beyond code</EyebrowLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            What keeps me sharp away from the editor.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <CursorSpotlight className="rounded-2xl">
            <GlassCard className="p-6 gradient-border interactive-card">
              <Tv className="h-5 w-5 text-brand" />
              <h3 className="mt-3 font-semibold text-ink">Anime &amp; manga</h3>
              <p className="mt-1 text-sm text-ink-muted">
                A long-term fan - currently working through the back catalogue I
                missed during exam season.
              </p>
            </GlassCard>
          </CursorSpotlight>
          <CursorSpotlight className="rounded-2xl">
            <GlassCard className="p-6 gradient-border interactive-card">
              <Gamepad2 className="h-5 w-5 text-brand" />
              <h3 className="mt-3 font-semibold text-ink">Gaming</h3>
              <p className="mt-1 text-sm text-ink-muted">
                Story-driven RPGs over esports - good UI, pacing and writing teach
                you a lot about product.
              </p>
            </GlassCard>
          </CursorSpotlight>
          <CursorSpotlight className="rounded-2xl">
            <GlassCard className="p-6 gradient-border interactive-card">
              <Coffee className="h-5 w-5 text-brand" />
              <h3 className="mt-3 font-semibold text-ink">Coffee &amp; design</h3>
              <p className="mt-1 text-sm text-ink-muted">
                Side experiments in branding, type and the slow craft of getting
                a logo to feel exactly right.
              </p>
            </GlassCard>
          </CursorSpotlight>
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-mono text-brand hover:text-ink transition-colors"
          >
            See what I&apos;ve been building <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
