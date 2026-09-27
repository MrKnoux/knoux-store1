import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

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

test('production routes, deep links, sitemap and honest contact delivery', async (t) => {
  await waitForServer();
  t.after(() => server.kill());
  const paths = ['/', '/products', '/products/knoux-one', '/products/kforge', '/products/knoux-repair', '/products/smart-organizer', '/engineering', '/labs', '/work', '/about', '/contact', '/sitemap.xml', '/robots.txt'];
  for (const path of paths) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, `GET ${path}`);
  }
  assert.equal((await fetch(origin + '/missing')).status, 404);
  const invalid = await fetch(origin + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'A', email: 'bad', message: 'x' }) });
  assert.equal(invalid.status, 422);
  if (!process.env.CONTACT_WEBHOOK_URL) {
    const valid = await fetch(origin + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Test User', email: 'test@example.com', message: 'A valid request for a new project.' }) });
    assert.equal(valid.status, 503, 'must never claim delivery without a configured service');
  }
});
