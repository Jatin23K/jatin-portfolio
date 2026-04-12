import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'
import {
  featuredProjects,
  getProjectById,
  isComingSoonProject,
  shouldShowProjectAction,
} from '../utils/projectSelectors'

describe('project selectors', () => {
  it('returns featured projects only', () => {
    const featured = featuredProjects()
    expect(featured.length).toBe(3)
    expect(featured.every((project) => project.featured)).toBe(true)
  })

  it('returns project by id', () => {
    const project = getProjectById('tldr-shield')
    expect(project?.title).toBe('TLDR Shield')
  })

  it('hides demo/github actions for coming soon cards', () => {
    const project = projects.find((item) => item.id === 'ml-project')
    expect(project).toBeDefined()
    if (!project) {
      return
    }

    expect(isComingSoonProject(project)).toBe(true)
    expect(shouldShowProjectAction(project, 'demo')).toBe(false)
    expect(shouldShowProjectAction(project, 'github')).toBe(false)
  })
})

