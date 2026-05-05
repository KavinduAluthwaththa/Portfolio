import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      summary: s.string().max(280),
      role: s.string(),
      stack: s.array(s.string()),
      year: s.number().int(),
      type: s.enum(["Web", "Mobile", "Full-Stack", "Design"]),
      featured: s.boolean().default(false),
      cover: s.image().optional(),
      links: s
        .object({
          live: s.string().url().optional(),
          repo: s.string().url().optional(),
          demo: s.string().url().optional(),
        })
        .partial()
        .default({}),
      metrics: s
        .array(
          s.object({
            label: s.string(),
            value: s.string(),
          })
        )
        .default([]),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const writing = defineCollection({
  name: "Post",
  pattern: "writing/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      summary: s.string().max(280),
      date: s.isodate(),
      tags: s.array(s.string()).default([]),
      published: s.boolean().default(true),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { projects, writing },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
