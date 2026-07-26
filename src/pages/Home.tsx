import { ContactSection } from '../components/sections/Contact'
import { RouteMeta } from '../components/seo/RouteMeta'
import { Hero } from '../components/sections/Hero'
import { ProjectsSection } from '../components/sections/Projects'
import { SkillsSection } from '../components/sections/Skills'
import { VisionSection } from '../components/sections/Vision'
import { DataTerminalSection } from '../components/sections/DataTerminal'
import { skills } from '../data/skills'
import { homepageProjects, aiSystems, traditionalDataSystems, pipelineProjects } from '../utils/projectSelectors'

const Home = () => {
  return (
    <main>
      <RouteMeta
        title="Jatin Kumar — Data Scientist & AI Engineer"
        description="Portfolio showcasing AI systems, data science execution, and business-focused product delivery."
        canonicalPath="/"
      />
      <Hero />
      <ProjectsSection
        projects={homepageProjects()}
        sectionId="projects-highlights"
        label="02 / Executive Summary"
        title="Proof Through Execution"
        subtitle="Flagship work that demonstrates measurable data-science impact."
        showAllCta
      />
      <DataTerminalSection />
      <SkillsSection skills={skills} />
      <VisionSection />
      <ProjectsSection
        projects={traditionalDataSystems()}
        sectionId="projects-ml"
        label="CASE STUDIES / APPLIED DATA SCIENCE"
        title="Applied Data Science"
        subtitle="Predictive ML modeling, anomaly detection, cohort analytics, and automated SQL pipelines."
        listAriaLabel="ML systems"
      />
      <ProjectsSection
        projects={aiSystems()}
        sectionId="projects-ai"
        label="CASE STUDIES / AGENTIC ENGINEERING"
        title="Agentic Systems & LLM Engineering"
        subtitle="Deployed LLM orchestration, RAG pipelines, multi-agent workflows, and MCP server infrastructure."
        listAriaLabel="AI systems"
      />
      <ProjectsSection
        projects={pipelineProjects()}
        sectionId="projects-pipeline"
        label="CASE STUDIES / SOVEREIGN BUILDS"
        title="Sovereign Builds"
        subtitle="Built for myself. Runs on my hardware. Exists outside any platform or subscription."
        listAriaLabel="Sovereign builds"
      />
      <ContactSection />
    </main>
  )
}

export default Home

