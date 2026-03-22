import { ref, onMounted } from 'vue'
import { supabase } from '@/config/supabase'

// Generate a unique fingerprint for the visitor
const getVisitorFingerprint = (): string => {
  const stored = localStorage.getItem('visitor_id')
  if (stored) return stored

  // Create a simple fingerprint based on browser info
  const fingerprint = `${navigator.userAgent}_${screen.width}x${screen.height}_${navigator.language}_${new Date().getTimezoneOffset()}`
  const hash = btoa(fingerprint).substring(0, 32)

  localStorage.setItem('visitor_id', hash)
  return hash
}

export const useVisitorCounter = () => {
  const visitorCount = ref<number>(0)
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  const trackVisitor = async () => {
    try {
      const fingerprint = getVisitorFingerprint()
      const today = new Date().toISOString().split('T')[0]

      // Check if visitor already exists today
      const { data: existing } = await supabase
        .from('page_views')
        .select('id')
        .eq('visitor_id', fingerprint)
        .eq('visit_date', today)
        .single()

      // If not exists, insert new record
      if (!existing) {
        await supabase.from('page_views').insert({
          visitor_id: fingerprint,
          visit_date: today,
          user_agent: navigator.userAgent,
        })
      }

      // Get total unique visitors
      await getVisitorCount()
    } catch (err) {
      console.error('Error tracking visitor:', err)
      error.value = 'Failed to track visitor'
    }
  }

  const getVisitorCount = async () => {
    try {
      isLoading.value = true

      // Count distinct visitor_ids
      const { count, error: countError } = await supabase
        .from('page_views')
        .select('visitor_id', { count: 'exact', head: false })

      if (countError) throw countError

      // Get unique count by fetching all and counting unique visitor_ids
      const { data } = await supabase.from('page_views').select('visitor_id')

      if (data) {
        const uniqueVisitors = new Set(data.map(item => item.visitor_id))
        visitorCount.value = uniqueVisitors.size
      }
    } catch (err) {
      console.error('Error getting visitor count:', err)
      error.value = 'Failed to get visitor count'
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    trackVisitor()
  })

  return {
    visitorCount,
    isLoading,
    error,
  }
}
