# Pallavi Verma — Portfolio

A hash-routed personal portfolio. Plain HTML / CSS / JS, no build step, no dependencies, drop-in deployable to any static host.

## Live structure

Seven routes, all in one HTML file:

- `#/` — Home (hero, stats, three pillars)
- `#/about` — About (bio, "Methods that travel" callout, toolkit, leadership, contact cards)
- `#/experience` — Experience (tabbed: Dimagi, BYJU'S, Chegg, 3AIP)
- `#/programs` — Programs (three Dimagi programs: KMC, gPM+, Child Health)
- `#/behind-the-work` — Operational stories (three field incidents + one SWAT process improvement)
- `#/ai-bot` — AI Job Bot deep-dive (story, stack, architecture, screenshots, lessons)
- `#/education` — Education (degree + certifications timeline)

## Files

```
pallavi-portfolio/
├── index.html         — all routed views in one file
├── styles.css         — dark theme, responsive, animations
├── app.js             — hash router, tabs, mobile nav, scroll reveal
├── README.md          — this file
└── assets/
    ├── pallavi.jpg               — hero portrait
    ├── favicon.svg               — lowercase "pv" with cyan status dot
    ├── Pallavi_Verma_Resume.pdf  — downloadable resume
    ├── bot-screenshot-workflow.jpg  — n8n workflow canvas
    ├── bot-screenshot-digest.jpg    — daily digest email
    └── bot-screenshot-resume.jpg    — tailored resume PDF sample
```

If LibreOffice lock files (`.~lock.*`, `lu*.tmp`) are present in `assets/` from earlier resume conversion, they're harmless and most hosts ignore them, but you can delete them in File Explorer for a clean upload.

## Design system

- Accent color: `#22d3ee` (bright cyan)
- Display font: Playfair Display (headings, em-styled phrases)
- Body font: Inter
- Monospace: JetBrains Mono (eyebrows, tags, captions)
- Background: dark navy (`#0a0f1c`) with a subtle cyan grid, a soft top glow, and a fine film-grain overlay

To change the accent everywhere, edit the `--accent` CSS variable at the top of `styles.css`.

## Running locally

Just open `index.html` in a browser. No server needed.

If hash routing misbehaves with `file://` URLs, run a tiny local server:

```bash
# From inside the portfolio folder:
python3 -m http.server 8000
# Then open http://localhost:8000
```

## Deploying — free options

### Option A — Netlify (easiest, ~5 minutes)

1. Go to [app.netlify.com](https://app.netlify.com), sign in (email or GitHub).
2. Click **Add new site → Deploy manually**.
3. Drag this entire folder onto the upload area.
4. Site is live at `<random-name>.netlify.app` within ~30 seconds.
5. Optional: **Site settings → Change site name** to pick a memorable URL like `pallavi-verma.netlify.app`.

To update later: edit any file locally, drag the folder onto **Deploys** again.

### Option B — GitHub Pages

1. Create a GitHub account if you don't have one.
2. Create a new public repository named exactly `<your-username>.github.io` for the cleanest URL.
3. Upload all files via the browser drag-and-drop on the empty repo page, commit.
4. Go to **Settings → Pages**. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes. Site is live at `https://<your-username>.github.io`.

To update later: edit files directly in the GitHub UI (pencil icon), or push from Git locally.

### Option C — Cloudflare Pages

Same drag-and-drop flow as Netlify. Cloudflare's free tier has no bandwidth limit.

## Custom domain (optional, ~$10–15/year)

All three hosts above let you point a custom domain (e.g. `pallaviverma.com`) at the site for free. You just buy the domain from a registrar (Namecheap, Cloudflare Registrar) and follow the host's custom-domain instructions. HTTPS is included automatically.

## Editing content

All copy is in `index.html`. Each `<section class="view" data-view="/...">` is one "page" in the hash router. Find the section, change the text, save, refresh.

Common edits:

- **Photo** — replace `assets/pallavi.jpg` (any image; portrait aspect ratio works best).
- **Resume** — replace `assets/Pallavi_Verma_Resume.pdf`.
- **AI Bot screenshots** — replace any of the three `bot-screenshot-*.jpg` files in `assets/`.
- **Accent color** — change `--accent` in the `:root` block at the top of `styles.css`.
- **Favicon** — replace `assets/favicon.svg`.
- **Adding a new "page"** — add a new `<section class="view" data-view="/your-route">…</section>` inside `<main id="app">`, add a matching `<li><a href="#/your-route" data-route="/your-route">…</a></li>` in the nav, and add a title entry in the `titles` object inside `app.js`.

## Accessibility & responsive

- Respects `prefers-reduced-motion`. Animations disable automatically.
- Fully responsive: layouts adapt at 960px and 720px breakpoints.
- Semantic HTML with `<main>`, `<header>`, `<footer>`, proper heading hierarchy.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses CSS custom properties, `aspect-ratio`, `backdrop-filter`, CSS Grid `grid-template-areas` — all widely supported.

 
