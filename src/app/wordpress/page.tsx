import { PageIntro } from '@/components/PageIntro';
import { SignalRail } from '@/components/DivisionShell';
import { DivisionBridge, NextLink, RevealGroup } from '@/components/blocks';
import { WordPressGoalIndex } from '@/components/WordPressCatalog';
import { pageMetadata } from '@/lib/metadata';
import { wordPressItems, wordpressPillars, wordPressServices } from '@/data/wordpress';
import { TrackOnView } from '@/components/TrackOnView';

export const metadata = pageMetadata(
  'WordPress Ecosystem',
  'KNOuX WordPress: systems for the open web. Themes, blocks, starter sites, extensions and bundles, plus the operating work that keeps an install correct.',
  '/wordpress',
);

export default function WordPressPage() {
  return (
    <main id="main-content">
      <TrackOnView event={{ type: 'division_opened', division: 'wordpress', route: '/wordpress' }} />
      <PageIntro
        index="02"
        label="WordPress"
        title="Systems for"
        italic="the open web."
        description="A KNOuX ecosystem, not a listing. This division is organised by what a WordPress build has to do: author it, extend it, operate it, or grow it."
      />
      <SignalRail division="wordpress" path="/wordpress" />

      {/* Operating groups */}
      <section className="shell" id="operate" style={{ paddingTop: 'clamp(60px, 7vw, 120px)', paddingBottom: 'clamp(80px, 9vw, 150px)', scrollMarginTop: 80 }}>
        <RevealGroup>
          <div className="block-head">
            <div>
              <span className="label label--signal">ECOSYSTEM</span>
              <h2 className="block-head__title">
                Four groups,
                <br />
                one install.
              </h2>
            </div>
            <p className="block-head__aside">
              Everything in a WordPress engagement belongs to one of these. A build that only addresses the first
              group is unfinished.
            </p>
          </div>
        </RevealGroup>
        <div className="pillars" style={{ marginTop: 40 }}>
          {wordpressPillars.map((pillar) => (
            <div key={pillar.id} className="pillar" data-reveal>
              <span className="pillar__index">{pillar.index}</span>
              <h3>{pillar.label}</h3>
              <p>{pillar.statement}</p>
              <ul className="pillar__activities">
                {pillar.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
              {pillar.categoryRoute ? (
                <span className="pillar__link">SEE {pillar.label.toUpperCase()} CATALOGUE</span>
              ) : (
                <span className="pillar__link" style={{ color: '#6d6e70' }}>
                  PERFORMED AS A SERVICE
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <WordPressGoalIndex />

      {/* Catalogue surfaces */}
      <section className="shell" id="catalogues" style={{ paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <div className="block-head">
          <div>
            <span className="label label--signal">REGISTRY STATE</span>
            <h2 className="block-head__title">
              The catalogue
              <br />
              is empty.
            </h2>
          </div>
          <p className="block-head__aside">
            Every WordPress route below exists with its filters, index and detail surface wired to a registry. No
            KNOuX WordPress release has been published, so no item is listed.
          </p>
        </div>

        <div className="index-rows" style={{ marginTop: 40 }}>
          {[
            { code: 'WP-01', name: 'Themes', meta: 'Full site editing systems for editorial control.', href: '/wordpress/themes' },
            { code: 'WP-02', name: 'Plugins', meta: 'Extensions that add a capability or an integration.', href: '/wordpress/plugins' },
            { code: 'WP-03', name: 'Blocks', meta: 'Reusable Gutenberg components for technical layouts.', href: '/wordpress/blocks' },
            { code: 'WP-04', name: 'Starter Sites', meta: 'Pre-architected foundations by business vertical.', href: '/wordpress/starter-sites' },
            { code: 'WP-05', name: 'Bundles', meta: 'Software, extensions and operating work per outcome.', href: '/wordpress/solutions' },
          ].map((entry) => (
            <a key={entry.href} className="index-row" href={entry.href}>
              <span className="index-row__index">{entry.code}</span>
              <span className="index-row__name">{entry.name}</span>
              <span className="index-row__meta">
                <span>{entry.meta}</span>
                <span className="mono">0 PUBLISHED</span>
              </span>
              <span className="index-row__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Operating services */}
      <section className="shell" style={{ paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <div className="block-head">
          <div>
            <span className="label label--signal">OPERATING WORK</span>
            <h2 className="block-head__title">
              What KNOuX
              <br />
              performs today.
            </h2>
          </div>
          <p className="block-head__aside">
            These are engineering services rather than files, so they are available now. They carry no price and
            no duration; scope is agreed in conversation.
          </p>
        </div>
        <div className="index-rows" style={{ marginTop: 40 }}>
          {wordPressServices.map((service) => (
            <div key={service.id} className="index-row">
              <span className="index-row__index">{service.code}</span>
              <span className="index-row__name">{service.name}</span>
              <span className="index-row__meta">
                <span>{service.summary}</span>
                <span className="mono">{service.activities.slice(0, 3).join(' / ')}</span>
              </span>
              <span className="index-row__arrow" aria-hidden="true">
                ·
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell" style={{ paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <p className="meta-row" style={{ marginBottom: 30 }}>
          <span>REGISTRY: {wordPressItems.length} RELEASES</span>
          <span>SERVICES: {wordPressServices.length}</span>
          <span>GOALS: 5</span>
        </p>
        <DivisionBridge
          label="ACROSS DIVISIONS"
          title="WordPress rarely stands alone."
          body="An install usually sits inside a wider system: a storefront, a portal, a campaign. The Composer assembles those from the same registry this division publishes."
          href="/build"
          action="Open the Composer"
        />
        <div style={{ marginTop: 60 }}>
          <NextLink label="Next division" name="Web engineering" href="/web" />
        </div>
      </section>
    </main>
  );
}
