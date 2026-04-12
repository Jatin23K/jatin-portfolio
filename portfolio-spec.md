# Portfolio Specification — Jatin Kumar
## Build Instructions for Codex

---

## OVERVIEW

Build a **skeleton portfolio website** for a Data Scientist. The portfolio should be live-deployable on Vercel with placeholder content where real project data doesn't exist yet. Projects will be added one by one as they ship — the data structure must support this cleanly.

**Goal:** Professional DS portfolio with sales-first framing. Every section leads with business impact, not technical jargon.

---

## TECH STACK

```
Framework:    React 18 + TypeScript + Vite
Styling:      Tailwind CSS (utility classes only)
Fonts:        Google Fonts — Syne (headings), IBM Plex Mono (labels/code), DM Sans (body)
Deployment:   Vercel (auto-deploy on GitHub push)
Contact Form: Formspree (free tier — replace YOUR_FORMSPREE_ID with actual ID)
Routing:      React Router v6
```

---

## DESIGN SYSTEM

### Colors (CSS Variables)
```css
:root {
  --bg:       #0a0a0f;   /* main background */
  --surface:  #111118;   /* card background */
  --surface2: #18181f;   /* elevated surface */
  --border:   #2a2a38;   /* borders */
  --accent:   #e8ff47;   /* primary accent — yellow-green */
  --accent2:  #47c8ff;   /* secondary accent — cyan */
  --accent3:  #ff6b47;   /* tertiary accent — orange-red */
  --accent4:  #c47fff;   /* quaternary accent — purple */
  --muted:    #6b6b88;   /* muted text */
  --text:     #e8e8f0;   /* primary text */
  --text-dim: #9898b0;   /* secondary text */
}
```

### Typography
```
Headings:  Syne — font-weight 700-800, tight letter-spacing (-0.02em)
Labels:    IBM Plex Mono — uppercase, letter-spacing 0.1em, font-size 10-11px
Body:      DM Sans — font-weight 300-400, line-height 1.7
```

### Design Rules
- Dark theme only — background #0a0a0f
- Noise texture overlay on body (subtle grain — opacity 0.04)
- Cards have 1px border (#2a2a38) with hover state (border-color: var(--accent2))
- Accent color tops on cards (2px colored top border)
- Buttons: filled accent (#e8ff47, black text) or outlined (border + text)
- Border radius: 8-12px for cards, 3-4px for badges
- No shadows — use borders for depth
- Generous spacing — sections have 80-100px vertical padding

---

## SITE STRUCTURE

```
/                    → Home (Hero + Projects overview + Skills preview)
/projects            → All projects grid
/projects/:id        → Individual project case study
/about               → About + Vision
/#contact            → Contact section (bottom of home)
```

---

## PAGE SECTIONS — IN ORDER

### 1. NAVIGATION
```
Left:  "JK" monogram logo (accent color, IBM Plex Mono)
Right: Projects | Skills | About | Contact (DM Sans, small)
       + "Download Resume" button (outlined, small)

Behavior:
- Fixed top, backdrop blur on scroll
- Mobile: hamburger menu
- Active link: accent color underline
```

### 2. HERO SECTION

```
Layout: Full viewport height, centered content, left-aligned text

Badge (top):    [ DATA SCIENTIST ] — IBM Plex Mono, accent background, black text

Headline:
  "Building AI that's
   Transparent
   & Useful."

  — "Transparent" in accent color (#e8ff47)
  — "Useful" in accent2 color (#47c8ff)
  — Syne font, 64-80px, font-weight 800
  — Line height 1.0

Subline:
  "Data Scientist focused on SQL, Python, Machine Learning,
   and AI systems that solve real business problems."
  — DM Sans, 16px, text-dim color, max-width 520px

Stats row (3 cards below subline):
  [ 5+ Projects ]  [ 13 SQL Modules ]  [ Full Stack AI ]
  — Small cards with accent top border
  — IBM Plex Mono labels, Syne values

CTA buttons:
  [ View Projects → ]  (filled, accent)
  [ Download Resume ]  (outlined)

Right side decoration:
  Floating code snippet card showing a real SQL query
  with syntax highlighting — subtle, positioned right side
  Rotate slightly (-2deg), semi-transparent border
```

### 3. PROJECTS SECTION

```
Section label:  [ 02 / PROJECTS ] — IBM Plex Mono, accent color
Section title:  "Things I've Built"
Section sub:    "Every project starts with a real problem."

Layout: Masonry-style grid (2 columns desktop, 1 mobile)

Project Card anatomy:
┌─────────────────────────────────────┐
│ [tier badge]  [status badge]        │ ← top row
│                                     │
│ PROJECT TITLE                       │ ← Syne, 20px, bold
│ One line problem statement          │ ← DM Sans, text-dim
│                                     │
│ PROBLEM                             │ ← IBM Plex Mono label
│ Problem description text            │
│                                     │
│ IMPACT                              │ ← IBM Plex Mono label  
│ Impact description text             │
│                                     │
│ [React] [Python] [FastAPI]          │ ← tech stack badges
│                                     │
│ [ Live Demo → ]  [ GitHub ]         │ ← CTAs
└─────────────────────────────────────┘

Tier badges:
  Tier 1 → accent (#e8ff47) background
  Tier 2 → accent2 (#47c8ff) background  
  Tier 3 → accent3 (#ff6b47) background
  Vision → accent4 (#c47fff) background

Status badges:
  "Live"        → green (#98d982)
  "In Progress" → accent (#e8ff47)
  "Coming Soon" → muted (#6b6b88)
  "Vision"      → accent4 (#c47fff)
```

### 4. SKILLS SECTION

```
Section label:  [ 03 / SKILLS ]
Section title:  "What I Work With"
Section sub:    "Proof-based. No buzzword padding."

Layout: 2 columns

Skill bar anatomy:
  SQL          ████████░░  Advanced
               13 modules · Window Functions · Query Optimization

Each skill has:
- Name (Syne, bold)
- Progress bar (accent color fill, surface2 background)
- Level label (IBM Plex Mono)
- Short proof line (DM Sans, text-dim, 12px)

Skills list:
  SQL                → 85%  Advanced      "13 modules, complex window functions"
  Python             → 70%  Intermediate  "Pandas, NumPy, scikit-learn"
  Machine Learning   → 65%  Intermediate  "Supervised + Unsupervised"
  Data Visualization → 60%  Intermediate  "EDA, statistical analysis"
  AI / Agents        → 50%  Growing       "RAG, Vector DB, Multi-agent systems"
  React + TypeScript → 65%  Intermediate  "Frontend for data products"
```

### 5. VISION SECTION

```
Section label:  [ 04 / VISION ]
Section title:  "Where This Is Going"

Content — two cards side by side:

Card 1 — The Theme:
  "Every project I build centers on one idea:
   AI should be transparent about what it does
   with your data."
  
  "TLDR Shield validates privacy in T&C documents.
   The next step is an AI ecosystem that practices
   what TLDR Shield preaches — personal AI on every
   device, fully transparent, user-controlled."

Card 2 — Personal AI Ecosystem (JAMES/DAVID):
  Badge: [ PRODUCT VISION ]
  
  Title: "Personal AI Ecosystem"
  
  "A multi-device AI system where every device
   has its own specialized AI agent, connected
   through a secure orchestration layer."
  
  "Subscription model. Full data transparency.
   Built on the same 6 privacy pillars that
   TLDR Shield validates."
  
  Status: [ Architecture Documented ] [ Prototype In Progress ]
  
  Note: "Currently prioritizing core DS projects.
         JAMES/DAVID resumes after portfolio projects ship."
```

### 6. CONTACT SECTION

```
Section label:  [ 05 / CONTACT ]
Section title:  "Let's Talk"
Section sub:    "Open to DS roles, collaborations, and interesting problems."

Layout: Two columns
  Left:  Contact info + social links
  Right: Contact form

Contact info:
  📧 your.email@gmail.com
  💼 LinkedIn → link
  🐙 GitHub   → link
  
Social links styled as outlined buttons with IBM Plex Mono text

Contact form fields:
  Name     [text input]
  Email    [email input]
  Message  [textarea — 4 rows]
           [Send Message →] button (filled, accent)

Form submission: Formspree
  action="https://formspree.io/f/YOUR_FORMSPREE_ID"
  method="POST"

Success state: "Message sent. I'll get back to you soon."
Error state:   "Something went wrong. Email me directly."
```

### 7. FOOTER

```
Left:  "JK" + "Jatin Kumar — Data Scientist"
Right: Built with React + Tailwind · Deployed on Vercel

Bottom line: © 2025 Jatin Kumar · All projects are original work
```

---

## DATA STRUCTURE

Store all content as TypeScript data objects. Components read from data — never hardcode content in JSX.

### projects.ts
```typescript
export interface Project {
  id: string
  tier: 1 | 2 | 3 | 4
  title: string
  tagline: string          // one line problem statement
  problem: string
  solution: string
  impact: string
  tech: string[]
  status: 'live' | 'in-progress' | 'coming-soon' | 'vision'
  demo?: string            // optional — add when live
  github?: string          // optional — add when public
  caseStudy?: string       // optional — add when written
  featured: boolean        // show on home page
}

export const projects: Project[] = [
  {
    id: "tldr-shield",
    tier: 1,
    title: "TLDR Shield",
    tagline: "Privacy risk scanner for Terms & Conditions",
    problem: "Nobody reads T&C documents. Privacy risks go completely unnoticed.",
    solution: "AI browser extension that scans T&C against 6 privacy pillars and returns an instant risk score.",
    impact: "Privacy risk assessment in seconds instead of hours of reading.",
    tech: ["React", "TypeScript", "NVIDIA NIM", "Browser Extension", "Prompt Engineering"],
    status: "in-progress",
    demo: "",
    github: "",
    caseStudy: "",
    featured: true
  },
  {
    id: "launchmint-ai",
    tier: 2,
    title: "LaunchMintAI",
    tagline: "Forensic startup idea validator",
    problem: "Founders waste months building products nobody wants.",
    solution: "AI research engine that tears apart business ideas using real market data, competitor analysis, and adversarial scrutiny.",
    impact: "Idea validation time reduced from weeks to minutes.",
    tech: ["FastAPI", "React", "Gemini 2.0", "ChromaDB", "Python"],
    status: "in-progress",
    demo: "",
    github: "",
    caseStudy: "",
    featured: true
  },
  {
    id: "mcp-analysis-engine",
    tier: 2,
    title: "Automated DS Analysis Engine",
    tagline: "Upload data + context, get instant analytical insights",
    problem: "DS teams waste hours on repetitive EDA setup for every new dataset.",
    solution: "Automated analysis pipeline — feed a dataset and business context, get AI-generated questions, surface exploration, and persistent analytical memory.",
    impact: "EDA setup time reduced from hours to minutes.",
    tech: ["FastAPI", "React", "Vector DB", "Python", "SSE Streaming"],
    status: "in-progress",
    demo: "",
    github: "",
    caseStudy: "",
    featured: true
  },
  {
    id: "ml-project",
    tier: 3,
    title: "End-to-End ML Project",
    tagline: "Coming soon",
    problem: "TBD",
    solution: "TBD",
    impact: "TBD",
    tech: ["Python", "scikit-learn", "Pandas", "SQL"],
    status: "coming-soon",
    featured: false
  },
  {
    id: "rag-project",
    tier: 3,
    title: "RAG / Agent System",
    tagline: "Coming soon",
    problem: "TBD",
    solution: "TBD",
    impact: "TBD",
    tech: ["Vector DB", "LangChain", "FastAPI", "React"],
    status: "coming-soon",
    featured: false
  }
]
```

### skills.ts
```typescript
export interface Skill {
  name: string
  level: number          // 0-100
  label: string          // 'Beginner' | 'Intermediate' | 'Advanced'
  proof: string          // one line proof
  category: 'data' | 'ml' | 'engineering' | 'ai'
}

export const skills: Skill[] = [
  { name: "SQL", level: 85, label: "Advanced", proof: "13 modules — window functions, query optimization, transactions", category: "data" },
  { name: "Python", level: 70, label: "Intermediate", proof: "Pandas, NumPy, scikit-learn, FastAPI", category: "engineering" },
  { name: "Machine Learning", level: 65, label: "Intermediate", proof: "Supervised + Unsupervised — classification, clustering, regression", category: "ml" },
  { name: "EDA + Statistics", level: 65, label: "Intermediate", proof: "Statistical analysis, probability, data quality validation", category: "data" },
  { name: "AI / Agents", level: 50, label: "Growing", proof: "RAG pipelines, vector databases, multi-agent orchestration", category: "ai" },
  { name: "React + TypeScript", level: 65, label: "Intermediate", proof: "Frontend for data products and browser extensions", category: "engineering" }
]
```

---

## COMPONENT STRUCTURE

```
src/
  components/
    layout/
      Navigation.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Projects.tsx
      Skills.tsx
      Vision.tsx
      Contact.tsx
    ui/
      ProjectCard.tsx
      SkillBar.tsx
      Badge.tsx
      Button.tsx
      SectionHeader.tsx
  pages/
    Home.tsx
    ProjectsPage.tsx
    CaseStudy.tsx
    About.tsx
  data/
    projects.ts
    skills.ts
  styles/
    globals.css
  App.tsx
  main.tsx
```

---

## ANIMATIONS

Keep animations subtle and purposeful:

```
Page load:     Staggered fade-up on hero elements
               (opacity 0→1, translateY 20px→0)
               Each element 100ms delay apart

Scroll:        Intersection Observer on section headers
               Fade in when enters viewport

Cards:         Hover → border-color transition to accent2
               Hover → translateY(-2px)
               transition: all 0.2s ease

Skill bars:    Animate width on scroll into view
               CSS transition: width 1s ease

CTA buttons:   Hover → background lighten slightly
               Active → scale(0.98)
```

No heavy libraries. CSS transitions only. No GSAP, no Framer Motion.

---

## RESPONSIVE BREAKPOINTS

```
Mobile:   < 640px   — single column, reduced font sizes
Tablet:   640-1024px — 2 column projects
Desktop:  > 1024px  — full layout as specified
```

---

## PLACEHOLDER CONTENT RULES

For sections not yet ready:
```
Projects with status "coming-soon":
  → Show card with "Coming Soon" badge
  → Blur/reduce opacity slightly
  → No demo/github links shown
  → Tech stack shown as planned

Case studies not written:
  → Project card shows "Case Study Coming Soon"
  → Link disabled or hidden

Stats in hero:
  → "5+ Projects" (update as they ship)
  → "13 SQL Modules" (this is accurate now)
  → "Full Stack AI" (permanent)
```

---

## DEPLOYMENT INSTRUCTIONS

```bash
# 1. Create project
npm create vite@latest jatin-portfolio -- --template react-ts
cd jatin-portfolio
npm install

# 2. Install dependencies
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom
npx tailwindcss init -p

# 3. Add Google Fonts to index.html
# Syne, IBM Plex Mono, DM Sans

# 4. Push to GitHub
git init
git add .
git commit -m "initial portfolio skeleton"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main

# 5. Deploy to Vercel
# Go to vercel.com
# Import GitHub repo
# Deploy — automatic
# URL: jatinkumar.vercel.app (or similar)

# 6. Set up Formspree
# Go to formspree.io
# Create free account
# Create new form
# Copy form ID → replace YOUR_FORMSPREE_ID in Contact.tsx
```

---

## WHAT TO BUILD NOW vs LATER

### Build now (skeleton):
- [ ] All components with placeholder content
- [ ] Design system implemented
- [ ] Navigation working
- [ ] Hero section complete
- [ ] Project cards with current 3 projects (in-progress status)
- [ ] Coming soon cards for ML + RAG
- [ ] Skills section
- [ ] Vision section (JAMES/DAVID)
- [ ] Contact form (Formspree)
- [ ] Footer
- [ ] Deployed on Vercel

### Add later (as projects ship):
- [ ] TLDR Shield — update status to "live", add demo link, add case study
- [ ] LaunchMintAI — update status to "live", add demo link
- [ ] MCP Engine — update status, add demo
- [ ] ML Project — fill in content when built
- [ ] RAG Project — fill in content when built
- [ ] Loom demo videos embedded per project
- [ ] Custom domain when ready to apply

---

## IMPORTANT NOTES FOR CODEX

1. **Sales POV always** — lead with problem and impact, not technology
2. **Data-driven components** — all content from data files, not hardcoded
3. **No placeholder lorem ipsum** — use actual placeholder text from this spec
4. **Mobile first** — build mobile layout first, scale up
5. **Performance** — lazy load images, no heavy dependencies
6. **Accessibility** — semantic HTML, proper aria labels, keyboard navigation
7. **Dark theme only** — no light mode toggle needed
8. **TypeScript strict** — no `any` types
9. **Clean commits** — one component per commit
10. **README** — include setup instructions in README.md

---

## FINAL OUTPUT EXPECTED

A fully functional React + TypeScript + Tailwind portfolio that:
- Loads in under 2 seconds
- Looks professional on mobile and desktop
- Has all sections as specified
- Deploys automatically to Vercel on push
- Can have projects added by editing `src/data/projects.ts` only
- Contact form works via Formspree
- Matches the dark theme design system exactly

---
*Spec version 1.0 — Jatin Kumar Portfolio*
*Build skeleton first. Content fills in as projects ship.*
