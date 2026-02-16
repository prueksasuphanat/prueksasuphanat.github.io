export interface PersonalInfo {
  name: {
    first: string
    last: string
    nickname: string
  }
  age: number
  dateOfBirth: string
  location: string
  image: string
  experience: {
    months: number
    years: number
  }
  projectsCompleted: number
  education: {
    level: string
    degree: string
  }
}
