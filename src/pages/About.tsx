import { siteContent } from '../data/site'
import { Badge } from '../components/ui/Badge'
import { RouteMeta } from '../components/seo/RouteMeta'

const About = () => {
  return (
    <main className="container-shell section-shell section-anchor pt-32">
      <RouteMeta
        title="About - Jatin Kumar"
        description="Background, operating approach, and long-term product vision for transparent AI systems."
        canonicalPath="/about"
      />
      <Badge tone="accent2">{siteContent.about.label}</Badge>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl">
        {siteContent.about.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base text-text-dim">{siteContent.about.subtitle}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <article className="card-shell space-y-4">
          {siteContent.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-text-dim">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="card-shell border-t-2 border-t-accent4">
          <p className="mono-label">Vision Track</p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-[-0.02em] text-text">
            {siteContent.vision.ecosystem.title}
          </h2>
          <p className="mt-3 text-sm text-text-dim">{siteContent.vision.ecosystem.paragraphs[0]}</p>
          {siteContent.vision.ecosystem.note ? (
            <p className="mt-4 border-l-2 border-accent4 pl-3 text-xs text-text-dim">
              {siteContent.vision.ecosystem.note}
            </p>
          ) : null}
        </div>
      </div>
    </main>
  )
}

export default About

