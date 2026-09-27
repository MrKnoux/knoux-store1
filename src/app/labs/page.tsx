import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Labs', 'An open space for KNOuX research and experiments as they are verified.', '/labs');
export default function Labs() { return <main id="main-content"><PageIntro index="03" label="Labs" title="Curiosity is" italic="a working method." description="Research, prototypes and experiments will appear here when there is actual work to share." /><section className="editorial-blank section-shell"><p className="eyebrow">THE LAB / CURRENT STATE</p><div><h2>A space for<br /><em>the unfinished.</em></h2><p>There are no published experiments in this directory yet. We would rather show an honest empty space than invent a demonstration.</p><Link href="/engineering" className="text-link">SEE THE ENGINEERING PRACTICE ↗</Link></div><span className="large-index">L / 00</span></section></main>; }
