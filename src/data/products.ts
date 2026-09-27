export type ProductStatus = 'active' | 'in-development' | 'release-candidate' | 'undisclosed';

export type ProductDiscipline =
  | 'Systems'
  | 'Development'
  | 'Utilities'
  | 'Organization'
  | 'Media'
  | 'Productivity'
  | 'Security';

export type Product = {
  id: string;
  slug: string;
  name: string;
  index: string;
  discipline: ProductDiscipline;
  family: string;
  tagline: string;
  statement: string;
  version?: string;
  status: ProductStatus;
  platforms: string[];
  capabilities: string[];
  technologies: string[];
  keywords: string[];
  architecture?: string;
  heroAsset?: string;
  liveUrl?: string;
  repositoryUrl: string;
  relatedProducts: string[];
  topology: {
    orbit: number;
    angleDeg: number;
    vector: string;
  };
};

export const products: readonly Product[] = [
  {
    id: 'one',
    slug: 'knoux-one',
    name: 'KNOuX ONE',
    index: '01',
    discipline: 'Systems',
    family: 'Core Systems',
    tagline: 'Windows Intelligence & Developer Suite',
    statement: 'A high-performance Windows desktop intelligence workspace engineered with Tauri 2, native Rust handlers, and React 19.',
    version: '1.0.0',
    status: 'active',
    platforms: ['Windows 11 / 10 (Tauri 2 / Rust Native)'],
    capabilities: [
      'Native Windows hardware and process intelligence telemetry',
      'Typed Rust-to-React IPC contract with allowlisted native handlers',
      'System performance analysis and memory footprint monitoring',
      'Built-in developer environment inspection tools'
    ],
    technologies: ['Tauri 2', 'Rust', 'React 19', 'TypeScript', 'TailwindCSS', 'Vite'],
    keywords: ['windows', 'intelligence', 'system', 'developer', 'suite', 'tauri', 'rust', 'telemetry', 'hardware'],
    architecture: 'Two-tier desktop architecture: high-efficiency native Rust backend bound via typed Tauri 2 IPC commands to a React 19 frontend.',
    liveUrl: 'https://knoux-one.vercel.app',
    repositoryUrl: 'https://github.com/daynightae-cmyk/KNOUX-ONE',
    relatedProducts: ['kforge', 'knoux-repair'],
    topology: { orbit: 1, angleDeg: 330, vector: 'SYS-01' }
  },
  {
    id: 'forge',
    slug: 'kforge',
    name: 'KNOuX Forge',
    index: '02',
    discipline: 'Development',
    family: 'Engineering',
    tagline: 'Local-first engineering command center for verified project workflows',
    statement: 'A local-first engineering command center designed to orchestrate repositories, inspect code evidence, and execute trusted workflows.',
    version: '0.1.0',
    status: 'active',
    platforms: ['Local-first Web & Desktop (Node.js / Express)'],
    capabilities: [
      'Local repository discovery and workspace status auditing',
      'Deterministic workflow orchestration with verified state transitions',
      'Evidence-first project intelligence and release readiness verification',
      'Local API bridge with strict rate limiting and Zod schema validation'
    ],
    technologies: ['React 18', 'Express', 'TypeScript', 'Zod', 'Node.js'],
    keywords: ['developer', 'engineering', 'workflows', 'forge', 'repositories', 'orchestration', 'command center'],
    architecture: 'Local Node.js/Express service providing structured workspace inspection APIs consumed by a responsive React engineering console.',
    repositoryUrl: 'https://github.com/daynightae-cmyk/KForge',
    relatedProducts: ['knoux-one', 'smart-organizer'],
    topology: { orbit: 1, angleDeg: 30, vector: 'DEV-02' }
  },
  {
    id: 'repair',
    slug: 'knoux-repair',
    name: 'KNOuX Repair',
    index: '03',
    discipline: 'Utilities',
    family: 'System Maintenance',
    tagline: 'Automated Windows system diagnostic and repair console',
    statement: 'An automated diagnostic and maintenance console engineered to analyze Windows system health, repair configuration issues, and maintain integrity.',
    status: 'active',
    platforms: ['Windows Console & Desktop (Node.js / Express)'],
    capabilities: [
      'Automated Windows component and file integrity diagnostics',
      'Structured registry health inspection and restoration scripts',
      'System service state verification and diagnostic logging',
      'Drizzle ORM data persistence for repair logs and historical audits'
    ],
    technologies: ['TypeScript', 'Express', 'Drizzle ORM', 'Google GenAI', 'PostgreSQL'],
    keywords: ['repair', 'windows repair', 'diagnostics', 'system health', 'registry', 'maintenance', 'fix'],
    architecture: 'Service-driven diagnostic runtime with persistent repair audit tracking and automated recovery actions.',
    repositoryUrl: 'https://github.com/daynightae-cmyk/knoux-Repair',
    relatedProducts: ['knoux-one', 'smart-organizer'],
    topology: { orbit: 2, angleDeg: 150, vector: 'UTL-03' }
  },
  {
    id: 'organizer',
    slug: 'smart-organizer',
    name: 'KNOuX SmartOrganizer',
    index: '04',
    discipline: 'Organization',
    family: 'File Management',
    tagline: 'Private, local-first Windows desktop organization utility',
    statement: 'A private, local-first desktop application designed to categorize files, detect duplicates, and organize workspaces with zero cloud dependency.',
    version: '0.4.0',
    status: 'active',
    platforms: ['Windows Desktop (Hardened Electron Shell)'],
    capabilities: [
      'Hardened Electron architecture with context isolation and sandboxing',
      'Deterministic rule-based file organization and taxonomy sorting',
      'Fast local duplicate file detection with hash verification',
      'Offline file metadata extraction and workspace categorization'
    ],
    technologies: ['Electron', 'React', 'Vite', 'SWC', 'Zod', 'Lucide Icons'],
    keywords: ['organize files', 'files', 'smart organizer', 'sorting', 'duplicates', 'cleanup', 'directory', 'storage'],
    architecture: 'Strict Electron security model: isolated main process with narrowed IPC preload bridge and decoupled React UI.',
    repositoryUrl: 'https://github.com/daynightae-cmyk/Knoux-SmartOrganizer',
    relatedProducts: ['knoux-clipboard-ai', 'kforge'],
    topology: { orbit: 2, angleDeg: 210, vector: 'ORG-04' }
  },
  {
    id: 'rec',
    slug: 'knoux-rec',
    name: 'KNOuX REC',
    index: '05',
    discipline: 'Media',
    family: 'Capture & Media',
    tagline: 'Windows-first local screen recorder and non-destructive recording workspace',
    statement: 'A focused, lightweight Windows desktop screen recorder engineered for high-frame-rate capture with non-destructive local persistence.',
    version: '1.1.0',
    status: 'active',
    platforms: ['Windows Desktop (Electron Shell)'],
    capabilities: [
      'Low-latency full-screen, window, and custom-region desktop recording',
      'Local incremental persistence ensuring recordings survive unexpected restarts',
      'Non-destructive clip sequencing and lightweight in-app preview',
      'Hardened local process architecture without third-party cloud streaming'
    ],
    technologies: ['Electron', 'React', 'TypeScript', 'Node.js'],
    keywords: ['record screen', 'screen recording', 'screen recorder', 'rec', 'video capture', 'capture', 'desktop recorder'],
    architecture: 'Local desktop media capture pipeline utilizing desktopCapturer bindings and local file streaming in a sandboxed Electron environment.',
    heroAsset: 'https://raw.githubusercontent.com/daynightae-cmyk/knoux-rec/main/public/app-icon.png',
    repositoryUrl: 'https://github.com/daynightae-cmyk/knoux-rec',
    relatedProducts: ['knoux-x', 'knoux-clipboard-ai'],
    topology: { orbit: 1, angleDeg: 120, vector: 'MED-05' }
  },
  {
    id: 'x',
    slug: 'knoux-x',
    name: 'KNOuX Player X',
    index: '06',
    discipline: 'Media',
    family: 'Capture & Media',
    tagline: 'Next-generation desktop media player and creative playback engine',
    statement: 'A next-generation desktop media player and playback engine featuring static FFmpeg stream inspection and advanced hardware acceleration.',
    version: '2.1.0',
    status: 'active',
    platforms: ['Windows Desktop (Electron 28 / FFmpeg Static)'],
    capabilities: [
      'High-bitrate video/audio playback with hardware-accelerated decode',
      'Integrated static FFprobe and FFmpeg stream analysis pipeline',
      'Frame-accurate seeking and detailed audio/video metadata inspection',
      'Onnxruntime and MediaPipe vision utilities for frame analysis'
    ],
    technologies: ['Electron 28', 'React', 'FFmpeg Static', 'FFprobe Static', 'MediaPipe', 'TFJS', 'Zustand', 'XState'],
    keywords: ['video', 'player', 'media player', 'knoux x', 'audio', 'ffmpeg', 'playback', 'streaming'],
    architecture: 'Hardware-accelerated Electron renderer backed by static binary media utilities and state-machine-driven playback orchestration.',
    heroAsset: 'https://raw.githubusercontent.com/daynightae-cmyk/knoux-x/main/assets/logo.png',
    liveUrl: 'https://knoux-x.vercel.app',
    repositoryUrl: 'https://github.com/daynightae-cmyk/knoux-x',
    relatedProducts: ['knoux-rec', 'knoux-clipboard-ai'],
    topology: { orbit: 2, angleDeg: 90, vector: 'MED-06' }
  },
  {
    id: 'clipboard',
    slug: 'knoux-clipboard-ai',
    name: 'KNOuX Clipboard AI',
    index: '07',
    discipline: 'Productivity',
    family: 'Developer Productivity',
    tagline: 'Local-first intelligent clipboard manager and developer studio',
    statement: 'A local-first clipboard management workspace with encrypted local history, syntax diff tools, barcode scanning, and guarded AI utilities.',
    version: '1.1.0',
    status: 'release-candidate',
    platforms: ['Windows Desktop (Electron / SQLite3)'],
    capabilities: [
      'Continuous local clipboard history tracking stored in private SQLite3',
      'Guarded AI transformations with diff-match-patch visual comparison',
      'Integrated barcode and QR code decoding utilities',
      'Bilingual interface with complete Arabic and English localized views'
    ],
    technologies: ['Electron', 'React', 'SQLite3', 'Zod', 'ZXing Library', 'Diff-Match-Patch', 'Motion'],
    keywords: ['clipboard', 'ai clipboard', 'copy paste', 'history', 'diff', 'barcode', 'qr', 'productivity'],
    architecture: 'Sandboxed Electron desktop utility with a high-speed SQLite storage engine and isolated clipboard event listener.',
    heroAsset: 'https://raw.githubusercontent.com/daynightae-cmyk/knoux_ai_clipboard_pro/main/assets/splash.png',
    liveUrl: 'https://knoux-ai-clipboard-pro.vercel.app',
    repositoryUrl: 'https://github.com/daynightae-cmyk/knoux_ai_clipboard_pro',
    relatedProducts: ['smart-organizer', 'kforge'],
    topology: { orbit: 2, angleDeg: 270, vector: 'PRD-07' }
  },
  {
    id: 'crypt',
    slug: 'knoux-crypt',
    name: 'KNOuX Crypt',
    index: '08',
    discipline: 'Security',
    family: 'Security & Integrity',
    tagline: 'Local zero-knowledge encryption and cryptographic protection console',
    statement: 'A zero-knowledge client-side cryptographic system designed to protect sensitive files and payloads with hardened ciphers entirely offline.',
    version: '2025.1.0',
    status: 'active',
    platforms: ['Web & Desktop (Offline / Local)'],
    capabilities: [
      'Client-side zero-knowledge encryption with zero server transmission',
      'Multi-layer cryptographic cipher routines for local files and drives',
      'Tamper-evident verification and secure key management interface',
      'High-performance offline operation requiring no external connection'
    ],
    technologies: ['React', 'Framer Motion', 'React Router', 'TypeScript', 'Web Crypto API'],
    keywords: ['crypt', 'encryption', 'security', 'crypto', 'privacy', 'ciphers', 'zero-knowledge', 'lock', 'protect'],
    architecture: 'Air-gapped client-side cryptographic architecture using browser Web Crypto APIs and client-only state storage.',
    repositoryUrl: 'https://github.com/daynightae-cmyk/KnouxCrypt',
    relatedProducts: ['knoux-one', 'smart-organizer'],
    topology: { orbit: 2, angleDeg: 0, vector: 'SEC-08' }
  }
] as const;

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
