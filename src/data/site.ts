// Site-wide settings. Edit here, not in the components.

export const site = {
  name: 'The Aha Company',
  defaultTitle: 'The Aha Company: blockchain integration partner for institutions, protocols and ecosystems',
  defaultDescription:
    'We integrate financial institutions and protocols onto Stellar, XRPL and Canton, and build the developer tooling those ecosystems run on. €20M+ regulated stablecoins issued onchain.',
  ogImage: '/images/og-default.png',
  // Canonical address of the live site. Builds served anywhere else (the
  // github.io preview) get <meta name="robots" content="noindex"> so search
  // engines do not index a duplicate of theaha.co.
  productionOrigin: 'https://theaha.co',
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Integrate', href: '/networks' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/work?view=articles' },
];

export const contact = {
  email: 'hello@theaha.co',
  github: 'https://github.com/theahaco',
  // Company LinkedIn page. Empty on the Webflow site ("#"); set the URL here.
  linkedin: '#',
  // Endpoint that receives the contact form as a POST (Formspree, Basin,
  // Getform, a Worker...). While empty, the form opens the visitor's email
  // client with the message prefilled, addressed to `email` above.
  formEndpoint: '',
};

export const calendly = {
  url: 'https://calendly.com/d/cs4b-dy3-9py/introduction-to-the-aha-company?hide_gdpr_banner=1&background_color=fbfaf8&text_color=14243a&primary_color=1a3b60',
  badgeText: 'Schedule a call',
  badgeColor: '#47A019',
  badgeTextColor: '#ffffff',
};

export const footer = {
  description: 'Blockchain integration partner for financial institutions, protocols and ecosystems.',
  locations: 'United States · France · Brazil',
  legal: ['The Aha Company Inc., United States', 'The Aha Company SAS, France', 'The Aha Company Ltda., Brazil'],
  copyright: '© 2026 The Aha Company. All rights reserved.',
};
