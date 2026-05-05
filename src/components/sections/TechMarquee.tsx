"use client";

import { useReducedMotion } from "motion/react";

import { Section } from "@/components/primitives/Section";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { flatSkills } from "@/content/data/skills";
import { cn } from "@/lib/utils";

export function TechMarquee() {
  const reduce = useReducedMotion();
  const items = [...flatSkills, ...flatSkills];

  return (
    <Section className="!py-16" containerSize="wide">
      <div className="flex flex-col items-center gap-4 mb-10">
        <EyebrowLabel>Tech I work with</EyebrowLabel>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
          A polyglot stack across product, infra and design.
        </h2>
      </div>
      <div className="relative overflow-hidden mask-fade">
        <div
          className={cn(
            "flex gap-3 w-max",
            !reduce && "animate-marquee"
          )}
        >
          {items.map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-ink-muted whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            90deg,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }
      `}</style>
    </Section>
  );
}
