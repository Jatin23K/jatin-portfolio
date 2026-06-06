import { projects, type ProjectStatus } from '../data/projects'

export interface StatusDistribution {
  planned: number
  'in-progress': number
  'field-testing': number
  shipped: number
  vision: number
}

export interface TierDistribution {
  1: number
  2: number
  3: number
  4: number
}

export interface CompletionRate {
  published: number
  total: number
  pct: number
}

export interface KpiCoverage {
  withKpi: number
  total: number
  pct: number
}

export const getStatusDistribution = (): StatusDistribution => {
  const dist: StatusDistribution = { planned: 0, 'in-progress': 0, 'field-testing': 0, shipped: 0, vision: 0 }
  projects.forEach((p) => {
    if (p.isVisible) dist[p.status as ProjectStatus]++
  })
  return dist
}

export const getTierDistribution = (): TierDistribution => {
  const dist: TierDistribution = { 1: 0, 2: 0, 3: 0, 4: 0 }
  projects.forEach((p) => {
    if (p.isVisible) dist[p.tier]++
  })
  return dist
}

export const getCompletionRate = (): CompletionRate => {
  const visible = projects.filter((p) => p.isVisible)
  const published = visible.filter((p) => p.caseStudyPublished).length
  return {
    published,
    total: visible.length,
    pct: Math.round((published / visible.length) * 100),
  }
}

export const getKpiCoverage = (): KpiCoverage => {
  const active = projects.filter(
    (p) => p.isVisible && (p.status === 'in-progress' || p.status === 'field-testing' || p.status === 'shipped'),
  )
  const withKpi = active.filter((p) => p.primaryKpi && p.primaryKpi.trim().length > 0).length
  return {
    withKpi,
    total: active.length,
    pct: active.length > 0 ? Math.round((withKpi / active.length) * 100) : 0,
  }
}

export const getTotalVisibleProjects = (): number =>
  projects.filter((p) => p.isVisible).length

export const getShippedCount = (): number =>
  projects.filter((p) => p.isVisible && p.status === 'shipped').length

export const getInProgressCount = (): number =>
  projects.filter((p) => p.isVisible && (p.status === 'in-progress' || p.status === 'field-testing')).length
