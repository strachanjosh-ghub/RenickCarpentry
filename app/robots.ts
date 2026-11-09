import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/** Allows search engines and AI crawlers. Blocks the CMS and form-detection file. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin/', '/__forms.html', '/contact/thank-you/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
