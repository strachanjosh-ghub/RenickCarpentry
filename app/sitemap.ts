import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { services } from '@/lib/services';
import { getArticles, getPublishedProjects } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().slice(0, 10);
  const core = ['/', '/services/', '/about/', '/our-approach/', '/projects/', '/insights/', '/contact/', '/privacy/'];
  return [
    ...core.map((p) => ({ url: absoluteUrl(p), lastModified: now, priority: p === '/' ? 1 : 0.7 })),
    ...services.map((s) => ({ url: absoluteUrl(`/${s.slug}/`), lastModified: now, priority: 0.9 })),
    ...getPublishedProjects().map((p) => ({ url: absoluteUrl(`/projects/${p.slug}/`), lastModified: now, priority: 0.8 })),
    ...getArticles().map((a) => ({ url: absoluteUrl(`/insights/${a.slug}/`), lastModified: a.updated || a.date, priority: 0.6 })),
  ];
}
