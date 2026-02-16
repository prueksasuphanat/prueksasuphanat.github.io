import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E Commerce 🏠",
    description:
      "A furniture sales website utilizing HTML and CSS for practice purposes. This website features responsive web design but does not include sales function",
    technologies: ["Html", "Javascript", "Bootstrap",'practices online course'],
    image: "/images/demo2.png",
    githubUrl:
      "https://github.com/prueksasuphanat/prueksasuphanat.github.io/tree/main/mid-term-project",
    demoUrl: "/mid-term-project/index.html",
    year: "2023",
  },
  {
    id: 2,
    title: "Online course 🎓",
    description:
      "A online course website that allows user to learn about programming. This project is intended to practice web development using React and utilizing APIs.",
    technologies: ["React", "Typescript",'practices online course'],
    image: "/images/demo1.png",
    githubUrl: "https://github.com/prueksasuphanat/Final-Project",
    demoUrl: "",
    year: "2023",
  },
  {
    id: 3,
    title: "Personal Blog 👦🏻",
    description:
      "This is a blog website from Devint Course, which does not include backend development. The website consists of various frontend sections such as Home, Create Blog, Profile. Developing this website allows learning about adjusting web page layouts into Dark mode.",
    technologies: ["Html", "Javascript",'practices online course'],
    image: "/images/demo3.png",
    githubUrl: "",
    demoUrl: "/prueksasuphanat.github.io/Blog-Platform/home.html",
    year: "2023",
  },
  {
    id: 4,
    title: "My Cash Book 📊",
    description: "ContentDemo4",
    technologies: ["Vue", "Javascript",'practices online course'],
    image: "/images/demo4.png",
    githubUrl: "",
    demoUrl: "/prueksasuphanat.github.io/Blog-Platform/home.html",
    year: "2025",
  },
];
