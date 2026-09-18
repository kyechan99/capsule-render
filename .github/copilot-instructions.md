# Capsule Render Copilot instructions

- This is a TypeScript SVG renderer with a React/Vite generator. Preserve the
  public `/api` query-string and SVG-output compatibility.
- API handlers are in `api/`; SVG models and their registries are in `model/`;
  generator UI is in `src/`; Jest tests are in `__test__/`.
- A new renderable type needs registry updates, relevant tests, and a generator
  fallback update when it must be available before `/api/options` loads.
- Treat values interpolated into SVG as untrusted and review validation and
  escaping carefully.
- Use the existing Prettier style. Do not edit generated `dist/` or unrelated
  snapshots.
- For source, API, renderer, or generator changes, run `npm test` and
  `npm run build`. Only update snapshots for deliberate SVG output changes.
