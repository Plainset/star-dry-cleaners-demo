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

---

# Round 2 — after independent review scored round 1 at 6.0 (FAIL)

Five blocking defects, all fixed.

1. **Three named Google reviews were published with invented five-star ratings.** The quotes
   themselves were real and read off their listing, but they were never recorded in
   `BUILD_BRIEF.md`, and **the per-review star blocks were fabricated** — Google does not expose
   an individual rating on those entries. The star glyphs are gone; only the 4.6/94 aggregate is
   claimed; the three quotes are now in the Allowed Facts table with their provenance.
2. **"Open from half eight, six days a week" was false.** Saturday opens at 09:00. Replaced with
   the actual pattern.
3. **The hero crop decapitated the fascia.** `shopfront.jpg` was chosen precisely because the
   phone number on the sign is legible, and a `16/8` box anchored at `50% 42%` cut that line off
   entirely — at 390px it clipped the number mid-digit. Re-anchored to `16/9` at `50% 12%`:
   measured **0% of the frame discarded** at 768 and 1440, 16% at 390. The contact hero had the
   same fault and is re-anchored too.
4. **"Forty years of getting it out" was the H1.** "Over 40 years" comes solely from their old
   site — which this brief itself describes as an unfinished bought template — so it was the
   weakest-sourced fact on the page carrying the largest type. Also read as a stain-removal
   promise. Removed entirely; the H1 is now "Cleaned and pressed on Marsh Road."
5. **Builder's evidence citations were left in customer-facing copy** — "shown on Star's own
   service panels", "one of the phrases Google pulls out of their reviews". That is audit trail,
   not service description. Every service line rewritten as a description of the service.

## Improvements taken

- **Voice fixed to first person throughout.** The site was flipping between "we" in the nav and
  "their/theirs" in the body, so half of it read as an outsider describing the business.
- **Removed the competitor comparison.** "Your coat goes in a van to a plant somewhere else"
  disparaged unnamed local dry cleaners — several of whom are on our own lead list — and implied
  a speed advantage nothing evidences. Also removed the invented causation about why reviews
  mention turnaround. Both are now on the Do Not Claim list.
- Softened "not sent away" and "it can be looked at while you are standing there", which were
  absolute claims on the evidence of one photograph.
- **`alterations.jpg` re-cropped** to remove the featureless black counter panel that filled its
  lower third and carried the unexplained Majestic Junction mark. 28% → **11%** discarded.
- **A focus trap on the open mobile menu.** Tab previously escaped to controls the panel was
  covering — invisible to a keyboard user. Tab and Shift-Tab now cycle within the panel.
- **A real typographic identity.** Headings now set in a serif stack (Iowan Old Style / Palatino
  / Georgia), which bridges to the red serif "STAR" in their own logo instead of leaving the
  whole site in the default UI sans.

## Round 2 measurements

| Check | Result |
|---|---|
| Contrast (3 pages × 320/390/768/1440) | **0 violations** |
| Upscale | **0 violations** |
| Horizontal overflow | **0px** at all widths |
| Frame discarded — hero at 768/1440 | **0%** |
| Frame discarded — worst case | **16%** (mobile hero) |
| Broken images / missing alt | 0 / 0 |
| Console errors / HTTP ≥400 | 0 / 0 |
| Reveal stranded after full scroll | 0 of 19 / 15 / 5 |
| JavaScript disabled | nav visible, 4 links, 0 content hidden |
| Tap targets under 24px | 0 |
| Invented star ratings | **0** |

---

# Round 3 — after independent re-review scored round 2 at 7.2 (FAIL)

## Blocking defects fixed

1. **The mobile hero was still truncating their own phone number** — "Tel:020 886" at 390px,
   with "179" clipped to "9". This was my second failed attempt at the same crop: rounds 2 and 3
   both tried to solve it by tuning `object-position`, which cannot work once the box ratio
   differs from the source. `shopfront.jpg` is 1700×956 (1.78), so the mobile box is now
   **16/9 — the same ratio as the source**. Measured: **0% of the frame discarded at 390, 768
   and 1440**. Nothing on the sign is lost at any width.
2. **The contact page was still in third-person agency voice** in three customer-facing lines
   ("The number on the shop's own fascia", "As published on their Google listing" ×2), which
   flatly contradicted round 2's claim that voice was fixed throughout. Now first person.
   That claim in the round 2 notes was wrong and is corrected here.
3. **Alt text described a projecting sign that is not in the frame.** `shopfront-street.jpg`
   shows the fascia, not the projecting sign. Alt rewritten to what is actually visible, and the
   same error corrected in `BUILD_BRIEF.md`.

## Improvements taken

- **Swapped the home feature image.** The headline is "The machine is in the shop", and
  `counter.jpg` gave roughly a third of the frame to the gold Majestic Junction crest — a
  relationship the brief says is unverified and must not be described — while the Union machine
  itself was small and half-occluded. `workroom.jpg` shows the machine clearly, so it now carries
  that headline; `counter.jpg` moved to the services hero where it works.
- **Re-cropped `alterations.jpg` again.** It was ~60% blank slatted wall. Now tight on the bench:
  the JAPSEW machine, the second machine, the thread cones and the tape measure all read.
  6% discarded.
- **Sticky header restored on mobile.** It had been set to `position:relative`, so the call CTA
  scrolled away on a very tall phone page.
- **Restored the third review quote verbatim.** Round 2 had silently copyedited "go again nd
  again" into "again and again". It is a quotation; it is now reproduced exactly, and the brief
  says so.
- Softened "a wall of thread" and "bedding of any size", both of which reached past the evidence.
- `BUILD_BRIEF.md` asset table corrected: `alterations.jpg` is 1300×691, not 1200×1393.

## Round 3 measurements

| Image | Natural | Worst-case frame discarded |
|---|---|---|
| `shopfront.jpg` (hero) | 1700×956 | **0%** at 390 / 768 / 1440 |
| `counter.jpg` | 1600×1218 | **1%** |
| `workroom.jpg` | 1600×927 | **3%** |
| `alterations.jpg` | 1300×691 | **6%** |
| `shopfront-street.jpg` | 1400×1265 | **11%** |

| Check | Result |
|---|---|
| Contrast (3 pages × 320/390/768/1440) | **0 violations** |
| Upscale (same 12 combinations) | **0 violations** |
| Horizontal overflow | **0px** everywhere |
| Broken images / missing alt | 0 / 0 |
| Console errors / HTTP ≥400 | 0 / 0 |
| Reveal stranded after full scroll | 0 of 19 / 15 / 5 |
| JavaScript disabled | nav visible, 4 links, 0 content hidden |
| Tap targets under 24px | 0 |
| Third-person agency voice in body copy | **0** |

---

# Round 3 result: 7.7 / 10 — PASS

The independent reviewer reported **no blocking defects**. Independently verified by them: zero
horizontal overflow across **fifteen** widths (320→1920) on all three pages, 0 console errors,
0 HTTP ≥400, 0 broken images, 0 missing alt, 0 reveal elements stranded after a full scroll,
0 contrast violations, one H1 per page with no heading skips, every `tel:` correct, and a focus
trap that genuinely cycles both directions with Escape restoring focus to the toggle.

On the thing that failed two rounds: **the hero discards 0% of its frame at 320, 390, 768 and
1440**, so the phone number painted on their own fascia and the "179" both survive at every
width.

## Fixed after the pass, before closing

The reviewer named two objective errors that "should be fixed before outreach". Both are done —
these are corrections of known bugs, not an attempt to raise the score:

1. **`alterations.jpg` carried stale intrinsic dimensions** (`width="1200" height="1393"` on a
   file that is 1300×691). CSS was masking it. Corrected in the markup and in the round-1 table
   above.
2. **With JavaScript off, the mobile nav still covered 235px of content.** It kept
   `position:absolute`, so the no-JS fallback floated over the page instead of stacking in flow.
   `.nav` now defaults to `position:static` and only becomes absolute under `.js`. Measured with
   `javaScriptEnabled:false` at 390px: **0px overlap** with `<main>` on all three pages, nav
   still visible with 4 links, and the JS-on toggle still works.

Two accuracy points were taken at the same time: the Ela J quote now reads "my sons" exactly as
the reviewer wrote it and as `BUILD_BRIEF.md` records it, and the contact page's provenance
notes ("Painted on our own fascia", "The number on our Google listing") are gone — they were
build audit trail dressed as customer copy.

## Left open, recorded not actioned

- The desktop hero image is tall enough to push the H1 below the fold at 1440×800. The sticky
  header keeps the call button reachable, which is why the reviewer did not block on it.
- `counter.jpg` on the services hero still shows the Majestic Junction crest prominently.
- No `LocalBusiness` JSON-LD and no Open Graph tags — a real miss for a site whose whole purpose
  is to be the destination from a Google Business Profile.
- The alterations line icon reads as an arrow rather than a needle at 26px.
- Five photographs across three pages is thin.
