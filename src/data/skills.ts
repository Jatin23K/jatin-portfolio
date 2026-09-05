export interface Skill {
  name: string
  label: string
  proof: string
  category: 'data' | 'ml' | 'engineering' | 'ai'
}

export const skills: Skill[] = [
  {
    name: 'AI & Agentic Systems',
    label: 'Primary',
    proof: 'LLMs, RAG, multi-agent orchestration, shipped in TLDR Shield and LaunchMintAI',
    category: 'ai',
  },
  {
    name: 'System Architecture & Design',
    label: 'Primary',
    proof: 'OOP, DSA, system scaling, C.O.R.E. ecosystem design, AXIOM architecture spec',
    category: 'engineering',
  },
  {
    name: 'SQL & Data Pipelines',
    label: 'Strong',
    proof: 'Complex querying, window functions, query optimization, data modeling',
    category: 'data',
  },
  {
    name: 'Python & ML Pipelines',
    label: 'Strong',
    proof: 'FastAPI backends, scikit-learn pipelines, async workflows, production-style ML serving',
    category: 'engineering',
  },
  {
    name: 'Machine Learning',
    label: 'Working',
    proof: 'Classification, clustering, regression, hypothesis testing, Welch t-Test, Memory Intelligence, TikTok Triage',
    category: 'ml',
  },
  {
    name: 'EDA & Statistics',
    label: 'Working',
    proof: 'Statistical testing, probability, data quality validation, evaluation analysis',
    category: 'data',
  },
]
