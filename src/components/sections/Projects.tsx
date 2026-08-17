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
  const gridProjects = projects.filter((p) => p.id !== 'leap-axiom' && p.id !== 'core-sovereign-bridge')
  const fullWidthProjects = projects.filter((p) => p.id === 'leap-axiom' || p.id === 'core-sovereign-bridge')

  return (
    <section id={sectionId} className="section-shell section-anchor">
      <div className="container-shell">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        {gridProjects.length > 0 && (
          <div 
            className={gridProjects.length === 1 ? "mx-auto max-w-6xl" : "grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-center mb-7 md:mb-8"} 
            role="list" 
            aria-label={listAriaLabel}
          >
            {gridProjects.map((project) => (
              <div 
                key={project.id} 
                className="w-full self-center" 
                role="listitem"
              >
                <ProjectBlock project={project} isFeatured={gridProjects.length === 1} />
              </div>
            ))}
          </div>
        )}

        {fullWidthProjects.length > 0 && (
          <div role="list" aria-label={`${listAriaLabel} featured`}>
            {fullWidthProjects.map((project) => (
              <div key={project.id} className={`mx-auto max-w-6xl mb-7 md:mb-8 ${gridProjects.length > 0 ? 'mt-8 md:mt-10' : ''}`} role="listitem">
                <ProjectBlock project={project} isFeatured={true} />
              </div>
            ))}
          </div>
        )}

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

