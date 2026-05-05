import type { Metadata } from "next";
import { projects } from "#site/content";

import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from full-stack and mobile projects shipped by Kavindu Aluthwaththa.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
      <Container size="wide" className="pt-12 pb-8 sm:pt-16">
        <div className="space-y-5 max-w-3xl">
          <EyebrowLabel index="01">Selected work</EyebrowLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Things I&apos;ve designed, engineered and shipped.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted text-pretty">
            A mix of capstone-grade systems, freelance briefs and university
            tooling. Each one is a real product with real users, with a short
            case study covering the problem, my role and the trade-offs.
          </p>
        </div>
      </Container>

      <Section containerSize="wide" className="!pt-8">
        <ProjectGrid projects={sorted} />
      </Section>

      <ContactCTA />
    </>
  );
}
