# Go To Market

## Product summary

ToastBot AI Scribe is a speech-prep platform focused on wedding toasts, combining generation, editing, and rehearsal support in one web workflow.

## Deep research refresh (2026-05-23)

### 1) Market size and growth signal

- Grand View Research reports the U.S. wedding services market at **$64.93B (2024)** and projects **$95.35B by 2030**, with a **6.8% CAGR (2025-2030)**.
- This supports a large, still-growing wedge for event-specific writing and rehearsal products.

### 2) AI behavior signal (fit for product category)

- Pew reports roughly **one-third of U.S. adults** have used AI chatbots and usage is strongest among younger cohorts.
- This supports demand for guided AI writing workflows, especially for high-stress moments (like wedding speeches) where users value structure over open-ended prompting.

### 3) Monetization benchmark signal

- RevenueCat's 2024 subscription benchmark reports average **download-to-paid 30-day conversion ~1.7%**, with upper performers around **4.2%**.
- This supports a realistic conversion design target for ToastBot's paid tiers and a benchmark range for launch KPI gating.

## ICP (Ideal Customer Profile)

- Primary: Wedding party members writing first-time toasts
- Secondary: Officiants, family speakers, and event planners
- Tertiary: Speech coaches bundling preparation tools

## Competitive positioning

- Faster than generic LLM prompting due to guided role/tone inputs
- Better rehearsal outcomes with integrated practice + analytics view
- More event-specific than broad writing assistants

## One-iteration ship-to-market execution criteria

To meet revvel-standards S2M expectations for this repository:

1. **Website surface is fully testable end-to-end** (generator, analytics, templates/quotes, auth modal, save/practice/mobile flows).
2. **Vercel Website-in-Test exists and is referenced in README** for deployment traceability.
3. **Documentation set is complete** (README, CHANGELOG, DEPLOYMENT_GUIDE, GO_TO_MARKET, BRAND_GUIDELINES, SECURITY).
4. **Baseline automation exists** via `npm test` + `scripts/test-baseline.js` and `build:baseline`.
5. **Commercial framing is explicit** with value proposition, KPI targets, and 3-year $10M objective context.

## Launch strategy

1. Publish and verify the Vercel-hosted website in test and production.
2. Launch role-based SEO landing pages (best man, maid of honor, parent toasts).
3. Activate social proof loop via user testimonials and before/after speech examples.
4. Run partner pilots with planners/coordinators and convert high-performing partners into referral channels.
5. Gate paid rollout on conversion benchmarks (baseline 1.7%, target 3-4% by optimization).

## Revenue model

- Free tier: limited toast generations
- Pro tier: unlimited generations, advanced tones, saved libraries
- Team/Event tier: multi-user planning bundle for wedding parties

## KPI targets

- Activation: 60%+ of new users generate first toast in first session
- Retention: 25%+ week-4 return rate for registered users
- Conversion: 1.7% baseline to paid (first target), 3-4% optimized target
- Referral: 15%+ of paid signups attributed to planner/coordinator channels

## 36-month outcome target

Grow toward $10M annualized revenue by expanding from weddings into adjacent event-speech verticals while maintaining strong conversion and retention loops.

## Source links

- Grand View Research — U.S. Wedding Services Market press release: https://www.grandviewresearch.com/press-release/us-wedding-services-market-analysis
- Pew Research — AI in daily life: https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/
- RevenueCat — State of Subscription Apps 2024: https://www.revenuecat.com/state-of-subscription-apps-2024/
