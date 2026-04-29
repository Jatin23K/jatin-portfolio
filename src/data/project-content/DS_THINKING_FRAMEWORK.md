# Data Scientist Thinking Framework (1-Page)

Use this before every project, interview case, or business question.
Focus: approach > syntax.

---

## 1) Problem Framing

Define the problem in business terms, not model terms.

- Decision to improve:
- Stakeholder:
- Current pain:
- KPI to move:
- Success threshold:
- Decision deadline:

**Output:** One sentence:  
`We need to improve [KPI] from [current] to [target] for [stakeholder] within [time].`

---

## 2) Constraints and Assumptions

Write constraints early so solution choice is realistic.

- Data availability:
- Data quality risks:
- Latency requirement:
- Cost budget:
- Compliance/privacy constraints:
- Team/tool constraints:

**Output:** `Must-have constraints` vs `nice-to-have constraints`.

---

## 3) Solution Options (Think in Alternatives)

Always generate at least 2-3 options.

- Option A: Simple baseline
- Option B: Stronger statistical/ML method
- Option C: Advanced/production method

For each option capture:
- Why it might work
- Main risk
- Complexity
- Time to first result

**Output:** choose one option with explicit tradeoff reasoning.

---

## 4) Experiment Plan

Design evaluation before implementation.

- Baseline definition:
- Train/validation/test strategy:
- Leakage prevention plan:
- Primary metric:
- Secondary metrics:
- Segment-level checks:

**Output:** a metric table template ready before coding.

---

## 5) Implementation Strategy

Build in layers, not all at once.

1. Data pipeline + sanity checks
2. Baseline model/query/heuristic
3. First evaluation pass
4. Improvement iteration
5. Production hardening

**Output:** working baseline within first iteration.

---

## 6) Error Analysis (Mandatory)

Do not stop at one score.

- Top false positives:
- Top false negatives:
- Segment failures:
- Drift-sensitive features:
- Root causes:
- Next fixes:

**Output:** ranked failure list with fix plan.

---

## 7) Business Translation

Convert metrics into decision impact.

- Time saved:
- Cost reduced:
- Revenue/risk effect:
- Decision speed improvement:
- Confidence and limitations:

**Output:** 3-4 bullet impact summary for non-technical audience.

---

## 8) Production Readiness Checklist

- Reproducible pipeline
- Input validation
- Monitoring (quality + latency)
- Alerting thresholds
- Fallback behavior
- Retraining/update trigger

**Output:** go/no-go deployment decision.

---

## 9) Communication Template (Interview + Portfolio)

Use this structure when presenting:

1. Problem and KPI
2. Data and constraints
3. Why chosen approach
4. Baseline vs final metrics
5. Errors and limitations
6. Business impact
7. What you would do next

---

## 10) Fast Self-Check (Before Submission)

If any answer is "No", project is not ready.

1. Did I define the business KPI clearly?
2. Did I compare against a baseline?
3. Did I show error analysis examples?
4. Did I quantify business impact?
5. Did I state limitations honestly?
6. Did I explain tradeoffs and why this approach was chosen?

---

## Mini Worksheet (Copy Per New Problem)

```md
Problem:
KPI:
Target:
Constraints:
Options considered:
Chosen approach + why:
Baseline:
Primary metric:
Results:
Top failures:
Business impact:
Next iteration:
```

