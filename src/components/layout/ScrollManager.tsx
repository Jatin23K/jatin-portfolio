import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollManager = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const id = location.hash.replace('#', '')
    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 60)

    return () => window.clearTimeout(timeoutId)
  }, [location.hash, location.pathname])

  return null
}

