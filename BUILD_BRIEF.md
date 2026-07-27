# Build Brief — Star Dry Cleaners, Pinner

Spec redesign. Built 2026-07-27 at Alex's instruction, run in parallel with the Lilly Whites
build and kept entirely separate from it. Entry 78 of `active leads/THE_131_FOR_REVIEW.md`.

## Business State Check — 2026-07-27

**Open and trading well.** Read live from their own Google Business Profile:

- Listed **Open**, hours published for every day.
- **4.6★ from 94 Google reviews** — the strongest review position of any dry cleaner on our
  Pinner list.
- Reviews dated 3, 7 and 9 months ago, and **the owner replies to them by name**.
- Attribute: LGBTQ+ friendly.

## The defect this build is built against

**Their Google profile publishes a website that does not exist.**

- The "Website" button on their Google Business Profile links to **`http://stardrycleaners.net/`**.
- That domain has **no DNS A record at all**, on apex or `www`. Nothing is served on port 80 or 443.
- This is not a site that was never built. The Internet Archive holds **168 snapshots**, the last
  on **17 July 2025** — so it was live within the past year and has since gone.

So the single most valuable link they have — the one on the profile that 94 reviewers have been
looking at — goes nowhere. That is a broken conversion path, not a cosmetic problem.

**Two other "Star Dry Cleaners" domains resolve and are NOT theirs.** `stardrycleaners.co.uk`
is a different business at 194 Lower Rd, London SE16 2UN, and `star-drycleaners.co.uk` is a
separate site that blocks automated clients. Neither may be linked or referenced.

### What their old site actually was

Recovered from the archive so we know what we are replacing. It was a bought template that had
never been finished: the "Expert Team" section listed **Kristin Watson, Savannah Nguyen, Ronald
Richards, Thiago Almada** — stock UI-kit placeholder names, not staff — alongside template
statistics ("16 M+ Laundry & Dry Complete", "12 M+ Satisfied Our Customer") that no single
Pinner shop could produce. Its header advertised Monday–Saturday 9:00–20:00 while its own footer
said Mon–Tue 8:00–18:00 and Wed 9:00–17:00. **None of that content is reused here.**

## Verified facts (Allowed Facts)

| Fact | Source |
|---|---|
| Trading name **Star Dry Cleaners**; logo reads **STAR Drycleaners** | their own fascia, and their own logo file recovered from their former site |
| 179 Marsh Road, Pinner HA5 5PB | Google profile; "179" also on the fascia |
| **020 8866 0302** | painted on their own fascia — legible in two separate photographs taken years apart |
| 07448 768873 | the number published on their Google profile |
| Mon–Fri 08:30–18:00, Sat 09:00–18:00, Sun closed | Google Business Profile hours panel, read live 2026-07-27 |
| 4.6★, 94 Google reviews | Google profile |
| **Over 40 years** in business | their own former website, recovered from the Internet Archive |
| Dry cleaning, laundry, alterations and repairs, curtains, duvets, shirt service, ironing | the illustrated service panels inside their own shop and in their own window, plus their former site's service list |
| In-house alterations — two industrial sewing machines (Japsew), overlocker, thread stock, tape measure | their own interior photographs |
| Their own dry-cleaning plant on site — a **Union** machine, visible behind the counter | their own interior photographs |
| Wedding / occasion wear handled — gowns on display in-store | their own interior photographs |
| Card payments: Visa, Mastercard, Amex | card decals on their own door |
| Counter notice: no responsibility for belts, buckles, buttons, zips or pens left in pockets; garments uncollected after three months may be disposed of | their own counter notice |
| Review themes: turnaround time (17 mentions), perfectly pressed clothes, spotless clothes, reliable dry cleaning | Google review topic tags |

### Google review quotes used verbatim on the site

Added 2026-07-27 after round 1 review correctly pointed out they were published without being
recorded here. All three were read directly from the business's own Google Business Profile.

| Reviewer | Quote as used |
|---|---|
| Ela J (Local Guide) | "Great service, cleaning my sons school blazer from a stress ball goo. It was very hard to clean it but the team did an amazing job! Service with a smile. Thank you" |
| Areeb M | "Exceptional service! This is by far the best dry cleaners in town. They handle every garment with real care and professionalism. My clothes always come back looking fresh, perfectly cleaned, and well-pressed." |
| Kaushik Parekh | "Best service I'm really happy I would love to go again nd again thank you for your service" — **reproduced exactly, including "nd"; round 2 silently copyedited it and round 3 restored it** |

**Per-review star ratings are NOT evidenced** and were removed from the site in round 2. Google
does not expose an individual rating on these entries, so the five-star glyph blocks the build
originally rendered against each quote were an invention. Only the 4.6/94 aggregate is claimed.

## Do Not Claim

- **"Drycleaning Quality in Just 2 hrs."** This appears on their window in an older 360°
  photograph. It is an undated turnaround promise from a previous shopfront and is not on the
  current fascia. Reviews praise turnaround, but no specific time is published anywhere current.
  Not used.
- **Any price.** Nothing priced is evidenced anywhere, and no promotional price is published.
- **Anything from their old website's template filler** — the placeholder staff names, the
  "16 M+ / 18 k+ / 12 M+" statistics, the eco/hypoallergenic detergent claims, the blog posts.
  All of it is unedited boilerplate and none of it is evidenced.
- **STAR DRY CLEANERS (UK) LIMITED, company 06333936.** Checked: **dissolved 25 September 2018**
  and registered in **Prestwich, Manchester**. It is not this business. No company number, no
  incorporation date and no "Ltd" is claimed anywhere on the site.
- **Majestic Junction.** Their counter carries an "MJ Majestic Junction" mark alongside the Star
  roundel. No company of that name could be verified against this address, so the relationship is
  unknown and is not described.
- **Same-day service, collection and delivery, staff numbers, eco certification** — none evidenced.
- **"Over 40 years."** Kept in this table because their own former site said it, but it is the
  weakest-sourced fact here: that site was an unfinished bought template. Round 1 review was
  right that promoting it to the largest sentence on the page was not defensible. It is no
  longer in the H1 and is not used anywhere on the site.
- **Any comparison with other dry cleaners**, including the "your coat goes in a van to a plant
  somewhere else" framing used in round 1. It disparages unnamed local competitors — several of
  whom are separately on our own lead list — and the speed advantage it implies is not evidenced.
- **Per-review star ratings** — see above.
- **The neighbouring barber shop.** It appears in one of their listing photographs, with a person
  in frame. Cropped out; not depicted, not referenced.

## Assets used — the business's own material only

| File shipped | Size | What it is | Source |
|---|---|---|---|
| `logo.png` | 957×260 | Their own logo: red star, red serif STAR, indigo italic Drycleaners | recovered from their own former website via the Internet Archive |
| `shopfront.jpg` | 1700×956 | The shopfront at 179 Marsh Road, fascia and phone number legible | their own former website — a real photograph of their own shop, not stock |
| `shopfront-street.jpg` | 1400×1265 | The shopfront today: fascia, star, window rails, OPEN sign in the door | their Google listing, cropped twice (neighbouring barber and a person; then a graffitied shutter) |
| `counter.jpg` | 1600×1218 | The counter, the Union dry-cleaning machine, occasion wear on display | their Google listing |
| `workroom.jpg` | 1600×927 | Rails of finished garments, sewing machines, the Union machine | their Google listing |
| `alterations.jpg` | 1300×691 | The alterations bench: a JAPSEW industrial machine, a second machine, thread cones, tape measure | their Google listing, re-cropped twice — first to remove the Majestic Junction panel, then to remove ~60% blank wall |

**Three images were pulled and rejected.** `hero_2_1.jpg` from their old site is **licensed stock
photography** — a model in a styled domestic laundry room, not their shop. Two further Google
images are 360° panoramas: heavily distorted, and both contain identifiable members of the
public. None is used.

`shopfront-street.jpg` was cropped twice: first to remove the neighbouring barber shop and a
person working in it, then again to remove a graffitied shutter. No identifiable person appears
in any shipped image. No watermarks found on any of them.

## Brand

Taken from their own logo, not invented: **red (#DE0000 sampled from the star and the STAR
wordmark)** and a deep **indigo** for "Drycleaners", on white. The star is the mark; it also
appears on the fascia and, in red, on the side of their Union machine.

## Scope

Three pages — Home, Services, Find us. Single location, so no locations section.
