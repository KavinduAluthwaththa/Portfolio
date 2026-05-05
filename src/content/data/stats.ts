export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  hint?: string;
}

export const stats: Stat[] = [
  { label: "Years Coding", value: "4", suffix: "+", hint: "Since 2021" },
  { label: "Projects Shipped", value: "20", suffix: "+", hint: "Personal & client" },
  { label: "Tech Mastered", value: "25", suffix: "+", hint: "Across the stack" },
  { label: "Briefs Delivered", value: "200", suffix: "+", hint: "Fiverr, 5-star average" },
];
