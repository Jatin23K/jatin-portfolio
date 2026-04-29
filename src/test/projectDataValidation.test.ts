import { describe, expect, it } from 'vitest'
import { projectDetails } from '../data/projectDetails'
import { projects } from '../data/projects'
import { validateProjects } from '../data/validateProjects'

describe('project data validation', () => {
  it('keeps project records in a deployable state', () => {
    const errors = validateProjects(projects)
    expect(errors).toEqual([])
  })

  it('fails when visible projects share duplicate order values', () => {
    const duplicateOrderProjects = projects.map((project) =>
      project.id === 'launchmint-ai' ? { ...project, order: 1 } : project,
    )
    const errors = validateProjects(duplicateOrderProjects)

    expect(errors).toContain('Duplicate visible project order: 1')
  })

  it('fails when active project KPI metadata is missing', () => {
    const missingKpiProjects = projects.map((project) =>
      project.id === 'launchmint-ai' ? { ...project, primaryKpi: '', kpiDelta: '' } : project,
    )
    const errors = validateProjects(missingKpiProjects)

    expect(errors).toContain('Active project missing primary KPI: launchmint-ai')
    expect(errors).toContain('Active project missing KPI delta: launchmint-ai')
  })

  it('fails when published case study detail content is absent', () => {
    const existing = projectDetails['core-mcp-platform']
    delete (projectDetails as Partial<typeof projectDetails>)['core-mcp-platform']

    try {
      const errors = validateProjects(projects)
      expect(errors).toContain('Published case study missing detail content: core-mcp-platform')
    } finally {
      projectDetails['core-mcp-platform'] = existing
    }
  })
})
