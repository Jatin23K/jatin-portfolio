import { Link, useParams } from 'react-router-dom'
import { RouteMeta } from '../components/seo/RouteMeta'
import { projectDetails } from '../data/projectDetails'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { getProjectById, shouldShowProjectAction } from '../utils/projectSelectors'
import type { Project } from '../data/projects'

const tierTone = (tier: Project['tier']): 'accent' | 'accent2' | 'accent3' | 'accent4' =>
  tier === 1 ? 'accent' : tier === 2 ? 'accent2' : tier === 3 ? 'accent3' : 'accent4'

/* ─── Timeline list ──────────────────────────────────────────── */
const TimelineList = ({ items }: { items: string[] }) => (
  <ol className="mt-3 space-y-0">
    {items.map((item, idx) => (
      <li key={item} className="relative flex gap-4">
        {/* vertical connector */}
        {idx < items.length - 1 && (
          <span
            className="absolute left-[11px] top-7 h-full w-px bg-border"
            aria-hidden="true"
          />
        )}
        {/* step circle */}
        <span
          className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent2/60 bg-surface2 font-mono text-[9px] text-accent2"
          aria-hidden="true"
        >
          {idx + 1}
        </span>
        <p className="pb-5 text-sm leading-relaxed text-text-dim">{item}</p>
      </li>
    ))}
  </ol>
)

/* ─── Architecture list ──────────────────────────────────────── */
const ArchList = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-sm text-text-dim">
        <span className="mt-1 shrink-0 font-mono text-[10px] text-accent">▸</span>
        {item}
      </li>
    ))}
  </ul>
)

/* ─── Milestone steps ────────────────────────────────────────── */
const MilestoneTrack = ({ items }: { items: string[] }) => (
  <div className="mt-3 space-y-3">
    {items.map((item) => (
      <div key={item} className="flex items-center gap-3">
        <span
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#98d982] font-mono text-[8px] text-black"
        >
          ✓
        </span>
        <p className="text-sm text-text-dim">{item}</p>
      </div>
    ))}
    <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface2">
      <div
        className="h-full rounded-full bg-[#98d982]"
        style={{ width: `${Math.min(100, (items.length / (items.length + 1)) * 100)}%` }}
      />
    </div>
    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
      {items.length} milestone{items.length !== 1 ? 's' : ''} completed
    </p>
  </div>
)

/* ─── Risk cards ─────────────────────────────────────────────── */
const RiskCards = ({ items }: { items: string[] }) => (
  <div className="mt-3 space-y-2">
    {items.map((item) => (
      <div
        key={item}
        className="rounded-md border-l-2 border-accent3 bg-surface2/60 px-4 py-3 text-sm leading-relaxed text-text-dim"
      >
        {item}
      </div>
    ))}
  </div>
)

/* ─── Main page ──────────────────────────────────────────────── */
const CaseStudy = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <main className="container-shell section-shell section-anchor pt-32">
        <RouteMeta
          title="Project Not Found - Jatin Kumar"
          description="The requested case study does not exist."
          canonicalPath="/projects"
        />
        <h1 className="font-heading text-4xl font-bold tracking-[-0.02em] text-text">Project Not Found</h1>
        <p className="mt-3 max-w-xl text-text-dim">
          This case study route is reserved for valid project IDs in src/data/projects.ts.
        </p>
        <Button to="/projects" variant="outlined" className="mt-6">
          Back to Projects
        </Button>
      </main>
    )
  }

  const detail = projectDetails[project.id]

  return (
    <main className="container-shell section-shell section-anchor pt-32">
      <RouteMeta
        title={`${project.title} — Case Study`}
        description={project.tagline}
        canonicalPath={`/projects/${project.id}`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        <Link to="/" className="hover:text-text-dim transition-colors">Portfolio</Link>
        <span aria-hidden="true">›</span>
        <Link to="/projects" className="hover:text-text-dim transition-colors">Projects</Link>
        <span aria-hidden="true">›</span>
        <span className="text-text-dim">{project.title}</span>
      </nav>

      <Badge tone={tierTone(project.tier)}>Case Study</Badge>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-text-dim">{project.tagline}</p>

      {/* Problem / Solution / Impact */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="card-shell border-t-2 border-t-accent3 lg:col-span-1">
          <p className="mono-label">Problem</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.problem}</p>
        </article>
        <article className="card-shell border-t-2 border-t-accent2 lg:col-span-1">
          <p className="mono-label">Solution</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.solution}</p>
        </article>
        <article className="card-shell border-t-2 border-t-accent lg:col-span-1">
          <p className="mono-label">Impact</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.impact}</p>
        </article>
      </div>

      {/* KPI highlight */}
      {project.primaryKpi && (
        <div className="mt-6 flex items-center gap-4 rounded-md border border-accent/30 bg-surface2/60 px-5 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Primary KPI</span>
          <span className="font-heading text-xl font-bold text-accent">{project.kpiDelta}</span>
          <span className="text-sm text-text-dim">{project.primaryKpi}</span>
        </div>
      )}

      {/* Tech stack */}
      <section className="mt-6 card-shell">
        <p className="mono-label">Tech Stack</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge tone="surface" className="border border-border text-text">{tech}</Badge>
            </li>
          ))}
        </ul>
      </section>

      {detail ? (
        <>
          {/* Executive summary */}
          <section className="mt-6 card-shell">
            <p className="mono-label">Executive Summary</p>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-text-dim">{detail.businessContext}</p>
          </section>

          {/* Approach + Architecture */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="card-shell">
              <p className="mono-label">Approach</p>
              <TimelineList items={detail.approach} />
            </article>
            <article className="card-shell">
              <p className="mono-label">Architecture</p>
              <ArchList items={detail.architecture} />
            </article>
          </section>

          {/* Milestones + Risks */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="card-shell">
              <p className="mono-label">Delivery Milestones</p>
              <MilestoneTrack items={detail.milestones} />
            </article>
            <article className="card-shell">
              <p className="mono-label">Risks & Controls</p>
              <RiskCards items={detail.risks} />
            </article>
          </section>

          {/* DS Intelligence Layer */}
          {detail.dsPipeline && (
            <section className="mt-6 card-shell border-t-2 border-t-accent4">
              <p className="mono-label">DS Intelligence Layer</p>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.dsPipeline.summary}</p>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {detail.dsPipeline.components.map((comp, idx) => (
                  <div key={idx} className="rounded-md border border-border bg-surface2/60 p-4">
                    <p className="font-heading text-sm font-bold text-text">{comp.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-text-dim">{comp.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Evaluation */}
          {detail.evaluation && (
            <section className="mt-6 card-shell border-t-2 border-t-accent">
              <p className="mono-label">Evaluation</p>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.evaluation.summary}</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Metric</th>
                      <th className="py-2 pr-4 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Result</th>
                      <th className="py-2 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.evaluation.metrics.map((m, idx) => (
                      <tr key={idx} className="border-b border-border/50">
                        <td className="py-2.5 pr-4 text-text-dim">{m.metric}</td>
                        <td className="py-2.5 pr-4 text-right font-heading font-bold text-accent">{m.final}</td>
                        <td className="py-2.5 text-right text-accent2">{m.delta || ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {detail.evaluation.validationStrategy && (
                <div className="mt-4 rounded-md border border-border bg-surface2/60 px-4 py-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Validation Strategy</p>
                  <p className="text-sm leading-relaxed text-text-dim">{detail.evaluation.validationStrategy}</p>
                </div>
              )}
            </section>
          )}

          {/* Error Analysis */}
          {detail.errorAnalysis && detail.errorAnalysis.length > 0 && (
            <section className="mt-6 card-shell border-t-2 border-t-accent3">
              <p className="mono-label">Error Analysis</p>
              <div className="mt-3 space-y-3">
                {detail.errorAnalysis.map((item, idx) => (
                  <div key={idx} className="rounded-md border-l-2 border-accent3 bg-surface2/60 px-4 py-3 text-sm leading-relaxed text-text-dim">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next release */}
          <section className="mt-6 card-shell border-t-2 border-t-accent2">
            <p className="mono-label">Next Release</p>
            <p className="mt-3 text-sm text-text-dim">{detail.nextRelease}</p>
          </section>

          {/* File Attachments (Raw Data, Reports, etc.) */}
          {detail.attachments && detail.attachments.length > 0 && (
            <section className="mt-6 card-shell">
              <p className="mono-label">Artifacts & Reports</p>
              <div className="mt-4 flex flex-col gap-3">
                {detail.attachments.map((file, idx) => (
                  <a
                    key={idx}
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-md border border-border bg-surface2/50 px-4 py-3 hover:border-accent2 hover:bg-surface2 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded bg-surface border border-border font-mono text-[10px] font-bold text-accent group-hover:text-accent2 uppercase">
                        {file.type}
                      </span>
                      <span className="text-sm font-medium text-text-dim group-hover:text-text transition-colors">
                        {file.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-accent2 transition-colors">
                      View -&gt;
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Visual Modules (Structured Input/Output) */}
          {detail.visualModules && detail.visualModules.length > 0 && (
            <section className="mt-8 space-y-8">
              <div className="border-b-2 border-border pb-4">
                <h2 className="font-heading text-xl font-bold tracking-tight text-text">Visual Proof & Engine Modules</h2>
                <p className="mt-2 text-sm text-text-dim">Module-level breakdown of system inputs, contexts, and generated outputs.</p>
              </div>
              
              <div className="flex flex-col gap-16">
                {detail.visualModules.map((module, idx) => (
                  <article key={idx} className="flex flex-col">
                    {/* Center Aligned Title Divider */}
                    <div className="mb-8 flex items-center gap-4">
                      <div className="h-px flex-1 bg-border"></div>
                      <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent2">{module.title}</h3>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid gap-8 items-center lg:grid-cols-12">
                      {/* Left Side: Context & Input */}
                      <div className="flex flex-col gap-5 lg:col-span-5">
                        <p className="text-sm leading-relaxed text-text-dim">{module.description}</p>
                        
                        {module.input && (
                          <div className="rounded-md border border-border bg-surface2/60 p-5">
                            <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-3">System Input / Context</p>
                            <p className="text-sm font-medium italic text-text-dim border-l-2 border-accent3 pl-4">{module.input}</p>
                          </div>
                        )}

                        {module.differentiators && module.differentiators.length > 0 && (
                          <div className="rounded-md border border-border bg-surface/80 p-5 mt-2">
                            <p className="font-mono text-[9px] uppercase tracking-widest text-accent2 mb-3">Vs. Generic Wrapper</p>
                            <ul className="space-y-3">
                              {module.differentiators.map((diff, i) => (
                                <li key={i} className="flex gap-3 text-sm text-text-dim items-start">
                                  <span className="text-accent2 mt-0.5">↳</span>
                                  <span>{diff}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    
                      {/* Right Side: Output Images */}
                      <div className={`grid gap-4 lg:col-span-7 ${module.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                        {module.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="overflow-y-auto overflow-x-hidden max-h-[600px] rounded-md border border-border bg-surface2 relative group shadow-lg custom-scrollbar">
                            <img
                              src={img}
                            alt={`${module.title} output ${imgIdx + 1}`}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-accent2"
                          />
                        </div>
                      ))}
                    </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Legacy Visual Evidence (Images) fallback */}
          {!detail.visualModules && detail.images && detail.images.length > 0 && (
            <section className="mt-6 card-shell">
              <p className="mono-label">Visual Proof</p>
              <div className="mt-4 flex flex-col gap-6">
                {detail.images.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-md border border-border bg-surface2 relative group shadow-lg">
                    <img
                      src={img}
                      alt={`Case study visual ${idx + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-accent2"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Loom Video (if exists in project.links) */}
          {project.links?.loom && (
            <section className="mt-6 card-shell">
              <p className="mono-label">Interactive Demo</p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border border-border">
                <iframe
                  src={project.links.loom.includes('share') ? project.links.loom.replace('share', 'embed') : project.links.loom}
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="mt-6 card-shell">
          <p className="mono-label">Narrative</p>
          <p className="mt-3 text-sm text-text-dim">
            Detailed execution notes will be published here. Add content in{' '}
            <code className="font-mono text-[10px] text-accent2">src/data/projectDetails.ts</code>{' '}
            for this project ID.
          </p>
        </section>
      )}

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap gap-3">
        {shouldShowProjectAction(project, 'demo') ? (
          <Button href={project.links.demo} external>
            {'Live Demo ->'}
          </Button>
        ) : null}
        {shouldShowProjectAction(project, 'github') ? (
          <Button variant="outlined" href={project.links.github} external>
            GitHub
          </Button>
        ) : null}
        <Button variant="outlined" to="/projects">
          All Projects
        </Button>
        <Link
          to="/#contact"
          className="inline-flex items-center text-xs font-mono uppercase tracking-[0.1em] text-accent2 underline-offset-4 hover:underline"
        >
          {'Contact ->'}
        </Link>
      </div>
    </main>
  )
}

export default CaseStudy
