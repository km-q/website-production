# Production repo

This is a production deployment snapshot of km-q/pixel-perfect-replay-9192
(Kong Ming Quantum), deployed to GitHub Pages via GitHub Actions.

It is NOT the Lovable source repo. Do not expect changes here to sync to
Lovable, and do not copy Lovable-only config back here without checking
that the Pages build still prerenders correctly.

Production-only differences from the source repo:
- vite.config.ts: prerendering enabled, so the build emits a static index.html.
- .github/workflows/deploy-pages.yml: builds and deploys .output/public to Pages.
- CNAME (kongm.ing) is copied into the Pages artifact at build time.
