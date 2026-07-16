# GradeVault — Card Grading & Authentication Site

A clean, self-contained starter site for a trading-card grading, authentication,
and encapsulation business. Built with plain HTML, CSS, and JavaScript — **no build
step, no dependencies**. Open it in a browser or drop it on any static host.

This is an **original template** with placeholder branding ("GradeVault"). Swap in
your own name, logo, colors, copy, and data — see **Make it yours** below.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page — hero, services, process, cert-lookup teaser |
| `services.html` | Service levels, pricing tiers, add-ons |
| `verify.html` | Certificate lookup tool (client-side demo) |
| `about.html` | About + the 1–10 grading scale |
| `contact.html` | Contact form (demo) + support info |

## Project structure

```
.
├── index.html
├── services.html
├── verify.html
├── about.html
├── contact.html
├── css/
│   └── styles.css      # design system + all styling
├── js/
│   ├── main.js         # nav toggle, active link, footer year
│   └── verify.js       # certificate lookup demo (sample data)
└── assets/
    └── logo.svg        # placeholder logo
```

## Run it locally

No tooling required — just open `index.html` in your browser. For a local server
(so relative paths and the lookup demo behave exactly like production):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Make it yours

1. **Brand name** — find/replace `GradeVault` across the `.html` files.
2. **Logo** — replace `assets/logo.svg` with your own (keep the filename, or update the `<img>`/`<link rel="icon">` references).
3. **Colors** — edit the CSS variables at the top of `css/styles.css` (`--brand-*`, `--accent-*`). Dark mode is handled automatically.
4. **Pricing & content** — edit the tiers in `services.html` and copy throughout.
5. **Certificate lookup** — `js/verify.js` uses a small `SAMPLE_CERTS` object for the demo. Replace `lookupCert()` with a `fetch('/api/cert/' + id)` call to your real backend/database.
6. **Contact form** — `contact.html` is a non-submitting demo. Point it at your email service or a form handler.

## Deploy

Because it's static, you can host it anywhere:

- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder or connect this repo.
- **GitHub Pages** — enable Pages on the repo and serve from the branch root.
- **Any web host** — upload the files over SFTP.

## Notes

- All content, styling, and the logo here are original placeholders for you to customize — not affiliated with or copied from any existing grading company.
- The certificate numbers and records in the lookup demo are fictional sample data.
