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
        projects={aiSystems()}
        sectionId="projects-ai"
        label="01 / Core Engineering"
        title="Autonomous AI & Agentic Systems"
        subtitle="Deployed LLM orchestration, RAG pipelines, and multi-agent workflows."
        listAriaLabel="AI systems"
      />
      <ProjectsSection
        projects={traditionalDataSystems()}
        sectionId="projects-ml"
        label="02 / Applied Data Science"
        title="Applied ML & Data Engineering"
        subtitle="Traditional machine learning models, anomaly detection, and automated SQL reporting."
        listAriaLabel="ML systems"
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

