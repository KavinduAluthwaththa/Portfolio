export interface ExperienceItem {
  role: string;
  company: string;
  url?: string;
  start: string;
  end: string;
  location?: string;
  type: "Full-time" | "Contract" | "Freelance" | "Part-time" | "Internship";
  highlights: string[];
  stack?: string[];
}

export const experience: ExperienceItem[] = [
  
  {
    role: "Freelance Graphic Designer",
    company: "Fiverr",
    url: "https://www.fiverr.com/",
    start: "Aug 2021",
    end: "Present",
    type: "Freelance",
    highlights: [
      "200+ delivered briefs across logo, brand identity, web/mobile UI and marketing collateral.",
      "Maintained a consistent 5-star rating and long-term client partnerships.",
      "Translated client vision into clean, focused visuals with simplicity and intent.",
    ],
    stack: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    role: "Full-Stack Developer",
    company: "Viosu",
    url: "https://viosu.com/",
    start: "Oct 2024",
    end: "Present",
    type: "Part-time",
    highlights: [
      "Shipping production features across the web stack: typed APIs, React UI, integrated auth.",
      "Tightened performance budgets on critical pages, improving Lighthouse scores into the 90s.",
      "Pairing with design and product to scope, estimate and deliver iterative releases.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    role: "Graphic Designer",
    company: "Ravuma",
    url: "https://ravuma.com/",
    start: "Aug 2025",
    end: "Nov 2025",
    type: "Contract",
    highlights: [
      "Produced visual assets for digital campaigns, branding and social marketing.",
      "Collaborated with marketing and product on cohesive cross-channel communication.",
      "Experimented with motion graphics and UI mockups to lift engagement.",
    ],
    stack: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    role: "Intern Software Engineer",
    company: "Innobot Health Pvt Ltd",
    url: "https://innobothealth.com/",
    start: "Nov 2025",
    end: "Present",
    type: "Internship",
    highlights: [
      "Designed and worked on a scalable Python-based in-house framework to support core backend operations.",
      "Built and maintained RESTful APIs enabling efficient frontend-backend communication.",
      "Optimized PostgreSQL queries and implemented caching mechanisms to significantly improve system performance.",
      "Refactored legacy code and streamlined workflows, enhancing system reliability and maintainability.",
      "Automated manual business processes through custom backend solutions, reducing operational overhead.",
      "Developed and managed ETL processes for integrating data from multiple sources into centralized systems.",
      "Applied data modeling and validation techniques to ensure data integrity, consistency, and security."
    ],
    stack: [
      "Python",
      "Django",
      "PostgreSQL",
      "REST API Development",
      "System Design",
      "Datadog",
      "ETL Processes",
    ]
  }
];
