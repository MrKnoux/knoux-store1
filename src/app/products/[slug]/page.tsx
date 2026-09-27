import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findProduct, products } from '@/data/products';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = findProduct(slug); return product ? pageMetadata(product.name, product.statement, `/products/${slug}`) : {}; }
export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = findProduct(slug); if (!product) notFound();
  const next = products[(products.findIndex((p) => p.id === product.id) + 1) % products.length];
  return <main id="main-content" className="product-detail"><div className="page-crumb"><Link href="/">KNOuX</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.name}</span></div><section className="detail-hero"><p className="eyebrow">PRODUCT {product.index} / {product.discipline.toUpperCase()}</p><h1>{product.name}</h1><div className="detail-visual"><span className="detail-geometry" aria-hidden="true" /><span className="detail-index">K / {product.index}</span><span className="detail-caption">A KNOuX PRODUCT</span></div></section><section className="detail-content section-shell"><p className="eyebrow">THE DOSSIER</p><div><h2>Made with<br /><em>intention.</em></h2><p>{product.statement}</p><p>We are publishing verified product information as it becomes available. No screenshots, capabilities or release claims are shown without a confirmed source.</p>{product.repositoryUrl && <a className="text-link" href={product.repositoryUrl} target="_blank" rel="noopener noreferrer">VIEW REPOSITORY ↗</a>}</div></section><section className="detail-next section-shell"><p className="eyebrow">CONTINUE EXPLORING</p><Link href={`/products/${next.slug}`}>{next.name}<span aria-hidden="true">↗</span></Link></section></main>;
}
