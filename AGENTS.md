# Capsule Render agent guide

## Project overview

Capsule Render serves configurable SVG banner images from Vercel handlers and
includes a React/Vite generator UI. Treat the public `/api` query-string
contract and the SVG output as backwards-compatible interfaces.

## Repository map

- `api/`: Vercel request handlers. `api/index.ts` renders SVG; `api/options.ts`
  exposes the generator's available options.
- `model/`: SVG model base class and individual normal/animated shapes. New
  renderable types must be exported through the appropriate model index.
- `utils/`: parsing, setting, SVG/CSS, and rendering helpers.
- `src/`: Vite/React generator and JSON colour/theme data.
- `__test__/`: Jest unit, API, data-integrity, and SVG snapshot tests.

## Working conventions

- Use TypeScript and the existing Prettier configuration (2-space indentation,
  80-column print width, no added formatter or linter unless explicitly needed).
- Keep changes focused. Do not modify generated `dist/` output or unrelated
  snapshots.
- Do not add dependencies unless the task requires one and the reason is
  stated in the PR.
- Preserve existing query parameter names, defaults, and SVG markup unless a
  deliberate compatibility change is requested. User-provided query values are
  rendered into SVG, so consider escaping/validation and SVG correctness for
  every new input path.
- When adding a model type, update the model registry and the generator
  fallback list if it must be selectable before `/api/options` loads. Add or
  update tests and samples/documentation when user-visible.
- When changing palette, gradient, or theme JSON, maintain the data shape and
  run the data-integrity tests.

## Validate changes

Run the narrowest relevant test while working, then run these before handing
off a TypeScript, API, renderer, or generator change:

```sh
npm test
npm run build
```

Use `npm run test:update` only when an SVG output change is intentional; review
every snapshot change. Do not claim validation passed when a command was not
run.

## Pull requests

- Use Conventional Commit-style titles (`feat:`, `fix:`, `docs:`, `chore:`).
- Explain user-visible API/SVG changes, compatibility implications, and the
  tests run.
- Keep PRs small; separate refactors from behavior changes where practical.

## Code review rules

Prioritize findings that can change a generated SVG, break a documented query
parameter, desynchronize `/api/options` from generator fallbacks, introduce
unsafe SVG interpolation, or leave a new model/data variant untested. Do not
raise style-only comments that Prettier or the existing test suite already
covers.
