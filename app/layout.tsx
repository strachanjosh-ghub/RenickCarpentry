import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { businessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.descriptor} Geelong & Surf Coast | ${site.name}`, template: `%s | ${site.name}` },
  description: `${site.descriptor} across Geelong and the Surf Coast. ${site.tagline}`,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  icons: { icon: [{ url: '/favicon-32.png', sizes: '32x32' }, { url: '/favicon-192.png', sizes: '192x192' }], apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = { themeColor: '#03271F', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const analyticsDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" />
        {analyticsDomain && <script defer data-domain={analyticsDomain} src="https://plausible.io/js/script.outbound-links.tagged-events.js" />}
        <script defer src="/js/site.js" />
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={businessSchema()} />
        <Header />
        <main id="main" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
