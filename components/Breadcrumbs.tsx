import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

export type Crumb = { href: string; label: string };

export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ href: '/', label: 'Home' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-[0.9375rem] ${dark ? 'text-cream/85' : 'text-muted'}`}>
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i < all.length - 1 ? (
                <><a href={c.href} className={dark ? 'text-cream' : 'text-forest'}>{c.label}</a><span aria-hidden="true">/</span></>
              ) : (
                <span aria-current="page">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: absoluteUrl(c.href) })) }} />
    </>
  );
}
