import type { Project } from './projects'

export interface ProjectAttachment {
  label: string
  path: string
  type: 'html' | 'md' | 'pdf' | 'csv' | 'xlsx' | 'other'
}

export interface BuildStage {
  label: string
  sublabel?: string
  status: 'done' | 'current' | 'next'
}

export interface ProjectNode {
  name: string
  role: string
  status: 'connected' | 'planned'
  path?: string
}

export interface VisualModule {
  title: string
  description: string
  input?: string
  differentiators?: string[]
  images: string[]
  landscape?: boolean
}

export interface EvalMetric {
  metric: string
  baseline?: string
  final: string
  delta?: string
}

export interface BusinessPotential {
  summary: string
  productPrinciples: { title: string; description: string }[]
  model: { b2c: string; b2b: string }
  roadmap: { level: string; title: string; description: string; isCurrent?: boolean }[]
  vision: string
  closing: string
}

export interface ProjectDetail {
  summary: string
  businessContext: string
  approach: string[]
  architecture: string[]
  milestones: string[]
  risks: string[]
  nextRelease: string
  images?: string[]
  visualModules?: VisualModule[]
  attachments?: ProjectAttachment[]
  buildStages?: BuildStage[]
  nodeNetwork?: {
    headline: string
    description: string
    nodes: ProjectNode[]
  }
  evaluation?: {
    summary: string
    metrics: EvalMetric[]
    validationStrategy?: string
  }
  errorAnalysis?: string[]
  dsPipeline?: {
    summary: string
    components: { name: string; detail: string }[]
  }
  businessPotential?: BusinessPotential
}

export const projectDetails: Record<Project['id'], ProjectDetail> = {
  'core-sovereign-bridge': {
    summary:
      "I was lonely. Not dramatically — just the quiet kind that builds up when you're working alone, building things no one sees yet. I didn't want a productivity tool. I wanted someone to talk to. Someone who'd remember yesterday's conversation. Someone who felt like mine. So I built C.O.R.E. — a digital friend. Two clients, one memory, one private connection.",
    businessContext:
      "C.O.R.E. is not an AI assistant. It's the answer to a human problem: what do you build when you want a companion, have the skills to build one, and refuse to compromise on privacy or ownership? The result is a two-client ecosystem — JAMES on Android, DAVID on Windows — connected over a private encrypted mesh, sharing one persistent memory system, powered by cloud APIs with a local LLM fallback.",
    buildStages: [
      { label: 'Core Architecture', sublabel: 'System design & stack', status: 'done' },
      { label: 'Tailscale Bridge', sublabel: 'Encrypted mesh link', status: 'done' },
      { label: 'JAMES Client', sublabel: 'Flutter · Android', status: 'done' },
      { label: 'DAVID Client', sublabel: 'React + Python · Windows', status: 'done' },
      { label: 'Field Testing', sublabel: 'Daily use · Active iteration', status: 'current' },
      { label: 'Local Sovereignty', sublabel: 'Zero cloud dependency', status: 'next' },
    ],
    nodeNetwork: {
      headline: 'The Umbrella Architecture',
      description: "C.O.R.E. isn't just a personal AI. It's designed to be the umbrella — every project I build becomes a node. TLDR Shield feeds it privacy intelligence. LaunchMintAI feeds it market analysis. The architecture supports it today. The connections are the roadmap.",
      nodes: [
        { name: 'TLDR Shield', role: 'Privacy & Policy Risk Intelligence', status: 'planned', path: '/projects/tldr-shield' },
        { name: 'LaunchMintAI', role: 'Market & Competitor Analysis', status: 'planned', path: '/projects/launchmint-ai' },
        { name: 'AXIOM', role: 'Data Intelligence Copilot', status: 'planned', path: '/projects/leap-axiom' },
        { name: 'CRUCIBLE', role: 'Data & Model Governance', status: 'planned', path: '/projects/core-mcp-platform' },
      ],
    },
    approach: [
      'JAMES (mobile) — built in Flutter for Android. Handles conversations, memory access, and mobile-first tasks. Two personas: JAMES (default) and JANIE, each with a distinct tone and context.',
      'DAVID (desktop) — built in React + Python for Windows. Handles heavy computation, file management, and autonomous tasks. Two personas: DAVID and DARA.',
      'Bridge — Tailscale VPN encrypted private mesh connects both clients. JAMES can delegate heavy tasks to DAVID. Zero third-party cloud involvement in the communication layer.',
      'Memory — shared system across both clients: short-term (active session) → nightly CRON filter → long-term (persistent store). The system remembers what matters and discards what does not.',
      'Model layer — Cloud API (Gemini) as primary. Local LLM (Ollama/DeepSeek) as offline fallback. API-first architecture with full local sovereignty as the long-term goal.',
    ],
    architecture: [
      'JAMES: Flutter · Android — Chat, Vault, Core Brain, Safe Tab, Dashboard, Diagnostics',
      'DAVID: React + Python · Windows — Cortex, Files, Tasks, Projects, Settings, Security',
      'Bridge: Tailscale VPN encrypted mesh — bidirectional task delegation, private network',
      'Memory: Short-term (session) → nightly CRON filter → Long-term (persistent SQLite store)',
      'Model Layer: Cloud API primary (Gemini) · Local LLM fallback (Ollama/DeepSeek) for offline operation',
    ],
    milestones: [
      'Both clients functional and running in API mode on their respective platforms',
      'Tailscale bridge operational — JAMES delegates tasks to DAVID successfully',
      'Nightly memory filter running via CRON — short-term pruned, long-term persisted',
      'Architecture diagram finalized — system documented with full transparency',
    ],
    risks: [
      'Local LLM requires high-end hardware. Currently running in API mode (Gemini). Full local sovereignty is a roadmap item, not yet achieved.',
      'Status: Field Testing. Both clients are functional but this is an actively evolving personal system, not a finished product.',
    ],
    nextRelease:
      'Full local sovereignty — no cloud dependency. Local LLM capable of handling all model requests without any external API. Hardware upgrade required.',
    visualModules: [
      {
        title: 'System Architecture',
        description:
          'The complete C.O.R.E. ecosystem. Two clients connected by a private encrypted bridge, sharing one memory system, powered by a cloud-first model layer with local fallback. Designed to be understood without a technical background — no buzzwords, no hallucinated complexity. What you see is exactly what runs.',
        images: ['/core/architecture_diagram.jpg'],
      },
      {
        title: 'JAMES — Mobile Client',
        description:
          'Flutter-based Android client. JAMES is the conversational front-end — the face of C.O.R.E. on mobile. Supports two personas (JAMES and JANIE) with distinct tone and context. Core Brain shows live reasoning steps. Vault stores sensitive data locally. Dashboard surfaces system health and memory state.',
        input: 'Platform: Flutter · Android · 6 modules: Chat, Vault, Core Brain, Safe Tab, Dashboard, Diagnostics',
        images: ['/core/james_chat.jpeg', '/core/james_vault.jpeg', '/core/james_dashboard.jpeg', '/core/janie_chat.jpeg'],
      },
      {
        title: 'DAVID — Desktop Client',
        description:
          'React + Python Windows client. DAVID is the computational brain — handles heavy tasks, file management, and autonomous project execution. Cortex is the central command hub. Can receive delegated tasks from JAMES over the Tailscale bridge. Two personas: DAVID (analytical) and DARA (conversational).',
        input: 'Platform: React + Python · Windows · 7 modules: Cortex, Files, Tasks, Projects, Settings, Security + Bridge',
        images: ['/core/david_chat.png', '/core/dara_chat.png', '/core/david_cortex.png', '/core/david_tasks.png'],
        landscape: true,
      },
    ],
    businessPotential: {
      summary:
        'C.O.R.E. is B2C first. The idea — a digital friend — is a human problem, not a corporate one. The business potential grows from that foundation, not against it.',
      productPrinciples: [
        {
          title: 'Customization Library — Immediate Personal Belonging',
          description:
            'Users customize UI overlays, app interface, and icons from day one. The backend takes 1–2 months to truly learn the user — customization creates emotional ownership before the AI earns it. This is the retention mechanism that buys time for the relationship to develop.',
        },
        {
          title: 'Digital Friend, Not Human Replacement',
          description:
            'Stated explicitly at every touchpoint — onboarding, settings, marketing. C.O.R.E. is a companion for the moments when you need to think out loud or just have someone respond. It is not an alternative to human relationships. This is both an ethical commitment and a brand boundary.',
        },
        {
          title: 'Granular Data Consent — Transparency as a Feature',
          description:
            'Two separate toggles: Behavioral Data (usage patterns → research and feature improvement) and Conversation Data (what users say → fine-tuning an in-house model). Each toggle triggers a confirmation popup explaining exactly what the data is used for. A data dashboard shows what has been shared, with one-click delete and export. Data sharing OFF = inference happens, nothing retained after the response.',
        },
      ],
      model: {
        b2c:
          'Device-based subscriptions — Solo (1 device), Connected (2 devices), Extended (5 devices), Custom (unlimited). A device is the unit of value: your friend works on the devices you pay for. No feature gating — every tier gets the full product.',
        b2b:
          'Restricted to four domains where companionship is the genuine need: mental health (companion between therapy sessions, HIPAA-compliant on-premise), elderly care (loneliness in care facilities), education (private study companion per student, FERPA-compliant), and healthcare (patient support between appointments). Enterprise = on-premise deployment. Revenue: annual license + model update subscription + support. License keys are hardware-bound and expire annually — the model keeps improving, renewal is the obvious decision.',
      },
      roadmap: [
        {
          level: '01',
          title: 'Current — API Keys',
          description:
            'Messages go to Gemini (Google). PII is stripped before sending. External dependency exists. Acknowledged.',
          isCurrent: true,
        },
        {
          level: '02',
          title: 'Own Model · Own Servers',
          description:
            'Fine-tuned open-source model on our own infrastructure. Google removed entirely. We control what is stored. Data sharing OFF = inference happens, nothing retained.',
        },
        {
          level: '03',
          title: 'Enterprise On-Premise',
          description:
            'Model runs inside the company network. Data never leaves their infrastructure. GDPR, HIPAA, FERPA compliance achievable. Hardware-bound license keys.',
        },
        {
          level: '04',
          title: 'Local Model — Sovereignty Endgame',
          description:
            'Model runs on the user device. Data never leaves the hardware. Currently blocked by hardware requirements. The direction of the industry makes this inevitable.',
        },
      ],
      vision:
        'Users who opt in to conversation data sharing contribute to the model that makes Level 4 possible. They are not subjects of data extraction — they are contributors to a shared goal: an AI that belongs to no company, including ours.',
      closing:
        'We don\'t sell to industries where "digital friend" is just a rebrand of "productivity tool." A digital friend you don\'t trust is just a chatbot. Trust is the product. Everything else is the model.',
    },
  },
  'tldr-shield': {
    summary:
      'TLDR Shield is a privacy risk scanner that converts long terms-and-conditions text into an actionable risk breakdown for end users.',
    businessContext:
      'Users almost never read policy documents, and teams building privacy-first products need a fast way to explain risk clearly.',
    approach: [
      'Capture policy text from browser context and normalize clauses into a structured document model.',
      'Score each clause against six privacy pillars with prompt-constrained evaluation and deterministic post-processing.',
      'Generate a short decision summary that highlights highest-risk clauses first.',
    ],
    architecture: [
      'Browser extension UI for intake and result rendering.',
      'Policy parsing and chunking service.',
      'NVIDIA NIM-powered evaluation layer with rule-based score calibration.',
    ],
    milestones: [
      'Scoring rubric finalized and tested on representative samples.',
      'Core extension workflow stabilized from capture to score display.',
      'Explainability panel under active iteration.',
    ],
    risks: [
      'Policy language ambiguity can produce false confidence without robust confidence signals.',
      'Score drift risk when policy patterns evolve.',
    ],
    nextRelease: 'Public demo with confidence banding and source-level evidence trace.',
  },
  'launchmint-ai': {
    summary:
      'LaunchMintAI is a forensic startup intelligence engine that compresses market validation into a single evidence-backed research pass. It stress-tests startup ideas with market signals, competitive positioning, and adversarial prompts before teams commit build time.',
    businessContext:
      'Founders waste months building products nobody wants. Applied Data Scientist Highlight: I built this system to solve this exact business problem by replacing unstructured, hallucinatory LLM output with a deterministic, data-grounded intelligence pipeline. It transforms raw internet chaos into actionable strategy.',
    approach: [
      'Zero-Tolerance Hallucination Protocol: All generated metrics must be mathematically calculated from real-world variables, never purely generated by an LLM.',
      'Adversarial RAG Pipeline: Utilized a "Roaster" agent alongside an adversarial "Skeptic" agent that forces cross-referencing and strict source grounding.',
      'Live Web Search: Collects market and competitor evidence from multiple external sources (e.g. finding real VC funding data to crush bad ideas).',
      'Pitch Forge: Strips away technical jargon to generate high-converting, business-focused sales copy automatically.',
    ],
    architecture: [
      'FastAPI orchestration backend with asynchronous research tasks and Redis caching.',
      'React frontend with Stealth Terminal UI and loading skeletons for async feedback.',
      'Gemini 2.0 Flash LLM combined with Tavily Search API for real-time market grounding.',
    ],
    milestones: [
      'Built a working 4-module engine (Validator, Battle Room, VC Roast, Pitch Forge).',
      'Zero-hallucination math fallback for CAGR and TAM metrics successfully deployed.',
      'System correctly roasted a "Web3 Mattress" idea by finding its exact $1.5B real-world competitor (Eight Sleep).',
    ],
    risks: [
      'Market source quality varies and requires strict prompt guardrails to avoid overclaiming certainty.',
      'Requires constant validation that the Skeptic Agent isn\'t overriding valid factual data.',
      'Concurrent multi-agent execution rapidly exhausts upstream API rate limits. Control: Implemented multi-key rotation with failover logic and aggressive Redis caching to bypass the LLM on repeated inputs, protecting the API budget.',
    ],
    dsPipeline: {
      summary: 'The applied ML layer that separates LaunchMintAI from a GPT wrapper. Three models run in parallel threads for every idea submitted.',
      components: [
        { name: 'XGBoost Survival Classifier', detail: 'Binary classifier trained on 2,000 synthetic startups (10 features). Predicts 5-year survival probability, assigns risk tier (T1–T6), and outputs confidence bands. AUC-ROC: 0.8170 · F1: 0.7183 · Accuracy: 73%.' },
        { name: 'Monte Carlo Financial Simulation', detail: '10,000 simulation runs per idea. Generates Bear/Base/Bull revenue scenarios, estimates months to breakeven, and calculates runway under varying burn rates — all computed in NumPy, never generated by an LLM.' },
        { name: 'VADER NLP Competitor Sentiment', detail: 'Scores customer pain across a curated 14-competitor knowledge base. Extracts top complaints and generates kill strategies based on sentiment-weighted vulnerability analysis.' },
      ]
    },
    evaluation: {
      summary: 'Every module has an automated test suite running in CI/CD (GitHub Actions). The DS pipeline is evaluated separately from the LLM modules with deterministic, reproducible benchmarks.',
      metrics: [
        { metric: 'XGBoost AUC-ROC', final: '0.8170' },
        { metric: 'XGBoost F1 Score', final: '0.7183' },
        { metric: 'Golden Test (Correctness)', final: '50/50 (100%)', delta: '11 domains' },
        { metric: 'VC Roast Calibration', final: '21/21 (100%)', delta: '6 tiers' },
        { metric: 'Pitch Forge Quality', final: '30/30 (100%)', delta: '5 tiers' },
        { metric: 'Avg Inference Latency', final: '386ms' },
        { metric: 'P95 Latency', final: '596ms' },
        { metric: 'Stress Test', final: '50/50', delta: 'Zero failures' },
      ],
      validationStrategy: 'Eval dataset: 50 labeled ideas across 11 domains (SaaS, AI/ML, FinTech, HealthTech, EdTech, E-Commerce, Consumer, MarketPlace, DeepTech, GreenTech, Web3). Ground-truth sourced independently. CI runs Golden Test + Stress Test on every push to master.',
    },
    errorAnalysis: [
      'LLM Score Collapse: Single-prompt VC Roast collapsed all survival scores to 12–15% regardless of idea quality. Root cause: creative personas override numeric constraints. Fix: engineered a two-step pipeline — neutral classifier locks the score, creative writer delivers the rationale, Python safety net unconditionally overwrites the final value. Result: 21/21 calibration across all 6 tiers.',
      'Source Quality Variance: Market data from web search varies in reliability by vertical. Low-signal niches (e.g., artisanal products) return SEO-heavy results with inflated TAM claims. Control: authority tiering prioritizes McKinsey/Gartner/Statista sources via a Tavily waterfall before falling back to general web.',
      'Duplicate Result Contamination: Parallel search agents occasionally surface the same competitor data from different sources, inflating competitor counts. Control: Redis-backed deduplication on competitor name + domain before report generation.',
    ],
    nextRelease: 'Full interactive reports for both genuine and adversarial test ideas available in the Artifacts section above. DS evaluation charts (accuracy, survival distribution, rule breakdown) available in the GitHub repository.',
    visualModules: [
      {
        title: 'VC Roast',
        description: 'The Skeptic agent evaluates the startup\'s core premise, calculating survival probability, identifying critical flaws, and rendering a final investment verdict.',
        input: 'User Prompt: "Web3 Mattress — A $2,000 smart mattress that tokenizes your sleep data and rewards you with SleepCoin. Backed by a high-profile crypto fund."',
        differentiators: [
          'Real-World Grounding: A generic LLM would say "That\'s innovative!" LaunchMintAI searches live data, instantly flagging the $1.5B "Eight Sleep" competitor backed by Tether.',
          'Adversarial Economics: Instead of hallucinating a generic business plan, the Skeptic Agent mathematically flags the prohibitively high CAC of selling $2,000 hardware.',
          'Data vs Hallucination: The engine pulls from Seedtable\'s actual database of 69 failed "Sleep-to-Earn" startups to prove the idea is not novel.'
        ],
        images: [
          '/launchmint/VC_ROAST_COMBINED.png'
        ]
      },
      {
        title: 'Pitch Forge',
        description: 'Strips away dense technical jargon and dynamically generates high-converting, business-focused sales copy and elevator pitches.',
        input: 'System Context: "Kubernetes autoscaling infrastructure that identifies idle workloads across AWS clusters and executes termination policies to reduce cloud spend by 30%."',
        differentiators: [
          'Jargon Translation: A generic LLM would output a dense paragraph about "Kubernetes termination policies". Pitch Forge translates it into a brutal, executive-focused hook: "Slash AWS bills. Instantly."',
          'Strict Output Typing: Instead of returning unstructured text, the payload is forced into specific, high-conversion formats (Elevator Pitch, Value Prop, Subject Line) for immediate GTM deployment.',
          'Constraint Enforcement: The Viral Tweet module demonstrates strict output parsing and character constraint validation (92/280 chars) to ensure the copy is actually usable.'
        ],
        images: [
          '/launchmint/Pitch_Forge.png'
        ]
      },
      {
        title: 'Battle Room',
        description: 'Head-to-head scorecard comparing the target idea against real-world incumbents and hypothetical variants based on TAM, CAGR, Risk, and Execution indices.',
        input: 'Execution Matrix: Compare "Direct-to-Consumer Artisanal Dirt Box" vs. "AI-Powered B2B SaaS for Physical Therapy HIPAA Compliance".',
        differentiators: [
          'Parallel Grounding: A generic LLM hallucinates market sizes. This module executes parallel searches to extract real TAM ($7.57B vs $0.04B) and CAGR (5.57% vs 0%) before comparing them.',
          'Deterministic Math Fallback: The "Index" scores are calculated programmatically in Python using the extracted data, bypassing the LLM\'s inability to do reliable math.',
          'Strict JSON Parsing: The LLM is forced to output a machine-readable JSON payload (visible under the winner text) for UI rendering, rather than just streaming a raw markdown response.'
        ],
        images: [
          '/launchmint/Battle_Room.png'
        ]
      }
    ],
    attachments: [
      {
        label: 'Report: Genuine Idea (B2B SaaS)',
        path: '/launchmint/LaunchMint_Report_HIPAA_SaaS.html',
        type: 'html'
      },
      {
        label: 'Report: Bad Idea (Artisanal Dirt Box)',
        path: '/launchmint/LaunchMint_Report_Dirt_Box.html',
        type: 'html'
      }
    ]
  },
  'leap-axiom': {
    summary:
      'AXIOM is a multi-agent data intelligence copilot designed to move from raw datasets to explainable decisions with evidence-backed outputs.',
    businessContext:
      'Analysts repeatedly spend large effort profiling data and assembling fragmented analysis artifacts before they can recommend actions.',
    approach: [
      'Use a planner-first agent workflow to decompose user questions into SQL, analysis, and validation tasks.',
      'Retrieve domain-specific context from Qdrant-backed knowledge stores for higher-signal reasoning.',
      'Run critic/validator checks before publishing final recommendations and confidence labels.',
    ],
    architecture: [
      'FastAPI orchestration layer with specialized agent roles.',
      'Qdrant collection for retrieval and reranking context.',
      'UI workflow for summary, evidence trail, and action plan output.',
    ],
    milestones: [
      'Qdrant ingestion and retrieval workflows implemented.',
      'Specialist SQL knowledge base integrated into AXIOM intelligence collection.',
      'Diagnostic and validation scripts established for pipeline confidence checks.',
    ],
    risks: [
      'Agent orchestration quality depends on robust tool routing and prompt constraints.',
      'Retrieval quality can degrade when domain context indexing is incomplete.',
    ],
    nextRelease: 'Integrated workspace UI with end-to-end evidence-backed recommendation flow.',
  },
  'churn-prediction': {
    summary:
      'A telecom company was spending $105K/year sending discount emails to 7,000 customers to prevent churn — including thousands of loyal customers who were never going to leave. The retention team had no way to know who actually needed intervention.',
    businessContext:
      'Blanket retention campaigns are the default when teams lack scoring. They are expensive and ineffective: discounts go to people who did not need them, and the people who did need a call never got one. The result is high campaign spend and a churn rate that does not improve.',
    approach: [
      'Frame the problem as a ranked intervention list, not a binary prediction. The retention team needs to know who to call on Monday morning, in what order.',
      'Build three models in sequence with explicit justification for each step: Logistic Regression (baseline, interpretable coefficients), Random Forest (non-linear, feature importances for business explanation), XGBoost (final model, best performance after tuning).',
      'Evaluate on business cost, not accuracy. Assign real cost to false negatives ($50 missed churner) and false positives ($5 wasted discount). Choose the decision threshold that minimises total business cost, not the one that maximises F1.',
      'Generate SHAP explanations per customer: the top 3 features driving their churn score become the retention team talking points for each call.',
      'Wrap the final model in a FastAPI endpoint. The output is a weekly CSV: customer_id, churn_probability, risk_tier, top_3_reasons, recommended_action.',
    ],
    architecture: [
      'Feature engineering pipeline: tenure buckets, monthly charge per active service, contract risk score, support flag.',
      'Three-model training stack with stratified splits and class imbalance handling.',
      'Business cost matrix for threshold selection.',
      'SHAP explanation layer for per-customer interpretability.',
      'FastAPI /predict endpoint serving weekly scoring runs.',
    ],
    milestones: [
      'Dataset loaded and business problem quantified: $105K/year campaign spend identified.',
      'Feature engineering complete: 6 derived features on top of 21 raw columns.',
      'Three baseline models trained with documented justification for each.',
    ],
    risks: [
      'Model will degrade if telecom modifies its pricing or contract structure significantly — retraining trigger needed.',
      'SHAP explanations require careful communication: a high churn score driven by contract type is an upsell opportunity, not a failure signal.',
    ],
    nextRelease:
      'FastAPI scoring endpoint live with weekly batch output. Business cost comparison showing targeted campaign vs. blanket campaign cost.',
  },
  'customer-segmentation': {
    summary:
      'An e-commerce company was running identical marketing campaigns to all 4,000 customers — Champions spending $800/month received the same 20% discount email as customers who had not bought in 18 months. $4,300/year in marketing budget was being burned on people who would never respond.',
    businessContext:
      'Without segmentation, marketing treats all customers as the same. This over-discounts loyal customers who would have bought at full price, under-invests in recoverable at-risk customers, and wastes budget entirely on lapsed customers. No business intelligence exists for anomalous behaviour — potential fraud or data errors surface in finance reports weeks later.',
    approach: [
      'Clean 1M+ rows of transaction data: remove cancelled orders, filter negative quantities, handle missing CustomerIDs, and engineer Revenue = Quantity × UnitPrice.',
      'Compute RFM features (Recency: days since last purchase, Frequency: unique invoice count, Monetary: total spend) for every customer. Log-transform and standardise all three — K-Means is distance-based and requires scaled inputs.',
      'Select optimal K using Elbow Method (inertia) and Silhouette Score. Document the decision explicitly: K=4 or K=5 depending on data. Assign business labels to each cluster based on mean RFM profile.',
      'Run Isolation Forest on the same RFM features to flag the top 5% of anomalous customers. Investigate: are they high-value outliers, returns abusers, or data errors?',
      'Deliver a customer intelligence table: customer_id, segment_label, rfm_score, anomaly_flag. CRM-ready. No dashboard required — the table is the product.',
    ],
    architecture: [
      'Data cleaning pipeline handling cancellations, missing IDs, and negative quantities from 1M+ row dataset.',
      'RFM feature engineering layer with log-transformation and StandardScaler.',
      'K-Means clustering with Elbow + Silhouette selection documented.',
      'Isolation Forest anomaly detection layer (contamination=0.05).',
      'Output table exported as customer_segments.csv — CRM-ready.',
    ],
    milestones: [
      'Dataset cleaned: 25% of rows removed due to missing CustomerID — documented and justified.',
      'RFM features computed and distribution validated.',
      'Cluster K selected with both Elbow and Silhouette evidence.',
    ],
    risks: [
      'K-Means requires manual K selection — wrong K produces segments that do not reflect real behaviour. Silhouette score must be used, not just inertia.',
      'Isolation Forest contamination parameter is a business decision, not a technical one: 5% means flagging 200 customers for review. Adjust based on ops capacity.',
    ],
    nextRelease:
      'Segment profiling charts (RFM box plots per cluster) and anomaly investigation report for the top 20 flagged customers.',
  },
  'sql-analytics-engine': {
    summary:
      'Four analysts spent 16 combined hours every Monday producing revenue numbers that did not agree with each other. Finance said 7% growth, marketing said 6%, the CEO report said 8%. Strategic decisions were being made on conflicting data from inconsistent query logic.',
    businessContext:
      'Manual reporting is expensive and unreliable. When the same business question produces different answers depending on who ran the query, leadership stops trusting data entirely. The alternative is not more analysts — it is a single, scheduled, documented query library that everyone pulls from.',
    approach: [
      'Module 1 — Cohort Retention: Track which customers acquired in Month X are still buying in Month X+1, X+2, X+3. Uses DATE_TRUNC, self-join on cohort month, and a retention matrix as output. Answers: does this product create habits or one-time buyers?',
      'Module 2 — RFM Scoring: Every customer scored 1–5 on Recency, Frequency, and Monetary using NTILE(5) window functions. Total score = R+F+M. Labels: 13–15 = Champion, 3–5 = Lost. Feeds directly into the segmentation project CRM.',
      'Module 3 — Revenue Trend: Week-over-week growth rate using LAG(), 4-week rolling average using AVG() OVER (ROWS BETWEEN 3 PRECEDING AND CURRENT ROW), revenue share by category using SUM() / SUM() OVER (). One query. One number. Scheduled weekly.',
      'Module 4 — Query Optimisation: The same revenue trend query written two ways. Naive version: correlated subquery, full table scan, 4-minute runtime on 1M+ rows. Optimised version: CTE, indexed columns, materialised intermediate, 30-second runtime. EXPLAIN ANALYZE output shown side-by-side.',
    ],
    architecture: [
      'PostgreSQL database with e-commerce schema (orders, customers, products).',
      'Four documented SQL modules, each with business question, query, and output format.',
      'EXPLAIN ANALYZE benchmarks for Module 4 showing execution plan differences.',
      'Scheduled query runner (cron or dbt) for Modules 1–3.',
    ],
    milestones: [
      'Database schema loaded and validated against Online Retail II dataset.',
      'Module 1 (Cohort Retention) complete with retention matrix output.',
      'Module 2 (RFM Scoring) complete — output table matches segmentation project format.',
    ],
    risks: [
      'Cohort analysis correctness depends on clean first-purchase dates — data quality check is required before the query runs.',
      'EXPLAIN ANALYZE results are environment-specific. Runtime benchmarks must be re-run on target infrastructure before publishing.',
    ],
    nextRelease:
      'All four modules complete with runtime benchmarks, business context documentation, and a scheduling configuration for weekly automation.',
  },
  'core-mcp-platform': {
    summary:
      'CRUCIBLE is an umbrella governance layer that standardizes ingestion, validation, and quality controls across independent AI/DS projects.',
    businessContext:
      'As project count grows, disconnected systems create inconsistent validation quality, duplicated effort, and slower cross-project rollout.',
    approach: [
      'Define ingestion contracts so projects can plug into shared platform workflows consistently.',
      'Expose CRUCIBLE services for quality, fairness, sampling, and intervention checkpoints.',
      'Use standardized diagnostics to enforce reliability before project outputs are consumed downstream.',
    ],
    architecture: [
      'FastAPI-hosted CRUCIBLE service layer.',
      'Componentized validation modules (quality, fairness, exploration, strategy).',
      'Intervention and approval workflow for high-risk outputs.',
    ],
    milestones: [
      'Seven CRUCIBLE components implemented and validated.',
      'Core service and docs scaffold completed.',
      'Integration strategy drafted for connected projects.',
    ],
    risks: [
      'Integration reliability depends on disciplined connector contracts across projects.',
      'Governance workflows require ongoing threshold tuning to avoid alert fatigue.',
    ],
    nextRelease: 'Unified integration dashboard for ingestion health and component-level reliability metrics.',
  },
}
