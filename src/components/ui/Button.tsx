import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'filled' | 'outlined'
type Size = 'sm' | 'md'

interface SharedProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  to?: string
  href?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>
type AnchorProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>

const getClasses = ({ variant, size, className }: Pick<SharedProps, 'variant' | 'size' | 'className'>) => {
  const base =
    'inline-flex items-center justify-center rounded-md border font-mono uppercase tracking-[0.1em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2 active:scale-[0.98]'
  const sizeClass = size === 'sm' ? 'px-3 py-2 text-[10px]' : 'px-4 py-2.5 text-[11px]'

  const variantClass =
    variant === 'outlined'
      ? 'border-border text-text hover:border-accent2 hover:text-accent2'
      : 'border-accent bg-accent text-black hover:bg-[#f0ff77]'

  return [base, sizeClass, variantClass, className].filter(Boolean).join(' ')
}

export const Button = ({
  children,
  variant = 'filled',
  size = 'md',
  className,
  to,
  href,
  external = false,
  onClick,
  ...rest
}: ButtonProps & AnchorProps) => {
  const classes = getClasses({ variant, size, className })

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined} {...rest}>
      {children}
    </button>
  )
}

