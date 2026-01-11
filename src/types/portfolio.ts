export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  year: string;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "other";
}
