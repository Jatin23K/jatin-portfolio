export interface NavItem {
  label: string
  href: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface VisionCard {
  badge?: string
  title: string
  paragraphs: string[]
  status?: string[]
  note?: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface SiteContent {
  brand: {
    monogram: string
    role: string
    resumeLabel: string
    resumeUrl: string
  }
  navigation: NavItem[]
  hero: {
    badge: string
    headlineTop: string
    headlineAccent: string
    headlineAccent2: string
    subline: string
    stats: HeroStat[]
    primaryCta: string
    secondaryCta: string
    sqlSnippetTitle: string
    sqlSnippet: string[]
  }
  sections: {
    projects: { label: string; title: string; subtitle: string }
    skills: { label: string; title: string; subtitle: string }
    vision: { label: string; title: string; subtitle: string }
    contact: { label: string; title: string; subtitle: string }
  }
  vision: {
    theme: VisionCard
    ecosystem: VisionCard
  }
  about: {
    label: string
    title: string
    subtitle: string
    paragraphs: string[]
  }
  contact: {
    email: string
    social: SocialLink[]
    successMessage: string
    errorMessage: string
    missingConfigMessage: string
  }
  footer: {
    copy: string
    stack: string
    legal: string
  }
}

export const siteContent: SiteContent = {
  brand: {
    monogram: 'JK',
    role: 'Jatin Kumar — Applied Data Scientist',
    resumeLabel: 'Download Resume',
    resumeUrl: '/resume.pdf',
  },
  navigation: [
    { label: 'Executive Summary', href: '/#projects-highlights' },
    { label: 'Case Studies', href: '/#projects-ai' },
    { label: 'Skills', href: '/#skills' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/#contact' },
  ],
  hero: {
    badge: 'Applied Data Scientist',
    headlineTop: "Architecting Intelligence.",
    headlineAccent: 'Shipping',
    headlineAccent2: 'Impact.',
    subline:
      'Applied Data Scientist building autonomous multi-agent systems, RAG pipelines, and deterministic ML applications. I don\'t just train models in notebooks—I architect and deploy end-to-end solutions that solve real business problems.',
    stats: [
      { value: 'Agentic AI', label: 'RAG & LLM PIPELINES' },
      { value: 'Predictive ML', label: '& SQL ANALYTICS' },
      { value: 'Sovereign', label: 'ORCHESTRATION OS' },
    ],
    primaryCta: 'View Case Studies ->',
    secondaryCta: 'Download Resume',
    sqlSnippetTitle: 'Autonomous Agent Orchestration',
    sqlSnippet: [
      'async def orchestrate_workflow(query: str, db: Database):',
      '    # 1. Strategic Decomposition',
      '    plan = planner_agent.decompose(query)',
      '    ',
      '    # 2. Parallel Execution (RAG + SQL)',
      '    results = await asyncio.gather(',
      '        rag_agent.search(plan.research_steps),',
      '        sql_agent.execute(plan.data_steps, db)',
      '    )',
      '    ',
      '    # 3. Deterministic Validation',
      '    if not validator.check_hallucination(results):',
      '        raise OutputValidationException("Grounding failed")',
      '        ',
      '    return synthesizer.compile(results)',
    ],
  },
  sections: {
    projects: {
      label: '02 / Case Studies',
      title: 'Architected Systems',
      subtitle: 'Each system is data-grounded, deterministically evaluated, and built for production.',
    },
    skills: {
      label: '03 / Skills',
      title: 'What I Work With',
      subtitle: 'Proof-based. No buzzword padding.',
    },
    vision: {
      label: '04 / Vision',
      title: 'Where This Is Going',
      subtitle: 'Transparent AI systems with business impact and user control.',
    },
    contact: {
      label: '05 / Contact',
      title: "Let's Talk",
      subtitle: 'Open to Applied Data Scientist roles, AI/ML collaborations, and real deployment problems.',
    },
  },
  vision: {
    theme: {
      title: 'The Theme',
      paragraphs: [
        'Every project I build centers on one idea: AI should be transparent about what it does with your data.',
        'TLDR Shield validates privacy in T&C documents. The next step is an AI ecosystem that practices what TLDR Shield preaches - personal AI on every device, fully transparent, user-controlled.',
      ],
    },
    ecosystem: {
      badge: 'Product Vision',
      title: 'Personal AI Ecosystem',
      paragraphs: [
        'A multi-device AI system where every device has its own specialized AI agent, connected through a secure orchestration layer.',
        'Subscription model. Full data transparency. Built on the same 6 privacy pillars that TLDR Shield validates.',
      ],
      status: ['Architecture Documented', 'Prototype In Progress'],
      note: 'Currently prioritizing core DS projects. JAMES/DAVID resumes after portfolio projects ship.',
    },
  },
  about: {
    label: '01 / About',
    title: 'Applied Data Science',
    subtitle: 'Models that ship, not just notebooks. Business outcomes from day one.',
    paragraphs: [
      'I close the loop — from problem definition and data exploration through to a deployed system with a measurable business outcome attached.',
      'My stack is Python, SQL, and ML pipelines served via FastAPI with retrieval-augmented AI layers where the problem demands it. Everything I build is designed to run in production, not just pass a test set.',
      'I focus on transparent AI — systems accountable to users, with clear data lineage, explainable outputs, and governance controls that hold up under scrutiny.',
    ],
  },
  contact: {
    email: 'jatinkumar20802@gmail.com',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jatin-kumar-97a800220' },
      { label: 'GitHub', href: 'https://github.com/Jatin23K' },
    ],
    successMessage: "Message sent. I'll get back to you soon.",
    errorMessage: 'Something went wrong. Email me directly.',
    missingConfigMessage: 'Form is not configured yet. Email me directly.',
  },
  footer: {
    copy: 'Built with Python + FastAPI + React — Deployed on Vercel',
    stack: 'Python + FastAPI + React + TypeScript',
    legal: '(c) 2026 Jatin Kumar - All projects are original work',
  },
}


