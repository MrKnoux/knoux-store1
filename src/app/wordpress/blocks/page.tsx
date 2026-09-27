import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WordPressRegistry } from '@/components/WordPressRegistry';

export const metadata = pageMetadata(
  'Gutenberg Block Suite',
  'High-performance Gutenberg blocks for technical matrices, SVG radar plots, responsive telemetry tables, and CLI code simulators with zero runtime library overhead.',
  '/wordpress/blocks'
);

export default function WordPressBlocksPage() {
  return (
    <main>
      <PageIntro
        index="02.3"
        label="WordPress / Blocks"
        title="Gutenberg Block Suite"
        italic="Native block editor components with zero frontend dependencies."
        description="Render complex technical matrices, multi-axis SVG capability radars, and interactive CLI terminals directly inside the standard WordPress Gutenberg editor."
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
            <Link href="/wordpress/blocks" className="is-current">BLOCKS</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/starter-sites">STARTER SITES</Link>
            <span className="sep">/</span>
            <Link href="/wordpress/solutions">SOLUTIONS</Link>
          </div>
        </div>
      </section>

      <section className="wp-registry-anchor">
        <WordPressRegistry initialCategory="blocks" />
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">CUSTOM BLOCK DEVELOPMENT</p>
        <h2>Need bespoke Gutenberg blocks tailored to your editorial team’s workflow?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=block-engineering" className="button-primary">
            <span>DISCUSS BLOCK SUITE</span>
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
