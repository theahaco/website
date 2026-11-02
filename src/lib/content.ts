// Content helpers shared by pages and components.
import { getCollection, type CollectionEntry } from 'astro:content';
import { marked } from 'marked';

marked.use({ gfm: true, breaks: false });

/** Markdown (from frontmatter) to HTML, the same way Webflow rich text rendered. */
export function md(src: string | undefined | null): string {
  if (!src || !src.trim()) return '';
  return (marked.parse(src, { async: false }) as string).trim();
}

export type CaseStudy = CollectionEntry<'caseStudies'>;
export type Post = CollectionEntry<'blog'>;
export type Network = CollectionEntry<'networks'>;
export type Member = CollectionEntry<'team'>;

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) => a.data.order - b.data.order;

export async function caseStudies() {
  return (await getCollection('caseStudies', (e) => !e.data.draft)).sort(byOrder);
}
export async function posts() {
  return (await getCollection('blog', (e) => !e.data.draft)).sort(byOrder);
}
export async function networks() {
  return (await getCollection('networks', (e) => !e.data.draft)).sort(byOrder);
}
export async function team() {
  return (await getCollection('team', (e) => !e.data.draft)).sort(byOrder);
}

/** Pick entries by id, in the given order, skipping ids that do not exist. */
export function pick<T extends { id: string }>(entries: T[], ids: string[]): T[] {
  return ids.map((id) => entries.find((e) => e.id === id)).filter((e): e is T => Boolean(e));
}

/** All entries, those named in `ids` first (in that order), the rest after in their usual order. */
export function orderBy<T extends { id: string }>(entries: T[], ids: string[]): T[] {
  const rank = (e: T) => {
    const i = ids.indexOf(e.id);
    return i === -1 ? ids.length : i;
  };
  return [...entries].sort((a, b) => rank(a) - rank(b));
}

/** "Financial institution · Stellar" -> the Services page anchor of the matching audience. */
export function serviceAnchor(eyebrow: string): string {
  if (eyebrow.startsWith('Protocol')) return '/services#protocols';
  if (eyebrow.startsWith('Ecosystem')) return '/services#ecosystems';
  return '/services#institutions';
}

/** Network marks shown next to the network name on case studies. */
export const networkMarks: Record<string, string> = {
  Stellar: '/images/logos/logo-stellar.webp',
  XRPL: '/images/logos/logo-xrpl.webp',
  Canton: '/images/logos/logo-canton.webp',
  Ethereum: '/images/logos/logo-ethereum.webp',
};

/** Dates are stored as written in Webflow ("September 1, 2026"); lists show "Sep 2026". */
export function formatDate(value: string, style: 'short' | 'long'): string {
  const d = new Date(value);
  if (!value || Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString('en-US', style === 'short' ? { month: 'short', year: 'numeric' } : { month: 'long', year: 'numeric' });
}
