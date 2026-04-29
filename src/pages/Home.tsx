import { ContactSection } from '../components/sections/Contact'
import { RouteMeta } from '../components/seo/RouteMeta'
import { Hero } from '../components/sections/Hero'
import { ProjectsSection } from '../components/sections/Projects'
import { homepageProjects, visibleProjects } from '../utils/projectSelectors'

const Home = () => {
  return (
    <main>
      <RouteMeta
        title="Jatin Kumar - AI Engineer & Data Scientist"
        description="Portfolio showcasing AI systems, data science execution, and business-focused product delivery."
        canonicalPath="/"
      />
      <Hero />
      <ProjectsSection
        projects={homepageProjects()}
        sectionId="projects-highlights"
        label="02 / Project Highlights"
        title="Proof Through Execution"
        subtitle="Flagship work that demonstrates measurable data-science impact."
        showAllCta
      />
      <ProjectsSection
        projects={visibleProjects()}
        sectionId="projects-portfolio"
        label="03 / Full Portfolio"
        title="All Portfolio Blocks"
        subtitle="Reorderable project blocks. Update order values in project data to change this sequence."
        listAriaLabel="Full portfolio project blocks"
      />
      <ContactSection />
    </main>
  )
}

export default Home

