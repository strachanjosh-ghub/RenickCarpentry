import { pageMeta } from '@/lib/seo';
import { site, allAreas } from '@/lib/site';
import { services } from '@/lib/services';
import { processSteps } from '@/lib/process';
import { getProjects, getArticles } from '@/lib/content';
import PhotoSlot from '@/components/PhotoSlot';
import ServiceCard from '@/components/ServiceCard';
import SectionIntro from '@/components/SectionIntro';
import FaqList from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import Testimonials from '@/components/Testimonials';
import ProjectCard from '@/components/ProjectCard';
import { CheckIcon, PhoneIcon } from '@/components/Icons';

export const metadata = pageMeta({
  title: 'Quality Home Renovations Geelong & Surf Coast | Renick Carpentry',
  description:
    'Premium home, bathroom, kitchen and outdoor renovations across Geelong and the Surf Coast. Work directly with Alister — trusted advice, careful planning and quality craftsmanship.',
  path: '/',
});

const homeFaqs = [
  { q: 'Who provides high-quality home renovations in Geelong?', a: 'Renick Carpentry is a locally owned renovation and carpentry business serving Geelong and the Surf Coast. It is run by Alister, a hands-on carpenter who works directly with homeowners on home, bathroom, kitchen and outdoor living renovations, with a strong focus on careful planning and high-quality finishing.' },
  { q: 'Can I discuss renovation ideas before I have detailed plans?', a: 'Yes. Many clients start with an idea, a few photos or a list of frustrations. Alister can help you shape that into a practical plan that suits your home, budget and expectations — or work from detailed plans if you already have them.' },
  { q: 'Can a carpenter coordinate other trades during a renovation?', a: 'Alister has a network of trusted trades and can discuss coordinating them as part of your renovation. Plumbing, electrical and other regulated work is always carried out by appropriately licensed professionals.' },
  { q: 'Who renovates outdoor entertaining areas on the Surf Coast?', a: 'Renick Carpentry plans and builds decks, alfresco areas and outdoor entertaining spaces across the Surf Coast and Geelong, choosing materials and details suited to coastal conditions.' },
  { q: 'How do I choose a trusted local renovation carpenter?', a: 'Look for someone who listens, explains trade-offs honestly, is clear about scope and who does what, can show genuine examples of their finishing work, and will be personally involved. Our guide on choosing a renovation carpenter covers the questions worth asking.' },
];

const reasons = [
  { title: 'Exceptional craftsmanship', body: 'Careful carpentry and precise finishing — the details you notice every day long after the renovation is done.' },
  { title: 'Finishes that look good and work well', body: 'Choices that are both beautiful and practical, made with an eye on how they will wear over time.' },
  { title: 'Trusted, honest advice', body: 'Straight answers about what will work, what may not, and where spending on quality makes the biggest difference.' },
  { title: 'Personally involved', body: 'Alister typically takes on one major renovation at a time, so he is on site and hands-on — not managing from a distance.' },
  { title: 'Ideas shaped into plans', body: 'Bring detailed drawings or just an idea. Alister helps turn possibilities into something practical and well considered.' },
  { title: 'Trades coordinated', body: 'A network of trusted trades, including plumbing and electrical, brought in at the right time when your project needs them.' },
];

export default function HomePage() {
  const projects = getProjects();
  const articles = getArticles().slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="on-dark bg-deep text-cream relative overflow-hidden">
        <div className="container-site grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center py-12 md:py-16 lg:py-24">
          <div>
            <p className="eyebrow">Renick Carpentry · {site.descriptor}</p>
            <h1 className="!text-cream mt-4">Quality Home Renovations in Geelong &amp; the Surf Coast</h1>
            <p className="mt-6 text-lg md:text-xl text-cream/90 max-w-xl">
              From the first idea to the finishing touches, Renick Carpentry delivers thoughtfully planned renovations, trusted advice and quality craftsmanship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/projects/" className="btn btn-primary">View Our Work</a>
              <a href="/contact/" className="btn btn-outline">Discuss Your Project</a>
            </div>
            <ul className="mt-10 grid sm:grid-cols-3 gap-4 text-[1rem] text-cream/95">
              {['Work directly with Alister', 'Plans or ideas welcome', 'Trusted trades coordinated'].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <PhotoSlot priority alt="Finished renovation interior in an established Geelong home" illustration="home" shot="Hero: wide shot of a finished renovation, natural light" ratio="5 / 4" tone="light" sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </section>

      {/* INTRO TO ALISTER */}
      <section className="container-site py-16 md:py-24 grid md:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center" aria-labelledby="meet-heading">
        <PhotoSlot alt="Alister, owner of Renick Carpentry, on a renovation site" illustration="portrait" shot="Portrait of Alister on site" ratio="4 / 5" tone="light" />
        <div>
          <p className="eyebrow mb-3">Meet Alister</p>
          <h2 id="meet-heading">A local craftsman who takes pride in the outcome</h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
          <div className="mt-6 space-y-4 text-lg">
            <p>A renovation should feel right for your home — not like someone else&rsquo;s idea forced into it. Renick Carpentry is run by Alister, a hands-on carpenter who works personally with every client.</p>
            <p>Some homeowners arrive with detailed drawings. Others have an idea and want an experienced perspective. Either way, Alister listens, gives honest practical advice, brings in trusted trades where they&rsquo;re needed and looks after the details that make a renovation feel complete.</p>
            <p>He typically takes on one major renovation at a time alongside smaller projects, so you deal with the person doing the work.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <a href="/about/" className="link-arrow">More about Alister</a>
            <a href="/our-approach/" className="link-arrow">How a project works</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-sand" aria-labelledby="services-heading">
        <div className="container-site py-16 md:py-24">
          <SectionIntro eyebrow="Services" title="Renovations for established homes" id="services-heading">
            <p>Focused on meaningful, quality-led renovation work across Geelong and the Surf Coast. Exact scope is always agreed after discussing your property and plans.</p>
          </SectionIntro>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
            <a href="/our-approach/" className="flex flex-col justify-center rounded-[4px] bg-forest text-cream p-8 no-underline hover:bg-forest-700 transition-colors on-dark">
              <span className="eyebrow">Planning &amp; coordination</span>
              <span className="font-heading text-[1.9rem] leading-tight mt-3">Renovation planning and trade coordination</span>
              <span className="mt-3 text-cream/90">Help turning ideas into a practical plan, and coordinating the trades needed to deliver it.</span>
              <span className="mt-5 link-arrow text-cream">See how it works</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-site py-16 md:py-24" aria-labelledby="work-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionIntro eyebrow="Our work" title="Featured renovation projects" id="work-heading">
            <p>Real projects, documented with the homeowner&rsquo;s permission — the brief, the challenges and the finished detail.</p>
          </SectionIntro>
          <a href="/projects/" className="btn btn-outline shrink-0">View Our Work</a>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* WHY */}
      <section className="on-dark bg-deep text-cream" aria-labelledby="why-heading">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow mb-3">Why Renick Carpentry</p>
          <h2 id="why-heading" className="!text-cream max-w-3xl">Not the biggest builder. A careful, personal one.</h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title}>
                <p className="font-heading text-gold text-[2rem] leading-none" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="!text-cream mt-3 !text-[1.6rem]">{r.title}</h3>
                <p className="mt-2 text-cream/90">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-site py-16 md:py-24" aria-labelledby="process-heading">
        <SectionIntro eyebrow="Our approach" title="A simple, personal process" id="process-heading">
          <p>Whether you bring a plan or an idea, every project follows the same thoughtful path.</p>
        </SectionIntro>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-forest pt-5">
              <p className="font-semibold text-muted text-[0.9375rem] tracking-wider uppercase">Step {i + 1}</p>
              <h3 className="mt-1 !text-[1.6rem]">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <a href="/our-approach/" className="mt-10 inline-block link-arrow">Read about our approach</a>
      </section>

      <Testimonials />

      {/* AREAS */}
      <section className="bg-sand" aria-labelledby="areas-heading">
        <div className="container-site py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="eyebrow mb-3">Service areas</p>
            <h2 id="areas-heading">Local to Geelong and the Surf Coast</h2>
            <span className="rule-gold mt-5" aria-hidden="true" />
            <p className="mt-6 text-lg">Renick Carpentry works with homeowners across Greater Geelong, the Surf Coast and nearby Bellarine towns. If your home is nearby but not listed, it&rsquo;s still worth getting in touch.</p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-lg font-semibold text-forest" aria-label="Suburbs and towns served">
            {allAreas.map((a) => <li key={a} className="border-b border-line pb-2">{a}</li>)}
          </ul>
        </div>
      </section>

      {/* GEO Q&A */}
      <section className="container-site py-16 md:py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
        <div>
          <p className="eyebrow mb-3">Good to know</p>
          <h2 className="!text-[2.5rem]">Common questions from homeowners</h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
          <p className="mt-4 text-muted">Can&rsquo;t see your question? <a href={site.phoneHref} className="font-semibold">Call Alister on {site.phoneDisplay}</a>.</p>
        </div>
        <FaqList faqs={homeFaqs} heading="Renovation questions, answered" hideHeading />
      </section>

      {/* LATEST ADVICE */}
      {articles.length > 0 && (
        <section className="border-t border-line" aria-labelledby="advice-heading">
          <div className="container-site py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionIntro eyebrow="Advice & inspiration" title="Planning a renovation?" id="advice-heading" />
              <a href="/insights/" className="link-arrow shrink-0">All articles</a>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {articles.map((a) => (
                <article key={a.slug} className="relative">
                  <p className="text-[0.9375rem] font-semibold text-muted uppercase tracking-wider">{a.category}</p>
                  <h3 className="mt-2 !text-[1.6rem]"><a href={`/insights/${a.slug}/`} className="no-underline after:absolute after:inset-0">{a.title}</a></h3>
                  <p className="mt-2 text-muted">{a.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand heading="Talk to Alister about your renovation" />
    </>
  );
}
