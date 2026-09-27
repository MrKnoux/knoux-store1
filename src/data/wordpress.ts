export interface WpItem {
  id: string;
  slug: string;
  category: 'themes' | 'plugins' | 'blocks' | 'starter-sites' | 'solutions';
  name: string;
  tagline: string;
  description: string;
  version: string;
  status: 'production' | 'active-development' | 'enterprise';
  techStack: string[];
  capabilities: string[];
  metrics: { label: string; value: string }[];
  targetAudience: string;
}

export const wpCategories = [
  { slug: 'all', label: 'All WP Systems' },
  { slug: 'themes', label: 'Engineered Themes' },
  { slug: 'plugins', label: 'Core Plugins' },
  { slug: 'blocks', label: 'Gutenberg Blocks' },
  { slug: 'starter-sites', label: 'Starter Systems' },
  { slug: 'solutions', label: 'WP Engineering' },
] as const;

export const wpItems: WpItem[] = [
  // THEMES
  {
    id: 'wp-th-01',
    slug: 'knoux-mono',
    category: 'themes',
    name: 'KNOuX Mono',
    tagline: 'Minimalist Monospace Editorial FSE Theme',
    description: 'Engineered for technical engineering consultancies, research labs, and architectural publications. Zero bloat, zero runtime JavaScript dependencies, 100/100 Lighthouse performance baseline.',
    version: '2.4.0',
    status: 'production',
    techStack: ['Full Site Editing (FSE)', 'Tailwind Engine', 'Fluid Typography', 'Web Vitals Zero-Shift'],
    capabilities: [
      'Sub-50ms server response time on standard edge hosts',
      'Zero layout shift (CLS 0.000) with deterministic font metric overrides',
      'Native Gutenberg block styling with custom dark and technical color palettes',
      'Semantic HTML5 structure optimized for technical LLM and algorithmic crawlers',
    ],
    metrics: [
      { label: 'Lighthouse', value: '100 / 100' },
      { label: 'Bundle Size', value: '14.2 KB CSS' },
      { label: 'JS Runtime', value: '0.00 KB' },
    ],
    targetAudience: 'Engineering firms, technical publishers, software consultancies.',
  },
  {
    id: 'wp-th-02',
    slug: 'knoux-commerce',
    category: 'themes',
    name: 'KNOuX Commerce',
    tagline: 'High-Throughput WooCommerce Architecture Theme',
    description: 'High-performance storefront theme built for high-inventory catalogs and sub-millisecond cart interactions. Eliminates template bloat and integrates High-Performance Order Storage (HPOS).',
    version: '3.1.2',
    status: 'production',
    techStack: ['WooCommerce HPOS', 'Vanilla JS Micro-Cart', 'Native Web Components', 'Edge Cache Tiering'],
    capabilities: [
      'Instantaneous client-side faceted filtering without page reloads',
      'Decoupled cart drawer powered by native Web Components without jQuery dependencies',
      'Deterministic inventory telemetry and high-concurrency checkout resilience',
      'Direct integration with Meta Conversions API (CAPI) and Google GA4 server-side',
    ],
    metrics: [
      { label: 'Catalog TTFB', value: '< 180ms' },
      { label: 'Cart Latency', value: '12ms' },
      { label: 'Mobile Score', value: '98 / 100' },
    ],
    targetAudience: 'High-volume merchants, bespoke product studios, international retailers.',
  },
  {
    id: 'wp-th-03',
    slug: 'knoux-headless-starter',
    category: 'themes',
    name: 'KNOuX Headless WP',
    tagline: 'Decoupled WordPress & Next.js Hybrid Backbone',
    description: 'Bridges WordPress as an enterprise headless CMS with Next.js App Router frontends. Delivers live Gutenberg preview synchronization, On-Demand ISR webhooks, and type-safe WPGraphQL queries.',
    version: '1.8.0',
    status: 'production',
    techStack: ['Next.js 16', 'WPGraphQL', 'JWT Authentication', 'On-Demand ISR'],
    capabilities: [
      'Real-time Gutenberg block editor drafting with live Next.js preview window',
      'Automatic incremental static regeneration (ISR) triggered by WordPress post hooks',
      'GraphQL schema code generation for TypeScript frontends',
      'Enterprise edge caching via Cloudflare and Vercel edge networks',
    ],
    metrics: [
      { label: 'ISR Latency', value: '120ms' },
      { label: 'Preview Sync', value: 'Realtime' },
      { label: 'Type Coverage', value: '100% Strict' },
    ],
    targetAudience: 'Enterprises requiring editorial freedom with modern edge frontend performance.',
  },

  // PLUGINS
  {
    id: 'wp-pl-01',
    slug: 'knoux-speed-core',
    category: 'plugins',
    name: 'KNOuX Speed Core',
    tagline: 'Zero-Bloat Asset & Cache Optimization Engine',
    description: 'Low-level performance optimizer engineered to strip core WordPress overhead. Replaces heavy caching plugins with surgical transient caching, critical CSS generation, and database index tuning.',
    version: '4.2.1',
    status: 'production',
    techStack: ['Object Cache (Redis)', 'Critical CSS Engine', 'Asset Dependency Tree Pruning'],
    capabilities: [
      'De-queues unused core scripts and block library CSS on pages where they are not invoked',
      'Automated Redis object cache tiering with intelligent transient invalidation',
      'Database query analysis: highlights unindexed postmeta queries and slow queries',
      'Native AVIF / WebP image delivery with automated responsive srcset formulation',
    ],
    metrics: [
      { label: 'Asset Reduction', value: '-68% Payload' },
      { label: 'DB Query Load', value: '-54% CPU' },
      { label: 'TTFB Boost', value: '3.2x Faster' },
    ],
    targetAudience: 'High-traffic portals, media publishers, WooCommerce stores experiencing database locks.',
  },
  {
    id: 'wp-pl-02',
    slug: 'knoux-security-shield',
    category: 'plugins',
    name: 'KNOuX Security Shield',
    tagline: 'Hardened Zero-Trust Gateway & Audit Engine',
    description: 'Enterprise defense plugin replacing brittle security plugins. Provides granular REST API authorization, automated file integrity hashing, brute-force throttling, and cryptographic audit logs.',
    version: '2.9.0',
    status: 'production',
    techStack: ['Cryptographic SHA-256 Checksums', 'Rate Limiter', 'Zero-Trust REST Gateway'],
    capabilities: [
      'Blocks enumeration of usernames, XML-RPC exploits, and unauthorized REST endpoints',
      'Cryptographic baseline file hashing: detects core and plugin tampering in real time',
      'Dual-factor WebAuthn authentication support for administrative roles',
      'Webhook alerting pipeline for Slack, Telegram, and Discord incident notifications',
    ],
    metrics: [
      { label: 'Zero-Day Shield', value: '100% Coverage' },
      { label: 'Memory Footprint', value: '< 2.4 MB' },
      { label: 'Failed Auth Drop', value: 'Instant Drop' },
    ],
    targetAudience: 'Financial portals, corporate headquarters, compliance-sensitive websites.',
  },
  {
    id: 'wp-pl-03',
    slug: 'knoux-conversion-engine',
    category: 'plugins',
    name: 'KNOuX Conversion Engine',
    tagline: 'Privacy-First Server-Side Telemetry & CAPI Integration',
    description: 'Server-side marketing telemetry pipeline. Emits clean conversion events directly from WordPress backend hooks to Meta CAPI, Google Analytics 4, and TikTok without browser cookies or ad-blocker loss.',
    version: '1.5.0',
    status: 'production',
    techStack: ['Meta Conversions API', 'GA4 Measurement Protocol', 'Server-Side Async Queues'],
    capabilities: [
      'Bypasses iOS / Safari tracking restrictions via 100% server-to-server dispatch',
      'Deduplicates browser and server events using cryptographic transaction IDs',
      'Tracks checkout funnels, lead form submissions, and PDF downloads without client-side lag',
      'Strict GDPR/CCPA consent mode honoring with dynamic event masking',
    ],
    metrics: [
      { label: 'Event Match Quality', value: '9.4 / 10' },
      { label: 'Ad-Block Recovery', value: '+28% Conversions' },
      { label: 'Client Overhead', value: '0.00 KB' },
    ],
    targetAudience: 'DTC e-commerce operators, performance marketers, lead generation platforms.',
  },

  // BLOCKS
  {
    id: 'wp-bl-01',
    slug: 'knoux-blocks-grid',
    category: 'blocks',
    name: 'KNOuX Blocks: Data Grid',
    tagline: 'Technical Matrix & Telemetry Block Suite',
    description: 'A suite of lightweight, responsive Gutenberg blocks built for presenting complex technical specs, comparison tables, interactive KPI counters, and engineering architecture trees.',
    version: '2.0.1',
    status: 'production',
    techStack: ['React Block API', 'CSS Grid', 'Zero Frontend Library'],
    capabilities: [
      'Responsive tabular matrix with frozen column headers and mobile swipe cards',
      'Live metric KPI counter with accessible screen-reader live announcements',
      'Telemetry bar visualizations with percentage bars and comparative status pills',
      'Configurable column schemas with JSON import and export support',
    ],
    metrics: [
      { label: 'CSS Overhead', value: '3.8 KB' },
      { label: 'Accessibility', value: 'WCAG AAA' },
      { label: 'Render Delay', value: '0ms' },
    ],
    targetAudience: 'Technical documentation teams, SaaS marketing managers, institutional agencies.',
  },
  {
    id: 'wp-bl-02',
    slug: 'knoux-blocks-radar',
    category: 'blocks',
    name: 'KNOuX Blocks: Capability Radar',
    tagline: 'Dynamic Polygon & Skill Matrix Visualizer',
    description: 'Interactive SVG radar visualizer block allowing editors to configure multi-axis performance ratings, technology maturity matrices, and institutional capabilities directly inside Gutenberg.',
    version: '1.4.0',
    status: 'production',
    techStack: ['Pure SVG', 'Web Standards', 'Native Gutenberg Attributes'],
    capabilities: [
      'Fully customizable 3 to 12-axis polygonal radar plots',
      'Client-side hover tooltips without third-party chart.js or D3 dependencies',
      'Dark mode and print styles built directly into SVG stroke definitions',
      'Direct synchronization with custom post types and ACF fields',
    ],
    metrics: [
      { label: 'Execution', value: 'Pure SVG' },
      { label: 'Load Impact', value: '0 Dependencies' },
      { label: 'Format', value: 'Vector Infinite' },
    ],
    targetAudience: 'Consultancies, research institutions, portfolio sites.',
  },

  // STARTER SITES
  {
    id: 'wp-ss-01',
    slug: 'starter-enterprise-corp',
    category: 'starter-sites',
    name: 'Enterprise Corporate Foundation',
    tagline: 'Turnkey Multi-Language Institutional Architecture',
    description: 'Pre-architected WordPress foundation designed for multinational organizations. Ships with corporate governance pages, investor relations modules, career board integration, and WCAG 2.1 AA compliance.',
    version: '3.0.0',
    status: 'production',
    techStack: ['WordPress VIP Standards', 'Multisite Ready', 'Polylang / WPML Architecture'],
    capabilities: [
      'Turnkey multi-region localization with localized routing and hreflang verification',
      'Granular role-based editorial workflow (Author, Fact-Checker, Legal Counsel, Publisher)',
      'High-security SSO integration (SAML 2.0 / Okta / Azure AD)',
      'Automated sitemap split architecture for sites exceeding 50,000 URLs',
    ],
    metrics: [
      { label: 'Deploy Time', value: '< 48 Hours' },
      { label: 'Compliance', value: 'WCAG 2.1 AA' },
      { label: 'Security Score', value: 'Grade A+' },
    ],
    targetAudience: 'Global enterprises, holding groups, institutional foundations.',
  },
  {
    id: 'wp-ss-02',
    slug: 'starter-b2b-saas',
    category: 'starter-sites',
    name: 'B2B SaaS Growth Foundation',
    tagline: 'Product-Led Growth & Documentation Architecture',
    description: 'Complete marketing site stack tailored for modern software companies. Features interactive pricing comparison matrices, customer case study modules, API changelog systems, and demo booking funnels.',
    version: '2.5.0',
    status: 'production',
    techStack: ['Full Site Editing', 'HubSpot / CRM Webhooks', 'Algolia Search Ready'],
    capabilities: [
      'Interactive tiered pricing calculator with monthly/annual toggle and feature breakdowns',
      'Case study CMS with quantitative KPI highlight cards and testimonial callouts',
      'Integration-ready lead capture forms with instant qualification and webhook routing',
      'Built-in structured schema (SoftwareApplication, Organization, FAQPage)',
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+34% Average' },
      { label: 'Deploy Window', value: '3 to 5 Days' },
      { label: 'SEO Schema', value: 'Automated JSON-LD' },
    ],
    targetAudience: 'B2B software founders, VC portfolio companies, technology startups.',
  },

  // SOLUTIONS
  {
    id: 'wp-sol-01',
    slug: 'wp-headless-migration',
    category: 'solutions',
    name: 'Decoupled & Headless WP Engineering',
    tagline: 'Full Migration from Monolithic WP to Next.js Frontend',
    description: 'Complete architectural transition: maintain WordPress as the editorial dashboard while routing the frontend through high-performance Next.js on edge infrastructure. Zero downtime guaranteed.',
    version: 'Service',
    status: 'enterprise',
    techStack: ['Next.js 16', 'WordPress Headless', 'WPGraphQL', 'Edge CDN'],
    capabilities: [
      'Full database audit and content extraction into clean GraphQL schemas',
      'Elimination of server-side PHP bottlenecks and shared hosting vulnerability surfaces',
      'Sub-100ms global page loads on Vercel or Cloudflare Edge networks',
      'Continuous integration pipeline for frontend and backend deployment',
    ],
    metrics: [
      { label: 'TTFB Improvement', value: '5x to 10x' },
      { label: 'Downtime', value: '0 Seconds' },
      { label: 'Security', value: 'Zero PHP Surface' },
    ],
    targetAudience: 'Enterprises outgrowing traditional WordPress hosting looking for edge speed.',
  },
  {
    id: 'wp-sol-02',
    slug: 'wp-enterprise-hardening',
    category: 'solutions',
    name: 'Enterprise Performance & Security Hardening',
    tagline: 'Deep Infrastructure Diagnostic, Optimization & Defense Audit',
    description: 'Direct code and server-level intervention for compromised or slow WordPress installations. We dissect slow queries, eliminate plugin bloat, configure Redis object caching, and install military-grade defensive headers.',
    version: 'Service',
    status: 'enterprise',
    techStack: ['MySQL Slow Log Analysis', 'Redis / Memcached', 'Nginx Microcaching', 'OWASP Top 10'],
    capabilities: [
      'Database query profiling: index missing keys and purge bloated autoload options',
      'Server configuration: HTTP/3, Brotli compression, strict Content-Security-Policy headers',
      'Removal of redundant plugins with clean native code implementations',
      'Automated disaster recovery scripts and offsite encrypted backup pipelines',
    ],
    metrics: [
      { label: 'Load Time Drop', value: '-65% Average' },
      { label: 'Vulnerability Fix', value: '100% Remediation' },
      { label: 'Audit Report', value: '45+ Page Dossier' },
    ],
    targetAudience: 'Publishers suffering from traffic spikes, hacked sites, or high server costs.',
  },
];
