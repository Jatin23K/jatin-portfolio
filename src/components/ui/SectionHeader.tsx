import { useInView } from '../../hooks/useInView'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle: string
}

export const SectionHeader = ({ label, title, subtitle }: SectionHeaderProps) => {
  const { elementRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.18 })

  return (
    <header ref={elementRef} className={`section-reveal ${isInView ? 'is-visible' : ''} mb-10`}>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">[{label}]</p>
      <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.02em] text-text sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base text-text-dim">{subtitle}</p>
    </header>
  )
}

