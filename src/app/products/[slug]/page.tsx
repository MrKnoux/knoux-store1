import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findProduct, products } from '@/data/products';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  return product
    ? pageMetadata(
        `${product.name} — Technical Dossier`,
        `${product.name} (${product.discipline}): ${product.tagline}. Verified architecture, capabilities, and platform telemetry.`,
        `/products/${slug}`,
      )
    : {};
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((p) => p.id === product.id);
  const nextProduct = products[(currentIndex + 1) % products.length];
  const relatedSystems = product.relatedProducts
    .map((s) => findProduct(s))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <main id="main-content" className="product-detail">
      {/* Breadcrumb Navigation */}
      <div className="page-crumb">
        <Link href="/">KNOuX</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Product Universe</Link>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </div>

      {/* Hero Dossier Header */}
      <section className="detail-hero" aria-label="Product Identity">
        <div className="detail-hero-meta">
          <span className="eyebrow">
            SYSTEM K / {product.index} • {product.discipline.toUpperCase()} • VECTOR {product.topology.vector}
          </span>
          <span className={`status-pill status-${product.status}`}>
            {product.status.replace('-', ' ').toUpperCase()}
          </span>
        </div>

        <h1 className="detail-title">{product.name}</h1>
        <p className="detail-tagline">{product.tagline}</p>

        {/* Technical Telemetry Strip */}
        <div className="telemetry-strip" role="group" aria-label="System telemetry">
          <div className="telemetry-col">
            <span className="telemetry-label">DISCIPLINE</span>
            <span className="telemetry-value">{product.discipline}</span>
          </div>
          <div className="telemetry-col">
            <span className="telemetry-label">FAMILY</span>
            <span className="telemetry-value">{product.family}</span>
          </div>
          <div className="telemetry-col">
            <span className="telemetry-label">PRIMARY PLATFORM</span>
            <span className="telemetry-value">{product.platforms[0]}</span>
          </div>
          {product.version && (
            <div className="telemetry-col">
              <span className="telemetry-label">VERSION</span>
              <span className="telemetry-value">v{product.version}</span>
            </div>
          )}
        </div>
      </section>

      {/* System Dossier Content */}
      <section className="detail-content section-shell" aria-label="Technical dossier specifications">
        <div className="dossier-grid">
          {/* Column 1: System Definition & Capabilities */}
          <div className="dossier-main">
            <div className="dossier-block">
              <p className="eyebrow">WHAT IT IS</p>
              <h2>System Architecture & Intent</h2>
              <p className="dossier-statement">{product.statement}</p>
              {product.architecture && (
                <div className="architecture-box">
                  <span className="box-label">ARCHITECTURAL DESIGN</span>
                  <p>{product.architecture}</p>
                </div>
              )}
            </div>

            <div className="dossier-block">
              <p className="eyebrow">VERIFIED CAPABILITIES</p>
              <ul className="capabilities-list">
                {product.capabilities.map((capability, index) => (
                  <li key={index}>
                    <span className="capability-bullet" aria-hidden="true">◈</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Technical Specifications & Repositories */}
          <div className="dossier-sidebar">
            {/* Authentic Media if available */}
            {product.heroAsset && (
              <div className="dossier-card media-card">
                <span className="card-label">VERIFIED REPOSITORY ASSET</span>
                <div className="asset-frame">
                  <Image
                    src={product.heroAsset}
                    alt={`${product.name} canonical visual artifact`}
                    className="verified-media-img"
                    width={200}
                    height={200}
                    unoptimized
                  />
                </div>
                <span className="asset-caption">Source: daynightae-cmyk repository</span>
              </div>
            )}

            <div className="dossier-card">
              <span className="card-label">TECHNOLOGY MATRIX</span>
              <div className="tech-tags">
                {product.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="dossier-card">
              <span className="card-label">SUPPORTED PLATFORMS</span>
              <ul className="platform-list">
                {product.platforms.map((platform, i) => (
                  <li key={i}>{platform}</li>
                ))}
              </ul>
            </div>

            <div className="dossier-card action-card">
              <span className="card-label">ACCESS & SOURCE</span>
              <div className="action-links">
                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    LAUNCH PUBLIC DEPLOYMENT ↗
                  </a>
                )}
                <a
                  href={product.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-text"
                >
                  SOURCE REPOSITORY ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Systems in Universe */}
      {relatedSystems.length > 0 && (
        <section className="detail-related section-shell" aria-label="Related systems in topology">
          <p className="eyebrow">TOPOLOGICAL CONNECTIONS</p>
          <h2>Related Systems</h2>
          <div className="related-grid">
            {relatedSystems.map((related) => (
              <Link key={related.id} href={`/products/${related.slug}`} className="related-card">
                <div className="related-top">
                  <span className="related-index">K / {related.index}</span>
                  <span className="related-discipline">{related.discipline}</span>
                </div>
                <h3 className="related-name">{related.name}</h3>
                <p className="related-tagline">{related.tagline}</p>
                <span className="related-link">EXPLORE DOSSIER ↗</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Next System in Constellation */}
      <section className="detail-next section-shell" aria-label="Next system in sequence">
        <p className="eyebrow">NEXT IN TOPOLOGY</p>
        <Link href={`/products/${nextProduct.slug}`} className="next-link">
          <span className="next-name">{nextProduct.name}</span>
          <span className="next-arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
