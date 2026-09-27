import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/PageIntro';
import { SolutionComposer } from '@/components/SolutionComposer';

export const metadata = pageMetadata(
  'KNOuX Composer',
  'Natural-language and structured solution composer: synthesize software, WordPress, web systems, creative craft, and growth channels into an actionable institutional blueprint.',
  '/build'
);

export default function BuildPage() {
  return (
    <main>
      <PageIntro
        index="07"
        label="Composer"
        title="KNOuX Solution Composer"
        italic="Deterministic architectural synthesis powered by natural language intent."
        description="Type what your organization needs to build or scale. The KNOuX Composer parses your operational intent and generates an audited, cross-division technical blueprint with milestone timelines and native tool recommendations."
      />

      {/* Embedded Solution Composer */}
      <section className="composer-section-anchor">
        <SolutionComposer />
      </section>

      {/* Philosophy of Deterministic Composition */}
      <section className="manifesto-section section-shell">
        <p className="eyebrow">DETERMINISTIC BLUEPRINTING</p>
        <div>
          <h2>No Sales Fluff. Only Engineering Feasibility.</h2>
          <p>
            Traditional agency proposals take 3 weeks to compile and are stuffed with vague promises. The KNOuX Composer maps your plain-English requirements directly to verified technical stacks, realistic timeline bands, and concrete deliverables—ready for immediate execution.
          </p>
        </div>
        <div className="manifesto-glyph" aria-hidden="true">B</div>
      </section>

      {/* Outro Callout */}
      <section className="page-outro section-shell">
        <p className="eyebrow">DIRECT ENGINEERING CONSULTATION</p>
        <h2>Prefer to review your architecture directly with our team?</h2>
        <div className="outro-actions">
          <Link href="/contact" className="button-primary">
            <span>SCHEDULE STRATEGY SESSION</span>
            <span>↗</span>
          </Link>
          <Link href="/solutions" className="button-text">
            BROWSE PRE-BUILT SOLUTIONS <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
