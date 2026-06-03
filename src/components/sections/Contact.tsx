import { siteContent } from '../../data/site'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

export const ContactSection = () => {
  return (
    <section id="contact" className="section-shell section-anchor pb-32">
      <div className="container-shell">
        <SectionHeader
          label={siteContent.sections.contact.label}
          title={siteContent.sections.contact.title}
          subtitle={siteContent.sections.contact.subtitle}
        />

        <div className="mt-8 flex flex-col items-center justify-center text-center card-shell p-8 sm:p-16">
          <p className="mono-label mb-4 uppercase tracking-[0.15em] text-muted">Direct Email</p>
          <a 
            href={`mailto:${siteContent.contact.email}`} 
            className="mb-12 block font-mono text-xl text-text transition-colors hover:text-accent2 sm:text-2xl lg:text-3xl break-all"
          >
            {siteContent.contact.email}
          </a>

          <div className="w-full max-w-lg border-t border-border/40 pt-10">
            <p className="mono-label mb-6 uppercase tracking-[0.15em] text-muted">Professional Networks</p>
            <div className="flex flex-wrap justify-center gap-4">
              {siteContent.contact.social.map((social) => (
                <Button key={social.label} variant="outlined" href={social.href} external>
                  {social.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
