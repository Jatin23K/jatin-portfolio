import { siteContent } from '../../data/site'
import { trackEvent } from '../../utils/analytics'
import { Button } from '../ui/Button'

/* ─── SQL syntax highlighter (no library) ─────────────────── */
const SQL_KEYWORDS = new Set([
  'SELECT', 'FROM', 'WHERE', 'GROUP', 'BY', 'ORDER', 'HAVING', 'JOIN',
  'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'AS', 'AND', 'OR', 'NOT',
  'IN', 'IS', 'NULL', 'DISTINCT', 'LIMIT', 'OFFSET', 'WITH', 'CASE',
  'WHEN', 'THEN', 'ELSE', 'END', 'OVER', 'PARTITION', 'INTERVAL',
])
const SQL_FUNCTIONS = new Set([
  'SUM', 'COUNT', 'AVG', 'MAX', 'MIN', 'RANK', 'ROW_NUMBER', 'DENSE_RANK',
  'CURRENT_DATE', 'COALESCE', 'CAST', 'CONCAT',
])

type TokenType = 'keyword' | 'function' | 'string' | 'number' | 'operator' | 'plain'

interface Token {
  type: TokenType
  text: string
}

const tokeniseLine = (line: string): Token[] => {
  const tokens: Token[] = []
  let i = 0
  while (i < line.length) {
    if (line[i] === "'") {
      let j = i + 1
      while (j < line.length && line[j] !== "'") j++
      tokens.push({ type: 'string', text: line.slice(i, j + 1) })
      i = j + 1
      continue
    }
    if (/[a-zA-Z_]/.test(line[i])) {
      let j = i
      while (j < line.length && /[\w]/.test(line[j])) j++
      const word = line.slice(i, j)
      const upper = word.toUpperCase()
      tokens.push({
        type: SQL_KEYWORDS.has(upper) ? 'keyword' : SQL_FUNCTIONS.has(upper) ? 'function' : 'plain',
        text: word,
      })
      i = j
      continue
    }
    if (/\d/.test(line[i])) {
      let j = i
      while (j < line.length && /[\d.]/.test(line[j])) j++
      tokens.push({ type: 'number', text: line.slice(i, j) })
      i = j
      continue
    }
    if (/[(),.;*=><!]/.test(line[i])) {
      tokens.push({ type: 'operator', text: line[i] })
      i++
      continue
    }
    let j = i
    while (j < line.length && !/[a-zA-Z_'0-9(),.;*=><!]/.test(line[j])) j++
    tokens.push({ type: 'plain', text: line.slice(i, j) })
    i = j
  }
  return tokens
}

const tokenColour: Record<TokenType, string> = {
  keyword:  'var(--accent2)',
  function: 'var(--accent)',
  string:   'var(--accent3)',
  number:   'var(--accent4)',
  operator: 'var(--muted)',
  plain:    'var(--text)',
}

const HighlightedLine = ({ line, isLast }: { line: string; isLast: boolean }) => {
  const tokens = tokeniseLine(line)
  return (
    <span>
      {tokens.map((tok, idx) => (
        <span key={idx} style={{ color: tokenColour[tok.type] }}>{tok.text}</span>
      ))}
      {isLast && (
        <span
          className="ml-px inline-block h-[0.85em] w-[2px] translate-y-[1px] align-middle"
          style={{ background: 'var(--accent)', animation: 'cursor-blink 1.1s step-end infinite' }}
        />
      )}
    </span>
  )
}

export const Hero = () => {
  const delays = [0, 120, 240, 360]
  const lines = siteContent.hero.sqlSnippet

  return (
    <section id="top" className="section-anchor flex min-h-screen items-center pt-24" aria-labelledby="hero-title">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <span
            className="animate-fade-up inline-flex items-center rounded-badge bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-black"
            style={{ animationDelay: `${delays[0]}ms` }}
          >
            {siteContent.hero.badge}
          </span>

          <h1
            id="hero-title"
            className="animate-fade-up mt-6 font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.02em] text-text sm:text-6xl lg:text-[5rem]"
            style={{ animationDelay: `${delays[1]}ms` }}
          >
            {siteContent.hero.headlineTop}
            <br />
            <span className="text-accent">{siteContent.hero.headlineAccent}</span>
            <br />
            <span className="text-accent2">&amp; {siteContent.hero.headlineAccent2}</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-text-dim"
            style={{ animationDelay: `${delays[2]}ms` }}
          >
            {siteContent.hero.subline}
          </p>

          <ul
            className="animate-fade-up mt-8 grid gap-3 sm:grid-cols-3"
            style={{ animationDelay: `${delays[3]}ms` }}
            aria-label="Portfolio summary stats"
          >
            {siteContent.hero.stats.map((stat) => (
              <li key={stat.label} className="card-shell border-t-2 border-t-accent2 p-4">
                <p className="font-heading text-2xl font-extrabold text-text">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.11em] text-text-dim">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/projects" onClick={() => trackEvent('projects_cta_click', { source: 'hero' })}>
              {siteContent.hero.primaryCta}
            </Button>
            <Button
              variant="outlined"
              href={siteContent.brand.resumeUrl}
              external={siteContent.brand.resumeUrl.startsWith('http')}
              onClick={() => trackEvent('resume_click', { source: 'hero' })}
            >
              {siteContent.hero.secondaryCta}
            </Button>
          </div>
        </div>

        {/* SQL card — editor chrome + syntax highlighting */}
        <div className="hidden rotate-[-2deg] overflow-hidden rounded-xl border border-accent2/30 bg-surface/90 shadow-[0_0_40px_rgba(71,200,255,0.06)] lg:block">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border/60 bg-surface2 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
            <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              {siteContent.hero.sqlSnippetTitle}
            </span>
          </div>
          {/* Code area */}
          <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-text">
            {lines.map((line, index) => (
              <div key={index} className="flex">
                <span className="mr-4 w-5 shrink-0 select-none text-right text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <HighlightedLine line={line} isLast={index === lines.length - 1} />
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  )
}
