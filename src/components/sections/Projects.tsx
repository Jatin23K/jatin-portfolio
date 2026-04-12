import type { Project } from '../../data/projects'
import { siteContent } from '../../data/site'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'

interface ProjectsSectionProps {
  projects: Project[]
  sectionId?: string
  showAllCta?: boolean
}

export const ProjectsSection = ({
  projects,
  sectionId = 'projects-grid',
  showAllCta = false,
}: ProjectsSectionProps) => {
  return (
    <section id={sectionId} className="section-shell section-anchor">
      <div className="container-shell">
        <SectionHeader
          label={siteContent.sections.projects.label}
          title={siteContent.sections.projects.title}
          subtitle={siteContent.sections.projects.subtitle}
        />

        <div className="columns-1 gap-6 lg:columns-2" role="list" aria-label="Projects list">
          {projects.map((project) => (
            <div key={project.id} className="mb-6 break-inside-avoid" role="listitem">
              <ProjectCard project={project} />
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

