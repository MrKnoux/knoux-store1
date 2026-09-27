import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const port = 32219;
const origin = `http://127.0.0.1:${port}`;
const env = { ...process.env };
if (process.env.KNOUX_TEST_NETWORK_SHIM) env.NODE_OPTIONS = `--require=${process.env.KNOUX_TEST_NETWORK_SHIM}`;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(port), '-H', '127.0.0.1'], { env, stdio: 'ignore' });

async function waitForServer() {
  for (let attempt = 0; attempt < 70; attempt++) {
    if (server.exitCode !== null) throw new Error(`Server exited with ${server.exitCode}`);
    try { const response = await fetch(origin); if (response.ok) return; } catch { /* awaiting startup */ }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error('Production server did not start');
}

test('the canonical mark geometry is the single source of truth', () => {
  const svg = readFileSync(join(root, 'knoux-mark-canonical.svg'), 'utf8');
  const markModule = readFileSync(join(root, 'src', 'lib', 'knouxMark.ts'), 'utf8');

  const viewBox = svg.match(/viewBox="([^"]+)"/);
  assert.ok(viewBox, 'canonical mark must declare a viewBox');
  assert.ok(markModule.includes(`'${viewBox[1]}'`) || markModule.includes(`${viewBox[1].split(' ')[2]}`), 'knouxMark.ts must carry the canonical viewBox');

  const svgPaths = [...svg.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map((match) => match[1]);
  const modulePaths = [...markModule.matchAll(/\bd:\s*'([^']+)'/g)].map((match) => match[1]);
  assert.equal(svgPaths.length, 4, 'the KNOuX mark has four components');
  assert.deepEqual(modulePaths, svgPaths, 'knouxMark.ts has drifted from knoux-mark-canonical.svg');
});

test('production routes, deep links, sitemap and honest contact delivery', async (t) => {
  await waitForServer();
  t.after(() => server.kill());
  const paths = [
    '/',
    '/products',
    '/products/knoux-one',
    '/products/kforge',
    '/products/knoux-repair',
    '/products/smart-organizer',
    '/products/knoux-rec',
    '/products/knoux-x',
    '/products/knoux-clipboard-ai',
    '/products/knoux-crypt',
    '/engineering',
    '/labs',
    '/work',
    '/about',
    '/contact',
    '/sitemap.xml',
    '/robots.txt',
  ];
  for (const path of paths) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, `GET ${path}`);
  }
  assert.equal((await fetch(origin + '/missing')).status, 404);

  // Every stylesheet and script the homepage references must actually resolve,
  // otherwise the page renders as unstyled markup.
  const home = await (await fetch(origin + '/')).text();
  const assets = [...home.matchAll(/(?:href|src)="(\/_next\/static\/[^"]+)"/g)].map((match) => match[1]);
  assert.ok(assets.some((asset) => asset.endsWith('.css')), 'homepage must ship a stylesheet');
  assert.ok(assets.some((asset) => asset.endsWith('.js')), 'homepage must ship scripts');
  for (const asset of new Set(assets)) {
    const response = await fetch(origin + asset);
    assert.equal(response.status, 200, `asset ${asset}`);
  }

  // The identity must be crawlable in the DOM, not only inside WebGL.
  assert.match(home, /<h1[^>]*>KNOuX/);
  assert.match(home, /ENGINEERING DIGITAL SYSTEMS/);
  assert.match(home, /application\/ld\+json/);
  assert.match(home, /rel="canonical"/);
  assert.match(home, /KNOuX ONE/);
  assert.match(home, /KNOuX Forge/);
  assert.match(home, /KNOuX Repair/);
  assert.match(home, /KNOuX SmartOrganizer/);

  const robots = await (await fetch(origin + '/robots.txt')).text();
  assert.match(robots, /Sitemap:/);
  const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
  for (const path of ['/', '/products', '/engineering', '/labs', '/work', '/about', '/contact']) {
    assert.ok(sitemap.includes(`https://knoux.store${path}`), `sitemap must list ${path}`);
  }

  assert.equal((await fetch(origin + '/api/contact', { method: 'GET' })).status, 405, 'contact endpoint rejects other methods');
  const malformed = await fetch(origin + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: 'not-json' });
  assert.equal(malformed.status, 400, 'contact endpoint rejects malformed bodies');
  const invalid = await fetch(origin + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'A', email: 'bad', message: 'x' }) });
  assert.equal(invalid.status, 422);
  if (!process.env.CONTACT_WEBHOOK_URL) {
    const valid = await fetch(origin + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Test User', email: 'test@example.com', message: 'A valid request for a new project.' }) });
    assert.equal(valid.status, 503, 'must never claim delivery without a configured service');
  }
});
