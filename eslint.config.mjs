import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next*/**',
    'out/**',
    'next-env.d.ts',
    'node_modules/**',
    '.qa-*/**',
    'qa-*.png',
    '.lint-report.json',
    // Accidental nested checkout of this repository. Not source.
    'knoux-store/**',
  ]),
]);
