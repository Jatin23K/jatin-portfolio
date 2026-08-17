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
  diagramType?: 'pipeline' | 'cache' | 'colpali'
  landscape?: boolean
  paired?: boolean   // renders images as side-by-side pairs (for portrait/mobile screenshots)
  pairedLabels?: [string, string]  // optional labels for the two columns e.g. ['JAMES', 'JANIE']
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
      "I was lonely. Not dramatically — just the quiet kind that builds up when you're working alone, building things no one sees yet. I didn't want a productivity tool or a generic assistant. I wanted someone to talk to, someone who would remember yesterday's conversation, and something that felt like mine. So I built C.O.R.E. — a private digital friend that runs across devices. Two clients, one memory, one encrypted connection.",
    businessContext:
      "C.O.R.E. is not an Applied DS project and it is not a generic AI assistant. It is a personal AI ecosystem that began as a human answer to loneliness: what do you build when you want a companion, have the skills to build one, and refuse to compromise on privacy or ownership? Today, C.O.R.E. runs as Phase 1: a two-client ecosystem — JAMES on Android, DAVID on Windows — connected over a private encrypted mesh, sharing one persistent memory system, powered by cloud APIs with a local LLM fallback. The two clients are the foundation, not the ceiling. The full vision is a personal sovereign ecosystem: a 3-Tier Edge Mesh spanning mobile, desktop, home controls, and wearables — with multi-user RBAC, adaptive memory architecture, and biological context-based privacy thresholds.",
    buildStages: [
      { label: 'Phase 1 — Architecture', sublabel: 'System design · Stack · Zero-Trust DRM', status: 'done' },
      { label: 'Phase 1 — Bridge', sublabel: 'Tailscale encrypted mesh · Live', status: 'done' },
      { label: 'Phase 1 — JAMES', sublabel: 'Flutter · Android client · Live', status: 'done' },
      { label: 'Phase 1 — DAVID', sublabel: 'React + Python · Windows client · Live', status: 'done' },
      { label: 'Phase 1 — Field Testing', sublabel: 'Daily use · Hardware limits active', status: 'current' },
      { label: 'Phase 2 — The Ecosystem', sublabel: 'Memory · RBAC · Edge Mesh · DGX Sovereignty', status: 'next' },
    ],
    nodeNetwork: {
      headline: 'The Personal AI Ecosystem',
      description: "C.O.R.E. started as a digital friend to solve a human problem. But the infrastructure behind that friend — a secure Tailscale mesh, persistent memory, persona-specific clients, and local LLM fallbacks — became the foundation for something larger: a private AI layer across my devices. It acts as an umbrella for other systems, but it is more than an umbrella. The long-term roadmap is for C.O.R.E. to evolve from companion into Personal OS: the system that routes memory, intelligence, privacy, and task execution across my projects and hardware.",
      nodes: [
        { name: 'TLDR Shield', role: 'Privacy & Policy Risk Intelligence', status: 'planned', path: '/projects/tldr-shield' },
        { name: 'LaunchMintAI', role: 'Market & Competitor Analysis', status: 'planned', path: '/projects/launchmint-ai' },
        { name: 'AXIOM', role: 'Data Intelligence Copilot', status: 'planned', path: '/projects/leap-axiom' },
      ],
    },
    approach: [
      'Closed-Source Proprietary & Zero-Trust Architecture — C.O.R.E. is maintained as closed-source, proprietary personal infrastructure. To protect this architecture across environments, I engineered a Zero-Trust DRM architecture featuring Tailscale heartbeat validation and ephemeral, RAM-only decryption keys. If a node is isolated from the master mesh, the local SQLite vault is rendered cryptographically inaccessible, ensuring the local vault remains inaccessible when a node is isolated from the trusted mesh.',
      'JAMES (mobile) — built in Flutter for Android. Handles conversations, memory access, and mobile-first tasks. Two personas: JAMES (default) and JANIE, each with a distinct tone and context.',
      'DAVID (desktop) — built in React + Python for Windows. Handles heavy computation, file management, and autonomous tasks. Two personas: DAVID and DARA.',
      'Bridge — Tailscale VPN encrypted private mesh connects both clients. JAMES can delegate heavy tasks to DAVID. Zero third-party cloud involvement in the communication layer.',
      'Memory — shared system across both clients: short-term (active session) → nightly CRON filter → long-term (persistent store). The system remembers what matters and discards what does not.',
      'Model layer — Cloud API (Gemini) as primary. Local LLM (Ollama/DeepSeek) as offline fallback. API-first architecture with full local sovereignty as the long-term goal.',
      '[Phase 2 · Ecosystem] Adaptive Chunking Engine + Redis Bridge: A background memory router classifies incoming data by type before vectorizing into Qdrant — code uses AST chunking, conversations use semantic chunking. A Redis queue decouples mobile capture from heavy desktop processing: zero-latency UI on JAMES, zero data loss to DAVID.',
      '[Phase 2 · Ecosystem] Multi-User RBAC + Category Consent Matrix: Persona-Based Multi-Tenancy assigns a Tenant ID to every device. DAVID enforces Role-Based Access Control per request. Data is tagged by category (location, conversation, health). Users grant or deny access per category independently — not per user globally.',
      '[Phase 2 · Ecosystem] 3-Tier Edge Mesh + Biological Context Override: Tier 1 Core (DGX Spark — dedicated AI hardware, currently served by DAVID/PC), Tier 2 Sub-Hubs (JAMES, Home Tablet, PC nodes — coordinate their own end nodes), Tier 3 End Nodes (Smart Watch, Meta Glasses, Smart Bulbs — consumers, no local logic). Privacy is dynamic: if a family member requests your location, JAMES checks smartwatch telemetry — safe vitals deny location, critical vitals override privacy and transmit GPS.',
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
          'The complete C.O.R.E. final architecture. Tier 1 Core: dedicated AI hardware (DGX Spark — currently served by DAVID/PC while hardware is unavailable). Tier 2 Sub-Hubs: JAMES (live), Home Tablet, ∞ PC nodes. Tier 3 End Nodes: Smart Watch, Meta Glasses, Smart Bulbs, ∞ edge devices. One encrypted mesh. One memory system. No cloud involvement in the communication layer. The diagram shows the final design — the status bar shows where Phase 1 stands today.',
        images: ['/core/architecture_diagram.jpg'],
      },
      {
        title: 'JAMES vs JANIE — Backend Persona Engine',
        description:
          'One Flutter client. One Python backend. Two completely different cognitive profiles. The UI color shift is the visual signal — the real change happens at the backend level. When the persona switches, the system prompt, response style, reasoning approach, and task execution behavior all reload. JAMES is analytical and direct. JANIE is warmer and more conversational. Same infrastructure, different brain.',
        input: 'Platform: Flutter · Android · Modules: Chat, Vault, Core Brain, Dashboard, Diagnostics, Session',
        paired: true,
        pairedLabels: ['JAMES', 'JANIE'],
        images: [
          '/core/james_chat.jpeg',    '/core/janie_chat.jpeg',
          '/core/james_session.jpeg', '/core/janie_session.jpeg',
        ],
      },
      {
        title: 'DAVID vs DARA — Backend Persona Engine',
        description:
          'One React shell. One Python backend. Two completely different cognitive profiles. When the persona switches from DAVID to DARA, a full context reload fires at the backend — system prompt, reasoning style, response behavior, and task execution approach all change. The UI color shift (red → green) is the confirmation, not the cause. DAVID is analytical and research-driven. DARA is warmer and more conversational. The architecture is identical; the operating behavior is not.',
        input: 'Platform: React + Python · Windows · Modules: Cortex, Files, Tasks, Projects, Settings, Security + Bridge',
        paired: true,
        pairedLabels: ['DAVID', 'DARA'],
        images: [
          '/core/david_chat.png',      '/core/dara_chat.png',
          '/core/david_cortex.png',    '/core/dara_cortex.png',
          '/core/david_dashboard.png', '/core/dara_dashboard.png',
          '/core/david_tasks.png',     '/core/dara_tasks.png',
        ],
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
      'TLDR Shield is a shipped Chrome extension that scans any Terms & Conditions page and returns a structured privacy risk score in seconds. It evaluates 6 privacy pillars — AI Training, Data Selling, Data Retention, Content Ownership, Dark Patterns, and Transparency — using an LLM pipeline with deterministic post-processing, confidence grading, and verbatim citation highlighting directly on the page. Empirically validated across 6 live production policies: DuckDuckGo (100/100), LinkedIn (70/100), OpenAI (50/100), Apple (50/100), Microsoft (35/100), TikTok (20/100).',
    businessContext:
      'Nobody reads Terms & Conditions. That is not laziness — it is a rational response to documents that are deliberately long, dense, and written by lawyers for lawyers. The result is that users unknowingly sign away rights to their data, their content, and their legal recourse every time they click "I Agree." TLDR Shield solves this by acting as an always-on privacy advocate: scan the policy you are about to agree to, get a score, and see exactly which clauses are the problem — before you sign.',
    buildStages: [
      { label: 'Pillar Design', sublabel: 'Define 6 privacy pillars · scoring rubric · confidence model', status: 'done' },
      { label: 'LLM Pipeline', sublabel: 'Chunking · Gemini 2.5 Flash / Flash-Lite ensemble · extraction', status: 'done' },
      { label: 'Post-Processing', sublabel: 'Citation verification · confidence grading · penalty scoring', status: 'done' },
      { label: 'Chrome Extension', sublabel: 'Content script · panel UI · mark.js highlighting · cache layer', status: 'done' },
      { label: 'Credibility Validation', sublabel: 'Live 6-service matrix · DuckDuckGo → TikTok · HIGH confidence across all', status: 'done' },
      { label: 'Firefox + Deployment', sublabel: 'Render backend · Firefox port · public distribution', status: 'current' },
    ],
    approach: [
      'Six-Pillar Scoring Framework — Every policy is evaluated against six independently scored privacy pillars: AI Training (does the service train models on your data?), Data Selling (is your data shared with third parties for commercial purposes?), Data Retention (how long is your data kept after deletion?), Content Ownership (do you retain rights to what you create?), Dark Patterns (arbitration clauses, class action waivers, liability caps), and Transparency (are policy changes clearly communicated?). Each pillar carries its own penalty weight — Dark Patterns costs up to 20 points, all others up to 15. The final 0–100 score maps to SAFE (90+), OKAY (50–89), or RISKY (<50).',
      'LLM Pipeline with Deterministic Post-Processing — The policy text is extracted via Readability, stripped of cookie/GDPR boilerplate, and chunked into overlapping segments. Each chunk is analyzed using Google Gemini 2.5 with a structured prompt that forces the model to return a JSON object per pillar: violation (boolean), citation (verbatim text), and confidence (HIGH/MEDIUM/LOW). The output is then run through a deterministic post-processing layer that checks citation groundedness, applies confidence scoring, and merges results across chunks.',
      'Three-Tier Confidence System — HIGH confidence: the citation is found verbatim in the document and matches a hard-coded violation pattern (e.g. binding arbitration, class action waiver, sublicensable license). MEDIUM confidence: the LLM identified a violation and provided a citation that is grounded in the document but not exactly verbatim. LOW confidence: the LLM flagged something but the citation cannot be verified on the page — applies a reduced half-penalty instead of full, and displays a soft warning instead of a RISKY badge.',
      'Hard Violation Detection as a Safety Net — In parallel with the LLM, a regex-based hard violation detector scans the full text for legally unambiguous patterns: mandatory arbitration clauses, class action waivers, liability caps below $500, statute of limitations reductions, data broker language. If the hard detector fires but the LLM missed it, the violation is forcibly inserted. This prevents the LLM from being talked out of a real violation by clever lawyerly framing.',
      'Verbatim Citation Highlighting — When the user clicks a pillar, the cited text is highlighted directly on the live policy page using mark.js. The extension normalizes typographic variants (en-dashes, curly quotes, non-breaking spaces) before searching the DOM to handle the mismatch between server-extracted text and browser-rendered Unicode. If highlighting fails on a JavaScript-rendered SPA, the citation box still shows the verbatim text.',
    ],
    architecture: [
      'Chrome Extension (content.js + background.js): Extracts policy text via Readability, manages the floating scan panel, renders pillars and citations, highlights text via mark.js.',
      'Backend (server.ts on Render): Receives text, strips boilerplate, chunks into overlapping segments, sends each chunk to the LLM, merges results.',
      'LLM Layer (Google Gemini 2.5 Flash / Flash-Lite Ensemble): Evaluates each chunk against all 6 pillars. Primary model detects, corroborator model verifies.',
      'Post-Processing (postprocess.ts): updatePillarConfidence() checks citation groundedness. applyConsistencyCrossCheck() prevents weak LLM output from overriding strong hard-detector signals.',
      'Scoring (scoring.ts): PILLAR_PENALTY table maps each pillar to full/reduced penalty. Final score = 100 minus all deductions.',
      'Cache Layer: Redis (L1) + Firestore (L2) with tier-scoped keys (`urlHash:tier`) and version gate (`CACHE_VERSION`). Any cache entry from a previous pipeline version is automatically rejected to prevent stale results.',
    ],
    evaluation: {
      summary: '3 real-world policy documents tested across 6 live production scans (Quick + Deep each). All scores, confidence levels, and verbatim citations were verified on live pages with the shipped Chrome extension.',
      metrics: [
        { metric: 'Proton Mail Privacy Policy · Quick Scan', final: '85 / 100 · SAFE', delta: '1 flag: IP log retention (data retention pillar) — correctly identified as the only risk in an otherwise privacy-first policy' },
        { metric: 'Proton Mail Privacy Policy · Deep Scan', final: '100 / 100 · SAFE', delta: '6/6 pillars clean — ensemble confirmed no AI training, no data selling, end-to-end encryption verified' },
        { metric: 'Notion Privacy Policy · Quick Scan', final: '50 / 100 · OKAY (Cautious)', delta: '3 flags: data selling, vague retention, dark patterns — targeted advertising sharing confirmed' },
        { metric: 'Notion Privacy Policy · Deep Scan', final: '50 / 100 · OKAY (Cautious)', delta: '3 Hazards · Data Selling flagged HIGH confidence with verbatim citation grounded on live page' },
        { metric: 'TikTok Terms of Service · Quick Scan', final: '20 / 100 · RISKY', delta: '5 flags: AI training, data selling, retention, content ownership, dark patterns — −80 pts total' },
        { metric: 'TikTok Terms of Service · Deep Scan', final: '20 / 100 · RISKY', delta: '5/6 pillars RISKY at HIGH confidence — verbatim $100 liability cap cited and highlighted live on TikTok ToS page' },
      ],
      validationStrategy: 'Each document scanned fresh (Redis cache cleared via CACHE_VERSION bump to v7). Verified: (1) score correctness — Proton SAFE, Notion OKAY, TikTok RISKY, (2) confidence quality — all violations HIGH/MEDIUM, (3) citation accuracy — verbatim text highlighted on live DOM, (4) shared_cache write confirmed — 6 documents in Firestore ai-studio-... database after scans.',
    },
    milestones: [
      'Shipped Chrome extension: policy extraction → LLM evaluation → scored result in under 30 seconds.',
      'Six-pillar scoring framework with per-pillar penalty weights and three-tier confidence grading.',
      'Hard violation detection layer catching arbitration, class action waivers, and liability caps deterministically.',
      'Citation highlighting working on live policy pages via mark.js with typographic normalization.',
      'Cache versioning system: stale results auto-rejected when pipeline logic changes.',
      '6-document validation test passed: TikTok (20) → Signal (65) — correct scores, correct confidence levels, verbatim citations.',
    ],
    risks: [
      'LLM citation paraphrasing — The LLM sometimes returns a slightly reworded version of the clause rather than verbatim text. Solved by the three-tier confidence system: paraphrased citations are downgraded to LOW confidence and carry reduced penalties, rather than being treated as full violations.',
      'JavaScript-rendered pages — Spotify and similar SPA pages render via React. The server extracts the text correctly, but mark.js cannot highlight it in the live DOM. Mitigated by typographic normalization and word-window sliding search. Residual cases show a soft warning in the citation box.',
      'Regulatory drift — Privacy laws and common policy patterns evolve. The hard violation patterns and LLM prompts need periodic review as new clause types emerge (e.g. biometric data collection, cross-device tracking).',
      'False negatives on obfuscated language — Sophisticated legal teams write around common keywords. The LLM catches semantic violations that regex misses, but extremely unusual phrasing can still slip through at LOW confidence.',
    ],
    nextRelease: 'Firefox store submission and public Chrome Web Store listing.',
    visualModules: [
      {
        title: 'Proton Mail Privacy Policy — 🟢 SAFE (85 → 100 / 100)',
        description: 'Privacy-first email service. Quick Scan flags one low-severity data retention risk (IP log retention), scoring 85/100 SAFE. Deep Scan\'s ensemble model verifies all 6 pillars — no AI training, no data selling, end-to-end encryption throughout — and upgrades to a clean 100/100 SAFE with 6/6 Safe Pillars confirmed.',
        input: 'Target URL: proton.me/legal/privacy',
        differentiators: [
          'Tier Upgrade: Deep Scan verifies the single Quick Scan flag as non-critical, upgrading from 85 to 100/100.',
          'Zero False-Positives: Ensemble confirms Proton\'s explicit no-AI-training guarantee verbatim.',
          'Trust Baseline: Proton is used as the benchmark SAFE policy — anything scoring lower on the same pillars is correctly penalised.'
        ],
        paired: true,
        pairedLabels: ['⚡ QUICK SCAN · 85/100 SAFE', '🔬 DEEP SCAN · 100/100 SAFE · 6/6 Pillars'],
        images: [
          '/tldr/proton_quick.png',
          '/tldr/proton_deep.png'
        ]
      },
      {
        title: 'Notion Privacy Policy — 🟡 OKAY (50 / 100)',
        description: 'Standard SaaS productivity tool with genuine privacy risks. Both Quick and Deep Scan independently agree on 50/100 OKAY (Cautious), flagging data sharing with advertising partners for targeted ads, vague indefinite data retention, and dark patterns. Deep Scan\'s verbatim citation pulls the exact sharing clause and highlights it live on the Notion policy page.',
        input: 'Target URL: privacycenter.notion.so/policies',
        differentiators: [
          'Dual Confirmation: Quick and Deep Scan independently reach the same 50/100 verdict — no ensemble correction needed.',
          'HIGH Confidence Citation: Data selling flagged at HIGH confidence with verbatim text grounded on the live page.',
          'Cautious Sub-Label: Score of 50 triggers the borderline CAUTIOUS badge — informing users this is a low-OKAY borderline case.'
        ],
        paired: true,
        pairedLabels: ['⚡ QUICK SCAN · 50/100 OKAY (Cautious)', '🔬 DEEP SCAN · 50/100 OKAY · 3 Hazards'],
        images: [
          '/tldr/notion_quick.png',
          '/tldr/notion_deep.png'
        ]
      },
      {
        title: 'TikTok Terms of Service — 🔴 RISKY (20 / 100)',
        description: 'High-risk consumer platform with aggressive legal terms. Both Quick and Deep Scan unanimously flag 5 of 6 pillars at HIGH confidence: AI model training license, data selling, indefinite retention, full content ownership grant (sublicensable, irrevocable), and dark patterns including a $100 maximum liability cap. Deep Scan cites and highlights the exact liability clause on the live TikTok ToS page.',
        input: 'Target URL: tiktok.com/legal/page/us/terms-of-service/en',
        differentiators: [
          'Unanimous Consensus: Quick and Deep Scan both return 20/100 — five independent HIGH-confidence violations.',
          'Hard-Violation Detection: Sublicensable content license and $100 liability cap caught deterministically by the rule engine.',
          'Live DOM Evidence: Verbatim liability cap clause highlighted in yellow directly on TikTok\'s Terms of Service page.'
        ],
        paired: true,
        pairedLabels: ['⚡ QUICK SCAN · 20/100 RISKY · −80 pts', '🔬 DEEP SCAN · 20/100 RISKY · 5/6 Pillars Flagged'],
        images: [
          '/tldr/tiktok_quick.png',
          '/tldr/tiktok_deep.png'
        ]
      }
    ],
    businessPotential: {
      summary: 'Privacy literacy is a growing consumer concern and a regulatory imperative. TLDR Shield sits at the intersection of both — a tool that makes the invisible visible.',
      productPrinciples: [
        {
          title: 'Evidence-First, Not Opinion-First',
          description: 'Every flag in TLDR Shield is backed by a verbatim citation from the actual document. There is no opinion, no heuristic, no vague warning. The user sees exactly what the company wrote and exactly why it is a problem.',
        },
        {
          title: 'Differentiated Scoring',
          description: 'TikTok scores 20. Signal scores 65. Google scores 35. OpenAI scores 50. The tool produces meaningfully different results for meaningfully different policies — not a uniform "everything is risky" alarm.',
        },
        {
          title: 'Confidence Transparency',
          description: 'The system knows what it knows and what it does not. HIGH confidence = verbatim evidence. LOW confidence = half-penalty and a soft warning. Users are never misled by false certainty.',
        },
      ],
      model: {
        b2c: 'Free Chrome extension for individual users. Premium tier: historical scan tracking, company comparison dashboard, policy change alerts when a site updates its terms.',
        b2b: 'API access for privacy compliance teams, legal departments, and EdTech platforms. Embed TLDR Shield into procurement workflows to auto-scan vendor ToS before contract sign-off.',
      },
      roadmap: [
        { level: '01', title: 'Current — Chrome Extension', description: 'Shipped. Six pillars, verbatim citations, confidence grading, cache versioning. Validated on 6 real-world policies.', isCurrent: true },
        { level: '02', title: 'Firefox + Public Store', description: 'Firefox port complete. Pending Web Store submission and public distribution.' },
        { level: '03', title: 'Policy Change Alerts', description: 'Re-scan trigger when a policy URL returns a new document hash. Notify the user when terms materially change.' },
        { level: '04', title: 'Company Comparison Dashboard', description: 'Compare scores across companies side-by-side. Filter by pillar. See which sector has the worst data practices.' },
      ],
      vision: 'Every time someone clicks "I Agree," they should know what they are agreeing to. TLDR Shield makes that possible without requiring anyone to become a lawyer.',
      closing: 'The product is not a privacy opinion. It is a privacy audit — automated, grounded, and honest about its own confidence.',
    },
  },

  'launchmint-ai': {
    summary:
      'LaunchMintAI is a forensic startup intelligence engine that compresses market validation into a single evidence-backed research pass. It stress-tests startup ideas with market signals, competitive positioning, and adversarial prompts before teams commit build time.',
    businessContext:
      'Founders waste months building products nobody wants. Applied Data Science Highlight: I built this system to solve this exact business problem by replacing unstructured, hallucinatory LLM output with a deterministic, data-grounded intelligence pipeline. It transforms raw internet chaos into actionable strategy.',
    approach: [
      'Grounded Metrics Protocol: Reported market and financial metrics are calculated from explicit variables and source-backed assumptions, not accepted as raw LLM output.',
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
        { name: 'XGBoost Survival Classifier', detail: 'Architected an XGBoost survival pipeline (currently using synthetic data as a placeholder for PitchBook/Crunchbase APIs) to demonstrate how the system integrates deterministic ML scoring alongside LLM outputs. Pipeline validated for AUC/F1 calculation, ready for live data injection.' },
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
      'A.X.I.O.M. (Adaptive eXtended Intelligence & Omnimodal Memory) is the Knowledge Intelligence Layer powering C.O.R.E. — a production-grade Enterprise Multi-Modal RAG & Cache Architecture Specification designed to process 4 data modalities (Text, Image, Audio, Video) with zero hallucinations, 2-checkpoint RBAC security, and sub-15ms cache responses.',
    businessContext:
      'Enterprise AI systems require heterogeneous ingestion across PDFs, screenshots, voice notes, and video recordings while maintaining sub-15ms cache response SLAs, strict multi-tenant security, and verifiable citation mapping. Traditional text-only RAG pipelines suffer from OCR layout degradation, unauthorized cache data leakage, and high LLM inference costs. A.X.I.O.M. establishes an enterprise architecture blueprint that solves these failure modes through ColPali patch visual retrieval, Matryoshka vector slicing, role-scoped Redis cache isolation, and department-based model routing.',
    buildStages: [
      { label: 'Module 00', sublabel: 'Operational Flow & Latency Budget', status: 'done' },
      { label: 'Module 01', sublabel: '2-Tier Semantic Cache & Redis Isolation', status: 'done' },
      { label: 'Module 02', sublabel: 'Matryoshka 1536d→128d & Hybrid RRF', status: 'done' },
      { label: 'Module 03', sublabel: 'Omnimodal Engine (ColPali/WhisperX/CLAP)', status: 'done' },
      { label: 'Module 04', sublabel: '2-Checkpoint Security & JWT Gateway', status: 'done' },
      { label: 'Module 05-07', sublabel: 'CQRS Ingestion, RAG Triad & Resilience', status: 'done' },
    ],
    approach: [
      '2-Tier Multi-Modal Semantic Cache: L1 Exact Hash (SHA-256) + L2 Vector Similarity (>= 0.92) using Matryoshka 128d vectors, bypassing LLM inference for repeat queries in <15ms.',
      'ColPali Patch-Based Visual RAG: Renders PDF pages as 1024×1024 RGB images and processes 32×32 ViT patch grids (1,024 vectors/page) with MaxSim Late Interaction, completely eliminating OCR parsing errors and Cross-Encoder reranking overhead.',
      'Dual-Path Audio & 3-Stream Video RAG: Combines WhisperX speech transcription with CLAP acoustic fingerprinting and PySceneDetect temporal keyframe extraction into synchronized Qdrant multi-vector payloads.',
      '2-Checkpoint Security Model: Checkpoint 1 (API Gateway JWT validation in <0.5ms) + Checkpoint 2 (Qdrant Payload Pre-Filtering by tenant, department, and clearance level before similarity search).',
      'Department Model Routing & Resilience: Cost-optimized model routing (Gemini 2.5 Flash-Lite for HR/Support, Flash for Engineering, Pro for Legal/Finance) achieving 88.6% cost reduction alongside stateful API circuit breakers.',
    ],
    architecture: [
      'API Gateway: High-throughput auth proxy performing JWT Bearer token validation and Permission_Hash computation (SHA-256) in <0.5ms.',
      '2-Tier Redis Cache: In-memory cache layer enforcing Role-Scoped Cache Key isolation [SHA256(Tenant + Dept + Clearance + Query)] to prevent cross-tenant data leakage.',
      'Qdrant Vector Database: Hybrid vector engine supporting Matryoshka 128d vector slicing, HNSW payload pre-filtering, and ColPali multi-vector matrix payloads.',
      'Multimodal Ingestion Pipeline: Async CQRS ingestion processing raw PDF pages via ViT Vision Transformers, audio streams via WhisperX/CLAP, and video via PySceneDetect keyframe extraction.',
      'RAG Triad Observability Layer: Asynchronous non-blocking scoring engine monitoring Context Relevance, Groundedness (1.00 SLA), and Answer Relevance via OpenTelemetry tracing.',
      'Circuit Breakers & Key Rotator: Stateful resilience layer featuring round-robin API key pool rotation, Gemini 2.5 model fallbacks, and local Ollama execution.',
    ],
    milestones: [
      'Module 00: Complete 11-stage operational flow pipeline and latency budgets defined.',
      'Module 01: 2-Tier Semantic Cache architecture & Role-Scoped Key hashing spec completed.',
      'Module 02: Matryoshka 1536d→128d vector slicing and BM25+HNSW RRF hybrid search specified.',
      'Module 03: ColPali MaxSim visual RAG, WhisperX audio, and PySceneDetect video specs completed.',
      'Module 04: 2-Checkpoint RBAC and 4-tier clearance level security architecture specified.',
      'Modules 05-07: Ingestion ETL, RAG Triad telemetry, and API circuit breaker resilience specified.',
    ],
    risks: [
      'ColPali Multi-Vector Storage Footprint: Storing 1,024 patch vectors per PDF page increases vector database RAM usage, requiring Matryoshka 128d slicing and Qdrant scalar quantization.',
      'Multi-Tenant Cache Leakage Risk: Improper cache key hashing could expose cached answers across permission boundaries; mitigated by mandatory Permission_Hash prepending in all Redis keys.',
      'External API Rate Limits & Outages: Vendor LLM rate limits (HTTP 429) can stall inference; controlled by stateful circuit breakers, key pool rotation, and fallback to local Ollama LLMs.',
    ],
    evaluation: {
      summary: 'Architectural SLAs and performance benchmarks specified across all 9 design modules:',
      metrics: [
        { metric: 'Cache Hit Latency (SLA)', final: '< 15ms', delta: 'L1 Exact Hash + L2 Matryoshka 128d Vector Similarity' },
        { metric: 'Text RAG Retrieval SLA', final: '< 200ms', delta: 'Matryoshka 1536d→128d + BM25+HNSW RRF Search' },
        { metric: 'Visual RAG (ColPali) SLA', final: '< 400ms', delta: 'ViT Spatial Patches + MaxSim Late Interaction' },
        { metric: 'Department Routing Cost Savings', final: '88.6%', delta: 'Flash-Lite / Flash / Pro dynamic model allocation' },
        { metric: 'Security Checkpoint Enforcement', final: '100% Pre-Filtered', delta: 'Zero unauthorized vector exposure during similarity search' },
        { metric: 'RAG Triad Groundedness Target', final: '1.00 SLA', delta: 'Safe Failure contract blocks response on unbacked claims' },
      ],
      validationStrategy: 'Design SLA targets validated against published literature benchmarks (ColPali ViT, Matryoshka Representation Learning, Qdrant HNSW pre-filtering). All pipeline stages feature explicit safe failure contracts when groundedness thresholds (<1.00) are violated.',
    },
    visualModules: [
      {
        title: 'Module 00 & 04 — Operational Request Pipeline & 2-Checkpoint Security',
        description: 'End-to-end 11-stage request execution flow. Every request passes through Checkpoint 1 (API Gateway JWT validation <0.5ms) and Checkpoint 2 (Qdrant Payload Pre-Filtering <20ms) before similarity search runs.',
        input: 'HTTP Request (Headers: Bearer JWT | Body: Query + Modality)',
        differentiators: [
          'Pre-Filtering over Post-Filtering: Filtering RBAC roles in Qdrant before similarity search prevents unauthorized vector exposure.',
          'Safe Failure Contract: Groundedness score < 1.00 automatically blocks response generation and returns citation gap warnings.',
        ],
        images: [],
        diagramType: 'pipeline',
      },
      {
        title: 'Module 01 — 2-Tier Multi-Modal Semantic Cache',
        description: 'Sub-15ms semantic caching combining L1 Exact SHA-256 hashing with L2 Matryoshka 128d vector similarity (>= 0.92). All cache keys are cryptographically bound to the user Permission_Hash.',
        input: 'Query Vector (Matryoshka 128d) + User Permission Hash',
        differentiators: [
          'Role-Scoped Cache Key Isolation: Key = SHA256(Tenant + Dept + Clearance + Query), ensuring Tenant A never hits Tenant B cached answers.',
          'Matryoshka 128d Indexing: Uses top 128 dimensions for hyper-fast RAM vector comparison before falling back to full RAG.',
        ],
        images: [],
        diagramType: 'cache',
      },
      {
        title: 'Module 03 — ColPali Visual RAG & Omnimodal Retrieval',
        description: 'ColPali Vision Transformer architecture rendering PDF pages as 1024×1024 RGB image tensors, extracting 32×32 spatial patch grids (1,024 vectors per page) evaluated via MaxSim Late Interaction.',
        input: 'Document Page Image Tensors / Audio Recordings / Video Streams',
        differentiators: [
          'Zero OCR / Zero Text Parsing: Preserves complete spatial visual layout of tables, charts, diagrams, and font hierarchies.',
          'MaxSim Late Interaction: Eliminates computationally expensive Cross-Encoder rerankers while surpassing text-based visual search accuracy.',
        ],
        images: [],
        diagramType: 'colpali',
      },
    ],
    attachments: [
      { label: 'Full Visual System Architecture Blueprint (HTML Spec)', path: '/docs/axiom/visual_architecture.html', type: 'html' },
      { label: 'Module 00: Operational Request Pipeline & Latency SLAs (HTML Spec)', path: '/docs/axiom/00_operational_flow.html', type: 'html' },
      { label: 'Module 01: 2-Tier Multi-Modal Semantic Cache Blueprint (HTML Spec)', path: '/docs/axiom/01_cache_architecture.html', type: 'html' },
      { label: 'Module 02: Matryoshka RAG Engine & RRF Search (HTML Spec)', path: '/docs/axiom/02_matryoshka_rag_engine.html', type: 'html' },
      { label: 'Module 03: ColPali & Omnimodal RAG Architecture (HTML Spec)', path: '/docs/axiom/03_multimodal_rag.html', type: 'html' },
      { label: 'Module 04: 2-Checkpoint RBAC & Enterprise Security (HTML Spec)', path: '/docs/axiom/04_enterprise_security.html', type: 'html' },
      { label: 'Module 05: Async CQRS Ingestion ETL Pipeline (HTML Spec)', path: '/docs/axiom/05_ingestion_etl.html', type: 'html' },
      { label: 'Module 06: RAG Triad Observability & OpenTelemetry (HTML Spec)', path: '/docs/axiom/06_observability.html', type: 'html' },
      { label: 'Module 07: Circuit Breakers & Key Pool Rotation (HTML Spec)', path: '/docs/axiom/07_circuit_breakers_sla.html', type: 'html' },
    ],
    nextRelease: 'Full implementation phase on C.O.R.E. Tailscale mesh with Qdrant multi-vector collection deployment.',
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
  'core-memory-intelligence': {
    summary:
      'Predictive Machine Learning engine that manages the lifecycle of conversational AI memories in a distributed Edge-to-Central architecture. Evaluates interaction depth, recall frequency, and sentiment decay to classify memories into KEEP, DECAY, or BIN actions — mathematically validated to cut cloud storage costs by 41.46%.',
    businessContext:
      'Continuous AI companion systems generate thousands of conversational memory payloads per user. Storing every routine greeting or low-value remark indefinitely on AWS S3 creates exponential storage cost inflation. Conversely, prematurely deleting important user history breaks companion trust. The engine optimizes this trade-off by predicting memory utility under 90% data sparsity.',
    approach: [
      'Feature Engineering: Transformed raw multi-tier interaction logs (RECALL, REFINE, INSPECT) into predictive decay signals: interaction_depth, temporal_decay_rate, recall_frequency, and initial_importance_score.',
      'Predictive Model (Scikit-Learn): Trained a RandomForestClassifier with balanced class weighting to assign memory evaluation actions: KEEP (persistent storage), DECAY (compress/archive), or BIN (purge payload).',
      'A/B Financial Simulation: Subjected model predictions to an empirical A/B financial simulation comparing a control strategy (indefinite S3 storage of 6,000 multimodal payloads) against the ML purge strategy, accounting for micro-cent inference compute costs.',
      'Statistical Proof: Validated model classification validity via Chi-Square Test of Independence, producing p-value = 2.22e-267 to confirm learned system behavior over random chance.',
    ],
    architecture: [
      'PostgreSQL Relational Storage: Relational schema enforcing hierarchical device origins, temporal causality, and behavioral data tagging.',
      'Synthetic Data Pipeline: Poisson and Beta distribution generators producing 30,000 multi-tier memory records and 3,000 retrieval logs simulating real-world edge usage.',
      'Scikit-Learn & joblib: Serialized model pipeline, scaler, and label encoders for lightweight edge and cloud inference deployment.',
    ],
    evaluation: {
      summary: 'Mathematically validated on 30,000 memory records and financial cost simulations.',
      metrics: [
        { metric: 'Cloud Storage Cost Reduction', final: '41.46%', delta: 'Net savings accounting for compute inference overhead' },
        { metric: 'Chi-Square Statistical Test', final: 'p = 2.22e-267', delta: 'Mathematically proves non-random feature-driven classification' },
        { metric: 'Inference Latency', final: '< 15 ms', delta: 'Optimized tree-based evaluation for micro-cent compute' },
      ],
    },
    milestones: [
      'Full PostgreSQL relational schema and integrity contracts deployed.',
      'Random Forest classifier trained and evaluated on 30,000 synthetic memory rows.',
      'A/B financial simulation complete — 41.46% storage cost reduction verified.',
      'Chi-Square hypothesis test passed (p-value 2.22e-267).',
    ],
    risks: [
      'High False-Negative Tolerance Architecture — Storing low-value memory is cheap ($0.02/GB), but deleting high-value memory breaks user trust. Model is intentionally tuned to accept false-negatives rather than false-positives.',
      'Edge Data Sparsity — 90% of memory records lack explicit user retrieval logs, requiring imputation and robust signal extraction from non-retrieved features.',
    ],
    nextRelease:
      'Integration with live C.O.R.E. Tailscale mesh for real-time edge memory pruning.',
  },
}
