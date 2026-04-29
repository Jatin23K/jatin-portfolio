import type { Project } from './projects'
import { projectDetails } from './projectDetails'

const hasText = (value?: string): boolean => Boolean(value && value.trim().length > 0)

interface ValidateProjectsOptions {
  requireKpiForActiveProjects?: boolean
}

const DEFAULT_OPTIONS: Required<ValidateProjectsOptions> = {
  requireKpiForActiveProjects: true,
}

export const validateProjects = (
  projects: Project[],
  options: ValidateProjectsOptions = DEFAULT_OPTIONS,
): string[] => {
  const mergedOptions: Required<ValidateProjectsOptions> = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  const errors: string[] = []
  const ids = new Set<string>()
  const visibleOrders = new Set<number>()

  projects.forEach((project) => {
    if (ids.has(project.id)) {
      errors.push(`Duplicate project id: ${project.id}`)
      return
    }
    ids.add(project.id)

    if (project.isVisible) {
      if (visibleOrders.has(project.order)) {
        errors.push(`Duplicate visible project order: ${project.order}`)
      } else {
        visibleOrders.add(project.order)
      }
    }

    if (project.featured && project.status === 'planned') {
      errors.push(`Featured project cannot be planned: ${project.id}`)
    }

    if (project.metrics.length === 0) {
      errors.push(`Project must include at least one metric: ${project.id}`)
    }

    if (project.status === 'shipped') {
      if (!hasText(project.links.demo)) {
        errors.push(`Shipped project missing demo link: ${project.id}`)
      }
      if (!hasText(project.links.github)) {
        errors.push(`Shipped project missing GitHub link: ${project.id}`)
      }
      if (project.metrics.length < 2) {
        errors.push(`Shipped project must include at least two metrics: ${project.id}`)
      }
      if (!project.caseStudyPublished) {
        errors.push(`Shipped project must publish case study: ${project.id}`)
      }
    }

    if (project.status === 'planned' && project.targetMilestone === undefined) {
      errors.push(`Planned project must include target milestone: ${project.id}`)
    }

    if (
      mergedOptions.requireKpiForActiveProjects &&
      (project.status === 'in-progress' || project.status === 'shipped')
    ) {
      if (!hasText(project.primaryKpi)) {
        errors.push(`Active project missing primary KPI: ${project.id}`)
      }
      if (!hasText(project.kpiDelta)) {
        errors.push(`Active project missing KPI delta: ${project.id}`)
      }
    }

    if (project.caseStudyPublished && !projectDetails[project.id]) {
      errors.push(`Published case study missing detail content: ${project.id}`)
    }
  })

  return errors
}
