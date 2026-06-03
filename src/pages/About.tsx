import { siteContent } from '../data/site'
import { Badge } from '../components/ui/Badge'
import { RouteMeta } from '../components/seo/RouteMeta'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Ship or It Did Not Happen',
    body: 'A model that stays in a notebook is not a data science output. I build for deployment — API-served, monitored, and attached to a business metric.',
    color: 'var(--accent)',
  },
  {
    number: '02',
    title: 'Outcomes Over Accuracy',
    body: '94% test accuracy that does not move a business KPI is a failed project. I frame every model around a measurable outcome first, then work back to the technical approach.',
    color: 'var(--accent2)',
  },
  {
    number: '03',
    title: 'Transparent by Design',
    body: 'Applied AI systems should show their data lineage, confidence levels, and failure modes. Not just predictions — explainable predictions.',
    color: 'var(--accent4)',
  },
]

const LEARNING_STACK = [
  { label: 'MLOps + Model Monitoring', status: 'Active' },
  { label: 'Model Deployment at Scale', status: 'Active' },
  { label: 'Statistical Inference (Bayesian)', status: 'Active' },
  { label: 'LLM Fine-Tuning + RLHF', status: 'Queued' },
  { label: 'dbt + Data Modeling', status: 'Queued' },
  { label: 'Causal Inference', status: 'Queued' },
]

const About = () => {
  return (
    <main className="container-shell section-shell section-anchor pt-32">
      <RouteMeta
        title="About — Jatin Kumar"
        description="Background, operating approach, and long-term product vision for transparent AI systems."
        canonicalPath="/about"
      />
      <Badge tone="accent2">{siteContent.about.label}</Badge>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl">
        {siteContent.about.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base text-text-dim">{siteContent.about.subtitle}</p>

      {/* Bio + Vision */}
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

      {/* How I Work */}
      <section className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">[How I Work]</p>
        <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.02em] text-text sm:text-3xl">
          Three Operating Principles
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <article
              key={p.number}
              className="card-shell border-t-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent2"
              style={{ borderTopColor: p.color }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: p.color }}>
                {p.number}
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold tracking-[-0.02em] text-text">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Learning Stack */}
      <section className="mt-12">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">[Learning Stack]</p>
        <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.02em] text-text sm:text-3xl">
          What I'm Building Towards
        </h2>
        <p className="mt-2 text-sm text-text-dim">
          Honest in-progress learning. These skills are actively being added to the stack.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_STACK.map((item) => (
            <div
              key={item.label}
              className="card-shell flex items-center justify-between gap-3"
            >
              <span className="text-sm text-text-dim">{item.label}</span>
              <Badge tone={item.status === 'Active' ? 'accent' : 'muted'}>{item.status}</Badge>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
