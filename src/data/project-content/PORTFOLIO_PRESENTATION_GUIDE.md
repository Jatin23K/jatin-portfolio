# Data Scientist Portfolio Presentation Guide

Use this file as your operating playbook when writing project pages.
Goal: maximize interview conversion for Data Scientist roles.

---

## 1) How To Present The Full Portfolio

### Positioning Narrative (Top of Portfolio)

Use this exact structure:

1. **What you do**: "I build decision-grade data products that move business KPIs."
2. **How you do it**: "I combine analytics, ML, and production delivery."
3. **Proof style**: "Every case study shows baseline vs final metrics, error analysis, and business impact."

### Recommended Project Order

1. TLDR Shield (NLP + risk scoring + product execution)
2. LaunchMintAI (retrieval + market intelligence + evaluation)
3. Specialized ML Project (depth signal)
4. SQL Project (analytics rigor signal)
5. General ML Project (end-to-end completeness)
6. C.O.R.E + MCP (umbrella/platform integration story)

### Recruiter Rule

Each page must answer these in 20-30 seconds:

1. What problem?
2. What data?
3. What method?
4. What result?
5. Why should I trust the result?

---

## 2) Global Template (Use On Every Project Page)

Copy/paste this section for every project page.

```md
# [Project Title]

## One-Line Outcome
[What it does] for [who], improving [KPI] by [X% / X time].

## Problem
- Business context:
- Pain point:
- Cost of not solving:
- Success criteria:

## Data
- Sources:
- Time range:
- Volume (rows/docs/users):
- Key features:
- Data quality checks:
- Privacy/compliance:

## Approach
- Baseline:
- Final method:
- Why this method:
- Experiment setup:
- Stack:

## Evaluation
- Primary metric:
- Secondary metrics:
- Validation strategy:
- Baseline vs final:

| Metric | Baseline | Final | Delta |
|---|---:|---:|---:|
| [metric_1] |  |  |  |
| [metric_2] |  |  |  |
| [metric_3] |  |  |  |

## Error Analysis
- Top failure mode 1:
- Top failure mode 2:
- False positives example:
- False negatives example:
- Fixes shipped:

## Business Impact
- Time saved:
- Cost/revenue effect:
- Adoption or usage:
- Decision impact:

## Production Readiness
- Architecture:
- Latency:
- Monitoring:
- Drift/quality checks:
- Fallback plan:

## Limitations
- Known constraints:
- Risks:
- Next iteration:

## Links
- Demo:
- GitHub:
- Notebook/report:
- Resume bullet:
```

---

## 3) Separate Template: TLDR Shield

```md
# TLDR Shield

## One-Line Outcome
Privacy-risk scanner for terms and conditions that reduces policy review time by [X%].

## Problem
- Users do not read legal policies.
- Teams need fast, explainable risk flags.

## Data
- Policy documents from [sources/platforms].
- Number of policies:
- Clause-level annotation process:

## Approach
- Baseline: keyword-only clause detection.
- Final: clause extraction + pillar-based scoring + LLM/rules hybrid.
- 6 pillars: AI training, data sharing, policy clarity, data retention, content ownership, unfair clauses.

## Evaluation
- Clause detection precision/recall/F1:
- Risk-score agreement vs human reviewers:
- Avg runtime per policy:

| Metric | Baseline | Final | Delta |
|---|---:|---:|---:|
| Clause F1 |  |  |  |
| False Positive Rate |  |  |  |
| Review Time / Policy |  |  |  |

## Error Analysis
- Ambiguous legal language.
- Cross-sentence dependency misses.
- Over-flagging generic legal boilerplate.

## Business Impact
- Review time reduction:
- High-risk clause detection uplift:
- User trust outcomes (if tracked):

## Production
- Web app + extension flow.
- Ingestion -> parse -> score -> explanation panel.
- Monitoring: latency, parse failures, scoring drift.
```

---

## 4) Separate Template: LaunchMintAI

```md
# LaunchMintAI

## One-Line Outcome
Market intelligence engine that validates startup ideas with grounded evidence in under [X] minutes.

## Problem
- Founders over-invest in unvalidated ideas.
- Research quality is inconsistent and slow.

## Data
- Search/market sources used:
- Authority tiering logic:
- Coverage across industries:

## Approach
- Baseline: manual founder research workflow.
- Final: multi-agent retrieval + evidence scoring + adversarial review.
- Modules: validator, war room, VC roast, pitch forge.

## Evaluation
- Citation coverage rate:
- Claim verifiability rate:
- Time to usable decision brief:

| Metric | Baseline | Final | Delta |
|---|---:|---:|---:|
| Research Time |  |  |  |
| Evidence-backed Claims % |  |  |  |
| Decision Confidence Score |  |  |  |

## Error Analysis
- Source bias by vertical.
- Low-signal niche markets.
- Duplicate/SEO-heavy result contamination.

## Business Impact
- Faster go/no-go decisions.
- Reduced wasted build cycles.
- Higher research consistency.

## Production
- FastAPI backend + React frontend.
- Retrieval, scoring, and report generation pipeline.
- Monitoring for source freshness and failure modes.
```

---

## 5) Separate Template: Specialized ML Project

Pick one domain (example: fraud detection, demand forecasting, ranking, anomaly detection).

```md
# [Specialized ML Project]

## One-Line Outcome
[Domain] model improving [domain KPI] by [X%].

## Problem
- Domain-specific decision problem:
- Business KPI tied to model:

## Data
- Domain dataset(s):
- Label strategy:
- Leakage prevention:

## Approach
- Baseline model:
- Advanced model(s):
- Feature engineering for domain:
- Hyperparameter strategy:

## Evaluation
- Domain metrics (AUC/PR-AUC/MAE/MAPE/NDCG/etc.):
- Calibration/fairness checks:
- Robustness across segments/time windows:

| Metric | Baseline | Final | Delta |
|---|---:|---:|---:|
| [primary] |  |  |  |
| [secondary] |  |  |  |
| [stability] |  |  |  |

## Error Analysis
- Segment-level underperformance.
- Rare class / tail behavior.
- Feature drift effects.

## Business Impact
- KPI movement:
- Operational savings:
- Decision quality improvement:
```

---

## 6) Separate Template: General ML Project

```md
# End-to-End ML Project

## One-Line Outcome
General supervised ML pipeline improving [KPI] with reproducible training and deployment.

## Problem
- Business question:
- Prediction target:

## Data
- Dataset source and schema:
- Train/validation/test split strategy:
- Missing value/outlier handling:

## Approach
- Baselines: majority class + simple linear/tree model.
- Final: tuned ensemble or selected best model.
- Feature selection and ablations:

## Evaluation
- Core metrics:
- Cross-validation results:
- Holdout test performance:

| Metric | Baseline | Final | Delta |
|---|---:|---:|---:|
| [metric_1] |  |  |  |
| [metric_2] |  |  |  |
| [metric_3] |  |  |  |

## Production
- Batch/real-time inference path:
- Model versioning:
- Retraining trigger:
```

---

## 7) Separate Template: SQL Project

```md
# SQL Analytics Project

## One-Line Outcome
Analytics system using advanced SQL to improve [decision/process KPI] by [X%].

## Problem
- Reporting/decision bottleneck:
- Stakeholders impacted:

## Data
- Warehouse/schema:
- Fact + dimension model:
- Data volume:

## Approach
- Query design: CTEs, window functions, cohort/funnel logic.
- Optimization: indexing/partitioning/materialization.
- Validation: reconciliation against source reports.

## Evaluation
- Query runtime reduction:
- Data accuracy/reconciliation score:
- Reporting cadence improvement:

| Metric | Baseline | Final | Delta |
|---|---:|---:|---:|
| Query Runtime (p95) |  |  |  |
| Accuracy (%) |  |  |  |
| Dashboard Refresh Time |  |  |  |

## Business Impact
- Faster decisions:
- Less manual reporting effort:
- Better visibility into retention/revenue/funnel.
```

---

## 8) Separate Template: C.O.R.E Umbrella + MCP Integration Page

Use this as the final portfolio page, not first.

```md
# C.O.R.E (Umbrella Platform)

## One-Line Outcome
Platform layer that connects independent DS/AI projects through ingestion points, governance checks, and shared analytics standards.

## Why It Exists
- Separate projects produce fragmented insights.
- C.O.R.E unifies ingestion, validation, and monitoring.

## Ingestion Points
- Connector contract (input schema):
- Validation contract:
- Output contract:
- Example connected projects: TLDR Shield, LaunchMintAI, [others].

## MCP Layer
- Data Quality Validator
- Fairness Checker
- Surface Explorer
- Sample Selector
- Human Intervention

## Platform Evaluation
- Ingestion success rate:
- Validation failure catch rate:
- Mean processing latency:
- Manual override rate:

| Metric | Before C.O.R.E | After C.O.R.E | Delta |
|---|---:|---:|---:|
| Integration Time / Project |  |  |  |
| Data Quality Incidents |  |  |  |
| Pipeline Reliability |  |  |  |

## Value To DS Teams
- Standardized experimentation.
- Better governance and reproducibility.
- Faster onboarding of new projects.
```

---

## 9) Resume Bullet Formula (Use Per Project)

Use this formula:

`Built [system] using [methods/stack], improved [metric] from [baseline] to [final] ([delta]), enabling [business impact].`

Example:

`Built a clause-level privacy risk scoring engine, improved detection F1 from 0.71 to 0.86 (+21%), reducing policy review time by 88% for end users.`

---

## 10) Final Publish Checklist (Must Pass)

1. Has baseline vs final metrics.
2. Has at least one error analysis example.
3. Has a real business KPI (not only technical metrics).
4. Has production evidence (latency/monitoring/fallback).
5. Has one clean resume bullet.
6. Avoids hype words; keeps claims measurable and defensible.

