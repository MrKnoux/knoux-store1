import { products } from '@/data/products';
import { wpItems } from '@/data/wordpress';
import { webSystemTiers, creativeDisciplines } from '@/data/services';
import { growthChannels } from '@/data/growth';
import { businessSolutions } from '@/data/solutions';

export const navigation = [
  { label: 'Products', href: '/products' },
  { label: 'WordPress', href: '/wordpress' },
  { label: 'Web', href: '/web' },
  { label: 'Growth', href: '/growth' },
  { label: 'Creative', href: '/creative' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Composer', href: '/build' },
  { label: 'Labs', href: '/labs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const searchable = [
  { label: 'Home', description: 'KNOuX Digital Headquarters — Canonical Home', href: '/' },
  { label: 'Products', description: 'KNOuX Software Universe — Canonical Desktop & Cloud Tools', href: '/products' },
  { label: 'WordPress Division', description: 'Engineered Themes, Plugins, Blocks, Starter Sites & Solutions', href: '/wordpress' },
  { label: 'WordPress / Themes', description: 'FSE Themes: Mono, Commerce, Headless Starter', href: '/wordpress/themes' },
  { label: 'WordPress / Plugins', description: 'Speed Core, Security Shield, Conversion Engine CAPI', href: '/wordpress/plugins' },
  { label: 'WordPress / Blocks', description: 'Gutenberg Technical Matrix & Radar Block Suite', href: '/wordpress/blocks' },
  { label: 'WordPress / Starter Sites', description: 'Turnkey Enterprise Corporate & B2B SaaS Foundations', href: '/wordpress/starter-sites' },
  { label: 'WordPress / Solutions', description: 'Decoupled Headless Migrations & Database Hardening', href: '/wordpress/solutions' },
  { label: 'Web Systems Studio', description: 'Capability Matrix: Next.js Flagships, High-Throughput E-Commerce, 3D WebGL', href: '/web' },
  { label: 'Creative Studio', description: 'Brand Identity Systems, UI/UX Architecture, Motion Grammar & Art Direction', href: '/creative' },
  { label: 'Growth Division', description: 'Meta Ads, Google Ads Search & PMax, Social Video, Content & Technical SEO', href: '/growth' },
  { label: 'Growth / Meta Ads', description: 'Algorithmic Acquisition with Server-Side CAPI Precision', href: '/growth/meta-ads' },
  { label: 'Growth / Google Ads', description: 'High-Intent Search & Clean Performance Max Asset Structuring', href: '/growth/google-ads' },
  { label: 'Growth / Social Media', description: 'Audience Multiplication & Short-Form Video Engine', href: '/growth/social' },
  { label: 'Growth / Content & Inbound', description: 'Technical Publishing, Architecture Teardowns & Whitepapers', href: '/growth/content' },
  { label: 'Growth / Technical SEO', description: 'Semantic Entity Graphs & Core Web Vitals Optimization', href: '/growth/seo' },
  { label: 'Cross-Division Solutions', description: 'Start a Business, Launch Product, Online Store, Digitize Ops, Academy', href: '/solutions' },
  { label: 'KNOuX Composer (/build)', description: 'Natural-Language Solution Synthesis & Architecture Scoping Engine', href: '/build' },
  { label: 'Labs & Research', description: 'Knoux-Quill, knoux-security & Foundational Computational Research', href: '/labs' },
  { label: 'Engineering Practice', description: 'Principles, Architecture Standards & Code Governance', href: '/engineering' },
  { label: 'Selected Work', description: 'Institutional Archive & Production Deployments', href: '/work' },
  { label: 'About KNOuX', description: 'Founding Mission, Philosophy & Leadership by Eng. Sadek Elgazar', href: '/about' },
  { label: 'Contact & Inquiries', description: 'Encrypted Contact Gateway & Project Scoping Pipeline', href: '/contact' },

  // Software Products (8 Canonical Products)
  ...products.map((p) => ({
    label: p.name,
    description: `SOFTWARE • ${p.tagline} • ${p.keywords.slice(0, 4).join(' ')}`,
    href: `/products/${p.slug}`,
  })),

  // WordPress Items
  ...wpItems.map((w) => ({
    label: w.name,
    description: `WORDPRESS (${w.category.toUpperCase()}) • ${w.tagline}`,
    href: `/wordpress/${w.category}`,
  })),

  // Web System Tiers
  ...webSystemTiers.map((t) => ({
    label: t.title,
    description: `WEB SYSTEMS • ${t.tagline}`,
    href: '/web',
  })),

  // Creative Disciplines
  ...creativeDisciplines.map((c) => ({
    label: c.title,
    description: `CREATIVE STUDIO • ${c.subtitle}`,
    href: '/creative',
  })),

  // Growth Channels
  ...growthChannels.map((g) => ({
    label: g.name,
    description: `GROWTH CHANNEL • ${g.tagline}`,
    href: `/growth/${g.slug}`,
  })),

  // Cross-Division Solutions
  ...businessSolutions.map((s) => ({
    label: s.title,
    description: `SOLUTION PACKAGE • ${s.tagline}`,
    href: '/solutions',
  })),
];
