import { useEffect } from 'react'
import { trackPageView } from '../../utils/analytics'

interface RouteMetaProps {
  title: string
  description: string
  canonicalPath?: string
}

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '')

const setMeta = (name: string, content: string, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  const node = document.querySelector<HTMLMetaElement>(selector)
  if (node) {
    node.setAttribute('content', content)
  }
}

export const RouteMeta = ({ title, description, canonicalPath = '/' }: RouteMetaProps) => {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    const fallbackOrigin = typeof window === 'undefined' ? 'https://jatin-portfolio.vercel.app' : window.location.origin
    const baseUrl = trimTrailingSlash(import.meta.env.VITE_SITE_URL?.trim() || fallbackOrigin)
    const canonicalHref = `${baseUrl}${canonicalPath}`
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalHref)
    setMeta('og:url', canonicalHref, true)
    if (typeof window !== 'undefined') {
      trackPageView(`${window.location.pathname}${window.location.hash}`, title)
    }
  }, [canonicalPath, description, title])

  return null
}
