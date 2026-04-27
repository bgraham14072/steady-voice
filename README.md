# Steady Voice

A crisis communications dashboard for K-12 superintendents. Pre-built TV, radio, print, and school community templates for the situations that surprise district leaders.

> "AI can help draft the message, but the superintendent must own the message."

## What's inside

19 crisis scenarios across seven categories — Student Safety & Wellness, Personnel, Operational, Security, Reputation & Politics, Health, and Academic & Programmatic. Each scenario includes:

- A first-30-minutes action checklist
- Anticipated reporter questions
- Channel-specific drafts: TV statement, radio statement, press release, family letter, staff memo, social media post, robocall script, and board briefing

Plus a holding-statement generator, an alignment checklist, and a District details panel that auto-fills your district name, superintendent name, and contact info into every template.

## Stack

Static HTML, CSS, and vanilla JavaScript. No build step. No framework. Open `index.html` to run locally, or host the directory on any static host (S3, GitHub Pages, Netlify, etc.).

## File map

```
index.html         — page shell and modal markup
styles.css         — design system (Fraunces serif, Inter sans, parchment + navy)
app.js             — dashboard logic (filtering, templates, modals, theme)
data/scenarios.js  — scenario library, holding statements, principles, checklist
```

## Editing scenarios

All content lives in `data/scenarios.js`. Each scenario object has:

- `id`, `category`, `title`, `severity` (`high` | `medium` | `low`), `summary`
- `firstActions[]`, `toughQuestions[]`
- `templates.tv`, `templates.radio`, `templates.print`
- `templates.community.{family, staff, social, robocall, board}`

Placeholders use `[BRACKETS]` so superintendents review and replace before sending. The District details panel in the UI auto-fills common ones inline.

## Principles

The drafting voice is anchored in nine principles drawn from superintendent panel notes — speed beats polish, internal before external, avoid "no comment," transparency with limits, off the record is a relationship tool not a loophole, and so on. They appear at the bottom of every scenario in the UI, and as data in `scenarios.js` under `PR_PRINCIPLES`.

## License

Use freely within your district. No warranty. Always have legal counsel and a communications lead review messages before issuing them publicly.
