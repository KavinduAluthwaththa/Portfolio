export const siteConfig = {
  name: "Kavindu Aluthwaththa",
  shortName: "Kavindu",
  initials: "KA",
  url: "https://kavindualuthwaththa.com",
  email: "kavindu18602@gmail.com",
  location: "Sri Lanka",
  role: "Full-Stack Developer",
  headline:
    "Full-stack developer building production web & mobile apps with Next.js, .NET and Flutter.",
  tagline:
    "Designing and shipping fast, accessible, and reliable digital products from idea to deployment.",
  availability: "Available May 2026",
  currentlyDoing: [
    "Software engineering intern @ Innobot Health",
    "Part-time full-stack @ Viosu",
    "BSc in Computing at Sabaragamuwa University",
  ],
  social: {
    github: "https://github.com/KavinduAluthwaththa",
    linkedin: "https://www.linkedin.com/in/cloud-walk3r/",
    twitter: "",
    fiverr: "https://www.fiverr.com/",
    cv: "/cv.pdf",
  },
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    ".NET",
    "Flutter",
    "Laravel",
    "TypeScript",
    "React",
    "Sri Lanka",
    "Software Engineer",
    "Freelance",
    "Kavindu Aluthwaththa",
  ],
  ogImage: "/api/og",
} as const;

export type SiteConfig = typeof siteConfig;
