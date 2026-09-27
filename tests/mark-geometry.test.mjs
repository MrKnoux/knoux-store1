import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(join(root, file), 'utf8');

const svg = read('knoux-mark-canonical.svg');
const source = read('src/lib/knouxMark.ts');

/** Path data in document order, taken straight out of the canonical SVG. */
function svgPaths(markup) {
  return [...markup.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map((match) => match[1]);
}

/** Path data mirrored into the sampler, in the same order. */
function mirroredPaths(text) {
  const block = text.slice(text.indexOf('MARK_PATHS'), text.indexOf('MARK_WORLD_HEIGHT'));
  return [...block.matchAll(/\bd: '([^']+)'/g)].map((match) => match[1]);
}

/** Vertices of an absolute M/L/Z path, independent of the module under test. */
function vertices(d) {
  return [...d.matchAll(/[MLZ]([^MLZ]*)/g)]
    .map((match) => match[1].trim().split(/[\s,]+/).map(Number))
    .filter((values) => values.length === 2 && values.every((value) => Number.isFinite(value)));
}

test('the canonical mark is valid SVG with four components', () => {
  assert.match(svg, /viewBox="0 0 312 532"/, 'canonical mark must keep its 312x532 viewBox');
  assert.equal(svgPaths(svg).length, 4, 'the KNOuX mark has four components');
  for (const id of ['upper-rear', 'upper-front', 'dot', 'lower']) {
    assert.match(svg, new RegExp(`id="${id}"`), `component ${id} must be present`);
  }
});

test('the sampler mirrors the canonical SVG exactly, so the mark cannot drift', () => {
  assert.deepEqual(mirroredPaths(source), svgPaths(svg), 'src/lib/knouxMark.ts must match knoux-mark-canonical.svg byte for byte');
});

test('canonical path data uses only the absolute commands the parser supports', () => {
  for (const d of svgPaths(svg)) {
    const commands = [...d.matchAll(/[A-Za-z]/g)].map((match) => match[0]);
    assert.ok(commands.length > 0, 'path must contain commands');
    for (const command of commands) {
      assert.ok('MLZ'.includes(command), `unsupported command "${command}" must be reviewed in the parser, not guessed at`);
    }
    // Every command is followed by exactly one operand pair, which is what
    // parseMarkPath consumes. A stray group here is what breaks sampling.
    const groups = d.split(/[MLZ]/).filter((part) => part.trim().length > 0);
    const operands = commands.filter((command) => command !== 'Z').length;
    assert.equal(groups.length, operands, 'each non-close command must carry exactly one operand pair');
    for (const group of groups) {
      const values = group.trim().split(/[\s,]+/);
      assert.equal(values.length, 2, `operand group "${group.trim()}" must be a coordinate pair`);
      for (const value of values) assert.ok(Number.isFinite(Number(value)), 'coordinates must be finite');
    }
  }
});

test('each canonical component encloses a real silhouette', () => {
  const ids = ['upper-rear', 'upper-front', 'dot', 'lower'];
  const polygons = svgPaths(svg).map(vertices);
  const inside = (polygon, x, y) => {
    let hit = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  };

  const areas = polygons.map((polygon) => {
    let filled = 0;
    for (let y = 0; y < 532; y += 0.5) {
      for (let x = 0; x < 312; x += 0.5) if (inside(polygon, x + 0.25, y + 0.25)) filled++;
    }
    return filled * 0.25;
  });

  polygons.forEach((polygon, index) => {
    assert.ok(polygon.length >= 20, `component ${ids[index]} has only ${polygon.length} vertices`);
    assert.ok(areas[index] > 400, `component ${ids[index]} encloses only ${areas[index].toFixed(0)} square units, too thin to sample`);
  });

  // The circular node must stay a circle: a square bounding box whose area
  // matches pi r squared. A capsule or rounded-rectangle substitute fails here.
  const dot = polygons[2];
  const xs = dot.map(([x]) => x);
  const ys = dot.map(([, y]) => y);
  const width = Math.max(...xs) - Math.min(...xs);
  const height = Math.max(...ys) - Math.min(...ys);
  const aspect = width / height;
  assert.ok(Math.abs(aspect - 1) < 0.06, `the circular node must stay circular, got aspect ${aspect.toFixed(3)}`);
  const radius = (width + height) / 4;
  const disc = Math.PI * radius * radius;
  assert.ok(
    Math.abs(areas[2] - disc) / disc < 0.06,
    `the circular node must stay circular, got area ${areas[2].toFixed(0)} against a disc of ${disc.toFixed(0)}`,
  );
});
