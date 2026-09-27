import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { growthChannels } from '@/data/growth';

const channel = growthChannels.find((c) => c.slug === 'google-ads')!;

export const metadata = pageMetadata(
  'Google Ads Engineering',
  'High-intent Search single-theme ad groups, audited Performance Max asset structures, and offline conversion imports (OCI).',
  '/growth/google-ads'
);

export default function GoogleAdsPage() {
  return (
    <main>
      <PageIntro
        index="05.2"
        label="Growth / Google Ads"
        title="Google Ads Engineering"
        italic="High-intent demand harvesting and clean Performance Max asset groups."
        description="Eliminate budget leakage on irrelevant broad queries. We architect single-theme ad groups, negative keyword firewalls, and offline conversion imports that feed Smart Bidding with real bank-settled cash receipts."
      />

      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">GROWTH CHANNELS:</span>
          <div className="subnav-links">
            <Link href="/growth">OVERVIEW</Link>
            <span className="sep">/</span>
            <Link href="/growth/meta-ads">META ADS</Link>
            <span className="sep">/</span>
            <Link href="/growth/google-ads" className="is-current">GOOGLE ADS</Link>
            <span className="sep">/</span>
            <Link href="/growth/social">SOCIAL</Link>
            <span className="sep">/</span>
            <Link href="/growth/content">CONTENT</Link>
            <span className="sep">/</span>
            <Link href="/growth/seo">TECHNICAL SEO</Link>
          </div>
        </div>
      </section>

      <section className="section-shell channel-detail-section">
        <div className="channel-hero-block">
          <span className="eyebrow">METHODOLOGY PROTOCOL</span>
          <h2>Four Pillars of Search Arbitrage & Clean PMax</h2>
          <div className="methodology-grid">
            {channel.methodology.map((m) => (
              <div key={m.step} className="method-step-card">
                <span className="step-num">{m.step}</span>
                <h4>{m.title}</h4>
                <p>{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="channel-specs-grid">
          <div className="specs-col">
            <span className="section-micro-label">SYSTEM DELIVERABLES</span>
            <ul className="specs-list">
              {channel.deliverables.map((d, i) => (
                <li key={i}>
                  <span className="bullet-point">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="specs-col">
            <span className="section-micro-label">TARGET PERFORMANCE BENCHMARKS</span>
            <div className="kpi-vertical-stack">
              {channel.kpiTargets.map((k, i) => (
                <div key={i} className="kpi-target-box">
                  <strong>{k.metric}</strong>
                  <p>{k.description}</p>
                </div>
              ))}
            </div>
            <div className="threshold-callout">
              <span className="section-micro-label">BUDGET COMMITMENT</span>
              <p>{channel.budgetThreshold}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">GOOGLE ADS SPRINT</p>
        <h2>Ready to eliminate wasted spend on Google Ads?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=growth&channel=google-ads" className="button-primary">
            <span>SCHEDULE GOOGLE AUDIT</span>
            <span>↗</span>
          </Link>
          <Link href="/growth" className="button-text">
            BACK TO GROWTH OVERVIEW <span>←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
