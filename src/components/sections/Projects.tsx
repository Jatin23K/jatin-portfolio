import type { Project } from '../../data/projects'
import { siteContent } from '../../data/site'
import { ProjectBlock } from '../ui/ProjectBlock'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'

interface ProjectsSectionProps {
  projects: Project[]
  sectionId?: string
  showAllCta?: boolean
  label?: string
  title?: string
  subtitle?: string
  listAriaLabel?: string
}

export const ProjectsSection = ({
  projects,
  sectionId = 'projects-grid',
  showAllCta = false,
  label = siteContent.sections.projects.label,
  title = siteContent.sections.projects.title,
  subtitle = siteContent.sections.projects.subtitle,
  listAriaLabel = 'Projects list',
}: ProjectsSectionProps) => {
  return (
    <section id={sectionId} className="section-shell section-anchor">
      <div className="container-shell">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        <div className="columns-1 gap-6 lg:columns-2" role="list" aria-label={listAriaLabel}>
          {projects.map((project) => (
            <div key={project.id} className="mb-6 break-inside-avoid" role="listitem">
              <ProjectBlock project={project} />
            </div>
          ))}
        </div>

        {showAllCta ? (
          <div className="mt-8">
            <Button to="/projects" variant="outlined">
              {'View All Projects ->'}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

