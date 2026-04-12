import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
})

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin = '0px'
  readonly scrollMargin = '0px'
  readonly thresholds = [0]
  private readonly callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }

  disconnect = vi.fn()

  observe = vi.fn((target: Element) => {
    this.callback(
      [
        {
          isIntersecting: true,
          target,
          intersectionRatio: 1,
          time: Date.now(),
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
        },
      ],
      this,
    )
  })

  takeRecords = vi.fn<() => IntersectionObserverEntry[]>(() => [])

  unobserve = vi.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

