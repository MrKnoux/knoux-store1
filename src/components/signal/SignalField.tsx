'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type FieldMode = 'IDLE' | 'INPUT' | 'READY' | 'SUBMITTING' | 'SEARCHING' | 'NOT_FOUND' | 'ERROR';
function seeded(index: number) { return ((index * 9301 + 49297) % 233280) / 233280; }
function Points({ mode, pulse }: { mode: FieldMode; pulse: number }) {
  const ref = useRef<THREE.Points>(null);
  const [hidden, setHidden] = useState(false);
  const geometry = useMemo(() => {
    const positions = new Float32Array(1050 * 3);
    for (let i = 0; i < 1050; i += 1) {
      const u = seeded(i), v = seeded(i + 1100), r = Math.cbrt(seeded(i + 2200)) * 2.5;
      const theta = 2 * Math.PI * u, phi = Math.acos(2 * v - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const value = new THREE.BufferGeometry(); value.setAttribute('position', new THREE.BufferAttribute(positions, 3)); return value;
  }, []);
  useEffect(() => { const handler = () => setHidden(document.hidden); handler(); document.addEventListener('visibilitychange', handler); return () => document.removeEventListener('visibilitychange', handler); }, []);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame(({ clock }) => {
    if (!ref.current || hidden) return;
    const t = clock.getElapsedTime(); const active = mode === 'SEARCHING' || mode === 'SUBMITTING';
    ref.current.rotation.y = t * (active ? .19 : .035);
    ref.current.rotation.x = Math.sin(t * .13) * .075;
    const pulseLift = Math.max(0, 1 - (t - pulse * .001) * 4) * .04;
    ref.current.scale.setScalar((active ? .9 : 1) + pulseLift);
  });
  return <points ref={ref} geometry={geometry}><pointsMaterial color={mode === 'READY' ? '#c2b5d8' : '#d8d1dd'} size={.026} sizeAttenuation transparent opacity={mode === 'NOT_FOUND' || mode === 'ERROR' ? .22 : .72} depthWrite={false}/></points>;
}
/** One bounded WebGL renderer for the immersive Signal routes. It is enhancement-only: inputs/status remain semantic DOM. */
export function SignalField({ mode, pulse }: { mode: FieldMode; pulse: number }) {
  return <div className="signal-webgl" aria-hidden="true"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 38 }} gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}><Points mode={mode} pulse={pulse}/></Canvas></div>;
}
