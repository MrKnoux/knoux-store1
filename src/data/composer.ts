export interface ComposerRecommendation {
  title: string;
  category: string;
  summary: string;
  estimatedTimeline: string;
  confidenceScore: number;
  recommendedStack: {
    division: string;
    items: string[];
  }[];
  keyDeliverables: string[];
  suggestedProducts: string[];
  actionPath: string;
}

export const intentKeywords: Record<string, { category: string; weight: number; tags: string[] }> = {
  startup: { category: 'venture', weight: 3, tags: ['brand', 'web', 'ads', 'launch'] },
  venture: { category: 'venture', weight: 3, tags: ['brand', 'web', 'ads', 'launch'] },
  new: { category: 'venture', weight: 1, tags: ['brand', 'web'] },
  store: { category: 'commerce', weight: 4, tags: ['woocommerce', 'capi', 'ads', 'checkout'] },
  shop: { category: 'commerce', weight: 4, tags: ['woocommerce', 'capi', 'ads', 'checkout'] },
  ecommerce: { category: 'commerce', weight: 4, tags: ['woocommerce', 'capi', 'ads', 'checkout'] },
  sell: { category: 'commerce', weight: 3, tags: ['woocommerce', 'capi', 'ads'] },
  brand: { category: 'creative', weight: 3, tags: ['identity', 'typography', 'design-system'] },
  identity: { category: 'creative', weight: 4, tags: ['identity', 'typography', 'guidelines'] },
  design: { category: 'creative', weight: 2, tags: ['figma', 'ui-ux', 'design-system'] },
  ui: { category: 'creative', weight: 3, tags: ['ui-ux', 'interaction'] },
  ux: { category: 'creative', weight: 3, tags: ['ui-ux', 'prototypes'] },
  app: { category: 'application', weight: 3, tags: ['react', 'nextjs', 'database', 'portal'] },
  portal: { category: 'application', weight: 4, tags: ['react', 'rbac', 'database', 'auth'] },
  software: { category: 'application', weight: 3, tags: ['react', 'desktop', 'tools'] },
  internal: { category: 'operations', weight: 3, tags: ['smartorganizer', 'crypt', 'repair', 'portal'] },
  automate: { category: 'operations', weight: 4, tags: ['smartorganizer', 'crypt', 'repair'] },
  operations: { category: 'operations', weight: 3, tags: ['smartorganizer', 'crypt', 'repair', 'dashboard'] },
  files: { category: 'operations', weight: 2, tags: ['smartorganizer', 'crypt'] },
  security: { category: 'security', weight: 4, tags: ['crypt', 'hardening', 'zero-trust', 'audit'] },
  encrypt: { category: 'security', weight: 4, tags: ['crypt', 'zero-knowledge'] },
  speed: { category: 'performance', weight: 3, tags: ['speed-core', 'headless', 'hpos'] },
  performance: { category: 'performance', weight: 3, tags: ['speed-core', 'headless', 'core-web-vitals'] },
  fast: { category: 'performance', weight: 2, tags: ['speed-core', 'headless'] },
  wordpress: { category: 'wordpress', weight: 4, tags: ['fse', 'plugins', 'woocommerce', 'headless'] },
  wp: { category: 'wordpress', weight: 4, tags: ['fse', 'plugins', 'woocommerce'] },
  headless: { category: 'headless', weight: 4, tags: ['nextjs', 'wpgraphql', 'edge'] },
  ads: { category: 'growth', weight: 4, tags: ['meta', 'google', 'capi', 'pmax'] },
  marketing: { category: 'growth', weight: 3, tags: ['meta', 'google', 'seo', 'content'] },
  meta: { category: 'growth', weight: 4, tags: ['meta-ads', 'capi', 'advantage-plus'] },
  facebook: { category: 'growth', weight: 3, tags: ['meta-ads', 'capi'] },
  google: { category: 'growth', weight: 4, tags: ['google-ads', 'search', 'pmax'] },
  seo: { category: 'growth', weight: 4, tags: ['technical-seo', 'schema', 'core-web-vitals'] },
  content: { category: 'growth', weight: 3, tags: ['whitepapers', 'editorial', 'authority'] },
  course: { category: 'education', weight: 4, tags: ['lms', 'video', 'paywall', 'community'] },
  academy: { category: 'education', weight: 4, tags: ['lms', 'video', 'paywall', 'certification'] },
  lms: { category: 'education', weight: 4, tags: ['lms', 'video', 'gated'] },
  '3d': { category: '3d', weight: 4, tags: ['threejs', 'webgl', 'spatial'] },
  interactive: { category: '3d', weight: 2, tags: ['threejs', 'shaders'] },
};

export function evaluateIntent(query: string): ComposerRecommendation {
  const normalized = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter(Boolean);

  const scores: Record<string, number> = {
    venture: 0,
    commerce: 0,
    creative: 0,
    application: 0,
    operations: 0,
    security: 0,
    performance: 0,
    wordpress: 0,
    growth: 0,
    education: 0,
    '3d': 0,
  };

  for (const token of tokens) {
    if (intentKeywords[token]) {
      const match = intentKeywords[token];
      scores[match.category] = (scores[match.category] || 0) + match.weight;
    }
  }

  // Determine top categories
  const sortedCategories = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryCategory = sortedCategories[0][1] > 0 ? sortedCategories[0][0] : 'venture';

  if (primaryCategory === 'commerce') {
    return {
      title: 'High-Throughput Digital Commerce Architecture',
      category: 'E-Commerce Platform',
      summary: 'Tailored for high-volume transactions, sub-second cart updates, and robust server-side conversion telemetry.',
      estimatedTimeline: '6 to 9 Weeks',
      confidenceScore: Math.min(98, 75 + sortedCategories[0][1] * 4),
      recommendedStack: [
        { division: 'KNOuX WordPress & Web', items: ['KNOuX Commerce High-Performance Storefront', 'WooCommerce HPOS Integration', 'Micro-Cart Native Web Components'] },
        { division: 'KNOuX Growth', items: ['KNOuX Conversion Engine (Server-Side Meta CAPI + GA4)', 'Google Ads Shopping & Performance Max Feed Setup', 'Meta Advantage+ Catalog Retargeting'] },
        { division: 'KNOuX Creative', items: ['Direct-to-Consumer Visual Guidelines', 'High-Converting Product Detail Page UI Architecture'] },
      ],
      keyDeliverables: ['Sub-16ms Catalog Filtering', 'Stripe 1-Click Checkout Funnel', 'Real-Time Inventory Telemetry', 'Zero-Ad-Block Conversion Tracking'],
      suggestedProducts: ['KNOuX Commerce Theme', 'KNOuX Conversion Engine', 'KNOuX Crypt'],
      actionPath: '/contact?scope=commerce&source=composer',
    };
  }

  if (primaryCategory === 'application' || primaryCategory === 'operations' || primaryCategory === 'security') {
    return {
      title: 'Enterprise Internal Systems & Operations Suite',
      category: 'Software & Workflow Modernization',
      summary: 'Engineered to replace fragmented third-party tools with sovereign web portals and cryptographic workstation utilities.',
      estimatedTimeline: '8 to 12 Weeks',
      confidenceScore: Math.min(99, 78 + sortedCategories[0][1] * 4),
      recommendedStack: [
        { division: 'KNOuX Web Systems', items: ['Custom Web Application / Administrative Portal (React 19 + Node.js)', 'Role-Based Access Control (RBAC) with Corporate SSO', 'PostgreSQL Data Vault Architecture'] },
        { division: 'KNOuX Software Suite', items: ['KNOuX SmartOrganizer (Enterprise File Telemetry)', 'KNOuX Crypt (Zero-Knowledge AES-256-GCM Encryption)', 'KNOuX Repair (Proactive Workstation OS Diagnostics)'] },
        { division: 'KNOuX Creative', items: ['Obsidian High-Density Dashboard Design System', 'Keyboard-Driven Interaction Specs'] },
      ],
      keyDeliverables: ['Internal Mission-Control Web Dashboard', 'Automated File Classification Pipeline', 'Air-Gapped Cryptographic Encryption', 'Workstation Health Monitoring'],
      suggestedProducts: ['KNOuX SmartOrganizer', 'KNOuX Crypt', 'KNOuX Repair'],
      actionPath: '/contact?scope=operations&source=composer',
    };
  }

  if (primaryCategory === 'growth') {
    return {
      title: 'Algorithmic Growth & Performance Engineering',
      category: 'Performance Marketing & SEO',
      summary: 'Data-driven demand harvesting combining server-side tracking, aggressive creative testing, and technical search dominance.',
      estimatedTimeline: 'Continuous 90-Day Execution Sprints',
      confidenceScore: Math.min(97, 80 + sortedCategories[0][1] * 4),
      recommendedStack: [
        { division: 'KNOuX Growth (Paid Acquisition)', items: ['Meta Ads Advantage+ Testing Sandbox', 'Google Ads High-Intent Search & Clean PMax Structuring', 'Server-Side CAPI Telemetry Instrumentation'] },
        { division: 'KNOuX Growth (Search & Content)', items: ['Technical SEO Remediation & Core Web Vitals Optimization', 'JSON-LD Entity Graph Deployment', 'Authoritative In-Depth Technical Teardowns'] },
        { division: 'KNOuX Creative', items: ['High-Velocity Ad Creative Production (Static & Motion)', 'Dedicated High-Conversion Landing Page Templates'] },
      ],
      keyDeliverables: ['Server-Side Attribution Pipeline (100% Signal Capture)', 'Weekly Creative Testing Sprints (12+ assets/week)', 'Rank Positioning on Key Category Keywords', 'Blended ROAS/CAC Dashboard'],
      suggestedProducts: ['KNOuX Conversion Engine', 'KNOuX Speed Core'],
      actionPath: '/contact?scope=growth&source=composer',
    };
  }

  if (primaryCategory === 'education') {
    return {
      title: 'High-Prestige Academy & Knowledge Network',
      category: 'Education Platform',
      summary: 'Full-stack course management and membership architecture with sub-second video delivery and automated certification.',
      estimatedTimeline: '6 to 8 Weeks',
      confidenceScore: Math.min(96, 76 + sortedCategories[0][1] * 4),
      recommendedStack: [
        { division: 'KNOuX Web & WordPress', items: ['Custom LMS Architecture with Gated Video Streaming', 'Stripe Recurring Subscription & Cohort Pass Paywall', 'Automated Cryptographic Certificate Generator'] },
        { division: 'KNOuX Growth', items: ['Evergreen Masterclass Lead Funnel', 'Targeted Search Acquisition for Professional Certifications'] },
        { division: 'KNOuX Creative', items: ['Editorial Course Syllabus Design', 'Dark-Themed Student Community UI'] },
      ],
      keyDeliverables: ['Zero-Buffer Video Lesson Player', 'Interactive Student Progress Tracker', 'Automated PDF/Blockchain Certificate Dispatch', 'High-Converting Enrollment Funnel'],
      suggestedProducts: ['KNOuX Player X', 'KNOuX Crypt'],
      actionPath: '/contact?scope=education&source=composer',
    };
  }

  if (primaryCategory === '3d') {
    return {
      title: 'Computational 3D & Spatial Product Showcase',
      category: 'Interactive 3D / WebGL Experience',
      summary: 'Cutting-edge WebGL interactive physics and 3D configuration running at sustained 60 FPS on all modern devices.',
      estimatedTimeline: '5 to 7 Weeks',
      confidenceScore: Math.min(95, 78 + sortedCategories[0][1] * 4),
      recommendedStack: [
        { division: 'KNOuX Web (Computational 3D)', items: ['Three.js & React Three Fiber (R3F) Engine', 'Custom GLSL Shaders & Real-Time Lighting Physics', 'DRACO Compressed Geometry Streaming Pipeline'] },
        { division: 'KNOuX Creative', items: ['Spatial Narrative Choreography', 'Inertial Touch & Keyboard Control Grammar'] },
      ],
      keyDeliverables: ['Sustained 60 FPS on Mobile and Desktop', '< 1.8 MB Total Asset Footprint', 'Accessible Semantic DOM Fallback for Search Indexing'],
      suggestedProducts: ['KNOuX Forge', 'KNOuX ONE'],
      actionPath: '/contact?scope=3d&source=composer',
    };
  }

  // Default: Enterprise Inception / Holistic Flagship
  return {
    title: 'Integrated Institutional Digital Flagship',
    category: 'Holistic Enterprise Solution',
    summary: 'A unified digital flagship combining brand architecture, edge-rendered web systems, and high-precision acquisition funnels.',
    estimatedTimeline: '6 to 10 Weeks',
    confidenceScore: 92,
    recommendedStack: [
      { division: 'KNOuX Creative', items: ['Brand Identity Architecture & Design Tokens', 'Institutional Typographic Standards', 'UI/UX Frictionless Interaction Specs'] },
      { division: 'KNOuX Web & WordPress', items: ['Next.js 16 App Router Edge Flagship (or Decoupled Headless WP)', 'Zero-Shift Layout with 100/100 Core Web Vitals', 'Cloudflare Enterprise WAF & Security Shield'] },
      { division: 'KNOuX Growth', items: ['Meta & Google Conversion Tracking (CAPI)', 'High-Intent Demand Harvesting Search Campaigns', 'Technical SEO Semantic Knowledge Graph'] },
      { division: 'KNOuX Software', items: ['KNOuX Crypt (Data Security)', 'KNOuX SmartOrganizer (Internal Workflow Efficiency)'] },
    ],
    keyDeliverables: ['Turnkey Digital Headquarters Deployment', 'Lighthouse 100/100 Performance Guarantee', 'Server-Side Telemetry & Lead Funnel', 'Enterprise Grade Security & Audit Hashing'],
    suggestedProducts: ['KNOuX ONE', 'KNOuX Crypt', 'KNOuX Speed Core'],
    actionPath: '/contact?scope=holistic&source=composer',
  };
}
