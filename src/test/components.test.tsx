import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Navigation } from '../components/layout/Navigation'
import { ContactSection } from '../components/sections/Contact'
import { ProjectCard } from '../components/ui/ProjectCard'
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

  it('renders project card with coming soon state', () => {
    const project = projects.find((item) => item.id === 'ml-project')
    expect(project).toBeDefined()
    if (!project) {
      return
    }

    render(
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
    expect(screen.queryByText('Live Demo ->')).not.toBeInTheDocument()
  })

  it('renders skill bar proof text', () => {
    render(<SkillBar skill={skills[0]} />)

    expect(screen.getByText('13 modules - window functions, query optimization, transactions')).toBeInTheDocument()
  })

  it('shows missing formspree feedback when form id is not configured', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <ContactSection />
      </MemoryRouter>,
    )

    await user.type(screen.getByLabelText('Name'), 'Jatin')
    await user.type(screen.getByLabelText('Email'), 'jatin@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message ->' }))

    expect(screen.getByText('Form is not configured yet. Email me directly.')).toBeInTheDocument()
  })
})

