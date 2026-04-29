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
    role: 'Jatin Kumar - AI Engineer & Data Scientist',
    resumeLabel: 'Download Resume',
    resumeUrl: '/resume.pdf',
  },
  navigation: [
    { label: 'Highlights', href: '/#projects-highlights' },
    { label: 'Projects', href: '/#projects-portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/#contact' },
  ],
  hero: {
    badge: 'AI Engineer',
    headlineTop: "Building AI that's",
    headlineAccent: 'Transparent',
    headlineAccent2: 'Useful.',
    subline:
      'Building AI systems end-to-end, from data pipelines and ML models to multi-agent orchestration and production-grade products.',
    stats: [
      { value: '7', label: 'Projects' },
      { value: '13', label: 'SQL Modules' },
      { value: 'Full Stack', label: 'AI' },
    ],
    primaryCta: 'View Projects ->',
    secondaryCta: 'Download Resume',
    sqlSnippetTitle: 'Live SQL Pattern',
    sqlSnippet: [
      'SELECT customer_id,',
      '       SUM(order_total) AS revenue,',
      '       RANK() OVER (ORDER BY SUM(order_total) DESC) AS rank',
      'FROM orders',
      "WHERE order_date >= CURRENT_DATE - INTERVAL '30 days'",
      'GROUP BY customer_id;',
    ],
  },
  sections: {
    projects: {
      label: '02 / Projects',
      title: 'Reorderable Project Blocks',
      subtitle: 'Each block is data-driven and manually reorderable by project order.',
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
      subtitle: 'Open to AI/DS roles, collaborations, and interesting problems.',
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
    title: 'Sales-first Data Science',
    subtitle: 'Business outcomes first. Technical depth where it matters.',
    paragraphs: [
      'I build data products that explain value clearly: what problem was solved, how fast the impact was realized, and what changed in business decisions.',
      'My stack includes SQL, Python, machine learning, and AI orchestration systems that can move from prototype to deployable products.',
      'I am focused on transparent AI - systems that remain accountable to users, with clear data usage and measurable outcomes.',
    ],
  },
  contact: {
    email: 'jatinkumar6560@gmail.com',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jatin-kumar-97a800220' },
      { label: 'GitHub', href: 'https://github.com/Jatin23K' },
    ],
    successMessage: "Message sent. I'll get back to you soon.",
    errorMessage: 'Something went wrong. Email me directly.',
    missingConfigMessage: 'Form is not configured yet. Email me directly.',
  },
  footer: {
    copy: 'Built with React + Tailwind - Deployed on Vercel',
    stack: 'React + TypeScript + Vite',
    legal: '(c) 2025 Jatin Kumar - All projects are original work',
  },
}


