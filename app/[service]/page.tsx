import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/services';
import { pageMeta } from '@/lib/seo';
import { serviceSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import { getArticles, getProjects } from '@/lib/content';
import PhotoSlot from '@/components/PhotoSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';
import { CheckIcon, PhoneIcon } from '@/components/Icons';

export const dynamicParams = false;
export function generateStaticParams() { return services.map((s) => ({ service: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = getService(service);
  return pageMeta({ title: s.title, description: s.description, path: `/${s.slug}/` });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = services.find((x) => x.slug === service);
  if (!s) notFound();
  const related = s.related.map(getService);
  const articles = getArticles().filter((a) => s.articleSlugs.includes(a.slug));
  const projects = getProjects().filter((p) => p.serviceSlug === s.slug || p.status === 'template').slice(0, 2);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <section className="on-dark bg-deep text-cream">
        <div className="container-site py-10 md:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Breadcrumbs dark items={[{ href: '/services/', label: 'Services' }, { href: `/${s.slug}/`, label: s.name }]} />
            <p className="eyebrow mt-8">{s.name} · Geelong &amp; Surf Coast</p>
            <h1 className="!text-cream mt-3">{s.h1}</h1>
            <p className="mt-6 text-lg md:text-xl text-cream/90">{s.lede}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`/contact/?type=${encodeURIComponent(s.name)}`} className="btn btn-primary">{s.cta}</a>
              <a href={site.phoneHref} className="btn btn-outline"><PhoneIcon /> {site.phoneDisplay}</a>
            </div>
          </div>
          <PhotoSlot priority alt={`${s.name} — finished work by Renick Carpentry`} illustration={s.illustration} shot={`Finished ${s.name.toLowerCase()} project`} ratio="4 / 3" tone="light" />
        </div>
      </section>

      {/* Problems */}
      <section className="container-site py-16 md:py-20" aria-labelledby="problems-heading">
        <p className="eyebrow mb-3">Common reasons homeowners call</p>
        <h2 id="problems-heading" className="max-w-3xl">What we help solve</h2>
        <span className="rule-gold mt-5" aria-hidden="true" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {s.problems.map((p) => (
            <div key={p.title} className="bg-white/60 border border-line rounded-[4px] p-7">
              <h3 className="!text-[1.6rem]">{p.title}</h3>
              <p className="mt-3 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="bg-sand" aria-labelledby="examples-heading">
        <div className="container-site py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">Examples of possible work</p>
            <h2 id="examples-heading">What this can include</h2>
            <span className="rule-gold mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-3 text-lg">
              {s.examples.map((e) => <li key={e} className="flex gap-3"><CheckIcon className="w-6 h-6 text-forest shrink-0 mt-0.5" />{e}</li>)}
            </ul>
            <p className="mt-6 text-muted">Exact scope is agreed after discussing your property and plans.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoSlot alt={`${s.name} detail`} illustration="detail" shot="Finishing detail" ratio="3 / 4" />
            <PhotoSlot alt={`${s.name} completed space`} illustration={s.illustration} shot="Wide outcome" ratio="3 / 4" className="mt-10" />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container-site py-16 md:py-20" aria-labelledby="approach-heading">
        <p className="eyebrow mb-3">The Renick approach</p>
        <h2 id="approach-heading">How Alister approaches {s.name.toLowerCase()}</h2>
        <span className="rule-gold mt-5" aria-hidden="true" />
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {s.approach.map((a, i) => (
            <li key={a.title} className="border-t-2 border-forest pt-5">
              <p className="font-heading text-[2rem] text-forest leading-none" aria-hidden="true">{i + 1}</p>
              <h3 className="mt-2 !text-[1.45rem]">{a.title}</h3>
              <p className="mt-2 text-muted">{a.body}</p>
            </li>
          ))}
        </ol>
        <a href="/our-approach/" className="mt-10 inline-block link-arrow">See the full project journey</a>
      </section>

      {/* Local context */}
      <section className="on-dark bg-forest text-cream" aria-labelledby="local-heading">
        <div className="container-site py-14 md:py-16 max-w-4xl">
          <p className="eyebrow mb-3">Local knowledge</p>
          <h2 id="local-heading" className="!text-cream">{s.localContext.title}</h2>
          <p className="mt-5 text-lg text-cream/90">{s.localContext.body}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="container-site py-16 md:py-20" aria-labelledby="related-work-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 id="related-work-heading">Related projects</h2>
          <a href="/projects/" className="link-arrow">View Our Work</a>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <Testimonials serviceSlug={s.slug} />

      {/* FAQ */}
      <section className="container-prose py-16 md:py-20">
        <FaqList faqs={s.faqs} heading={`${s.name}: frequently asked questions`} />
      </section>

      {/* Related */}
      <section className="bg-sand" aria-labelledby="related-heading">
        <div className="container-site py-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 id="related-heading" className="!text-[2rem]">Related services</h2>
            <ul className="mt-6 space-y-4">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-line pb-4">
                  <a href={`/${r.slug}/`} className="font-heading text-[1.6rem] font-semibold no-underline hover:underline">{r.name}</a>
                  <p className="text-muted mt-1">{r.cardSummary}</p>
                </li>
              ))}
            </ul>
          </div>
          {articles.length > 0 && (
            <div>
              <h2 className="!text-[2rem]">Helpful reading</h2>
              <ul className="mt-6 space-y-4">
                {articles.map((a) => (
                  <li key={a.slug} className="border-b border-line pb-4">
                    <a href={`/insights/${a.slug}/`} className="font-heading text-[1.6rem] font-semibold no-underline hover:underline">{a.title}</a>
                    <p className="text-muted mt-1">{a.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaBand heading={s.cta} cta="Start Planning Your Renovation" />
    </>
  );
}
