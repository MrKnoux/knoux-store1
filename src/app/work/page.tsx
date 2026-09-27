import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Work', 'KNOuX case studies will be published with verified evidence.', '/work');
export default function Work() { return <main id="main-content"><PageIntro index="04" label="Work" title="The work" italic="speaks precisely." description="A home for documented systems, real decisions and outcomes that can be checked." /><section className="editorial-blank section-shell"><p className="eyebrow">CASE STUDIES / CURRENT STATE</p><div><h2>Evidence<br /><em>before claims.</em></h2><p>No case studies have been published here yet. Product identities can be explored while their public documentation is prepared.</p><Link href="/products" className="text-link">VIEW PRODUCTS ↗</Link></div><span className="large-index">W / 00</span></section></main>; }
