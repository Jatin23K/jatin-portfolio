import { ProjectsSection } from '../components/sections/Projects'
import { RouteMeta } from '../components/seo/RouteMeta'
import { visibleProjects } from '../utils/projectSelectors'

const ProjectsPage = () => {
  return (
    <main className="pt-24">
      <RouteMeta
        title="Projects - Jatin Kumar"
        description="Active and upcoming AI/data projects with problem framing, impact targets, and delivery roadmap."
        canonicalPath="/projects"
      />
      <ProjectsSection
        projects={visibleProjects()}
        sectionId="projects"
        label="Portfolio Blocks"
        title="Reorderable Project Portfolio"
        subtitle="Each project is a reusable block. Update order values in project data to rearrange this page."
        listAriaLabel="Reorderable project blocks"
      />
    </main>
  )
}

export default ProjectsPage

