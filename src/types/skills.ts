export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
