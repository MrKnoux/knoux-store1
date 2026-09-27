import Link from 'next/link';

export default function NotFound() { return <main className="not-found" id="main-content"><p className="eyebrow">SYSTEM / 404</p><h1>Lost in the<br /><em>universe?</em></h1><p>That page does not exist here.</p><Link href="/" className="button-primary">RETURN TO KNOuX ↗</Link></main>; }
