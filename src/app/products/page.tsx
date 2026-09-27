import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { ProductUniverse } from '@/components/ProductUniverse';
import { products } from '@/data/products';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'Products',
  'The KNOuX Product Universe: an engineered computational topology of verified systems, developer tools, and desktop platforms.',
  '/products',
);

export default function ProductsPage() {
  return (
    <main id="main-content">
      <PageIntro
        index="01"
        label="Product Universe"
        title="Engineered systems."
        italic="Computational topology."
        description="The KNOuX Product Universe. Navigate the verified digital ecosystem of local-first tools, media engines, and system intelligence platforms."
      />

      <ProductUniverse products={products} />

      <div className="page-outro">
        <p className="eyebrow">BEYOND THE PRODUCT</p>
        <h2>
          See how the parts<br />
          <em>connect.</em>
        </h2>
        <Link className="button-primary" href="/engineering">
          ENGINEERING PRACTICE ↗
        </Link>
      </div>
    </main>
  );
}
