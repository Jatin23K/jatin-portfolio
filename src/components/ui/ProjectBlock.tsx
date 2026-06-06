import type { Project } from '../../data/projects'
import { isPlannedProject, shouldShowProjectAction } from '../../utils/projectSelectors'
import { trackEvent } from '../../utils/analytics'
import { Badge } from './Badge'
import { Button } from './Button'

const tierMeta: Record<Project['tier'], { label: string; tone: 'accent' | 'accent2' | 'accent3' | 'accent4' }> = {
  1: { label: 'Tier 1', tone: 'accent' },
  2: { label: 'Tier 2', tone: 'accent2' },
  3: { label: 'Tier 3', tone: 'accent3' },
  4: { label: 'Vision', tone: 'accent4' },
}

const statusMeta: Record<Project['status'], { label: string; tone: 'success' | 'accent' | 'muted' | 'accent4' }> = {
  shipped: { label: 'Shipped', tone: 'success' },
  'in-progress': { label: 'In Progress', tone: 'accent' },
  'field-testing': { label: 'Field Testing', tone: 'accent' },
  planned: { label: 'Planned', tone: 'muted' },
  vision: { label: 'Vision', tone: 'accent4' },
}

interface ProjectBlockProps {
  project: Project
  isFeatured?: boolean
}

export const ProjectBlock = ({ project, isFeatured = false }: ProjectBlockProps) => {
  const tier = tierMeta[project.tier]
  const status = statusMeta[project.status]
  const dimCard = isPlannedProject(project)

  const actionButtons = (
    <>
      {shouldShowProjectAction(project, 'caseStudy') ? (
        <Button variant="filled" size="sm" to={`/projects/${project.id}`}>
          {'View Project ->'}
        </Button>
      ) : (
        <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-dim">
          Coming Soon
        </span>
      )}

      {shouldShowProjectAction(project, 'demo') ? (
        <Button
          variant="outlined"
          size="sm"
          href={project.links.demo}
          external
          onClick={() => trackEvent('project_demo_click', { project_id: project.id })}
        >
          {'Website'}
        </Button>
      ) : null}

      {shouldShowProjectAction(project, 'github') ? (
        <Button
          variant="outlined"
          size="sm"
          href={project.links.github}
          external
          onClick={() => trackEvent('project_github_click', { project_id: project.id })}
        >
          GitHub
        </Button>
      ) : null}

      {shouldShowProjectAction(project, 'loom') ? (
        <Button
          variant="outlined"
          size="sm"
          href={project.links.loom}
          external
          onClick={() => trackEvent('project_loom_click', { project_id: project.id })}
        >
          Watch Demo ▶
        </Button>
      ) : null}
    </>
  )

  if (isFeatured) {
    return (
      <article
        className={`project-block card-shell relative border-t-2 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(71,200,255,0.08)] hover:border-accent2 ${
          dimCard ? 'coming-soon-card' : ''
        }`}
        style={{ borderTopColor: `var(--${tier.tone})` }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.82fr)] lg:gap-12">
          {/* Left Column: Narrative */}
          <div className="flex min-h-full flex-col">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="accent2">{project.typeBadge}</Badge>
                <Badge tone={status.tone}>{status.label}</Badge>
              </div>

              <h3 className="mt-5 font-heading text-3xl font-bold tracking-[-0.02em] text-text">
                {project.title}
              </h3>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-text font-medium">
                {project.tagline}
              </p>
              
              {project.oneLineOutcome ? (
                <p className="mt-5 rounded-md border border-border/80 bg-surface2/70 px-4 py-3 text-sm leading-relaxed text-text">
                  {project.oneLineOutcome}
                </p>
              ) : null}

              <div className="mt-7 grid gap-6">
                <div className="max-w-[62ch]">
                  <p className="mono-label">Problem</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-dim">{project.problem}</p>
                </div>
                <div className="max-w-[62ch]">
                  <p className="mono-label">Impact</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-dim">{project.impact}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border/25 pt-5">
              {project.resumeBullet ? (
                <p className="max-w-[58ch] text-xs leading-relaxed text-text-dim">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">Resume Signal</span>{' '}
                  {project.resumeBullet}
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {actionButtons}
            </div>
          </div>

          {/* Right Column: System Specs & Tech */}
          <div className="flex flex-col border-t border-border/30 pt-6 lg:border-t-0 lg:border-l lg:border-l-white/10 lg:pl-8">
            <div className="space-y-5">
              <p className="mono-label text-[11px] tracking-[0.15em] text-text-dim">System Specs</p>
              
              <div className="space-y-3.5">
                {(project.primaryKpi || project.kpiDelta) && (
                  <div className="rounded-md border border-accent2/35 bg-surface2/80 px-4 py-3.5">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-accent2">Primary KPI</p>
                    <p className="mt-1.5 text-sm font-bold text-text">
                      {project.primaryKpi ?? 'Metric'} {project.kpiDelta ? `— ${project.kpiDelta}` : ''}
                    </p>
                  </div>
                )}

                <div className="grid gap-3 lg:grid-cols-1">
                  {project.metrics.map((metric) => (
                    <div key={`${metric.label}-${metric.value}`} className="rounded-md border border-border/70 bg-surface2/70 px-4 py-3.5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-dim">{metric.label}</p>
                      <p className="mt-1.5 text-sm font-semibold text-text">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-border/30 pt-5">
              <p className="mono-label text-[11px] tracking-[0.15em] mb-2.5 text-text-dim">Tech Stack Deployed</p>
              <ul className="flex flex-wrap gap-2.5" aria-label={`${project.title} technology stack`}>
                {project.tech.map((tech) => (
                  <li key={tech}>
                    <Badge tone="surface" className="border border-border text-text font-mono text-xs py-1 px-2.5">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={`project-block card-shell relative border-t-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(71,200,255,0.08)] hover:border-accent2 ${
        dimCard ? 'coming-soon-card' : ''
      }`}
      style={{ borderTopColor: `var(--${tier.tone})` }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent2">{project.typeBadge}</Badge>
        <Badge tone={status.tone}>{status.label}</Badge>
      </div>

      <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.02em] text-text">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-dim">{project.tagline}</p>
      {project.oneLineOutcome ? (
        <p className="mt-3 rounded-md border border-border/80 bg-surface2/70 px-3 py-2 text-sm leading-relaxed text-text">
          {project.oneLineOutcome}
        </p>
      ) : null}

      <div className="mt-6 space-y-5">
        <div>
          <p className="mono-label">Problem</p>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">{project.problem}</p>
        </div>
        <div>
          <p className="mono-label">Impact</p>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">{project.impact}</p>
        </div>
      </div>

      {(project.primaryKpi || project.kpiDelta) && (
        <div className="mt-6 rounded-md border border-border/70 bg-surface2/70 px-3 py-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-dim">Primary KPI</p>
          <p className="mt-1 text-sm font-semibold text-text">
            {project.primaryKpi ?? 'Metric'} {project.kpiDelta ? `- ${project.kpiDelta}` : ''}
          </p>
        </div>
      )}

      <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={`${project.title} technology stack`}>
        {project.tech.map((tech) => (
          <li key={tech}>
            <Badge tone="surface" className="border border-border text-text">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>

      {project.metrics.length > 0 ? (
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.metrics.map((metric) => (
            <div key={`${metric.label}-${metric.value}`} className="rounded-md border border-border/70 bg-surface2/70 px-3 py-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-dim">{metric.label}</p>
              <p className="mt-1 text-sm font-semibold text-text">{metric.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {actionButtons}
      </div>
    </article>
  )
}
