'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

type SignalState = 'IDLE' | 'INPUT' | 'READY' | 'SUBMITTING' | 'SEARCHING' | 'NOT_FOUND' | 'ERROR';
const PARTICLES = Array.from({ length: 120 }, (_, index) => ({
  id: index,
  x: ((index * 37) % 101) - 50,
  y: ((index * 61) % 101) - 50,
  size: 1 + ((index * 17) % 4),
  delay: -((index * 29) % 18) / 10,
}));

function statusCopy(state: SignalState) {
  if (state === 'SEARCHING' || state === 'SUBMITTING') return 'Resolving evidence';
  if (state === 'NOT_FOUND') return 'No supported identity evidence found.';
  if (state === 'ERROR') return 'Lookup service is not configured in this deployment.';
  if (state === 'READY') return 'Number ready to resolve';
  return 'Phone intelligence / where to search';
}

export function SignalExperience({ lookup = false }: { lookup?: boolean }) {
  const [value, setValue] = useState('');
  const [state, setState] = useState<SignalState>('IDLE');
  const abortRef = useRef<AbortController | null>(null);
  const valid = useMemo(() => /^\+?[\d\s().-]{7,}$/.test(value.trim()) && value.replace(/\D/g, '').length >= 7, [value]);
  useEffect(() => () => abortRef.current?.abort(), []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!valid || state === 'SEARCHING') return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setState('SUBMITTING');
    try {
      setState('SEARCHING');
      const response = await fetch('/api/signal/lookup', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ phone: value.trim() }), signal: controller.signal });
      if (response.status === 404) { setState('ERROR'); return; }
      if (!response.ok) { setState('ERROR'); return; }
      // This branch intentionally does not invent an evidence graph. The repository has no lookup contract to safely decode.
      setState('NOT_FOUND');
    } catch (error) {
      if ((error as Error).name !== 'AbortError') setState('ERROR');
    }
  }
  function reset() { abortRef.current?.abort(); setValue(''); setState('IDLE'); }

  return <section className={`signal-experience signal-state--${state.toLowerCase()}`} aria-labelledby="signal-title">
    <div className="signal-experience__meta"><span>KNOuX SIGNAL</span><span>{lookup ? 'LOOKUP INSTRUMENT' : 'PHONE INTELLIGENCE'}</span></div>
    <div className="signal-field-visual" aria-hidden="true"><div className="signal-orbit signal-orbit--one"/><div className="signal-orbit signal-orbit--two"/>
      {PARTICLES.map((particle) => <i key={particle.id} className="signal-particle" style={{ '--x': `${particle.x}%`, '--y': `${particle.y}%`, '--s': particle.size, '--d': `${particle.delay}s` } as React.CSSProperties}/>)}</div>
    <div className="signal-instrument">
      <p className="label label--signal">{statusCopy(state)}</p>
      <h1 id="signal-title">Search a number.</h1>
      <form onSubmit={submit} className="signal-query" data-ready={valid}>
        <label htmlFor="signal-phone" className="sr-only">Phone number to resolve</label>
        <span aria-hidden="true">⌁</span>
        <input id="signal-phone" dir="ltr" inputMode="tel" autoComplete="tel" value={value} onFocus={() => setState(value ? (valid ? 'READY' : 'INPUT') : 'INPUT')} onChange={(event) => { setValue(event.target.value); setState(event.target.value ? (/^\+?[\d\s().-]{7,}$/.test(event.target.value) && event.target.value.replace(/\D/g, '').length >= 7 ? 'READY' : 'INPUT') : 'IDLE'); }} placeholder="Search a phone number" disabled={state === 'SEARCHING'} />
        {value ? <button className="signal-query__clear" type="button" onClick={reset} aria-label="Clear number">×</button> : null}
        <button type="submit" disabled={!valid || state === 'SEARCHING'} aria-label="Resolve number">{state === 'SEARCHING' ? '· · ·' : '→'}</button>
      </form>
      <p className="signal-status" aria-live="polite">{statusCopy(state)}</p>
      {state === 'NOT_FOUND' ? <p className="signal-outcome">The field remains open for a new search. Signal does not infer an identity where no supported evidence is returned.</p> : null}
      {state === 'ERROR' ? <p className="signal-outcome">The configured lookup endpoint was not found. Your number remains here; retry after the service is available.</p> : null}
      {(state === 'NOT_FOUND' || state === 'ERROR') && <button type="button" className="signal-reset" onClick={reset}>New search</button>}
    </div>
    <div className="signal-experience__foot"><span>EXPLICIT SUBMIT / NO BACKGROUND LOOKUPS</span><Link href="/signal/claim">Verify this number ↗</Link></div>
  </section>;
}
