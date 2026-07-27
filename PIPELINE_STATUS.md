# Pipeline Status — Star Dry Cleaners, Pinner

> ## ⚠️ IN REVIEW — NOT FINAL
> Built to Alex's instruction on 2026-07-27, in parallel with the Lilly Whites build and kept
> separate from it. Not signed off and not shown to the business.

| Field | Value |
|---|---|
| Business | Star Dry Cleaners |
| Address | 179 Marsh Road, Pinner HA5 5PB |
| Phone | 020 8866 0302 (fascia) · 07448 768873 (Google) |
| Source | `active leads/THE_131_FOR_REVIEW.md` entry 78 |
| Defect pitched against | **Their Google profile's "Website" button links to `stardrycleaners.net`, which has no DNS record at all.** 168 archive snapshots, last 17 July 2025 — the site existed and is gone |
| Stage | **Built and passed independent review at 7.7/10 on round 3** (bar was 7.5) |
| Contacted | **No** |
| Published | https://plainset.github.io/star-dry-cleaners-demo/ — draft, not outreach |

## Round log

| Round | Score | Notes |
|---|---|---|
| 1 | **6.0 — FAIL** | 5 blocking: invented per-review star ratings, a false opening-hours line, a hero crop that cut the phone number off the fascia, the weakest-sourced fact promoted to the H1, and builder evidence-citations left in customer copy |
| 2 | **7.2 — FAIL** | All 5 fixed, plus voice corrected to first person, competitor comparison removed, alterations image re-cropped, mobile focus trap added, serif headings introduced. Round 2 blockers: mobile hero still cut the phone number off the fascia, contact page still in third-person voice, alt text described a sign not in the frame |
| 3 | **7.7 — PASS** | Hero box matched to the source ratio (0% discarded at every width) after two failed attempts at tuning object-position; voice fixed; alt corrected; feature image swapped so the machine headline shows the machine; alterations re-cropped; sticky header restored |

## Review loop — closed

| Round | Score | Verdict |
|---|---|---|
| 1 | 6.0 | FAIL — 5 blocking |
| 2 | 7.2 | FAIL — 3 blocking |
| 3 | **7.7** | **PASS** — no blocking defects |

Three independent reviewers, one per round, each grading on the build's own merits.

After the pass, two objective errors the reviewer flagged for pre-outreach fixing were corrected:
stale intrinsic image dimensions, and a no-JS nav that covered 235px of content. Both verified
fixed by measurement.

## Open items, recorded not actioned

1. Desktop hero pushes the H1 below the fold at 1440×800; cap the image height.
2. `counter.jpg` shows the unexplained Majestic Junction crest prominently on the services hero.
3. No `LocalBusiness` JSON-LD and no Open Graph tags — a real miss given the whole point of this
   build is to be the working destination from their Google profile.
4. The alterations icon reads as an arrow, not a needle, at 26px.
5. Two phone numbers are offered with no guidance on which to call.

## Standing constraint

Five photographs across three pages, all from their Google listing plus one recovered from their
own former website. It holds, but a short photo visit would lift this more than further design work.
