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
        label="01 / Predictive ML & Analytics"
        title="Predictive ML & Analytics Pipelines"
        subtitle="Predictive ML modeling, SHAP interpretability, anomaly detection, cohort analytics, and optimized SQL pipelines."
        listAriaLabel="ML systems"
      />
      <ProjectsSection
        projects={aiSystems()}
        sectionId="projects-ai"
        label="02 / LLM & Agentic Systems"
        title="Applied LLM Systems & Agentic Workflows"
        subtitle="Deployed LLM evaluation pipelines, RAG vector retrieval, multi-agent workflows, and MCP server infrastructure."
        listAriaLabel="AI systems"
      />
      <ProjectsSection
        projects={pipelineProjects()}
        sectionId="projects-pipeline"
        label="03 / Sovereign Edge Systems"
        title="Sovereign Edge Systems"
        subtitle="Hardware-constrained edge deployment, Zero-Trust DRM, and persistent memory architecture running outside any third-party platform."
        listAriaLabel="Sovereign builds"
      />
    </main>
  )
}

export default ProjectsPage

