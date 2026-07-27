# QA Report — Star Dry Cleaners, Pinner

Build round 1. Every figure below was measured with the repo's Playwright runner against the
local dev server on port 4232 — not estimated.

## Contrast (WCAG AA)

Three pages × 320 / 390 / 768 / 1440px: **0 violations** (59/59/62/62, 51/51/53/54, 42/42/45/45
elements checked).

One violation was found and fixed: `.kicker--light` at `#ffd7dc` measured **4.48:1** on the red
CTA band — two hundredths under the threshold. Raised to `#ffe3e7` (4.87:1 on red, 12.6:1 on
indigo).

## Image upscaling

Three pages × four widths: **0 violations**.

## Crop discipline

Natural size, rendered box, `object-fit` and the exact share of each source frame discarded were
measured rather than eyeballed:

| Image | Natural | Worst-case crop | Where |
|---|---|---|---|
| `counter.jpg` | 1600×1218 | **1%** | home feature |
| `workroom.jpg` | 1600×927 | **7%** | services hero |
| `alterations.jpg` | 1200×1393 | **7%** | services split |
| `shopfront-street.jpg` | 1400×1265 | **11%** | contact hero |
| `shopfront.jpg` | 1700×956 | **18%** at 390px | home hero |

Two crops were fixed before handoff. `alterations.jpg` is portrait (1200×1393) and a mobile
`aspect-ratio:4/3` rule was throwing away **35%** of it; that override was removed. And
`shopfront-street.jpg` is nearly square (1.11), so the 16/10 page-hero box discarded **31%** —
it now has its own 5/4 treatment at 11%.

## Function

Three pages × 390 / 768 / 1440px:

| Check | Result |
|---|---|
| Horizontal overflow | **0px** everywhere |
| Broken images | **0** |
| Images missing `alt` | **0** |
| HTTP 4xx/5xx | **0** |
| Console errors | **0** |
| `<h1>` per page | exactly 1 |
| Heading order | H1 → H2 → H3, no skips |
| `tel:` links | all `+442088660302`, plus one `+447448768873` on the contact page |
| Tap targets under 24px | **0** |
| Mobile nav | opens (`none` → `flex`), `aria-expanded="true"`, closes on Escape and on link click |
| Reveal stranded after full scroll | **0 of 19 / 15 / 5** |
| JavaScript disabled | nav visible with 4 links, 0 content hidden |

## Reveal mechanism

engine.css's scroll-linked reveal is overridden at site level per the standing rule in
`AGENTS.md` (2026-07-11): content is opaque by default so the page is readable with JS off, and
`main.js` uses an IntersectionObserver with a `getBoundingClientRect()` pre-check plus a scroll
sweep and an 8-second timeout as backstops.

`engine.css:255` also sets `overflow-wrap:anywhere` on headings, which snaps words mid-character
on narrow screens. Overridden here to `overflow-wrap:normal; word-break:normal` before it could
bite, and `tel:` buttons carry `white-space:nowrap` so a phone number can never break.

## Not covered

- Safari untested this round. No scroll-driven animation, `subgrid` or `@view-transition` is
  used, so the known Safari failure modes do not apply.
- No form exists, so nothing is submitted and no data is collected.
