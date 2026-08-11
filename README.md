# Hard Carry Media — OnePulse Insights Dashboard

An interactive dashboard for anyone at Hard Carry Media to explore insights from our
OnePulse research. Browse every survey ("topic") that has been run, open one to see the
full results recreated as charts alongside the key insight summaries, and export a PDF of
the key findings.

## What it does

1. **Review & select topics** — a searchable, filterable library of every survey run.
2. **Choose a topic** — click any card to open it.
3. **View results & insights** — each question is recreated as an interactive chart
   (with demographic breakdowns where available), above the key insights generated for
   that topic.
4. **Export a PDF** — one click produces a shareable PDF of the topic's key findings and
   charts.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Build a static bundle for hosting (any static host — S3, Netlify, internal server):

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Tech

- **React + Vite** — fast, static-hostable single-page app.
- **Recharts** — charts, using the validated colour palette in `src/lib/theme.js`.
- **jsPDF + html2canvas** — client-side PDF export (`src/lib/pdf.js`), no server needed.

## Loading real OnePulse data

All data the dashboard reads lives in **`src/data/topics.js`** — currently populated with
realistic sample data so you can see the dashboard working end to end. To load a real
export, replace that `topics` array (or write a small adapter that maps your OnePulse dump
into the same shape). The schema is documented at the top of that file; in short:

```js
{
  id, title, category, status, region,
  fieldworkStart, fieldworkEnd, respondents, headline, description,
  questions: [{
    id, text,
    type: 'single' | 'multi' | 'scale',   // 'multi' = pick-many, can total >100%
    totalResponses,
    results: [{ label, value /* percent */, count }],
    breakdowns: { age: [{ segment, <seriesLabel>: percent }] }  // optional cross-tabs
  }],
  insights: [{ title, body }]             // the key findings shown and exported
}
```

If your OnePulse export is CSV/JSON, the cleanest path is a build-time script that reads
the dump and writes `topics.js` (or a `topics.json` imported by it). Point me at a real
export and I'll wire up that adapter.

## Notes

- The app is entirely client-side — no backend, no data leaves the browser.
- Charts, colours, and accessibility follow the internal data-viz design system
  (fixed categorical palette, direct labels, hover tooltips, legends for multi-series).
