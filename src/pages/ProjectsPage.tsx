import { ProjectsSection } from '../components/sections/Projects'
import { RouteMeta } from '../components/seo/RouteMeta'
import { aiSystems, traditionalDataSystems, pipelineProjects } from '../utils/projectSelectors'

const ProjectsPage = () => {
  return (
    <main className="pt-24">
      <RouteMeta
        title="Projects - Jatin Kumar"
        description="Active and upcoming AI/data projects with problem framing, impact targets, and delivery roadmap."
        canonicalPath="/projects"
      />
      <ProjectsSection
        projects={traditionalDataSystems()}
        sectionId="projects-ml"
        label="01 / Applied Data Science"
        title="Applied Data Science"
        subtitle="Predictive ML modeling, anomaly detection, cohort analytics, and automated SQL pipelines."
        listAriaLabel="ML systems"
      />
      <ProjectsSection
        projects={aiSystems()}
        sectionId="projects-ai"
        label="02 / Agentic Engineering"
        title="Agentic Systems & LLM Engineering"
        subtitle="Deployed LLM orchestration, RAG pipelines, multi-agent workflows, and MCP server infrastructure."
        listAriaLabel="AI systems"
      />
      <ProjectsSection
        projects={pipelineProjects()}
        sectionId="projects-pipeline"
        label="03 / Sovereign Builds"
        title="Sovereign Builds"
        subtitle="Built for myself. Runs on my hardware. Exists outside any platform or subscription."
        listAriaLabel="Sovereign builds"
      />
    </main>
  )
}

export default ProjectsPage

