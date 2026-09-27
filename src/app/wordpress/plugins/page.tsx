import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WordPressRegistry } from '@/components/WordPressRegistry';

export const metadata = pageMetadata(
  'Core WordPress Plugins',
  'Low-level cache optimizers, cryptographic zero-trust security plugins, and privacy-first server-side conversion tracking for Meta CAPI and Google GA4.',
  '/wordpress/plugins'
);

export default function WordPressPluginsPage() {
  return (
    <main>
      <PageIntro
        index="02.2"
        label="WordPress / Plugins"
        title="Core WordPress Plugins"
        italic="Surgical low-level utilities replacing bloated third-party dependencies."
        description="We build plugins designed to solve core platform bottlenecks: asset tree pruning, Redis object cache synchronization, SHA-256 integrity hashing, and server-to-server CAPI telemetry."
      />

      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">WORDPRESS REGISTRY:</span>
          <div className="subnav-links">
            <Link href="/wordpress">ALL</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/themes">THEMES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/plugins" className="is-current">PLUGINS</Link>
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
        <WordPressRegistry initialCategory="plugins" />
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">CUSTOM PLUGIN DEVELOPMENT</p>
        <h2>Need a custom REST API integration, CRM webhook, or payment gateway?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=plugin-engineering" className="button-primary">
            <span>COMMISSION A PLUGIN</span>
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
