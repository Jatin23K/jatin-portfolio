import { siteContent } from '../../data/site'
import { Badge } from '../ui/Badge'
import { SectionHeader } from '../ui/SectionHeader'

export const VisionSection = () => {
  const { theme, ecosystem } = siteContent.vision

  return (
    <section className="section-shell section-anchor">
      <div className="container-shell">
        <SectionHeader
          label={siteContent.sections.vision.label}
          title={siteContent.sections.vision.title}
          subtitle={siteContent.sections.vision.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-shell">
            <h3 className="font-heading text-2xl font-bold tracking-[-0.02em] text-text">{theme.title}</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-dim">
              {theme.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="card-shell border-t-2 border-t-accent4">
            {ecosystem.badge ? <Badge tone="accent4">{ecosystem.badge}</Badge> : null}
            <h3 className="mt-4 font-heading text-2xl font-bold tracking-[-0.02em] text-text">
              {ecosystem.title}
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-dim">
              {ecosystem.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {ecosystem.status ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {ecosystem.status.map((status) => (
                  <Badge key={status} tone="surface" className="border border-border text-text">
                    {status}
                  </Badge>
                ))}
              </div>
            ) : null}

            {ecosystem.note ? (
              <p className="mt-4 border-l-2 border-accent4 pl-3 text-xs text-text-dim">{ecosystem.note}</p>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  )
}

