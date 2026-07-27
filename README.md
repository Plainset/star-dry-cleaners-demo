# Star Dry Cleaners, Pinner — concept redesign

> ## ⚠️ Draft — in review, not final
> This build has **not** been signed off. It is published for review only; content, design and
> copy are all still subject to change.

**This is an unsolicited concept redesign. It is not the business's own website and is not
endorsed by or affiliated with them.** Star Dry Cleaners is a real dry cleaner at 179 Marsh
Road, Pinner HA5 5PB. They have not been contacted about this.

## Why it was built

**The "Website" button on their Google Business Profile links to `http://stardrycleaners.net/`,
and that domain has no DNS record at all** — nothing is served on apex or `www`, on port 80 or
443. It is not a site that was never built: the Internet Archive holds 168 snapshots, the last
on 17 July 2025. So the link 94 reviewers have been clicking now goes nowhere.

Meanwhile the business is trading well — 4.6★ from 94 Google reviews, with the owner replying
to reviews by name.

## Sources

Every fact is sourced from the business's own public material — its fascia, its in-store service
panels and counter notices, its Google Business Profile, and its own former website recovered
from the Internet Archive — and recorded in `BUILD_BRIEF.md` beside a "Do Not Claim" list.

Worth noting what was deliberately **not** reused: their former site was an unfinished bought
template whose "team" section listed stock placeholder names and whose statistics claimed
millions of garments. None of that appears here. Two similarly-named domains that do resolve
belong to **different** businesses and are not referenced, and a dissolved Manchester company of
a similar name is not claimed either.

All photographs and the logo are the business's own. Three images were rejected: one was
licensed stock from their old site, and two were 360° panoramas containing members of the public.

## Build

Plain static HTML, CSS and JavaScript. No framework, no build step. Three pages.
See `QA_REPORT.md` for what was measured and `PIPELINE_STATUS.md` for the review rounds.

## Takedown

If you are the owner of Star Dry Cleaners and would like this removed, open an issue here or
contact Plainset and it will be taken down.
