# Test plan

## Scope

This suite checks stable, public user journeys that do not require an account:

1. The homepage communicates the two primary ways to start playing.
2. The public Rules link reaches the base-game rulebook.
3. Critical base-game topics are present in the rulebook.
4. The extended-player rulebook exposes both 5–6 and 7–8 player guidance.
5. The company values page lists the five values used in hiring and execution.

## Why these checks

The cases cover navigation, content availability, and a small cross-page journey. They deliberately avoid WebGL gameplay assertions because those are more appropriate for a separate visual/game-state harness and would make this smoke suite unnecessarily flaky.

## Risks and next steps

- Run the suite in WebKit and a mobile viewport after confirming the content selectors are browser-independent.
- Add authenticated room-creation tests with a dedicated test account and approved test data.
- Add accessibility scans and visual snapshots once expected baselines are reviewed manually.
- Keep content assertions focused on product meaning instead of exact paragraphs so ordinary copy edits do not break the suite.

## AI-assisted workflow

Codex was used as an implementation partner to draft the initial test structure and code. The suite is executed against the live public pages, and failures are reviewed before changes are accepted. AI output is treated as a starting point, not as proof that the product works.
