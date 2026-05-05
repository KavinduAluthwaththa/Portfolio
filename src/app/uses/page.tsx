import type { Metadata } from "next";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { GlassCard } from "@/components/primitives/GlassCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { TechChip } from "@/components/primitives/TechChip";

export const metadata: Metadata = {
  title: "Uses",
  description: "The tools, hardware and software I rely on every day.",
};

const sections = [
  {
    title: "Editor",
    items: [
      { name: "VS Code", note: "primary editor" },
      { name: "Cursor", note: "for AI-assisted edits" },
      { name: "Geist Mono", note: "editor font" },
      { name: "GitHub Dark Default", note: "theme" },
    ],
  },
  {
    title: "Web stack",
    items: [
      { name: "Next.js", note: "App Router, server components" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Motion (Framer)" },
      { name: "Vercel", note: "hosting" },
    ],
  },
  {
    title: "Mobile & backend",
    items: [
      { name: "Flutter" },
      { name: ".NET Core" },
      { name: "Laravel" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Postman" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma" },
      { name: "Adobe Illustrator" },
      { name: "Adobe Photoshop" },
    ],
  },
  {
    title: "Hardware",
    items: [
      { name: "ASUS Laptop", note: "main dev machine" },
      { name: "External 24\" monitor" },
      { name: "Logitech mouse" },
      { name: "Mechanical keyboard" },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <Container size="wide" className="pt-12 pb-8 sm:pt-16">
        <div className="space-y-5 max-w-3xl">
          <EyebrowLabel index="01">Uses</EyebrowLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            What I use to ship.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted text-pretty">
            Inspired by{" "}
            <a
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              uses.tech
            </a>
            . A living list of the editor, hardware and software I rely on day
            to day.
          </p>
        </div>
      </Container>

      <Section containerSize="wide" className="!pt-8">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section, idx) => (
            <GlassCard
              key={section.title}
              className="p-6 sm:p-7 gradient-border"
            >
              <EyebrowLabel index={(idx + 1).toString().padStart(2, "0")}>
                {section.title}
              </EyebrowLabel>
              <ul className="mt-5 divide-y divide-white/[0.06]">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 py-2.5"
                  >
                    <span className="text-sm text-ink">{item.name}</span>
                    {item.note && (
                      <TechChip label={item.note} size="sm" className="shrink-0" />
                    )}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
