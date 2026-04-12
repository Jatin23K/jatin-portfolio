import { ContactSection } from '../components/sections/Contact'
import { Hero } from '../components/sections/Hero'
import { ProjectsSection } from '../components/sections/Projects'
import { SkillsSection } from '../components/sections/Skills'
import { VisionSection } from '../components/sections/Vision'
import { skills } from '../data/skills'
import { featuredProjects } from '../utils/projectSelectors'

const Home = () => {
  return (
    <main>
      <Hero />
      <ProjectsSection projects={featuredProjects()} sectionId="projects-overview" showAllCta />
      <SkillsSection skills={skills} />
      <VisionSection />
      <ContactSection />
    </main>
  )
}

export default Home

