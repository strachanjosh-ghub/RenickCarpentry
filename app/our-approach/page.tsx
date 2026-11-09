import { pageMeta } from '@/lib/seo';
import { processSteps } from '@/lib/process';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import FaqList from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import PhotoSlot from '@/components/PhotoSlot';
import { absoluteUrl } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Our Renovation Approach | From Idea to Handover | Renick Carpentry',
  description: 'How a Renick Carpentry renovation works — from the first conversation and practical planning to trade coordination and careful handover. Plans or ideas welcome.',
  path: '/our-approach/',
});

const faqs = [
  { q: 'Can I discuss renovation ideas before I have detailed plans?', a: 'Yes — that is one of the most useful times to talk. Alister can help you test ideas against the house, your budget and what is practical before you commit to drawings or selections.' },
  { q: 'Can you work from plans I already have?', a: 'Yes. If you already have drawings from a designer or architect, Alister can work from them and will raise any practical considerations he notices along the way.' },
  { q: 'Who coordinates the other trades?', a: 'Alister can discuss coordinating trusted trades as part of your project. Plumbing, electrical and other regulated work is carried out by appropriately licensed professionals, and who is responsible for what is made clear in the agreed scope.' },
  { q: 'How long will my project take?', a: 'Every project is different, so Renick Carpentry doesn’t promise generic timeframes. Realistic timing is discussed once the scope, selections, approvals and trade availability are known.' },
  { q: 'Do I need to disclose my budget?', a: 'It isn’t required, but a rough range helps Alister give more useful advice about what is achievable and where to prioritise.' },
];

export default function ApproachPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How a Renick Carpentry renovation works', url: absoluteUrl('/our-approach/'), step: processSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })) }} />
      <section className="on-dark bg-deep text-cream">
        <div className="container-site py-10 md:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Breadcrumbs dark items={[{ href: '/our-approach/', label: 'Our Approach' }]} />
            <p className="eyebrow mt-8">Our approach</p>
            <h1 className="!text-cream mt-3">From first idea to finishing touches</h1>
            <p className="mt-6 text-lg md:text-xl text-cream/90">Some homeowners arrive with detailed plans. Others have an idea and need help shaping it into something right for their home, budget and expectations. Alister is comfortable with both — and the process is the same thoughtful path either way.</p>
          </div>
          <PhotoSlot alt="Alister discussing renovation plans with homeowners" illustration="joinery" shot="Alister reviewing plans on site" ratio="4 / 3" tone="light" />
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <ol className="relative max-w-4xl">
          {processSteps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr] gap-4 md:gap-8 pb-12 last:pb-0 relative">
              <div className="relative">
                <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-forest text-cream font-heading text-2xl md:text-3xl font-semibold" aria-hidden="true">{i + 1}</span>
                {i < processSteps.length - 1 && <span className="absolute left-6 md:left-8 top-14 md:top-[4.5rem] bottom-0 w-0.5 bg-line -translate-x-1/2" aria-hidden="true" />}
              </div>
              <div className="pt-1 md:pt-3">
                <h2 className="!text-[clamp(1.6rem,1.4rem+0.8vw,2.2rem)]"><span className="sr-only">Step {i + 1}: </span>{s.title}</h2>
                <p className="mt-3 text-lg text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sand">
        <div className="container-site py-16 md:py-20 grid md:grid-cols-2 gap-10">
          <div className="bg-cream border border-line rounded-[4px] p-8">
            <h2 className="!text-[2rem]">Bring an idea</h2>
            <p className="mt-3 text-muted">Photos, a Pinterest board, a list of what isn&rsquo;t working — all good starting points. Alister will help work out what&rsquo;s practical, what it might involve and the sensible next steps, including whether a designer or engineer is needed.</p>
          </div>
          <div className="bg-cream border border-line rounded-[4px] p-8">
            <h2 className="!text-[2rem]">Bring a plan</h2>
            <p className="mt-3 text-muted">Already have drawings or a design? Alister can work from them, flag practical considerations early and focus on delivering the detail and finish the design deserves.</p>
          </div>
        </div>
      </section>

      <section className="container-prose py-16 md:py-20"><FaqList faqs={faqs} heading="Questions about the process" /></section>
      <CtaBand heading="Start planning your renovation" cta="Request a Consultation" />
    </>
  );
}
