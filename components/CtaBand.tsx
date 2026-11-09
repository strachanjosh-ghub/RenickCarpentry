import { site } from '@/lib/site';
import { PhoneIcon } from './Icons';

export default function CtaBand({ heading = 'Start planning your renovation', body = 'Whether you have detailed plans or just an idea, Alister is happy to talk it through. Tell him a little about your home and what you have in mind.', cta = 'Discuss Your Project' }: { heading?: string; body?: string; cta?: string }) {
  return (
    <section className="on-dark bg-deep text-cream relative overflow-hidden" aria-labelledby="cta-band-heading">
      <img src="/brand/joinery-R-reversed-dark.svg" alt="" aria-hidden="true" className="hidden md:block absolute -right-10 -bottom-16 w-[340px] opacity-[0.08] pointer-events-none" />
      <div className="container-site py-16 md:py-20 relative">
        <span className="rule-gold mb-6" aria-hidden="true" />
        <h2 id="cta-band-heading" className="!text-cream max-w-2xl">{heading}</h2>
        <p className="mt-4 max-w-2xl text-lg text-cream/90">{body}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/contact/" className="btn btn-primary">{cta}</a>
          <a href={site.phoneHref} className="btn btn-outline"><PhoneIcon /> Call {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
