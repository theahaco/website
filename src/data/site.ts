// Site-wide settings. Edit here, not in the components.

export const site = {
  name: 'The Aha Company',
  defaultTitle: 'The Aha Company: blockchain integration partner for institutions, protocols and ecosystems',
  defaultDescription:
    'We integrate financial institutions and protocols onto Stellar, XRPL and Canton, and build the developer tooling those ecosystems run on.',
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
  // Company LinkedIn page (the one linked from the current theaha.co footer).
  linkedin: 'https://www.linkedin.com/company/aha-labs-dev',
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

// Audience analytics, loaded on the production domain only (never on the
// github.io preview). The privacy policy describes whichever provider is set.
//   provider: '' (none yet), 'umami' (Umami Cloud, free plan, no cookies),
//             'plausible', 'cloudflare' (Cloudflare Web Analytics) or
//             'ga4' (Google Analytics 4, sets cookies).
//   snippet:  the provider's script tag(s), pasted as given (Umami: the
//             website's tracking code). Leave empty for Cloudflare Web
//             Analytics switched on in the Pages dashboard, which injects
//             its own script.
// Events sent when a provider is present: "Call booked" (Calendly),
// "Contact form sent" and "Email click". Umami lists them under Events by
// itself; Plausible needs a goal with exactly each name.
// data-domains keeps Umami to theaha.co itself, so a build served from any
// other address (a Cloudflare preview deployment, say) is never counted.
export const analytics: { provider: '' | 'umami' | 'plausible' | 'cloudflare' | 'ga4'; snippet: string } = {
  provider: 'umami',
  snippet: '<script defer src="https://cloud.umami.is/script.js" data-website-id="6c6e9f95-98f2-485e-b879-c80ca476bdf5" data-domains="theaha.co"></script>',
};

export const footer = {
  description: 'Blockchain integration partner for financial institutions, protocols and ecosystems.',
  locations: 'United States · Europe · Brazil',
  // The site is operated by the US company only (see /terms and /privacy).
  legal: ['Dawning Inc. (dba The Aha Company), a Delaware corporation'],
  copyright: '© 2026 Dawning Inc. (dba The Aha Company). All rights reserved.',
};
