// Review mode. Every suggestion added to the site is listed here, with the
// element(s) it changed. On the github.io preview the elements are outlined
// and numbered, and /review/ lists everything; on the production domain
// (site.productionOrigin) none of this is rendered.
//
// kind: "new" fills an empty section, "changed" replaces existing copy,
// "check" flags existing copy to verify (left unchanged).
// Accept, rewrite or reject a suggestion, then delete its entry here.

export type ReviewKind = 'new' | 'changed' | 'check';
export interface ReviewItem {
  page: string; // site path, without base path or trailing slash
  target: string; // CSS selector(s); empty for a page-level note
  kind: ReviewKind;
  title: string;
  note: string;
}

const CASE = '.cs_facts, .cs_outcomes, #challenge, #solution, #architecture, #outcome, [data-cs=tech-card], [data-cs=receipts-card], [data-cs=related-card], [data-cs=team-card]';
const BIO = '[data-tm=bio], .tm_facts, .tm_links';

const team: Array<[string, string]> = [
  ['chad-ostrowski', 'From his bio in our grant applications and his public work (Stellar CLI, JavaScript SDK, Carbon Coin). Moonlight’s provider platform added, from the team deck.'],
  ['willem-wyndham', 'From his bio in our grant applications and his public work (Nido, Scaffold Stellar, Stellar Registry, Stellar CLI). Contract admin standard draft added, from the team deck.'],
  ['enzo-soyer', 'Bio added; LinkedIn link added.'],
  ['fabricius-zatti', 'From his bio in our grant applications (MoneyGram, Central Bank of Indonesia, IOG) and Moonlight. No LinkedIn or GitHub link on file. Architect Program: “sits in” became “leads”, as you described it and as in the team deck. Check SDF is fine with that wording in public.'],
  ['pamela-selle', 'From her background (HashiCorp, Comcast) and her public work (Stellar Registry, Scaffold Stellar, Trezor). No LinkedIn or GitHub link on file. Wallets Kit fixes and HackMeridian workshops added, from the team deck.'],
  ['elizabeth-engelman', 'From her background and her public work (Stellar CLI, Nido). No LinkedIn or GitHub link on file.'],
  ['pamphile-roy', 'From his public work (Tansu, GhostSig, SEP-53, SciPy). GitHub link added; no LinkedIn on file. GhostSig’s place in the Stellar Wallets Kit and xrpl-connect added, from the team deck.'],
  ['zach-fedor', 'From his background (Hug) and his public work (Scaffold Stellar, Contract Explorer). LinkedIn link added. Registry web interface added, from the team deck.'],
  ['roberson-costa-dresch', 'Short on purpose: his client work has no public repositories. No LinkedIn or GitHub link on file. “Tokenization pilots” became “a tokenization pilot”, as in the team deck.'],
  ['em-lowing', 'Placeholder-level: confirm what Em wants said, or keep the page without a bio.'],
];

// Team photos come from our team deck (October 2026); three of them are small.
const LOW_RES = ['elizabeth-engelman', 'pamphile-roy', 'zach-fedor'];
function photoNote(slug: string): string {
  if (slug === 'em-lowing') return 'No photo on file yet.';
  if (LOW_RES.includes(slug)) return 'Photo from our team deck. It is only 200 px wide: send a larger one if you have it.';
  return 'Photo from our team deck.';
}

export const review: ReviewItem[] = [
  // ------------------------------------------------------------------ home
  { page: '/', target: '.work_item:nth-child(1) .work_quote', kind: 'changed', title: 'Société Générale-FORGE: testimonial removed', note: 'Quote, name and photo removed, as asked. The slot keeps the FORGE logo with the label “Client”.' },
  { page: '/', target: '.work_item:nth-child(3)', kind: 'changed', title: 'PwC US: testimonial removed', note: 'Quote, name and photo removed. PwC US stays with its logo, presented as a co-selling alliance (joint business relationship), with no client work attached to it.' },
  { page: '/', target: '.work_item:nth-child(5) .work_para, .work_item:nth-child(5) .work_quote', kind: 'changed', title: 'Ripple: “go live” wording', note: 'Updated to the text submitted to Ripple for approval in September (“go live” instead of “XRPL mainnet”). Still pending approval, so the label stays.' },
  { page: '/', target: '.hero_stats > li:first-child', kind: 'check', title: '€20M+ issued on Stellar', note: 'Public trackers show about 15M EURCV on Stellar on 2 Nov 2026. If €20M+ is cumulative issuance (or includes another stablecoin), keep it and say so; otherwise update. The receipt now opens EURCV on the Stellar explorer: confirm it is the official issuer.' },
  { page: '/', target: '[data-rv=stat-deploy]', kind: 'changed', title: 'Second hero figure', note: 'Was “€130M funds tokenized”. That fund is still in build, so this slot shows mainnet deployments (20+) instead.' },
  { page: '/', target: '[data-rv=stat-team], [data-rv=card-footer]', kind: 'changed', title: 'Team size', note: 'Was 17. Now 12+, the current team, across the United States, Europe and Brazil (Pamphile is in Austria, so “France” was too narrow).' },
  { page: '/', target: '.hero_card-rows', kind: 'changed', title: '“Live on mainnet” card', note: 'The money-market fund row is removed: it is not live yet (launch targeted for 2027).' },
  { page: '/', target: '.logos_section', kind: 'check', title: 'Logos in this strip', note: 'Check that every organisation in this strip has agreed to appear on the site (details in my message).' },
  { page: '/', target: '.work_nda-item:nth-child(1)', kind: 'check', title: 'Real estate debt fund', note: 'Check: is this engagement delivered? If not yet, present it as in progress or hold it back for now.' },
  { page: '/', target: '.work_nda-item:nth-child(2)', kind: 'changed', title: 'Money-market fund line', note: 'Now says “in build”.' },
  { page: '/', target: '[data-rv=precedent-fund]', kind: 'changed', title: 'Fund precedent', note: 'Was “Tokenized money-market fund for a regulated fund client”. Now names the client as the case study does (a regulated European private bank), says it is a tokenized share class, as in the team deck, and that it is in build.' },
  { page: '/', target: '[data-rv=precedent-arch]', kind: 'changed', title: 'Architecture precedent', note: 'Was “Ripple Architect Program; SDF Architect Program”. There is no Ripple Architect Program to cite, so the precedent is now the US bank’s settlement stablecoin.' },
  { page: '/', target: '[data-rv=eco-build], [data-rv=eco-maintain]', kind: 'changed', title: 'Ecosystem steps (third tab)', note: 'In “Ecosystems and foundations”, step 4 came before step 3 and their outputs were crossed. Reordered.' },
  { page: '/', target: '[data-rv=ways-pwc]', kind: 'changed', title: 'PwC US wording', note: 'Was “Co-selling agreement with PwC”. Now “co-selling alliance with PwC US”.' },
  { page: '/', target: '[data-rv=footer-os]', kind: 'new', title: 'Open source link (every page)', note: 'Footer link to the suggested open-source page.' },
  { page: '/', target: 'footer .footer_legal-text', kind: 'changed', title: 'Legal entities (every page)', note: 'Were “The Aha Company Inc. / SAS / Ltda.”, which are not the registered names. Now Dawning Inc., Limus Vita SAS and The Aha Company LTDA.' },
  { page: '/', target: 'footer a[href*="linkedin.com/company"]', kind: 'new', title: 'Company LinkedIn (every page)', note: 'Was “#”. Now the company page linked from the current theaha.co (linkedin.com/company/aha-labs-dev). Check it shows The Aha Company, not Aha Labs.' },

  // ------------------------------------------------------------------ services
  { page: '/services', target: '[data-rv=svc-institutions-offer], [data-rv=svc-institutions-steps], [data-rv=svc-institutions-tech]', kind: 'new', title: 'Financial institutions: offer, steps, tech', note: 'These lists were empty on Webflow. Filled from the home page copy (What we do, How an engagement runs).' },
  { page: '/services', target: '[data-rv=svc-protocols-offer], [data-rv=svc-protocols-steps], [data-rv=svc-protocols-tech]', kind: 'new', title: 'Protocols and products: offer, steps, tech', note: 'Same source as above.' },
  { page: '/services', target: '[data-rv=svc-ecosystems-offer], [data-rv=svc-ecosystems-steps], [data-rv=svc-ecosystems-tech]', kind: 'new', title: 'Ecosystems and foundations: offer, steps, tech', note: 'Same source as above.' },

  // ------------------------------------------------------------------ about, faq
  { page: '/about', target: '[data-rv=about-lede], [data-rv=fact-founded], [data-rv=fact-team]', kind: 'changed', title: 'Founding year and team size', note: 'Was “Founded in 2020” and 17 engineers. Bios and grant applications say the company was founded in 2021, and the Stellar page says “building on Stellar since 2021”: confirm the year. Team size now 12+, across the United States, Europe and Brazil (Pamphile is in Austria).' },
  { page: '/about', target: '[data-rv=office-us], [data-rv=office-us-desc]', kind: 'changed', title: 'United States office', note: 'Lorem ipsum replaced. Registered name: Dawning Inc. (dba The Aha Company).' },
  { page: '/about', target: '[data-rv=office-fr], [data-rv=office-fr-desc]', kind: 'changed', title: 'France office', note: 'Lorem ipsum replaced. Registered name: Limus Vita SAS.' },
  { page: '/about', target: '[data-rv=office-br], [data-rv=office-br-desc]', kind: 'new', title: 'Brazil office', note: 'Was “Entity details to confirm”. City from the company registration (São Paulo); add a street address if you want one.' },
  { page: '/about', target: '[data-rv=about-roles], [data-rv=about-os]', kind: 'new', title: 'Roles and tools', note: 'Moonlight and Tansu added to what we maintain, and a link to the suggested open-source page.' },
  { page: '/about', target: '[data-ab=team]', kind: 'new', title: 'Team photos', note: 'Added from our team deck. Em has no photo yet, and the photos of Elizabeth, Pamphile and Zach are small (200 px).' },
  { page: '/faq', target: '[data-rv=faq-team]', kind: 'changed', title: 'Team size', note: 'In “Where is the team based?”: was “Seventeen engineers … France and Brazil”. Now 12+, Europe instead of France, and the three entities named.' },
  { page: '/faq', target: '[data-rv=faq-mainnet]', kind: 'changed', title: 'EURCV date and the fund', note: 'In “Have you taken regulated assets to mainnet?”: EURCV said “since December 2025” while the rest of the site says January 2026 (the agreed public wording; deployment was completed in December). The money-market fund said “built”: it is in build.' },
  { page: '/faq', target: '[data-rv=faq-pwc]', kind: 'changed', title: 'PwC US wording', note: '“Co-selling agreement with PwC” became “co-selling alliance with PwC US”, as on the home page.' },
  { page: '/faq', target: '[data-rv=faq-ecosystems]', kind: 'changed', title: 'What we built for ecosystems', note: 'Now lists Moonlight, Tansu and GhostSig as well, as the team deck does. “From prototype to mainnet” became “from prototype to go live”, as in the text submitted to Ripple.' },
  { page: '/faq', target: '[data-rv=faq-os]', kind: 'changed', title: 'Is the tooling open source?', note: 'It said all the tooling is public goods and the code is at github.com/theahaco. Only Scaffold Stellar, the Registry and Tansu are funded public goods, and most code lives in other organisations (stellar, stellar-scaffold, nidohq, moonlight-protocol). Now links to the open-source page.' },

  // ------------------------------------------------------------------ legal
  { page: '/privacy', target: '[data-rv=legal-entities], [data-rv=privacy-who]', kind: 'changed', title: 'Entities', note: 'Registered names instead of “The Aha Company Inc. / SAS / Ltda.”.' },
  { page: '/privacy', target: '[data-rv=privacy-collect]', kind: 'new', title: 'What we collect', note: 'Was an empty list. A factual draft for counsel.' },
  { page: '/privacy', target: '[data-rv=privacy-third], [data-rv=privacy-cookies]', kind: 'changed', title: 'Third parties and cookies', note: 'Webflow is gone: the site is hosted on GitHub Pages, the form opens the visitor’s email client, and the site runs no analytics. Still for counsel.' },
  { page: '/privacy', target: '', kind: 'changed', title: 'Search description', note: 'The description search engines show said the site uses analytics. It runs none, so that part is removed.' },
  { page: '/terms', target: '[data-rv=legal-entities]', kind: 'changed', title: 'Entities', note: 'Registered names.' },
  { page: '/terms', target: '[data-rv=terms-host], [data-rv=terms-host-p]', kind: 'new', title: 'Hosting', note: 'French law asks a site to name its host and publisher. Host added; publisher for counsel.' },

  // ------------------------------------------------------------------ case studies
  { page: '/case-studies/societe-generale-forge', target: '', kind: 'changed', title: 'Testimonial removed', note: 'The quote band at the bottom of the page is gone, as asked.' },
  { page: '/case-studies/societe-generale-forge', target: '.cs_outcomes, [data-cs=receipts-card]', kind: 'new', title: 'Receipts', note: 'The explorer receipts now open EURCV on stellar.expert (issuer created 18 Dec 2025, about 15M EURCV in circulation): confirm it is the official issuer. “Source-verified contract” still has no link: send the URL or drop the line.' },
  { page: '/case-studies/societe-generale-forge', target: '#architecture, .cs_facts', kind: 'changed', title: 'Audit and year', note: 'Hacken audit added, and the year is now 2025-2026, as in the team deck: design, build, audit and mainnet deployment in 2025, live in Q1 2026.' },
  { page: '/case-studies/societe-generale-forge', target: '.cs_intro, #solution', kind: 'check', title: 'Still the current design?', note: 'This page and the “Why Stellar” article describe the admin contract (pause, pre-emptive bans). Check it still matches EURCV on Stellar before publishing (details in my message).' },
  { page: '/case-studies/societe-generale-forge', target: '.cs_outcomes .cs_metric:first-child', kind: 'check', title: '€20M+', note: 'Same check as on the home page: public trackers show about 15M EURCV on Stellar today.' },
  { page: '/case-studies/pwc', target: '.cs_intro, .cs_facts', kind: 'changed', title: 'Alliance wording, testimonial removed', note: 'Title, summary and facts now say “PwC US”, “co-selling alliance” and “joint business relationship”, with no client work attached. The quote band is gone.' },
  { page: '/case-studies/lifi', target: CASE, kind: 'new', title: 'Case study content', note: 'Was empty below the header. Written from what we know: a standard commercial engagement, the entire contract layer built by us, audited by Halborn, in production; routes as listed in LI.FI’s public docs. Team: only you are listed (the team deck names no builder either); add the engineers who built it.' },
  { page: '/case-studies/stellar-development-foundation', target: CASE, kind: 'new', title: 'Case study content', note: 'Was empty below the header. Figures as of October 2026 (Stellar CLI commits and downloads, Scaffold Stellar releases, Stellar Registry names): refresh them when you publish. Registry audit (Veridise, no findings) added, and Fabricius now “leads” the Architect Program, as in the team deck and as you described it.' },
  { page: '/case-studies/ripple', target: '.cs_intro .art_lede, [data-cs=quote]', kind: 'changed', title: 'Ripple wording', note: 'The text submitted to Ripple in September (“go live”). Quote still pending approval.' },
  { page: '/case-studies/ripple', target: '.cs_facts, #challenge, #solution, [data-cs=tech-card], [data-cs=related-card], [data-cs=team-card]', kind: 'new', title: 'Case study content', note: 'New copy beyond what Ripple reviewed. It names no cohort, team or figure, but should go to Ripple for approval with the rest.' },
  { page: '/case-studies/nda-settlement-stablecoin', target: '.cs_intro .art_lede, ' + CASE, kind: 'new', title: 'Case study content', note: 'Written without names: the bank and the programme stay anonymous. Figures follow the engagement as you described it and as the team deck shows it: five months from kickoff (February 2026) to launch (July 2026), final security review and launch done by the bank (it said “3 quarters” and “end to end” before). Check this is fine under the NDA.' },
  { page: '/case-studies/nda-money-market-fund', target: '.cs_intro, #architecture', kind: 'changed', title: 'A tokenized share class', note: 'The team deck describes the work as adding a tokenized share class to the fund, not tokenizing the whole €130M. Title, summary and first figure now say so; the architecture follows the deck’s subscription and redemption flow, without naming the depositary or the euro stablecoin.' },
  { page: '/case-studies/nda-money-market-fund', target: '.cs_intro .art_lede, .cs_facts, .cs_outcomes, #solution, #outcome', kind: 'changed', title: 'Status: in build, not live', note: 'Was presented as live, with €130M tokenized and subscriptions running. The fund is in build with launch targeted for 2027, so the status, figures, solution (mainnet and handover at launch) and outcome now say so. Receipts removed (no public token yet).' },
  { page: '/case-studies/nda-real-estate-debt-fund', target: '.cs_intro', kind: 'check', title: 'Delivered?', note: 'Same question as on the home page: if it is not delivered yet, present it as in progress or hold it back for now.' },

  // ------------------------------------------------------------------ network page, articles
  { page: '/networks/stellar', target: '[data-nx=shiprows] .nxjs_shiprow:nth-child(1) .nxjs_shipbadge', kind: 'changed', title: 'Stellar CLI badge', note: 'Was “Maintainer”. The CLI is the Foundation’s; we are core contributors (about 20% of commits), as the rest of the site says.' },
  { page: '/networks/stellar', target: '[data-nx=shiprows] .nxjs_shiprow:nth-child(3), [data-nx=shiprows] .nxjs_shiprow:nth-child(5)', kind: 'changed', title: 'Registry and Moonlight', note: 'Registry described as the team deck does (an onchain package manager, audited). Moonlight added: audited by Runtime Verification, limited mainnet release since July 2026.' },
  { page: '/networks/xrpl', target: '[data-nx=shiprows] .nxjs_shiprow:nth-child(1)', kind: 'changed', title: 'GhostSig', note: 'Now says it is the default passkey module in xrpl-connect and in the Stellar Wallets Kit, as in the team deck.' },
  { page: '/open-source', target: '[data-os=lede], [data-os=metrics], [data-os=tools], [data-os=standards]', kind: 'new', title: 'New page', note: 'Suggested page built from the open-source pages of the team deck: one card per tool (what it is, our role, status, audit or adoption, who built it, code) and the standards and libraries. Figures as of October 2026; the four headline figures are the ones on the SDF case study. Linked from the footer, the About page and the FAQ.' },
  { page: '/open-source', target: '#ghostsig, #tansu', kind: 'check', title: 'GhostSig and Tansu', note: 'Both are Pamphile’s projects (Tansu’s code sits under Consulting Manao). The page credits them to him. Check you want them listed among our tools.' },
  { page: '/networks/xrpl', target: '.nx_heroleft, .nx_shipcard', kind: 'new', title: 'New page', note: 'This page redirected to /networks. Drafted from our XRPL work: GhostSig, Carbon Coin, XRPL library fixes and Ripple’s programs. Canton and Ethereum still redirect until there is a case to show.' },
  { page: '/blog/scaffold-stellar-how-we-built-the-developer-toolkit', target: '.art_lede, .blog_richtext, .art_byline, .art_footer', kind: 'new', title: 'Article draft', note: 'The article was empty. Drafted from Scaffold Stellar’s public facts (features, releases, public-good funding). Byline: Willem Wyndham. Add a cover image and a publication date.' },
  { page: '/blog/why-stellar-is-the-right-chain-for-tokenization', target: '.art_lede, .blog_richtext, .art_byline, .art_footer', kind: 'new', title: 'Article draft', note: 'The article was empty. Market figures from RWA.xyz (October 2026) and public announcements: check them on publication day. Byline: Enzo Soyer. Add a cover image and a date.' },
  { page: '/blog/defi-on-xrpl-compliance-liquidity-and-the-road-ahead', target: '.art_lede, .blog_richtext, .art_byline, .art_footer', kind: 'changed', title: 'Article draft', note: 'Replaces the “test” placeholder. XRPL facts as checked in October 2026 (amendments, validator votes): refresh them on publication. The date still says September 1, 2026.' },

  // ------------------------------------------------------------------ team
  ...team.map(([slug, note]): ReviewItem => {
    const photo = slug !== 'em-lowing';
    return {
      page: `/team/${slug}`,
      target: photo ? `${BIO}, .tm_portraitbox` : BIO,
      kind: 'new',
      title: photo ? 'Photo, bio, focus and links' : 'Bio, focus and links',
      note: `${note} ${photoNote(slug)}`,
    };
  }),
];
