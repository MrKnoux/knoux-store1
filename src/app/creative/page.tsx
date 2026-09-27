import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { creativeDisciplines } from '@/data/services';

export const metadata = pageMetadata(
  'Creative Studio',
  'Brand identity systems, UI/UX interaction architecture, motion grammar, and editorial art direction governed by mathematical rigor and typographic restraint.',
  '/creative'
);

export default function CreativeStudioPage() {
  return (
    <main>
      <PageIntro
        index="04"
        label="Creative"
        title="Creative & Brand Architecture"
        italic="Mathematical precision, typographic restraint, and kinetic choreography."
        description="We believe brand identity and digital interfaces are not decorative fluff—they are structural signaling systems. We build enduring visual languages that communicate undisputed authority."
      />

      {/* Disciplines Section */}
      <section className="section-shell creative-disciplines-section">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">CREATIVE DISCIPLINES</p>
            <h2>Four Pillars of Form & Interaction</h2>
          </div>
          <p className="section-statement">
            Every identity and interface crafted by KNOuX is engineered to survive trend cycles. We fuse Swiss typographic tradition with computational digital ergonomics.
          </p>
        </div>

        <div className="disciplines-stack">
          {creativeDisciplines.map((item, idx) => (
            <article key={item.id} className="discipline-card">
              <div className="disc-header">
                <span className="disc-index">PILLAR 0{idx + 1}</span>
                <h3 className="disc-title">{item.title}</h3>
                <p className="disc-subtitle">{item.subtitle}</p>
              </div>

              <div className="disc-body-grid">
                <div className="disc-statement-col">
                  <p className="disc-statement">{item.statement}</p>

                  <div className="disc-principles">
                    <span className="section-micro-label">GOVERNING PRINCIPLES</span>
                    <ul>
                      {item.principles.map((pr, pIdx) => (
                        <li key={pIdx}>
                          <span className="principle-bullet">▪</span>
                          <span>{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="disc-artifacts">
                    <span className="section-micro-label">SYSTEM ARTIFACTS PRODUCED</span>
                    <div className="artifacts-pills">
                      {item.artifactsProduced.map((art, aIdx) => (
                        <span key={aIdx} className="art-pill">{art}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study Dossier */}
                <div className="disc-case-study">
                  <div className="case-study-badge">
                    <span className="cs-tag">CASE STUDY DOSSIER</span>
                    <span className="cs-client">{item.caseStudy.clientType}</span>
                  </div>

                  <div className="cs-section">
                    <span className="cs-label">THE CHALLENGE</span>
                    <p className="cs-text">{item.caseStudy.challenge}</p>
                  </div>

                  <div className="cs-section">
                    <span className="cs-label">THE EXECUTION</span>
                    <p className="cs-text">{item.caseStudy.execution}</p>
                  </div>

                  <div className="cs-impact-box">
                    <span className="cs-label">VERIFIED IMPACT</span>
                    <p className="cs-impact-text">{item.caseStudy.impact}</p>
                  </div>
                </div>
              </div>

              <div className="disc-footer">
                <Link
                  href={`/contact?scope=creative&discipline=${item.slug}`}
                  className="button-primary"
                >
                  <span>COMMISSION {item.title.toUpperCase()}</span>
                  <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Typographic Specimen & Token Philosophy */}
      <section className="manifesto-section section-shell">
        <p className="eyebrow">OUR DESIGN SYSTEM TOKEN PHILOSOPHY</p>
        <div>
          <h2>Near-Black Obsidian, Fluid Monospace, and Kinetic Restraint</h2>
          <p>
            Color is an amplifier of attention, not wallpaper. In the KNOuX design system, deep obsidian surfaces (<code>#08090a</code>) frame surgical typography. Violet (<code>#a18acb</code>) is preserved strictly for interactive energy states and critical telemetry beacons.
          </p>
        </div>
        <div className="manifesto-glyph" aria-hidden="true">C</div>
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">STUDIO ENGAGEMENT</p>
        <h2>Ready to redefine your brand’s visual and interaction architecture?</h2>
        <div className="outro-actions">
          <Link href="/contact?scope=creative" className="button-primary">
            <span>START A DESIGN SPRINT</span>
            <span>↗</span>
          </Link>
          <Link href="/build" className="button-text">
            EXPLORE COMPOSER <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
