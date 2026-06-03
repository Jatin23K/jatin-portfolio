export interface Skill {
  name: string
  level: number
  label: string
  proof: string
  category: 'data' | 'ml' | 'engineering' | 'ai'
}

export const skills: Skill[] = [
  {
    name: 'AI & Agentic Systems',
    level: 95,
    label: 'Advanced',
    proof: 'LLMs, RAG, Fine-tuning, Multi-agent orchestration. Scaling ideas into reality using AI.',
    category: 'ai',
  },
  {
    name: 'System Architecture & Design',
    level: 90,
    label: 'Advanced',
    proof: 'OOPs, DSA, system scaling, and structuring AI-generated code into robust pipelines.',
    category: 'engineering',
  },
  {
    name: 'SQL & Data Pipelines',
    level: 85,
    label: 'Advanced',
    proof: 'Complex querying, window functions, query optimization, and data modeling.',
    category: 'data',
  },
  {
    name: 'Python (AI-Assisted)',
    level: 80,
    label: 'Advanced',
    proof: 'Focus on architectural logic over manual syntax. Directing AI to build asynchronous OS components.',
    category: 'engineering',
  },
  {
    name: 'Machine Learning',
    level: 65,
    label: 'Intermediate',
    proof: 'Supervised & unsupervised learning, classification, clustering, regression.',
    category: 'ml',
  },
  {
    name: 'EDA & Statistics',
    level: 65,
    label: 'Intermediate',
    proof: 'Statistical analysis, probability, data quality validation.',
    category: 'data',
  },
  {
    name: 'MLOps & Model Ops',
    level: 45,
    label: 'Growing',
    proof: 'Model validation, pipeline governance, serving, retraining triggers.',
    category: 'engineering',
  },
]
