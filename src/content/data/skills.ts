export interface Skill {
  name: string;
  level?: "primary" | "secondary";
}

export interface SkillGroup {
  title: string;
  description?: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Day-to-day languages I reach for first.",
    skills: [
      { name: "TypeScript", level: "primary" },
      { name: "JavaScript", level: "primary" },
      { name: "Dart", level: "primary" },
      { name: "C#", level: "primary" },
      { name: "Python" },
      { name: "Java" },
      { name: "PHP" },
      { name: "C++" },
      { name: "C" },
    ],
  },
  {
    title: "Frontend",
    description: "Building polished, accessible interfaces.",
    skills: [
      { name: "Next.js", level: "primary" },
      { name: "React", level: "primary" },
      { name: "Flutter", level: "primary" },
      { name: "Tailwind CSS", level: "primary" },
      { name: "Framer Motion" },
      { name: "shadcn/ui" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "From REST to typed RPC and serverless functions.",
    skills: [
      { name: ".NET Core", level: "primary" },
      { name: "Laravel", level: "primary" },
      { name: "Node.js", level: "primary" },
      { name: "Express" },
      { name: "REST" },
      { name: "Server Actions" },
    ],
  },
  {
    title: "Data & Infra",
    description: "Storage, hosting and the glue in between.",
    skills: [
      { name: "PostgreSQL", level: "primary" },
      { name: "MySQL", level: "primary" },
      { name: "Firebase" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "Vercel" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Snowflake" },
    ],
  },
  {
    title: "Design & Tooling",
    description: "How I think visually and ship reliably.",
    skills: [
      { name: "Figma", level: "primary" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];

export const flatSkills = skillGroups.flatMap((g) =>
  g.skills.map((s) => s.name)
);
