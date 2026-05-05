import type { MetadataRoute } from "next";

import { projects, writing } from "#site/content";
import { siteConfig } from "@/content/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/writing", "/uses", "/contact"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slugAsParams}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = writing
    .filter((p) => p.published)
    .map((p) => ({
      url: `${siteConfig.url}/writing/${p.slugAsParams}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
