import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { isComingSoonProject, shouldShowProjectAction } from '../../utils/projectSelectors'
import { Badge } from './Badge'
import { Button } from './Button'

const tierMeta: Record<Project['tier'], { label: string; tone: 'accent' | 'accent2' | 'accent3' | 'accent4' }> = {
  1: { label: 'Tier 1', tone: 'accent' },
  2: { label: 'Tier 2', tone: 'accent2' },
  3: { label: 'Tier 3', tone: 'accent3' },
  4: { label: 'Vision', tone: 'accent4' },
}

const statusMeta: Record<Project['status'], { label: string; tone: 'success' | 'accent' | 'muted' | 'accent4' }> = {
  live: { label: 'Live', tone: 'success' },
  'in-progress': { label: 'In Progress', tone: 'accent' },
  'coming-soon': { label: 'Coming Soon', tone: 'muted' },
  vision: { label: 'Vision', tone: 'accent4' },
}

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const tier = tierMeta[project.tier]
  const status = statusMeta[project.status]
  const dimCard = isComingSoonProject(project)

  return (
    <article
      className={`card-shell relative border-t-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent2 ${
        dimCard ? 'coming-soon-card' : ''
      }`}
      style={{ borderTopColor: `var(--${tier.tone})` }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={tier.tone}>{tier.label}</Badge>
        <Badge tone={status.tone}>{status.label}</Badge>
      </div>

      <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.02em] text-text">{project.title}</h3>
      <p className="mt-2 text-sm text-text-dim">{project.tagline}</p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="mono-label">Problem</p>
          <p className="mt-2 text-sm text-text-dim">{project.problem}</p>
        </div>
        <div>
          <p className="mono-label">Impact</p>
          <p className="mt-2 text-sm text-text-dim">{project.impact}</p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
        {project.tech.map((tech) => (
          <li key={tech}>
            <Badge tone="surface" className="border border-border text-text">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {shouldShowProjectAction(project, 'demo') ? (
          <Button variant="filled" size="sm" href={project.demo} external>
            {'Live Demo ->'}
          </Button>
        ) : null}

        {shouldShowProjectAction(project, 'github') ? (
          <Button variant="outlined" size="sm" href={project.github} external>
            GitHub
          </Button>
        ) : null}

        {shouldShowProjectAction(project, 'caseStudy') ? (
          <Button variant="outlined" size="sm" to={`/projects/${project.id}`}>
            {'Case Study ->'}
          </Button>
        ) : (
          <span className="text-xs font-mono uppercase tracking-[0.1em] text-text-dim">
            Case Study Coming Soon
          </span>
        )}
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

