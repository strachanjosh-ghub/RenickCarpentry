import { pageMeta } from '@/lib/seo';
import { getArticles } from '@/lib/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';

export const metadata = pageMeta({
  title: 'Renovation Advice & Inspiration | Geelong & Surf Coast | Renick Carpentry',
  description: 'Practical renovation advice for Geelong and Surf Coast homeowners — planning bathrooms, kitchens and outdoor areas, choosing a carpenter and getting a quality finish.',
  path: '/insights/',
});

export default function InsightsPage() {
  const articles = getArticles();
  const [first, ...rest] = articles;
  return (
    <>
      <section className="container-site pt-10 pb-12 md:pt-14">
        <Breadcrumbs items={[{ href: '/insights/', label: 'Advice & Inspiration' }]} />
        <h1 className="mt-8 max-w-4xl">Renovation advice &amp; inspiration</h1>
        <span className="rule-gold mt-6" aria-hidden="true" />
        <p className="mt-6 text-xl max-w-3xl text-muted">Honest, practical guidance for homeowners planning a renovation in Geelong and the Surf Coast — what to think about, what to ask and where quality matters most.</p>
      </section>
      <section className="container-site pb-20">
        {first && (
          <article className="relative bg-deep text-cream on-dark rounded-[4px] p-8 md:p-12 mb-12">
            <p className="eyebrow">{first.category} · {first.readingMinutes} min read</p>
            <h2 className="!text-cream mt-3 max-w-3xl"><a href={`/insights/${first.slug}/`} className="text-cream no-underline after:absolute after:inset-0">{first.title}</a></h2>
            <p className="mt-4 text-lg text-cream/90 max-w-3xl">{first.summary}</p>
            <span className="mt-6 inline-block link-arrow text-cream" aria-hidden="true">Read the article</span>
          </article>
        )}
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <article key={a.slug} className="relative border-t-2 border-forest pt-5">
              <p className="text-[0.9375rem] font-semibold text-muted uppercase tracking-wider">{a.category} · {a.readingMinutes} min</p>
              <h2 className="mt-2 !text-[1.6rem]"><a href={`/insights/${a.slug}/`} className="no-underline after:absolute after:inset-0">{a.title}</a></h2>
              <p className="mt-2 text-muted">{a.summary}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand heading="Have a question about your renovation?" body="If you'd rather talk it through, Alister is happy to help — whether you have plans or just an idea." cta="Talk to Alister" />
    </>
  );
}
