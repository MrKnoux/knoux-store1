import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { growthChannels } from '@/data/growth';
import { GrowthFunnelCalculator } from '@/components/GrowthFunnelCalculator';

export const metadata = pageMetadata(
  'Growth Division',
  'Algorithmic paid acquisition (Meta Advantage+, Google Ads Search & PMax), server-side CAPI telemetry, high-cadence short-form social, and technical SEO.',
  '/growth'
);

export default function GrowthPage() {
  return (
    <main>
      <PageIntro
        index="05"
        label="Growth"
        title="Growth & Performance Engineering"
        italic="Algorithmic acquisition, server-side attribution, and search dominance."
        description="We treat growth not as creative guesswork, but as a software optimization problem. By linking server-side conversion telemetry directly to advertising machine learning algorithms, we scale customer acquisition with surgical margin protection."
      />

      {/* Subroutes Navigation Bar */}
      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">GROWTH CHANNELS:</span>
          <div className="subnav-links">
            <Link href="/growth/meta-ads">META ADS</Link>
            <span className="sep">/</span>
            <Link href="/growth/google-ads">GOOGLE ADS</Link>
            <span className="sep">/</span>
            <Link href="/growth/social">SOCIAL</Link>
            <span className="sep">/</span>
            <Link href="/growth/content">CONTENT</Link>
            <span className="sep">/</span>
            <Link href="/growth/seo">TECHNICAL SEO</Link>
          </div>
        </div>
      </section>

      {/* 5 Channels Grid */}
      <section className="section-shell growth-channels-section">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">CHANNELS OF EXECUTION</p>
            <h2>Five Disciplines of Profitable Scale</h2>
          </div>
          <p className="section-statement">
            No vanity impressions. No manufactured metrics. Every dollar deployed across our growth channels is measured against real revenue and first-party margin contribution.
          </p>
        </div>

        <div className="growth-channels-grid">
          {growthChannels.map((channel, i) => (
            <article key={channel.id} className="channel-card">
              <div className="channel-top">
                <span className="channel-num">CH-0{i + 1}</span>
                <span className="channel-threshold">{channel.budgetThreshold}</span>
              </div>

              <div className="channel-body">
                <h3 className="channel-name">{channel.name}</h3>
                <p className="channel-headline">{channel.headline}</p>
                <p className="channel-overview">{channel.overview}</p>

                {/* KPI Targets */}
                <div className="channel-kpis">
                  <span className="section-micro-label">BENCHMARK TARGETS</span>
                  <div className="kpi-pills">
                    {channel.kpiTargets.map((k, kIdx) => (
                      <div key={kIdx} className="kpi-box">
                        <strong>{k.metric}</strong>
                        <small>{k.description}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="channel-footer">
                <Link href={`/growth/${channel.slug}`} className="button-text">
                  READ CHANNEL BLUEPRINT <span>→</span>
                </Link>
                <Link
                  href={`/contact?scope=growth&channel=${channel.slug}`}
                  className="channel-cta-link"
                >
                  DEPLOY CHANNEL ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Funnel & Budget Estimator */}
      <section className="section-shell growth-calculator-section">
        <GrowthFunnelCalculator />
      </section>

      {/* Honesty Manifesto: Why Typical Marketing Burns Capital */}
      <section className="manifesto-section section-shell">
        <p className="eyebrow">ATTRIBUTION INTEGRITY</p>
        <div>
          <h2>Why Browser Pixels Lie (and How CAPI Solves It)</h2>
          <p>
            Browser ad blockers and iOS 14.5+ privacy protocols drop up to 35% of standard web tracking events before they ever reach ad platforms. Traditional marketing agencies report on fragmented browser cookies. KNOuX instruments 100% server-to-server dispatch (Meta CAPI, GA4 Measurement Protocol, TikTok Events API), providing ad algorithms with clean, deterministic transaction records that lower CAC immediately.
          </p>
        </div>
        <div className="manifesto-glyph" aria-hidden="true">G</div>
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">GROWTH AUDIT</p>
        <h2>Ready to audit your advertising accounts and eliminate ad-spend leakage?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=growth-audit" className="button-primary">
            <span>REQUEST ACCOUNT AUDIT</span>
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
