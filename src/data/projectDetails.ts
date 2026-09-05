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
  diagramType?: 'pipeline' | 'cache' | 'colpali' | 'core-mesh'
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
    corePillars?: ProjectNode[]
    appliedCapabilities?: ProjectNode[]
    nodes?: ProjectNode[]
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
      { label: 'Phase 1 — Architecture', sublabel: 'System design · Mesh Stack · Ephemeral Security', status: 'done' },
      { label: 'Phase 1 — Bridge', sublabel: 'Tailscale encrypted mesh · Live', status: 'done' },
      { label: 'Phase 1 — JAMES', sublabel: 'Flutter · Android client · Live', status: 'done' },
      { label: 'Phase 1 — DAVID', sublabel: 'React + Python · Windows client · Live', status: 'done' },
      { label: 'Phase 1 — Field Testing', sublabel: 'Active · Hardware limits & socket telemetry', status: 'current' },
      { label: 'Phase 2 — The Ecosystem', sublabel: 'Memory · RBAC · Edge Mesh · DGX Sovereignty', status: 'next' },
    ],
    nodeNetwork: {
      headline: 'The Personal AI Ecosystem',
      description: "C.O.R.E. started as a digital friend to solve a human problem. But the infrastructure behind that friend — a secure Tailscale mesh, persistent memory, persona-specific clients, and local LLM fallbacks — became the foundation for something larger: a private AI layer across my devices. It acts as an umbrella for other systems, but it is more than an umbrella. The long-term roadmap is for C.O.R.E. to evolve from companion into Personal OS: the system that routes memory, intelligence, privacy, and task execution across my projects and hardware.",
      corePillars: [
        { name: 'C.O.R.E. Memory Engine', role: 'Behavioral Decay & Sync', status: 'connected', path: '/projects/core-memory-intelligence' },
        { name: 'A.X.I.O.M.', role: 'Omnimodal RAG Library', status: 'connected', path: '/projects/leap-axiom' },
      ],
      appliedCapabilities: [
        { name: 'TLDR Shield', role: 'Privacy & Ingestion Risk', status: 'connected', path: '/projects/tldr-shield' },
        { name: 'LaunchMintAI', role: 'Forensic Market Cortex', status: 'connected', path: '/projects/launchmint-ai' },
      ],
      nodes: [
        { name: 'TLDR Shield', role: 'Privacy Ingestion & Policy Risk Intelligence', status: 'connected', path: '/projects/tldr-shield' },
        { name: 'LaunchMintAI', role: 'Forensic Market & Competitor Analysis Cortex', status: 'connected', path: '/projects/launchmint-ai' },
        { name: 'C.O.R.E. Memory Engine', role: 'Predictive Lifecycle & Logarithmic Decay', status: 'connected', path: '/projects/core-memory-intelligence' },
        { name: 'A.X.I.O.M.', role: 'Omnimodal RAG Knowledge Base Library', status: 'connected', path: '/projects/leap-axiom' },
      ],
    },
    approach: [
      '[Phase 1 · Field Testing] Private Sovereign Infrastructure — C.O.R.E. was evaluated as private personal infrastructure running on personal hardware with real-world credentials, private notes, and empirical hardware telemetry. Ephemeral session keys and Tailscale mesh encryption ensure that local data remains cryptographically locked.',
      '[Phase 1 · Field Testing] JAMES (Mobile Node) — Built in Flutter for Android. Handles mobile interaction, voice I/O, rapid dictation, and local tool execution with dual personas: JAMES (direct) and JANIE (warm).',
      '[Phase 1 · Field Testing] DAVID (Desktop Node) — Built in React + FastAPI for Windows. Handles heavy compute, OS automation, and multi-agent depth with dual personas: DAVID (analytical) and DARA (conversational).',
      '[Phase 1 · Field Testing] Sovereign Bridge — Encrypted Tailscale private mesh directly connecting Mobile ↔ PC for peer-to-peer task offloading with zero third-party proxy involvement.',
      '[Phase 1 · Field Testing] Plug-and-Play Model Layer — Provider-agnostic inference architecture (ModelAdapter + SchemaNormalizer) supporting Gemini, NVIDIA NIM, and local Ollama fallback with automated thought-tag stripping and JSON repair.',
      '[Phase 1 · Field Testing] Dual-Gear Execution Depth — Low-latency STANDARD Gear (1–3s) for daily tasks and MAX_DEPTH Swarm Overdrive (15–45s) for multi-agent MCTS and adversarial reflection.',
      '[Phase 2 · Target Vision] Hub-and-Spoke DGX Star Topology — Dedicated Central Sovereign Node (DGX / Always-On Server) managing the master Qdrant vector index, centralized risk evaluator, and IoT protocol bus.',
      '[Phase 2 · Target Vision] Satellite Fleet & Store-and-Forward Queuing — Mobile, Home Tablet, and laptop nodes capture tasks locally (via 3B quantized model) and auto-sync via a deferred offline queue upon reconnecting to the Central Node.',
      '[Phase 2 · Target Vision] IoT & Physical Control Bus — Risk-gated Home Assistant / MQTT integration. Low-risk ambient actions (lights, AC, curtains) auto-execute; high-risk actions (locks, payments) require primary node physical verification.',
    ],
    architecture: [
      '[Phase 1 · Field Testing] Mobile Client (JAMES): Flutter · Android — Chat, Vault, Core Brain, Safe Tab, Dashboard, Voice STT/TTS (Hardware limits active).',
      '[Phase 1 · Field Testing] Desktop Hub (DAVID): React + FastAPI · Windows — Cortex, Files, Multi-Agent Swarm, SQLite Memory Store, Local OS Control (Hardware limits active).',
      '[Phase 1 · Field Testing] Sovereign Bridge: Tailscale VPN encrypted P2P mesh — Direct bidirectional Phone ↔ PC communication.',
      '[Phase 1 · Field Testing] Inference Layer: Multi-provider abstraction (Gemini, NVIDIA NIM, Ollama) with SchemaNormalizer and automated regression checks.',
      '[Phase 2 · Target] Central Sovereign Node: Dedicated always-on hardware hub (DGX Spark) hosting Master Qdrant Vector Index & Swarm Dispatcher.',
      '[Phase 2 · Target] Satellite Node Fleet: Home Tablet, laptop nodes, and IoT relays connected to Central Node.',
      '[Phase 2 · Target] Store-and-Forward Offline Queue: Local 3B GGUF model captures tasks offline and syncs with Central Node on reconnect.',
      '[Phase 2 · Target] Two-Tier Memory at Scale: Node-local logarithmic decay (S(t)) + Central Shared A.X.I.O.M. Omnimodal RAG.',
    ],
    milestones: [
      '[Phase 1 · Field Testing] Dual-client ecosystem functional with dual personas (JAMES/JANIE and DAVID/DARA)',
      '[Phase 1 · Field Testing] Sovereign Tailscale mesh bridge operational — bidirectional mobile ↔ desktop task offloading',
      '[Phase 1 · Field Testing] Execution Depth Engine active — STANDARD (1-3s) and MAX_DEPTH Swarm Overdrive verified',
      '[Phase 1 · Field Testing] Provider-agnostic ModelAdapter & SchemaNormalizer active with 100% benchmark score',
      '[Phase 1 · Field Testing] Daily personal field operations active across real Android and Windows hardware with limits logged',
    ],
    risks: [
      'Local mobile LLM execution is constrained by physical RAM limits (OOM risk above 16k context on Termux). Heavy research is delegated to desktop node over Tailscale.',
      'Status: Field Testing. Both clients are functional and actively used daily, serving as the real-world baseline for Phase 2 Central-Node scaling.',
    ],
    nextRelease:
      'Phase 2 Hub-and-Spoke DGX Architecture — Central Dedicated Hardware Hub (DGX Spark), Master Qdrant Vector Index, Store-and-Forward Offline Queuing, and Risk-Gated Home Assistant / MQTT IoT Bus.',
    visualModules: [
      {
        title: 'System Architecture (Phase 1 Baseline vs. Phase 2 Target)',
        description:
          'Phase 1 (Field Testing · Hardware Limits Active): 2-Node Mesh connecting only Mobile (JAMES on Android) and PC (DAVID on Windows) directly over Tailscale. Phase 2 (Target Architecture): Dedicated standalone hardware Central Node (DGX Spark) that stays always-active on the Tailscale mesh, with Mobile, PC, Home Control Tablet, and IoT relays connecting as satellite nodes to the Central Node.',
        images: [],
        diagramType: 'core-mesh',
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
      'TLDR Shield is an Applied NLP risk classification and grounded extraction pipeline that analyzes Terms of Service and Privacy Policies across 6 core risk pillars in seconds. Rather than relying on uncalibrated LLM opinions, it implements a dual-tier architecture: sub-second quick triage (~800ms) and a high-precision dual-model ensemble with deterministic post-processing rules (Deep Scan, ~15s). Evaluated on a 25-service benchmark against ToS;DR ground truth, the system achieves 94% Precision, 93% Recall, and 25/25 rating accuracy, recovering +29% precision over raw LLM baselines with 100% verbatim DOM text grounding.',
    businessContext:
      'Terms of Service and Privacy Policies average 10,000–30,000 words of evasive legalese. 91% of consumers agree without reading, unknowingly surrendering private data rights, generative AI training licenses, and legal protections (forced arbitration, liability caps). Generic LLM summarizers fail on edge cases, hallucinate citations, and lack quantitative calibration. TLDR Shield solves this with an objective, deterministic privacy risk auditor that outputs a calibrated 0–100 risk score backed by 100% verbatim citations highlighted in yellow directly on the live webpage in under 30 seconds. (Architecture Note: Deployed as an independent Applied DS product and also integrated as a specialized Privacy Ingestion Risk Cortex inside the C.O.R.E. Sovereign Ecosystem).',
    buildStages: [
      { label: 'Pillar & Scoring Taxonomy', sublabel: '6 risk pillars · deterministic deduction weights · 3-tier confidence', status: 'done' },
      { label: 'Sentence Chunker & Co-Scan', sublabel: '5k/1k sentence-aware chunker · Privacy Policy co-scan engine', status: 'done' },
      { label: 'Dual-Model Ensemble', sublabel: 'Gemini 2.5 Flash + Flash-Lite corroborator · union-merge consensus', status: 'done' },
      { label: 'Deterministic Guardrails', sublabel: 'D1–D7 rule engine · citation substring grounding · anti-hallucination', status: 'done' },
      { label: '25-Service Benchmark', sublabel: 'ToS;DR ground truth validation · 94% Precision · 93% Recall · 25/25 accuracy', status: 'done' },
      { label: 'Production Extension', sublabel: 'Chrome MV3 · mark.js DOM highlighting · L1 Redis + L2 Firestore cache (v7)', status: 'done' },
    ],
    approach: [
      'Six-Pillar Risk Classification Framework — Evaluates legal policies across 6 independently scored risk pillars: AI Training (unauthorized model training licenses), Data Selling (commercial 3rd-party sharing & tracking), Data Retention (indefinite retention or lack of deletion SLA), Content Ownership (broad sublicensable IP licenses), Dark Patterns (binding arbitration, class action waivers, $100 liability caps), and Transparency (vague unilateral modification terms). Each pillar carries a deterministic penalty weight (10–20 pts) mapped to a 0–100 score: SAFE (≥80), OKAY (50–79), and RISKY (<50).',
      'Dual-Model Consensus Ensemble — To maximize recall while suppressing false positives, Deep Scan runs a dual-model ensemble: Gemini 2.5 Flash acts as the primary detector and Gemini 2.5 Flash-Lite acts as a corroborating verifier. A violation requires high-confidence corroboration or deterministic pattern confirmation, yielding +14% recall and +5% precision over a single-model baseline.',
      'Privacy Policy Co-Scan Engine — Terms of Service documents define user conduct and IP ownership, but legally segregate commercial data selling and advertising tracker disclosures into Privacy Policies. If a scanner only evaluates the active ToS, data_selling produces a false negative. The orchestrator automatically locates, fetches, and evaluates the corresponding Privacy Policy in parallel.',
      'Deterministic Calibration & Guardrails (D1–D7) — Structured error analysis identified recurring LLM failure modes on legal texts (e.g. feedback submission clauses confused with content theft; user prohibition clauses confused with company violations). 7 deterministic code override rules (D1–D7) in postprocess.ts intercept and correct model decisions, elevating precision from ~65% to 94%.',
      'Three-Tier Grounding & Live DOM Highlighting — The LLM is forced to return exact source citations. Substring search verifies citations against the raw document: HIGH confidence (exact verbatim match), MEDIUM confidence (grounded match), or LOW confidence (paraphrased → half penalty). If a citation cannot be grounded, it is purged. Matching text is normalized for typography (quotes, non-breaking spaces) and highlighted live on the webpage DOM via mark.js.',
    ],
    architecture: [
      'Client: Chrome MV3 Extension (content.js + background.js) extracting body text via Readability.js and executing real-time DOM highlighting with mark.js.',
      'Backend Orchestrator: Node.js / Express server on Render managing document chunking, co-scan sub-routines, and Server-Sent Events (SSE) streaming.',
      'Inference Layer: Google Gemini 2.5 Flash (Quick Scan triage) + Flash / Flash-Lite Dual-Model Ensemble (Deep Scan audit).',
      'Anti-Hallucination & Calibration Engine (postprocess.ts): updatePillarConfidence() quote verification and D1–D7 deterministic rule overrides.',
      'Canonical Scoring Engine (shared/scoring.ts): Single source of truth implementing Score = max(5, 100 - Σ Deductions) and strict rating thresholds.',
      'Two-Tier Cache Layer: L1 Upstash Redis (sub-ms reads) + L2 Firestore (global shared). Scoped by tier (urlHash:tier) and gated by CACHE_VERSION = "v7" for instant cache invalidation.',
    ],
    evaluation: {
      summary:
        'Benchmarked against a standardized 25-Service Golden Evaluation Battery covering ToS;DR Grades A–F with ground truth labels. Validated across single-pass baseline vs. dual-model ensemble + D1–D7 calibration.',
      metrics: [
        { metric: 'Deep Scan Rating Accuracy (25 Services)', final: '25 / 25 (100.0%)', delta: 'Grade A–F alignment against tosdr.org ground truth consensus' },
        { metric: 'Deep Scan Precision (Ensemble + D1–D7)', final: '94.0%', delta: '+29.0% precision jump over uncalibrated raw LLM baseline (~65%)' },
        { metric: 'Deep Scan Recall (Ensemble + D1–D7)', final: '93.0%', delta: '+14.0% recall lift over single-model Flash baseline (79.0%)' },
        { metric: 'Quick Scan Rating Accuracy (Flash Single-Pass)', final: '22 / 25 (88.0%)', delta: '89.0% Precision · 79.0% Recall · ~1.5–3.5s latency' },
        { metric: 'True Negative Rate (Grade A/B Clean Policies)', final: '6 / 6 (100.0%)', delta: 'Zero false positives on benchmark-clean services (DuckDuckGo, Proton, etc.)' },
        { metric: 'Inference Latency Tiering', final: '~800ms / ~15s', delta: 'Quick Scan triage (~800ms) vs Deep Scan full-document ensemble (~15s)' },
      ],
      validationStrategy:
        'Automated CLI test harness (eval/scan_full_battery.py) evaluated 25 real-world policy documents across ToS;DR grades A–F. Scans executed fresh with Redis/Firestore cache invalidation (CACHE_VERSION = "v7"). Verified: (1) Rating classification accuracy, (2) Grounding precision via 100% verbatim substring verification, (3) False-positive suppression on clean policies, (4) Live DOM highlighting across React/Vue single-page applications.',
    },
    errorAnalysis: [
      'D1 (AI Training Constraint): Raw LLMs frequently flag standard IT data processing as AI training. Fix: Enforced keyword constraint requiring explicit "train", "fine-tune", or "machine learning" terms in cited clause.',
      'D2 (User Prohibition Blocklist): LLMs misclassify user conduct bans ("You may not use automated bots to scrape...") as company privacy violations. Fix: Blocklist of prohibition-prefix patterns ("You may not", "Users shall not") automatically clears false flags.',
      'D3 (Section-Scoped Transparency): Scoped policy subsections referencing a master document trigger false vagueness penalties. Fix: Detected section-scoping language to clear unnecessary transparency deductions.',
      'D4 (Feedback vs. Content Disambiguation): LLMs confuse standard feedback assignment clauses ("Any feedback submitted becomes our property") with IP copyright theft on user media. Fix: Disambiguated incoming feedback terms from published user content licenses.',
      'D5 (Privacy Policy Co-Scan Ingestion): Terms of Service agreements legally omit advertising/tracker data sharing disclosures. Fix: Parallel Co-Scan sub-routine automatically retrieves and audits companion Privacy Policy for data_selling.',
      'D6 (Delinquency Retention Exception): LLMs flag debt collection/delinquent account retention as indefinite data hoarding. Fix: Detected delinquent-account exception clauses and cleared false retention penalties.',
      'D7 (Quantitative Liability Cap Gate): Raw LLMs penalize standard generic limitation-of-liability boilerplate. Fix: Required an explicit numeric dollar cap string ("$100", "$250", "shall not exceed") before triggering Dark Patterns penalties.',
    ],
    dsPipeline: {
      summary: 'End-to-end 7-stage Applied NLP classification, extraction, calibration, and grounding pipeline.',
      components: [
        { name: '1. DOM Extraction & Cleaning', detail: 'Readability.js extracts pristine document body while discarding navigation menus, cookie banners, and advertising boilerplate.' },
        { name: '2. Two-Tier Cache Lookup', detail: 'Checks Upstash Redis L1 (sub-ms) and Firestore L2 (shared) using SHA256(text):tier hash keys gated by CACHE_VERSION = "v7".' },
        { name: '3. Privacy Policy Co-Scan', detail: 'Detects ToS documents and automatically locates & fetches companion Privacy Policy in parallel for data_selling classification.' },
        { name: '4. Sentence-Aware Chunking', detail: 'Splits text into 5,000-character windows with 1,000-character overlaps anchored strictly at sentence boundaries.' },
        { name: '5. Dual-Model Consensus Inference', detail: 'Executes parallel evaluation using Gemini 2.5 Flash as primary detector and Gemini 2.5 Flash-Lite as corroborating verifier.' },
        { name: '6. D1–D7 Deterministic Calibration', detail: 'Verifies citation groundedness, downgrades paraphrased quotes to LOW confidence (half penalty), and fires D1–D7 override rules.' },
        { name: '7. Canonical Scoring & DOM Grounding', detail: 'Computes Score = max(5, 100 - Σ deductions), maps rating bands (SAFE/OKAY/RISKY), and highlights exact text live on DOM via mark.js.' },
      ],
    },
    milestones: [
      'Engineered 6-pillar legal risk classification taxonomy with deterministic linear deduction math.',
      'Achieved 94% Precision, 93% Recall, and 25/25 Rating Accuracy across 25-service ToS;DR benchmark.',
      'Designed D1–D7 deterministic calibration engine recovering +29% precision over raw LLMs.',
      'Architected Privacy Policy Co-Scan engine solving ToS advertising disclosure segregation.',
      'Shipped Chrome MV3 extension with mark.js typographic DOM highlighting and SSE streaming.',
      'Deployed two-tier L1 Redis + L2 Firestore caching with version invalidation (CACHE_VERSION v7).',
    ],
    risks: [
      'Obfuscated Lawyer Phrasing — Highly unusual or euphemistic legal phrasing can lower model confidence. Mitigated by dual-model union-merge and fallback regex triggers.',
      'JavaScript-Rendered SPAs — Heavily obfuscated virtual DOM structures can complicate text highlighting. Mitigated by typographic normalization and word-window sliding search.',
      'Regulatory & Clause Evolution — Emerging privacy regulations (e.g. biometric data, AI agent delegation) require prompt & rule maintenance over time.',
    ],
    nextRelease: 'Public Chrome Web Store distribution & enterprise procurement ToS scan API.',
    visualModules: [
      {
        title: '25-Service Evaluation Benchmark & Error Analysis',
        description: 'Empirical evaluation across 25 production legal documents covering ToS;DR Grades A–F. Deep Scan achieves 94% Precision and 93% Recall (+14% recall lift over single model), with 25/25 rating accuracy and 6/6 True Negative Rate on clean policies.',
        input: 'Benchmark: 25 Production Policies · Ground Truth: ToS;DR Consensus (Grades A–F)',
        differentiators: [
          'Statistical Lift: Dual-model ensemble yields +14% Recall and +5% Precision over single-pass Flash.',
          'Zero False Positives: 6/6 True Negative Rate on Grade A/B clean policies (DuckDuckGo, Proton, etc.).',
          'Calibrated Accuracy: 25/25 perfect grade classification across all benchmark test cases.'
        ],
        paired: true,
        pairedLabels: ['📊 OVERALL BENCHMARK PERFORMANCE', '📈 PER-SERVICE PRECISION & RECALL'],
        images: [
          '/tldr/eval_charts/chart1_overall.png',
          '/tldr/eval_charts/chart2_per_service_deep.png'
        ]
      },
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
    attachments: [
      { label: 'Full 25-Service Evaluation Benchmark Report (Markdown)', path: 'https://github.com/Jatin23K/TLDR-Shield/blob/main/EVAL_REPORT.md', type: 'md' },
      { label: 'Automated Evaluation Test Harness (Python)', path: 'https://github.com/Jatin23K/TLDR-Shield/blob/main/eval/scan_full_battery.py', type: 'other' },
      { label: 'Raw 25-Service Evaluation Battery Logs (TXT)', path: 'https://github.com/Jatin23K/TLDR-Shield/blob/main/eval/results/battery_results.txt', type: 'other' },
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
      'Founders waste months building products nobody wants. Applied Data Science Highlight: I built this system to solve this exact business problem by replacing unstructured, hallucinatory LLM output with a deterministic, data-grounded intelligence pipeline. It transforms raw internet chaos into actionable strategy. (Architecture Note: Deployed as an independent Applied DS product and also integrated as a specialized Forensic Market & Competitor Analysis Cortex inside the C.O.R.E. Sovereign Ecosystem).',
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
      summary: 'The multi-disciplinary Applied Data Science and quantitative modeling layer that separates LaunchMintAI from an LLM prompt wrapper. Four quantitative pillars execute in parallel for every submitted startup concept.',
      components: [
        { name: 'XGBoost Venture Classifier', detail: 'Trained on 189,970 historical startups from 11 relational Crunchbase tables (1995–2014 cohort) with cost-sensitive loss (scale_pos_weight=9.11). Delivers calibrated Day-0 survival probabilities (0.8512 ROC-AUC, 0.4789 PR-AUC) and in-memory local SHAP TreeExplainer feature attributions.' },
        { name: 'Vectorized Monte Carlo SDE Engine', detail: 'Executes 10,000 parallel stochastic financial lifecycles in pure NumPy 2D array vectorization (<32ms). Calculates path-dependent P10/P50/P90 cash trajectories, milestone runway ruin probabilities (P(ruin <= t)), and 95% Value at Risk (VaR).' },
        { name: 'Aspect-Based Sentiment NLP (ABSA)', detail: 'Tokenizes customer reviews across Pricing Friction, Product Reliability/Bugs, and Customer Support Latency using VADER compound scoring to compute a weighted Competitor Vulnerability Index (CVI) and actionable kill strategies.' },
        { name: '3-Tier RAG Grounding & Skeptic Gate', detail: 'Enforces domain authority filtering (Statista, Gartner, Grand View) with deterministic regex CAGR/TAM math verification and an adversarial VC Skeptic agent that eliminates sycophancy.' },
      ]
    },
    evaluation: {
      summary: 'Evaluated across both a holdout test set of 37,994 historical startups for predictive ML and an automated 30-prompt golden evaluation benchmark across 11 verticals for RAG Triad faithfulness.',
      metrics: [
        { metric: 'XGBoost Holdout ROC-AUC', final: '0.8512', delta: '5-Fold CV: 0.8497 ± 0.0017' },
        { metric: 'XGBoost PR-AUC (Imbalance)', final: '0.4789', delta: '~5x Lift over 9.89% Base Rate' },
        { metric: 'Optimal F1 Score (tau=0.600)', final: '0.4286', delta: 'Precision: 0.4211' },
        { metric: 'Brier Loss (Calibration)', final: '0.1562', delta: 'Monotonic Across 6 Risk Tiers' },
        { metric: 'Monte Carlo 10k SDE Latency', final: '< 32ms', delta: 'NumPy SIMD Vectorization' },
        { metric: 'RAG Triad Groundedness', final: '95.8%', delta: '+29.3% Uplift (vs Baseline 66.4%)' },
        { metric: 'Hallucination Rate', final: '0.0%', delta: '-33.3% Reduction' },
        { metric: 'Mean Inference Latency', final: '385ms', delta: '-78.4% Reduction' },
      ],
      validationStrategy: 'Dual-path evaluation: (1) ML Validation: 5-Fold Stratified Cross-Validation on 189,970 historical startups with holdout test set (N=37,994). (2) RAG Triad Benchmark: 30 standardized startup ideas across 11 verticals measuring Faithfulness, Context Precision, and Hallucination Deltas against raw zero-shot baselines.',
    },
    errorAnalysis: [
      'Day-0 Target Leakage Remediation: Initial prototype models achieved an apparent 0.9249 ROC-AUC and 0.7630 PR-AUC. Rigorous forensic auditing revealed target leakage: post-formation variables (funding_total_usd, funding_rounds, milestone_count) were included in training features. Because startups that raised Series B/C survived by definition, the model was memorizing downstream capital events rather than predicting pre-seed survivability. Fix: Purged all temporal post-formation features, restricting inputs strictly to Day-0 observable variables (cohort year/quarter, geography, vertical category, initial founder count). Model performance settled at a robust, leak-free 0.8512 Holdout ROC-AUC and 0.4789 PR-AUC (~5x lift over 9.89% positive base rate with scale_pos_weight=9.11).',
      'LLM Score Collapse: Single-prompt VC Roast collapsed all survival scores to 12–15% regardless of idea quality. Root cause: creative personas override numeric constraints. Fix: decoupled architecture — XGBoost calculates the calibrated probability, LLM only writes the verbal narrative, Python safety net guarantees numeric consistency. Result: calibrated probabilistic outputs across all 6 risk tiers.',
      'Source Quality Variance: Market data from web search varies in reliability by vertical. Low-signal niches (e.g., artisanal products) return SEO-heavy results with inflated TAM claims. Control: 3-tier domain waterfall prioritizes McKinsey/Gartner/Statista sources before falling back to general web; unverified numbers are flagged as pending verification.',
      'Numerical Incoherence in LLM Projections: Creative LLMs struggle with compounding CAGR growth rates. Control: all financial burn rates, runway insolvency points, and Value at Risk distributions are calculated deterministically via vectorized NumPy SDEs, bypassing LLM math entirely.',
    ],
    nextRelease: 'Full interactive reports for both genuine and adversarial test ideas available in the Artifacts & Reports section below. 6 high-resolution DS evaluation charts (ROC-AUC, SHAP feature importance, Monte Carlo cash distributions, RAG Triad benchmark) available in the GitHub repository.',
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
  'tiktok-claim-classification': {
    summary:
      'Inferential statistics & supervised machine learning triage engine designed for TikTok Trust & Safety. Analyzes 19,382 videos with two-sample Welch’s t-testing (p = 2.61e-120), decouples multicollinear engagement metrics, and deploys a 0.9987 ROC-AUC claim classifier with zero target leakage.',
    businessContext:
      'TikTok moderators process millions of user-flagged videos daily with finite human bandwidth. Common assumptions held that verified creators drive viral reach. Welch’s t-test proved the opposite: unverified accounts generate 2.91x higher mean views, proving that triage queues must prioritize unverified viral claims.',
    approach: [
      'Inferential Statistics: Conducted two-sample Welch\'s t-test with Welch-Satterthwaite degrees of freedom (df = 1,571.16), proving unverified accounts average 265.7k views vs 91.4k for verified accounts (t = -25.50, p = 2.61e-120).',
      'Data Hygiene & Anti-Leakage: Eradicated naive pre-split upsampling that corrupted initial baselines. Maintained strict train/test isolation on the natural 94:6 class imbalance, using algorithmic class_weight="balanced" inside scikit-learn.',
      'Feature Engineering: Replaced collinear raw interaction counts (r > 0.85) with view-normalized interaction ratios (like_ratio, share_ratio, comment_ratio) to ensure logistic regression coefficient stability.',
      'Primary Triage Classifier: Trained a balanced Random Forest model separating actionable claims from opinions, achieving 0.9987 ROC-AUC and 0.9969 test F1 score.',
      'Creator Verification Dynamics: Fit a regularized logistic regression proving creators posting opinions have 5.14x higher odds of being verified (beta = +1.6379, OR = 5.144).',
    ],
    architecture: [
      'Exploratory Data Pipeline: Missing value filtering (298 incomplete logging rows dropped) and right-skew distribution analysis.',
      'Inferential Engine: SciPy-based Welch\'s t-test with Cohen\'s d (-0.5442) effect size calculation.',
      'ColumnTransformer Preprocessing: StandardScaler for engagement ratios and OneHotEncoder for creator status.',
      'Dual Model Stack: Balanced Random Forest (0.9987 ROC-AUC) for content claims and Balanced Logistic Regression for verification odds.',
      'CLI Verification Suite: Standalone eda.py, hypothesis_test.py, and train_model.py scripts for 1-command reproduction.',
    ],
    milestones: [
      'Disproved verification reach assumption using two-sample Welch\'s t-test (p = 2.61e-120).',
      'Refactored data pipeline to guarantee zero target leakage across 19,382 videos.',
      'Engineered interaction ratios resolving severe engagement multicollinearity.',
      'Delivered 0.9987 ROC-AUC and 0.9969 F1 claim classification to automate low-risk opinion bypass.',
    ],
    risks: [
      'Adversarial manipulation: creators may deliberately suppress initial engagement signals to evade high-velocity triage queues.',
      'Distribution drift: creator verification policies or viral recommendation weights may alter engagement ratios over time, requiring KS-test drift monitoring.',
    ],
    nextRelease:
      'Multimodal NLP embedding integration using video transcription text to detect claim intent independently of engagement metrics.',
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
