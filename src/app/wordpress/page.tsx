import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { WordPressRegistry } from '@/components/WordPressRegistry';

export const metadata = pageMetadata(
  'WordPress Division',
  'Enterprise WordPress themes, core plugins, Gutenberg block suites, starter sites, and decoupled headless architectures engineered without bloat.',
  '/wordpress'
);

export default function WordPressPage() {
  return (
    <main>
      <PageIntro
        index="02"
        label="WordPress"
        title="WordPress Engineering Ecosystem"
        italic="Build, extend, operate, and scale without legacy CMS bloat."
        description="We treat WordPress not as a fragile blog engine, but as an enterprise-grade content management API. Zero bloated page builders, zero jQuery runtime debt, 100/100 Core Web Vitals."
      />

      {/* Philosophy & Pillars */}
      <section className="section-shell wp-pillars-section">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">THE KNOuX STANDARD</p>
            <h2>WordPress Re-Architected from Bare Metal</h2>
          </div>
          <p className="section-statement">
            Over 40% of the web runs on WordPress, yet 95% of installations suffer from plugin bloat, unindexed MySQL queries, and sluggish response times. KNOuX re-engineers every layer—from block rendering to server-side telemetry.
          </p>
        </div>

        <div className="wp-pillars-grid">
          <div className="pillar-card">
            <span className="pillar-num">01</span>
            <h3>BUILD</h3>
            <p className="pillar-sub">Engineered Themes & Starter Systems</p>
            <p className="pillar-text">
              Full Site Editing (FSE) themes built with deterministic font metrics and zero runtime JavaScript. Instant layout stability with zero cumulative layout shift.
            </p>
            <Link href="/wordpress/themes" className="pillar-link">EXPLORE THEMES <span>→</span></Link>
          </div>

          <div className="pillar-card">
            <span className="pillar-num">02</span>
            <h3>EXTEND</h3>
            <p className="pillar-sub">Zero-Bloat Core Plugins & Blocks</p>
            <p className="pillar-text">
              Surgical plugins that optimize database query indexes, manage Redis object caches, and render responsive Gutenberg data matrices via pure SVG.
            </p>
            <Link href="/wordpress/plugins" className="pillar-link">EXPLORE PLUGINS <span>→</span></Link>
          </div>

          <div className="pillar-card">
            <span className="pillar-num">03</span>
            <h3>OPERATE</h3>
            <p className="pillar-sub">Zero-Trust Hardening & Headless APIs</p>
            <p className="pillar-text">
              Decouple your WordPress editorial dashboard from edge-hosted Next.js frontends or harden your monolithic installation with cryptographic SHA-256 integrity auditing.
            </p>
            <Link href="/wordpress/solutions" className="pillar-link">VIEW SOLUTIONS <span>→</span></Link>
          </div>

          <div className="pillar-card">
            <span className="pillar-num">04</span>
            <h3>GROW</h3>
            <p className="pillar-sub">Server-Side Telemetry & CAPI</p>
            <p className="pillar-text">
              Direct server-to-server dispatch for Meta Conversions API and Google GA4. Capture 100% of conversion data without browser cookie loss or ad-blocker suppression.
            </p>
            <Link href="/growth/meta-ads" className="pillar-link">GROWTH INTEGRATION <span>→</span></Link>
          </div>
        </div>
      </section>

      {/* Subroutes Quick Switcher */}
      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">DIRECT REGISTRIES:</span>
          <div className="subnav-links">
            <Link href="/wordpress/themes">THEMES</Link>
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

      {/* Master Registry Component */}
      <section className="wp-registry-anchor">
        <WordPressRegistry initialCategory="all" />
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">CUSTOM WORDPRESS DEPLOYMENT</p>
        <h2>Need a custom plugin, theme, or headless migration?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=wordpress" className="button-primary">
            <span>SCHEDULE ARCHITECTURE REVIEW</span>
            <span>↗</span>
          </Link>
          <Link href="/build" className="button-text">
            LAUNCH SOLUTION COMPOSER <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
