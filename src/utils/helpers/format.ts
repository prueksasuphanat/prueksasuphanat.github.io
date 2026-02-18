import dayjs from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import 'dayjs/locale/th'
import { useAppStore } from '@/stores'

dayjs.extend(buddhistEra)

// export const formatDate = (date: Date | string): string => {
//   const d = typeof date === 'string' ? new Date(date) : date
//   return d.toLocaleDateString()
// }

export const formatYear = (year: number, locale: string): string => {
  if (locale === 'th') {
    return (year + 543).toString()
  }
  return year.toString()
}

export const formatDate = (date: string | Date): string => {
  const appStore = useAppStore()
  const isThaiLocale = appStore.locale === 'th'

  const dateStr = typeof date === 'string' ? date : date.toISOString()
  const isYearOnly = /^\d{4}$/.test(dateStr.trim())

  const dayjsDate = dayjs(date)

  if (isYearOnly) {
    return isThaiLocale ? dayjsDate.locale('th').format('BBBB') : dayjsDate.format('YYYY')
  } else {
    return isThaiLocale
      ? dayjsDate.locale('th').format('DD/MM/BBBB')
      : dayjsDate.format('DD/MM/YYYY')
  }
}
