import type { Project } from './portfolio'
import type { SkillCategory } from './skills'
import type { EducationItem, ExperienceItem } from './education'

export interface NavbarProps {
  fixed?: boolean
  transparent?: boolean
}

export interface PortfolioCardProps {
  project: Project
  showDetails?: boolean
}

export interface SkillCategoryProps {
  category: SkillCategory
}

export interface TimelineItemProps {
  item: EducationItem | ExperienceItem
  index: number
}
