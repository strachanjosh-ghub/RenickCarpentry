/**
 * Single source of truth for business details (NAP consistency for SEO/GEO).
 * Change a detail here and it updates the header, footer, contact page and structured data.
 *
 * ⚠ CONFIRM BEFORE LAUNCH — see docs/MISSING_INFORMATION.md
 *  - Phone number 0409 423 724 (brief says "verify before publishing").
 *  - Trading name spelling "Carpentry" vs domain/email spelling "Carpentary" — kept exactly as supplied.
 */
export const site = {
  name: 'Renick Carpentry',
  descriptor: 'Quality Home Renovations',
  tagline: 'Thoughtfully planned, beautifully finished.',
  owner: 'Alister',
  phoneDisplay: '0409 423 724',
  phoneHref: 'tel:+61409423724',
  phoneE164: '+61409423724',
  email: 'Alister@RenickCarpentary.com.au',
  domainDisplay: 'RenickCarpentary.com.au',
  // Canonical origin. Override with NEXT_PUBLIC_SITE_URL in Netlify if www is chosen as canonical.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://renickcarpentary.com.au').replace(/\/$/, ''),
  region: 'Geelong & the Surf Coast',
  state: 'Victoria',
  country: 'AU',
  // Suggested areas from the brief — VALIDATE against Alister's actual coverage before launch.
  serviceAreas: {
    geelong: ['Geelong', 'Highton', 'Belmont', 'Newtown', 'Grovedale', 'Waurn Ponds'],
    surfCoast: ['Torquay', 'Jan Juc', 'Anglesea'],
    bellarine: ['Ocean Grove', 'Barwon Heads'],
  },
  // Leave empty until real, verified profiles exist (used in schema sameAs + footer).
  social: {
    googleBusinessProfile: '',
    instagram: '',
    facebook: '',
  },
} as const;

export const allAreas = [
  ...site.serviceAreas.geelong,
  ...site.serviceAreas.surfCoast,
  ...site.serviceAreas.bellarine,
];

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`;

export const mainNav = [
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Our Work' },
  { href: '/our-approach/', label: 'Our Approach' },
  { href: '/about/', label: 'About Alister' },
  { href: '/insights/', label: 'Advice' },
  { href: '/contact/', label: 'Contact' },
];
