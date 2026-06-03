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
        projects={aiSystems()}
        sectionId="projects-ai"
        label="CASE STUDIES / CORE ENGINEERING"
        title="Autonomous AI & Agentic Systems"
        subtitle="Deployed LLM orchestration, RAG pipelines, and multi-agent workflows."
        listAriaLabel="AI systems"
      />
      <ProjectsSection
        projects={traditionalDataSystems()}
        sectionId="projects-ml"
        label="CASE STUDIES / APPLIED DATA SCIENCE"
        title="Applied ML & Data Engineering"
        subtitle="Traditional machine learning models, anomaly detection, and automated SQL reporting."
        listAriaLabel="ML systems"
      />
      <ProjectsSection
        projects={pipelineProjects()}
        sectionId="projects-pipeline"
        label="CASE STUDIES / ACTIVE RESEARCH"
        title="Active R&D (In Pipeline)"
        subtitle="Upcoming architecture and sovereign systems currently facing hardware constraints."
        listAriaLabel="Pipeline systems"
      />
      <ContactSection />
    </main>
  )
}

export default Home

