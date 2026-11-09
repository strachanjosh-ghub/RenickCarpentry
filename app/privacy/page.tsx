import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = pageMeta({ title: 'Privacy Notice | Renick Carpentry', description: 'How Renick Carpentry collects, uses and protects the information you share through this website.', path: '/privacy/' });

export default function Privacy() {
  return (
    <section className="container-prose py-12 md:py-16">
      <Breadcrumbs items={[{ href: '/privacy/', label: 'Privacy' }]} />
      <h1 className="mt-8">Privacy notice</h1>
      <p className="mt-4"><span className="placeholder-flag">Draft — review before launch</span></p>
      <div className="prose-renick mt-8">
        <p>{site.name} respects your privacy. This notice explains what information this website collects and how it is used.</p>
        <h2>Information you give us</h2>
        <p>When you send an enquiry we collect the details you provide — such as your name, phone number, email address, the suburb of the property, project details and any photos you choose to upload. We use this information only to respond to your enquiry and to discuss and carry out your project.</p>
        <h2>How it is stored</h2>
        <p>Enquiries are delivered through our website host&rsquo;s form service and by email. We don&rsquo;t sell or share your information with third parties for marketing. If your project involves other trades, we&rsquo;ll only share the details they need, with your knowledge.</p>
        <h2>Website analytics</h2>
        <p>We may use privacy-friendly analytics that do not use cookies or collect personal information, to understand which pages are useful. No advertising trackers are used.</p>
        <h2>Accessing or correcting your information</h2>
        <p>You can ask us what information we hold about you, or ask us to correct or delete it, by emailing <a href={`mailto:${site.email}`}>{site.email}</a> or calling {site.phoneDisplay}.</p>
        <p><em>Last updated: November 2026.</em></p>
      </div>
    </section>
  );
}
