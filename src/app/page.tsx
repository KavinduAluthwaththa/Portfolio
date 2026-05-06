import { projects } from "#site/content";

import { BentoHero } from "@/components/sections/BentoHero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  const featured = sorted.filter((p) => p.featured);
  const seen = new Set(featured.map((p) => p.slug));
  const finalShowcase = [
    ...featured,
    ...sorted.filter((p) => !seen.has(p.slug)),
  ].slice(0, 3);

  return (
    <>
      <BentoHero />
      <FeaturedProjects projects={finalShowcase} />
      <TechMarquee />
      <ContactCTA />
    </>
  );
}
