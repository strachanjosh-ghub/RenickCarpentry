/**
 * PhotoSlot — renders a real photo when `src` is supplied, otherwise a clearly-flagged
 * branded placeholder (line illustration + "Photo to come" label).
 *
 * Real photos: put the original in /public/images/... and run `npm run images` to create
 * responsive WebP versions (name-640.webp, name-1024.webp, name-1600.webp). Then pass
 * src="/images/projects/my-project/hero.jpg" — this component picks up the variants.
 */
import type { ReactNode } from 'react';

export type Illustration = 'home' | 'bathroom' | 'kitchen' | 'deck' | 'joinery' | 'portrait' | 'detail' | 'before';

const RESPONSIVE_WIDTHS = [640, 1024, 1600];

function variants(src: string) {
  const base = src.replace(/\.(jpe?g|png|webp)$/i, '');
  return RESPONSIVE_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(', ');
}

type Props = {
  src?: string;
  alt: string;
  illustration?: Illustration;
  /** Shot guidance shown on placeholders, e.g. "Wide shot of finished kitchen". */
  shot?: string;
  ratio?: string; // CSS aspect-ratio, e.g. '4 / 3'
  className?: string;
  priority?: boolean;
  sizes?: string;
  tone?: 'dark' | 'light';
  hideFlag?: boolean;
};

export default function PhotoSlot({ src, alt, illustration = 'home', shot, ratio = '4 / 3', className = '', priority = false, sizes = '(min-width: 1024px) 50vw, 100vw', tone = 'dark', hideFlag = false }: Props) {
  if (src) {
    return (
      <img
        src={src}
        srcSet={variants(src)}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={`w-full h-full object-cover rounded-[4px] ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }
  const dark = tone === 'dark';
  return (
    <figure
      role="img"
      aria-label={`Placeholder image: ${alt}`}
      data-placeholder="true"
      className={`relative overflow-hidden rounded-[4px] ${dark ? 'bg-deep' : 'bg-sand'} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Art kind={illustration} dark={dark} />
      {!hideFlag && (
        <figcaption className="absolute left-3 bottom-3 right-3 flex flex-wrap items-center gap-2">
          <span className="placeholder-flag">Photo to come{shot ? ` · ${shot}` : ''}</span>
        </figcaption>
      )}
    </figure>
  );
}

function Art({ kind, dark }: { kind: Illustration; dark: boolean }) {
  const line = dark ? '#D9A54C' : '#063A2D';
  const soft = dark ? 'rgba(255,248,236,.28)' : 'rgba(6,58,45,.22)';
  const timber = '#BD8650';
  const common = { fill: 'none', stroke: line, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const softS = { ...common, stroke: soft, strokeWidth: 1.5 };
  let body: ReactNode;
  switch (kind) {
    case 'kitchen':
      body = (<>
        <path {...softS} d="M40 70h320M40 70v-30M360 70v-30" />
        <rect {...common} x="70" y="78" width="80" height="46" /><rect {...common} x="160" y="78" width="80" height="46" />
        <path {...common} d="M40 186h320" /><path d="M40 186h320v6H40z" fill={timber} opacity=".9" />
        <rect {...common} x="60" y="192" width="70" height="72" /><rect {...common} x="140" y="192" width="70" height="72" /><rect {...common} x="220" y="192" width="120" height="72" />
        <path {...common} d="M100 220h10M170 220h10M265 212h30" />
        <path {...common} d="M290 30v40M290 70c-14 0-20 10-20 16h40c0-6-6-16-20-16zM320 30v40M320 70c-14 0-20 10-20 16h40c0-6-6-16-20-16z" />
        <path {...softS} d="M250 160c0-14 24-14 24 0v26" />
      </>);
      break;
    case 'bathroom':
      body = (<>
        <path {...softS} d="M40 40h320M40 80h320M40 120h320M80 40v100M140 40v100M200 40v100M260 40v100M320 40v100" />
        <rect {...common} x="130" y="56" width="140" height="84" rx="4" />
        <path d="M100 168h200v8H100z" fill={timber} />
        <rect {...common} x="100" y="176" width="200" height="70" />
        <path {...common} d="M200 176v70M180 210h8M212 210h8" />
        <path {...common} d="M185 168c0-12 30-12 30 0M200 148v8" />
        <path {...common} d="M40 262h320" />
      </>);
      break;
    case 'deck':
      body = (<>
        <path {...common} d="M40 70h320M60 70v130M340 70v130M200 70v130" />
        <path {...softS} d="M60 82h280M60 94h280M60 106h280" />
        <path d="M40 200h320l30 60H10z" fill={timber} opacity=".85" />
        <path stroke={dark ? '#03271F' : '#F3E9D8'} strokeWidth="1.5" d="M60 200l-20 60M100 200l-12 60M140 200l-6 60M180 200v60M220 200v60M260 200l6 60M300 200l12 60M340 200l20 60" />
        <path {...common} d="M90 200v-40h50v40M90 176h50M230 160h70v8h-70zM240 168v32M290 168v32" />
        <path {...softS} d="M370 60c-10 20-6 40 0 60M24 60c10 20 6 40 0 60" />
      </>);
      break;
    case 'joinery':
      body = (<>
        <rect {...common} x="90" y="40" width="220" height="220" />
        <path {...common} d="M90 100h220M90 160h220M200 40v220" />
        <path d="M90 216h220v6H90z" fill={timber} />
        <path {...softS} d="M108 60v30M120 64v26M132 58v32M220 120h60M220 130h44M120 176c10-8 30-8 40 0" />
        <path {...common} d="M150 230l14 14 14-14-14-14z" />
        <path {...softS} d="M40 260h320" />
      </>);
      break;
    case 'portrait':
      body = (<>
        <g transform="translate(130 50) scale(.42)">
          <path d="M45 35H171C246 35 285 81 285 139C285 189 258 220 218 234L314 350H238L147 237H119V350H45Z" fill={dark ? '#FFF8EC' : '#063A2D'} />
          <path d="M120 100H168C197 100 215 115 215 139C215 162 197 176 168 176H120Z" fill={dark ? '#03271F' : '#F3E9D8'} />
          <path d="M47 76H119V350H47Z" fill={timber} /><path d="M138 233L194 233L290 349H234Z" fill={timber} />
          <path d="M130 220L150 240L131 259L112 240Z" fill={dark ? '#03271F' : '#063A2D'} stroke="#D9A54C" strokeWidth="5" />
        </g>
        <path {...softS} d="M60 250h280" />
      </>);
      break;
    case 'detail':
      body = (<>
        <path d="M60 60h120v200H60z" fill={timber} opacity=".9" />
        <path stroke={dark ? 'rgba(3,39,31,.5)' : 'rgba(6,58,45,.35)'} strokeWidth="1.5" fill="none" d="M80 70c6 60-6 120 0 180M110 70c-4 60 6 120 0 180M150 70c6 60-6 120 0 180" />
        <path {...common} d="M180 120h160M180 160h160M180 120v40" />
        <path {...common} d="M196 140l12 12 12-12-12-12z" />
        <path {...softS} d="M180 200h160M180 230h120" />
      </>);
      break;
    case 'before':
      body = (<>
        <path {...softS} d="M60 260L200 80l140 180M90 222h220M120 184h160M150 146h100" strokeDasharray="6 6" />
        <rect {...softS} x="160" y="190" width="80" height="70" strokeDasharray="6 6" />
      </>);
      break;
    case 'home':
    default:
      body = (<>
        <path {...common} d="M60 130L200 50l140 80" />
        <path {...common} d="M80 120v140h240V120" />
        <path {...softS} d="M80 150h240M80 170h240M80 190h240M80 210h240M80 230h240M80 250h240" />
        <rect x="175" y="180" width="50" height="80" fill={timber} />
        <rect {...common} x="105" y="160" width="46" height="50" /><rect {...common} x="249" y="160" width="46" height="50" />
        <path {...common} d="M128 160v50M105 185h46M272 160v50M249 185h46" />
        <path {...common} d="M40 260h320" />
      </>);
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full p-[6%]" aria-hidden="true" focusable="false">
      {body}
    </svg>
  );
}
