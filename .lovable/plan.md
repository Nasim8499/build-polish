# Mobile polish + slide-out sidebar drawer

## Goals
1. Every multi-card grid renders **2 items per row on mobile** (currently most are `grid-cols-1`).
2. Mobile sections fill the **full screen width** — tighten outer paddings on small screens so cards aren't pinched.
3. Add a **click-to-open animated sidebar drawer** triggered from the existing sticky header (replaces the horizontal-scroll-only nav on mobile while keeping it on desktop).
4. No content removed; existing UI/colors preserved.

## Changes

### 1. Sticky header → add menu button + animated drawer (`src/VisaApp.tsx`, Navbar)
- Keep the current sticky white header and desktop horizontal links unchanged.
- On screens `< lg`: show a `Menu` icon button on the right of the header.
- Clicking it opens a **slide-in-from-right drawer** (full-height, ~85% width, dark `#0A1628` background, gold accents) listing all 11 nav links + Profile + Book CTA.
- Drawer uses `translate-x-0 / translate-x-full` with `transition-transform duration-300` for the animation, plus a fading black overlay (`bg-black/60`) behind it.
- Close on: backdrop click, X button, Escape key, or route navigation.
- The horizontal-scroll link strip stays visible as a secondary quick-nav under the header on tablets, but is hidden on `< sm` so the header stays clean on phones.

### 2. Two-per-row mobile grids (`src/VisaApp.tsx`)
Replace `grid-cols-1` with `grid-cols-2` on every card grid where each card can reasonably fit at half-width. Keep `grid-cols-1` only for true full-width content blocks (testimonial slider, side-by-side hero/text combos using `lg:grid-cols-2`, footer columns, contact/booking forms).

Lines to update (verified via grep):
- Home: 1505, 1677 (already 2), 1937, 1958, 1980, 2148, 2173, 2206
- Countries: 2381, 2399, 2425, 2537
- Jobs/Documents/Profile/News/Study/Invest: 2632, 2698, 2842, 2902, 2965, 2995, 3018, 3132, 3194, 3219
- Pattern: `grid-cols-1 md:grid-cols-X` → `grid-cols-2 md:grid-cols-X`
- For 4-col desktop grids, becomes `grid-cols-2 md:grid-cols-2 lg:grid-cols-4`
- For 3-col desktop grids, becomes `grid-cols-2 md:grid-cols-3`

### 3. Full-screen mobile section padding
- Section wrappers currently use `px-6 lg:px-8`. On mobile this leaves tall side margins making cards feel cramped at 2-up.
- Change global section pattern to `px-3 sm:px-6 lg:px-8` for content rows, and `gap-3 sm:gap-6` for tight 2-up grids on phones, so cards stretch edge-to-edge with breathing room.
- Card inner padding tightened on mobile: `p-4 sm:p-6 lg:p-8` where currently `p-8`.

### 4. Typography scale-down on mobile
- Hero / section titles: add `text-3xl sm:text-5xl lg:text-7xl` overrides where currently fixed at `text-5xl`+ so headlines don't overflow on 360px screens.
- Card titles `text-xl sm:text-2xl`, body `text-sm sm:text-base`.

### 5. Drawer animation (uses existing tailwind anim utilities)
```text
[Header  ☰]
   │ click
   ▼
[Overlay fades in 300ms] + [Drawer slides in from right 300ms]
   │ click outside / X / link
   ▼
[Slides back out + overlay fades]
```

## Files touched
- `src/VisaApp.tsx` — Navbar (drawer + button), all grid + padding updates inside Home, Countries, Jobs, Documents, Profile, News, Study, Invest sections.
- `src/styles.css` — already has `scrollbar-hide`; no new utilities needed (transform/opacity transitions are built-in).

## Out of scope
- No new routes, no data changes, no removal of existing content.
- Country detail page already has the prior loading/error guards — left as is.

## Verification
- `bun run build` must pass clean.
- Manually confirm at 390×844 viewport: drawer opens/closes smoothly, every cards section shows 2 per row edge-to-edge, no horizontal page scroll.
