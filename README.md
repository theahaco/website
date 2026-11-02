# theaha.co

The Aha Company website. A static site built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

It is a rebuild of the Webflow site "The Aha Company 2026" (`the-aha-company-2026.webflow.io`): same pages, URLs, copy, design and behaviour, with the Webflow runtime and CMS replaced by plain HTML, a few small scripts and Markdown content files.

## Run it locally

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/
npm run check      # after a build: every internal link, image and #anchor resolves
```

To check a build made for a sub-path (as on `theahaco.github.io/website/`): `BASE_PATH=/website npm run build && BASE_PATH=/website npm run check`.

Node 22.23 or newer.

## Where things are

| What | Where |
| --- | --- |
| Pages (one file per URL) | `src/pages/` |
| Case studies, articles, networks, team | `src/content/<collection>/*.md` |
| Field definitions for those collections | `src/content.config.ts` |
| Nav, footer, contact details, form endpoint, Calendly link | `src/data/site.ts` |
| Shared layout (head, nav, footer, scripts) | `src/layouts/BaseLayout.astro` |
| Reusable blocks (work rows, CTA, cards) | `src/components/` |
| Styles | `src/styles/webflow.css` (the original Webflow stylesheet, unchanged), `src/styles/site.css` (custom code that lived in Webflow embeds) |
| Browser scripts (menu, tabs, filters, questionnaire, form) | `src/scripts/` |
| Images, logos, favicons | `public/` |

## Editing content

Each case study, article, network and team member is a Markdown file. The frontmatter holds the structured fields (client, network, metrics, quote...), the body or the named Markdown fields hold the rich text. Add a file, push, and it appears everywhere it is listed (home, Work, network pages, team pages) with its own page at the matching URL.

- `src/content/case-studies/<slug>.md` → `/case-studies/<slug>`
- `src/content/blog/<slug>.md` → `/blog/<slug>`
- `src/content/networks/<slug>.md` → `/networks/<slug>`
- `src/content/team/<slug>.md` → `/team/<slug>`

Set `draft: true` in the frontmatter to keep an item out of the build.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it with GitHub Pages (Settings → Pages → Source: GitHub Actions). The workflow passes the Pages URL and base path to the build, so the same code works on `https://theahaco.github.io/website/` and on a custom domain.

Search engines: only a build for `site.productionOrigin` (`https://theaha.co`, in `src/data/site.ts`) is indexable. Anywhere else (the github.io preview) every page carries `noindex` and `robots.txt` disallows crawling, so the preview never competes with the real domain.

### Review mode (preview only)

Suggested content is listed in `src/data/review.ts`: each entry names a page, the elements it touched and a note. On the preview every listed element is outlined and numbered, a panel in the bottom-left corner lists the notes, and `/review/` gathers them all. A production build (`site.productionOrigin`) renders none of it and has no `/review/` page. Once a suggestion is accepted, rewritten or dropped, delete its entry.

### Moving theaha.co from Webflow

1. In the repo, Settings → Pages → Custom domain: `theaha.co`, then enable "Enforce HTTPS" once the certificate is issued.
2. At the DNS provider, replace the Webflow records:
   - apex `theaha.co`: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and `AAAA` to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)
   - `www`: `CNAME` to `theahaco.github.io`
3. Verify the domain for the organization (GitHub org settings → Pages → Verified domains) so nobody else can claim it.
4. Unpublish the Webflow site only after the GitHub Pages version is live on the domain.

URLs keep the Webflow paths. GitHub Pages adds a trailing slash (`/services` → `/services/`) with a redirect, so existing links keep working.

## Contact form

GitHub Pages has no form backend. Set `contact.formEndpoint` in `src/data/site.ts` to any endpoint that accepts a form POST (Formspree, Basin, Getform, a Cloudflare Worker...). Until then the form opens the visitor's email client with the message prefilled, addressed to `hello@theaha.co`.
