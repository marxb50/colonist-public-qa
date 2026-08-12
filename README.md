# Colonist public QA — Playwright

A compact Playwright portfolio project that checks high-value public journeys on [Colonist](https://colonist.io/): the main play actions, rules navigation, essential rulebook content, extended-player documentation, and the company's published values.

## Run locally

```bash
npm install
npx playwright install chromium
npm test
```

Open the HTML report with:

```bash
npm run report
```

## What this demonstrates

- User-facing test cases written in TypeScript and Playwright
- Stable semantic selectors instead of coordinates or brittle CSS paths
- A small end-to-end navigation flow plus direct smoke checks
- CI execution with retry traces and failure artifacts
- Explicit test scope, risks, and next steps in [the test plan](docs/test-plan.md)
- A reproducible, evidence-first [bug report template](docs/bug-report-template.md)

## Design choice

The suite targets public HTML surfaces and intentionally avoids assertions inside the WebGL game. Game-state and canvas validation need a dedicated harness, controlled fixtures, and visual baselines; forcing them into a small smoke suite would reduce reliability.

## AI transparency

This project uses an AI-assisted development workflow. Codex helped draft the initial implementation; tests are run against the live product, and the resulting failures and diffs are reviewed before acceptance.
