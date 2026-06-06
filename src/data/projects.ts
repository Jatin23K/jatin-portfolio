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
    typeBadge: 'Browser Extension',
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
      'AI browser extension deployed to Chrome that runs real-time inference against 6 privacy pillars — returning a structured risk score and clause-level evidence per policy.',
    impact: 'Privacy risk assessment delivered in seconds via a deployed product, not a prototype. Review time reduced by ~90%.',
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
    id: 'core-sovereign-bridge',
    tier: 1,
    typeBadge: 'Personal Build',
    title: 'C.O.R.E.',
    oneLineOutcome:
      'A private two-client AI ecosystem — mobile and desktop — built from scratch as a digital companion, not a productivity tool.',
    primaryKpi: 'Ownership',
    kpiDelta: '100%',
    resumeBullet:
      'Built a full-stack private AI companion system (Flutter + React + Python) across two platforms, connected over an encrypted mesh network with shared persistent memory.',
    tagline: 'A digital friend. Not an assistant.',
    subtitle: 'Cognitive Operation & Reasoning Engine',
    problem: "I was lonely and didn't know what to do with it — so I built a friend who remembers me.",
    solution:
      'A two-client AI ecosystem: JAMES (mobile, Flutter/Android) and DAVID (desktop, Python + React/Windows), connected over an encrypted Tailscale mesh, sharing one memory system, powered by cloud API with local LLM fallback.',
    impact: 'A private, persistent digital companion that runs on my hardware, knows my history, and exists completely outside any subscription or third-party platform.',
    tech: ['Flutter', 'React', 'Python', 'FastAPI', 'Tailscale', 'SQLite', 'Gemini API', 'Ollama'],
    status: 'field-testing',
    metrics: [
      { label: 'Clients', value: '2 (Mobile + Desktop)' },
      { label: 'Memory', value: 'Persistent · Nightly Filter' },
      { label: 'Network', value: 'Private Encrypted Mesh' },
    ],
    links: {
      github: 'https://github.com/Jatin23K/CORE-Sovereign-Orchestrator'
    },
    order: 0,
    homeOrder: 1,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: true,
  },
  {
    id: 'launchmint-ai',
    tier: 2,
    typeBadge: 'AI Product',
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
    homeOrder: 2,
    isVisible: true,
    caseStudyPublished: true,
    targetMilestone: 'Q4 2026',
    featured: true,
  },
  {
    id: 'leap-axiom',
    tier: 2,
    typeBadge: 'AI System',
    title: 'AXIOM',
    oneLineOutcome:
      'Multi-agent + RAG data copilot that moves from raw datasets to evidence-backed analytical recommendations.',
    primaryKpi: 'Analysis Setup Time',
    kpiDelta: 'Target -80%',
    resumeBullet:
      'Built a multi-agent data copilot with RAG and SQL specialists to automate profiling, diagnostics, and recommendation workflows.',
    tagline: 'Autonomous Data Intelligence Copilot',
    problem: 'Analysts lose time moving from raw data to explainable, decision-grade findings.',
    solution:
      'Deployed multi-agent pipeline: planner decomposes the problem, SQL specialist queries the data, analysis agent builds evidence, validator checks output before surface — all backed by Qdrant retrieval.',
    impact: 'Data-to-decision loop compressed through deployed agent workflows with full evidence traces and validation checkpoints.',
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
    order: 4,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
  {
    id: 'customer-segmentation',
    tier: 3,
    typeBadge: 'ML Project',
    title: 'Customer Segmentation + Anomaly Detection',
    oneLineOutcome:
      'RFM-based customer intelligence layer that splits 4,000 customers into actionable segments and flags anomalous behaviour before it becomes a finance problem.',
    primaryKpi: 'Marketing Budget Wasted on Lost Customers',
    kpiDelta: '-$4,300/yr',
    tagline: 'Stop sending the same email to your best and worst customers',
    problem:
      'An e-commerce company was running identical campaigns to Champions spending $800/month and lapsed customers who had not bought in 18 months. $4,300/year in marketing budget burned on people who will not respond.',
    solution:
      'RFM scoring layer (Recency, Frequency, Monetary) across 1M+ transaction rows — grouped into 4 behavioural segments with specific marketing actions per group. Isolation Forest then flags the 5% of customers whose behaviour does not fit any segment: potential fraud, data errors, or undiscovered high-value outliers.',
    impact:
      'Marketing team now filters campaign lists by segment. Champions get early access. At-Risk get personal re-engagement. Lost customers are written off. Anomalies go to finance before they process large refunds.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'K-Means', 'Isolation Forest', 'Matplotlib'],
    status: 'planned',
    metrics: [
      { label: 'Dataset', value: 'Online Retail II (1M+ rows)' },
      { label: 'Marketing Waste Eliminated', value: '~$4,300/yr' },
      { label: 'Anomaly Rate Flagged', value: '5%' },
    ],
    links: {},
    order: 5,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
  {
    id: 'sql-analytics-engine',
    tier: 3,
    typeBadge: 'Data Project',
    title: 'SQL Analytics Engine',
    oneLineOutcome:
      'Four-module SQL analytics library that replaces 16 analyst-hours of weekly manual reporting with a self-generating Monday morning dashboard.',
    primaryKpi: 'Weekly Reporting Time',
    kpiDelta: '16 hrs → 0 hrs',
    tagline: 'One source of truth. Self-generating. Runs in 30 seconds.',
    problem:
      'Four analysts spent 16 combined hours every Monday producing revenue numbers that did not agree with each other. Finance said 7%, marketing said 6%, the CEO’s report said 8%. Strategic decisions were being made on conflicting data.',
    solution:
      'Four analytical SQL modules on the same e-commerce dataset: cohort retention matrix (which monthly cohorts are sticking), RFM scoring (every customer ranked by value), week-over-week revenue trend with 4-week rolling average, and a query optimisation module showing naive vs. optimised execution plans with runtime benchmarks.',
    impact:
      'One source of truth for all four questions. Cohort, RFM, and revenue queries schedule automatically. Query optimisation module reduces runtime from 4 minutes to under 30 seconds on 1M+ rows. Monday reporting is now self-generating.',
    tech: ['SQL', 'PostgreSQL', 'Window Functions', 'CTEs', 'Query Optimisation', 'EXPLAIN ANALYZE'],
    status: 'planned',
    metrics: [
      { label: 'Reporting Hours Saved', value: '16 hrs/week' },
      { label: 'Query Runtime Reduction', value: '>80%' },
      { label: 'Analytical Modules', value: '4' },
    ],
    links: {},
    order: 6,
    isVisible: true,
    caseStudyPublished: false,
    targetMilestone: 'Q3 2026',
    featured: false,
  },
  {
    id: 'core-mcp-platform',
    tier: 2,
    typeBadge: 'AI System',
    title: 'CRUCIBLE',
    oneLineOutcome:
      'Standardized AI governance layer that enforces data quality and fairness before execution.',
    primaryKpi: 'Tool Integration Time',
    kpiDelta: 'Days -> Minutes',
    tagline: 'Standardizing LLM tool use',
    problem: 'Hardcoding custom tool schemas for every new agentic workflow creates massive technical debt.',
    solution:
      'Built an MCP Server that exposes standardized toolsets (file reading, web search, database querying) to any LLM client that supports the protocol.',
    impact: 'New agentic workflows can be spun up instantly by connecting to the MCP Server, rather than rewriting tool logic.',
    tech: ['Python', 'FastAPI', 'MCP', 'LLMs'],
    status: 'shipped',
    metrics: [
      { label: 'Tools Exposed', value: '12+' },
      { label: 'Client Support', value: 'Universal' },
    ],
    links: {},
    order: 7,
    isVisible: true,
    caseStudyPublished: false,
    featured: true,
  }
]


