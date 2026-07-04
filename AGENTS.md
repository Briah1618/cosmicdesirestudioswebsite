# AGENTS.md

Overview of this codebase for AI agents and developers.

## Project Overview

A single-page, static personal portfolio site for Erik Topaloglu (apps, Unity
games, Blender 3D work, and music). No backend, database, auth, or CMS — all
content is hardcoded in one route file and edited directly in code.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, TanStack Router) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes, no component library) |
| Icons | lucide-react |
| Deployment | Netlify (static build, output to `dist/client`) |

## Directory Structure

```
src/
  routes/
    __root.tsx   # HTML shell, <head> meta/title, dark mode class
    index.tsx    # The entire one-page site: nav, hero, and all sections
  styles.css     # Tailwind import + dark neon color tokens (pink/purple/blue/orange)
public/
  favicon.ico
```

Everything the original "portfolio" starter template shipped with (a blog,
content-collections CMS, resume/projects/contact pages, Radix UI component
kit) was removed — this site is a single hardcoded page and doesn't need
them.

## Editing the site

Everything lives in `src/routes/index.tsx`:
- `NAV_LINKS` — top nav anchor links
- `APPS` — the two app project cards (`ProjectCard` component)
- `Games()` — the single featured game project
- `THREE_D_CARDS` / `MUSIC_CARDS` — placeholder gradient cards for the 3D and
  Music sections (`PlaceholderCard` component)
- `CONTACT_LINKS` — the contact button row (icon + label + href)

To add a new app/project card, add an entry to the relevant array — no other
file needs to change.

## Styling conventions

- Custom color tokens (`pink`, `purple`, `blue`, `orange`, `ink`, `surface`,
  `surface-2`, `line`) are defined once in `src/styles.css` under `@theme
  inline` and used as normal Tailwind utilities (`bg-pink`, `text-purple`,
  `from-blue to-purple`, etc.).
- Section anchors (`#about`, `#apps`, `#games`, `#3d`, `#music`, `#contact`)
  power the smooth-scrolling nav (`scroll-behavior: smooth` in `styles.css`).
- No animation libraries; hover/transition effects are plain Tailwind
  transitions.

## Development Commands

```bash
npm install
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production static build
```
