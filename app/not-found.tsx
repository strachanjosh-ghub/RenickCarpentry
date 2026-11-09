import type { Metadata } from 'next';
export const metadata: Metadata = { title: { absolute: 'Page not found | Renick Carpentry' }, robots: { index: false } };
import { services } from '@/lib/services';
export default function NotFound() {
  return (
    <section className="container-prose py-20 md:py-28">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-3">Sorry, we couldn&rsquo;t find that page</h1>
      <p className="mt-5 text-lg text-muted">It may have moved. These links might help:</p>
      <ul className="mt-6 space-y-2 text-lg">
        <li><a href="/">Home</a></li>
        {services.map((s) => <li key={s.slug}><a href={`/${s.slug}/`}>{s.name}</a></li>)}
        <li><a href="/projects/">Our Work</a></li>
        <li><a href="/contact/">Contact Alister</a></li>
      </ul>
    </section>
  );
}
