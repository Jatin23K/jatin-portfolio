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
    expect(visible.length).toBe(6)
    expect(visible.every((project) => project.isVisible)).toBe(true)
    expect(visible.map((project) => project.id)).toEqual([
      'core-memory-intelligence',
      'tiktok-claim-classification',
      'launchmint-ai',
      'tldr-shield',
      'leap-axiom',
      'core-sovereign-bridge',
    ])
  })

  it('returns featured/homepage projects sorted by home order fallback', () => {
    const featured = featuredProjects()
    const homepage = homepageProjects()
    expect(featured.map((project) => project.id)).toEqual(homepage.map((project) => project.id))
    expect(homepage.length).toBe(3)
    expect(homepage.every((project) => project.featured)).toBe(true)
    expect(homepage.map((project) => project.id)).toEqual([
      'core-memory-intelligence',
      'launchmint-ai',
      'tldr-shield',
    ])
  })

  it('returns project by id', () => {
    const project = getProjectById('tldr-shield')
    expect(project?.title).toBe('TLDR Shield')
  })

  it('hides demo/github actions for planned cards', () => {
    const plannedMock = {
      ...projects[0],
      status: 'planned' as const,
      links: {},
    }
    expect(isPlannedProject(plannedMock)).toBe(true)
    expect(shouldShowProjectAction(plannedMock, 'demo')).toBe(false)
    expect(shouldShowProjectAction(plannedMock, 'github')).toBe(false)
  })

  it('hides case study action when caseStudyPublished is false', () => {
    const unpublishedMock = {
      ...projects[0],
      caseStudyPublished: false,
    }
    expect(shouldShowProjectAction(unpublishedMock, 'caseStudy')).toBe(false)
  })
})


