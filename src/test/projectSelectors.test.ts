import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'
import {
  featuredProjects,
  getProjectById,
  homepageProjects,
  isPlannedProject,
  visibleProjects,
  shouldShowProjectAction,
} from '../utils/projectSelectors'

describe('project selectors', () => {
  it('returns visible projects in numeric order', () => {
    const visible = visibleProjects()
    expect(visible.length).toBe(7)
    expect(visible.every((project) => project.isVisible)).toBe(true)
    expect(visible.map((project) => project.id)).toEqual([
      'tldr-shield',
      'launchmint-ai',
      'leap-axiom',
      'specialized-ml-project',
      'sql-analytics-project',
      'end-to-end-ml-project',
      'core-mcp-platform',
    ])
  })

  it('returns featured/homepage projects sorted by home order fallback', () => {
    const featured = featuredProjects()
    const homepage = homepageProjects()
    expect(featured.map((project) => project.id)).toEqual(homepage.map((project) => project.id))
    expect(homepage.length).toBe(3)
    expect(homepage.every((project) => project.featured)).toBe(true)
    expect(homepage.map((project) => project.id)).toEqual(['tldr-shield', 'launchmint-ai', 'leap-axiom'])
  })

  it('returns project by id', () => {
    const project = getProjectById('tldr-shield')
    expect(project?.title).toBe('TLDR Shield')
  })

  it('hides demo/github actions for planned cards', () => {
    const project = projects.find((item) => item.id === 'specialized-ml-project')
    expect(project).toBeDefined()
    if (!project) {
      return
    }

    expect(isPlannedProject(project)).toBe(true)
    expect(shouldShowProjectAction(project, 'demo')).toBe(false)
    expect(shouldShowProjectAction(project, 'github')).toBe(false)
  })

  it('hides case study action when caseStudyPublished is false', () => {
    const project = projects.find((item) => item.id === 'specialized-ml-project')
    expect(project).toBeDefined()
    if (!project) {
      return
    }

    expect(project.caseStudyPublished).toBe(false)
    expect(shouldShowProjectAction(project, 'caseStudy')).toBe(false)
  })
})

