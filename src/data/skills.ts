import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend developer",
    skills: [
      { name: "Html", level: "advanced" },
      { name: "Css", level: "advanced" },
      { name: "Javascript, Typescript", level: "advanced" },
      { name: "Vue", level: "advanced" },
      { name: "Nuxt.js", level: "intermediate" },
      { name: "React", level: "beginner" },
    ],
  },
  {
    title: "Backend developer",
    skills: [
      { name: "Php", level: "intermediate" },
      { name: "MySQL", level: "beginner" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "Bootstrap", level: "advanced" },
      { name: "Material UI", level: "intermediate" },
      { name: "Photoshop", level: "intermediate" },
      { name: "Tailwind", level: "advanced" },
    ],
  },
];
