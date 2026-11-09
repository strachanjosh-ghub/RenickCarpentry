import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/seo';
import { getProjects, getProject } from '@/lib/content';
import { getService } from '@/lib/services';
import { absoluteUrl } from '@/lib/site';
import { BUSINESS_ID } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';
import PhotoSlot from '@/components/PhotoSlot';
import BeforeAfter from '@/components/BeforeAfter';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;
export function generateStaticParams() {
  const p = getProjects();
  return p.length ? p.map((x) => ({ slug: x.slug })) : [{ slug: '_none' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return pageMeta({ title: 'Project | Renick Carpentry', description: 'Renovation project', path: '/projects/', noindex: true });
  return pageMeta({ title: `${p.title} | Renick Carpentry`, description: p.description, path: `/projects/${p.slug}/`, noindex: p.status !== 'published', type: 'article' });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const s = getService(p.serviceSlug);
  const sections = [
    { h: 'What the homeowner wanted', body: p.objectives },
    { h: 'Design considerations', body: p.design },
    { h: 'Challenges and solutions', body: p.challenges },
    { h: 'Craftsmanship details', body: p.craftsmanship },
    { h: 'The finished outcome', body: p.outcome },
  ];
  return (
    <>
      {p.status === 'published' && (
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, description: p.description, url: absoluteUrl(`/projects/${p.slug}/`), creator: { '@id': BUSINESS_ID }, locationCreated: { '@type': 'Place', name: `${p.suburb}, VIC` }, about: s?.name }} />
      )}
      <section className="container-site pt-10 md:pt-14">
        <Breadcrumbs items={[{ href: '/projects/', label: 'Our Work' }, { href: `/projects/${p.slug}/`, label: p.title }]} />
        {p.status === 'template' && <p className="mt-6"><span className="placeholder-flag">Template — not a real project · hidden on the live site</span></p>}
        <p className="eyebrow mt-6">{p.projectType} · {p.suburb}</p>
        <h1 className="mt-3 max-w-4xl">{p.title}</h1>
        <p className="mt-5 text-xl max-w-3xl text-muted">{p.summary}</p>
      </section>
      <section className="container-site mt-10">
        <PhotoSlot src={p.heroImage?.src} alt={p.heroImage?.alt} shot={p.heroImage?.shot} illustration={s?.illustration} ratio="16 / 8" priority sizes="100vw" />
      </section>

      <section className="container-site py-14 md:py-20 grid lg:grid-cols-[1fr_20rem] gap-12">
        <div className="space-y-12">
          {(p.before || p.after) && (
            <div>
              <h2 className="!text-[2rem]">Before and after</h2>
              <p className="mt-2 text-muted">Drag the handle (or use the arrow keys) to compare.</p>
              <div className="mt-5"><BeforeAfter before={p.before} after={p.after} illustration={s?.illustration} /></div>
            </div>
          )}
          {sections.map((x) => (
            <div key={x.h}>
              <h2 className="!text-[2rem]">{x.h}</h2>
              <p className="mt-3 text-lg">{x.body}</p>
            </div>
          ))}
          {p.html?.trim() && <div className="prose-renick" dangerouslySetInnerHTML={{ __html: p.html }} />}
          {p.gallery?.length > 0 && (
            <div>
              <h2 className="!text-[2rem]">Details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.gallery.map((g, i) => (
                  <figure key={i}>
                    <PhotoSlot src={g.src} alt={g.alt} shot={g.shot} illustration="detail" ratio="1 / 1" sizes="(min-width: 1024px) 22vw, 50vw" />
                    {g.caption && <figcaption className="mt-2 text-[0.9375rem] text-muted">{g.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          )}
          {p.testimonial?.permission && p.testimonial.quote && (
            <figure className="border-l-4 border-gold pl-6">
              <blockquote className="font-heading text-[1.9rem] leading-snug text-forest">&ldquo;{p.testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 font-semibold">{p.testimonial.name}, {p.suburb}</figcaption>
            </figure>
          )}
        </div>
        <aside className="lg:sticky lg:top-28 self-start bg-sand rounded-[4px] p-7" aria-label="Project facts">
          <dl className="space-y-4">
            <div><dt className="text-[0.875rem] uppercase tracking-wider font-semibold text-muted">Location</dt><dd className="text-lg font-semibold">{p.suburb}</dd></div>
            <div><dt className="text-[0.875rem] uppercase tracking-wider font-semibold text-muted">Project type</dt><dd className="text-lg font-semibold">{p.projectType}</dd></div>
            {p.year && <div><dt className="text-[0.875rem] uppercase tracking-wider font-semibold text-muted">Completed</dt><dd className="text-lg font-semibold">{p.year}</dd></div>}
            {s && <div><dt className="text-[0.875rem] uppercase tracking-wider font-semibold text-muted">Service</dt><dd><a href={`/${s.slug}/`} className="text-lg font-semibold">{s.name}</a></dd></div>}
          </dl>
          <a href="/contact/" className="btn btn-primary w-full mt-7">Discuss a similar project</a>
        </aside>
      </section>
      <CtaBand heading="Planning something similar?" />
    </>
  );
}
