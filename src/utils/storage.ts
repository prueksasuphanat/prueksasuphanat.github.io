export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Failed to read from localStorage: ${key}`, error)
      return defaultValue
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.warn(`Failed to write to localStorage: ${key}`, error)
      return false
    }
  },

  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn(`Failed to remove from localStorage: ${key}`, error)
      return false
    }
  },

  clear: (): boolean => {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.warn('Failed to clear localStorage', error)
      return false
    }
  },
}
