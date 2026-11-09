import type { Faq } from '@/lib/services';
import JsonLd from './JsonLd';

/** Answer-first FAQ list. Emits FAQPage schema only when the answers are visible on the page. */
export default function FaqList({ faqs, heading = 'Frequently asked questions', schema = true, hideHeading = false }: { faqs: Faq[]; heading?: string; schema?: boolean; hideHeading?: boolean }) {
  return (
    <section aria-labelledby="faq-heading" className="faq">
      <h2 id="faq-heading" className={hideHeading ? 'sr-only' : 'mb-6'}>{heading}</h2>
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <div><p>{f.a}</p></div>
        </details>
      ))}
      {schema && (
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />
      )}
    </section>
  );
}
