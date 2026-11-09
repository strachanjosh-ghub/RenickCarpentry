import { site, allAreas } from '@/lib/site';
import { services } from '@/lib/services';
import { PhoneIcon, MailIcon, PinIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-deep text-cream pb-24 lg:pb-0">
      <div className="container-site py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <img src="/brand/renick-horizontal-dark-web.svg" alt={site.name} width={1010} height={404} className="h-[64px] w-auto" />
          <p className="mt-5 font-heading text-2xl text-cream">{site.tagline}</p>
          <p className="mt-3 text-cream/90">{site.descriptor} across {site.region}, by {site.owner} — a hands-on local carpenter.</p>
        </div>
        <div>
          <h2 className="eyebrow !text-gold mb-4 !font-body">Services</h2>
          <ul className="space-y-2.5">
            {services.map((s) => <li key={s.slug}><a className="text-cream no-underline hover:underline" href={`/${s.slug}/`}>{s.name}</a></li>)}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow !text-gold mb-4 !font-body">Explore</h2>
          <ul className="space-y-2.5">
            <li><a className="text-cream no-underline hover:underline" href="/projects/">Our Work</a></li>
            <li><a className="text-cream no-underline hover:underline" href="/our-approach/">Our Approach</a></li>
            <li><a className="text-cream no-underline hover:underline" href="/about/">About Alister</a></li>
            <li><a className="text-cream no-underline hover:underline" href="/insights/">Advice &amp; Inspiration</a></li>
            <li><a className="text-cream no-underline hover:underline" href="/contact/">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow !text-gold mb-4 !font-body">Talk to Alister</h2>
          <ul className="space-y-3">
            <li><a className="flex items-center gap-2.5 text-cream font-semibold no-underline hover:underline" href={site.phoneHref}><PhoneIcon /> {site.phoneDisplay}</a></li>
            <li><a className="flex items-center gap-2.5 text-cream no-underline hover:underline break-words" href={`mailto:${site.email}`}><MailIcon className="w-5 h-5 shrink-0" /> <span>{site.email.split('@')[0]}@<wbr />{site.email.split('@')[1]}</span></a></li>
            <li className="flex items-start gap-2.5 text-cream/90"><PinIcon className="w-5 h-5 shrink-0 mt-1" /> <span>Serving {site.region}, {site.state}</span></li>
          </ul>
          <a href="/contact/" className="btn btn-primary mt-6">Discuss Your Project</a>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="container-site py-6 text-[0.9375rem] text-cream/85 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>Service areas include {allAreas.slice(0, -1).join(', ')} and {allAreas.at(-1)}.</p>
          <p className="shrink-0">© {year} {site.name} · <a href="/privacy/" className="text-cream">Privacy</a></p>
        </div>
      </div>
    </footer>
  );
}
