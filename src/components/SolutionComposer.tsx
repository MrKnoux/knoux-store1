'use client';

import { useState } from 'react';
import Link from 'next/link';
import { evaluateIntent, ComposerRecommendation } from '@/data/composer';

const presets = [
  { label: 'Launch New Software Venture', query: 'Launch a new enterprise software startup with brand identity, Next.js web platform, and Google Ads demand capture' },
  { label: 'High-Volume WooCommerce & CAPI', query: 'Custom high-throughput WooCommerce store with instant cart, Meta CAPI conversion engine, and sub-100ms TTFB' },
  { label: 'Enterprise Internal Ops & Security', query: 'Automate internal company operations, file telemetry, workstation maintenance, and zero-knowledge AES encryption' },
  { label: 'Academy Video Platform', query: 'Build high-speed video academy platform with membership paywall, student progress, and automated certification' },
  { label: 'Computational 3D WebGL', query: 'Interactive 3D WebGL spatial product experience running at 60 FPS with custom GLSL shaders' },
];

export function SolutionComposer() {
  const [query, setQuery] = useState<string>('Launch a new enterprise software startup with brand identity, Next.js web platform, and Google Ads demand capture');
  const recommendation: ComposerRecommendation = evaluateIntent(query);

  return (
    <div className="composer-container section-shell">
      {/* Input Section */}
      <div className="composer-input-card">
        <div className="composer-input-header">
          <span className="eyebrow">NATURAL LANGUAGE INTENT SYNTHESIZER</span>
          <span className="telemetry-badge">STATE: ACTIVE TELEMETRY</span>
        </div>

        <h3 className="composer-input-title">Describe what your organization needs to build or scale:</h3>
        
        <div className="composer-textarea-wrap">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. We need a high-performance headless commerce storefront with server-side Meta CAPI ads and custom packaging identity..."
            rows={3}
            className="composer-textarea"
            aria-label="Describe what you want to achieve"
          />
        </div>

        {/* Quick Presets */}
        <div className="composer-presets">
          <span className="presets-label">ARCHITECTURAL PRESETS:</span>
          <div className="presets-pills">
            {presets.map((p) => (
              <button
                key={p.label}
                className={`preset-btn ${query === p.query ? 'is-active' : ''}`}
                onClick={() => setQuery(p.query)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Synthesis Result Dossier */}
      <div className="composer-result-card">
        <div className="composer-result-header">
          <div className="rec-badge">
            <span className="rec-cat">{recommendation.category.toUpperCase()}</span>
            <span className="rec-score">{recommendation.confidenceScore}% MATCH CONFIDENCE</span>
          </div>
          <div className="rec-timeline">ESTIMATED WINDOW: {recommendation.estimatedTimeline}</div>
        </div>

        <div className="composer-result-body">
          <div className="rec-main">
            <h2 className="rec-title">{recommendation.title}</h2>
            <p className="rec-summary">{recommendation.summary}</p>

            {/* Recommended Stack Across Divisions */}
            <div className="rec-stack-block">
              <span className="section-micro-label">SYNTHESIZED ARCHITECTURE MATRIX</span>
              <div className="rec-stack-grid">
                {recommendation.recommendedStack.map((stack) => (
                  <div key={stack.division} className="stack-col">
                    <h4 className="stack-division-name">{stack.division}</h4>
                    <ul>
                      {stack.items.map((item, idx) => (
                        <li key={idx}>
                          <span className="bullet-point">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Deliverables & Products */}
          <div className="rec-sidebar">
            <div className="sidebar-group">
              <span className="section-micro-label">PROJECTED CORE DELIVERABLES</span>
              <ul className="rec-deliverables-list">
                {recommendation.keyDeliverables.map((deliv, i) => (
                  <li key={i}>
                    <span className="check-mark">✓</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-group">
              <span className="section-micro-label">SUGGESTED NATIVE SOFTWARE & PLUGINS</span>
              <div className="rec-products-tags">
                {recommendation.suggestedProducts.map((prod) => (
                  <span key={prod} className="prod-tag">{prod}</span>
                ))}
              </div>
            </div>

            <div className="rec-action-box">
              <Link
                href={`/contact?scope=composer&plan=${encodeURIComponent(recommendation.title)}&timeline=${encodeURIComponent(recommendation.estimatedTimeline)}`}
                className="button-primary rec-primary-btn"
              >
                <span>INITIATE THIS SYNTHESIZED BLUEPRINT</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
