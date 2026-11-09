import { site, mainNav } from '@/lib/site';
import { services } from '@/lib/services';
import { PhoneIcon } from './Icons';

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-line" data-header>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="container-site flex items-center justify-between gap-4 h-[76px] lg:h-[92px]">
        <a href="/" className="shrink-0" aria-label={`${site.name} — home`}>
          <img src="/brand/renick-horizontal-light-web.svg" alt={`${site.name} — ${site.descriptor}`} width={1010} height={404} className="h-[46px] lg:h-[58px] w-auto" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2 text-[1.0625rem] font-semibold">
            {mainNav.slice(0, 5).map((item) =>
              item.href === '/services/' ? (
                <li key={item.href} className="relative group">
                  <a href={item.href} className="block px-3 py-2 text-ink no-underline hover:text-forest hover:underline" aria-haspopup="true">{item.label}</a>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-0 top-full pt-2 transition-opacity">
                    <ul className="w-80 bg-cream border border-line shadow-xl rounded-[4px] py-2">
                      {services.map((s) => (
                        <li key={s.slug}><a href={`/${s.slug}/`} className="block px-4 py-2.5 text-ink no-underline hover:bg-sand hover:text-forest">{s.name}</a></li>
                      ))}
                      <li className="border-t border-line mt-1 pt-1"><a href="/services/" className="block px-4 py-2.5 no-underline text-forest hover:bg-sand">All services</a></li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}><a href={item.href} className="block px-3 py-2 text-ink no-underline hover:text-forest hover:underline">{item.label}</a></li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-forest no-underline hover:underline whitespace-nowrap">
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <a href="/contact/" className="btn btn-primary !min-h-[48px] !py-2">Discuss Your Project</a>
        </div>

        <button type="button" className="lg:hidden btn btn-outline !min-h-[48px] !px-4" data-nav-toggle aria-expanded="false" aria-controls="mobile-nav">
          <span data-nav-label>Menu</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" className="site-nav-panel lg:hidden border-t border-line bg-cream max-h-[calc(100vh-76px)] overflow-y-auto">
        <ul className="container-site py-4 text-lg font-semibold">
          {mainNav.map((item) => (
            <li key={item.href} className="border-b border-line">
              <a href={item.href} className="block py-3.5 text-ink no-underline">{item.label}</a>
              {item.href === '/services/' && (
                <ul className="pb-3 pl-4 text-base font-medium">
                  {services.map((s) => (
                    <li key={s.slug}><a href={`/${s.slug}/`} className="block py-2 text-muted no-underline">{s.name}</a></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-4 flex flex-col gap-3">
            <a href={site.phoneHref} className="btn btn-outline"><PhoneIcon /> Call {site.phoneDisplay}</a>
            <a href="/contact/" className="btn btn-primary">Discuss Your Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
