import { projects } from "#site/content";

import { BentoHero } from "@/components/sections/BentoHero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  const featured = sorted.filter((p) => p.featured).slice(0, 3);
  const others = sorted.filter((p) => !featured.includes(p)).slice(0, 3);
  const showcase = [...featured.slice(0, 3), ...others].slice(0, 3);

  return (
    <>
      <BentoHero featured={featured} />
      <FeaturedProjects projects={showcase} />
      <TechMarquee />
      <ContactCTA />
    </>
  );
}
