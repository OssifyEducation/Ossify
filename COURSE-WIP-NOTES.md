# Course area — disabled for beta

The taught-content ("course") area is **hidden from the live site for beta testing**.
None of its code has been deleted or moved — it is fully intact and still works when
you run the site locally, so you can keep building it.

## What counts as the "course area" (the hidden pages)

- `course.html` — week-by-week course
- `domains.html` — domain browser
- `domain-list.html` — modules within a domain
- `module.html` — individual learning module
- `search.html` — searches the `modules` table (only useful with the course content)

## What stays live for the beta

Dashboard, Practice, Weekly Challenge, Head-to-Head, Leaderboard, Glossary, My Profile,
plus all the public/marketing pages (home, about, pricing, etc.).

## How it was hidden (two changes only)

1. **Sidebar nav** — the **Course**, **Domains** and **Search** items were removed from the
   "Learn" section on every live page:
   `account, acronyms, contact, dashboard, duel, leaderboard, weekly`
   (Glossary was left in place, so the "Learn" section still exists.)

2. **Redirect guard** — a small script was added at the top of each hidden page's `<head>`:

   ```html
   <!-- COURSE AREA DISABLED FOR BETA ... -->
   <script>(function(){var h=location.hostname;
   var dev=(h==="localhost"||h==="127.0.0.1"||h===""||h.endsWith(".local"));
   if(!dev){location.replace("dashboard.html");}})();</script>
   ```

   On the **live site** (any non-local host) it redirects to the dashboard, so testers
   can't reach a half-built page even by typing the URL directly.
   On **localhost / 127.0.0.1** it does nothing, so the pages open normally while you develop.

Nothing else was changed. The course pages still link to each other and back to the app,
so the whole area is navigable locally exactly as before.

## How to re-enable it later (when the course is ready)

1. **Remove the guard block** (the comment + `<script>` shown above) from the top of the
   `<head>` in all five hidden pages.
2. **Restore the three sidebar items** (Course, Domains, Search) in the "Learn" section of
   the seven live pages listed above. The originals are in git history — the quickest way
   is to copy the `<a class="nv" href="...">` lines from any earlier commit, or from a
   course-area page whose sidebar still has them.

That's it — no data changes and no database changes are involved.
