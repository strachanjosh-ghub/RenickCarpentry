import type { Project } from '@/lib/content';
import { getService } from '@/lib/services';
import PhotoSlot from './PhotoSlot';

export default function ProjectCard({ p }: { p: Project }) {
  const s = getService(p.serviceSlug);
  return (
    <article className="relative group">
      <PhotoSlot src={p.heroImage?.src} alt={p.heroImage?.alt || p.title} illustration={s?.illustration || 'home'} shot={p.status === 'template' ? 'Project template' : undefined} ratio="4 / 3" tone="dark" />
      <p className="mt-5 text-[0.9375rem] font-semibold text-muted uppercase tracking-wider">{p.projectType} · {p.suburb}</p>
      <h3 className="mt-1 !text-[1.6rem]"><a href={`/projects/${p.slug}/`} className="no-underline after:absolute after:inset-0">{p.title}</a></h3>
      <p className="mt-2 text-muted">{p.summary}</p>
    </article>
  );
}
