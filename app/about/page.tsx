import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import { personSchema } from '@/lib/schema';
import PhotoSlot from '@/components/PhotoSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import FaqList from '@/components/Faq';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMeta({
  title: 'Meet Alister | Renovation Carpenter Geelong | Renick Carpentry',
  description: 'Meet Alister, the hands-on local carpenter behind Renick Carpentry. Honest advice, personal involvement and pride in the finished result across Geelong and the Surf Coast.',
  path: '/about/',
});

const values = [
  { title: 'Hands-on involvement', body: 'Alister typically takes on one major renovation at a time alongside smaller projects. You deal directly with the person doing the work, from the first conversation to handover.' },
  { title: 'Pride in workmanship', body: 'The aim is a finished result that both you and Alister are genuinely happy with — not just a job that is done.' },
  { title: 'Honest, practical advice', body: 'Straight answers about what will work, what may be impractical and where spending on quality matters most.' },
  { title: 'Local knowledge', body: 'Working across Geelong and the Surf Coast means understanding local homes, coastal conditions and the trades who do good work here.' },
  { title: 'Respect for your ideas', body: 'Your home, your vision. Alister helps shape and refine ideas rather than replacing them with his own.' },
  { title: 'Design and detail together', body: 'The big picture and the smallest finishing details deserve equal attention. Both are what make a renovation feel complete.' },
];

const faqs = [
  { q: 'Who is Renick Carpentry?', a: 'Renick Carpentry is a locally owned renovation and carpentry business in the Geelong and Surf Coast region of Victoria, run by Alister. It focuses on quality home renovations — bathrooms, kitchens, outdoor living and custom finishing carpentry — with Alister personally involved in each project.' },
  { q: 'Do I need complete plans?', a: 'No. You can bring detailed drawings or early ideas. Alister can help you identify the practical next steps, including whether a designer, draftsperson or engineer should be involved.' },
  { q: 'Can other trades be coordinated?', a: 'Alister has trusted specialists in his network and can discuss coordination depending on the project. Regulated work such as plumbing and electrical is carried out by appropriately licensed professionals.' },
  { q: 'Which areas do you work in?', a: 'Geelong and the Surf Coast, including nearby Bellarine towns. Please mention the property location when you enquire.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <section className="container-site pt-10 pb-16 md:pt-14 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <Breadcrumbs items={[{ href: '/about/', label: 'About Alister' }]} />
          <p className="eyebrow mt-8 mb-3">About Renick Carpentry</p>
          <h1>A local craftsman who takes pride in the outcome</h1>
          <span className="rule-gold mt-6" aria-hidden="true" />
          <div className="mt-6 space-y-4 text-lg">
            <p>Renick Carpentry is a locally owned renovation and carpentry business serving Geelong and the Surf Coast. It is run by Alister, and his approach is personal.</p>
            <p>Some clients arrive with a complete plan; others want an experienced perspective to shape their ideas. In either case, Alister&rsquo;s role is to listen, offer honest guidance and deliver a result that feels right for the home — with attention to both the overall outcome and the smallest finishing details.</p>
          </div>
        </div>
        <PhotoSlot alt="Alister of Renick Carpentry" illustration="portrait" shot="Genuine portrait of Alister (with consent)" ratio="4 / 5" tone="light" priority />
      </section>

      <section className="bg-sand">
        <div className="container-site py-16 md:py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <p className="eyebrow mb-3">Alister&rsquo;s story</p>
            <h2>Why Renick Carpentry works the way it does</h2>
            <span className="rule-gold mt-5" aria-hidden="true" />
          </div>
          <div className="space-y-4 text-lg">
            <p>Renick Carpentry was built around a simple idea: homeowners should be able to deal directly with an experienced carpenter who cares about the finished result as much as they do.</p>
            <p>That is why Alister keeps his workload deliberately focused. Taking on one major renovation at a time means he can be on site, make good decisions as the work unfolds and give each project the attention to detail it deserves.</p>
            <div className="border-2 border-dashed border-[#A07A1F] bg-[#FFF8E1] rounded-[4px] p-5 text-[1rem]">
              <span className="placeholder-flag">To complete</span>
              <p className="mt-3 text-ink">Add Alister&rsquo;s own words here: how he got into carpentry, the kind of work he enjoys most and any qualifications, registrations or memberships — <strong>only once verified</strong>. Do not publish experience or credentials that haven&rsquo;t been confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24" aria-labelledby="values-heading">
        <p className="eyebrow mb-3">What you can expect</p>
        <h2 id="values-heading">How Alister works</h2>
        <span className="rule-gold mt-5" aria-hidden="true" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="!text-[1.6rem]">{v.title}</h3>
              <p className="mt-2 text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="on-dark bg-deep text-cream">
        <div className="container-site py-16 md:py-20 max-w-4xl">
          <p className="font-heading text-[clamp(1.8rem,1.4rem+1.5vw,2.75rem)] leading-tight text-cream">&ldquo;The overall design and the precise details deserve equal attention. The aim is an outcome the homeowner enjoys — and that I&rsquo;m proud to stand behind.&rdquo;</p>
          <p className="mt-5 text-cream/85">— Alister, Renick Carpentry <span className="placeholder-flag ml-2">Confirm wording with Alister</span></p>
        </div>
      </section>

      <section className="container-prose py-16 md:py-20"><FaqList faqs={faqs} heading="Questions about working with Alister" /></section>
      <CtaBand heading="Talk to Alister" body={`Tell Alister a little about your home and what you have in mind. Call ${site.phoneDisplay} or send an enquiry — photos welcome.`} cta="Talk to Alister" />
    </>
  );
}
