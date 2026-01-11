import { ref, onMounted, onUnmounted } from "vue";

/**
 * Composable for scroll-related functionality
 * @param threshold - Scroll threshold in pixels (default: 200)
 * @returns Object with showScroll ref and scrollToTop function
 */
export const useScroll = (threshold: number = 200) => {
  const showScroll = ref(false);

  const handleScroll = () => {
    showScroll.value = window.scrollY >= threshold;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    showScroll,
    scrollToTop,
  };
};
