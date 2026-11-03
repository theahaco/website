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
| Case studies, articles, networks, team, open-source tools | `src/content/<collection>/*.md` |
| Field definitions for those collections | `src/content.config.ts` |
| Nav, footer, contact details, form endpoint, Calendly link, analytics | `src/data/site.ts` |
| Shared layout (head, nav, footer, scripts) | `src/layouts/BaseLayout.astro` |
| Reusable blocks (work rows, CTA, cards) | `src/components/` |
| Styles | `src/styles/webflow.css` (the original Webflow stylesheet, unchanged), `src/styles/site.css` (custom code that lived in Webflow embeds) |
| Browser scripts (menu, tabs, filters, questionnaire, form) | `src/scripts/` |
| Images, logos, favicons | `public/` |

## Editing content

**To add an article, a case study, a tool page or a team member without touching code, follow [`docs/CONTENT.md`](docs/CONTENT.md)** (step by step from the GitHub website, with templates in [`docs/templates/`](docs/templates/)).

Each case study, article, network and team member is a Markdown file. The frontmatter holds the structured fields (client, network, metrics, quote...), the body or the named Markdown fields hold the rich text. Add a file, push, and it appears everywhere it is listed (home, Work, network pages, team pages) with its own page at the matching URL.

- `src/content/case-studies/<slug>.md` → `/case-studies/<slug>`
- `src/content/blog/<slug>.md` → `/blog/<slug>`
- `src/content/networks/<slug>.md` → `/networks/<slug>`
- `src/content/team/<slug>.md` → `/team/<slug>`
- `src/content/tools/<slug>.md` → `/open-source/<slug>` (one page per open-source tool: facts, dated figures with receipts, a visual from `public/images/tools/`, the story, builders; team pages list the tools each person is credited for)

Set `draft: true` in the frontmatter to keep an item out of the build. A `description` field (160 characters at most) sets what search engines show; without it, the lede is used.

Testimonials still waiting for approval carry the quote label `Placeholder quote`: the preview shows them, the production build never does (the slot keeps the logo, labelled “Client”).

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it with GitHub Pages (Settings → Pages → Source: GitHub Actions). The workflow passes the Pages URL and base path to the build, so the same code works on `https://theahaco.github.io/website/` and on a custom domain.

Search engines: only a build for `site.productionOrigin` (`https://theaha.co`, in `src/data/site.ts`) is indexable. Anywhere else (the github.io preview) every page carries `noindex` and `robots.txt` disallows crawling, so the preview never competes with the real domain.

### Review mode (preview only)

Suggested content is listed in `src/data/review.ts`: each entry names a page, the elements it touched and a note. On the preview every listed element is outlined and numbered, a panel in the bottom-left corner lists the notes, and `/review/` gathers them all. A production build (`site.productionOrigin`) renders none of it and has no `/review/` page. Once a suggestion is accepted, rewritten or dropped, delete its entry.

### Deploying on Cloudflare Pages

The site is static, so Cloudflare Pages can build it from this repo instead of GitHub Pages: Workers & Pages → Create → Pages → Connect to Git → `theahaco/website`, framework preset Astro, build command `npm run build`, output directory `dist`. No environment variable is needed for theaha.co (the defaults are `SITE_URL=https://theaha.co` and `BASE_PATH=/`). Then add `theaha.co` under Custom domains. If you switch, the legal pages already name Cloudflare as the host.

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

## Analytics

Set `analytics` in `src/data/site.ts`: the provider (`umami`, `plausible`, `cloudflare` or `ga4`) and its script tag as given. It loads on theaha.co only, never on the preview, and the privacy policy describes whichever provider is set. The site sends three events: `Call booked` (a Calendly booking), `Contact form sent` and `Email click`.

## Legal pages

`/terms` and `/privacy` are written for Dawning Inc. (dba The Aha Company) and a US audience. Update the `updated` date at the top of each file when the text changes.
