import { GlassCard } from "@/components/primitives/GlassCard";
import { TechChip } from "@/components/primitives/TechChip";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { skillGroups } from "@/content/data/skills";
import { cn } from "@/lib/utils";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group, idx) => (
        <GlassCard
          key={group.title}
          className={cn(
            "p-6 sm:p-7 gradient-border",
            idx === 0 && "md:col-span-2"
          )}
        >
          <EyebrowLabel index={`${(idx + 1).toString().padStart(2, "0")}`}>
            {group.title}
          </EyebrowLabel>
          {group.description && (
            <p className="mt-3 text-sm text-ink-muted max-w-md">
              {group.description}
            </p>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <TechChip key={skill.name} label={skill.name} />
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
