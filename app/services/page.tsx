import { pageMeta } from '@/lib/seo';
import { services } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import FaqList from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Renovation Services Geelong & Surf Coast | Renick Carpentry',
  description: 'Home, bathroom, kitchen and outdoor living renovations plus custom finishing carpentry across Geelong and the Surf Coast — planned carefully and finished beautifully.',
  path: '/services/',
});

const faqs = [
  { q: 'What does Renick Carpentry specialise in?', a: 'Quality renovations to established homes across Geelong and the Surf Coast: whole-home updates, bathrooms, kitchens, decks and outdoor entertaining areas, and custom finishing carpentry. Renovation planning and trade coordination are part of how Alister works.' },
  { q: 'What doesn’t Renick Carpentry do?', a: 'The business doesn’t focus on fencing, gate repairs, general handyman jobs or the cheapest-possible carpentry. The emphasis is on considered renovation work with a high-quality finish.' },
  { q: 'Can I get help if my project covers more than one service?', a: 'Yes. Many renovations combine a kitchen, bathroom and new joinery, or an indoor update with a new outdoor area. Alister can help plan the whole project so the pieces fit together.' },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Renick Carpentry services', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: absoluteUrl(`/${s.slug}/`), name: s.name })) }} />
      <section className="container-site pt-10 pb-12 md:pt-14 md:pb-16">
        <Breadcrumbs items={[{ href: '/services/', label: 'Services' }]} />
        <h1 className="mt-8 max-w-4xl">Renovation and carpentry services in Geelong &amp; the Surf Coast</h1>
        <span className="rule-gold mt-6" aria-hidden="true" />
        <p className="mt-6 text-xl max-w-3xl text-muted">Renick Carpentry focuses on renovations to established homes — work where careful planning, honest advice and precise finishing make the difference. Each project is shaped around your home, whether you arrive with detailed plans or just an idea.</p>
      </section>
      <section className="container-site pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} s={s} headingLevel={2} />)}
          <div className="rounded-[4px] bg-sand p-8 flex flex-col justify-center">
            <h2 className="!text-[1.75rem]">Renovation planning &amp; trade coordination</h2>
            <p className="mt-3 text-muted">Not sure where to start? Alister can help turn an idea into a practical plan and coordinate the trusted trades your project needs.</p>
            <a href="/our-approach/" className="mt-5 link-arrow">How it works</a>
          </div>
        </div>
      </section>
      <section className="container-prose pb-20"><FaqList faqs={faqs} heading="About our services" /></section>
      <CtaBand />
    </>
  );
}
