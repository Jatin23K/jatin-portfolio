import type { ReactNode } from 'react'

type Tone = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'success' | 'muted' | 'surface'

const toneClasses: Record<Tone, string> = {
  accent: 'bg-accent text-black',
  accent2: 'bg-accent2 text-black',
  accent3: 'bg-accent3 text-black',
  accent4: 'bg-accent4 text-black',
  success: 'bg-[#98d982] text-black',
  muted: 'bg-muted text-bg',
  surface: 'bg-surface2 text-text',
}

interface BadgeProps {
  tone?: Tone
  children: ReactNode
  className?: string
}

export const Badge = ({ tone = 'surface', children, className }: BadgeProps) => {
  return (
    <span
      className={[
        'inline-flex items-center rounded-badge px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.11em]',
        toneClasses[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}

