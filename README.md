# Erik Topaloglu — Portfolio

A modern, dark, neon-accented one-page portfolio for Erik Topaloglu, covering
apps, Unity game prototypes, Blender 3D work, and music.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- lucide-react icons

Fully static — no backend, database, authentication, or forms.

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/client`, which Netlify serves directly (see
`netlify.toml`).

## Editing content

All page content (headline, project cards, contact links, etc.) lives in
`src/routes/index.tsx` as plain arrays/JSX — see `AGENTS.md` for a full
breakdown of what to edit where.
