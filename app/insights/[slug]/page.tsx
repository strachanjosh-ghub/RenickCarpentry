import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/seo';
import { getArticles, getArticle } from '@/lib/content';
import { getService } from '@/lib/services';
import { absoluteUrl, site } from '@/lib/site';
import { BUSINESS_ID, PERSON_ID } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;
export function generateStaticParams() { return getArticles().map((a) => ({ slug: a.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug)!;
  return pageMeta({ title: `${a.title} | Renick Carpentry`, description: a.description, path: `/insights/${a.slug}/`, type: 'article' });
}

const fmt = (d: string) => new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const others = getArticles().filter((x) => x.slug !== a.slug).slice(0, 3);
  const related = a.relatedServices.map(getService).filter(Boolean);
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.description, datePublished: a.date, dateModified: a.updated || a.date, url: absoluteUrl(`/insights/${a.slug}/`), mainEntityOfPage: absoluteUrl(`/insights/${a.slug}/`), author: a.author === site.owner ? { '@id': PERSON_ID, '@type': 'Person', name: site.owner } : { '@id': BUSINESS_ID, '@type': 'Organization', name: site.name }, publisher: { '@id': BUSINESS_ID, '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: absoluteUrl('/brand/joinery-R-primary-light-512.png') } }, inLanguage: 'en-AU' }} />
      <article>
        <header className="container-prose pt-10 md:pt-14">
          <Breadcrumbs items={[{ href: '/insights/', label: 'Advice' }, { href: `/insights/${a.slug}/`, label: a.title }]} />
          <p className="eyebrow mt-8">{a.category}</p>
          <h1 className="mt-3 !text-[clamp(2.1rem,1.6rem+2vw,3.25rem)]">{a.title}</h1>
          <p className="mt-5 text-[1rem] text-muted">By {a.author === site.owner ? `${site.owner}, ${site.name}` : site.name} · <time dateTime={a.date}>{fmt(a.date)}</time> · {a.readingMinutes} min read</p>
          <div className="mt-8 bg-sand border-l-4 border-forest rounded-[4px] p-6">
            <p className="font-semibold text-forest">{a.keyQuestion}</p>
            <p className="mt-2">{a.shortAnswer}</p>
          </div>
        </header>
        <div className="container-prose py-10 prose-renick" dangerouslySetInnerHTML={{ __html: a.html }} />
        <footer className="container-prose pb-16">
          <div className="border-t border-line pt-8 grid sm:grid-cols-[auto_1fr] gap-5 items-start">
            <img src="/brand/joinery-R-primary-light.svg" alt="" aria-hidden="true" width={56} height={62} className="w-14 h-auto" />
            <div>
              <p className="font-semibold">About {site.name}</p>
              <p className="text-muted mt-1">Renick Carpentry is run by Alister, a hands-on local carpenter. It is a renovation and carpentry business working with homeowners across Geelong and the Surf Coast. <a href="/about/">More about Alister</a>.</p>
            </div>
          </div>
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="!text-[1.75rem]">Related services</h2>
              <ul className="mt-4 flex flex-wrap gap-3">{related.map((s) => <li key={s.slug}><a className="btn btn-outline !min-h-[44px] !py-2 !text-base" href={`/${s.slug}/`}>{s.name}</a></li>)}</ul>
            </div>
          )}
        </footer>
      </article>
      <section className="bg-sand"><div className="container-site py-14">
        <h2 className="!text-[2rem]">More advice</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">{others.map((o) => (
          <article key={o.slug} className="relative"><h3 className="!text-[1.5rem]"><a href={`/insights/${o.slug}/`} className="no-underline after:absolute after:inset-0">{o.title}</a></h3><p className="mt-2 text-muted">{o.summary}</p></article>
        ))}</div>
      </div></section>
      <CtaBand />
    </>
  );
}
