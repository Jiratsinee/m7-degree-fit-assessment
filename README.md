# Find Your M7 — Degree Fit Assessment

A responsive web assessment for M7 Consulting that helps prospective applicants discover
whether an MBA, a Specialized Master's, more experience, or further career clarification is
their right next step. Built from the "Find Your M7 — Framework Series 1: Degree Fit" source
document (questions, scoring, result logic, and brand guidelines).

## Flow

1. **Introduction** — what the assessment measures and how long it takes.
2. **Assessment** — 15 questions across 5 sections, one per screen, with progress tracking and
   Previous/Next navigation. Answers persist to `sessionStorage`.
3. **Lead form** — contact details and preferences, collected after the last question and
   before the result is revealed.
4. **Scoring** — MBA Fit, Master's Fit, Career Clarity, and Readiness are calculated from raw
   points and normalized to percentages.
5. **Result** — one of five result content variants, selected by the decision tree in
   `src/logic/scoring.ts`.
6. **M7 Consulting CTA** — a tailored next step and closing brand panel.

## Project structure

```
src/
  data/           Static content — the single source of truth for questions, lead-form
                   fields, and result copy (kept separate from UI/logic).
  logic/          Pure scoring & result-decision functions (no React/UI dependencies).
  state/          Session state (current screen, answers, lead data) with sessionStorage
                   persistence.
  components/     Screen components (Intro, Question, Lead form, Result) and shared UI.
  styles/         Shared, brand-driven CSS (buttons, containers, cards).
```

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint      # oxlint
```
