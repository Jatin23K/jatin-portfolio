import { siteContent } from '../../data/site'
import { Button } from '../ui/Button'

export const Hero = () => {
  const delays = [0, 120, 240, 360]

  return (
    <section id="top" className="section-anchor flex min-h-screen items-center pt-24" aria-labelledby="hero-title">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <span
            className="animate-fade-up inline-flex items-center rounded-badge bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-black"
            style={{ animationDelay: `${delays[0]}ms` }}
          >
            {siteContent.hero.badge}
          </span>

          <h1
            id="hero-title"
            className="animate-fade-up mt-6 font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.02em] text-text sm:text-6xl lg:text-[5rem]"
            style={{ animationDelay: `${delays[1]}ms` }}
          >
            {siteContent.hero.headlineTop}
            <br />
            <span className="text-accent">{siteContent.hero.headlineAccent}</span>
            <br />
            <span className="text-accent2">& {siteContent.hero.headlineAccent2}</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-text-dim"
            style={{ animationDelay: `${delays[2]}ms` }}
          >
            {siteContent.hero.subline}
          </p>

          <ul
            className="animate-fade-up mt-8 grid gap-3 sm:grid-cols-3"
            style={{ animationDelay: `${delays[3]}ms` }}
            aria-label="Portfolio summary stats"
          >
            {siteContent.hero.stats.map((stat) => (
              <li key={stat.label} className="card-shell border-t-2 border-t-accent2 p-4">
                <p className="font-heading text-2xl font-extrabold text-text">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.11em] text-text-dim">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/projects">{siteContent.hero.primaryCta}</Button>
            <Button
              variant="outlined"
              href={siteContent.brand.resumeUrl}
              external={siteContent.brand.resumeUrl.startsWith('http')}
            >
              {siteContent.hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="card-shell hidden rotate-[-2deg] border border-accent2/40 bg-surface/70 lg:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent2">
            {siteContent.hero.sqlSnippetTitle}
          </p>
          <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6 text-text">
            {siteContent.hero.sqlSnippet.map((line, index) => (
              <div key={line}>
                <span className="mr-3 text-muted">{String(index + 1).padStart(2, '0')}</span>
                {line}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  )
}

