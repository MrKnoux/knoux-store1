import Link from 'next/link';

export function PageIntro({ index, label, title, italic, description }: { index: string; label: string; title: string; italic: string; description: string }) {
  return <section className="page-intro"><div className="page-crumb"><Link href="/">KNOuX</Link><span>/</span><span>{label}</span></div><div className="page-intro-body"><div><p className="eyebrow">{index} / {label.toUpperCase()}</p><h1>{title}<br /><em>{italic}</em></h1></div><p>{description}</p></div><div className="page-rule"><span>SCROLL TO DISCOVER</span><span aria-hidden="true">↓</span></div></section>;
}
