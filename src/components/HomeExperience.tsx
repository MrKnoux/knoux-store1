'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { QualityControl } from '@/components/QualityControl';

const LivingParticleMark = dynamic(() => import('@/components/three/LivingParticleMark').then((m) => m.LivingParticleMark), { ssr: false, loading: () => <div className="mark-stage" aria-hidden="true" /> });

export function HomeExperience() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => setProgress(Math.max(0, Math.min(1, (window.scrollY - window.innerHeight * 0.08) / (window.innerHeight * 0.9))));
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <main id="main-content">
    <section className="arrival-rail" aria-label="KNOuX introduction"><div className="arrival-sticky">
      <div className="arrival-meta"><span>KN / HQ — 001</span><span>DIGITAL HEADQUARTERS</span><span className="meta-desktop">SCROLL TO EXPLORE ↓</span></div>
      <div className="arrival-visual"><div className="starfield" aria-hidden="true" /><LivingParticleMark progress={progress} /></div>
      <div className={`arrival-copy ${progress > 0.45 ? 'is-shifting' : ''}`}><p className="eyebrow"><span className="pulse-dot" /> ENGINEERING DIGITAL SYSTEMS</p><h1>KNOuX<span className="period">.</span></h1><p className="arrival-description">Products and systems shaped with intent.<br />A digital institution built to keep evolving.</p><div className="arrival-actions"><Link href="/products" className="button-primary">EXPLORE OUR PRODUCTS <span aria-hidden="true">↗</span></Link><Link href="/about" className="button-text">THE INSTITUTION <span aria-hidden="true">↗</span></Link></div></div>
      <div className="arrival-bottom"><span>INDEPENDENT DIGITAL ENGINEERING</span><QualityControl /><span className="arrival-coordinates">01 / 04 — UNIVERSE</span></div>
    </div></section>
    <section id="universe" className="universe-section section-shell"><div className="universe-intro"><p className="eyebrow">01 / THE SYSTEM</p><h2>One origin.<br /><em>Many directions.</em></h2><p>The KNOuX identity extends into distinct products. Explore the systems currently named within the KNOuX universe.</p></div><div className="universe-chart" aria-label="KNOuX Core with four product paths"><div className="core-line vertical" /><div className="core-line horizontal" /><div className="core-center"><span className="core-ring" /><span className="core-name">KNOuX<br /><small>CORE</small></span></div>{products.map((p, i) => <Link className={`orbit-node node-${i + 1}`} href={`/products/${p.slug}`} key={p.slug}><span className="node-index">{p.index} / {p.discipline}</span><strong>{p.name}</strong><span aria-hidden="true">↗</span></Link>)}</div><div className="universe-foot"><span>FOUR IDENTITIES / ONE ENGINEERING PRACTICE</span><Link href="/products">VIEW ALL PRODUCTS ↗</Link></div></section>
    <section className="featured-section section-shell"><div className="featured-heading"><p className="eyebrow">02 / PRODUCT UNIVERSE</p><h2>Built to have<br /><em>a purpose.</em></h2></div><div className="featured-list">{products.map((p) => <Link href={`/products/${p.slug}`} className="featured-row" key={p.id}><span className="row-index">{p.index}</span><span className="row-title">{p.name}</span><span className="row-kind">{p.discipline}</span><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="manifesto-section section-shell"><p className="eyebrow">03 / ENGINEERING</p><div><h2>Design is a decision.<br /><em>Engineering is the proof.</em></h2><p>We treat interfaces, runtime behavior and the systems beneath them as parts of one experience. What is public here is grounded in work we can identify.</p><Link href="/engineering" className="text-link">EXPLORE OUR APPROACH <span aria-hidden="true">↗</span></Link></div><span className="manifesto-glyph" aria-hidden="true">⌘</span></section>
    <section className="three-column section-shell"><Link href="/labs"><span className="eyebrow">04 / LABS</span><h3>Questions worth<br />testing.</h3><span className="column-arrow" aria-hidden="true">↗</span></Link><Link href="/work"><span className="eyebrow">05 / WORK</span><h3>Systems worth<br />understanding.</h3><span className="column-arrow" aria-hidden="true">↗</span></Link><Link href="/about"><span className="eyebrow">06 / INSTITUTION</span><h3>A practice built<br />with intention.</h3><span className="column-arrow" aria-hidden="true">↗</span></Link></section>
  </main>;
}
