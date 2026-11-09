import type { Metadata } from 'next';
import { site, absoluteUrl } from './site';

/** Builds unique title/description/canonical/OG for each page. */
export function pageMeta({ title, description, path, image = '/images/og-social-preview.png', noindex = false, type = 'website' }: { title: string; description: string; path: string; image?: string; noindex?: boolean; type?: 'website' | 'article' }): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { type, url, title, description, siteName: site.name, locale: 'en_AU', images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${site.name} — ${site.descriptor}` }] },
    twitter: { card: 'summary_large_image', title, description, images: [absoluteUrl(image)] },
  };
}
