import { site, absoluteUrl, allAreas } from './site';
import type { Service } from './services';

export const BUSINESS_ID = absoluteUrl('/#business');
export const PERSON_ID = absoluteUrl('/about/#alister');

/**
 * Entity data for search engines and AI answer engines.
 * Deliberately excludes street address, opening hours, ratings, founding date and credentials —
 * add them only once verified (see docs/MISSING_INFORMATION.md).
 */
export function businessSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: site.name,
    slogan: site.tagline,
    description: `${site.descriptor} across Geelong and the Surf Coast, Victoria. Renick Carpentry is a locally owned renovation and carpentry business run by Alister, who works directly with homeowners on home, bathroom, kitchen and outdoor living renovations and custom finishing carpentry, and can coordinate trusted trades.`,
    url: absoluteUrl('/'),
    telephone: site.phoneE164,
    email: site.email,
    logo: absoluteUrl('/brand/joinery-R-primary-light-512.png'),
    image: absoluteUrl('/images/og-social-preview.png'),
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    address: { '@type': 'PostalAddress', addressRegion: 'VIC', addressCountry: 'AU' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Greater Geelong, Victoria, Australia' },
      { '@type': 'AdministrativeArea', name: 'Surf Coast Shire, Victoria, Australia' },
      ...allAreas.map((name) => ({ '@type': 'Place', name: `${name}, VIC` })),
    ],
    knowsAbout: ['Home renovations', 'Bathroom renovations', 'Kitchen renovations', 'Decks and outdoor entertaining areas', 'Finishing carpentry', 'Renovation planning', 'Trade coordination'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.owner,
    jobTitle: 'Renovation carpenter',
    worksFor: { '@id': BUSINESS_ID },
    url: absoluteUrl('/about/'),
  };
}

export function serviceSchema(s: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`/${s.slug}/#service`),
    name: s.name,
    serviceType: s.schemaServiceType,
    description: s.lede,
    url: absoluteUrl(`/${s.slug}/`),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Greater Geelong, Victoria, Australia' },
      { '@type': 'AdministrativeArea', name: 'Surf Coast Shire, Victoria, Australia' },
    ],
  };
}
