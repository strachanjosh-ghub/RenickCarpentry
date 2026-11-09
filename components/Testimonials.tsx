import { testimonials, showTemplates } from '@/lib/testimonials';

export default function Testimonials({ serviceSlug }: { serviceSlug?: string }) {
  const list = serviceSlug ? testimonials.filter((t) => t.serviceSlug === serviceSlug) : testimonials;
  if (!list.length) {
    if (!showTemplates) return null;
    return (
      <section className="container-site py-14" aria-label="Client reviews (placeholder)">
        <div className="border-2 border-dashed border-line rounded-[4px] p-8 md:p-10 text-center max-w-3xl mx-auto">
          <span className="placeholder-flag">Placeholder — hidden on the live site until real reviews are added</span>
          <h2 className="mt-4 !text-[2rem]">What clients say</h2>
          <p className="mt-3 text-muted">Genuine reviews from Alister&rsquo;s clients will appear here, shared with their permission. Add them in <code>lib/testimonials.ts</code> (or link the Google Business Profile once reviews are collected).</p>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-sand" aria-labelledby="reviews-heading">
      <div className="container-site py-16 md:py-20">
        <h2 id="reviews-heading">What clients say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <figure key={t.quote} className="bg-cream border border-line rounded-[4px] p-7">
              <blockquote className="font-heading text-[1.5rem] leading-snug text-forest">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 font-semibold">{t.name}{t.suburb ? `, ${t.suburb}` : ''}{t.project && <span className="block font-normal text-muted">{t.project}</span>}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
