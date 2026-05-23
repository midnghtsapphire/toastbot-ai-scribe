# Deployment Guide

## Prerequisites

- Node.js 18+
- npm 9+
- Vercel account connected to this repository

## Local validation

```bash
npm ci
npm test
npm run build
```

## Vercel deployment

1. Import `midnghtsapphire/toastbot-ai-scribe` in Vercel.
2. Use default Vite build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add any environment variables needed for production integrations.
4. Deploy and verify the assigned preview/production URL.

## Post-deploy checklist

- Load home page and generate a sample toast
- Verify analytics and practice mode render correctly
- Confirm auth modal opens and submits forms
- Confirm no console errors on primary flows
