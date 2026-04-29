# Project Content Workflow

This portfolio is manual-first. Add or update projects only through the data files below.

## Required Files

1. `src/data/projects.ts` (project card/list data + status + links)
2. `src/data/projectDetails.ts` (long-form case-study narrative)

## Reordering Project Blocks

Project order is data-driven:

1. Set `order` on each project in `src/data/projects.ts`.
2. Lower numbers appear first.
3. Change only `order` values to rearrange blocks globally.

Homepage highlights use:

1. `featured: true` to include a project in highlights.
2. `homeOrder` (optional) to override homepage ordering.
3. If `homeOrder` is missing, homepage falls back to `order`.

Visibility control:

1. `isVisible: true` shows the project.
2. `isVisible: false` hides the project without deleting data.

## Status Rules

Keep project lifecycle status accurate:
- `planned`
- `in-progress`
- `shipped`
- `vision`

## Publishing Rules

1. Every project entry must have a unique `id`.
2. If `caseStudyPublished` is `true`, that same `id` must exist in `src/data/projectDetails.ts`.
3. When status changes to `shipped`, provide:
- `links.demo`
- `links.github`
- `caseStudyPublished: true`
- at least 2 concrete metrics
4. For `in-progress` or `shipped` projects, provide:
- `primaryKpi`
- `kpiDelta`

The validation test in `src/test/projectDataValidation.test.ts` enforces the shipped requirements.
