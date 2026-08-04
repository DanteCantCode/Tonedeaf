# Tonedeaf

One-page website for **Tonedeaf**, Edith Cowan University's DJ / electronic music club.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Events

All events live in one list in [`src/data/content.ts`](src/data/content.ts).

Set `endsAt` (Perth time, e.g. `2026-08-07T22:30:00+08:00`) to when the event finishes. After that moment, the site moves it into **Past events** automatically (checked every minute in the browser).

Upcoming = soonest first · Past = most recent first.
