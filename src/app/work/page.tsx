import { PageIntro } from '@/components/PageIntro';
import { DevState } from '@/components/DivisionShell';
import { DivisionBridge, NextLink } from '@/components/blocks';
import { pageMetadata } from '@/lib/metadata';
import { softwareProducts } from '@/data/software';

export const metadata = pageMetadata(
  'Work',
  'Verified KNOuX project records. The archive is empty by evidence: no case study publishes until it can be documented to a checkable standard.',
  '/work',
);

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageIntro
        index="10"
        label="Work"
        title="The work"
        italic="speaks precisely."
        description="A home for documented systems, real constraints and outcomes that can be checked. Nothing is published here yet."
      />

      <section className="shell" style={{ paddingTop: 'clamp(50px, 6vw, 100px)', paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <DevState
          mark="EMPTY BY EVIDENCE"
          title="No case study meets the bar yet."
          detail={[
            {
              heading: 'The bar',
              body: 'A case study needs a real constraint, a decision that was genuinely difficult, and an outcome that can be verified. A screenshot and a percentage improvement is not a case study.',
            },
            {
              heading: 'What is not shown instead',
              body: 'No client logos, no testimonials, no review scores, no before-and-after metrics, no industry labels. Each of those would be invented rather than documented.',
            },
            {
              heading: 'Where the verifiable record is',
              body: 'The product universe publishes the systems KNOuX actually maintains, with each repository&rsquo;s own stated limits alongside its capabilities. That is the evidence this practice can stand behind today.',
            },
          ]}
        >
          <p>
            This page is deliberately empty. A work archive filled with unattributed screenshots and unattributed
            numbers is a common way for a site to imply a track record it does not have, and it would misrepresent
            the practice to anyone reading it carefully.
          </p>
          <p>
            The route, the layout and the disclosure are in place. When work is documented to a standard that can
            be checked, it publishes here.
          </p>
        </DevState>
      </section>

      <section className="shell" style={{ paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <span className="label label--signal">WHAT IS DOCUMENTED TODAY</span>
        <div className="index-rows" style={{ marginTop: 22 }}>
          {softwareProducts.map((product) => (
            <a key={product.id} className="index-row" href={`/products/${product.slug}`}>
              <span className="index-row__index">{product.code}</span>
              <span className="index-row__name">{product.name}</span>
              <span className="index-row__meta">
                <span>{product.tagline}</span>
                <span className="mono">
                  {product.capabilities.length} CAPABILITIES / {product.limitations.length} STATED LIMITS
                </span>
              </span>
              <span className="index-row__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="shell" style={{ paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <DivisionBridge
          label="ACROSS DIVISIONS"
          title="Want work done rather than read?"
          body="KNOuX takes on builds across every division. A conversation about scope comes before any figure."
          href="/contact"
          action="Contact KNOuX"
        />
        <div style={{ marginTop: 60 }}>
          <NextLink label="Institution" name="About KNOuX" href="/about" />
        </div>
      </section>
    </main>
  );
}
