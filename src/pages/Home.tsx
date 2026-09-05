import { ContactSection } from '../components/sections/Contact'
import { RouteMeta } from '../components/seo/RouteMeta'
import { Hero } from '../components/sections/Hero'
import { ProofBoard } from '../components/sections/ProofBoard'
import { ProjectsSection } from '../components/sections/Projects'
import { SkillsSection } from '../components/sections/Skills'
import { DataTerminalSection } from '../components/sections/DataTerminal'
import { skills } from '../data/skills'
import { homepageProjects, aiSystems, traditionalDataSystems, pipelineProjects } from '../utils/projectSelectors'

const Home = () => {
  return (
    <main>
      <RouteMeta
        title="Jatin Kumar — Applied Data Science & AI Systems"
        description="Portfolio showcasing AI systems, data science execution, and business-focused product delivery."
        canonicalPath="/"
      />
      <Hero />
      <ProofBoard
        projects={homepageProjects()}
        showAllCta
      />
      <ProjectsSection
        projects={traditionalDataSystems()}
        sectionId="projects-ml"
        label="CASE STUDIES / PREDICTIVE ML & ANALYTICS"
        title="Predictive ML & Analytics Pipelines"
        subtitle="Predictive ML modeling, SHAP interpretability, anomaly detection, cohort analytics, and optimized SQL pipelines."
        listAriaLabel="ML systems"
      />
      <ProjectsSection
        projects={aiSystems()}
        sectionId="projects-ai"
        label="CASE STUDIES / APPLIED AI & LLM ARCHITECTURE"
        title="Applied LLM Systems & AI Architecture"
        subtitle="Shipped LLM products, agentic evaluation pipelines, RAG retrieval systems, and architecture specs for production-grade AI infrastructure."
        listAriaLabel="AI systems"
      />
      <ProjectsSection
        projects={pipelineProjects()}
        sectionId="projects-pipeline"
        label="CAPSTONE ARCHITECTURE / THE UMBRELLA ECOSYSTEM"
        title="Sovereign AI Ecosystem & Operating Layer"
        subtitle="The private intelligence backbone and distributed mesh connecting all standalone applied data science models across mobile, desktop, and edge hardware."
        listAriaLabel="Sovereign builds"
      />

      <SkillsSection skills={skills} />
      <DataTerminalSection />
      <ContactSection />
    </main>
  )
}

export default Home

