import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WordPressRegistry } from '@/components/WordPressRegistry';

export const metadata = pageMetadata(
  'WordPress Starter Systems',
  'Turnkey institutional foundations: Enterprise Corporate, B2B SaaS, and Direct-to-Consumer Flagship starter sites deployed in days with enterprise compliance.',
  '/wordpress/starter-sites'
);

export default function WordPressStarterSitesPage() {
  return (
    <main>
      <PageIntro
        index="02.4"
        label="WordPress / Starter Sites"
        title="WordPress Starter Systems"
        italic="Pre-architected institutional foundations deployed in days, not months."
        description="Complete site architectures configured to modern compliance standards (WCAG 2.1 AA, multi-region routing, structured data schema, and SSO integration) ready for production deployment."
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
            <Link href="/wordpress/starter-sites" className="is-current">STARTER SITES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/solutions">SOLUTIONS</Link>
          </div>
        </div>
      </section>

      <section className="wp-registry-anchor">
        <WordPressRegistry initialCategory="starter-sites" />
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">TURNKEY DEPLOYMENT</p>
        <h2>Ready to deploy a pre-architected enterprise foundation?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=starter-site" className="button-primary">
            <span>REQUEST SYSTEM SETUP</span>
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
