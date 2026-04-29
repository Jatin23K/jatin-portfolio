# Jatin Portfolio (Skeleton V1)

Professional data-science portfolio built with React 18 + TypeScript + Vite + Tailwind.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (utility classes)
- React Router
- Formspree (contact form)
- Vitest + Testing Library + vitest-axe
- GitHub Actions CI

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment Variables

Create `.env` from `.env.example` and set:

```bash
VITE_FORMSPREE_ID=your_formspree_id
VITE_SITE_URL=https://your-domain.com
```

If `VITE_FORMSPREE_ID` is missing, the form displays a graceful fallback message.
If `VITE_SITE_URL` is missing, canonical tags fall back to the current browser origin.

## Scripts

- `npm run dev` - local development
- `npm run lint` - lint checks
- `npm run typecheck` - strict TypeScript checks
- `npm run test` - unit/component/route smoke tests
- `npm run test:a11y` - accessibility smoke test
- `npm run build` - production build
- `npm run ci` - full quality pipeline

## Content Update Workflow

- Projects: edit `src/data/projects.ts`
  - Use `order` to control portfolio block order
  - Use `featured` + optional `homeOrder` for homepage highlights
  - Use `isVisible` to hide/show a project block
- Project narratives: edit `src/data/projectDetails.ts`
- Skills: edit `src/data/skills.ts`
- Global copy/nav/contact/vision: edit `src/data/site.ts`

No section-level business copy should be hardcoded in JSX.

## Deploy to Vercel (GitHub Import)

1. Push repository to GitHub as `jatin-portfolio`.
2. In Vercel dashboard, import the GitHub repo.
3. Add environment variable `VITE_FORMSPREE_ID` in Vercel project settings.
4. Merge to `main` for production deploy; PRs get preview deployments.

## Accessibility and Performance

- Semantic landmarks and accessible form labels
- Keyboard-focus styles enabled globally
- Lightweight animations via CSS + IntersectionObserver only
- No heavy animation libraries

