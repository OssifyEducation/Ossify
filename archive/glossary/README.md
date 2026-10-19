# Glossary (parked)

The Glossary / acronyms page was taken off the live site on 19 Oct 2026. It wasn't
needed for the beta. Everything is kept here so it can be brought back unchanged.

- `acronyms.html` is the whole feature. All glossary terms are written into this
  page, so there is no database table to restore.
- `archive/` is listed in `.vercelignore`, so this folder is never deployed.
- `vercel.json` redirects old links (`/acronyms.html`) to the dashboard.

## What was changed when it was removed

1. `acronyms.html` was moved from the site root to this folder.
2. The **Glossary** link was removed from the sidebar on every page.
   - On the live app pages (dashboard, practice, sjt, sjt-mock, exam, weekly,
     duel, leaderboard, account, contact), Glossary was the only item left
     under the **Learn** heading, so that whole `sb-sec` block was removed.
   - On the hidden course pages (course, domains, domain-list, module, search),
     only the Glossary link was removed and the Learn section was kept.
3. `css/ossify-dark.css` still has its dark-mode rules for this page (marked
   `/* acronyms */`), so dark mode will work again as soon as the page is back.

## How to bring it back

1. Move `archive/glossary/acronyms.html` back to the site root as `acronyms.html`.
2. Remove the `/acronyms.html` and `/acronyms` redirects from `vercel.json`.
3. Add the sidebar link back to each app page, inside a Learn section:

```html
  <div class="sb-sec">
    <div class="sb-lbl">Learn</div>
    <a class="nv" href="acronyms.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="12" y1="7" x2="16" y2="7"/><line x1="12" y1="11" x2="16" y2="11"/><line x1="12" y1="15" x2="16" y2="15"/></svg>Glossary</a>
  </div>
```

The exact earlier versions of every page are also in git history (the commit
"Park the Glossary").
