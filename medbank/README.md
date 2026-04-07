# MedBank MSRA — Deployment Guide

## Project Structure

```
medbank/
├── index.html          ← Landing page (marketing + 20-question free trial)
├── app.html            ← Full question bank dashboard
├── css/
│   ├── landing.css     ← Landing page styles
│   └── app.css         ← Dashboard styles (light/dark theme)
├── js/
│   ├── landing.js      ← Free trial question logic + scroll animations
│   └── app.js          ← Full app: nav, questions, flashcards, leaderboard, QFW
├── vercel.json         ← Vercel routing config
└── README.md           ← This file
```

## Deploying to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** → name it (e.g. `medbank`)
3. Set it to **Public**, leave everything else default → **Create repository**

### Step 2 — Upload your files
**Option A — Drag and drop (easiest):**
1. Open your new repo on GitHub
2. Click **Add file → Upload files**
3. Drag the entire `medbank/` folder contents in — **make sure `css/` and `js/` subfolders are included**
4. Click **Commit changes**

**Option B — Git CLI:**
```bash
cd medbank
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/medbank.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source** → select **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)` → **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/medbank/`

---

## Deploying to Vercel (recommended — faster, custom domain support)

### Step 1 — Connect to Vercel
1. Go to [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. Click **Add New → Project**
3. Import your `medbank` GitHub repository
4. Leave all build settings as default (Vercel auto-detects static sites)
5. Click **Deploy** — live in ~30 seconds

### Step 2 — Add a custom domain (optional)
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `medbank.co.uk`)
3. Vercel will show you DNS records to add at your domain registrar

**DNS records to add at your registrar:**
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```
SSL is handled automatically by Vercel.

---

## Local Development

Open `index.html` directly in your browser — no build step needed.

For live reload, run a simple server:
```bash
# Python
python3 -m http.server 3000

# Node.js
npx serve .
```
Then visit `http://localhost:3000`

---

## Page Links

| Page | File | URL (Vercel) |
|------|------|------|
| Landing page | `index.html` | `yourdomain.com/` |
| Dashboard app | `app.html` | `yourdomain.com/app` |

---

## Tech Stack

- Pure HTML / CSS / JavaScript — no build tools, no frameworks
- Google Fonts: Syne (headings) + DM Sans (body)
- Responsive down to mobile (900px breakpoint)
- Dark/light theme toggle on the dashboard
