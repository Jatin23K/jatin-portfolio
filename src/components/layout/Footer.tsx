import { Link } from 'react-router-dom'
import { siteContent } from '../../data/site'

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg/95">
      <div className="container-shell py-8">
        <div className="flex flex-col gap-4 text-sm text-text-dim md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-mono text-base tracking-[0.14em] text-accent">
              {siteContent.brand.monogram}
            </Link>
            <span>{siteContent.brand.role}</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.1em]">{siteContent.footer.copy}</span>
        </div>
        <p className="mt-4 text-xs text-text-dim">{siteContent.footer.legal}</p>
      </div>
    </footer>
  )
}

