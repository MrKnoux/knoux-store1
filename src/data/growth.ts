export interface GrowthChannel {
  id: string;
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  overview: string;
  methodology: { step: string; title: string; description: string }[];
  deliverables: string[];
  kpiTargets: { metric: string; description: string }[];
  budgetThreshold: string;
}

export interface BudgetTier {
  range: string;
  recommendedChannels: string[];
  expectedTrajectory: string;
  operationalCadence: string;
  includedModules: string[];
}

export const growthChannels: GrowthChannel[] = [
  {
    id: 'gr-meta',
    slug: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    headline: 'Algorithmic Acquisition with Server-Side Precision',
    tagline: 'High-volume creative testing meets CAPI server-to-server data pipelines',
    overview: 'We dismantle the guesswork of Meta advertising. By pairing rapid creative hypothesis testing with server-side Conversion API (CAPI) event streams, we feed Meta’s machine learning models with pristine, un-sampled transactional data.',
    methodology: [
      { step: '01', title: 'Data Pipeline Instrumentation', description: 'Deploy server-side Meta Conversions API (CAPI) to bypass browser privacy blocks, ensuring 100% purchase and lead signal capture.' },
      { step: '02', title: 'Creative Velocity Protocol', description: 'Deploy 8 to 15 creative variants weekly (angles, hooks, visual formats) into structured testing sandboxes before graduating to scale campaigns.' },
      { step: '03', title: 'Audience Architecture & Suppression', description: 'Consolidate broad Advantage+ audiences while maintaining strict custom audience suppression to eliminate wasted retargeting spend on recent buyers.' },
      { step: '04', title: 'Liquidity Scaling & Bid Optimization', description: 'Systematically shift budget into top-performing creative winners using cost-cap and value-based bidding rules to protect blended margin.' },
    ],
    deliverables: [
      'Meta Business Manager Audit & Pixel/CAPI Re-architecture',
      'Weekly Creative Production (Static, Motion Graphics, UGC Editing)',
      'Real-Time Attribution Dashboard (Blended ROAS vs. In-Platform ROAS)',
      'Dynamic Product Ads (DPA) Catalog Feed Optimization',
    ],
    kpiTargets: [
      { metric: 'ROAS Lift', description: '+35% to +85% Blended Return on Ad Spend' },
      { metric: 'CAC Reduction', description: '-25% Sustained Reduction in Customer Acquisition Cost' },
      { metric: 'Event Match Quality', description: '> 9.0 / 10 Meta Signal Reliability Score' },
    ],
    budgetThreshold: '$3,000 / month ad spend minimum',
  },
  {
    id: 'gr-google',
    slug: 'google-ads',
    name: 'Google Ads (Search & Performance Max)',
    headline: 'High-Intent Demand Capture & Algorithmic Scaling',
    tagline: 'Exact-match intent harvesting combined with disciplined PMax asset structures',
    overview: 'Google Ads is not about buying clicks; it is about harvesting high-commercial-intent demand at profitable margins. We isolate brand, competitor, and unbranded high-intent searches while deploying audited Performance Max campaigns with strict negative keyword barriers.',
    methodology: [
      { step: '01', title: 'Negative Keyword Perimeter', description: 'Build exhaustive negative keyword lists (thousands of irrelevant, job-seeker, and zero-intent search terms) to prevent ad budget leakage.' },
      { step: '02', title: 'Single-Theme Search Ad Groups (STAG)', description: 'Structure granular search campaigns where keyword intent, responsive search ad copy, and landing page messaging align with 100% relevance.' },
      { step: '03', title: 'PMax Clean Asset Structuring', description: 'Decouple Performance Max asset groups by product category or customer value tier, providing unique video, copy, and audience signals for each.' },
      { step: '04', title: 'Offline Conversion Import (OCI)', description: 'Feed closed-won CRM deals back into Google Smart Bidding so the algorithm optimizes for actual cash revenue rather than raw form submissions.' },
    ],
    deliverables: [
      'Complete Google Ads Account Restructure & Bid Strategy Migration',
      'Value-Based Bidding & Offline Conversion Import (OCI) Setup',
      'Merchant Center Product Feed Optimization & Supplemental Feeds',
      'Competitor Auction Insights & Impression Share Monitoring',
    ],
    kpiTargets: [
      { metric: 'Conversion Rate', description: '> 4.5% across high-intent Search traffic' },
      { metric: 'Search Impression Share', description: '> 75% on core commercial queries' },
      { metric: 'Wasted Spend Purge', description: 'Immediate 30-40% reduction in irrelevant query costs' },
    ],
    budgetThreshold: '$2,500 / month ad spend minimum',
  },
  {
    id: 'gr-social',
    slug: 'social',
    name: 'Social Media & Performance Distribution',
    headline: 'Audience Multiplication & Narrative Dominance',
    tagline: 'Multi-platform social presence engineered for algorithmic reach and brand prestige',
    overview: 'Social presence without strategic distribution is invisible. We orchestrate short-form video production, LinkedIn thought leadership, and tactical platform distribution that builds institutional trust and feeds paid retargeting pools.',
    methodology: [
      { step: '01', title: 'Core Narrative Distillation', description: 'Identify your organization’s unfair engineering advantages, contrarian viewpoints, and proprietary methodologies to form editorial pillars.' },
      { step: '02', title: 'High-Cadence Short-Form Asset Machine', description: 'Transform long-form engineering discussions, product demos, and executive statements into high-impact vertical video clips (Reels, TikTok, Shorts).' },
      { step: '03', title: 'Executive B2B Positioning (LinkedIn)', description: 'Ghostwrite authoritative, data-backed insights for founders and key executives, establishing undeniable industry leadership.' },
      { step: '04', title: 'Organic-to-Paid Liquidity Loop', description: 'Identify organic content pieces that gain high retention and immediately boost them with paid spend to scale reach profitably.' },
    ],
    deliverables: [
      'Comprehensive Monthly Content Calendar (Visuals, Scripts, Captions)',
      '12 to 24 Tailored Video Assets formatted for Reels / Shorts / TikTok',
      'Founder / Executive Personal Brand Playbook',
      'Community Management & Inbound Enquiry Routing Protocol',
    ],
    kpiTargets: [
      { metric: 'Audience Reach', description: '3x to 8x Growth in Qualified Impressions' },
      { metric: 'Engagement Quality', description: '> 5.2% True Engagement Rate among target accounts' },
      { metric: 'Inbound Opportunities', description: 'Direct attribution of high-ticket client leads from social' },
    ],
    budgetThreshold: '$2,000 / month retainer minimum',
  },
  {
    id: 'gr-content',
    slug: 'content',
    name: 'Content & Inbound Authority',
    headline: 'High-Density Technical Publishing & Thought Leadership',
    tagline: 'In-depth research whitepapers, architecture teardowns, and programmatic guides',
    overview: 'Generic 500-word SEO articles no longer generate business value. We engineer authoritative, research-backed technical content, whitepapers, and customer case studies that solve complex technical problems and position your company as the definitive category benchmark.',
    methodology: [
      { step: '01', title: 'Topic Cluster & Intent Mapping', description: 'Map buyer journeys to high-value informational and transactional query clusters, prioritizing high-ACV decision-maker pain points.' },
      { step: '02', title: 'Subject-Matter Expert (SME) Teardowns', description: 'Extract proprietary knowledge directly from your technical staff through structured interviews and translate it into polished architectural essays.' },
      { step: '03', title: 'Interactive Tools & Calculators', description: 'Build embeddable calculators, cost estimators, and benchmarking tools that earn natural backlinks and high visitor dwell time.' },
      { step: '04', title: 'Repurposing & Syndication Engine', description: 'Atomize every flagship whitepaper into newsletters, slide decks, social threads, and podcast discussion guides.' },
    ],
    deliverables: [
      'Quarterly Flagship Research Report / Industry Benchmark Whitepaper',
      'Bi-Weekly In-Depth Technical Teardowns & Engineering Case Studies',
      'Lead Magnet Gated Asset Funnels with Automated Email Sequences',
      'Interactive Web Assessment or ROI Calculator Tool',
    ],
    kpiTargets: [
      { metric: 'Organic Traffic Quality', description: '> 3.5 Minute Average Page Dwell Time' },
      { metric: 'Lead Capture Rate', description: '> 8.5% Conversion on High-Intent Gated Assets' },
      { metric: 'Passive Backlink Velocity', description: 'Natural inbound citations from tier-1 industry domains' },
    ],
    budgetThreshold: '$3,500 / month retainer minimum',
  },
  {
    id: 'gr-seo',
    slug: 'seo',
    name: 'Technical SEO & Search Architecture',
    headline: 'Algorithmic Search Dominance through Engineering Rigor',
    tagline: 'Semantic entity graphs, Core Web Vitals optimization, and programmatic indexing',
    overview: 'Modern SEO is an engineering discipline. We treat search optimization as a software architecture problem: optimizing crawl efficiency, deploying deep JSON-LD schema graphs, perfecting Core Web Vitals, and architecting programmatic directory trees.',
    methodology: [
      { step: '01', title: 'Full Technical & Crawl Budget Audit', description: 'Eliminate redirect chains, resolve orphan URLs, optimize XML sitemaps, and configure server responses for lightning crawl velocity.' },
      { step: '02', title: 'Core Web Vitals Engineering', description: 'Optimize LCP, INP, and CLS down to green baselines by tuning server response times, eliminating script bloat, and stabilizing DOM layouts.' },
      { step: '03', title: 'Semantic Schema & Entity Graphs', description: 'Author dense JSON-LD microdata connecting Organizations, Products, SoftwareApplications, and Authors into an unambiguous knowledge graph.' },
      { step: '04', title: 'Programmatic Index Scaling', description: 'Generate high-quality, non-duplicate landing page architectures for multi-location, multi-feature, or multi-integration search matrices.' },
    ],
    deliverables: [
      'Comprehensive 60-Point Technical Crawl & Speed Remediation',
      'Custom Structured Data (JSON-LD) Microdata Implementation',
      'Internal PageRank Flow & Anchor Text Re-Architecture',
      'Ongoing Monthly Algorithmic Rank & Search Console Telemetry',
    ],
    kpiTargets: [
      { metric: 'Core Web Vitals', description: '100% Pass Rate on all production URLs' },
      { metric: 'Rank Positioning', description: 'Top 3 positions on primary high-intent commercial keywords' },
      { metric: 'Crawl Efficiency', description: 'Zero 4xx/5xx crawl errors, 99.8% indexing rate' },
    ],
    budgetThreshold: '$2,500 / month retainer minimum',
  },
];

export const budgetEstimatorTiers: Record<string, BudgetTier> = {
  starter: {
    range: '$2,500 – $6,000 / mo',
    recommendedChannels: ['Google Ads (High-Intent Search)', 'Technical SEO Foundation', 'Meta Retargeting'],
    expectedTrajectory: 'Fast capture of existing in-market demand; initial revenue acceleration within 30-45 days.',
    operationalCadence: 'Bi-weekly sprint check-ins, monthly executive reporting dashboard.',
    includedModules: [
      'Conversion tracking & CAPI instrumentation',
      'Primary intent search campaigns',
      'Initial Core Web Vitals remediation',
      'Lead capture funnel audit',
    ],
  },
  scale: {
    range: '$6,000 – $20,000 / mo',
    recommendedChannels: ['Meta Ads (Advantage+ & Creative Testing)', 'Google Ads (Search + PMax)', 'Social Video Engine', 'Content Authority'],
    expectedTrajectory: 'Rapid market expansion, new customer acquisition, creative angle diversification with sustained ROAS.',
    operationalCadence: 'Weekly tactical sprint calls, real-time shared Slack channel, continuous creative testing pipeline.',
    includedModules: [
      'Full Multi-Channel Funnel Orchestration',
      'Weekly Creative Asset Generation (10+ variations)',
      'Offline Conversion Import (OCI) CRM feedback',
      'Flagship Whitepaper / Technical Lead Magnet',
      'Custom Attribution Modeling',
    ],
  },
  enterprise: {
    range: '$20,000+ / mo',
    recommendedChannels: ['Global Paid Acquisition (Meta, Google, LinkedIn)', 'Programmatic SEO Mesh', 'B2B Executive Distribution', 'Dedicated Growth Engineering'],
    expectedTrajectory: 'Uncontested category leadership, international localized expansion, omnichannel audience dominance.',
    operationalCadence: 'Dedicated Growth Lead & Media Buyer, daily telemetry tracking, bi-weekly strategic roadmap reviews.',
    includedModules: [
      'Dedicated Custom Landing Page Engineering (Next.js Edge)',
      'Multi-Country Localization & Currency Ad Routing',
      'Bespoke Interactive Calculator & Assessment Funnel Development',
      'Custom Predictive LTV Modeling & Database Integration',
      'Executive Ghostwriting & Media Representation',
    ],
  },
};
