import type { EducationItem, ExperienceItem } from '@/types'

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: 'HighSchool',
    subtitle: 'PhadungPanya',
    location: 'TakWithThai',
    period: {
      start: '2008',
      end: '2014',
    },
  },
  {
    id: 2,
    title: 'BEngFull',
    subtitle: 'IndustrialEng',
    location: 'University',
    period: {
      start: '2015',
      end: '2019',
    },
  },
  {
    id: 3,
    title: 'MEngIEFull',
    subtitle: 'IndustrialEng',
    location: 'University',
    period: {
      start: '2019',
      end: '2023',
    },
  },
  {
    id: 1,
    title: 'OnlinCourse',
    subtitle: '',
    location: '',
    period: {
      start: '2023-11-01',
      end: '2024-02-28',
    },
  },
]

export const experienceData: ExperienceItem[] = [
  {
    id: 2,
    title: 'IT-CAT Co.,Ltd',
    company: 'ChiangMai',
    position: 'Frontend Developer',
    period: {
      start: '2024-04-01',
      end: '2024-07-31',
    },
  },
  {
    id: 3,
    title: 'Wolves Corporation',
    company: 'ChiangMai',
    position: 'Frontend Dev, Backend Dev',
    period: {
      start: '2024-08-01',
      end: '2024-12-31',
    },
  },
  {
    id: 3,
    title: 'Lucas Strategy Co.,Ltd.',
    company: 'ChiangMai',
    position: 'Full-Stack Developer',
    period: {
      start: '2025-03-01',
      end: '2026-03-01',
    },
  },
]
