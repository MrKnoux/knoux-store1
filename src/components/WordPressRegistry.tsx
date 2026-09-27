'use client';

import { useState } from 'react';
import Link from 'next/link';
import { wpCategories, wpItems, WpItem } from '@/data/wordpress';

export function WordPressRegistry({ initialCategory = 'all' }: { initialCategory?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<WpItem | null>(null);

  const filteredItems = wpItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const searchTarget = `${item.name} ${item.tagline} ${item.description} ${item.techStack.join(' ')} ${item.capabilities.join(' ')}`.toLowerCase();
    const matchesSearch = !searchQuery || searchTarget.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="wp-registry-wrapper section-shell">
      {/* Controls & Category Filter */}
      <div className="registry-controls">
        <div className="category-pills" role="tablist" aria-label="WordPress Categories">
          {wpCategories.map((cat) => (
            <button
              key={cat.slug}
              role="tab"
              aria-selected={selectedCategory === cat.slug}
              className={`cat-pill ${selectedCategory === cat.slug ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.slug)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="registry-search">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by capability, keyword, or stack..."
            aria-label="Filter WordPress components"
            className="registry-input"
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>CLEAR</button>
          )}
        </div>
      </div>

      {/* Registry Count & Status */}
      <div className="registry-status-bar">
        <span>SHOWING {filteredItems.length} OF {wpItems.length} WP ARCHITECTURES</span>
        <span className="status-note">STRICT CODING STANDARDS • ZERO RUNTIME BLOAT</span>
      </div>

      {/* Grid of Items */}
      <div className="registry-grid">
        {filteredItems.map((item, index) => (
          <article key={item.id} className="wp-card">
            <div className="wp-card-header">
              <div className="wp-card-badge">
                <span className="wp-category-tag">{item.category.toUpperCase()}</span>
                <span className="wp-version">v{item.version}</span>
              </div>
              <span className={`wp-status-pill ${item.status}`}>{item.status.replace('-', ' ').toUpperCase()}</span>
            </div>

            <div className="wp-card-body">
              <span className="wp-item-number">WP-SYS-0{index + 1}</span>
              <h3 className="wp-card-title">{item.name}</h3>
              <p className="wp-card-tagline">{item.tagline}</p>
              <p className="wp-card-desc">{item.description}</p>

              {/* Metrics Strip */}
              <div className="wp-metric-strip">
                {item.metrics.map((m) => (
                  <div key={m.label} className="wp-metric-box">
                    <span className="wp-metric-label">{m.label}</span>
                    <span className="wp-metric-value">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div className="wp-capabilities">
                <span className="section-micro-label">KEY CAPABILITIES</span>
                <ul>
                  {item.capabilities.slice(0, 3).map((cap, i) => (
                    <li key={i}>{cap}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="wp-tech-row">
                {item.techStack.map((tech) => (
                  <span key={tech} className="wp-tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="wp-card-footer">
              <button
                className="button-text wp-inspect-btn"
                onClick={() => setActiveItem(item)}
                aria-label={`Inspect full architecture for ${item.name}`}
              >
                INSPECT SPECIFICATION <span>→</span>
              </button>
              <Link
                href={`/contact?scope=wordpress&product=${item.slug}`}
                className="wp-deploy-btn"
              >
                REQUEST DEPLOYMENT
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Inspection Modal/Drawer */}
      {activeItem && (
        <div className="wp-modal-overlay" onClick={() => setActiveItem(null)}>
          <div
            className="wp-modal-sheet"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-wp-title"
          >
            <div className="wp-modal-top">
              <div>
                <span className="eyebrow">{activeItem.category.toUpperCase()} SPECIFICATION</span>
                <h2 id="modal-wp-title">{activeItem.name}</h2>
                <p className="modal-tagline">{activeItem.tagline}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setActiveItem(null)}
                aria-label="Close specification"
              >
                ESC ×
              </button>
            </div>

            <div className="wp-modal-content">
              <div className="modal-block">
                <span className="section-micro-label">ARCHITECTURAL OVERVIEW</span>
                <p className="modal-desc">{activeItem.description}</p>
              </div>

              <div className="modal-metrics-grid">
                {activeItem.metrics.map((m) => (
                  <div key={m.label} className="modal-metric-card">
                    <span className="m-label">{m.label}</span>
                    <span className="m-val">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="modal-block">
                <span className="section-micro-label">ALL ENGINEERED CAPABILITIES</span>
                <ul className="modal-capabilities-list">
                  {activeItem.capabilities.map((cap, i) => (
                    <li key={i}>
                      <span className="bullet-point">▸</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-block">
                <span className="section-micro-label">TECHNOLOGY & RUNTIME STACK</span>
                <div className="modal-stack-tags">
                  {activeItem.techStack.map((tech) => (
                    <span key={tech} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-block">
                <span className="section-micro-label">TARGET ENTERPRISE PROFILE</span>
                <p className="modal-audience">{activeItem.targetAudience}</p>
              </div>
            </div>

            <div className="wp-modal-actions">
              <Link
                href={`/contact?scope=wordpress&product=${activeItem.slug}`}
                className="button-primary"
                onClick={() => setActiveItem(null)}
              >
                <span>INITIATE DEPLOYMENT OR INTEGRATION</span>
                <span>↗</span>
              </Link>
              <button className="button-text" onClick={() => setActiveItem(null)}>
                CLOSE SPECIFICATION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
