'use client';

import { useEffect, useState } from 'react';

export type QualityTier = 'auto' | 'high' | 'balanced' | 'low';
export const qualityEvent = 'knoux-quality-change';

export function QualityControl() {
  const [tier, setTier] = useState<QualityTier>('auto');
  useEffect(() => { const timer = window.setTimeout(() => { const saved = localStorage.getItem('knoux-quality'); if (saved && ['auto','high','balanced','low'].includes(saved)) setTier(saved as QualityTier); }, 0); return () => window.clearTimeout(timer); }, []);
  return <label className="quality-control">EXPERIENCE <select aria-label="Particle quality" value={tier} onChange={(event) => { const next = event.target.value as QualityTier; setTier(next); localStorage.setItem('knoux-quality', next); window.dispatchEvent(new CustomEvent(qualityEvent, { detail: next })); }}><option value="auto">AUTO</option><option value="high">HIGH</option><option value="balanced">BALANCED</option><option value="low">LOW</option></select></label>;
}
