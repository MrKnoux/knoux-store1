import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WordPressRegistry } from '@/components/WordPressRegistry';

export const metadata = pageMetadata(
  'Engineered WordPress Themes',
  'Minimalist Monospace, High-Throughput WooCommerce, and Headless Next.js starter themes engineered for zero layout shift and 100/100 Core Web Vitals.',
  '/wordpress/themes'
);

export default function WordPressThemesPage() {
  return (
    <main>
      <PageIntro
        index="02.1"
        label="WordPress / Themes"
        title="Engineered WordPress Themes"
        italic="Zero-bloat FSE templates, zero runtime JavaScript debt."
        description="Every KNOuX theme is built to absolute engineering specifications: deterministic font metric overrides, full block editor fidelity, and sub-100ms server response times on standard edge environments."
      />

      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">WORDPRESS REGISTRY:</span>
          <div className="subnav-links">
            <Link href="/wordpress">ALL</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/themes" className="is-current">THEMES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/plugins">PLUGINS</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/blocks">BLOCKS</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/starter-sites">STARTER SITES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/solutions">SOLUTIONS</Link>
          </div>
        </div>
      </section>

      <section className="wp-registry-anchor">
        <WordPressRegistry initialCategory="themes" />
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">CUSTOM THEME ARCHITECTURE</p>
        <h2>Need a bespoke WordPress theme built to your exact design system?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=theme-engineering" className="button-primary">
            <span>COMMISSION A THEME</span>
            <span>↗</span>
          </Link>
          <Link href="/wordpress" className="button-text">
            RETURN TO WORDPRESS OVERVIEW <span>←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
