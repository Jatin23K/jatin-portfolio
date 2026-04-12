import { projects, type Project } from '../data/projects'

const hasText = (value?: string): boolean => typeof value === 'string' && value.trim().length > 0

export const featuredProjects = (): Project[] => projects.filter((project) => project.featured)

export const getProjectById = (id: string): Project | undefined =>
  projects.find((project) => project.id === id)

export const shouldShowProjectAction = (
  project: Project,
  action: 'demo' | 'github' | 'caseStudy',
): boolean => {
  if (action === 'caseStudy') {
    return hasText(project.caseStudy)
  }

  if (project.status === 'coming-soon' || project.status === 'vision') {
    return false
  }

  return hasText(project[action])
}

export const isComingSoonProject = (project: Project): boolean => project.status === 'coming-soon'

