import type { EducationItem, ExperienceItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "HighSchool",
    subtitle: "PhadungPanya",
    location: "Tak, Thailand",
    period: {
      start: "y2008",
      end: "y2014",
    },
  },
  {
    id: 2,
    title: "BEngFull",
    subtitle: "IndustrialEng",
    location: "ChiangMai, University",
    period: {
      start: "y2015",
      end: "y2019",
    },
  },
  {
    id: 3,
    title: "MEngIEFull",
    subtitle: "IndustrialEng",
    location: "ChiangMai, University",
    period: {
      start: "y2019",
      end: "y2023",
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Road to Frontend Developer Bootcamp #2",
    company: "BorntoDev",
    position: "Certificate",
    period: {
      start: "Nov, y2023",
      end: "Feb, y2024",
    },
  },
  {
    id: 2,
    title: "IT-CAT Co.,Ltd",
    company: "ChiangMai",
    position: "Frontend Dev",
    period: {
      start: "Apr, y2024",
      end: "Jul, y2024",
    },
  },
  {
    id: 3,
    title: "Wolves Corporation",
    company: "ChiangMai",
    position: "Frontend Dev (1 month), Backend Dev",
    period: {
      start: "Aug, y2024",
      end: "Dec, y2024",
    },
  },
];
