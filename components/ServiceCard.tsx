import type { Service } from '@/lib/services';
import PhotoSlot from './PhotoSlot';

export default function ServiceCard({ s, headingLevel = 3 }: { s: Service; headingLevel?: 2 | 3 }) {
  const H = (headingLevel === 2 ? 'h2' : 'h3') as 'h2' | 'h3';
  return (
    <article className="relative group flex flex-col bg-white/60 border border-line rounded-[4px] overflow-hidden hover:shadow-lg transition-shadow">
      <PhotoSlot alt={`${s.name} by Renick Carpentry`} illustration={s.illustration} ratio="16 / 10" hideFlag className="!rounded-none" />
      <div className="p-6 flex flex-col flex-1">
        <H className="!text-[1.75rem]"><a href={`/${s.slug}/`} className="no-underline text-forest after:absolute after:inset-0">{s.name}</a></H>
        <p className="mt-3 text-muted flex-1">{s.cardSummary}</p>
        <span className="mt-5 link-arrow text-forest" aria-hidden="true">Learn more</span>
      </div>
    </article>
  );
}
