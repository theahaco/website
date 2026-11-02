// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import basePath from './integrations/base-path.mjs';

/**
 * SITE_URL and BASE_PATH are injected by the GitHub Pages workflow
 * (actions/configure-pages). With a custom domain (theaha.co) the base
 * path is "/", on the default github.io project URL it is "/website".
 * Locally both fall back to the production values.
 */
const site = process.env.SITE_URL || 'https://theaha.co';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'never',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !/\/(404|review)\/?$/.test(page),
    }),
    basePath(),
  ],
});
