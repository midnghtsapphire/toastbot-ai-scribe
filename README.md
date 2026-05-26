# ToastBot AI Scribe

ToastBot AI Scribe is a React + TypeScript web app for generating personalized wedding toasts with built-in practice tools, analytics, templates, and quote discovery.

## What this repository does

- Generates customizable wedding toasts by role, tone, and couple details
- Provides editing, practice mode, and mobile-friendly viewing
- Includes speech analytics and saved-toast workflows
- Offers authentication UI flows for returning users

## How it can be used now

1. Install dependencies: `npm ci`
2. Run locally: `npm run dev`
3. Build production assets: `npm run build`
4. Validate revvel baseline: `npm test`

## Website in Test (Vercel)

- **Target test URL:** `https://toastbot-ai-scribe.vercel.app` (configure this project in Vercel and update if your assigned URL differs)
- Vercel is the required test platform for database-ready integrations.
- The homepage includes an S2M Launch Kit section covering research signals, launch suggestions, asset inventory, and delivery artifacts.

## Ship-to-market analysis

### Value delivered

ToastBot AI Scribe helps event speakers quickly produce high-quality, personalized toasts and rehearse them with confidence, reducing prep time while improving delivery quality.

### Goal priority

1. User activation through immediate toast generation value
2. Retention via saved toasts, templates, and practice tooling
3. Monetization via premium generation styles and event bundles

### 3-year revenue projection (goal framing)

- Year 1 target: $1.2M ARR via premium subscriptions and event packages
- Year 2 target: $3.5M ARR through partnerships and B2B licensing
- Year 3 target: $10M ARR with multi-event vertical expansion

## Revvel-standards artifacts

- [CHANGELOG.md](./CHANGELOG.md)
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- [GO_TO_MARKET.md](./GO_TO_MARKET.md)
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)
- [SECURITY.md](./SECURITY.md)
- Baseline scripts in [`scripts/`](./scripts)

## Scripts

- `npm run dev` — local development
- `npm run lint` — linting
- `npm run build` — production build
- `npm run build:baseline` — baseline wrapper around production build
- `npm test` / `npm run test:baseline` — revvel baseline checks
