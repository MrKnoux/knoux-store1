import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { growthChannels } from '@/data/growth';

const channel = growthChannels.find((c) => c.slug === 'social')!;

export const metadata = pageMetadata(
  'Social Media & Performance Distribution',
  'Algorithmic short-form video production, executive LinkedIn thought leadership, and organic-to-paid distribution loops.',
  '/growth/social'
);

export default function SocialGrowthPage() {
  return (
    <main>
      <PageIntro
        index="05.3"
        label="Growth / Social"
        title="Social Media & Performance Distribution"
        italic="High-cadence short-form video and authoritative B2B executive positioning."
        description="We turn long-form engineering discussions, product demonstrations, and contrarian insights into high-retention video formats that multiply reach and feed paid retargeting funnels."
      />

      <section className="section-shell wp-subnav-section">
        <div className="subnav-bar">
          <span className="subnav-label">GROWTH CHANNELS:</span>
          <div className="subnav-links">
            <Link href="/growth">OVERVIEW</Link>
            <span className="sep">/</span>
            <Link href="/growth/meta-ads">META ADS</Link>
            <span className="sep">/</span>
            <Link href="/growth/google-ads">GOOGLE ADS</Link>
            <span className="sep">/</span>
            <Link href="/growth/social" className="is-current">SOCIAL</Link>
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
          <h2>Four Stages of Algorithmic Social Multiplication</h2>
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
              <span className="section-micro-label">ENGAGEMENT THRESHOLD</span>
              <p>{channel.budgetThreshold}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-outro section-shell">
        <p className="eyebrow">SOCIAL MULTIPLICATION</p>
        <h2>Ready to transform your technical output into an audience engine?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=growth&channel=social" className="button-primary">
            <span>START SOCIAL SPRINT</span>
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
