import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export const useInView = <T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
}: UseInViewOptions = {}) => {
  const elementRef = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.disconnect()
          }
          return
        }

        if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { elementRef, isInView }
}

