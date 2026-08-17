import { Link, useParams } from 'react-router-dom'
import { Network, Server } from 'lucide-react'
import { RouteMeta } from '../components/seo/RouteMeta'
import { projectDetails } from '../data/projectDetails'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { getProjectById, shouldShowProjectAction } from '../utils/projectSelectors'

/* ─── Scrollable Image Frame with Prominent Scrollbar ────────── */
const ScrollableImageFrame = ({
  src,
  alt,
  maxHeight = 'max-h-[580px]',
  landscape = false,
}: {
  src: string;
  alt: string;
  maxHeight?: string;
  landscape?: boolean;
}) => {
  return (
    <div className={`rounded-md border border-border bg-surface2 shadow-lg overflow-hidden ${landscape ? 'max-h-[280px]' : ''}`}>
      <div
        className={`${maxHeight} overflow-y-auto overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-[#12121a] [&::-webkit-scrollbar-track]:rounded-r-md [&::-webkit-scrollbar-thumb]:bg-[#6b6b88] hover:[&::-webkit-scrollbar-thumb]:bg-accent2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#12121a]`}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full ${landscape ? 'h-full object-cover object-top' : 'h-auto object-contain block'}`}
        />
      </div>
    </div>
  );
};

/* ─── Timeline list ──────────────────────────────────────────── */
const TimelineList = ({ items }: { items: string[] }) => (
  <ol className="mt-3 space-y-0">
    {items.map((item, idx) => (
      <li key={item} className="relative flex gap-4">
        {/* vertical connector */}
        {idx < items.length - 1 && (
          <span
            className="absolute left-[11px] top-7 h-full w-px bg-border"
            aria-hidden="true"
          />
        )}
        {/* step circle */}
        <span
          className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent2/60 bg-surface2 font-mono text-[9px] text-accent2"
          aria-hidden="true"
        >
          {idx + 1}
        </span>
        <p className="pb-5 text-sm leading-relaxed text-text-dim">{item}</p>
      </li>
    ))}
  </ol>
)

/* ─── Architecture list ──────────────────────────────────────── */
const ArchList = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-sm text-text-dim">
        <span className="mt-1 shrink-0 font-mono text-[10px] text-accent">▸</span>
        {item}
      </li>
    ))}
  </ul>
)

/* ─── Milestone steps ────────────────────────────────────────── */
const MilestoneTrack = ({ items }: { items: string[] }) => (
  <div className="mt-3 space-y-3">
    {items.map((item) => (
      <div key={item} className="flex items-center gap-3">
        <span
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#98d982] font-mono text-[8px] text-black"
        >
          ✓
        </span>
        <p className="text-sm text-text-dim">{item}</p>
      </div>
    ))}
    <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface2">
      <div
        className="h-full rounded-full bg-[#98d982]"
        style={{ width: `${Math.min(100, (items.length / (items.length + 1)) * 100)}%` }}
      />
    </div>
    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
      {items.length} milestone{items.length !== 1 ? 's' : ''} completed
    </p>
  </div>
)

/* ─── Risk cards ─────────────────────────────────────────────── */
const RiskCards = ({ items }: { items: string[] }) => (
  <div className="mt-3 space-y-2">
    {items.map((item) => (
      <div
        key={item}
        className="rounded-md border-l-2 border-accent3 bg-surface2/60 px-4 py-3 text-sm leading-relaxed text-text-dim"
      >
        {item}
      </div>
    ))}
  </div>
)

/* ─── Build Stage Tracker ────────────────────────────────────── */
const BuildTracker = ({ stages }: { stages: { label: string; sublabel?: string; status: 'done' | 'current' | 'next' }[] }) => (
  <div className="overflow-x-auto pb-2">
    <div className="flex items-start min-w-max gap-0">
      {stages.map((stage, idx) => {
        const done = stage.status === 'done'
        const current = stage.status === 'current'
        const isLast = idx === stages.length - 1
        const nextDone = !isLast && stages[idx + 1].status === 'done'
        return (
          <div key={idx} className="flex items-start">
            {/* Node */}
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2
                " style={{
                  borderColor: done ? '#98d982' : current ? 'var(--color-accent)' : 'var(--color-muted)',
                  background: done ? '#98d982' : current ? 'rgba(var(--color-accent-rgb, 220,38,38),0.15)' : 'transparent',
                }}>
                {done && <span className="text-black font-bold text-[11px]">✓</span>}
                {current && (
                  <>
                    <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ border: '2px solid var(--color-accent)' }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                  </>
                )}
              </div>
              <div className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-widest leading-tight"
                  style={{ color: done ? 'var(--color-text-dim)' : current ? 'var(--color-accent)' : 'var(--color-muted)' }}>
                  {stage.label}
                </p>
                {stage.sublabel && (
                  <p className="mt-0.5 font-mono text-[8px] tracking-wide" style={{ color: 'var(--color-muted)' }}>
                    {stage.sublabel}
                  </p>
                )}
                {current && (
                  <span className="mt-1 inline-block rounded-full px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-widest"
                    style={{ background: 'rgba(var(--color-accent-rgb, 220,38,38),0.15)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}>
                    Now
                  </span>
                )}
                {stage.status === 'next' && (
                  <span className="mt-1 inline-block rounded-full border border-muted px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-widest text-muted">
                    Next
                  </span>
                )}
              </div>
            </div>
            {/* Connector */}
            {!isLast && (
              <div className="mt-4 h-px w-10 flex-shrink-0 transition-all"
                style={{
                  background: done && nextDone
                    ? '#98d982'
                    : done && !nextDone
                    ? 'linear-gradient(to right, #98d982, var(--color-border))'
                    : 'var(--color-border)',
                  opacity: stage.status === 'next' ? 0.4 : 1,
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  </div>
)

/* ─── A.X.I.O.M. Visual System Architecture Component ──────────── */
const AxiomArchitectureDiagram = () => {
  return (
    <section className="mt-6 card-shell border-t-2 border-t-accent2">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent2 animate-pulse" />
            <p className="mono-label text-accent2">System Architecture Blueprint</p>
          </div>
          <h2 className="mt-1 font-heading text-xl font-bold text-text">
            A.X.I.O.M. Omnimodal RAG & 2-Tier Cache Architecture
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Badge tone="accent2">9 Modules</Badge>
          <Badge tone="accent">Sub-15ms Cache</Badge>
          <Badge tone="accent4">2-Checkpoint RBAC</Badge>
        </div>
      </div>

      {/* Architecture Visual Grid */}
      <div className="space-y-6">
        {/* 1. Request Entry & Security Checkpoint 1 */}
        <div className="rounded-lg border border-border/60 bg-surface/50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent2/10 border border-accent2/40 text-accent2 font-mono text-xs font-bold">01</div>
              <p className="font-heading text-sm font-bold text-text">API Gateway & Checkpoint 1 (JWT Auth)</p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent2 bg-accent2/10 border border-accent2/30 px-2 py-0.5 rounded">&lt; 0.5ms SLA</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded border border-border/40 bg-surface2/60 p-3">
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Client Auth</p>
              <p className="mt-1 font-mono text-xs text-text-dim">Bearer JWT + JWKS Public Key Validation</p>
            </div>
            <div className="rounded border border-border/40 bg-surface2/60 p-3">
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Identity Claims</p>
              <p className="mt-1 font-mono text-xs text-accent2">tenant_id &middot; dept_id &middot; clearance_level</p>
            </div>
            <div className="rounded border border-border/40 bg-surface2/60 p-3">
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Permission Hash</p>
              <p className="mt-1 font-mono text-xs text-accent">SHA256(Tenant + Dept + Clearance)</p>
            </div>
          </div>
        </div>

        {/* Flow Connector Arrow */}
        <div className="flex justify-center -my-3 relative z-10">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface2 border border-border text-text-dim text-xs font-mono">&darr;</div>
        </div>

        {/* 2. 2-Tier Multi-Modal Cache & Security Checkpoint 2 */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* L1/L2 Cache */}
          <div className="rounded-lg border border-accent/30 bg-surface/50 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-accent/10 border border-accent/40 text-accent font-mono text-xs font-bold">L1/L2</div>
                <p className="font-heading text-sm font-bold text-text">Role-Scoped Semantic Cache</p>
              </div>
              <span className="font-mono text-[9px] text-accent font-bold">&lt; 15ms Hit</span>
            </div>
            <p className="text-xs text-text-dim leading-relaxed mb-3">
              Cryptographically binds results to user Permission_Hash. Prevents cross-tenant data leakage.
            </p>
            <div className="space-y-2 font-mono text-[10px]">
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">L1 Exact Hash</span>
                <span className="text-accent">SHA256(Permission + Query)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">L2 Vector Similarity</span>
                <span className="text-accent2">Matryoshka 128d (Cosine &ge; 0.92)</span>
              </div>
            </div>
          </div>

          {/* Qdrant Checkpoint 2 Pre-Filter */}
          <div className="rounded-lg border border-accent3/30 bg-surface/50 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-accent3/10 border border-accent3/40 text-accent3 font-mono text-xs font-bold">CP2</div>
                <p className="font-heading text-sm font-bold text-text">Checkpoint 2 (Qdrant Pre-Filter)</p>
              </div>
              <span className="font-mono text-[9px] text-accent3 font-bold">&lt; 20ms Filter</span>
            </div>
            <p className="text-xs text-text-dim leading-relaxed mb-3">
              Filters RBAC roles and document clearance BEFORE similarity calculation runs.
            </p>
            <div className="rounded bg-surface2/70 p-2.5 border border-border/40 font-mono text-[10px] text-text-dim space-y-1">
              <p><span className="text-accent3">Filter:</span> rbac_roles CONTAINS user_role</p>
              <p><span className="text-accent3">AND</span> required_clearance &le; user_clearance</p>
              <p><span className="text-accent3">AND</span> department_id == user_dept</p>
            </div>
          </div>
        </div>

        {/* Flow Connector Arrow */}
        <div className="flex justify-center -my-3 relative z-10">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface2 border border-border text-text-dim text-xs font-mono">&darr;</div>
        </div>

        {/* 3. 4-Modality Routing & Ingestion Engine */}
        <div className="rounded-lg border border-border/60 bg-surface/50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent4/10 border border-accent4/40 text-accent4 font-mono text-xs font-bold">03</div>
              <p className="font-heading text-sm font-bold text-text">Omnimodal Vector Engine (Qdrant)</p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent4 bg-accent4/10 border border-accent4/30 px-2 py-0.5 rounded">4 Modalities</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Text Modality */}
            <div className="rounded border border-border/50 bg-surface2/60 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-accent">Text Engine</span>
                  <span className="font-mono text-[8px] text-muted">1536d &rarr; 128d</span>
                </div>
                <p className="text-[11px] text-text-dim leading-normal mb-2">Matryoshka 2-Vector Hybrid Search + BM25 HNSW RRF Reranking.</p>
              </div>
              <span className="font-mono text-[9px] text-accent border border-accent/30 rounded px-1.5 py-0.5 w-fit">&lt; 200ms</span>
            </div>

            {/* Image / ColPali Modality */}
            <div className="rounded border border-border/50 bg-surface2/60 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-accent2">ColPali Visual</span>
                  <span className="font-mono text-[8px] text-muted">ViT 32x32</span>
                </div>
                <p className="text-[11px] text-text-dim leading-normal mb-2">Zero OCR. 1,024 spatial patch vectors/page via MaxSim Late Interaction.</p>
              </div>
              <span className="font-mono text-[9px] text-accent2 border border-accent2/30 rounded px-1.5 py-0.5 w-fit">&lt; 400ms</span>
            </div>

            {/* Audio Modality */}
            <div className="rounded border border-border/50 bg-surface2/60 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-accent3">Dual Audio</span>
                  <span className="font-mono text-[8px] text-muted">Dual-Path</span>
                </div>
                <p className="text-[11px] text-text-dim leading-normal mb-2">WhisperX speech-to-text transcript + CLAP acoustic fingerprint vectors.</p>
              </div>
              <span className="font-mono text-[9px] text-accent3 border border-accent3/30 rounded px-1.5 py-0.5 w-fit">&lt; 300ms</span>
            </div>

            {/* Video Modality */}
            <div className="rounded border border-border/50 bg-surface2/60 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-accent4">3-Stream Video</span>
                  <span className="font-mono text-[8px] text-muted">Temporal Sync</span>
                </div>
                <p className="text-[11px] text-text-dim leading-normal mb-2">PySceneDetect keyframes + WhisperX STT + CLAP acoustic search.</p>
              </div>
              <span className="font-mono text-[9px] text-accent4 border border-accent4/30 rounded px-1.5 py-0.5 w-fit">&lt; 500ms</span>
            </div>
          </div>
        </div>

        {/* Flow Connector Arrow */}
        <div className="flex justify-center -my-3 relative z-10">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface2 border border-border text-text-dim text-xs font-mono">&darr;</div>
        </div>

        {/* 4. Department Model Router & Observability Guardrails */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Department Model Router */}
          <div className="rounded-lg border border-border/60 bg-surface/50 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-heading text-sm font-bold text-text">Department Model Routing (88.6% Cost SLA)</p>
              <span className="font-mono text-[9px] text-accent font-bold">Dynamic Models</span>
            </div>
            <div className="space-y-2 font-mono text-[10px]">
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">HR / Support</span>
                <span className="text-accent font-semibold">Gemini 2.5 Flash-Lite (&lt;300ms &middot; $0.0001)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">Engineering</span>
                <span className="text-accent2 font-semibold">Gemini 2.5 Flash (&lt;800ms &middot; $0.001)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">Legal / Finance</span>
                <span className="text-accent4 font-semibold">Gemini 2.5 Pro (&lt;2500ms &middot; $0.02)</span>
              </div>
            </div>
          </div>

          {/* RAG Triad & Safe Failure Contract */}
          <div className="rounded-lg border border-border/60 bg-surface/50 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-heading text-sm font-bold text-text">RAG Triad Observability & Output Guardrails</p>
              <span className="font-mono text-[9px] text-[#98d982] font-bold">Grounded SLA 1.00</span>
            </div>
            <div className="space-y-2 font-mono text-[10px]">
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">Context Relevance</span>
                <span className="text-text">&ge; 0.40 (Blocks LLM call if below)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">Groundedness SLA</span>
                <span className="text-[#98d982]">1.00 (Safe Failure on unbacked claim)</span>
              </div>
              <div className="flex items-center justify-between rounded bg-surface2/70 px-3 py-1.5 border border-border/40">
                <span className="text-text-dim">Circuit Breaker</span>
                <span className="text-accent3">Key Pool Rotation &rarr; Ollama Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Visual Module Diagram Renderer ──────────────────────────── */
const ModuleDiagramRenderer = ({ type }: { type: 'pipeline' | 'cache' | 'colpali' }) => {
  if (type === 'pipeline') {
    return (
      <div className="rounded-lg border border-border/70 bg-surface/90 p-5 shadow-lg space-y-3 font-mono text-xs w-full">
        <div className="flex items-center justify-between border-b border-border/50 pb-2 mb-3">
          <span className="text-accent2 font-bold uppercase tracking-wider text-[10px]">11-Stage Operational Flow</span>
          <span className="text-accent text-[9px]">OpenTelemetry Traced</span>
        </div>
        
        {/* Stage 1-3 */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="rounded border border-accent2/40 bg-surface2/80 p-2">
            <p className="text-accent2 font-bold">1. API Gateway</p>
            <p className="text-muted text-[8px]">JWT Auth &lt; 0.5ms</p>
          </div>
          <div className="rounded border border-accent/40 bg-surface2/80 p-2">
            <p className="text-accent font-bold">2. Input Guard</p>
            <p className="text-muted text-[8px]">PII / Injection &lt; 5ms</p>
          </div>
          <div className="rounded border border-accent3/40 bg-surface2/80 p-2">
            <p className="text-accent3 font-bold">3. Role Cache</p>
            <p className="text-muted text-[8px]">SHA256 &lt; 15ms</p>
          </div>
        </div>

        <div className="flex justify-center text-muted text-[10px]">&darr; CACHE MISS</div>

        {/* Stage 4-6 */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="rounded border border-accent4/40 bg-surface2/80 p-2">
            <p className="text-accent4 font-bold">4. Qdrant Pre-Filter</p>
            <p className="text-muted text-[8px]">RBAC Filter &lt; 20ms</p>
          </div>
          <div className="rounded border border-accent2/40 bg-surface2/80 p-2">
            <p className="text-accent2 font-bold">5. Modality Router</p>
            <p className="text-muted text-[8px]">Text/Img/Aud/Vid</p>
          </div>
          <div className="rounded border border-accent/40 bg-surface2/80 p-2">
            <p className="text-accent font-bold">6. Model Router</p>
            <p className="text-muted text-[8px]">88.6% Cost SLA</p>
          </div>
        </div>

        <div className="flex justify-center text-muted text-[10px]">&darr; GENERATION &amp; GUARDRAILS</div>

        {/* Stage 7-10 */}
        <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
          <div className="rounded border border-[#98d982]/40 bg-surface2/80 p-2">
            <p className="text-[#98d982] font-bold">7-8. LLM + Groundedness</p>
            <p className="text-muted text-[8px]">Grounded SLA 1.00</p>
          </div>
          <div className="rounded border border-border/80 bg-surface2/80 p-2">
            <p className="text-text font-bold">9-11. Cache Write &amp; Serve</p>
            <p className="text-muted text-[8px]">Verbatim Citations</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'cache') {
    return (
      <div className="rounded-lg border border-border/70 bg-surface/90 p-5 shadow-lg space-y-3 font-mono text-xs w-full">
        <div className="flex items-center justify-between border-b border-border/50 pb-2 mb-3">
          <span className="text-accent font-bold uppercase tracking-wider text-[10px]">2-Tier Multi-Modal Cache</span>
          <span className="text-accent2 text-[9px]">Permission Isolated</span>
        </div>

        {/* Cache Hashing Scheme */}
        <div className="rounded border border-accent/40 bg-surface2/80 p-3 space-y-1 text-[10px]">
          <p className="text-accent font-bold uppercase">Role-Scoped Hashing Scheme:</p>
          <p className="text-text-dim">Key = SHA256(Tenant_ID + Department + Clearance + Query)</p>
          <p className="text-muted text-[9px] italic">Cryptographically prevents Tenant A from hitting Tenant B cache entries.</p>
        </div>

        {/* L1 & L2 Comparison */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="rounded border border-accent2/40 bg-surface2/80 p-3 space-y-1">
            <p className="text-accent2 font-bold">L1 Exact Cache</p>
            <p className="text-text-dim">SHA-256 Exact Key Match</p>
            <p className="text-accent font-bold text-[9px]">&lt; 1ms Latency</p>
          </div>
          <div className="rounded border border-accent4/40 bg-surface2/80 p-3 space-y-1">
            <p className="text-accent4 font-bold">L2 Vector Cache</p>
            <p className="text-text-dim">Matryoshka 128d Similarity</p>
            <p className="text-accent2 font-bold text-[9px]">Cosine &ge; 0.92 (&lt; 15ms)</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'colpali') {
    return (
      <div className="rounded-lg border border-border/70 bg-surface/90 p-5 shadow-lg space-y-3 font-mono text-xs w-full">
        <div className="flex items-center justify-between border-b border-border/50 pb-2 mb-3">
          <span className="text-accent4 font-bold uppercase tracking-wider text-[10px]">ColPali ViT Patch Grid</span>
          <span className="text-accent2 text-[9px]">MaxSim Late Interaction</span>
        </div>

        {/* ViT Patch Diagram */}
        <div className="rounded border border-accent4/40 bg-surface2/80 p-3 space-y-2 text-[10px]">
          <div className="flex items-center justify-between">
            <span className="text-accent4 font-bold">Raw RGB Page (1024x1024)</span>
            <span className="text-accent">Zero OCR / Zero Layout Loss</span>
          </div>
          <div className="grid grid-cols-8 gap-1 p-2 bg-black/60 rounded border border-border/40">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="h-2 rounded-[1px] bg-accent4/30 border border-accent4/50"></div>
            ))}
          </div>
          <p className="text-text-dim text-[9px]">32x32 ViT Grid = 1,024 Spatial Patch Vectors stored per page in Qdrant.</p>
        </div>

        {/* MaxSim Score Formula */}
        <div className="rounded border border-border/60 bg-surface2/80 p-2.5 text-[10px] space-y-1">
          <p className="text-accent2 font-bold">MaxSim Page Score Formula:</p>
          <p className="text-text font-mono">Score = &Sigma;(q &isin; Q) max(p &isin; P) (v_q &middot; v_p)</p>
          <p className="text-muted text-[9px]">Eliminates Cross-Encoder rerankers while matching human visual search precision.</p>
        </div>
      </div>
    )
  }

  return null
}

/* ─── Main page ──────────────────────────────────────────────── */
const CaseStudy = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <main className="container-shell section-shell section-anchor pt-32">
        <RouteMeta
          title="Project Not Found - Jatin Kumar"
          description="The requested case study does not exist."
          canonicalPath="/projects"
        />
        <h1 className="font-heading text-4xl font-bold tracking-[-0.02em] text-text">Project Not Found</h1>
        <p className="mt-3 max-w-xl text-text-dim">
          This case study route is reserved for valid project IDs in src/data/projects.ts.
        </p>
        <Button to="/projects" variant="outlined" className="mt-6">
          Back to Projects
        </Button>
      </main>
    )
  }

  const detail = projectDetails[project.id]

  return (
    <main className="container-shell section-shell section-anchor pt-32">
      <RouteMeta
        title={`${project.title} — Case Study`}
        description={project.tagline}
        canonicalPath={`/projects/${project.id}`}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        <Link to="/" className="hover:text-text-dim transition-colors">Portfolio</Link>
        <span aria-hidden="true">›</span>
        <Link to="/projects" className="hover:text-text-dim transition-colors">Projects</Link>
        <span aria-hidden="true">›</span>
        <span className="text-text-dim">{project.title}</span>
      </nav>

      <Badge tone="accent2">{project.typeBadge}</Badge>
      <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.02em] text-text sm:text-5xl">
        {project.title}
      </h1>
      {project.subtitle && (
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {project.subtitle}
        </p>
      )}
      <p className="mt-3 max-w-3xl text-base text-text-dim">{project.tagline}</p>

      {shouldShowProjectAction(project, 'github') && (
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface2/60 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:border-accent2/50 hover:text-text-dim"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      )}

      {/* Problem / Solution / Impact */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="card-shell border-t-2 border-t-accent3 lg:col-span-1">
          <p className="mono-label">Problem</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.problem}</p>
        </article>
        <article className="card-shell border-t-2 border-t-accent2 lg:col-span-1">
          <p className="mono-label">Solution</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.solution}</p>
        </article>
        <article className="card-shell border-t-2 border-t-accent lg:col-span-1">
          <p className="mono-label">Impact</p>
          <p className="mt-3 text-sm leading-relaxed text-text-dim">{project.impact}</p>
        </article>
      </div>

      {/* KPI highlight */}
      {project.primaryKpi && (
        <div className="mt-6 flex items-center gap-4 rounded-md border border-accent/30 bg-surface2/60 px-5 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Primary KPI</span>
          <span className="font-heading text-xl font-bold text-accent">{project.kpiDelta}</span>
          <span className="text-sm text-text-dim">{project.primaryKpi}</span>
        </div>
      )}

      {/* Build Stage Tracker */}
      {detail?.buildStages && detail.buildStages.length > 0 && (
        <section className="mt-6 card-shell">
          <p className="mono-label mb-5">Build Progress</p>
          <BuildTracker stages={detail.buildStages} />
        </section>
      )}

      {/* A.X.I.O.M. System Architecture Diagram */}
      {project.id === 'leap-axiom' && <AxiomArchitectureDiagram />}

      {/* Umbrella Node Network */}
      {detail?.nodeNetwork && (
        <section className="mt-6 card-shell">
          <div className="flex items-center gap-2 mb-2">
            <Network className="h-4 w-4 text-accent" />
            <p className="font-heading text-lg font-bold text-text">{detail.nodeNetwork.headline}</p>
          </div>
          <p className="text-sm leading-relaxed text-text-dim mb-8">{detail.nodeNetwork.description}</p>
          
          <div className="relative rounded-lg border border-border/50 bg-surface/30 p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center overflow-hidden">
            {/* Core Node */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center shadow-[0_0_30px_rgba(var(--accent),0.2)]">
                <Server className="h-8 w-8 text-accent" />
              </div>
              <p className="mt-4 font-heading font-bold text-accent tracking-widest text-lg">C.O.R.E.</p>
              <p className="text-[10px] font-mono text-accent/70 uppercase">Central Orchestrator</p>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              {/* Future Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.nodeNetwork.nodes.map((node) => {
                  const content = (
                    <div className={`flex flex-col items-center justify-center rounded-md border border-border/40 bg-surface2/50 p-4 min-w-[180px] h-full transition-colors ${node.path ? 'hover:border-accent/50 hover:bg-surface2' : 'hover:border-accent/30'}`}>
                      <div className={`h-2 w-2 rounded-full mb-3 transition-colors ${node.path ? 'bg-muted group-hover:bg-accent/70' : 'bg-muted'}`}></div>
                      <p className={`font-heading text-sm font-bold text-center transition-colors ${node.path ? 'text-text group-hover:text-accent' : 'text-text'}`}>{node.name}</p>
                      <p className="text-[10px] text-text-dim text-center mt-1 font-mono uppercase">{node.role}</p>
                    </div>
                  );

                  return node.path ? (
                    <Link to={node.path} key={node.name} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md">
                      {content}
                    </Link>
                  ) : (
                    <div key={node.name} className="block h-full">
                      {content}
                    </div>
                  );
                })}
              </div>
              
              {/* Future Expansion Block */}
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-border/40 bg-surface2/10 p-4 hover:border-accent/30 transition-colors">
                <p className="font-heading text-sm font-bold text-text-dim text-center">Future Expansion</p>
                <p className="text-[10px] text-text-dim/70 text-center mt-1 font-mono uppercase">Infinite Node Capacity</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="mt-6 card-shell">
        <p className="mono-label">Tech Stack</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge tone="surface" className="border border-border text-text">{tech}</Badge>
            </li>
          ))}
        </ul>
      </section>

      {detail ? (
        <>
          {/* Executive summary */}
          <section className="mt-6 card-shell">
            <p className="mono-label">Executive Summary</p>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-text-dim">{detail.businessContext}</p>
          </section>

          {/* Approach + Architecture */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="card-shell">
              <p className="mono-label">Approach</p>
              <TimelineList items={detail.approach} />
            </article>
            <article className="card-shell">
              <p className="mono-label">Architecture</p>
              <ArchList items={detail.architecture} />
            </article>
          </section>

          {/* Milestones + Risks */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="card-shell">
              <p className="mono-label">Delivery Milestones</p>
              <MilestoneTrack items={detail.milestones} />
            </article>
            <article className="card-shell">
              <p className="mono-label">Risks & Controls</p>
              <RiskCards items={detail.risks} />
            </article>
          </section>

          {/* DS Intelligence Layer */}
          {detail.dsPipeline && (
            <section className="mt-6 card-shell border-t-2 border-t-accent4">
              <p className="mono-label">DS Intelligence Layer</p>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.dsPipeline.summary}</p>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {detail.dsPipeline.components.map((comp, idx) => (
                  <div key={idx} className="rounded-md border border-border bg-surface2/60 p-4">
                    <p className="font-heading text-sm font-bold text-text">{comp.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-text-dim">{comp.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Evaluation */}
          {detail.evaluation && (
            <section className="mt-6 card-shell border-t-2 border-t-accent">
              <p className="mono-label">Evaluation</p>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.evaluation.summary}</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Metric</th>
                      <th className="py-2 pr-4 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                        {project.id === 'leap-axiom' ? 'Design SLA Target' : 'Result'}
                      </th>
                      <th className="py-2 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.evaluation.metrics.map((m, idx) => (
                      <tr key={idx} className="border-b border-border/50">
                        <td className="py-2.5 pr-4 text-text-dim">{m.metric}</td>
                        <td className="py-2.5 pr-4 text-right font-heading font-bold text-accent">{m.final}</td>
                        <td className="py-2.5 text-right text-accent2">{m.delta || ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {detail.evaluation.validationStrategy && (
                <div className="mt-4 rounded-md border border-border bg-surface2/60 px-4 py-3">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">Validation Strategy</p>
                  <p className="text-sm leading-relaxed text-text-dim">{detail.evaluation.validationStrategy}</p>
                </div>
              )}
            </section>
          )}

          {/* Error Analysis */}
          {detail.errorAnalysis && detail.errorAnalysis.length > 0 && (
            <section className="mt-6 card-shell border-t-2 border-t-accent3">
              <p className="mono-label">Error Analysis</p>
              <div className="mt-3 space-y-3">
                {detail.errorAnalysis.map((item, idx) => (
                  <div key={idx} className="rounded-md border-l-2 border-accent3 bg-surface2/60 px-4 py-3 text-sm leading-relaxed text-text-dim">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next release */}
          <section className="mt-6 card-shell border-t-2 border-t-accent2">
            <p className="mono-label">Next Release</p>
            <p className="mt-3 text-sm text-text-dim">{detail.nextRelease}</p>
          </section>

          {/* Business Potential */}
          {detail.businessPotential && (
            <section className="mt-6 card-shell border-t-2 border-t-accent">
              <p className="mono-label">Business Potential</p>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{detail.businessPotential.summary}</p>

              {/* Product Principles */}
              <div className="mt-6">
                <p className="mono-label mb-3">The Product</p>
                <div className="grid gap-3 lg:grid-cols-3">
                  {detail.businessPotential.productPrinciples.map((p, idx) => (
                    <div key={idx} className="rounded-md border border-border bg-surface2/60 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{`0${idx + 1}`}</p>
                      <p className="font-heading text-sm font-bold text-text mb-2">{p.title}</p>
                      <p className="text-xs leading-relaxed text-text-dim">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Model */}
              <div className="mt-5">
                <p className="mono-label mb-3">The Business Model</p>
                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-md border border-border bg-surface2/60 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent2 mb-2">B2C — Primary</p>
                    <p className="text-xs leading-relaxed text-text-dim">{detail.businessPotential.model.b2c}</p>
                  </div>
                  <div className="rounded-md border border-border bg-surface2/60 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent3 mb-2">B2B — Restricted Domains</p>
                    <p className="text-xs leading-relaxed text-text-dim">{detail.businessPotential.model.b2b}</p>
                  </div>
                </div>
              </div>

              {/* Sovereignty Roadmap */}
              <div className="mt-5">
                <p className="mono-label mb-3">Sovereignty Roadmap</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {detail.businessPotential.roadmap.map((r, idx) => (
                    <div
                      key={idx}
                      className={`rounded-md border p-4 ${r.isCurrent ? 'border-accent/50 bg-accent/5' : 'border-border bg-surface2/40'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{r.level}</p>
                        {r.isCurrent && (
                          <span className="font-mono text-[8px] uppercase tracking-widest text-accent border border-accent/40 rounded px-1.5 py-0.5">
                            Now
                          </span>
                        )}
                      </div>
                      <p className="font-heading text-xs font-bold text-text mb-2">{r.title}</p>
                      <p className="text-[11px] leading-relaxed text-text-dim">{r.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision + Closing */}
              <div className="mt-5 rounded-md border border-accent/20 bg-accent/5 px-5 py-4 space-y-3">
                <p className="text-sm leading-relaxed text-text-dim">{detail.businessPotential.vision}</p>
                <p className="text-sm font-medium text-text border-l-2 border-accent pl-4 italic">
                  {detail.businessPotential.closing}
                </p>
              </div>
            </section>
          )}

          {/* File Attachments (Raw Data, Reports, etc.) */}
          {detail.attachments && detail.attachments.length > 0 && (
            <section className="mt-6 card-shell">
              <p className="mono-label">Artifacts & Reports</p>
              <div className="mt-4 flex flex-col gap-3">
                {detail.attachments.map((file, idx) => (
                  <a
                    key={idx}
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-md border border-border bg-surface2/50 px-4 py-3 hover:border-accent2 hover:bg-surface2 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded bg-surface border border-border font-mono text-[10px] font-bold text-accent group-hover:text-accent2 uppercase">
                        {file.type}
                      </span>
                      <span className="text-sm font-medium text-text-dim group-hover:text-text transition-colors">
                        {file.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-accent2 transition-colors">
                      View -&gt;
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Visual Modules (Structured Input/Output) */}
          {detail.visualModules && detail.visualModules.length > 0 && (
            <section className="mt-8 space-y-8">
              <div className="border-b-2 border-border pb-4">
                <h2 className="font-heading text-xl font-bold tracking-tight text-text">Visual Proof & Engine Modules</h2>
                <p className="mt-2 text-sm text-text-dim">Module-level breakdown of system inputs, contexts, and generated outputs.</p>
              </div>
              
              <div className="flex flex-col gap-16">
                {detail.visualModules.map((module, idx) => (
                  <article key={idx} className="flex flex-col">
                    {/* Center Aligned Title Divider */}
                    <div className="mb-8 flex items-center gap-4">
                      <div className="h-px flex-1 bg-border"></div>
                      <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent2">{module.title}</h3>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    
                    {/* Content — full-width if diagram or no left-side context, split if input/differentiators exist */}
                    {!module.input && (!module.differentiators || module.differentiators.length === 0) ? (
                      /* ── Full-width layout (System Architecture diagrams like C.O.R.E.) ── */
                      <div className="flex flex-col gap-6">
                        <p className="text-sm leading-relaxed text-text-dim">{module.description}</p>
                        
                        {module.diagramType ? (
                          <ModuleDiagramRenderer type={module.diagramType} />
                        ) : (
                          <div className={`grid gap-4 ${module.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                            {module.images.map((img, imgIdx) => (
                              <ScrollableImageFrame
                                key={imgIdx}
                                src={img}
                                alt={`${module.title} ${imgIdx + 1}`}
                                maxHeight="max-h-[650px]"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* ── Split layout (modules with System Input & Vs. Generic Wrapper context) ── */
                      <div className="flex flex-col xl:flex-row gap-8 items-center">
                        {/* Text Content */}
                        <div className={`flex flex-col gap-5 ${module.images.length > 0 || module.diagramType ? 'w-full xl:w-2/5' : 'w-full'}`}>
                          <p className="text-sm leading-relaxed text-text-dim">{module.description}</p>
                          {module.input && (
                            <div className="rounded-md border border-border bg-surface2/60 p-4">
                              <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">System Input / Context</p>
                              <p className="text-sm font-medium italic text-text-dim border-l-2 border-accent3 pl-3">{module.input}</p>
                            </div>
                          )}

                          {module.differentiators && module.differentiators.length > 0 && (
                            <div className="rounded-md border border-border bg-surface/80 p-4">
                              <p className="font-mono text-[9px] uppercase tracking-widest text-accent2 mb-3">Vs. Generic Wrapper</p>
                              <ul className="space-y-3">
                                {module.differentiators.map((diff, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-text-dim items-start">
                                    <span className="text-accent2 mt-0.5">↳</span>
                                    <span>{diff}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Image strip or Diagram */}
                        {(module.images.length > 0 || module.diagramType) && (
                          <div className="w-full xl:w-3/5 flex flex-col gap-3">
                            {module.diagramType ? (
                              <ModuleDiagramRenderer type={module.diagramType} />
                            ) : module.paired ? (
                              <div className="flex flex-col gap-3">
                                {module.pairedLabels && (
                                  <div className="grid grid-cols-2 gap-3 mb-1">
                                    {module.pairedLabels.map((label) => (
                                      <p key={label} className="text-center font-mono text-[9px] uppercase tracking-widest text-accent2 font-bold">{label}</p>
                                    ))}
                                  </div>
                                )}
                                <div className="grid grid-cols-2 gap-3">
                                  {module.images.map((img, imgIdx) => (
                                    <ScrollableImageFrame
                                      key={imgIdx}
                                      src={img}
                                      alt={`${module.title} screen ${imgIdx + 1}`}
                                      landscape={module.landscape}
                                      maxHeight="max-h-[580px]"
                                    />
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className={`grid gap-3 ${module.landscape ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                {module.images.map((img, imgIdx) => (
                                  <ScrollableImageFrame
                                    key={imgIdx}
                                    src={img}
                                    alt={`${module.title} screen ${imgIdx + 1}`}
                                    maxHeight="max-h-[600px]"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Legacy Visual Evidence (Images) fallback */}
          {!detail.visualModules && detail.images && detail.images.length > 0 && (
            <section className="mt-6 card-shell">
              <p className="mono-label">Visual Proof</p>
              <div className="mt-4 flex flex-col gap-6">
                {detail.images.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-md border border-border bg-surface2 relative group shadow-lg">
                    <img
                      src={img}
                      alt={`Case study visual ${idx + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-accent2"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Loom Video (if exists in project.links) */}
          {project.links?.loom && (
            <section className="mt-6 card-shell">
              <p className="mono-label">Interactive Demo</p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border border-border">
                <iframe
                  src={project.links.loom.includes('share') ? project.links.loom.replace('share', 'embed') : project.links.loom}
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="mt-6 card-shell">
          <p className="mono-label">Narrative</p>
          <p className="mt-3 text-sm text-text-dim">
            Detailed execution notes will be published here. Add content in{' '}
            <code className="font-mono text-[10px] text-accent2">src/data/projectDetails.ts</code>{' '}
            for this project ID.
          </p>
        </section>
      )}

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap gap-3">

        {shouldShowProjectAction(project, 'github') ? (
          <Button variant="outlined" href={project.links.github} external>
            GitHub
          </Button>
        ) : null}
        <Button variant="outlined" to="/projects">
          All Projects
        </Button>
        <Link
          to="/#contact"
          className="inline-flex items-center text-xs font-mono uppercase tracking-[0.1em] text-accent2 underline-offset-4 hover:underline"
        >
          {'Contact ->'}
        </Link>
      </div>
    </main>
  )
}

export default CaseStudy
