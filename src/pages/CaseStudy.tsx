import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { getProjectById, shouldShowProjectAction } from '../utils/projectSelectors'

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <main className="container-shell section-shell section-anchor pt-32">
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

  return (
    <main className="container-shell section-shell section-anchor pt-32">
      <Badge tone={project.tier === 1 ? 'accent' : project.tier === 2 ? 'accent2' : project.tier === 3 ? 'accent3' : 'accent4'}>
        Case Study
      </Badge>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-3xl text-base text-text-dim">{project.tagline}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="card-shell lg:col-span-1">
          <p className="mono-label">Problem</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.problem}</p>
        </article>

        <article className="card-shell lg:col-span-1">
          <p className="mono-label">Solution</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.solution}</p>
        </article>

        <article className="card-shell lg:col-span-1">
          <p className="mono-label">Impact</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.impact}</p>
        </article>
      </div>

      <section className="mt-8 card-shell">
        <p className="mono-label">Tech Stack</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge tone="surface" className="border border-border text-text">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 card-shell">
        <p className="mono-label">Narrative</p>
        {shouldShowProjectAction(project, 'caseStudy') ? (
          <p className="mt-3 text-sm text-text-dim">Detailed case study content is linked from the provided data URL.</p>
        ) : (
          <p className="mt-3 text-sm text-text-dim">
            Case Study Coming Soon. This template route is production-ready and will render full writeups when
            caseStudy links are added to the project data.
          </p>
        )}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        {shouldShowProjectAction(project, 'demo') ? (
          <Button href={project.demo} external>
            {'Live Demo ->'}
          </Button>
        ) : null}
        {shouldShowProjectAction(project, 'github') ? (
          <Button variant="outlined" href={project.github} external>
            GitHub
          </Button>
        ) : null}
        <Button variant="outlined" to="/projects">
          All Projects
        </Button>
        <Link to="/#contact" className="inline-flex items-center text-xs font-mono uppercase tracking-[0.1em] text-accent2">
          {'Contact ->'}
        </Link>
      </div>
    </main>
  )
}

export default CaseStudy

