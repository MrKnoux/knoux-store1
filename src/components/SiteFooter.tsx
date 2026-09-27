import Link from 'next/link';
import { navigation } from '@/data/navigation';

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><p className="eyebrow">THE WORK CONTINUES</p><Link href="/contact" className="footer-title">Let&apos;s make<br /><em>what comes next.</em><span aria-hidden="true">↗</span></Link></div><div className="footer-bottom"><Link href="/" className="footer-logo">KNOuX<span>®</span></Link><nav aria-label="Footer navigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><span>ENGINEERING DIGITAL SYSTEMS</span></div></footer>;
}
