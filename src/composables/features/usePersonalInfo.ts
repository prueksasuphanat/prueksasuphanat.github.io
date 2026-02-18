import { computed } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import { experienceData } from '@/data/education'
import { useAppStore } from '@/stores'
import axios from 'axios'

dayjs.extend(buddhistEra)

const GIT_HUB_URL = 'https://api.github.com'

export const getGithubUserData = async () => {
  try {
    const res = await axios.get(`${GIT_HUB_URL}/users/prueksasuphanat`)

    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const getRepoData = async () => {
  try {
    const res = await axios.get(`${GIT_HUB_URL}/repos/prueksasuphanat/prueksasuphanat.github.io`)

    return res.data
  } catch (error) {
    console.error(error)
  }
}

export function usePersonalInfo() {
  const appStore = useAppStore()

  const currentAge = computed(() => {
    const isThaiLocale = appStore.locale === 'th'
    const birthDate = '1997-05-09'
    const today = dayjs()

    const year = today.diff(birthDate, 'year')
    const birthMonth = 12 - dayjs(birthDate).month() + 1

    const formattedDate = isThaiLocale
      ? dayjs(birthDate).locale('th').format('DD/MM/BBBB')
      : dayjs(birthDate).format('DD/MM/YYYY')

    return {
      year,
      month: birthMonth,
      dateOfBirth: formattedDate,
    }
  })

  const currentExperience = computed(() => {
    let totalMonths = 0

    experienceData.forEach(exp => {
      const start = dayjs(exp.period.start)
      const end = dayjs(exp.period.end)

      const months = end.diff(start, 'month') + 1
      totalMonths += months
    })

    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    return {
      year: years,
      month: months,
      totalMonths,
    }
  })

  return {
    currentAge,
    currentExperience,
  }
}
