// Content collections: what used to be the Webflow CMS.
// Every field is optional with an empty default, like Webflow fields:
// templates skip empty ones exactly as the Webflow site did.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const str = z.string().default('');
const quote = z
  .object({
    label: str, // small tag above the quote ("Placeholder quote" until approved)
    text: str,
    author: str,
    role: str,
    portrait: str,
    portraitAlt: str,
    logo: str,
    logoAlt: str,
  })
  .default({});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(), // page heading
    shortTitle: str, // used in "More work" and team engagement rows
    order: z.number().default(100), // Work page order
    eyebrow: str, // "Financial institution · Stellar"
    lede: str, // also the paragraph in Selected work on the home page
    ndaSummary: str, // one-liner in the "Client under NDA" block on home
    cta: str, // heading of the closing call-to-action band
    client: str,
    nda: z.boolean().default(false), // shows the "Under NDA" pill on the Work page
    workTitle: str, // Work page row title
    workLine: str, // Work page row line
    audience: z.enum(['Institutions', 'Protocols and products', 'Ecosystems and open source', '']).default(''),
    network: str, // Stellar, XRPL, Canton, Multi-network
    year: str,
    facts: z.array(z.object({ label: z.string(), value: str, style: z.enum(['plain', 'net']).default('plain'), live: z.boolean().default(false) })).default([]), // live: green status dot
    hero: z.object({ image: str, alt: str, caption: str }).default({}),
    metrics: z.array(z.object({ figure: str, label: str, receipt: str })).default([]),
    sections: z.array(z.object({ id: z.string(), title: z.string(), body: str })).default([]),
    tech: z.array(z.string()).default([]),
    receipts: str, // Markdown list of links
    relatedService: str,
    team: z.array(z.string()).default([]), // team member slugs
    quote,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    order: z.number().default(100),
    category: str, // eyebrow
    lede: str,
    author: str, // team member slug (for the team page "Writing" list)
    authorName: str,
    authorRole: str,
    authorBio: str,
    date: str, // as written, e.g. "September 1, 2026"
    readMinutes: str,
    cover: str,
    coverCaption: str,
    relatedWork: str, // case study slug
    relatedWorkLabel: str,
    audience: str,
    network: str,
  }),
});

const row2 = z.object({ title: z.string(), description: str });
const networks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/networks' }),
  schema: z.object({
    draft: z.boolean().default(false),
    name: z.string(),
    order: z.number().default(100),
    mark: str,
    markAlt: str,
    heading: str, // a network without a heading has no page of its own (redirects to /networks)
    lede: str,
    secondaryCta: z.object({ label: str, href: str }).default({}),
    stats: z.array(z.object({ value: z.string(), label: str })).default([]),
    ship: z
      .object({ title: str, meta: str, rows: z.array(z.object({ name: z.string(), description: str, badge: str })).default([]) })
      .default({}),
    involves: z.array(row2).default([]),
    stepsLede: str,
    steps: z.array(z.object({ title: z.string(), description: str, output: str })).default([]),
    proof: z
      .object({ eyebrow: str, heading: str, body: str, caseStudy: str, linkLabel: str, quote })
      .default({}),
    funding: z
      .object({ heading: str, body: str, rows: z.array(z.object({ name: z.string(), description: str, badge: str })).default([]) })
      .default({}),
    cta: str,
    homeDescription: str,
    homeCta: str,
    card: z.object({ name: str, line: str, logo: str, logoAlt: str }).default({}),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team' }),
  schema: z.object({
    draft: z.boolean().default(false),
    name: z.string(),
    order: z.number().default(100),
    role: str,
    location: str,
    focus: str,
    networks: str,
    since: str,
    portrait: str,
    links: z.object({ linkedin: str, github: str, email: str }).default({}),
  }),
});

export const collections = { caseStudies, blog, networks, team };
