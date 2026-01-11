/**
 * Smoothly scrolls to a section by its ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
