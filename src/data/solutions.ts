export interface BusinessSolution {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  targetProfile: string;
  integratedDivisions: string[];
  includedComponents: {
    division: string;
    items: string[];
  }[];
  roadmap: { phase: string; title: string; duration: string; details: string }[];
  expectedImpact: { metric: string; label: string }[];
}

export const businessSolutions: BusinessSolution[] = [
  {
    id: 'sol-start',
    slug: 'start-a-business',
    title: 'Enterprise Inception Package',
    category: 'New Ventures & Spin-offs',
    tagline: 'From blank canvas to market-ready institutional authority in 6 weeks',
    overview: 'Launching a serious new enterprise requires more than an off-the-shelf template and a hasty logo. The Inception Package delivers a complete institutional foundation: authoritative visual identity, lightning-fast web infrastructure, conversion-tested funnels, and initial demand acquisition.',
    targetProfile: 'Founders, corporate spin-offs, and ambitious entrepreneurs launching market-defining ventures.',
    integratedDivisions: ['KNOuX Creative', 'KNOuX Web', 'KNOuX Growth', 'KNOuX Software'],
    includedComponents: [
      {
        division: 'KNOuX Creative',
        items: ['Complete Brand Identity System (Wordmark, Color Space, Typography)', 'Design System Tokens in Figma', 'Print & Digital Collateral Suite'],
      },
      {
        division: 'KNOuX Web & WordPress',
        items: ['Bespoke High-Performance Web Flagship (Next.js or Modern WordPress FSE)', 'Zero-Shift Layout with 100/100 Core Web Vitals', 'SSL, DNS & Cloudflare Enterprise WAF Configuration'],
      },
      {
        division: 'KNOuX Growth',
        items: ['Initial High-Intent Search Campaign (Google Ads)', 'Conversion Tracking Instrumentation (CAPI + GA4)', 'SEO Foundation & Semantic Schema Deployment'],
      },
      {
        division: 'KNOuX Software',
        items: ['KNOuX Crypt: Encrypted internal communications & asset protection', 'KNOuX SmartOrganizer: Automated file & asset categorization for your internal team'],
      },
    ],
    roadmap: [
      { phase: '01', title: 'Brand Architecture & Design Tokens', duration: 'Weeks 1–2', details: 'Formulate identity, typographic hierarchy, and initial interactive prototype.' },
      { phase: '02', title: 'Platform Engineering & Content Mesh', duration: 'Weeks 3–4', details: 'Full stack development, CMS integration, and responsive cross-device verification.' },
      { phase: '03', title: 'Telemetry, Security & Market Activation', duration: 'Weeks 5–6', details: 'CAPI tracking instrumentation, security audit, and launch of initial demand acquisition campaigns.' },
    ],
    expectedImpact: [
      { metric: '< 6 Weeks', label: 'From Zero to Public Institutional Launch' },
      { metric: '100 / 100', label: 'Lighthouse Performance Score Baseline' },
      { metric: 'Turnkey', label: 'Fully Configured Domain, Email, Security & Ads' },
    ],
  },
  {
    id: 'sol-launch',
    slug: 'launch-a-product',
    title: 'Product Velocity Launchpad',
    category: 'Software & Hardware Introductions',
    tagline: 'High-impact reveal architecture engineered for massive market attention',
    overview: 'When introducing a transformative product to the world, standard marketing pages fail to build anticipation. We craft immersive 3D/WebGL product showcases paired with an aggressive paid acquisition blitz across Google and Meta.',
    targetProfile: 'Hardware developers, SaaS companies releasing flagship updates, and venture-backed tech startups.',
    integratedDivisions: ['KNOuX Web', 'KNOuX Creative', 'KNOuX Growth', 'KNOuX Software'],
    includedComponents: [
      {
        division: 'KNOuX Web (3D / Interactive)',
        items: ['Interactive 3D / WebGL Product Showcase with Spatial Exploded Views', 'Ultra-low Latency Interactive Product Configurator', 'High-Throughput Waitlist & Early-Access Ingestion Engine'],
      },
      {
        division: 'KNOuX Creative',
        items: ['Kinetic Motion Graphics & 3D Rendered Teaser Assets', 'High-Impact Typography & Dark Mode Narrative Flow', 'Feature Comparison Architecture'],
      },
      {
        division: 'KNOuX Growth',
        items: ['Meta Ads Advantage+ Launch Campaign (Pre-launch & Launch Day Blitz)', 'Google Search High-Intent Product Category Capture', 'Founder / Technical Lead Inbound Content Distribution'],
      },
      {
        division: 'KNOuX Software',
        items: ['KNOuX ONE / Forge integration for automated backend workflows and code generation.'],
      },
    ],
    roadmap: [
      { phase: '01', title: 'Spatial 3D Asset Formulation', duration: 'Weeks 1–2', details: 'Optimize CAD/3D geometry for WebGL and build real-time interactive shaders.' },
      { phase: '02', title: 'Launchpad Engineering & Funnel Build', duration: 'Weeks 3–4', details: 'Develop Next.js showcase page, waitlist logic, and payment checkout integration.' },
      { phase: '03', title: 'Omnichannel Launch Campaign Execution', duration: 'Weeks 5–6', details: 'Simultaneous deployment across paid media, developer communities, and press channels.' },
    ],
    expectedImpact: [
      { metric: '3.8x', label: 'Higher Dwell Time via Interactive 3D Showcase' },
      { metric: '> 14%', label: 'Waitlist / Pre-Order Conversion Rate' },
      { metric: 'Global', label: 'Edge-Rendered Sub-Second Delivery Worldwide' },
    ],
  },
  {
    id: 'sol-store',
    slug: 'online-store',
    title: 'High-Throughput Commerce Flagship',
    category: 'E-Commerce & DTC Operations',
    tagline: 'Sub-millisecond cart mechanics and conversion-optimized scaling architecture',
    overview: 'Engineered for high-SKU catalogs and flash sale concurrency. We combine WooCommerce High-Performance Order Storage (HPOS) or headless commerce with zero-friction checkout flows, automated inventory telemetry, and server-side acquisition funnels.',
    targetProfile: 'Direct-to-consumer luxury brands, high-volume apparel merchants, and technical equipment retailers.',
    integratedDivisions: ['KNOuX WordPress', 'KNOuX Web', 'KNOuX Growth', 'KNOuX Creative'],
    includedComponents: [
      {
        division: 'KNOuX WordPress & Web',
        items: ['KNOuX Commerce High-Performance Theme & HPOS Configuration', 'Instant Faceted Filter Engine (< 16ms response without page reloads)', 'Decoupled 1-Click Sliding Micro-Cart with Cross-Sell Engine'],
      },
      {
        division: 'KNOuX Growth',
        items: ['KNOuX Conversion Engine: Server-side Meta CAPI & Google GA4 setup', 'High-ROAS Meta Advantage+ Catalog (DPA) Campaign Structuring', 'Google Shopping & Performance Max Feed Optimization'],
      },
      {
        division: 'KNOuX Creative',
        items: ['Art Directed Product Photography Templates', 'Minimalist Luxury Catalog Typography & Layout Standards', 'Packaging & Unboxing Experience Collateral Guidelines'],
      },
    ],
    roadmap: [
      { phase: '01', title: 'Catalog Schema & Architecture Profiling', duration: 'Weeks 1–2', details: 'Audit database performance, structure taxonomy, and formulate responsive cart state.' },
      { phase: '02', title: 'Custom Storefront Engineering', duration: 'Weeks 3–5', details: 'Build custom templates, test checkout flow with simulated high-traffic spikes.' },
      { phase: '03', title: 'Growth Telemetry & Live Traffic Migration', duration: 'Weeks 6–7', details: 'Zero-downtime cutover, server-side CAPI validation, and ad account activation.' },
    ],
    expectedImpact: [
      { metric: '< 200ms', label: 'Cart Interaction & Checkout Initialization' },
      { metric: '+42%', label: 'Mobile Conversion Rate Improvement' },
      { metric: '10k+', label: 'Concurrent Checkout Traffic Capacity' },
    ],
  },
  {
    id: 'sol-ops',
    slug: 'digitize-operations',
    title: 'Enterprise Operations Modernization',
    category: 'Internal Systems & Workflow Automation',
    tagline: 'Eliminate manual bottlenecks with custom internal portals and desktop utilities',
    overview: 'Replace fragile spreadsheets, fragmented SaaS subscriptions, and manual file operations with a cohesive digital operating system. Combines custom web portals with the native KNOuX software suite to automate enterprise workflows.',
    targetProfile: 'Mid-market corporations, logistics coordinators, healthcare administrators, and legal practices.',
    integratedDivisions: ['KNOuX Software', 'KNOuX Web', 'KNOuX Creative'],
    includedComponents: [
      {
        division: 'KNOuX Software Suite',
        items: [
          'KNOuX SmartOrganizer: Automated file telemetry and neural classification across company drives',
          'KNOuX Crypt: Zero-knowledge cryptographic file encryption for sensitive client records',
          'KNOuX Repair: Proactive system integrity monitor preventing OS downtime on staff workstations',
          'KNOuX REC & Player X: Secure internal training and screen-recording archive system',
        ],
      },
      {
        division: 'KNOuX Web Systems',
        items: [
          'Custom Web Management Portal (React 19, TypeScript, PostgreSQL)',
          'Role-Based Access Control (RBAC) with Corporate SSO (Okta, Azure AD)',
          'Automated PDF, CSV, and financial report generation engine',
        ],
      },
      {
        division: 'KNOuX Creative',
        items: ['Clean Industrial Internal Dashboard UI/UX Design System with Dark/Light Modes'],
      },
    ],
    roadmap: [
      { phase: '01', title: 'Workflow Audit & Bottleneck Discovery', duration: 'Weeks 1–2', details: 'Interview department heads, document existing data silos, and draft unified ERD.' },
      { phase: '02', title: 'Portal Development & Software Rollout', duration: 'Weeks 3–6', details: 'Engineer custom database schemas, develop web dashboard, deploy workstation tools.' },
      { phase: '03', title: 'Staff Onboarding & Security Certification', duration: 'Weeks 7–8', details: 'Conduct team walkthroughs, verify RBAC permissions, and hand over operational documentation.' },
    ],
    expectedImpact: [
      { metric: '70%+', label: 'Reduction in Manual Administrative Processing Time' },
      { metric: '100%', label: 'Data Sovereignty & Local Cryptographic Protection' },
      { metric: 'Zero', label: 'Recurring Third-Party Per-Seat SaaS Bloat' },
    ],
  },
  {
    id: 'sol-academy',
    slug: 'academy-platform',
    title: 'Knowledge & Academy Architecture',
    category: 'Education & Knowledge Systems',
    tagline: 'High-prestige technical learning portals and gated knowledge networks',
    overview: 'Designed for institutions, research centers, and industry thought leaders. Deliver structured video curricula, interactive code playgrounds, gated membership forums, and automated certification workflows.',
    targetProfile: 'Educational institutions, specialized training centers, corporate academies, and high-ticket mentors.',
    integratedDivisions: ['KNOuX Web', 'KNOuX WordPress', 'KNOuX Creative', 'KNOuX Growth'],
    includedComponents: [
      {
        division: 'KNOuX Web & WordPress',
        items: [
          'Custom Learning Management System (LMS) with high-speed video streaming',
          'Gated Member Portal with Tiered Subscriptions and One-Time Cohort Passes',
          'Interactive Quiz & Assignment Submission Engine with Automated Grading',
          'Automated Cryptographically Verified Certificate Generation (PDF & Blockchain Hash)',
        ],
      },
      {
        division: 'KNOuX Creative',
        items: ['Editorial Course Syllabus Layouts', 'Custom Certificate Design & Branded Student Dashboard UI'],
      },
      {
        division: 'KNOuX Growth',
        items: [
          'Evergreen Webinar / Masterclass Lead Generation Funnel',
          'Automated Email Nurturing & Student Re-engagement Sequences',
          'High-Intent Search Campaigns for Target Professional Certifications',
        ],
      },
    ],
    roadmap: [
      { phase: '01', title: 'Pedagogy & Curriculum Architecture', duration: 'Weeks 1–2', details: 'Map student progress flow, define membership tiers, and format video hosting schemas.' },
      { phase: '02', title: 'Platform Development & Video CDN Integration', duration: 'Weeks 3–5', details: 'Build responsive video player, implement paywall logic, and connect Stripe billing.' },
      { phase: '03', title: 'Enrollment Launch & Funnel Optimization', duration: 'Weeks 6–8', details: 'Launch masterclass funnels, test payment conversion, and onboard founding cohort.' },
    ],
    expectedImpact: [
      { metric: '94%', label: 'Student Course Completion Rate with Micro-Lessons' },
      { metric: '< 50ms', label: 'Video Player Buffering with Adaptive Bitrate' },
      { metric: 'Automated', label: 'Billing, Invoicing, Grading & Certificate Delivery' },
    ],
  },
];
