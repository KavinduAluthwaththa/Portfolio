import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/content/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about full-time roles, freelance work, or just to say hi.",
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@KavinduAluthwaththa",
    href: siteConfig.social.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "/in/cloud-walk3r",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <Container size="wide" className="pt-12 pb-8 sm:pt-16">
        <div className="space-y-5 max-w-3xl">
          <EyebrowLabel index="01">Contact</EyebrowLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Let&apos;s build something - or just say hi.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted text-pretty">
            Whether you&apos;re hiring, scoping a freelance brief, or want to
            chat about a project, my inbox is open. I read every message and
            usually reply within a couple of days.
          </p>
        </div>
      </Container>

      <Section containerSize="wide" className="!pt-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <GlassCard className="lg:col-span-7 p-8 sm:p-10 gradient-border">
            <EyebrowLabel index="02">Send a message</EyebrowLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Tell me what you&apos;re working on.
            </h2>
            <p className="mt-2 text-sm text-ink-muted max-w-md">
              The more context you can share, the better I can respond.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </GlassCard>

          <div className="lg:col-span-5 space-y-4">
            <GlassCard className="p-6 sm:p-8 gradient-border">
              <EyebrowLabel index="03">Other channels</EyebrowLabel>
              <ul className="mt-5 space-y-4">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 interactive-card"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-brand">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-ink-faint">
                            {c.label}
                          </div>
                          <div className="text-sm text-ink truncate">
                            {c.value}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-ink-faint group-hover:text-brand transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8 gradient-border space-y-4">
              <EyebrowLabel index="04">Status</EyebrowLabel>
              <Badge variant="success">
                <span className="h-1.5 w-1.5 rounded-full bg-status-available animate-pulse" />
                {siteConfig.availability}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <MapPin className="h-4 w-4 text-ink-faint" />
                {siteConfig.location} - working in your timezone is fine.
              </div>
              <p className="text-sm text-ink-muted">
                Open to full-time engineering, freelance product work, and the
                occasional design collab.
              </p>
            </GlassCard>
          </div>
        </div>
      </Section>
    </>
  );
}
