import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { products } from '@/data/products';
import { pageMetadata } from '@/lib/metadata';
import { ProductFilter } from '@/components/ProductFilter';

export const metadata = pageMetadata('Products', 'Explore the named products within the KNOuX digital universe.', '/products');
export default function Products() { return <main id="main-content"><PageIntro index="01" label="Products" title="Distinct systems." italic="Shared intent." description="The KNOuX product universe. Public detail will grow as each technical dossier is verified." /><ProductFilter products={products} /><div className="page-outro"><p className="eyebrow">BEYOND THE PRODUCT</p><h2>See how the parts<br /><em>connect.</em></h2><Link className="button-primary" href="/engineering">ENGINEERING PRACTICE ↗</Link></div></main>; }
