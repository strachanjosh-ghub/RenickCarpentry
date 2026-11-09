import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({ title: 'Thank you | Renick Carpentry', description: 'Your enquiry has been received.', path: '/contact/thank-you/', noindex: true });

export default function ThankYou() {
  return (
    <section className="container-prose py-20 md:py-28 text-center">
      <img src="/brand/joinery-R-primary-light.svg" alt="" aria-hidden="true" className="w-20 mx-auto" />
      <h1 className="mt-8">Thanks — your enquiry is on its way</h1>
      <p className="mt-5 text-lg text-muted">Alister will be in touch to talk about your project. If it&rsquo;s urgent, call <a href={site.phoneHref} className="font-semibold">{site.phoneDisplay}</a>.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"><a href="/projects/" className="btn btn-primary">View Our Work</a><a href="/insights/" className="btn btn-outline">Renovation advice</a></div>
    </section>
  );
}
