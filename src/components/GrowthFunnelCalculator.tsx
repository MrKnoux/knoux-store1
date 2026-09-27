'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AssetOption {
  id: string;
  name: string;
  recommendedFocus: string;
}

interface ObjectiveOption {
  id: string;
  name: string;
  kpi: string;
}

interface BudgetOption {
  id: string;
  range: string;
  allocation: { channel: string; pct: number }[];
  tierName: string;
  sprintCadence: string;
}

const assets: AssetOption[] = [
  { id: 'ecommerce', name: 'E-Commerce / DTC Brand', recommendedFocus: 'Server-side CAPI + Meta Advantage+ + Google Shopping' },
  { id: 'saas', name: 'B2B Software / SaaS', recommendedFocus: 'High-Intent Google Search + LinkedIn B2B + Technical Content' },
  { id: 'enterprise', name: 'High-Ticket Enterprise Services', recommendedFocus: 'Account-Based Search + Executive Positioning + SEO Schema' },
  { id: 'education', name: 'Course / Academy Platform', recommendedFocus: 'Evergreen Video Funnel + Retargeting + Lead Magnet Inbound' },
];

const objectives: ObjectiveOption[] = [
  { id: 'acquisition', name: 'Scale New Customer Acquisition', kpi: 'Target CAC & Blended ROAS' },
  { id: 'roas', name: 'Maximize ROAS & Margins', kpi: 'First-Order Contribution Margin' },
  { id: 'leadgen', name: 'High-Intent Qualified Lead Generation', kpi: 'Cost Per SQL / Demo Booking' },
  { id: 'authority', name: 'Brand Category Dominance', kpi: 'Share of Voice & Organic Traffic Dwell' },
];

const budgets: BudgetOption[] = [
  {
    id: 'b1',
    range: '$3,000 – $6,000 / mo',
    tierName: 'Precision Demand Capture',
    sprintCadence: 'Bi-Weekly Tactical Reviews',
    allocation: [
      { channel: 'Google High-Intent Search', pct: 45 },
      { channel: 'Meta Retargeting & Testing', pct: 35 },
      { channel: 'Technical SEO Baseline', pct: 20 },
    ],
  },
  {
    id: 'b2',
    range: '$6,000 – $18,000 / mo',
    tierName: 'Multi-Channel Velocity',
    sprintCadence: 'Weekly Agile Performance Sprints',
    allocation: [
      { channel: 'Meta Advantage+ Creative Sandbox', pct: 40 },
      { channel: 'Google Search & Clean PMax', pct: 35 },
      { channel: 'High-Cadence Social Video', pct: 15 },
      { channel: 'Technical Inbound Content', pct: 10 },
    ],
  },
  {
    id: 'b3',
    range: '$18,000+ / mo',
    tierName: 'Category Dominance Engine',
    sprintCadence: 'Daily Telemetry & Dedicated Media Buyer',
    allocation: [
      { channel: 'Global Meta & TikTok Paid Media', pct: 45 },
      { channel: 'Omnichannel Google Ads & YouTube', pct: 30 },
      { channel: 'Custom Edge Landing Pages', pct: 15 },
      { channel: 'Programmatic SEO Mesh', pct: 10 },
    ],
  },
];

export function GrowthFunnelCalculator() {
  const [selectedAsset, setSelectedAsset] = useState<string>('ecommerce');
  const [selectedObjective, setSelectedObjective] = useState<string>('acquisition');
  const [selectedBudget, setSelectedBudget] = useState<string>('b2');

  const currentAsset = assets.find((a) => a.id === selectedAsset) || assets[0];
  const currentObjective = objectives.find((o) => o.id === selectedObjective) || objectives[0];
  const currentBudget = budgets.find((b) => b.id === selectedBudget) || budgets[1];

  return (
    <div className="funnel-calc-container">
      <div className="calc-header">
        <span className="eyebrow">INTERACTIVE CAMPAIGN FUNNEL ESTIMATOR</span>
        <h3 className="calc-title">Configure Your Growth Vector</h3>
        <p className="calc-desc">
          Select your business model, growth goal, and media commitment to formulate an audited channel allocation and sprint roadmap.
        </p>
      </div>

      <div className="calc-interactive-grid">
        {/* Step 1: Asset */}
        <div className="calc-step-col">
          <span className="step-label">01 / TARGET ASSET</span>
          <div className="options-stack">
            {assets.map((a) => (
              <button
                key={a.id}
                className={`option-btn ${selectedAsset === a.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedAsset(a.id)}
              >
                <span className="option-title">{a.name}</span>
                <span className="option-sub">{a.recommendedFocus}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Objective */}
        <div className="calc-step-col">
          <span className="step-label">02 / PRIMARY OBJECTIVE</span>
          <div className="options-stack">
            {objectives.map((o) => (
              <button
                key={o.id}
                className={`option-btn ${selectedObjective === o.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedObjective(o.id)}
              >
                <span className="option-title">{o.name}</span>
                <span className="option-sub">Key KPI: {o.kpi}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Budget Bracket */}
        <div className="calc-step-col">
          <span className="step-label">03 / MONTHLY MEDIA SPEND</span>
          <div className="options-stack">
            {budgets.map((b) => (
              <button
                key={b.id}
                className={`option-btn ${selectedBudget === b.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedBudget(b.id)}
              >
                <span className="option-title">{b.range}</span>
                <span className="option-sub">{b.tierName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projection Output Dossier */}
      <div className="calc-result-dossier">
        <div className="result-meta-bar">
          <span className="result-code">PROJECTED SPRINT BLUEPRINT{' // '}{currentBudget.tierName.toUpperCase()}</span>
          <span className="result-cadence">{currentBudget.sprintCadence}</span>
        </div>

        <div className="result-grid">
          <div className="result-main">
            <h4 className="result-heading">Recommended Channel Capital Allocation</h4>
            <p className="result-summary">
              For a <strong>{currentAsset.name}</strong> targeting <strong>{currentObjective.name}</strong> at a <strong>{currentBudget.range}</strong> spend level:
            </p>

            {/* Allocation Visual Bars */}
            <div className="allocation-bars">
              {currentBudget.allocation.map((alloc) => (
                <div key={alloc.channel} className="alloc-item">
                  <div className="alloc-header">
                    <span className="alloc-channel">{alloc.channel}</span>
                    <span className="alloc-pct">{alloc.pct}%</span>
                  </div>
                  <div className="alloc-track">
                    <div className="alloc-fill" style={{ width: `${alloc.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-sidebar">
            <span className="section-micro-label">PRIMARY TELEMETRY COMMITMENTS</span>
            <ul className="commitments-list">
              <li>
                <span className="bullet-point">▸</span>
                <span>Server-Side CAPI & GA4 Setup (100% Signal Capture)</span>
              </li>
              <li>
                <span className="bullet-point">▸</span>
                <span>Ad-Spend Waste Suppression & Negative Keyword Firewall</span>
              </li>
              <li>
                <span className="bullet-point">▸</span>
                <span>Real-Time Blended Margin & LTV Attribution Reporting</span>
              </li>
            </ul>

            <div className="result-action">
              <Link
                href={`/contact?scope=growth&asset=${selectedAsset}&objective=${selectedObjective}&tier=${selectedBudget}`}
                className="button-primary"
              >
                <span>INITIATE GROWTH SPRINT</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
