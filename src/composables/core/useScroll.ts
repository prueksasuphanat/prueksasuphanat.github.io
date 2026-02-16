import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToTop as scrollToTopUtil } from '@/utils/scroll'
import { SCROLL_THRESHOLD } from '@/constants'

export const useScroll = (threshold: number = SCROLL_THRESHOLD) => {
  const showScroll = ref(false)

  const handleScroll = () => {
    showScroll.value = window.scrollY >= threshold
  }

  const scrollToTop = () => {
    scrollToTopUtil()
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    showScroll,
    scrollToTop,
  }
}
