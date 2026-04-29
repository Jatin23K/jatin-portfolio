import type { Project } from './projects'

export interface ProjectDetail {
  summary: string
  businessContext: string
  approach: string[]
  architecture: string[]
  milestones: string[]
  risks: string[]
  nextRelease: string
}

export const projectDetails: Record<Project['id'], ProjectDetail> = {
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
      'LaunchMintAI stress-tests startup ideas with market signals, competitive positioning, and adversarial prompts before teams commit build time.',
    businessContext:
      'Early-stage founders burn time and money on ideas with unclear demand; fast validation loops reduce wasted cycles.',
    approach: [
      'Collect market and competitor evidence from multiple external sources.',
      'Embed and cluster findings to detect repeated failure patterns and whitespace opportunities.',
      'Produce a decision brief with go/no-go confidence and required experiments.',
    ],
    architecture: [
      'FastAPI orchestration backend with asynchronous research tasks.',
      'ChromaDB memory layer for reusable market patterns.',
      'React frontend for audit trail and report review.',
    ],
    milestones: [
      'End-to-end validation report flow completed.',
      'Source attribution panel in place for every claim.',
      'Adversarial review mode implemented.',
    ],
    risks: [
      'Market source quality varies and can bias confidence.',
      'Requires strict prompt guardrails to avoid overclaiming certainty.',
    ],
    nextRelease: 'Report export and side-by-side competitor comparison view.',
  },
  'leap-axiom': {
    summary:
      'L.E.A.P / AXIOM is a multi-agent data intelligence copilot designed to move from raw datasets to explainable decisions with evidence-backed outputs.',
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
  'specialized-ml-project': {
    summary: 'Planned specialized ML system designed for high-depth domain KPI improvement and robust segment diagnostics.',
    businessContext: 'High-stakes domain decisions often fail when models optimize overall metrics but underperform on critical segments.',
    approach: [
      'Define domain objective and leakage-safe training strategy.',
      'Benchmark strong baselines against advanced candidate models.',
      'Run segment-level validation and stability checks before final model selection.',
    ],
    architecture: ['Feature pipeline', 'Model training stack', 'Evaluation and monitoring layer'],
    milestones: ['Use-case locked', 'Baseline model scheduled', 'Validation protocol drafting'],
    risks: ['Domain data complexity can increase feature engineering cycle time.'],
    nextRelease: 'Baseline-vs-final benchmark table with segment diagnostics.',
  },
  'sql-analytics-project': {
    summary: 'Planned SQL-first analytics system built for reliable stakeholder reporting and fast analytical iteration.',
    businessContext: 'Reporting pipelines slow down decisions when query logic is inconsistent and difficult to scale.',
    approach: [
      'Design reusable analytical SQL modules for cohort, funnel, and retention workflows.',
      'Optimize execution plans and runtime with indexing and query design patterns.',
      'Validate outputs through reconciliation against source-of-truth reports.',
    ],
    architecture: ['Warehouse schema layer', 'Reusable SQL module library', 'Reporting surface'],
    milestones: ['Schema mapping underway', 'KPI definitions drafted'],
    risks: ['Data modeling quality will directly affect downstream query reliability.'],
    nextRelease: 'Performance benchmark report with p95 runtime reductions.',
  },
  'end-to-end-ml-project': {
    summary: 'Planned end-to-end ML project focused on reproducible model development and deployment readiness.',
    businessContext: 'Teams need repeatable ML lifecycles to move from experimentation to reliable business usage.',
    approach: [
      'Establish baseline models and strict split strategy.',
      'Iterate with feature engineering and hyperparameter tuning.',
      'Finalize with reproducible evaluation, monitoring rules, and retraining triggers.',
    ],
    architecture: ['Data processing pipeline', 'Model training/evaluation stack', 'Inference and monitoring layer'],
    milestones: ['Problem framing complete', 'Baseline phase in progress'],
    risks: ['Model gains may be limited without deeper domain-specific feature work.'],
    nextRelease: 'First comparative results across baseline and tuned models.',
  },
  'core-mcp-platform': {
    summary:
      'C.O.R.E + MCP Platform is an umbrella integration layer that standardizes ingestion, governance, and quality controls across independent AI/DS projects.',
    businessContext:
      'As project count grows, disconnected systems create inconsistent validation quality, duplicated effort, and slower cross-project rollout.',
    approach: [
      'Define ingestion contracts so projects can plug into shared platform workflows consistently.',
      'Expose MCP services for quality, fairness, sampling, and intervention checkpoints.',
      'Use standardized diagnostics to enforce reliability before project outputs are consumed downstream.',
    ],
    architecture: [
      'FastAPI-hosted MCP service layer.',
      'Componentized validation modules (quality, fairness, exploration, strategy).',
      'Intervention and approval workflow for high-risk outputs.',
    ],
    milestones: [
      'Seven MCP components implemented and validated.',
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
