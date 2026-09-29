import Link from 'next/link';
import { Breadcrumb } from '@/components/DivisionShell';
import { signalPrimaryRoutes, signalRouteFor } from '@/data/signal';

export function SignalRail({ path }: { path: string }) {
  return <><Breadcrumb path={path}/><nav className="signal-local-nav" aria-label="Signal navigation"><div className="shell">{signalPrimaryRoutes.map((route) => <Link key={route.href} href={route.href} aria-current={path === route.href ? 'page' : undefined}><small>{route.code}</small>{route.label}</Link>)}</div></nav></>;
}
export function SignalManagement({ path, title, children }: { path: string; title: string; children: React.ReactNode }) {
  const route = signalRouteFor(path);
  return <main id="main-content"><SignalRail path={path}/><section className="shell signal-management"><header><span className="label label--signal">KNOuX SIGNAL / {route?.code ?? 'SG'}</span><h1>{title}</h1><p>{route?.description}</p></header><div className="signal-management__body">{children}</div></section></main>;
}
export function SignalUnavailable({ noun = 'data' }: { noun?: string }) { return <div className="signal-empty"><span className="signal-empty__mark" aria-hidden="true">⌁</span><p className="label">LIVE {noun.toUpperCase()}</p><h2>No {noun} is available.</h2><p>This surface does not publish placeholder records. Connect an authorised Signal backend to display returned {noun}.</p></div>; }
