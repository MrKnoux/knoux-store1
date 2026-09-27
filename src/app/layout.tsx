import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import './globals.css';

export const metadata: Metadata = { metadataBase: new URL('https://knoux.store'), title: { default: 'KNOuX — Engineering Digital Systems', template: '%s — KNOuX' }, description: 'KNOuX is a digital headquarters for software products and engineering systems.', robots: { index: true, follow: true } };

// Only verifiable facts: the institution's name, canonical URL and description.
// No invented awards, staff counts, locations, customers or claims.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KNOuX',
  url: 'https://knoux.store',
  description: 'KNOuX is a digital headquarters for software products and engineering systems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
