import type { ProjectImage } from '@/lib/content';
import type { Illustration } from './PhotoSlot';
import PhotoSlot from './PhotoSlot';

/** Accessible before/after comparison: a native range input drives a CSS clip. Works with keyboard and touch. */
export default function BeforeAfter({ before, after, illustration = 'home' }: { before?: ProjectImage; after?: ProjectImage; illustration?: Illustration }) {
  return (
    <div className="ba" style={{ aspectRatio: '3 / 2' }}>
      <div className="absolute inset-0"><PhotoSlot src={before?.src} alt={before?.alt || 'Before'} illustration="before" ratio="3 / 2" className="!rounded-none h-full" hideFlag /></div>
      <div className="ba-after"><PhotoSlot src={after?.src} alt={after?.alt || 'After'} illustration={illustration} ratio="3 / 2" className="!rounded-none h-full" hideFlag /></div>
      <span className="ba-label left-3">Before</span><span className="ba-label right-3">After</span>
      <input type="range" min="0" max="100" defaultValue="50" aria-label="Before and after comparison: move to reveal more of the before or after photo" />
      <span className="ba-handle" aria-hidden="true" />
      {!before?.src && <span className="absolute bottom-3 left-3 placeholder-flag pointer-events-none">Before/after photos to come</span>}
    </div>
  );
}
