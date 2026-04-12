import { ProjectsSection } from '../components/sections/Projects'
import { projects } from '../data/projects'

const ProjectsPage = () => {
  return (
    <main className="pt-24">
      <ProjectsSection projects={projects} sectionId="projects" />
    </main>
  )
}

export default ProjectsPage

