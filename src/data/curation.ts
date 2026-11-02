// Editorial choices that Webflow encoded as list filters and sort orders.
// Each list holds content slugs (file names without .md), in display order.

/** Home page, "Selected work" > Case studies. */
export const homeFeaturedCases = ["societe-generale-forge", "lifi", "pwc", "stellar-development-foundation", "ripple"];

/** Home page, "Client under NDA" block under the case studies. */
export const homeNdaCases = ["nda-real-estate-debt-fund", "nda-money-market-fund"];

/** "More work" at the bottom of a case study: the first two of these that are not the current page. */
export const moreWork = ["nda-settlement-stablecoin", "societe-generale-forge", "lifi", "pwc"];

/** Home page, "Selected work" > Articles. */
export const homeArticles = ["defi-on-xrpl-compliance-liquidity-and-the-road-ahead", "scaffold-stellar-how-we-built-the-developer-toolkit", "why-stellar-is-the-right-chain-for-tokenization"];

/** Team cards on team pages ("The rest of the team") and on case studies. */
export const teamPanelOrder = ["em-lowing", "roberson-costa-dresch", "zach-fedor", "pamphile-roy", "elizabeth-engelman", "pamela-selle", "fabricius-zatti", "willem-wyndham", "chad-ostrowski", "enzo-soyer"];

/** Engagement rows on team pages (case studies whose `team` includes the person). */
export const engagementOrder = ["nda-settlement-stablecoin", "societe-generale-forge", "lifi", "pwc", "stellar-development-foundation", "ripple", "nda-real-estate-debt-fund", "nda-money-market-fund"];

/** "Other networks" cards at the bottom of a network page. */
export const otherNetworksOrder = ["ethereum", "canton", "xrpl", "stellar"];
