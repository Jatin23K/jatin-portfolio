import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Navigation } from '../components/layout/Navigation'
import { ContactSection } from '../components/sections/Contact'
import { ProjectBlock } from '../components/ui/ProjectBlock'
import { SkillBar } from '../components/ui/SkillBar'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

describe('component smoke tests', () => {
  it('renders primary navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )

    expect(screen.getAllByRole('link', { name: 'Projects' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThan(0)
  })

  it('renders project card with planned state', () => {
    const plannedMock = {
      ...projects[0],
      status: 'planned' as const,
      links: {},
    }

    render(
      <MemoryRouter>
        <ProjectBlock project={plannedMock} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Planned')).toBeInTheDocument()
    expect(screen.queryByText('Website')).not.toBeInTheDocument()
  })


  it('renders skill bar proof chips', () => {
    render(<SkillBar skill={skills[0]} />)

    expect(screen.getByText('LLMs')).toBeInTheDocument()
    expect(screen.getByText('RAG')).toBeInTheDocument()
    expect(screen.getByText('multi-agent orchestration')).toBeInTheDocument()
  })

  it('renders contact section with email and social links', () => {
    render(
      <MemoryRouter>
        <ContactSection />
      </MemoryRouter>,
    )

    expect(screen.getByText('jatinkumar20802@gmail.com')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

})

