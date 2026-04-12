import type { Skill } from '../../data/skills'
import { useInView } from '../../hooks/useInView'

interface SkillBarProps {
  skill: Skill
}

export const SkillBar = ({ skill }: SkillBarProps) => {
  const { elementRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <div ref={elementRef} className="card-shell">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-heading text-xl font-bold tracking-[-0.02em] text-text">{skill.name}</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent2">{skill.label}</span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface2" role="presentation">
        <div
          className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
          style={{ width: `${isInView ? skill.level : 0}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-dim">{skill.level}%</span>
      </div>

      <p className="mt-3 text-xs text-text-dim">{skill.proof}</p>
    </div>
  )
}

