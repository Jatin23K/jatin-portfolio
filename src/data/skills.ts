export interface Skill {
  name: string
  level: number
  label: string
  proof: string
  category: 'data' | 'ml' | 'engineering' | 'ai'
}

export const skills: Skill[] = [
  {
    name: 'SQL',
    level: 85,
    label: 'Advanced',
    proof: '13 modules - window functions, query optimization, transactions',
    category: 'data',
  },
  {
    name: 'Python',
    level: 70,
    label: 'Intermediate',
    proof: 'Pandas, NumPy, scikit-learn, FastAPI',
    category: 'engineering',
  },
  {
    name: 'Machine Learning',
    level: 65,
    label: 'Intermediate',
    proof: 'Supervised + Unsupervised - classification, clustering, regression',
    category: 'ml',
  },
  {
    name: 'EDA + Statistics',
    level: 65,
    label: 'Intermediate',
    proof: 'Statistical analysis, probability, data quality validation',
    category: 'data',
  },
  {
    name: 'AI / Agents',
    level: 50,
    label: 'Growing',
    proof: 'RAG pipelines, vector databases, multi-agent orchestration',
    category: 'ai',
  },
  {
    name: 'React + TypeScript',
    level: 65,
    label: 'Intermediate',
    proof: 'Frontend for data products and browser extensions',
    category: 'engineering',
  },
]

