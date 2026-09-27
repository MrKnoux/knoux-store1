import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { webSystemTiers } from '@/data/services';

export const metadata = pageMetadata(
  'Web Systems Studio',
  'Next.js 16 App Router flagships, high-throughput commerce, custom web applications, headless architectures, and computational 3D WebGL experiences.',
  '/web'
);

export default function WebSystemsPage() {
  return (
    <main>
      <PageIntro
        index="03"
        label="Web Systems"
        title="Web Systems Studio"
        italic="Deterministic engineering for mission-critical digital interfaces."
        description="We engineer resilient digital platforms that do not crack under load. Built with Next.js 16, React 19, strict TypeScript, and edge-first caching—achieving zero layout shift and sub-200ms global TTFB."
      />

      {/* Systems Capability Matrix */}
      <section className="section-shell web-matrix-section">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">CAPABILITY MATRIX</p>
            <h2>What are you building?</h2>
          </div>
          <p className="section-statement">
            Select your architectural archetype. Every system we deploy includes automated CI/CD pipelines, cryptographic audit logs, and an ironclad 100/100 Core Web Vitals performance guarantee.
          </p>
        </div>

        <div className="systems-tier-list">
          {webSystemTiers.map((tier, index) => (
            <article key={tier.id} className="system-tier-card">
              <div className="tier-meta-bar">
                <span className="tier-code">ARCH-0{index + 1}{' // '}{tier.category.toUpperCase()}</span>
                <span className="tier-timeline">TIMELINE: {tier.typicalTimeline}</span>
              </div>

              <div className="tier-main-grid">
                <div className="tier-overview">
                  <h3 className="tier-title">{tier.title}</h3>
                  <p className="tier-tagline">{tier.tagline}</p>
                  <p className="tier-summary">{tier.summary}</p>

                  <div className="tier-ideal">
                    <span className="section-micro-label">IDEAL FOR</span>
                    <p>{tier.idealFor}</p>
                  </div>
                </div>

                <div className="tier-technical-specs">
                  {/* Architecture Grid */}
                  <div className="spec-block">
                    <span className="section-micro-label">FRONTEND RUNTIME</span>
                    <div className="spec-tags">
                      {tier.architecture.frontend.map((f) => (
                        <span key={f} className="spec-tag">{f}</span>
                      ))}
                    </div>
                  </div>

                  <div className="spec-block">
                    <span className="section-micro-label">BACKEND & DATA LAYER</span>
                    <div className="spec-tags">
                      {tier.architecture.backend.map((b) => (
                        <span key={b} className="spec-tag">{b}</span>
                      ))}
                    </div>
                  </div>

                  <div className="spec-block">
                    <span className="section-micro-label">INFRASTRUCTURE & EDGE</span>
                    <div className="spec-tags">
                      {tier.architecture.infrastructure.map((inf) => (
                        <span key={inf} className="spec-tag">{inf}</span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Guarantees */}
                  <div className="spec-block">
                    <span className="section-micro-label">GUARANTEED METRICS</span>
                    <div className="guarantees-list">
                      {tier.architecture.performanceGuarantees.map((p) => (
                        <div key={p} className="guarantee-item">
                          <span className="check-mark">✓</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliverables & Actions */}
              <div className="tier-footer">
                <div className="deliverables-preview">
                  <span className="section-micro-label">KEY DELIVERABLES:</span>
                  <div className="deliverables-pills">
                    {tier.deliverables.map((d, i) => (
                      <span key={i} className="deliv-pill">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="tier-cta-box">
                  <Link
                    href={`/contact?scope=web-systems&tier=${tier.slug}`}
                    className="button-primary"
                  >
                    <span>COMMISSION ARCHITECTURE</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="manifesto-section section-shell">
        <p className="eyebrow">OUR CODE COMMITMENT</p>
        <div>
          <h2>Zero Drift. Zero Debt. Zero Excuses.</h2>
          <p>
            We don’t cut corners with drag-and-drop website builders or bloated JavaScript dependencies. Every line of code shipped from KNOuX is strictly typed in TypeScript, checked against strict linting boundaries, and verified through automated end-to-end tests before touching production servers.
          </p>
        </div>
        <div className="manifesto-glyph" aria-hidden="true">K</div>
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">SOLUTION COMPOSITION</p>
        <h2>Need an architecture tailored to your unique technical constraints?</h2>
        <div className="outro-actions">
          <Link href="/build" className="button-primary">
            <span>OPEN KNOuX COMPOSER</span>
            <span>↗</span>
          </Link>
          <Link href="/contact" className="button-text">
            TALK TO AN ENGINEER <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
