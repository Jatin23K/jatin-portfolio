import { Link } from 'react-router-dom'
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
  planned: { label: 'Planned', tone: 'muted' },
  vision: { label: 'Vision', tone: 'accent4' },
}

interface ProjectBlockProps {
  project: Project
}

export const ProjectBlock = ({ project }: ProjectBlockProps) => {
  const tier = tierMeta[project.tier]
  const status = statusMeta[project.status]
  const dimCard = isPlannedProject(project)

  return (
    <article
      className={`project-block card-shell relative border-t-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(71,200,255,0.08)] hover:border-accent2 ${
        dimCard ? 'coming-soon-card' : ''
      }`}
      style={{ borderTopColor: `var(--${tier.tone})` }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={tier.tone}>{tier.label}</Badge>
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

      {project.resumeBullet ? (
        <div className="mt-4 border-l-2 border-accent2 pl-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-dim">Resume Bullet</p>
          <p className="mt-1 text-sm leading-relaxed text-text-dim">{project.resumeBullet}</p>
        </div>
      ) : null}

      {project.targetMilestone ? (
        <p className="mt-4 text-xs font-mono uppercase tracking-[0.1em] text-text-dim">
          Target Milestone: <span className="text-accent2">{project.targetMilestone}</span>
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {shouldShowProjectAction(project, 'caseStudy') ? (
          <Button variant="filled" size="sm" to={`/projects/${project.id}`}>
            {'Case Study ->'}
          </Button>
        ) : (
          <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-dim">
            Case Study In Progress
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
            {'Live Demo ->'}
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

      </div>

      {!shouldShowProjectAction(project, 'caseStudy') && (
        <Link
          to={`/projects/${project.id}`}
          className="mt-4 inline-block text-xs font-mono uppercase tracking-[0.1em] text-accent2 underline decoration-dotted underline-offset-4"
        >
          Preview Case Study Layout
        </Link>
      )}
    </article>
  )
}
