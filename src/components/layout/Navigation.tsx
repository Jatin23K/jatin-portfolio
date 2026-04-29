import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../../data/site'
import { trackEvent } from '../../utils/analytics'
import { Button } from '../ui/Button'

const normalizeHashHref = (href: string): string => href.replace('/#', '#')

export const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = useMemo(() => siteContent.navigation, [])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === normalizeHashHref(href)
    }

    if (href === '/projects') {
      return location.pathname.startsWith('/projects')
    }

    return location.pathname === href
  }

  const navLinkClass = (href: string): string => {
    const base =
      'text-xs tracking-wide text-text-dim transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2'
    return isActive(href)
      ? `${base} text-accent2 underline decoration-accent2 decoration-2 underline-offset-8`
      : base
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'border-b border-border/80 bg-bg/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link
          to="/"
          className="font-mono text-lg tracking-[0.18em] text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2"
          aria-label="Go to homepage"
        >
          {siteContent.brand.monogram}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={navLinkClass(item.href)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="outlined"
            size="sm"
            href={siteContent.brand.resumeUrl}
            external={siteContent.brand.resumeUrl.startsWith('http')}
            onClick={() => trackEvent('resume_click', { source: 'nav_desktop' })}
          >
            {siteContent.brand.resumeLabel}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-border px-3 py-2 text-xs font-mono uppercase tracking-[0.1em] text-text md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-border bg-bg/95 px-6 pb-5 pt-2 md:hidden`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className={navLinkClass(item.href)} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Button
            variant="outlined"
            size="sm"
            href={siteContent.brand.resumeUrl}
            external={siteContent.brand.resumeUrl.startsWith('http')}
            onClick={() => {
              trackEvent('resume_click', { source: 'nav_mobile' })
              setIsMenuOpen(false)
            }}
            className="mt-1 w-fit"
          >
            {siteContent.brand.resumeLabel}
          </Button>
        </div>
      </div>
    </header>
  )
}

