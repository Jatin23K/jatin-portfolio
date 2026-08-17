import type { Skill } from '../../data/skills'

interface SkillBarProps {
  skill: Skill
}

const categoryMeta: Record<Skill['category'], { label: string; color: string }> = {
  data:        { label: 'Data',    color: 'var(--accent2)' },
  ml:          { label: 'ML',      color: 'var(--accent4)' },
  engineering: { label: 'Eng',     color: 'var(--accent3)' },
  ai:          { label: 'AI',      color: 'var(--accent)' },
}

/** Split comma-separated proof text into individual chips */
const proofToChips = (proof: string): string[] =>
  proof
    .split(/[,·]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)

export const SkillBar = ({ skill }: SkillBarProps) => {
  const cat = categoryMeta[skill.category]
  const chips = proofToChips(skill.proof)

  return (
    <div className="card-shell transition-all duration-200 hover:border-accent2/40">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-heading text-xl font-bold tracking-[-0.02em] text-text">{skill.name}</h3>
        <div className="flex shrink-0 items-center gap-2">
          <span
            className="rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-black"
            style={{ background: cat.color }}
          >
            {cat.label}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent2">{skill.label}</span>
        </div>
      </div>

      {/* Proof chips */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded border border-border bg-surface2/80 px-2 py-0.5 font-mono text-[9px] text-text-dim"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}
