import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import './globals.css';

export const metadata: Metadata = { metadataBase: new URL('https://knoux.store'), title: { default: 'KNOuX — Engineering Digital Systems', template: '%s — KNOuX' }, description: 'KNOuX is a digital headquarters for software products and engineering systems.', robots: { index: true, follow: true } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
