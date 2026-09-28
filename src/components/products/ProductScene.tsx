'use client';

import { useEffect, useRef, useState } from 'react';
import { SystemNucleusScene } from './SystemNucleusScene';
import { RepositoryTopologyScene } from './RepositoryTopologyScene';
import { DiagnosticRingsScene } from './DiagnosticRingsScene';
import { FileClustersScene } from './FileClustersScene';
import { CaptureTimelineScene } from './CaptureTimelineScene';
import { MediaSpectrumScene } from './MediaSpectrumScene';
import { GuardedClipboardScene } from './GuardedClipboardScene';
import { visualProfileFor, resolveProductLogo } from '@/data/product-visuals';
import type { SoftwareProduct } from '@/data/software';
import type { ProductVisualMotif } from '@/data/product-visuals';

interface ProductSceneProps {
  product: SoftwareProduct;
  className?: string;
  /** Height in CSS pixels */
  height?: number;
}

export function ProductScene({ product, className, height = 400 }: ProductSceneProps) {
  const profile = visualProfileFor(product.slug);
  const motif = profile?.motif ?? 'system-nucleus';
  const seedRef = useRef(slugToSeed(product.slug));
  const [reduced, setReduced] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(pointer: fine)');
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia('(pointer: fine)');
    if (!fine.matches) return;

    const onMove = (e: PointerEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      setPointer({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    };

    const onLeave = () => {
      setPointer({ x: 0, y: 0, active: false });
    };

    const canvas = canvasRef.current;
    canvas?.addEventListener('pointermove', onMove);
    canvas?.addEventListener('pointerleave', onLeave);
    return () => {
      canvas?.removeEventListener('pointermove', onMove);
      canvas?.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced]);

  const SceneComponent = getSceneComponent(motif);

  return (
    <div
      ref={canvasRef}
      className={`product-scene ${className ?? ''}`}
      style={{ height, width: '100%' }}
      aria-hidden="true"
      data-motif={motif}
    >
      <SceneComponent
        seed={seedRef.current}
        reduced={reduced}
        pointer={pointer}
        className="product-scene__canvas"
      />
    </div>
  );
}

function slugToSeed(slug: string): number {
  let hash = 0x4b4e4f58;
  for (let i = 0; i < slug.length; i++) {
    hash = Math.imul(hash ^ slug.charCodeAt(i), 0x51ed);
  }
  return hash >>> 0;
}

function getSceneComponent(motif: ProductVisualMotif) {
  switch (motif) {
    case 'system-nucleus':
      return SystemNucleusScene;
    case 'repository-topology':
      return RepositoryTopologyScene;
    case 'diagnostic-rings':
      return DiagnosticRingsScene;
    case 'file-clusters':
      return FileClustersScene;
    case 'capture-timeline':
      return CaptureTimelineScene;
    case 'media-spectrum':
      return MediaSpectrumScene;
    case 'guarded-clipboard':
      return GuardedClipboardScene;
    default:
      return SystemNucleusScene;
  }
}