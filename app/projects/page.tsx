import { pageMeta } from '@/lib/seo';
import { getProjects } from '@/lib/content';
import { services } from '@/lib/services';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectCard from '@/components/ProjectCard';
import CtaBand from '@/components/CtaBand';

export const metadata = pageMeta({
  title: 'Our Work | Renovation Projects Geelong & Surf Coast | Renick Carpentry',
  description: 'Renovation projects by Renick Carpentry across Geelong and the Surf Coast — the brief, the challenges, the craftsmanship and the finished result, shared with homeowners’ permission.',
  path: '/projects/',
});

export default function ProjectsPage() {
  const projects = getProjects();
  const published = projects.filter((p) => p.status === 'published');
  return (
    <>
      <section className="container-site pt-10 pb-12 md:pt-14">
        <Breadcrumbs items={[{ href: '/projects/', label: 'Our Work' }]} />
        <h1 className="mt-8 max-w-4xl">Our work: renovation projects across Geelong &amp; the Surf Coast</h1>
        <span className="rule-gold mt-6" aria-hidden="true" />
        <p className="mt-6 text-xl max-w-3xl text-muted">Every project here is real and shared with the homeowner&rsquo;s permission. Each story covers what they wanted, the design decisions, the challenges along the way and the finishing details that make the result.</p>
        <nav aria-label="Browse by service" className="mt-8 flex flex-wrap gap-2">
          {services.map((s) => <a key={s.slug} href={`/${s.slug}/`} className="px-4 py-2 rounded-full border border-forest text-forest no-underline font-semibold text-[0.9375rem] hover:bg-forest hover:text-cream">{s.name}</a>)}
        </nav>
      </section>

      {published.length === 0 && (
        <section className="container-site pb-8">
          <div className="border-2 border-dashed border-[#A07A1F] bg-[#FFF8E1] rounded-[4px] p-6 md:p-8 max-w-4xl">
            <span className="placeholder-flag">Preview note</span>
            <p className="mt-3">Project stories are being documented. The cards below are <strong>templates</strong> showing the layout — they are hidden on the live site. On launch with no published projects, this page shows a short message inviting visitors to ask Alister about recent work.</p>
          </div>
        </section>
      )}

      <section className="container-site pb-20">
        {projects.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        ) : (
          <div className="bg-sand rounded-[4px] p-10 max-w-3xl">
            <h2 className="!text-[2rem]">Project stories are on their way</h2>
            <p className="mt-3 text-lg">Alister is documenting recent renovations with homeowners&rsquo; permission. In the meantime, he&rsquo;s happy to talk you through examples of his work that are relevant to your project.</p>
            <a href="/contact/" className="btn btn-primary mt-6">Talk to Alister</a>
          </div>
        )}
      </section>
      <CtaBand heading="Have a project in mind?" cta="Discuss Your Project" />
    </>
  );
}
