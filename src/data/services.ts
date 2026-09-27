export interface WebSystemTier {
  id: string;
  slug: string;
  category: 'corporate' | 'ecommerce' | 'web-app' | 'headless' | 'interactive-3d';
  title: string;
  tagline: string;
  summary: string;
  architecture: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
    performanceGuarantees: string[];
  };
  deliverables: string[];
  typicalTimeline: string;
  idealFor: string;
}

export interface CreativeDiscipline {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  statement: string;
  artifactsProduced: string[];
  principles: string[];
  caseStudy: {
    clientType: string;
    challenge: string;
    execution: string;
    impact: string;
  };
}

export const webSystemTiers: WebSystemTier[] = [
  {
    id: 'web-corp',
    slug: 'corporate-flagship',
    category: 'corporate',
    title: 'Institutional & Corporate Flagship',
    tagline: 'High-authority digital headquarters for market leaders',
    summary: 'An institutional web presence designed for precision, investor confidence, and regulatory compliance. Engineered with zero layout shift, sub-second global response times, and an uncompromising editorial aesthetic.',
    architecture: {
      frontend: ['Next.js 16 (App Router)', 'React 19', 'Server-Driven UI', 'CSS Custom Properties Tokens'],
      backend: ['Edge Handlers', 'Headless CMS Integration', 'Cryptographic Webhook Ingestion'],
      infrastructure: ['Vercel Edge Network', 'Cloudflare Enterprise DNS / WAF', 'Global Anycast CDN'],
      performanceGuarantees: ['100/100 Core Web Vitals', '< 200ms Global TTFB', 'Zero Layout Shift (CLS 0.000)'],
    },
    deliverables: [
      'Comprehensive Design Token System (Figma to React)',
      'Deterministic Multilingual Routing & Localization Architecture',
      'Automated Sitemap & Schema.org JSON-LD Entity Graph',
      'Accessibility Audit (Full WCAG 2.1 AA Certification)',
      'Enterprise SSO & Secure Media Vault Integration',
    ],
    typicalTimeline: '4 to 8 Weeks',
    idealFor: 'Enterprises, holding conglomerates, investment firms, and research laboratories.',
  },
  {
    id: 'web-ecom',
    slug: 'high-throughput-ecommerce',
    category: 'ecommerce',
    title: 'High-Throughput E-Commerce Platform',
    tagline: 'Deterministic conversion architecture with zero cart friction',
    summary: 'A bespoke commerce engine built for high-volume catalogs and flash sale concurrency. Built on decoupled architectures (WooCommerce HPOS or Shopify Hydrogen) with sub-millisecond cart updates and edge caching.',
    architecture: {
      frontend: ['Next.js / Remix Composable Storefront', 'Micro-Cart Web Components', 'Optimistic UI State'],
      backend: ['WooCommerce HPOS / MedusaJS / Shopify Storefront API', 'Redis Queue Cluster'],
      infrastructure: ['Stripe Elements', 'Server-Side Conversions API (CAPI)', 'Automated Tax / Shipping Integrations'],
      performanceGuarantees: ['Instant Faceted Filtering (< 16ms)', '10,000+ Concurrent Checkouts', '< 400ms Order Processing'],
    },
    deliverables: [
      'Custom Headless Checkout Funnel with 1-Click Pay',
      'Real-Time Dynamic Inventory & Backorder Telemetry',
      'Server-Side Conversion Tracking (Meta, Google, TikTok)',
      'Omnichannel ERP / Warehouse Management Integration',
      'Abandoned Cart & Lifecycle Automation Webhooks',
    ],
    typicalTimeline: '6 to 10 Weeks',
    idealFor: 'Direct-to-consumer brands, luxury labels, and international e-commerce operators.',
  },
  {
    id: 'web-app',
    slug: 'custom-web-application',
    category: 'web-app',
    title: 'Custom Web Application & Client Portal',
    tagline: 'Complex computational workflows wrapped in intuitive interfaces',
    summary: 'Full-stack software platforms engineered for mission-critical business operations, customer self-service portals, and data analytics dashboards. Scalable database schema with end-to-end type safety.',
    architecture: {
      frontend: ['React 19 / TypeScript Strict', 'TanStack Query & Virtual Table', 'Tailwind CSS'],
      backend: ['Node.js / Go microservices', 'PostgreSQL / Prisma ORM', 'Redis Session Store'],
      infrastructure: ['Docker Containerization', 'Kubernetes Orchestration', 'Automated CI/CD Test Matrix'],
      performanceGuarantees: ['Sub-100ms API Endpoint Latency', '99.99% Availability SLA', 'End-to-End Type Safety'],
    },
    deliverables: [
      'Role-Based Access Control (RBAC) & Audit Trails',
      'Interactive Data Visualizations & Export Engines (CSV, PDF, JSON)',
      'Secure Customer Billing & Subscription Infrastructure',
      'Real-Time WebSocket Notification Architecture',
      'Automated Test Suite (Unit, Integration, E2E)',
    ],
    typicalTimeline: '8 to 16 Weeks',
    idealFor: 'SaaS companies, financial services, logistics coordinators, and healthtech platforms.',
  },
  {
    id: 'web-headless',
    slug: 'headless-composable',
    category: 'headless',
    title: 'Headless & Composable Content Mesh',
    tagline: 'Decoupled editorial freedom backed by edge-rendered frontends',
    summary: 'Break free from monolithic CMS constraints. We decouple your content management system (WordPress, Sanity, or Strapi) from your edge-hosted frontend, enabling instant page loads and multi-channel content delivery.',
    architecture: {
      frontend: ['Next.js App Router', 'Turbopack Build Pipeline', 'Static Site Generation (SSG) + On-Demand ISR'],
      backend: ['WPGraphQL / Sanity GROQ', 'Webhook Revalidation Dispatcher'],
      infrastructure: ['Edge Caching', 'Cloudinary / Imgix Media Optimization', 'Multi-Region Failover'],
      performanceGuarantees: ['Immediate Editorial Preview', 'Zero Database Query on Page Render', 'Global 50ms Edge Cache Hits'],
    },
    deliverables: [
      'Schema Mapping & Custom GraphQL API Formulation',
      'Live Preview Sync between CMS and Edge Frontend',
      'Instantaneous On-Demand Cache Revalidation Webhook Engine',
      'Zero-Downtime Content Migration & URL Redirection Engine',
      'Editorial Training & Component Documentation Guide',
    ],
    typicalTimeline: '4 to 6 Weeks',
    idealFor: 'Media houses, marketing teams needing rapid landing page iterations, and hybrid tech teams.',
  },
  {
    id: 'web-3d',
    slug: 'computational-3d-webgl',
    category: 'interactive-3d',
    title: 'Computational 3D & WebGL Experiences',
    tagline: 'Kinetic digital physics and immersive spatial product demonstrations',
    summary: 'Push browser capabilities to their absolute limit. We craft custom Three.js, WebGL shader systems, and interactive spatial environments that run smoothly at 60 FPS on both mobile GPUs and high-end workstations.',
    architecture: {
      frontend: ['Three.js', 'React Three Fiber (R3F)', 'Custom GLSL Shaders', 'WebGPU Ready'],
      backend: ['GLTF / DRACO Compressed Asset Pipelines', 'Progressive Geometry Streaming'],
      infrastructure: ['Hardware Acceleration Fallback Tiering', 'GPU Memory Manager'],
      performanceGuarantees: ['Sustained 60 FPS on Mobile', '< 1.8 MB Total 3D Asset Payload', 'Instant CSS Geometric Fallback'],
    },
    deliverables: [
      'Bespoke Shader Pipeline (Noise fields, fluid dynamics, particle meshes)',
      'Adaptive Frame Rate Throttle for Battery & Thermal Optimization',
      'Touch-Optimized Orbital & Inertial Camera Controls',
      'Accessible DOM Mirrored Semantics for Search Crawlers and Screen Readers',
    ],
    typicalTimeline: '4 to 8 Weeks',
    idealFor: 'Product launches, luxury showcases, tech brand revelations, and signature brand flagships.',
  },
];

export const creativeDisciplines: CreativeDiscipline[] = [
  {
    id: 'cr-brand',
    slug: 'brand-identity',
    title: 'Brand Identity Systems',
    subtitle: 'Mathematical precision meets enduring symbolic authority',
    statement: 'We do not draw logos in isolation. We formulate comprehensive visual identity systems rooted in geometry, typographic rigor, and conceptual clarity. Designed to scale seamlessly from a 16px favicon to monumental architectural signage.',
    artifactsProduced: [
      'Canonical Wordmark & Geometry Specifications',
      'Typographic Hierarchy & Monospace Pairing Manual',
      'Color Space Formulations (RGB, CMYK, Pantone Lab, HEX)',
      'Institutional Guidelines Dossier (PDF & Interactive Web Token Guide)',
      'Print & Digital Collateral Archetypes',
    ],
    principles: [
      'Deterministic Geometry: Every curve is derived from mathematical ratios.',
      'Contrast as Function: High legible contrast prioritized over decorative ornament.',
      'Long-Term Resonance: Built to remain contemporary for decades, not trend cycles.',
    ],
    caseStudy: {
      clientType: 'Autonomous Systems & Aerospace Laboratory',
      challenge: 'Unify 4 disparate research divisions under an unshakeable institutional visual banner.',
      execution: 'Designed a 4-quadrant geometric monogram paired with strict German industrial typography and a slate/monochrome palette.',
      impact: 'Secured international defense and university research partnerships with a unified, peerless identity.',
    },
  },
  {
    id: 'cr-uiux',
    slug: 'ui-ux-architecture',
    title: 'UI/UX & Interaction Architecture',
    subtitle: 'Frictionless computational interfaces for demanding users',
    statement: 'Interfaces should feel like extensions of the user’s mind. We map high-density workflows into clean visual planes, prioritizing keyboard shortcuts, instantaneous state transitions, and zero cognitive drag.',
    artifactsProduced: [
      'Comprehensive Figma Design System with Variable Tokens',
      'High-Fidelity Interactive Prototypes with Micro-Interactions',
      'User Journey State Flowcharts & Error Recovery Matrices',
      'Component Behavior & Focus-Trap Accessibility Specs',
    ],
    principles: [
      'Density Without Clutter: Maximizing usable information per square inch.',
      'Predictable Motion: Animations serve cognitive orientation, never vanity.',
      'Keyboard First: Power-user efficiency as a primary citizen, not an afterthought.',
    ],
    caseStudy: {
      clientType: 'Financial Algorithmic Trading Desk',
      challenge: 'Traders lost seconds navigating multi-nested tabs during high-volatility execution windows.',
      execution: 'Created an obsidian-toned telemetry console with persistent ⌘K command navigation and zero-latency keyboard hotkeys.',
      impact: 'Reduced mean task execution time by 62% across 3,500 active traders.',
    },
  },
  {
    id: 'cr-motion',
    slug: 'motion-grammar',
    title: 'Motion Grammar & Spatial Dynamics',
    subtitle: 'Kinetic choreography governed by physical restraint',
    statement: 'Digital motion is not entertainment—it is spatial punctuation. We define the physics of how surfaces enter, mutate, and resolve, ensuring transitions communicate causality and spatial hierarchy.',
    artifactsProduced: [
      'Motion Specification Matrix (Cubic-bezier curves, duration tiers, dampening factors)',
      'Lottie & WebGL Animation Keyframes',
      'Micro-Interaction State Dictionaries (Hover, Press, Active, Inactive, Pending)',
      'Reduced-Motion Accessibility Equivalents',
    ],
    principles: [
      'Mass and Momentum: Objects decelerate naturally rather than snapping artificially.',
      'Functional Spatiality: Transitions show where content came from and where it returned.',
      'Zero-Latency Response: Immediate visual feedback on initial pointer contact.',
    ],
    caseStudy: {
      clientType: 'Luxury Electric Vehicle Configurator',
      challenge: 'Standard 3D viewers felt clinical and disconnected from tactile luxury craftsmanship.',
      execution: 'Programmed smooth inertial camera sweeps with real-time lighting shifts responding to cursor velocity.',
      impact: 'Average customer engagement time increased from 1.8 minutes to 6.4 minutes.',
    },
  },
  {
    id: 'cr-artdir',
    slug: 'editorial-art-direction',
    title: 'Editorial Art Direction & Content Craft',
    subtitle: 'Authoritative voice, immaculate photography, and typographic cadence',
    statement: 'In an era of generic algorithmic boilerplate, authoritative editorial design commands unmatched prestige. We direct visual narratives, photographic styling, and typography that establish undisputed domain leadership.',
    artifactsProduced: [
      'Editorial Stylebook & Tone of Voice Guidelines',
      'Photographic & Media Moodboards with Lighting Schemas',
      'Custom Iconography & Isometric Technical Schematics',
      'Annual Report & Whitepaper Document Templates',
    ],
    principles: [
      'Restraint as Luxury: Generous negative space and disciplined color palettes.',
      'Typographic Hierarchy: Classical serif body paired with rigorous technical monospace.',
      'Truthful Representation: Authentic photography of actual people, materials, and code.',
    ],
    caseStudy: {
      clientType: 'Global Private Equity Fund',
      challenge: 'Annual reports appeared indistinguishable from competing generic financial PDFs.',
      execution: 'Directed a bespoke Swiss-style editorial layout with high-contrast archival photography and foil-stamped print companion.',
      impact: 'Voted best institutional communication piece in European Private Equity Review.',
    },
  },
];
