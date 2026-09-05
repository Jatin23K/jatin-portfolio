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
      'Grounded NLP classification pipeline scoring Terms of Service across 6 risk pillars in seconds — benchmarked against 25 production policies with 94% Precision, 93% Recall, and 100% verbatim DOM text grounding.',
    primaryKpi: 'Deep Precision',
    kpiDelta: '94.0%',
    resumeBullet:
      'Architected a 6-pillar NLP risk classification system evaluated against a 25-service ground-truth benchmark (tosdr.org) — engineered a dual-model ensemble with deterministic post-processing (D1–D7) that boosted precision from 65% to 94% with 93% recall, deployed via a sub-second Chrome extension with verbatim DOM grounding.',
    tagline: 'Grounded privacy risk classifier for Terms of Service & Privacy Policies',
    problem: 'Nobody reads Terms of Service. Evasive legal phrasing obscures severe privacy risks like unauthorized AI training, commercial data selling, and binding arbitration waivers.',
    solution:
      'Architected a dual-tier NLP classification pipeline: fast single-pass triage (Quick Scan, ~800ms) and a dual-model ensemble with deterministic post-processing rules (D1–D7) and Privacy Policy co-scanning. Evaluates 6 privacy pillars and returns a 0–100 calibrated risk score with 100% verbatim citations highlighted directly on the webpage DOM.',
    impact: 'Achieved 25/25 rating accuracy on a 25-service benchmark against ToS;DR ground truth. Ensemble and D1–D7 post-processing recovered +29% precision and +14% recall over raw LLM baselines with a 6/6 (100%) True Negative Rate on clean policies.',
    tech: ['TypeScript', 'Node.js', 'Google Gemini 2.5', 'Dual-Model Ensemble', 'Upstash Redis', 'Firestore', 'Express', 'Chrome MV3 Extension'],
    status: 'shipped',
    metrics: [
      { label: 'Deep Precision', value: '94.0%' },
      { label: 'Deep Recall', value: '93.0% · (+14% Lift)' },
      { label: 'Benchmark Accuracy', value: '25 / 25 · ToS;DR' },
      { label: 'True Negative Rate', value: '6 / 6 (100% Clean)' },
      { label: 'Triage Latency', value: '~800ms (Quick)' },
    ],
    links: {
      demo: 'https://github.com/Jatin23K/TLDR-Shield',
      github: 'https://github.com/Jatin23K/TLDR-Shield',
    },
    order: 3,
    homeOrder: 3,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q3 2026',
    featured: true,
  },
  {
    id: 'core-sovereign-bridge',
    tier: 1,
    typeBadge: 'Sovereign AI Ecosystem (Umbrella)',
    title: 'C.O.R.E.',
    oneLineOutcome:
      'Flagship sovereign AI ecosystem and distributed operating layer connecting mobile (JAMES) and desktop (DAVID) over an encrypted mesh, orchestrating persistent memory, model adapters, and specialized applied DS cortexes.',
    primaryKpi: 'Network Topology',
    kpiDelta: 'Encrypted Mesh',
    resumeBullet:
      'Built a full-stack private AI companion ecosystem (Flutter + React + Python) across mobile and desktop, connected over an encrypted Tailscale mesh with shared persistent memory. Serves as the central umbrella operating layer orchestrating specialized intelligence cortexes. Phase 1 multi-device field testing completed across Android and Windows.',
    tagline: 'A private companion across devices. Not a generic assistant.',
    subtitle: 'Cognitive Operation & Reasoning Engine',
    problem: "I needed a sovereign, persistent companion across my phone and PC that runs on my hardware without sending my private life to corporate cloud platforms.",
    solution:
      'A two-client personal AI ecosystem: JAMES on mobile and DAVID on desktop, connected over an encrypted Tailscale mesh, sharing one memory system, powered by cloud API with local LLM fallback, acting as the host platform for specialized domain intelligence cortexes.',
    impact: 'A private, persistent companion layer that runs on personal hardware, carries memory across devices, and exists outside subscription-based assistant platforms.',
    tech: ['Flutter', 'React', 'Python', 'FastAPI', 'Tailscale', 'SQLite', 'Gemini API', 'Ollama', 'Qdrant (Planned)', 'Redis (Planned)'],
    status: 'field-testing',
    metrics: [
      { label: 'Role', value: 'Umbrella Hub & Orchestrator' },
      { label: 'Topology', value: '2-Node Mesh (Android ↔ Windows)' },
      { label: 'Inference', value: 'Cloud API + Local Quantized Fallback' },
      { label: 'Status', value: 'Phase 1 Field Tested · Architecture Validated' },
    ],
    links: { github: 'https://github.com/Jatin23K/C.O.R.E-Showcase' },
    order: 5,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: false,
  },

  {
    id: 'launchmint-ai',
    tier: 1,
    typeBadge: 'Applied DS / ML',
    title: 'LaunchMintAI',
    oneLineOutcome:
      'Forensic startup intelligence engine combining a Day-0 leak-free XGBoost survival classifier (0.8512 ROC-AUC on 189k startups), 10,000-run NumPy Monte Carlo financial simulations (<32ms), and Aspect-Based Sentiment NLP to eliminate founder confirmation bias.',
    primaryKpi: 'Day-0 ROC-AUC',
    kpiDelta: '0.8512',
    resumeBullet:
      'Engineered a multi-disciplinary Applied DS platform for startup validation — trained a Day-0 leak-free XGBoost survival classifier (0.8512 ROC-AUC, 0.4789 PR-AUC on 189,970 startups) with in-memory SHAP explainability, a 10k-iteration vectorized NumPy Monte Carlo SDE engine (<32ms), and an Aspect-Based Sentiment NLP layer evaluated via a 30-prompt golden RAG Triad benchmark (95.8% Groundedness, 0.0% Hallucinations).',
    tagline: 'Forensic startup idea validator & quantitative survival engine',
    problem: 'Founders waste months building products nobody wants based on subjective advice and hallucinated single-prompt LLM market roasters.',
    solution:
      'Coupled a Day-0 leak-free XGBoost survival model (0.8512 ROC-AUC) trained on 189,970 startups with SHAP explainability, a 10,000-run NumPy Monte Carlo financial simulation engine (<32ms), Aspect-Based Sentiment NLP for competitor vulnerability scoring, and a 3-tier domain waterfall search with deterministic regex verification.',
    impact: 'Replaced hallucinated market forecasts with empirical data: 0.8512 Day-0 ROC-AUC survival scoring (~5x baseline PR-AUC lift under 9.11:1 imbalance), <32ms Monte Carlo cash insolvency curves, and +29.3% groundedness uplift (95.8%) across a 30-prompt golden evaluation benchmark.',
    tech: ['XGBoost', 'SHAP TreeExplainer', 'NumPy Vectorization', 'Monte Carlo SDEs', 'VADER NLP', 'FastAPI', 'ChromaDB', 'Python'],
    status: 'shipped',
    metrics: [
      { label: 'Day-0 ROC-AUC', value: '0.8512 · (189k Startups)' },
      { label: 'PR-AUC (9.11:1 Imbalance)', value: '0.4789 · (~5x Lift)' },
      { label: 'Monte Carlo Latency', value: '< 32ms · (10k SDEs)' },
      { label: 'RAG Triad Groundedness', value: '95.8% · (0% Hallucinations)' },
      { label: 'Validation Runtime', value: '< 10 min' },
    ],
    links: {
      demo: 'https://launch-mint-ai.vercel.app',
      github: 'https://github.com/Jatin23K/LaunchMintAI',
    },
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
    order: 4,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
  {
    id: 'core-memory-intelligence',
    tier: 1,
    typeBadge: 'Data Science / ML',
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
    order: 0,
    homeOrder: 1,
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
    order: 1,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
]
