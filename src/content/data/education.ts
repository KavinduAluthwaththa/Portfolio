export interface EducationItem {
  qualification: string;
  institution: string;
  start: string;
  end: string;
  description: string;
  focus?: string[];
}

export const education: EducationItem[] = [
  {
    qualification: "BSc (Hons) in Computing & Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    start: "2023",
    end: "Present",
    description:
      "In-depth coursework across software engineering, distributed systems, databases and human-computer interaction. Currently leading my capstone project: a smart agriculture platform spanning a .NET backend and a Flutter mobile client.",
    focus: [
      "Software Engineering",
      "Distributed Systems",
      "Databases",
      "Web & Mobile Development",
      "UI/UX Design",
      "Software Architecture",
      "Testing & QA",
      "SDLC & Project Management",
    ],
  },
  {
    qualification: "Advanced Level Certificate (A/L) - Physical Science",
    institution: "Vidyartha College, Kandy",
    start: "2018",
    end: "2021",
    description:
      "Completed A/Levels in the Physical Science stream with combined maths, physics and ICT. This is where I first taught myself web development on the side and started taking small freelance design briefs.",
    focus: ["Combined Mathematics", "Physics", "ICT"],
  },
];
