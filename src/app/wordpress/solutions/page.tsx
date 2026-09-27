import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WordPressRegistry } from '@/components/WordPressRegistry';

export const metadata = pageMetadata(
  'WordPress Engineering Solutions',
  'Decoupled Next.js Headless WordPress migrations, enterprise database query profiling, and zero-trust security hardening services.',
  '/wordpress/solutions'
);

export default function WordPressSolutionsPage() {
  return (
    <main>
      <PageIntro
        index="02.5"
        label="WordPress / Solutions"
        title="WordPress Engineering Solutions"
        italic="Headless migrations, zero-downtime database tuning, and enterprise defense."
        description="When your organization outgrows shared hosting or generic agency maintenance, KNOuX engineers intervene directly at the MySQL, Nginx, PHP-FPM, and edge cache layers to eliminate bottlenecks permanently."
      />

      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">WORDPRESS REGISTRY:</span>
          <div className="subnav-links">
            <Link href="/wordpress">ALL</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/themes">THEMES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/plugins">PLUGINS</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/blocks">BLOCKS</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/starter-sites">STARTER SITES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/solutions" className="is-current">SOLUTIONS</Link>
          </div>
        </div>
      </section>

      <section className="wp-registry-anchor">
        <WordPressRegistry initialCategory="solutions" />
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">HEADLESS OR RECOVERY INQUIRY</p>
        <h2>Experiencing severe performance bottlenecks or security breaches?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=wp-emergency" className="button-primary">
            <span>REQUEST EMERGENCY DIAGNOSTIC</span>
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
