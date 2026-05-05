import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data/site";

export function ContactCTA() {
  return (
    <Section>
      <GlassCard className="relative overflow-hidden gradient-border">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 p-10 sm:p-14 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-4">
            <EyebrowLabel index="08">What&apos;s next</EyebrowLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Have a project in mind, or a role to discuss?
            </h2>
            <p className="text-ink-muted text-pretty max-w-lg">
              I&apos;m open to full-time engineering roles, freelance product
              work, and the occasional collab. Drop a line - I read every
              message and reply within a couple of days.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild variant="brand" size="lg">
              <Link href="/contact">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
            </Button>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
