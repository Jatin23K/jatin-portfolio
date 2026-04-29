interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (command: string, event: string, params?: AnalyticsPayload) => void
  }
}

export const trackEvent = (event: string, params: AnalyticsPayload = {}) => {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
    return
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params })
    return
  }

  if (import.meta.env.DEV) {
    // Keep local observability without requiring analytics provider setup.
    console.info('[analytics:event]', event, params)
  }
}

export const trackPageView = (path: string, title: string) => {
  trackEvent('page_view', { page_path: path, page_title: title })
}
