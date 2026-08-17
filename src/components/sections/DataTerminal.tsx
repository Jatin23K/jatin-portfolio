import { useInView } from '../../hooks/useInView'
import { skills } from '../../data/skills'
import {
  getStatusDistribution,
  getCompletionRate,
  getTotalVisibleProjects,
  getInProgressCount,
} from '../../utils/projectAnalytics'

/* ─── pure data ─────────────────────────────────────────────── */
const statusDist = getStatusDistribution()
const completion = getCompletionRate()
const totalProjects = getTotalVisibleProjects()
const inProgressCount = getInProgressCount()

const STATUS_BARS: { label: string; value: number; max: number; color: string }[] = [
  { label: 'In Progress', value: statusDist['in-progress'], max: totalProjects, color: 'var(--accent3)' },
  { label: 'Field Testing', value: statusDist['field-testing'], max: totalProjects, color: 'var(--accent)' },
  { label: 'Planned', value: statusDist.planned, max: totalProjects, color: 'var(--accent2)' },
  { label: 'Shipped', value: statusDist.shipped, max: totalProjects, color: '#98d982' },
  { label: 'Vision', value: statusDist.vision, max: totalProjects, color: 'var(--accent4)' },
]


const KPI_STATS = [
  { label: 'Total Projects', value: String(totalProjects), sub: 'in portfolio' },
  { label: 'Active Builds', value: String(inProgressCount), sub: 'in progress' },
  { label: 'Published', value: `${completion.published}/${completion.total}`, sub: 'case studies live' },
]

/* ─── Radar chart (SVG, no library) ──────────────────────────── */
/* ─── Bar chart row ───────────────────────────────────────────── */
const BarRow = ({
  label,
  value,
  max,
  color,
  animate,
}: {
  label: string
  value: number
  max: number
  color: string
  animate: boolean
}) => {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="w-36 shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-text-dim">
        {label}
      </span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface2">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${pct}%` : '0%', background: color }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-mono text-[10px] text-text-dim">{value}</span>
    </div>
  )
}

/* ─── Main section ────────────────────────────────────────────── */
export const DataTerminalSection = () => {
  const { elementRef: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.12 })

  return (
    <section
      ref={sectionRef}
      id="data-terminal"
      className="section-shell section-anchor"
      aria-label="Live data analytics terminal"
    >
      <div className="container-shell">
        {/* Header */}
        <header className={`section-reveal mb-10 ${isInView ? 'is-visible' : ''}`}>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            [Live Analytics / Data Terminal]
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.02em] text-text sm:text-4xl">
            The Numbers Behind the Work
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-dim">
            Generated client-side from live project data. No external API, no charting library.
            Pure computation.
          </p>
        </header>

        {/* KPI stats row */}
        <div
          className={`section-reveal mb-8 grid grid-cols-3 gap-3 ${isInView ? 'is-visible' : ''}`}
          style={{ transitionDelay: '60ms' }}
        >
          {KPI_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-shell border-t-2 border-t-accent2 p-4 text-center"
            >
              <p className="font-heading text-3xl font-extrabold text-text">{stat.value}</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-dim">
                {stat.label}
              </p>
              <p className="mt-0.5 font-mono text-[9px] text-muted">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts grid — 2 columns */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Status distribution bar chart */}
          <div
            className={`section-reveal card-shell ${isInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            <p className="mono-label mb-4">Project Pipeline</p>
            <div className="space-y-3">
              {STATUS_BARS.map((bar) => (
                <BarRow key={bar.label} {...bar} animate={isInView} />
              ))}
            </div>
          </div>

          {/* Skill evidence summary */}
          <div
            className={`section-reveal card-shell ${isInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '180ms' }}
          >
            <p className="mono-label mb-4">Skill Evidence</p>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="rounded-md border border-border bg-surface2/50 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-heading text-sm font-bold text-text">{skill.name}</p>
                    <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-accent2">
                      {skill.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-dim">{skill.proof}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
