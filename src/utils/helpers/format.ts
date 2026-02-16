export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString()
}

export const formatYear = (year: number, locale: string): string => {
  if (locale === 'th') {
    return (year + 543).toString()
  }
  return year.toString()
}
