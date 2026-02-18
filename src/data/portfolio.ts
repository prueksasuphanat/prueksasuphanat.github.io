import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'E Commerce 🏠',
    description:
      'A furniture sales website utilizing HTML and CSS for practice purposes. This website features responsive web design but does not include sales function',
    technologies: ['Frontend', 'Html', 'Javascript', 'Bootstrap'],
    category: 'practice',
    image: '/images/demo2.png',
    githubUrl:
      'https://github.com/prueksasuphanat/prueksasuphanat.github.io/tree/main/mid-term-project',
    demoUrl: '/mid-term-project/index.html',
    year: '2023',
    isComplete: true,
  },
  {
    id: 2,
    title: 'Online course 🎓',
    description:
      'A online course website that allows user to learn about programming. This project is intended to practice web development using React and utilizing APIs.',
    technologies: ['Frontend', 'React', 'Typescript'],
    category: 'practice',
    image: '/images/demo1.png',
    githubUrl: 'https://github.com/prueksasuphanat/final-project',
    demoUrl: '',
    year: '2023',
    isComplete: true,
  },
  {
    id: 3,
    title: 'Personal Blog 👦🏻',
    description:
      'This is a blog website from Devint Course, which does not include backend development. The website consists of various frontend sections such as Home, Create Blog, Profile. Developing this website allows learning about adjusting web page layouts into Dark mode.',
    technologies: ['Frontend', 'Html', 'Javascript'],
    category: 'practice',
    image: '/images/demo3.png',
    githubUrl: 'https://github.com/prueksasuphanat/blog-platform',
    demoUrl: 'https://prueksasuphanat.github.io/blog-platform',
    year: '2023',
    isComplete: true,
  },
  {
    id: 4,
    title: 'Pokemon TCG',
    description: '',
    technologies: ['Frontend', 'Nuxt'],
    category: 'practice',
    image: '/images/pokemon-tcg-demo-figma.png',
    githubUrl: 'https://github.com/prueksasuphanat/pokemon-tcg',
    demoUrl: 'https://prueksasuphanat.github.io/pokemon-tcg',
    year: '2025',
    isComplete: true,
  },
  {
    id: 5,
    title: 'To-do-lists',
    description: '',
    technologies: ['Frontend', 'Backend', 'Node.js', 'React'],
    category: 'practice',
    image: '/images/todolist.png',
    githubUrl: 'https://github.com/prueksasuphanat/to-do-list',
    demoUrl: 'https://prueksasuphanat.github.io/to-do-list',
    year: '2026',
    isComplete: false,
  },
]
