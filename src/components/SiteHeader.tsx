'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation, searchable } from '@/data/navigation';

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [palette, setPalette] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const results = searchable.filter((item) => `${item.label} ${item.description}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setPalette((current) => !current);
      }
      if (event.key === 'Escape') { setPalette(false); setMenu(false); }
    };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);

  useEffect(() => { if (palette) input.current?.focus(); else launcher.current?.focus(); }, [palette]);

  const navigate = (href: string) => { setPalette(false); setQuery(''); router.push(href); };

  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link href="/" className="brand" aria-label="KNOuX home"><span className="brand-dot" aria-hidden="true" />KNOuX<span className="brand-end">®</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link aria-current={pathname === item.href ? 'page' : undefined} key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <div className="header-actions"><button className="header-search" ref={launcher} onClick={() => setPalette(true)} aria-label="Search the site"><span>SEARCH</span><kbd>⌘ K</kbd></button><button className="mobile-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? 'CLOSE' : 'MENU'}<span aria-hidden="true">{menu ? '×' : '+'}</span></button></div>
    </header>
    {menu && <nav className="mobile-panel" aria-label="Mobile navigation">{navigation.map((item, i) => <Link key={item.href} href={item.href} onClick={() => setMenu(false)}><span>0{i + 1}</span>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>}
    {palette && <div className="search-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setPalette(false); }}>
      <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Search and navigate" onKeyDown={(event) => {
        if (event.key === 'ArrowDown') { event.preventDefault(); setSelected((selected + 1) % Math.max(results.length, 1)); }
        if (event.key === 'ArrowUp') { event.preventDefault(); setSelected((selected - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1)); }
        if (event.key === 'Enter' && results[selected]) { event.preventDefault(); navigate(results[selected].href); }
        if (event.key === 'Tab') { const focusable = event.currentTarget.querySelectorAll<HTMLElement>('input,button,[href]'); const first = focusable[0], last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }
      }}>
        <div className="search-field"><span aria-hidden="true">⌕</span><input ref={input} value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} placeholder="Search the KNOuX universe" aria-label="Search pages and products" aria-controls="search-results" /><button onClick={() => setPalette(false)} aria-label="Close search">ESC</button></div>
        <div id="search-results" role="listbox" aria-label="Search results">{results.length ? results.map((item, index) => <button role="option" aria-selected={index === selected} className={index === selected ? 'selected' : ''} key={item.href} onMouseEnter={() => setSelected(index)} onClick={() => navigate(item.href)}><span><strong>{item.label}</strong><small>{item.description}</small></span><span aria-hidden="true">↗</span></button>) : <p className="empty-search">No matching page. Try a product name.</p>}</div>
        <div className="search-footer">↑↓ NAVIGATE <span>↵ OPEN</span> <span>ESC CLOSE</span></div>
      </div>
    </div>}
  </>;
}
