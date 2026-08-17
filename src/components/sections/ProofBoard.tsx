import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'
import { shouldShowProjectAction } from '../../utils/projectSelectors'

const STATUS_DOT: Record<string, string> = {
  shipped: '#98d982',
  'field-testing': 'var(--accent)',
  'in-progress': 'var(--accent3)',
  planned: 'var(--muted)',
  vision: 'var(--accent4)',
}

interface ProofBoardProps {
  projects: Project[]
  showAllCta?: boolean
}

export const ProofBoard = ({ projects, showAllCta = false }: ProofBoardProps) => {
  return (
    <section id="projects-highlights" className="section-shell section-anchor">
      <div className="container-shell">
        <SectionHeader
          label="Executive Summary"
          title="Proof Through Execution"
          subtitle="Three shipped DS projects. Each backed by a measurable business outcome."
        />

        {/* Outcomes board */}
        <div className="divide-y divide-border/30 overflow-hidden rounded-xl border border-border/40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid gap-4 bg-surface/30 p-5 transition-colors duration-200 hover:bg-surface/60
                         sm:grid-cols-[2rem,1fr,9rem,1.6fr,auto]
                         sm:items-center sm:gap-6 sm:p-6"
            >
              {/* Row number */}
              <span className="hidden font-mono text-[11px] text-muted sm:block">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Title + type + status */}
              <div className="min-w-0">
                <Link
                  to={`/projects/${project.id}`}
                  className="font-heading text-base font-bold tracking-[-0.02em] text-text transition-colors hover:text-accent sm:text-lg"
                >
                  {project.title}
                </Link>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                    {project.typeBadge}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-text-dim">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: STATUS_DOT[project.status] ?? 'var(--muted)' }}
                    />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* KPI delta + label */}
              <div className="sm:text-center">
                <p className="font-heading text-2xl font-extrabold text-accent">
                  {project.kpiDelta ?? '—'}
                </p>
                <p className="mt-0.5 font-mono text-[9px] uppercase leading-tight tracking-[0.1em] text-text-dim">
                  {project.primaryKpi}
                </p>
              </div>

              {/* One-line outcome */}
              <p className="text-sm leading-relaxed text-text-dim [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
                {project.oneLineOutcome}
              </p>

              {/* Action links */}
              <div className="flex flex-wrap gap-2">
                {shouldShowProjectAction(project, 'caseStudy') && (
                  <Button to={`/projects/${project.id}`} variant="outlined" size="sm">
                    Case Study →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {showAllCta && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            {/* Currently building indicator */}
            <div className="flex items-center gap-3 rounded-lg border border-accent2/20 bg-surface/40 px-4 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent2" />
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-dim">
                <span className="text-accent2">Currently Building</span>
                {' · '}
                Customer Churn Prediction · IBM Telco · Q3 2026
              </p>
            </div>
            <Button to="/projects" variant="outlined">
              {'View All Projects ->'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
