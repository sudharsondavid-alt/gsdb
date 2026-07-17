# GSDB Modernization Prototype

Clickable Daikin GSDB modernization prototype for team review.

## Run locally

```bash
npm run dev
```

Open `http://localhost:5173`.

## Project structure

- `index.html` - page shell and app mount point
- `src/styles.css` - visual design and responsive layout
- `src/main.js` - prototype data, routes, interactions, and mock workflows
- `scripts/check.js` - lightweight validation for the static prototype

## Review focus

- Login and management console
- One canonical database version strategy
- Product-line catalog and record editor workflows
- Reusable master data and combination logic
- LLM-assisted add/upload/extract/fill workflow
- API consumer endpoints with show/copy actions
- Validation, sync, and drilldown scorecards
