'use client';

import Link from 'next/link';
import { useId, useMemo, useState } from 'react';
import type { Product } from '@/data/products';

type ViewMode = 'topology' | 'matrix';

const QUICK_FILTERS = [
  'repair',
  'screen recording',
  'video',
  'clipboard',
  'organize files',
  'developer',
  'security',
  'encryption',
];

export function ProductUniverse({ products }: { products: readonly Product[] }) {
  const searchInputId = useId();
  const [query, setQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('All');
  const [activeNode, setActiveNode] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('topology');

  const disciplines = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.discipline));
    return ['All', ...Array.from(set)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesDiscipline = selectedDiscipline === 'All' || product.discipline === selectedDiscipline;
      if (!matchesDiscipline) return false;
      if (!q) return true;

      const searchableText = [
        product.name,
        product.discipline,
        product.family,
        product.tagline,
        product.statement,
        product.architecture || '',
        ...product.platforms,
        ...product.capabilities,
        ...product.technologies,
        ...product.keywords,
      ].join(' ').toLowerCase();

      return searchableText.includes(q);
    });
  }, [products, query, selectedDiscipline]);

  return (
    <section className="universe-container section-shell" aria-label="KNOuX Product Universe">
      {/* Central Discovery Experience */}
      <div className="finder-header">
        <div className="finder-meta">
          <span className="finder-label">COMPUTATIONAL TOPOLOGY</span>
          <span className="finder-status">VERIFIED SYSTEMS: {String(filteredProducts.length).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span>
        </div>

        <div className="finder-bar">
          <label htmlFor={searchInputId} className="finder-icon" aria-hidden="true">⌕</label>
          <input
            id={searchInputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="FIND A KNOuX SYSTEM (Search capabilities, platforms, technologies...)"
            className="finder-input"
            aria-label="Search verified KNOuX products, capabilities, and platforms"
          />
          {query && (
            <button
              type="button"
              className="finder-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search query"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Quick Keyword Suggestions */}
        <div className="finder-tags" role="group" aria-label="Quick search shortcuts">
          <span className="tag-intro">SYSTEM SIGNALS:</span>
          {QUICK_FILTERS.map((keyword) => (
            <button
              key={keyword}
              type="button"
              className={`tag-chip ${query.toLowerCase() === keyword ? 'is-active' : ''}`}
              onClick={() => setQuery(query.toLowerCase() === keyword ? '' : keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>

        {/* Family / Discipline Filter & View Mode Controls */}
        <div className="finder-controls">
          <div className="discipline-pills" role="group" aria-label="Filter by family discipline">
            {disciplines.map((discipline) => (
              <button
                key={discipline}
                type="button"
                className={`discipline-pill ${selectedDiscipline === discipline ? 'is-active' : ''}`}
                aria-pressed={selectedDiscipline === discipline}
                onClick={() => setSelectedDiscipline(discipline)}
              >
                {discipline.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="view-toggle" role="group" aria-label="Presentation mode">
            <button
              type="button"
              className={`toggle-btn ${viewMode === 'topology' ? 'is-active' : ''}`}
              onClick={() => setViewMode('topology')}
              aria-pressed={viewMode === 'topology'}
            >
              TOPOLOGY
            </button>
            <button
              type="button"
              className={`toggle-btn ${viewMode === 'matrix' ? 'is-active' : ''}`}
              onClick={() => setViewMode('matrix')}
              aria-pressed={viewMode === 'matrix'}
            >
              INDEX MATRIX
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: Computational Atlas / System Topology */}
      {viewMode === 'topology' && (
        <div className="topology-viewport" role="region" aria-label="System Topology Constellation">
          <div className="topology-radar">
            {/* Concentric Coordinate Rings */}
            <div className="radar-ring ring-outer" />
            <div className="radar-ring ring-mid" />
            <div className="radar-ring ring-inner" />
            <div className="radar-axis axis-horizontal" />
            <div className="radar-axis axis-vertical" />
            <div className="radar-axis axis-diagonal-1" />
            <div className="radar-axis axis-diagonal-2" />

            {/* Central KNOuX Core Node */}
            <div className="core-hub" tabIndex={0} role="region" aria-label="KNOuX Core Hub">
              <div className="core-hub-inner">
                <span className="core-hub-dot" />
                <span className="core-hub-name">KNOuX</span>
                <span className="core-hub-telemetry">CORE / 00</span>
              </div>
              <div className="core-hub-beacon" />
            </div>

            {/* Orbiting Product Nodes */}
            {products.map((product) => {
              const isFiltered = filteredProducts.some((p) => p.id === product.id);
              const angleRad = (product.topology.angleDeg * Math.PI) / 180;
              // Orbit 1: 30% radius, Orbit 2: 43% radius
              const radiusPercent = product.topology.orbit === 1 ? 32 : 44;
              const xPos = 50 + radiusPercent * Math.cos(angleRad);
              const yPos = 50 + radiusPercent * Math.sin(angleRad);

              return (
                <div
                  key={product.id}
                  className={`topology-node node-${product.id} ${isFiltered ? 'is-matched' : 'is-dimmed'} ${
                    activeNode?.id === product.id ? 'is-active' : ''
                  }`}
                  style={{ left: `${xPos}%`, top: `${yPos}%` }}
                  onMouseEnter={() => setActiveNode(product)}
                  onMouseLeave={() => setActiveNode(null)}
                  onFocus={() => setActiveNode(product)}
                  onBlur={() => setActiveNode(null)}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="node-link"
                    aria-label={`${product.name} — ${product.discipline}`}
                  >
                    <span className="node-marker" />
                    <span className="node-vector">{product.topology.vector}</span>
                    <span className="node-title">{product.name}</span>
                  </Link>

                  {/* Connecting Line to Core */}
                  <svg className="node-trace" aria-hidden="true">
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${xPos}%`}
                      y2={`${yPos}%`}
                      stroke="currentColor"
                      strokeDasharray="2 3"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Active Node Telemetry Overlay */}
          <div className="topology-sidebar" aria-live="polite">
            {activeNode ? (
              <div className="telemetry-card">
                <div className="telemetry-badge">
                  <span>VECTOR {activeNode.topology.vector}</span>
                  <span className={`status-pill status-${activeNode.status}`}>
                    {activeNode.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="telemetry-name">{activeNode.name}</h3>
                <p className="telemetry-discipline">{activeNode.discipline.toUpperCase()} • {activeNode.family}</p>
                <p className="telemetry-statement">{activeNode.statement}</p>

                <div className="telemetry-meta">
                  <div>
                    <span className="meta-key">PLATFORM</span>
                    <span className="meta-val">{activeNode.platforms[0]}</span>
                  </div>
                  {activeNode.version && (
                    <div>
                      <span className="meta-key">VERSION</span>
                      <span className="meta-val">v{activeNode.version}</span>
                    </div>
                  )}
                </div>

                <div className="telemetry-actions">
                  <Link href={`/products/${activeNode.slug}`} className="button-primary">
                    OPEN SYSTEM DOSSIER ↗
                  </Link>
                  {activeNode.liveUrl && (
                    <a
                      href={activeNode.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-text"
                    >
                      LIVE DEPLOYMENT ↗
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="telemetry-idle">
                <span className="telemetry-idle-icon">◈</span>
                <p className="telemetry-idle-title">TOPOLOGY TELEMETRY</p>
                <p className="telemetry-idle-desc">
                  Hover or focus any node in the system field to inspect architecture, verified capabilities, and platform runtime.
                </p>
                <div className="telemetry-idle-stats">
                  <span>8 ACTIVE VECTORS</span>
                  <span>ZERO HYPOTHETICAL CLAIMS</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mode 2 & Unified Matrix: Structured Engineered Systems Index */}
      <div className={`matrix-view ${viewMode === 'matrix' ? 'is-focused' : ''}`}>
        <div className="matrix-heading">
          <h2>ENGINEERED SYSTEM INDEX</h2>
          <span className="matrix-count">SHOWING {filteredProducts.length} VERIFIED SYSTEMS</span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="matrix-empty">
            <p>No verified KNOuX system matches &ldquo;{query}&rdquo;.</p>
            <p className="empty-hint">Try searching for &ldquo;repair&rdquo;, &ldquo;screen recording&rdquo;, &ldquo;video&rdquo;, &ldquo;clipboard&rdquo;, or &ldquo;developer&rdquo;.</p>
          </div>
        ) : (
          <div className="matrix-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="matrix-card">
                <div className="card-top">
                  <span className="card-index">K / {product.index}</span>
                  <span className={`card-status status-${product.status}`}>
                    {product.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="card-main">
                  <span className="card-discipline">{product.discipline.toUpperCase()}</span>
                  <h3 className="card-name">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="card-tagline">{product.tagline}</p>
                  <p className="card-statement">{product.statement}</p>
                </div>

                <div className="card-capabilities">
                  <span className="capabilities-label">VERIFIED CAPABILITIES</span>
                  <ul>
                    {product.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i}>{cap}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-tech">
                  {product.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <Link href={`/products/${product.slug}`} className="card-cta">
                    VIEW DOSSIER <span>↗</span>
                  </Link>
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-external"
                    >
                      LIVE URL ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
