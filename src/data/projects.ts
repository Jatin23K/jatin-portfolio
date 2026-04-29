export type ProjectStatus = 'planned' | 'in-progress' | 'shipped' | 'vision'

export interface ProjectMetric {
  label: string
  value: string
}

export interface ProjectLinks {
  demo?: string
  github?: string
  caseStudy?: string
}

export interface Project {
  id: string
  tier: 1 | 2 | 3 | 4
  title: string
  oneLineOutcome?: string
  primaryKpi?: string
  kpiDelta?: string
  resumeBullet?: string
  tagline: string
  problem: string
  solution: string
  impact: string
  tech: string[]
  status: ProjectStatus
  metrics: ProjectMetric[]
  links: ProjectLinks
  order: number
  homeOrder?: number
  isVisible: boolean
  caseStudyPublished: boolean
  targetMilestone?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'tldr-shield',
    tier: 1,
    title: 'TLDR Shield',
    oneLineOutcome:
      'Privacy-risk scanner for terms and conditions that surfaces high-risk clauses across six privacy pillars.',
    primaryKpi: 'Review Time Reduction',
    kpiDelta: '~90%',
    resumeBullet:
      'Built an AI privacy-risk scanner for policy documents, reducing review time by about 90% while preserving clause-level explainability.',
    tagline: 'Privacy risk scanner for Terms & Conditions',
    problem: 'Nobody reads T&C documents. Privacy risks go completely unnoticed.',
    solution:
      'AI browser extension that scans T&C against 6 privacy pillars and returns an instant risk score.',
    impact: 'Privacy risk assessment in seconds instead of hours of reading.',
    tech: ['React', 'TypeScript', 'NVIDIA NIM', 'Browser Extension', 'Prompt Engineering'],
    status: 'in-progress',
    metrics: [
      { label: 'Policies Parsed', value: '250+' },
      { label: 'Review Time Reduction', value: '~90%' },
    ],
    links: {},
    order: 1,
    homeOrder: 1,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q3 2026',
    featured: true,
  },
  {
    id: 'launchmint-ai',
    tier: 2,
    title: 'LaunchMintAI',
    oneLineOutcome:
      'Forensic startup intelligence engine that compresses market validation into a single evidence-backed research pass.',
    primaryKpi: 'Validation Runtime',
    kpiDelta: '< 10 min',
    resumeBullet:
      'Built a grounded startup validation engine that aggregates 100+ sources and produces decision briefs in under 10 minutes.',
    tagline: 'Forensic startup idea validator',
    problem: 'Founders waste months building products nobody wants.',
    solution:
      'AI research engine that tears apart business ideas using real market data, competitor analysis, and adversarial scrutiny.',
    impact: 'Idea validation time reduced from weeks to minutes.',
    tech: ['FastAPI', 'React', 'Gemini 2.0', 'ChromaDB', 'Python'],
    status: 'in-progress',
    metrics: [
      { label: 'Validation Runtime', value: '< 10 min' },
      { label: 'Research Sources Aggregated', value: '100+' },
    ],
    links: {},
    order: 2,
    homeOrder: 2,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: true,
  },
  {
    id: 'leap-axiom',
    tier: 2,
    title: 'L.E.A.P / AXIOM',
    oneLineOutcome:
      'Multi-agent + RAG data copilot that moves from raw datasets to evidence-backed analytical recommendations.',
    primaryKpi: 'Analysis Setup Time',
    kpiDelta: 'Target -80%',
    resumeBullet:
      'Built a multi-agent data copilot with RAG and SQL specialists to automate profiling, diagnostics, and recommendation workflows.',
    tagline: 'Autonomous Data Intelligence Copilot',
    problem: 'Analysts lose time moving from raw data to explainable, decision-grade findings.',
    solution:
      'Agent-based workflow with planner, SQL specialist, analysis and validation passes backed by Qdrant retrieval.',
    impact: 'Data-to-decision cycle compressed through reusable agent workflows and evidence traces.',
    tech: ['Python', 'FastAPI', 'Qdrant', 'RAG', 'Multi-Agent Systems'],
    status: 'in-progress',
    metrics: [
      { label: 'Components Validated', value: '7/7' },
      { label: 'Analysis Workflow', value: 'In Progress' },
    ],
    links: {},
    order: 3,
    homeOrder: 3,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: true,
  },
  {
    id: 'specialized-ml-project',
    tier: 3,
    title: 'Specialized ML Project',
    oneLineOutcome: 'Domain-focused machine learning system tuned for a high-leverage business KPI.',
    primaryKpi: 'Primary Domain KPI',
    kpiDelta: 'Target +15% to +30%',
    resumeBullet:
      'Designing a specialized ML system with robust validation and segment diagnostics to drive measurable domain KPI uplift.',
    tagline: 'High-depth domain modeling with rigorous evaluation',
    problem: 'High-impact domain decisions need more precise, segment-aware predictions.',
    solution:
      'Train and evaluate domain-tuned models with leakage controls, stability checks, and deployment-oriented monitoring.',
    impact: 'Expected improvement in the primary KPI with stronger reliability across critical segments.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'Feature Engineering', 'Model Evaluation'],
    status: 'planned',
    metrics: [{ label: 'Milestone', value: 'Problem Definition' }],
    links: {},
    order: 4,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q4 2026',
    featured: false,
  },
  {
    id: 'sql-analytics-project',
    tier: 3,
    title: 'SQL Analytics Project',
    oneLineOutcome:
      'Advanced analytics system using SQL-first modeling for fast, decision-grade business reporting.',
    primaryKpi: 'Query Runtime (p95)',
    kpiDelta: 'Target -40% to -60%',
    resumeBullet:
      'Building a SQL analytics system with window functions, cohort analysis, and query optimization for faster business reporting.',
    tagline: 'SQL-first decision intelligence',
    problem: 'Business reporting pipelines are slow and not reusable across stakeholder questions.',
    solution: 'Design warehouse-grade analytical SQL patterns with optimization and reconciliation layers.',
    impact: 'Expected runtime and reporting-turnaround improvements for recurring analytics workflows.',
    tech: ['SQL', 'PostgreSQL', 'Window Functions', 'Query Optimization', 'Data Modeling'],
    status: 'planned',
    metrics: [{ label: 'Milestone', value: 'Schema and KPI Mapping' }],
    links: {},
    order: 5,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q4 2026',
    featured: false,
  },
  {
    id: 'end-to-end-ml-project',
    tier: 3,
    title: 'End-to-End ML Project',
    oneLineOutcome:
      'General supervised ML pipeline covering data prep, baselines, model tuning, and production-ready evaluation.',
    primaryKpi: 'Prediction Quality',
    kpiDelta: 'Target +10% to +20%',
    resumeBullet:
      'Building a full ML lifecycle project with reproducible training, model comparison, and deployment readiness checks.',
    tagline: 'Generalized ML pipeline with reproducible delivery',
    problem: 'Teams need a repeatable ML workflow that moves from baseline to deployable outputs reliably.',
    solution:
      'Implement an end-to-end supervised pipeline with strict split strategy, baseline comparisons, and model governance.',
    impact: 'Expected measurable prediction-quality uplift with repeatable retraining and evaluation flow.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'Model Validation', 'MLOps Basics'],
    status: 'planned',
    metrics: [{ label: 'Milestone', value: 'Baseline Construction' }],
    links: {},
    order: 6,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q1 2027',
    featured: false,
  },
  {
    id: 'core-mcp-platform',
    tier: 4,
    title: 'C.O.R.E + MCP Platform',
    oneLineOutcome:
      'Umbrella platform connecting independent AI/DS projects through ingestion points, validation contracts, and governance controls.',
    primaryKpi: 'Integration Time / Project',
    kpiDelta: 'Target -50%',
    resumeBullet:
      'Architected an umbrella integration layer with MCP services for quality, fairness, and human intervention across projects.',
    tagline: 'Umbrella orchestration layer for unified DS/AI operations',
    problem: 'Independent projects create fragmented pipelines, duplicate validations, and inconsistent governance.',
    solution:
      'Define ingestion contracts and shared MCP services for quality validation, fairness checks, and intervention workflows.',
    impact: 'Expected faster project onboarding and more reliable cross-project quality controls.',
    tech: ['FastAPI', 'MCP', 'Python', 'Data Governance', 'System Design'],
    status: 'in-progress',
    metrics: [
      { label: 'MCP Components', value: '7' },
      { label: 'Component Validation', value: '7/7 pass' },
    ],
    links: {},
    order: 7,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q1 2027',
    featured: false,
  },
]

