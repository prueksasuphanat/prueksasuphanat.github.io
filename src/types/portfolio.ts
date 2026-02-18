export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: 'practice' | 'production'
  image: string
  githubUrl?: string
  demoUrl?: string
  year: string
  isComplete: boolean
}

export interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'other'
}
