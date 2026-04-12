import type { Skill } from '../../data/skills'
import { siteContent } from '../../data/site'
import { SkillBar } from '../ui/SkillBar'
import { SectionHeader } from '../ui/SectionHeader'

interface SkillsSectionProps {
  skills: Skill[]
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const splitPoint = Math.ceil(skills.length / 2)
  const left = skills.slice(0, splitPoint)
  const right = skills.slice(splitPoint)

  return (
    <section id="skills" className="section-shell section-anchor">
      <div className="container-shell">
        <SectionHeader
          label={siteContent.sections.skills.label}
          title={siteContent.sections.skills.title}
          subtitle={siteContent.sections.skills.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {left.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="space-y-6">
            {right.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

