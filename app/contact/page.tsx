import { pageMeta } from '@/lib/seo';
import { site, allAreas } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import EnquiryForm from '@/components/EnquiryForm';
import FaqList from '@/components/Faq';
import { PhoneIcon, MailIcon, PinIcon } from '@/components/Icons';

export const metadata = pageMeta({
  title: 'Contact Renick Carpentry | Renovations Geelong & Surf Coast',
  description: `Discuss your renovation with Alister. Call ${site.phoneDisplay}, email or send an enquiry with photos. Serving Geelong and the Surf Coast.`,
  path: '/contact/',
});

const faqs = [
  { q: 'Do I need a finished brief before I get in touch?', a: 'No. Tell Alister where the property is, the type of renovation you’re considering and what an ideal outcome looks like. Photos help, but you don’t need plans.' },
  { q: 'Do I have to share my budget?', a: 'No — it’s optional. A rough range can help Alister give more useful advice, but you can choose “Prefer not to say”.' },
  { q: 'Which areas do you cover?', a: `Geelong and the Surf Coast, including ${allAreas.slice(0, 6).join(', ')} and nearby Bellarine towns. If you’re close by but not listed, it’s still worth asking.` },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-site pt-10 md:pt-14 pb-6">
        <Breadcrumbs items={[{ href: '/contact/', label: 'Contact' }]} />
        <h1 className="mt-8 max-w-3xl">Start your renovation conversation</h1>
        <span className="rule-gold mt-6" aria-hidden="true" />
        <p className="mt-6 text-xl max-w-3xl text-muted">Tell Alister where the property is, the type of renovation you&rsquo;re considering, whether you already have plans, and what an ideal outcome looks like. Photos are helpful — but you don&rsquo;t need a finished brief to get in touch.</p>
      </section>
      <section className="container-site pb-20 grid lg:grid-cols-[1fr_22rem] gap-12 items-start">
        <div className="bg-white/70 border border-line rounded-[4px] p-6 md:p-10">
          <h2 className="!text-[2rem] mb-2">Send an enquiry</h2>
          <p className="text-muted mb-8">Fields marked * are required.</p>
          <EnquiryForm />
        </div>
        <aside className="space-y-6 lg:sticky lg:top-28" aria-label="Contact details">
          <div className="on-dark bg-deep text-cream rounded-[4px] p-7">
            <h2 className="!text-cream !text-[1.75rem]">Talk to Alister</h2>
            <p className="mt-2 text-cream/90">Prefer to talk? Call or email directly.</p>
            <a href={site.phoneHref} className="mt-5 flex items-center gap-3 text-cream text-2xl font-semibold no-underline hover:underline"><PhoneIcon className="w-6 h-6" /> {site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 text-cream no-underline hover:underline break-words"><MailIcon className="w-5 h-5 shrink-0" /> <span>{site.email.split('@')[0]}@<wbr />{site.email.split('@')[1]}</span></a>
            <p className="mt-5 text-[0.9375rem] text-cream/85">Alister is often on the tools during the day. If he can&rsquo;t answer, leave a message and he&rsquo;ll call you back.</p>
          </div>
          <div className="bg-sand rounded-[4px] p-7">
            <h2 className="!text-[1.6rem] flex items-center gap-2"><PinIcon className="w-6 h-6" /> Service area</h2>
            <p className="mt-3 text-muted">Geelong and the Surf Coast, including:</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 font-semibold text-forest">{allAreas.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </aside>
      </section>
      <section className="container-prose pb-20"><FaqList faqs={faqs} heading="Before you get in touch" /></section>
    </>
  );
}
