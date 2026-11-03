# Adding and editing content

Everything on theaha.co that changes often is a Markdown file in this repo:
articles, case studies, open-source tool pages and team members. You can add
one from the GitHub website, without installing anything. When the change
reaches the `main` branch, the site rebuilds and publishes itself in about two
minutes.

| To add | Put the file in | It appears at | Start from |
| --- | --- | --- | --- |
| An article | `src/content/blog/` | `/blog/<file-name>` | [`docs/templates/article.md`](templates/article.md) |
| A case study | `src/content/case-studies/` | `/case-studies/<file-name>` | [`docs/templates/case-study.md`](templates/case-study.md) |
| An open-source tool | `src/content/tools/` | `/open-source/<file-name>` | [`docs/templates/tool.md`](templates/tool.md) |
| A team member | `src/content/team/` | `/team/<file-name>` | [`docs/templates/team-member.md`](templates/team-member.md) |

Images go in `public/images/` (covers in `covers/`, case study headers in
`cases/`, team photos in `team/`, images inside articles in `blog/<file-name>/`)
and are written in the files as `/images/...`.

## Publish an article from the GitHub website

1. Open the template [`docs/templates/article.md`](templates/article.md), click
   the copy button (the two squares, top right of the file).
2. Go to `src/content/blog/`, click **Add file → Create new file**, name it
   `your-article-slug.md` (lowercase, hyphens, no accents), paste, fill in the
   fields between the two `---` lines and write the article below them.
3. If you have a cover image: go to `public/images/covers/`, **Add file →
   Upload files**, and give it the same name as the article
   (`your-article-slug.webp`).
4. Click **Commit changes**. To have someone review it first, choose
   "Create a new branch and start a pull request"; the article goes live when
   the pull request is merged.
5. After about two minutes, check the page at `theaha.co/blog/your-article-slug`.
   The **Actions** tab shows the build; a red cross means the file has an error
   (see "If the build fails" below).

The article then appears on its own, with nothing else to edit: on the Work
page (Articles), in the home page "Selected work" (the three most recent), on
the author's team page, under "More articles" on the other articles, and in
the sitemap Google reads.

### Schedule it

Give it a `date` in the future. theaha.co shows it from that day (the site
rebuilds every morning at 05:30 UTC); until then it is not on the live site.
The date is written `November 20, 2026`.

### Keep it as a draft

`draft: true` keeps the file out of the site entirely. Change it to `false`
when it is ready.

## Edit something that is already online

Open the file on GitHub (for example `src/content/blog/<slug>.md`), click the
pencil icon, change the text, commit. Same for case studies, tool pages and
team members.

What decides the order and the selection:

- Articles: newest first, by `date`.
- Case studies on the Work page: the `order` field (lower first).
- Case studies, clients under NDA and articles on the home page:
  `src/data/curation.ts` (lists of file names, in display order).
- Open-source tools: the `order` field.
- Team: `order` on the About page, `teamPanelOrder` in `src/data/curation.ts`
  on team pages.

## Writing rules

Before publishing, check:

- **Clients under NDA stay anonymous.** No name, logo, city or figure that
  identifies them, in the text, the file name, the image or its alt text.
- **No prices**, rates, budgets, proposal amounts or grant amounts.
- **PwC US** is a co-selling alliance (joint business relationship). Never call
  it a partner and never tie it to a client engagement.
- **Figures carry a date or a source** ("111 projects, November 2, 2026").
- **Title** 60 characters or fewer, **description** 120 to 160 characters, both
  with the words a prospect would type in Google ("tokenized deposits",
  "Stellar integration"...).
- **House style:** US English, short sentences, no em-dashes (use a colon, a
  comma or a new sentence), "onchain" in one word.
- **Links to our own pages** start with `/` (`/networks/stellar`), never with
  `https://theaha.co`.

## Preview before publishing

- From GitHub: open a pull request instead of committing to `main`. The build
  check on the pull request tells you if a file has an error.
- On your computer (Node 22 or newer): `npm ci`, then `npm run dev` and open
  http://localhost:4321. Pages update as you save.

## If the build fails

The Actions tab shows the file and the line. The usual causes:

- A value with a colon (`:`) that is not in quotes. Write
  `title: 'Stellar: a primer'`.
- An apostrophe inside single quotes: write it twice, `'What''s next'`.
- A date written differently from `November 20, 2026`.
- An author, related case study or team member that does not match a file
  name exactly.
- An indentation mistake in a list (`facts`, `metrics`, `sections`): keep the
  two spaces of the template.
