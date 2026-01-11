export interface EducationItem {
  id: number;
  title: string;
  subtitle: string;
  location?: string;
  period: {
    start: string;
    end: string;
  };
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location?: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
}

export type TimelineItem = EducationItem | ExperienceItem;
