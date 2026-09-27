import { PageIntro } from '@/components/PageIntro';
import { DevState, SignalRail } from '@/components/DivisionShell';
import { DivisionBridge, NextLink, SystemIndex, IndexRow, BlockHead } from '@/components/blocks';
import {
  starterSiteVerticals,
  wordpressCategories,
  wordPressGoals,
  wordPressItems,
  wordPressServices,
  type WordPressCategory,
} from '@/data/wordpress';
import { entityById } from '@/data/composer-rules';

/**
 * The five WordPress catalogue routes.
 *
 * Each one is a real page with real architecture and an honest empty registry.
 * The filters, the detail surface and the composer wiring all exist; the
 * catalogue they read from does not yet contain a release.
 */
export function WordPressCategoryPage({ category }: { category: WordPressCategory }) {
  const meta = wordpressCategories.find((entry) => entry.slug === category);
  if (!meta) return null;

  const count = wordPressItems.filter((item) => item.type === meta.type).length;

  return (
    <main id="main-content">
      <PageIntro
        index={meta.index}
        label="WordPress"
        title={meta.label}
        italic="catalogue."
        description={meta.intent}
      />
      <SignalRail division="wordpress" path={`/wordpress/${category}`} />

      <section className="shell" style={{ paddingTop: 'clamp(56px, 7vw, 110px)', paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <DevState
          title={`No ${meta.label.toLowerCase()} are published yet.`}
          detail={[
            {
              heading: 'Why this catalogue is empty',
              body: 'An entry is published when a release exists and a repository or download establishes it. Nothing in the KNOuX WordPress ecosystem has been released, so nothing is listed. Filling the page with plausible entries would misrepresent what has shipped.',
            },
            {
              heading: 'What the schema already supports',
              body: 'Version, compatibility, WooCommerce support, licence, documentation, demo, screenshots, update feed, related items and solution tags are all modelled. A release becomes a data change, not a redesign.',
            },
            {
              heading: 'What is available today',
              body: 'KNOuX performs WordPress work as engineering services: install, migration, maintenance, performance, security, backup and headless delivery. Those are listed on the overview and scoped individually.',
            },
          ]}
        >
          <p>
            This route is the {meta.label.toLowerCase()} registry of the KNOuX WordPress ecosystem. Its filters,
            detail surface and composer rules are wired to <code className="mono">wordPressItems</code>. The
            registry currently contains{' '}
            <strong className="mono">
              {count} {meta.type}
              {count === 1 ? '' : 's'}
            </strong>
            .
          </p>
          <p>
            The section below shows the structure that will be filled. Adding the first release requires no
            change to this page.
          </p>
        </DevState>
      </section>

      {category === 'starter-sites' ? <StarterSiteFilters /> : null}
      {category === 'solutions' ? <BundleSurface /> : null}
      {category === 'blocks' ? <BlockSurface /> : null}
      {category === 'plugins' ? <ExtensionSurface /> : null}
      {category === 'themes' ? <ThemeSurface /> : null}

      <section className="shell" style={{ paddingBottom: 'clamp(80px, 9vw, 150px)' }}>
        <DivisionBridge
          label="RELATED"
          title={
            category === 'themes' || category === 'blocks'
              ? 'Prefer a headless frontend?'
              : 'Need the whole site, not one part?'
          }
          body={
            category === 'themes' || category === 'blocks'
              ? 'WordPress can stay the editorial system while delivery moves to an edge-rendered frontend. KNOuX builds and maintains both sides of that split.'
              : 'Every WordPress engagement runs on the same engineering: a documented baseline, a restore path, and a named owner for each change.'
          }
          href={category === 'themes' || category === 'blocks' ? '/web' : '/wordpress#operate'}
          action={category === 'themes' || category === 'blocks' ? 'KNOuX Web' : 'Operating services'}
        />
        <div style={{ marginTop: 60 }}>
          <NextLink label="Other divisions" name="Web engineering" href="/web" />
        </div>
      </section>
    </main>
  );
}

function StarterSiteFilters() {
  return (
    <section className="shell" style={{ paddingBottom: 'clamp(70px, 8vw, 130px)' }}>
      <BlockHead
        code="VERTICALS"
        title="Vertical filters, ready"
        aside="The filter set is fixed ahead of the catalogue so that publishing a starter site is a data change. These are the verticals KNOuX intends to publish into."
      />
      <div className="finder-chips" style={{ marginTop: 26 }}>
        {starterSiteVerticals.map((vertical) => (
          <span key={vertical.id} className="tag">
            {vertical.label}
          </span>
        ))}
      </div>
      <p className="meta-row" style={{ marginTop: 24 }}>
        <span>0 of {starterSiteVerticals.length} verticals populated</span>
        <span>Filters render regardless of catalogue size</span>
      </p>
    </section>
  );
}

function BundleSurface() {
  return (
    <section className="shell" style={{ paddingBottom: 'clamp(70px, 8vw, 130px)' }}>
      <BlockHead
        code="COMPOSABLE"
        title="Bundles assemble from services"
        aside="A bundle is software, extensions and operating work configured for one outcome. Until KNOuX ships a file, a bundle composes from the services KNOuX already performs."
      />
      <div className="index-rows" style={{ marginTop: 26 }}>
        {wordPressServices.map((service) => (
          <IndexRow
            key={service.id}
            index={service.code}
            name={service.name}
            meta={service.summary}
            metaSecondary={service.activities.slice(0, 3).join(' / ')}
          />
        ))}
      </div>
    </section>
  );
}

function BlockSurface() {
  return (
    <section className="shell" style={{ paddingBottom: 'clamp(70px, 8vw, 130px)' }}>
      <BlockHead
        code="REGISTRY ROWS"
        title="The block registry surface"
        aside="When blocks are published they appear here as compact technical rows rather than marketplace cards: identifier, purpose, compatibility, status and capability tags."
      />
      <div className="registry" style={{ marginTop: 26 }}>
        <div className="registry-row" style={{ borderBottomColor: '#3d3e43' }}>
          <span className="registry-row__id">ID</span>
          <span className="registry-row__name">Name</span>
          <span className="registry-row__purpose">Purpose</span>
          <span className="registry-row__compat">Compatibility</span>
          <span className="label">Status</span>
          <span aria-hidden="true" />
        </div>
        <p className="finder-empty" style={{ borderTop: 0 }}>
          <strong>0 blocks registered.</strong>
          This row layout, the search, the keyboard navigation and the capability tags are in place. No block has
          been released, so no row is rendered.
        </p>
      </div>
    </section>
  );
}

function ExtensionSurface() {
  return (
    <section className="shell" style={{ paddingBottom: 'clamp(70px, 8vw, 130px)' }}>
      <BlockHead
        code="EXTENSION REGISTRY"
        title="Extensions, read as a registry"
        aside="Plugins are listed as technical rows with an identifier, a purpose, compatibility and a status. No pricing is shown because no plugin is released and no payment infrastructure exists."
      />
      <p className="finder-empty" style={{ borderTop: 0 }}>
        <strong>0 plugins registered.</strong>
        The registry supports free, premium, WooCommerce extensions, integrations, bundles, licences, versions and
        update feeds. None have been published.
      </p>
    </section>
  );
}

function ThemeSurface() {
  return (
    <section className="shell" style={{ paddingBottom: 'clamp(70px, 8vw, 130px)' }}>
      <BlockHead
        code="EDITORIAL GALLERY"
        title="The theme gallery surface"
        aside="Themes will be presented as an editorial gallery with a large preview, a vertical index, a category selector, a desktop and mobile switch and a details drawer — not marketplace cards."
      />
      <p className="finder-empty" style={{ borderTop: 0 }}>
        <strong>0 themes published.</strong>
        No theme is released, so no preview, demo link or download link is shown. Inventing a demo URL would
        produce a dead link on a page that claims to be a catalogue.
      </p>
    </section>
  );
}

export function WordPressGoalIndex() {
  return (
    <SystemIndex
      eyebrow="START WITH A GOAL"
      title={<>Select the outcome,<br />not the product.</>}
      statement="WordPress work is configured by objective. Each goal below resolves to real operating services and, where they exist, to verified catalogue items."
    >
      <div className="index-rows">
        {wordPressGoals.map((goal) => {
          const companions = goal.companionEntityIds
            .map((id) => entityById.get(id))
            .filter((entity): entity is NonNullable<typeof entity> => Boolean(entity));
          return (
            <IndexRow
              key={goal.id}
              index={goal.code}
              name={goal.label}
              meta={goal.statement}
              metaSecondary={
                companions.length
                  ? `With ${companions.map((entity) => entity.shortName).join(' / ')}`
                  : `${goal.serviceIds.length} service${goal.serviceIds.length === 1 ? '' : 's'}`
              }
              href="/wordpress#goals"
            />
          );
        })}
      </div>
    </SystemIndex>
  );
}
