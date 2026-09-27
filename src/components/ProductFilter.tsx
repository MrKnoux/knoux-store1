'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/data/products';

export function ProductFilter({ products }: { products: readonly Product[] }) {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(products.map((p) => p.discipline))];
  const list = category === 'All' ? products : products.filter((p) => p.discipline === category);
  return <section className="product-index section-shell" aria-label="Product directory"><div className="filter-bar"><span>INDEX / {String(list.length).padStart(2, '0')}</span><div role="group" aria-label="Filter products">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div className="product-grid">{list.map((p) => <Link className="product-card" key={p.id} href={`/products/${p.slug}`}><div className="product-art"><span className="product-orbit" aria-hidden="true" /><span className="product-card-index">K / {p.index}</span><span className="product-card-arrow" aria-hidden="true">↗</span></div><div className="product-card-copy"><span>{p.discipline.toUpperCase()}</span><h2>{p.name}</h2><p>{p.statement}</p></div></Link>)}</div></section>;
}
