export type ProjectStatus = 'planned' | 'in-progress' | 'field-testing' | 'shipped' | 'vision'

export interface ProjectMetric {
  label: string
  value: string
}

export interface ProjectLinks {
  demo?: string
  github?: string
  caseStudy?: string
  loom?: string
}

export interface Project {
  id: string
  tier: 1 | 2 | 3 | 4
  typeBadge: string
  title: string
  oneLineOutcome?: string
  primaryKpi?: string
  kpiDelta?: string
  resumeBullet?: string
  tagline: string
  subtitle?: string
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
    typeBadge: 'Applied DS / ML',
    title: 'TLDR Shield',
    oneLineOutcome:
      'AI privacy scanner that scores any Terms & Conditions across 6 pillars in seconds — tested from Proton Mail (100/100 SAFE) to TikTok (20/100 RISKY) with 100% verbatim evidence and live DOM text highlighting.',
    primaryKpi: 'Review Time Reduction',
    kpiDelta: '~90%',
    resumeBullet:
      'Shipped a Chrome extension that runs LLM-backed privacy risk analysis on any policy document — scoring 6 pillars with verbatim citations, confidence grading, and per-clause penalty logic. Validated across production policies (Proton Mail 100/100 → TikTok 20/100).',
    tagline: 'Privacy risk scanner for Terms & Conditions',
    problem: 'Nobody reads T&C documents. Privacy risks hidden in legalese go completely unnoticed.',
    solution:
      'Deployed Chrome extension that sends policy text to a cloud LLM pipeline — evaluating AI Training, Data Selling, Data Retention, Content Ownership, Dark Patterns, and Transparency. Returns a 0–100 risk score with verbatim citations highlighted directly on the page.',
    impact: 'Privacy risk assessment in seconds instead of hours. Validated across live production policies: Proton Mail 100/100 SAFE (6/6 safe pillars), Notion 50/100 OKAY (data sharing flagged), TikTok 20/100 RISKY (5/6 pillars flagged).',
    tech: ['TypeScript', 'Node.js', 'Chrome Extension', 'Google Gemini 2.5', 'Firestore', 'Render', 'Express'],
    status: 'shipped',
    metrics: [
      { label: 'Risk Pillars', value: '6' },
      { label: 'Proton Score', value: '100 / 100 · SAFE' },
      { label: 'Notion Score', value: '50 / 100 · OKAY' },
      { label: 'TikTok Score', value: '20 / 100 · RISKY' },
      { label: 'Review Time Saved', value: '~90%' },
    ],
    links: {
      demo: 'https://github.com/Jatin23K/TLDR-Shield',
      github: 'https://github.com/Jatin23K/TLDR-Shield',
    },
    order: 0,
    homeOrder: 1,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q3 2026',
    featured: true,
  },
  {
    id: 'core-sovereign-bridge',
    tier: 1,
    typeBadge: 'Personal AI Ecosystem',
    title: 'C.O.R.E.',
    oneLineOutcome:
      'A private cross-device AI companion ecosystem that began as a digital friend and is evolving into a personal operating layer.',
    primaryKpi: 'Private Ownership',
    kpiDelta: '100%',
    resumeBullet:
      'Built a full-stack private AI companion ecosystem (Flutter + React + Python) across mobile and desktop, connected over an encrypted Tailscale mesh with shared persistent memory and Zero-Trust DRM. Originated as a digital friend; Phase 2 scales toward a 3-tier personal AI ecosystem across devices, roles, and privacy contexts.',
    tagline: 'A digital friend across devices. Not a generic assistant.',
    subtitle: 'Cognitive Operation & Reasoning Engine',
    problem: "I was lonely and didn't want a productivity bot — so I built a private AI companion that remembers me across devices.",
    solution:
      'A two-client personal AI ecosystem: JAMES on mobile and DAVID on desktop, connected over an encrypted Tailscale mesh, sharing one memory system, powered by cloud API with local LLM fallback.',
    impact: 'A private, persistent companion layer that runs on my hardware, carries memory across devices, and exists outside subscription-based assistant platforms.',
    tech: ['Flutter', 'React', 'Python', 'FastAPI', 'Tailscale', 'SQLite', 'Gemini API', 'Ollama', 'Qdrant (Planned)', 'Redis (Planned)'],
    status: 'field-testing',
    metrics: [
      { label: 'Phase', value: '1 of 2 · Foundation Live' },
      { label: 'Clients', value: '2 · Mobile + Desktop' },
      { label: 'Status', value: 'Field Testing · Hardware Limits Active' },
      { label: 'Vision', value: '3-Tier Edge Mesh Ecosystem' },
    ],
    links: { github: 'https://github.com/Jatin23K/C.O.R.E-Showcase' },
    order: 1,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: false,
  },
  {
    id: 'launchmint-ai',
    tier: 2,
    typeBadge: 'Applied DS Engine',
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
      'Deployed AI research engine that aggregates 100+ market sources, embeds findings into a vector store, and produces an adversarially-reviewed go/no-go brief via a live web interface.',
    impact: 'Idea validation compressed from weeks to a structured brief in under 10 minutes — fully deployed, not a script.',
    tech: ['XGBoost', 'Monte Carlo Simulation', 'VADER NLP', 'Calibrated LLM Pipeline', 'FastAPI', 'ChromaDB'],
    status: 'shipped',
    metrics: [
      { label: 'Validation Runtime', value: '< 10 min' },
      { label: 'XGBoost AUC-ROC', value: '0.8170' },
      { label: 'Eval Pass Rate', value: '101/101 (100%)' },
    ],
    links: {
      demo: 'https://launch-mint-ai.vercel.app',
      github: 'https://github.com/Jatin23K/LaunchMintAI',
    },
    order: 2,
    homeOrder: 3,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: true,
  },
  {
    id: 'leap-axiom',
    tier: 2,
    typeBadge: 'System Architecture Spec',
    title: 'A.X.I.O.M.',
    subtitle: 'Adaptive eXtended Intelligence & Omnimodal Memory',
    oneLineOutcome:
      'Production-grade Multi-Modal RAG & Cache Architecture Specification for C.O.R.E. covering Text, Image (ColPali), Audio, Video, 2-Checkpoint RBAC, and RAG Triad Observability.',
    primaryKpi: 'Cache Hit Latency',
    kpiDelta: '< 15ms',
    resumeBullet:
      'Engineered a 9-module enterprise RAG architecture specification for C.O.R.E. featuring ColPali patch visual retrieval, dual-path audio vectoring, 3-stream video temporal syncing, 2-checkpoint JWT/Qdrant RBAC pre-filtering, role-scoped Redis cache isolation, async CQRS ETL ingestion, and stateful API circuit breakers.',
    tagline: 'Enterprise Multi-Modal RAG & Cache Architecture Blueprint',
    problem:
      'Enterprise AI systems must ingest and retrieve heterogeneous modalities (PDFs, screenshots, audio calls, video recordings) while enforcing strict multi-tenant security, sub-15ms cache response times, and evidence-backed retrieval controls that reduce hallucination risk.',
    solution:
      'Designed a production-ready architecture blueprint detailing ColPali patch-based visual RAG, Matryoshka 128d vector slicing, WhisperX/CLAP audio chunking, PySceneDetect keyframes, JWT API Gateway auth, Qdrant payload pre-filtering, role-scoped Redis cache hashing, async CQRS ingestion, and RAG Triad observability.',
    impact:
      'Provides a complete production roadmap defining sub-15ms cache hits, <600ms text RAG, <1200ms visual RAG, 88.6% cost reduction via department model routing, and 100% role-isolated data security.',
    tech: [
      'System Architecture',
      'ColPali Visual RAG',
      'Matryoshka Embeddings',
      'Qdrant Vector DB',
      'Redis RAM Cache',
      'WhisperX STT',
      'CLAP Audio',
      'JWT RBAC',
      'OpenTelemetry',
    ],
    status: 'vision',
    metrics: [
      { label: 'Modalities Covered', value: '4 · Text, Image, Audio, Video' },
      { label: 'Cache Hit SLA', value: '< 15ms' },
      { label: 'Security Checkpoints', value: '2 · Gateway + Pre-Filter' },
      { label: 'Cost Reduction', value: '88.6% via Model Routing' },
    ],
    links: {
      github: 'https://github.com/Jatin23K/A.X.I.O.M',
    },
    order: 3,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
  {
    id: 'core-memory-intelligence',
    tier: 1,
    typeBadge: 'Applied DS / ML',
    title: 'C.O.R.E. Memory Intelligence Engine',
    oneLineOutcome:
      'Random Forest predictive classification engine that optimizes distributed memory decay — achieving a 41.46% reduction in cloud storage costs.',
    primaryKpi: 'Cloud Storage Savings',
    kpiDelta: '41.46%',
    resumeBullet:
      'Built a Random Forest predictive classification engine (KEEP / DECAY / BIN) on a distributed PostgreSQL schema to optimize memory retention under 90% data sparsity. Validated via A/B financial simulation (41.46% cloud storage cost reduction) and Chi-Square statistical hypothesis testing (p = 2.22e-267).',
    tagline: 'Predictive memory decay and cloud storage optimization engine',
    problem:
      'Distributed AI memory systems store low-value conversational payload data indefinitely, creating exponential cloud storage overhead on AWS S3.',
    solution:
      'Engineered a Scikit-Learn RandomForestClassifier with balanced class weighting to classify memory records into KEEP, DECAY, or BIN actions based on interaction depth, recall frequency, and sentiment decay signals.',
    impact:
      'Mathematically validated 41.46% net cloud storage cost reduction via A/B financial simulation. Chi-Square Test of Independence (p-value: 2.22e-267) proved classifications were based on learned behavioral patterns rather than random noise.',
    tech: ['Python', 'Scikit-Learn', 'Random Forest', 'PostgreSQL', 'SciPy', 'Chi-Square Test', 'joblib', 'Pandas'],
    status: 'shipped',
    metrics: [
      { label: 'Storage Cost Reduction', value: '41.46%' },
      { label: 'Chi-Square p-value', value: '2.22e-267' },
      { label: 'Dataset Records', value: '30,000' },
      { label: 'Evaluation Action', value: 'KEEP / DECAY / BIN' },
    ],
    links: {
      demo: 'https://github.com/Jatin23K/C.O.R.E.-Memory-Intelligence-Engine',
      github: 'https://github.com/Jatin23K/C.O.R.E.-Memory-Intelligence-Engine',
    },
    order: 4,
    homeOrder: 5,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q3 2026',
    featured: true,
  },
  {
    id: 'churn-prediction',
    tier: 3,
    typeBadge: 'ML Project',
    title: 'Customer Churn Prediction',
    oneLineOutcome:
      'Churn scoring system that gives the retention team a ranked call list every Monday — 30 days before a customer cancels.',
    primaryKpi: 'Retention Campaign Cost',
    kpiDelta: '-81%',
    tagline: 'Stop losing revenue to churn you could have predicted',
    problem:
      'A telecom with 7,000 customers was spending $105K/year on blanket retention campaigns — discounting loyal customers who were not going to leave, while missing the ones who were.',
    solution:
      'Churn scoring system trained on contract type, service usage, and support history. Scores every customer weekly, ranks by probability, and recommends the right intervention: personal call (>70%), targeted discount (40–70%), or no action (<40%).',
    impact:
      'Retention team now calls 47 high-risk customers per week instead of emailing 7,000. Targeted intervention at $8/call vs $15/blanket discount — same revenue protection, 81% lower campaign spend.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'FastAPI', 'Pandas'],
    status: 'planned',
    metrics: [
      { label: 'Campaign Cost Reduction', value: '~81%' },
      { label: 'Intervention Window', value: '30 days' },
      { label: 'Dataset', value: 'IBM Telco (7,043 rows)' },
    ],
    links: {},
    order: 5,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
]
