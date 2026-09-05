import { projects, type Project } from '../data/projects'
import { projectDetails } from '../data/projectDetails'

const hasText = (value?: string): boolean => typeof value === 'string' && value.trim().length > 0

const projectSort = (left: Project, right: Project): number => {
  if (left.order !== right.order) {
    return left.order - right.order
  }

  const titleComparison = left.title.localeCompare(right.title)
  if (titleComparison !== 0) {
    return titleComparison
  }

  return left.id.localeCompare(right.id)
}

export const visibleProjects = (): Project[] =>
  projects
    .filter((project) => project.isVisible)
    .sort(projectSort)

export const homepageProjects = (): Project[] =>
  projects
    .filter((project) => project.isVisible && project.featured)
    .sort((left, right) => {
      const leftHomeOrder = left.homeOrder ?? left.order
      const rightHomeOrder = right.homeOrder ?? right.order
      if (leftHomeOrder !== rightHomeOrder) {
        return leftHomeOrder - rightHomeOrder
      }

      return projectSort(left, right)
    })

export const aiSystems = (): Project[] =>
  visibleProjects().filter((p) => ['tldr-shield', 'launchmint-ai', 'leap-axiom'].includes(p.id))

export const aiAppProjects = (): Project[] =>
  visibleProjects().filter((p) => ['tldr-shield', 'launchmint-ai'].includes(p.id))

export const axiomProjects = (): Project[] =>
  visibleProjects().filter((p) => ['leap-axiom'].includes(p.id))

export const traditionalDataSystems = (): Project[] =>
  visibleProjects().filter((p) => ['tiktok-claim-classification', 'core-memory-intelligence'].includes(p.id))

export const pipelineProjects = (): Project[] =>
  visibleProjects().filter((p) => ['core-sovereign-bridge'].includes(p.id))

export const featuredProjects = (): Project[] => homepageProjects()


export const getProjectById = (id: string): Project | undefined =>
  projects.find((project) => project.id === id)

export const shouldShowProjectAction = (
  project: Project,
  action: 'demo' | 'github' | 'caseStudy' | 'loom',
): boolean => {
  if (hasText(project.links[action])) {
    return true
  }

  if (action === 'caseStudy') {
    return project.caseStudyPublished && Boolean(projectDetails[project.id])
  }

  if (project.status === 'planned') {
    return false
  }

  return false
}

export const isPlannedProject = (project: Project): boolean => project.status === 'planned'


