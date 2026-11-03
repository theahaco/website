// Editorial choices that Webflow encoded as list filters and sort orders.
// Each list holds content slugs (file names without .md), in display order.

/** Home page, "Selected work" > Case studies. */
// Case studies with a testimonial first, then the others.
export const homeFeaturedCases = ["stellar-development-foundation", "lifi", "ripple", "societe-generale-forge", "pwc"];

/** Home page, "Client under NDA" block under the case studies. */
export const homeNdaCases = ["nda-real-estate-debt-fund", "nda-money-market-fund"];

/** "More work" at the bottom of a case study: the first two of these that are not the current page. */
export const moreWork = ["nda-settlement-stablecoin", "societe-generale-forge", "lifi", "pwc"];

/** Home page, "Selected work" > Articles: leave empty to show the three most recent
 * articles automatically (scheduled ones appear on their date). List slugs only to pin a selection. */
export const homeArticles: string[] = [];

/** Team cards on team pages ("The rest of the team") and on case studies. */
export const teamPanelOrder = ["hugo-heer", "roberson-costa-dresch", "zach-fedor", "pamphile-roy", "elizabeth-engelman", "pamela-selle", "fabricius-zatti", "willem-wyndham", "chad-ostrowski", "enzo-soyer"];

/** Engagement rows on team pages (case studies whose `team` includes the person). */
export const engagementOrder = ["nda-settlement-stablecoin", "societe-generale-forge", "lifi", "pwc", "stellar-development-foundation", "ripple", "nda-real-estate-debt-fund", "nda-money-market-fund"];

/** "Other networks" cards at the bottom of a network page. */
export const otherNetworksOrder = ["ethereum", "canton", "xrpl", "stellar"];
