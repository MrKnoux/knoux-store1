import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { businessSolutions } from '@/data/solutions';

export const metadata = pageMetadata(
  'Cross-Division Solutions',
  'Integrated enterprise packages: Start a Business, Launch a Product, High-Throughput Online Store, Digitize Operations, and Academy Platform.',
  '/solutions'
);

export default function SolutionsPage() {
  return (
    <main>
      <PageIntro
        index="06"
        label="Solutions"
        title="Cross-Division Business Solutions"
        italic="Objective-first packages uniting software, web systems, creative craft, and growth."
        description="Complex business transformations cannot be solved by a single discipline. Our solutions integrate brand identity, edge web engineering, server-side acquisition, and native desktop software into turnkey institutional packages."
      />

      {/* Solutions Master List */}
      <section className="section-shell solutions-master-section">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">INTEGRATED PACKAGES</p>
            <h2>Turnkey Institutional Blueprints</h2>
          </div>
          <p className="section-statement">
            Each solution is delivered as a coordinated sprint with deterministic milestones, eliminating coordination friction between separate agencies, developers, and media buyers.
          </p>
        </div>

        <div className="solutions-stack">
          {businessSolutions.map((sol, index) => (
            <article key={sol.id} className="solution-card">
              <div className="solution-card-header">
                <div className="sol-badge">
                  <span className="sol-code">SOL-SYS-0{index + 1}</span>
                  <span className="sol-category">{sol.category.toUpperCase()}</span>
                </div>
                <div className="sol-divisions">
                  {sol.integratedDivisions.map((div) => (
                    <span key={div} className="sol-div-pill">{div}</span>
                  ))}
                </div>
              </div>

              <div className="solution-card-body">
                <div className="sol-title-block">
                  <h3 className="sol-title">{sol.title}</h3>
                  <p className="sol-tagline">{sol.tagline}</p>
                  <p className="sol-overview">{sol.overview}</p>

                  <div className="sol-target">
                    <span className="section-micro-label">TARGET PROFILE</span>
                    <p>{sol.targetProfile}</p>
                  </div>

                  <div className="sol-impact-row">
                    {sol.expectedImpact.map((imp, impIdx) => (
                      <div key={impIdx} className="impact-box">
                        <span className="impact-metric">{imp.metric}</span>
                        <span className="impact-label">{imp.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Components Breakdown */}
                <div className="sol-components-block">
                  <span className="section-micro-label">INTEGRATED DIVISION DELIVERABLES</span>
                  <div className="sol-div-list">
                    {sol.includedComponents.map((comp, compIdx) => (
                      <div key={compIdx} className="comp-item">
                        <h4 className="comp-division-title">{comp.division}</h4>
                        <ul>
                          {comp.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phased Roadmap Strip */}
              <div className="solution-roadmap">
                <span className="section-micro-label">EXECUTION SPRINT ROADMAP</span>
                <div className="roadmap-phases-grid">
                  {sol.roadmap.map((phase) => (
                    <div key={phase.phase} className="phase-card">
                      <div className="phase-top">
                        <span className="phase-num">PHASE {phase.phase}</span>
                        <span className="phase-duration">{phase.duration}</span>
                      </div>
                      <h5>{phase.title}</h5>
                      <p>{phase.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="solution-card-footer">
                <Link
                  href={`/contact?scope=solution&package=${sol.slug}`}
                  className="button-primary"
                >
                  <span>COMMISSION {sol.title.toUpperCase()}</span>
                  <span>↗</span>
                </Link>
                <Link href="/build" className="button-text">
                  CUSTOMIZE IN COMPOSER <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">CUSTOM COMBINATIONS</p>
        <h2>Do not see your exact requirement listed?</h2>
        <div className="outro-actions">
          <Link href="/build" className="button-primary">
            <span>SYNTHESIZE IN KNOuX COMPOSER</span>
            <span>↗</span>
          </Link>
          <Link href="/contact" className="button-text">
            REQUEST CUSTOM CONSULTATION <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
