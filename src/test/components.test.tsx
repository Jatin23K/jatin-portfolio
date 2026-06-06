import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    const project = projects.find((item) => item.id === 'specialized-ml-project')
    expect(project).toBeDefined()
    if (!project) {
      return
    }

    render(
      <MemoryRouter>
        <ProjectBlock project={project} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Planned')).toBeInTheDocument()
    expect(screen.queryByText('Website')).not.toBeInTheDocument()
  })

  it('renders skill bar proof chips', () => {
    render(<SkillBar skill={skills[0]} />)

    // Proof text is now split into chips — assert individual tokens are present
    expect(screen.getByText('13 modules - window functions')).toBeInTheDocument()
    expect(screen.getByText('query optimization')).toBeInTheDocument()
    expect(screen.getByText('transactions')).toBeInTheDocument()
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

