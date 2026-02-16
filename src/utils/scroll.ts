export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId)
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })
  }
}

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
