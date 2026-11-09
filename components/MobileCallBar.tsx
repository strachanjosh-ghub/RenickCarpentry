import { site } from '@/lib/site';
import { PhoneIcon } from './Icons';

/** Sticky contact bar on phones/tablets. Hidden on large screens where the header shows the number. */
export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-deep border-t border-cream/20 on-dark" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="grid grid-cols-2 gap-2 p-2">
        <a href={site.phoneHref} className="btn btn-outline !min-h-[50px] !px-3 !text-base"><PhoneIcon /> Call Alister</a>
        <a href="/contact/" className="btn btn-primary !min-h-[50px] !px-3 !text-base">Enquire</a>
      </div>
    </div>
  );
}
