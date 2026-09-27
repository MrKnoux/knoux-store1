'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
import { qualityEvent, type QualityTier } from '@/components/QualityControl';

const vertex = `
attribute float aSize; attribute float aGlow; attribute float aViolet; attribute vec3 aDestination;
uniform float uTime; uniform float uArrival; uniform float uTransition; uniform float uMotion;
uniform vec2 uPointer;
varying float vGlow; varying float vViolet;
void main() {
  vec3 source = position;
  float dist = distance(source.xy, uPointer);
  float force = exp(-dist * dist * 2.0) * uMotion * (1.0 - uTransition);
  vec2 delta = source.xy - uPointer;
  source.xy += delta * force * 0.10 + vec2(-delta.y, delta.x) * force * 0.065;
  source.z += force * 0.12;
  float drift = sin(uTime * 0.43 + aGlow * 9.0) * 0.018 * uMotion;
  source.xy += normalize(source.xy + vec2(0.01)) * drift;
  float spread = (1.0 - uArrival);
  vec3 arrival = source + vec3(sin(aGlow * 72.0) * spread * 1.3, cos(aGlow * 43.0) * spread * 1.2, spread * (1.5 + aGlow));
  vec3 p = mix(arrival, aDestination, smoothstep(0.0, 1.0, uTransition));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = aSize * (1.0 + aGlow * 0.65) * min(1.7, 5.5 / max(2.0, -gl_Position.z));
  vGlow = aGlow * uArrival; vViolet = aViolet;
}`;
const fragment = `
varying float vGlow; varying float vViolet;
void main() {
  float radial = length(gl_PointCoord - vec2(0.5));
  float alpha = 1.0 - smoothstep(0.16, 0.5, radial);
  vec3 silver = mix(vec3(0.50,0.54,0.61), vec3(1.0,0.98,0.96), vGlow);
  vec3 color = mix(silver, vec3(0.50,0.29,0.92), vViolet);
  gl_FragColor = vec4(color, alpha * (0.4 + vGlow * 0.6));
}`;
function rand(seed: number) { let n = seed | 0; n = (n ^ 61) ^ (n >>> 16); n = Math.imul(n, 9); n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); n ^= n >>> 15; return (n >>> 0) / 4294967296; }

function ParticleCloud({ budget, progress, reduced, pointer, onReady }: { budget: number; progress: number; reduced: boolean; pointer: React.RefObject<THREE.Vector2>; onReady: () => void; }) {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const material = useMemo(() => new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, uniforms: { uTime: { value: 0 }, uArrival: { value: reduced ? 1 : 0 }, uTransition: { value: 0 }, uMotion: { value: reduced ? 0 : 1 }, uPointer: { value: new THREE.Vector2(100, 100) } } }), [reduced]);
  useEffect(() => {
    let mounted = true;
    const image = new window.Image();
    image.src = '/knoux-mark-mask.png';
    image.onload = () => {
      if (!mounted) return;
      const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
      const ctx = canvas.getContext('2d', { willReadFrequently: true }); if (!ctx) return;
      ctx.drawImage(image, 0, 0);
      const pixels = ctx.getImageData(0, 0, image.width, image.height).data;
      const coords: number[] = []; const destinations: number[] = []; const sizes: number[] = []; const glows: number[] = []; const violets: number[] = [];
      let attempts = 0, index = 0;
      while (index < budget && attempts < budget * 9) {
        const x = Math.floor(rand(attempts * 2 + 37) * image.width); const y = Math.floor(rand(attempts * 2 + 38) * image.height); attempts++;
        const alpha = pixels[(y * image.width + x) * 4 + 3]; if (alpha < 150) continue;
        const edge = [x - 3, x + 3, x].some((xx, k) => { const yy = k === 2 ? y + 3 : y; return xx < 0 || xx >= image.width || yy >= image.height || pixels[(yy * image.width + xx) * 4 + 3] < 130; });
        if (!edge && rand(index * 11 + 12) > 0.50) continue;
        const r = rand(index * 31 + 7), group = index % 4;
        const sx = (x / image.width - 0.5) * 5.45, sy = (0.5 - y / image.height) * 5.45;
        coords.push(sx, sy, (r - 0.5) * 0.18);
        const isNode = x > image.width * 0.60 && y > image.height * 0.39 && y < image.height * 0.65;
        const angle = r * 6.283185;
        if (isNode) destinations.push(Math.cos(angle) * (0.36 + rand(index * 71) * 0.06), Math.sin(angle) * (0.36 + rand(index * 73) * 0.06), (r - 0.5) * 0.15);
        else destinations.push((group % 2 ? 1 : -1) * 1.68 + Math.cos(angle) * rand(index * 17) * 0.25, (group > 1 ? -1 : 1) * 0.95 + Math.sin(angle) * rand(index * 19) * 0.25, (r - 0.5) * 0.3);
        sizes.push(edge ? 2.4 + r * 1.9 : 1.4 + r * 1.8); glows.push(edge ? 0.65 + r * 0.35 : 0.32 + r * 0.52); violets.push(rand(index * 41) > 0.955 ? 0.72 : 0); index++;
      }
      const next = new THREE.BufferGeometry(); next.setAttribute('position', new THREE.Float32BufferAttribute(coords, 3)); next.setAttribute('aDestination', new THREE.Float32BufferAttribute(destinations, 3)); next.setAttribute('aSize', new THREE.Float32BufferAttribute(sizes, 1)); next.setAttribute('aGlow', new THREE.Float32BufferAttribute(glows, 1)); next.setAttribute('aViolet', new THREE.Float32BufferAttribute(violets, 1));
      setGeometry(next); onReady();
    };
    return () => { mounted = false; image.onload = null; };
  }, [budget, onReady]);
  useEffect(() => () => { geometry?.dispose(); }, [geometry]);
  useEffect(() => () => { material.dispose(); }, [material]);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  useFrame((state, delta) => {
    const uniforms = materialRef.current?.uniforms; if (!uniforms) return;
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uArrival.value = THREE.MathUtils.damp(uniforms.uArrival.value, 1, reduced ? 50 : 1.1, delta);
    uniforms.uTransition.value = THREE.MathUtils.damp(uniforms.uTransition.value, progress, 2.5, delta);
    uniforms.uPointer.value.lerp(pointer.current ?? new THREE.Vector2(100, 100), 0.08);
  });
  return geometry ? <points geometry={geometry} frustumCulled={false}><primitive ref={materialRef} object={material} attach="material" /></points> : null;
}

export function LivingParticleMark({ progress = 0 }: { progress?: number }) {
  const host = useRef<HTMLDivElement>(null);
  const pointer = useRef(new THREE.Vector2(100, 100));
  const [quality, setQuality] = useState<QualityTier>('auto');
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const [supported, setSupported] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const markReady = useCallback(() => setReady(true), []);
  useEffect(() => {
    const timer = window.setTimeout(() => { try { const test = document.createElement('canvas'); setSupported(Boolean(test.getContext('webgl2') || test.getContext('webgl'))); } catch { setSupported(false); } const saved = localStorage.getItem('knoux-quality'); if (saved && ['auto','high','balanced','low'].includes(saved)) setQuality(saved as QualityTier); }, 0);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const sync = () => setReduced(media.matches); media.addEventListener('change', sync);
    const motionTimer = window.setTimeout(sync, 0);
    const update = (event: Event) => setQuality((event as CustomEvent<QualityTier>).detail);
    const onVisibility = () => setVisible(!document.hidden);
    const observer = new IntersectionObserver((entries) => setVisible(entries[0]?.isIntersecting && !document.hidden), { threshold: 0.01 });
    if (host.current) observer.observe(host.current);
    window.addEventListener(qualityEvent, update); document.addEventListener('visibilitychange', onVisibility);
    return () => { window.clearTimeout(timer); window.clearTimeout(motionTimer); media.removeEventListener('change', sync); observer.disconnect(); window.removeEventListener(qualityEvent, update); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);
  const tier = quality === 'auto' ? (typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4 ? 'low' : 'balanced') : quality;
  const budget = reduced ? 4200 : tier === 'high' ? 24000 : tier === 'balanced' ? 14000 : 6200;
  const move = useCallback((event: React.PointerEvent<HTMLDivElement>) => { const bounds = event.currentTarget.getBoundingClientRect(); pointer.current.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 6, (0.5 - (event.clientY - bounds.top) / bounds.height) * 6); }, []);
  return <div ref={host} className="mark-stage" aria-label="KNOuX particle mark" role="img" onPointerMove={move} onPointerLeave={() => pointer.current.set(100, 100)}>
    <Image src="/knoux-mark-mask.png" alt="" width={1254} height={1254} priority className={`mark-static ${ready && supported && !reduced ? 'is-hidden' : ''}`} />
    {supported && !reduced && <Canvas className="mark-canvas" orthographic camera={{ position: [0, 0, 10], zoom: 105, near: 0.1, far: 100 }} dpr={tier === 'high' ? [1, 1.75] : [1, 1.25]} frameloop={visible ? 'always' : 'never'} gl={{ antialias: tier !== 'low', alpha: true, powerPreference: tier === 'low' ? 'low-power' : 'high-performance' }} ><ParticleCloud budget={budget} progress={progress} reduced={reduced} pointer={pointer} onReady={markReady} /></Canvas>}
  </div>;
}
