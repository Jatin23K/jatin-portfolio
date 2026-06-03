import { useInView } from '../../hooks/useInView'
import { skills } from '../../data/skills'
import {
  getStatusDistribution,
  getTierDistribution,
  getCompletionRate,
  getKpiCoverage,
  getTotalVisibleProjects,
  getInProgressCount,
} from '../../utils/projectAnalytics'

/* ─── pure data ─────────────────────────────────────────────── */
const statusDist = getStatusDistribution()
const tierDist = getTierDistribution()
const completion = getCompletionRate()
const kpiCov = getKpiCoverage()
const totalProjects = getTotalVisibleProjects()
const inProgressCount = getInProgressCount()

const STATUS_BARS: { label: string; value: number; max: number; color: string }[] = [
  { label: 'In Progress', value: statusDist['in-progress'], max: totalProjects, color: 'var(--accent)' },
  { label: 'Planned', value: statusDist.planned, max: totalProjects, color: 'var(--accent2)' },
  { label: 'Shipped', value: statusDist.shipped, max: totalProjects, color: '#98d982' },
  { label: 'Vision', value: statusDist.vision, max: totalProjects, color: 'var(--accent4)' },
]

const TIER_BARS: { label: string; value: number; max: number; color: string }[] = [
  { label: 'Tier 1 — Flagship', value: tierDist[1], max: totalProjects, color: 'var(--accent)' },
  { label: 'Tier 2 — Core', value: tierDist[2], max: totalProjects, color: 'var(--accent2)' },
  { label: 'Tier 3 — Foundations', value: tierDist[3], max: totalProjects, color: 'var(--accent3)' },
  { label: 'Tier 4 — Platform', value: tierDist[4], max: totalProjects, color: 'var(--accent4)' },
]

const KPI_STATS = [
  { label: 'Total Projects', value: String(totalProjects), sub: 'in portfolio' },
  { label: 'Active Builds', value: String(inProgressCount), sub: 'in progress' },
  { label: 'Case Studies', value: `${completion.published}/${completion.total}`, sub: 'published' },
  { label: 'KPI Coverage', value: `${kpiCov.pct}%`, sub: 'of active projects' },
]

/* ─── Radar chart (SVG, no library) ──────────────────────────── */
const cx = 140
const cy = 140
const R = 115

const radarSkills = skills.map((s, i) => {
  const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2
  return { ...s, angle }
})

const levelToR = (level: number) => (level / 100) * R

const toXY = (angle: number, r: number) => ({
  x: cx + Math.cos(angle) * r,
  y: cy + Math.sin(angle) * r,
})

const radarGridLevels = [25, 50, 75, 100]

const gridPolygon = (pct: number) =>
  radarSkills
    .map(({ angle }) => {
      const p = toXY(angle, (pct / 100) * R)
      return `${p.x},${p.y}`
    })
    .join(' ')

const dataPolygon = radarSkills
  .map(({ angle, level }) => {
    const p = toXY(angle, levelToR(level))
    return `${p.x},${p.y}`
  })
  .join(' ')

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
          className={`section-reveal mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 ${isInView ? 'is-visible' : ''}`}
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

        {/* Charts grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Status distribution bar chart */}
          <div
            className={`section-reveal card-shell lg:col-span-1 ${isInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            <p className="mono-label mb-4">Project Pipeline</p>
            <div className="space-y-3">
              {STATUS_BARS.map((bar) => (
                <BarRow key={bar.label} {...bar} animate={isInView} />
              ))}
            </div>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              Source: src/data/projects.ts · {totalProjects} entries
            </p>
          </div>

          {/* Skills radar chart */}
          <div
            className={`section-reveal card-shell flex flex-col items-center lg:col-span-1 ${isInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '180ms' }}
          >
            <p className="mono-label mb-4 self-start">Skills Radar</p>
            <svg
              viewBox="0 0 280 280"
              className="w-full max-w-[260px]"
              aria-label="Skills radar chart"
              role="img"
            >
              {/* grid rings */}
              {radarGridLevels.map((lvl) => (
                <polygon
                  key={lvl}
                  points={gridPolygon(lvl)}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
              ))}
              {/* axis lines */}
              {radarSkills.map(({ name, angle }) => {
                const outer = toXY(angle, R)
                return (
                  <line
                    key={name}
                    x1={cx}
                    y1={cy}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                )
              })}
              {/* data polygon */}
              <polygon
                points={isInView ? dataPolygon : gridPolygon(0)}
                fill="rgba(232,255,71,0.12)"
                stroke="var(--accent)"
                strokeWidth="1.5"
                style={{ transition: 'points 1.1s ease-out' }}
              />
              {/* data points */}
              {isInView &&
                radarSkills.map(({ name, angle, level }) => {
                  const p = toXY(angle, levelToR(level))
                  return (
                    <circle
                      key={name}
                      cx={p.x}
                      cy={p.y}
                      r="3.5"
                      fill="var(--accent)"
                      stroke="var(--bg)"
                      strokeWidth="1.5"
                    />
                  )
                })}
              {/* labels */}
              {radarSkills.map(({ name, angle }) => {
                const p = toXY(angle, R + 18)
                return (
                  <text
                    key={name}
                    x={p.x}
                    y={p.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="var(--text-dim)"
                    fontSize="8"
                    fontFamily="'IBM Plex Mono', monospace"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}
                  >
                    {name.length > 10 ? name.slice(0, 9) + '…' : name}
                  </text>
                )
              })}
            </svg>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              Source: src/data/skills.ts · SVG rendered without libraries
            </p>
          </div>

          {/* Tier distribution + KPI coverage */}
          <div
            className={`section-reveal flex flex-col gap-6 lg:col-span-1 ${isInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '240ms' }}
          >
            <div className="card-shell flex-1">
              <p className="mono-label mb-4">Tier Distribution</p>
              <div className="space-y-3">
                {TIER_BARS.map((bar) => (
                  <BarRow key={bar.label} {...bar} animate={isInView} />
                ))}
              </div>
            </div>
            <div className="card-shell border-t-2 border-t-accent">
              <p className="mono-label mb-3">KPI Accountability</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface2">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
                  style={{ width: isInView ? `${kpiCov.pct}%` : '0%' }}
                />
              </div>
              <p className="mt-3 font-mono text-[10px] text-text-dim">
                <span className="text-accent">{kpiCov.withKpi}</span> of {kpiCov.total} active
                projects carry a measurable primary KPI.
              </p>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                Enforced by validateProjects.ts at build time
              </p>
            </div>
          </div>
        </div>

        {/* Source attribution footer */}
        <div
          className={`section-reveal mt-6 flex items-center gap-3 ${isInView ? 'is-visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="h-px flex-1 bg-border" />
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            All values computed at runtime from static TypeScript data · Zero external dependencies
          </p>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  )
}
