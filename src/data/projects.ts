export interface Project {
  id: string
  tier: 1 | 2 | 3 | 4
  title: string
  tagline: string
  problem: string
  solution: string
  impact: string
  tech: string[]
  status: 'live' | 'in-progress' | 'coming-soon' | 'vision'
  demo?: string
  github?: string
  caseStudy?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'tldr-shield',
    tier: 1,
    title: 'TLDR Shield',
    tagline: 'Privacy risk scanner for Terms & Conditions',
    problem: 'Nobody reads T&C documents. Privacy risks go completely unnoticed.',
    solution:
      'AI browser extension that scans T&C against 6 privacy pillars and returns an instant risk score.',
    impact: 'Privacy risk assessment in seconds instead of hours of reading.',
    tech: ['React', 'TypeScript', 'NVIDIA NIM', 'Browser Extension', 'Prompt Engineering'],
    status: 'in-progress',
    demo: '',
    github: '',
    caseStudy: '',
    featured: true,
  },
  {
    id: 'launchmint-ai',
    tier: 2,
    title: 'LaunchMintAI',
    tagline: 'Forensic startup idea validator',
    problem: 'Founders waste months building products nobody wants.',
    solution:
      'AI research engine that tears apart business ideas using real market data, competitor analysis, and adversarial scrutiny.',
    impact: 'Idea validation time reduced from weeks to minutes.',
    tech: ['FastAPI', 'React', 'Gemini 2.0', 'ChromaDB', 'Python'],
    status: 'in-progress',
    demo: '',
    github: '',
    caseStudy: '',
    featured: true,
  },
  {
    id: 'mcp-analysis-engine',
    tier: 2,
    title: 'Automated DS Analysis Engine',
    tagline: 'Upload data + context, get instant analytical insights',
    problem: 'DS teams waste hours on repetitive EDA setup for every new dataset.',
    solution:
      'Automated analysis pipeline - feed a dataset and business context, get AI-generated questions, surface exploration, and persistent analytical memory.',
    impact: 'EDA setup time reduced from hours to minutes.',
    tech: ['FastAPI', 'React', 'Vector DB', 'Python', 'SSE Streaming'],
    status: 'in-progress',
    demo: '',
    github: '',
    caseStudy: '',
    featured: true,
  },
  {
    id: 'ml-project',
    tier: 3,
    title: 'End-to-End ML Project',
    tagline: 'Coming soon',
    problem: 'TBD',
    solution: 'TBD',
    impact: 'TBD',
    tech: ['Python', 'scikit-learn', 'Pandas', 'SQL'],
    status: 'coming-soon',
    featured: false,
  },
  {
    id: 'rag-project',
    tier: 3,
    title: 'RAG / Agent System',
    tagline: 'Coming soon',
    problem: 'TBD',
    solution: 'TBD',
    impact: 'TBD',
    tech: ['Vector DB', 'LangChain', 'FastAPI', 'React'],
    status: 'coming-soon',
    featured: false,
  },
]

